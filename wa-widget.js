// ==================== WA FLOATING WIDGET v2.3 WHMCS FIX ====================
(function () {
  'use strict';

  const script = document.currentScript;

  const phone = script.getAttribute('data-phone') || '6282121218493';
  const defaultText = script.getAttribute('data-text') || 'Halo admin';
  const name = script.getAttribute('data-name') || 'Customer Service';
  const autoOpen = script.getAttribute('data-autoopen') === 'true';

  if (document.getElementById('wa-float-widget')) return;

  const html = `
    <div id="wa-float-widget">
      <div id="wa-float-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="28">
        <span>Chat Kami</span>
      </div>

      <div id="wa-chat-popup" class="wa-popup hidden">
        <div class="wa-header">
          <div>
            <strong>${name}</strong><br>
            <small>Online • Balas cepat</small>
          </div>
          <span class="wa-close">✕</span>
        </div>

        <div class="wa-body">
          Halo 👋<br>Ada yang bisa kami bantu?
        </div>

        <div class="wa-footer">
          <a target="_blank"
             href="https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}">
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  const css = `
    /* ===== WHMCS SAFE LAYER ===== */
    #wa-float-widget {
      position: fixed !important;
      right: 16px !important;
      bottom: calc(16px + env(safe-area-inset-bottom)) !important;
      z-index: 2147483647 !important;
      font-family: Arial, sans-serif;
    }

    /* BUTTON */
    #wa-float-btn {
      background: #25D366;
      color: white;
      padding: 10px 14px;
      border-radius: 999px;
      display: flex;
      gap: 8px;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(0,0,0,0.25);
      user-select: none;
    }

    /* POPUP */
    .wa-popup {
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 320px;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .hidden { display: none !important; }

    .wa-header {
      background: #25D366;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .wa-body {
      padding: 12px;
      font-size: 14px;
    }

    .wa-footer a {
      display: block;
      text-align: center;
      padding: 12px;
      background: #25D366;
      color: white;
      text-decoration: none;
    }

    /* MOBILE FIX */
    @media (max-width: 768px) {
      .wa-popup {
        width: 92vw !important;
        right: 10px !important;
      }
    }
  `;

  // inject CSS
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // SAFE INIT FOR WHMCS (IMPORTANT)
  function init() {
    if (!document.body) {
      setTimeout(init, 50);
      return;
    }

    // inject into root (NOT WHMCS footer container)
    const container = document.createElement('div');
    container.innerHTML = html;
    (document.body || document.documentElement).appendChild(container);

    const root = container.querySelector('#wa-float-widget');
    const btn = container.querySelector('#wa-float-btn');
    const popup = container.querySelector('#wa-chat-popup');
    const closeBtn = container.querySelector('.wa-close');

    function toggle() {
      popup.classList.toggle('hidden');
    }

    btn.addEventListener('click', toggle);
    closeBtn.addEventListener('click', () => popup.classList.add('hidden'));

    // SAFE click outside (WHMCS safe version)
    document.addEventListener('click', (e) => {
      if (!root.contains(e.target)) {
        popup.classList.add('hidden');
      }
    });

    // auto open
    if (autoOpen) {
      setTimeout(() => popup.classList.remove('hidden'), 3000);
    }
  }

  // WHMCS + late DOM fix
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
