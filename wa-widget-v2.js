/*!
 * WA Floating Widget (standalone, no dependency)
 * Cara pakai: taruh <script src="wa-widget.js"></script> sebelum </body>
 * Bisa dipakai di web manapun (HTML statis, WordPress, Laravel, CI4, dll)
 */
(function () {
  // ---------- KONFIGURASI (ubah sesuai kebutuhan) ----------
  var CONTACTS = [
    {
      name: "Admin",
      desc: "Pendaftaran & pertanyaan umum",
      number: "6282121218493",
      displayNumber: "+62 821-2121-8493"
    },
    {
      name: "Billing / Finance",
      desc: "Pembayaran & invoice layanan",
      number: "6285111318493",
      displayNumber: "+62 851-1131-8493"
    },
  ];
  var GREEN = "#25D366";
  var GREEN_DARK = "#128C7E";
  // -----------------------------------------------------------

  var waIconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">' +
    '<path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.2 14.15c-.22.62-1.28 1.18-1.77 1.22-.45.05-1.02.07-1.65-.1-.38-.1-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.07-1.42-1.07-2.7 0-1.28.67-1.9.9-2.16.24-.25.52-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.26.68 1.12 1.46 1.81 1 .89 1.85 1.16 2.11 1.29.26.13.41.11.56-.07.15-.18.65-.76.83-1.02.18-.26.35-.22.59-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.07.11.07.62-.15 1.24z"/>' +
    "</svg>";

  var chevronSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="16" height="16">' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>';

  var closeSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6h12v12" /></svg>';

  // ---------- CSS (di-scope dengan prefix #wa-widget-root) ----------
  var css = "" +
    "#wa-widget-root, #wa-widget-root * { box-sizing: border-box; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }" +
    "#wa-fab { position: fixed; bottom: 24px; right: 24px; height: 56px; padding: 0 22px 0 16px; background:" + GREEN + "; border-radius: 999px; display: flex; align-items: center; gap: 10px; cursor: pointer; z-index: 999999; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transition: transform .2s ease, background .2s ease; border: none; }" +
    "#wa-fab:hover { background:" + GREEN_DARK + "; transform: scale(1.05); }" +
    "#wa-fab svg { width: 28px; height: 28px; color: #fff; flex-shrink: 0; }" +
    "#wa-fab span { color: #fff; font-weight: 600; font-size: 15px; white-space: nowrap; }" +
    "#wa-panel { position: fixed; bottom: 92px; right: 24px; width: 340px; max-width: calc(100vw - 32px); background: #fff; border-radius: 22px; box-shadow: 0 20px 50px rgba(0,0,0,0.25); z-index: 999999; overflow: hidden; display: none; border: 1px solid #eee; }" +
    "#wa-panel.open { display: block; }" +
    "#wa-panel-header { background:" + GREEN + "; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; }" +
    "#wa-panel-header .left { display: flex; align-items: center; gap: 12px; }" +
    "#wa-panel-header .avatar { width: 36px; height: 36px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; }" +
    "#wa-panel-header .title { color: #fff; font-weight: 700; font-size: 16px; }" +
    "#wa-panel-header .status { display: flex; align-items: center; gap: 6px; margin-top: 2px; }" +
    "#wa-panel-header .dot { width: 8px; height: 8px; background: #b7f7cf; border-radius: 50%; }" +
    "#wa-panel-header .status span { color: #d9fbe6; font-size: 11px; font-weight: 500; }" +
    "#wa-panel-header .close-btn { background: none; border: none; color: rgba(255,255,255,0.85); cursor: pointer; padding: 4px; }" +
    "#wa-panel-header .close-btn:hover { color: #fff; }" +
    "#wa-list { padding: 12px; display: flex; flex-direction: column; gap: 8px; }" +
    ".wa-item { padding: 14px; border-radius: 16px; border: 1px solid #f0f0f0; }" +
    ".wa-item .top-row { display: flex; align-items: center; gap: 12px; }" +
    ".wa-item .icon { width: 40px; height: 40px; background: rgba(37,211,102,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color:" + GREEN + "; flex-shrink: 0; }" +
    ".wa-item .name { font-weight: 600; color: #1f2937; font-size: 14px; flex: 1; min-width: 0; }" +
    ".wa-item .desc { font-size: 12px; color: #6b7280; margin-top: 8px; }" +
    ".wa-item .number { display: flex; align-items: center; gap: 5px; margin-top: 6px; color:" + GREEN + "; font-size: 12px; font-weight: 600; }" +
    ".wa-item .number svg { width: 13px; height: 13px; flex-shrink: 0; }" +
    ".wa-chat-btn { display: flex; align-items: center; gap: 5px; background:" + GREEN + "; color: #fff; border: none; border-radius: 999px; padding: 8px 14px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap; transition: background .15s ease; }" +
    ".wa-chat-btn:hover { background:" + GREEN_DARK + "; }" +
    ".wa-chat-btn svg { flex-shrink: 0; }" +
    "#wa-panel-footer { padding: 10px 20px; background: #fafafa; border-top: 1px solid #f0f0f0; text-align: center; font-size: 10px; color: #9ca3af; }" +
    "@media (max-width: 420px) { #wa-fab { bottom: 16px; right: 16px; } #wa-panel { right: 16px; bottom: 90px; } }";

  var styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // ---------- Build DOM ----------
  var root = document.createElement("div");
  root.id = "wa-widget-root";

  var itemsHtml = CONTACTS.map(function (c) {
    return (
      '<div class="wa-item">' +
      '<div class="top-row">' +
      '<div class="icon">' + waIconSvg + "</div>" +
      '<div class="name">' + c.name + "</div>" +
      '<button class="wa-chat-btn" data-number="' + c.number + '" data-name="' + c.name + '">' +
      waIconSvg.replace('width="22" height="22"', 'width="15" height="15"') + "<span>Chat</span></button>" +
      "</div>" +
      '<div class="desc">' + c.desc + "</div>" +
      '<div class="number">' + waIconSvg.replace('width="22" height="22"', 'width="13" height="13"') + "<span>" + c.displayNumber + "</span></div>" +
      "</div>"
    );
  }).join("");

  root.innerHTML =
    '<div id="wa-fab">' + waIconSvg.replace('width="22" height="22"', 'width="28" height="28"') + "<span>Chat Sekarang</span></div>" +
    '<div id="wa-panel">' +
    '<div id="wa-panel-header">' +
    '<div class="left">' +
    '<div class="avatar">' + waIconSvg.replace('width="22" height="22"', 'width="18" height="18"') + "</div>" +
    "<div>" +
    '<div class="title">Chat via WhatsApp</div>' +
    '<div class="status"><div class="dot"></div><span>Online sekarang &bull; Balas cepat</span></div>' +
    "</div>" +
    "</div>" +
    '<button class="close-btn" id="wa-close-btn">' + closeSvg + "</button>" +
    "</div>" +
    '<div id="wa-list">' + itemsHtml + "</div>" +
    '<div id="wa-panel-footer">Terhubung langsung ke WhatsApp &bull; Biasanya balas dalam beberapa menit</div>' +
    "</div>";

  document.body.appendChild(root);

  // ---------- Behavior ----------
  var fab = document.getElementById("wa-fab");
  var panel = document.getElementById("wa-panel");
  var closeBtn = document.getElementById("wa-close-btn");

  function togglePanel() {
    panel.classList.toggle("open");
  }
  function closePanel() {
    panel.classList.remove("open");
  }

  fab.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", closePanel);

  document.querySelectorAll(".wa-chat-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var number = btn.getAttribute("data-number");
      var name = btn.getAttribute("data-name");
      var message = encodeURIComponent("Halo " + name + ",\n\nSaya ingin bertanya...");
      window.open("https://wa.me/" + number + "?text=" + message, "_blank");
      closePanel();
    });
  });

  document.addEventListener("click", function (e) {
    if (!root.contains(e.target) && panel.classList.contains("open")) {
      closePanel();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePanel();
  });
})();
