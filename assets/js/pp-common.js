(function () {
  "use strict";
  var cfg = window.PP_CONFIG || {};
  var ready = cfg.supabaseUrl && cfg.supabaseAnonKey && !cfg.supabaseUrl.startsWith("YOUR_");
  window.PP = {
    ready: !!ready,
    client: ready ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null,
    phone: function (value) {
      var digits = String(value || "").replace(/\D/g, "");
      if (digits.startsWith("0")) digits = "966" + digits.slice(1);
      if (!digits.startsWith("966")) digits = "966" + digits;
      return "+" + digits;
    },
    money: function (value) { return Number(value || 0).toLocaleString("ar-SA", { maximumFractionDigits: 2 }); },
    date: function (value) { return new Date(value).toLocaleDateString("ar-SA", { year: "numeric", month: "short", day: "numeric" }); },
    message: function (el, text, type) {
      el.textContent = text;
      el.className = "pp-message " + (type || "");
      el.hidden = false;
    }
  };
})();
