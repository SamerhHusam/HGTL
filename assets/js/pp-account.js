(function () {
  "use strict";
  var P = window.PP;
  var login = document.getElementById("ppLogin");
  var otp = document.getElementById("ppOtp");
  var dashboard = document.getElementById("ppDashboard");
  var msg = document.getElementById("ppMessage");
  var activePhone = "";

  if (!P.ready) {
    P.message(msg, "يلزم ربط إعدادات Supabase قبل تشغيل نظام العضوية.", "error");
    login.querySelectorAll("button,input").forEach(function (x) { x.disabled = true; });
    return;
  }

  async function showDashboard(user) {
    var profileResult = await P.client.from("pp_members").select("id,member_number,full_name,phone,total_points").eq("user_id", user.id).single();
    if (profileResult.error) return P.message(msg, "تعذر تحميل بيانات العضوية.", "error");
    var p = profileResult.data;
    document.getElementById("memberName").textContent = p.full_name || "عضو PP";
    document.getElementById("memberNumber").textContent = p.member_number;
    document.getElementById("memberPhone").textContent = p.phone || user.phone || "—";
    document.getElementById("memberPoints").textContent = p.total_points.toLocaleString("ar-SA");
    var tx = await P.client.from("pp_transactions").select("created_at,amount_sar,points,description,type").eq("member_id", p.id).order("created_at", { ascending: false }).limit(20);
    var body = document.getElementById("memberTransactions");
    body.innerHTML = "";
    (tx.data || []).forEach(function (row) {
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>" + P.date(row.created_at) + "</td><td>" + (row.description || (row.type === "purchase" ? "مشتريات" : "تعديل")) + "</td><td>" + (row.amount_sar == null ? "—" : P.money(row.amount_sar) + " ر.س") + "</td><td class=\"" + (row.points >= 0 ? "is-positive" : "is-negative") + "\">" + (row.points > 0 ? "+" : "") + row.points + "</td>";
      body.appendChild(tr);
    });
    if (!body.children.length) body.innerHTML = '<tr><td colspan="4">لا توجد عمليات حتى الآن.</td></tr>';
    login.hidden = true; otp.hidden = true; dashboard.hidden = false; msg.hidden = true;
  }

  login.addEventListener("submit", async function (event) {
    event.preventDefault();
    activePhone = P.phone(document.getElementById("ppPhone").value);
    var fullName = document.getElementById("ppName").value.trim();
    if (!/^\+9665\d{8}$/.test(activePhone)) return P.message(msg, "أدخل رقم جوال سعودي صحيح.", "error");
    var result = await P.client.auth.signInWithOtp({ phone: activePhone, options: { data: { full_name: fullName } } });
    if (result.error) return P.message(msg, "تعذر إرسال رمز التحقق: " + result.error.message, "error");
    login.hidden = true; otp.hidden = false;
    P.message(msg, "تم إرسال رمز التحقق إلى " + activePhone, "success");
  });

  otp.addEventListener("submit", async function (event) {
    event.preventDefault();
    var token = document.getElementById("ppCode").value.trim();
    var result = await P.client.auth.verifyOtp({ phone: activePhone, token: token, type: "sms" });
    if (result.error) return P.message(msg, "رمز التحقق غير صحيح أو انتهت صلاحيته.", "error");
    await showDashboard(result.data.user);
  });

  document.getElementById("ppLogout").addEventListener("click", async function () {
    await P.client.auth.signOut(); location.reload();
  });

  P.client.auth.getUser().then(function (result) { if (result.data.user) showDashboard(result.data.user); });
})();
