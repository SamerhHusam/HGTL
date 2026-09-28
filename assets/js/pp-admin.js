(function () {
  "use strict";
  var P = window.PP;
  var gate = document.getElementById("adminGate");
  var panel = document.getElementById("adminPanel");
  var msg = document.getElementById("adminMessage");
  var members = [];
  var memberPortalUrl = "https://www.hgtl.org/pp-account.html";
  if (!P.ready) return P.message(msg, "يلزم ربط إعدادات Supabase أولًا.", "error");

  async function loadMembers() {
    var result = await P.client.from("pp_members").select("id,user_id,member_number,full_name,phone,total_points,created_at").order("created_at", { ascending: false });
    if (result.error) return P.message(msg, "لا تملك صلاحية الوصول أو تعذر تحميل الأعضاء.", "error");
    members = result.data || [];
    render(members);
    document.getElementById("memberCount").textContent = members.length.toLocaleString("ar-SA");
    document.getElementById("pointsCount").textContent = members.reduce(function (s, x) { return s + x.total_points; }, 0).toLocaleString("ar-SA");
  }
  function render(rows) {
    var body = document.getElementById("adminMembers"); body.innerHTML = "";
    rows.forEach(function (m) {
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>" + safe(m.member_number) + "</td><td>" + safe(m.full_name || "—") + "</td><td dir=\"ltr\">" + safe(m.phone || "—") + "</td><td>" + m.total_points + "</td><td><button class=\"pp-mini-btn add-purchase\" data-id=\"" + m.id + "\">فاتورة</button> <button class=\"pp-mini-btn show-card\" data-id=\"" + m.id + "\">البطاقة</button></td>";
      body.appendChild(tr);
    });
    body.querySelectorAll(".add-purchase").forEach(function (b) { b.onclick = function () { selectMember(b.dataset.id); }; });
    body.querySelectorAll(".show-card").forEach(function (b) { b.onclick = function () { showCard(b.dataset.id); }; });
  }
  function safe(value) { var d = document.createElement("div"); d.textContent = String(value); return d.innerHTML; }
  function selectMember(id) {
    var m = members.find(function (x) { return x.id === id; });
    document.getElementById("purchaseMemberId").value = id;
    document.getElementById("selectedMember").textContent = m.full_name + " — " + m.member_number;
    document.getElementById("purchaseAmount").focus();
  }
  gate.addEventListener("submit", async function (e) {
    e.preventDefault();
    var email = document.getElementById("adminEmail").value.trim();
    var password = document.getElementById("adminPassword").value;
    var result = await P.client.auth.signInWithPassword({ email: email, password: password });
    if (result.error) return P.message(msg, "بيانات الدخول غير صحيحة أو الحساب غير مفعّل.", "error");
    await enter();
  });
  async function enter() {
    var me = await P.client.from("pp_profiles").select("role").single();
    if (me.error || me.data.role !== "admin") { await P.client.auth.signOut(); return P.message(msg, "هذا الحساب لا يملك صلاحية المالك.", "error"); }
    gate.hidden = true; panel.hidden = false; msg.hidden = true; await loadMembers();
  }
  document.getElementById("memberSearch").addEventListener("input", function (e) {
    var q = e.target.value.trim().toLowerCase();
    render(members.filter(function (m) { return [m.member_number, m.full_name, m.phone].join(" ").toLowerCase().includes(q); }));
  });
  document.getElementById("createMemberForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    var fullName = document.getElementById("newMemberName").value.trim();
    var phone = P.phone(document.getElementById("newMemberPhone").value);
    if (fullName.length < 3) return P.message(msg, "أدخل اسم العميل كاملًا.", "error");
    if (!/^\+9665\d{8}$/.test(phone)) return P.message(msg, "أدخل رقم جوال سعودي صحيح.", "error");
    var result = await P.client.rpc("pp_admin_create_member", { p_full_name: fullName, p_phone: phone });
    if (result.error) return P.message(msg, "تعذر إنشاء العضوية: " + result.error.message, "error");
    e.target.reset(); await loadMembers();
    var created = result.data;
    if (Array.isArray(created)) created = created[0];
    P.message(msg, "تم إنشاء العضوية " + created.member_number + " بنجاح.", "success");
    showCard(created.id);
  });
  document.getElementById("purchaseForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    var memberId = document.getElementById("purchaseMemberId").value;
    var amount = Number(document.getElementById("purchaseAmount").value);
    if (!memberId) return P.message(msg, "اختر عضوًا أولًا.", "error");
    if (!(amount >= 10)) return P.message(msg, "أدخل مبلغًا لا يقل عن 10 ريالات.", "error");
    var result = await P.client.rpc("pp_admin_add_purchase", { p_member_id: memberId, p_amount: amount, p_description: document.getElementById("purchaseNote").value.trim() || "مشتريات HGTL" });
    if (result.error) return P.message(msg, "تعذر إضافة العملية: " + result.error.message, "error");
    P.message(msg, "تمت إضافة " + Math.floor(amount / 10) + " نقطة بنجاح.", "success");
    e.target.reset(); document.getElementById("selectedMember").textContent = "لم يتم اختيار عضو"; await loadMembers();
  });
  document.getElementById("adminLogout").onclick = async function () { await P.client.auth.signOut(); location.reload(); };
  var cardDialog = document.getElementById("memberCardDialog");
  function showCard(id) {
    var m = members.find(function (x) { return x.id === id; }); if (!m) return;
    document.getElementById("cardMemberName").textContent = m.full_name;
    document.getElementById("cardMemberNumber").textContent = m.member_number;
    document.getElementById("cardMemberPoints").textContent = m.total_points.toLocaleString("en-US");
    var qr = document.getElementById("memberQr"); qr.innerHTML = "";
    new QRCode(qr, { text: memberPortalUrl, width: 94, height: 94, colorDark: "#031126", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M });
    document.getElementById("shareMemberCard").href = "https://wa.me/" + m.phone.replace("+", "") + "?text=" + encodeURIComponent("مرحبًا " + m.full_name + "، تم إنشاء عضويتك في Partnered Point. رقم العضوية: " + m.member_number + "\nدخول حساب النقاط: " + memberPortalUrl);
    cardDialog.showModal();
  }
  document.getElementById("closeMemberCard").onclick = function () { cardDialog.close(); };
  document.getElementById("downloadMemberCard").onclick = async function () {
    var button = this; var help = document.getElementById("cardHelp");
    try {
      button.disabled = true; button.textContent = "جارٍ تجهيز البطاقة…";
      var canvas = await html2canvas(document.getElementById("memberCardExport"), { scale: 2, backgroundColor: null, useCORS: true, allowTaint: false, logging: false });
      var link = document.createElement("a"); link.download = document.getElementById("cardMemberNumber").textContent + ".png"; link.href = canvas.toDataURL("image/png"); document.body.appendChild(link); link.click(); link.remove();
      help.textContent = "تم تنزيل البطاقة. يمكنك إرفاقها في محادثة واتساب.";
    } catch (error) {
      help.textContent = "تعذر التنزيل من رابط file المحلي. سيعمل الزر بعد نشر النظام على hgtl.org أو عند فتحه عبر Live Server.";
    } finally {
      button.disabled = false; button.textContent = "تنزيل البطاقة PNG";
    }
  };
  P.client.auth.getUser().then(function (r) { if (r.data.user) enter(); });
})();
