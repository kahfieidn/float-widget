// ==================== WA FLOATING WIDGET v2.2 FIX ====================
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="28" height="28">
        <span>Chat Kami</span>
      </div>

      <div id="wa-chat-popup" class="wa-popup hidden">
        <div class="wa-header">
          <div class="wa-header-info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="40" height="40">
            <div>
              <strong>${name}</strong><br>
              <small>Online • Balas cepat</small>
            </div>
          </div>
          <span class="wa-close">✕</span>
        </div>

        <div class="wa-body">
          <div class="wa-message">
            Halo! 👋<br>
            Ada yang bisa kami bantu hari ini?
          </div>
        </div>

        <div class="wa-footer">
          <a id="wa-send-btn"
             target="_blank"
             href="https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="24" height="24">
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  const css = `
    #wa-float-widget {
      position: fixed;
      right: 16px;
      bottom: calc(16px + env(safe-area-inset-bottom));
      z-index: 999999 !important;
      font-family: sans-serif;
    }

    #wa-float-btn {
      background: #25D366;
      color: white;
      padding: 10px 14px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .wa-popup {
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 320px;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0,0,0,0.25);
    }

    .hidden {
      display: none;
    }

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
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background: #25D366;
      color: white;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .wa-popup {
        width: 92vw;
        right: 10px;
      }
    }
  `;

  // inject CSS
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // inject HTML (SAFE DOM READY)
  function init() {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    const btn = container.querySelector('#wa-float-btn');
    const popup = container.querySelector('#wa-chat-popup');
    const closeBtn = container.querySelector('.wa-close');

    function togglePopup() {
      popup.classList.toggle('hidden');
    }

    btn.addEventListener('click', togglePopup);
    closeBtn.addEventListener('click', togglePopup);

    // FIX: click outside (mobile safe)
    document.addEventListener('click', (e) => {
      const isInside = container.contains(e.target);
      const isButton = btn.contains(e.target);

      if (!isInside && !isButton) {
        popup.classList.add('hidden');
      }
    });

    if (autoOpen) {
      setTimeout(() => popup.classList.remove('hidden'), 3000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('✅ WA Floating Widget v2.2 loaded');
})();
