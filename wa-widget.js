// ==================== WA FLOATING WIDGET v2.0 ====================
(function() {
    'use strict';

    const script = document.currentScript;
    
    // === CONFIGURASI ===
    const phone = script.getAttribute('data-phone') || '6282121218493';
    const defaultText = script.getAttribute('data-text') || 'Halo%20admin%20jagoan%20kode:)';
    const name = script.getAttribute('data-name') || 'Customer Service';
    const autoOpen = script.getAttribute('data-autoopen') === 'true'; // tambah ini kalau mau auto popup

    // Cek duplikat
    if (document.getElementById('wa-float-widget')) return;

    // ==================== HTML ====================
    const html = `
    <div id="wa-float-widget">
      <div id="wa-float-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="28" height="28">
        <span>Chat Kami</span>
      </div>

      <div id="wa-chat-popup" class="wa-popup hidden">
        <div class="wa-header">
          <div class="wa-header-info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="40" height="40">
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
          <a href="https://wa.me/${phone}?text=${defaultText}" 
             target="_blank" 
             id="wa-send-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="24" height="24">
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </div>`;

    // ==================== CSS ====================
    const css = `
    #wa-float-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99999;
      font-family: system-ui, -apple-system, sans-serif;
    }

    #wa-float-btn {
      background: #25D366;
      color: white;
      padding: 14px 22px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 5px 20px rgba(37, 211, 102, 0.45);
      cursor: pointer;
      transition: all 0.3s ease;
      user-select: none;
      font-weight: 600;
      font-size: 15px;
    }

    #wa-float-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.55);
    }

    .wa-popup {
      position: absolute;
      bottom: 85px;
      right: 0;
      width: 320px;
      background: white;
      border-radius: 18px;
      box-shadow: 0 15px 45px rgba(0,0,0,0.3);
      overflow: hidden;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hidden {
      opacity: 0 !important;
      transform: translateY(30px) scale(0.9) !important;
      pointer-events: none;
    }

    .wa-header {
      background: #25D366;
      color: white;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .wa-header-info { display: flex; align-items: center; gap: 12px; }

    .wa-close {
      font-size: 26px;
      cursor: pointer;
      opacity: 0.85;
    }

    .wa-body {
      padding: 20px;
      background: #f8f9fa;
      min-height: 160px;
    }

    .wa-message {
      background: white;
      padding: 14px 18px;
      border-radius: 20px 20px 20px 6px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      max-width: 85%;
    }

    .wa-footer {
      padding: 14px;
      background: white;
      border-top: 1px solid #eee;
    }

    #wa-send-btn {
      background: #25D366;
      color: white;
      padding: 14px 20px;
      border-radius: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 700;
      font-size: 16px;
      transition: all 0.2s;
    }

    #wa-send-btn:hover {
      background: #1eb855;
      transform: translateY(-2px);
    }
    `;

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Inject Widget
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    // ==================== LOGIKA ====================
    const btn = document.getElementById('wa-float-btn');
    const popup = document.getElementById('wa-chat-popup');
    const closeBtn = document.querySelector('.wa-close');

    function togglePopup() {
      popup.classList.toggle('hidden');
    }

    btn.addEventListener('click', togglePopup);
    closeBtn.addEventListener('click', togglePopup);

    // Klik di luar untuk close
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        popup.classList.add('hidden');
      }
    });

    // Auto open (opsional)
    if (autoOpen) {
      setTimeout(() => {
        if (popup.classList.contains('hidden')) togglePopup();
      }, 4000);
    }

    console.log('%c✅ WA Floating Widget v2.0 loaded successfully', 'color:#25D366; font-weight:bold');
})();
