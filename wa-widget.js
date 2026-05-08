// ==================== WA FLOATING WIDGET v2.1 ====================
(function() {
    'use strict';

    const script = document.currentScript;
    
    const phone = script.getAttribute('data-phone') || '6282121218493';
    const defaultText = script.getAttribute('data-text') || 'Halo%20admin';
    const name = script.getAttribute('data-name') || 'Customer Service';
    const autoOpen = script.getAttribute('data-autoopen') === 'true';

    if (document.getElementById('wa-float-widget')) return;

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
          <a href="https://wa.me/${phone}?text=${encodeURIComponent(decodeURIComponent(defaultText))}" 
             target="_blank" 
             id="wa-send-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="24" height="24">
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </div>`;

    const css = `...` // (CSS tetap sama seperti sebelumnya, saya skip biar tidak panjang)

    // Inject CSS + HTML (sama seperti v2.0)
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    // Logika tetap sama
    const btn = document.getElementById('wa-float-btn');
    const popup = document.getElementById('wa-chat-popup');
    const closeBtn = document.querySelector('.wa-close');

    function togglePopup() {
      popup.classList.toggle('hidden');
    }

    btn.addEventListener('click', togglePopup);
    closeBtn.addEventListener('click', togglePopup);

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) popup.classList.add('hidden');
    });

    if (autoOpen) {
      setTimeout(() => popup.classList.remove('hidden'), 4000);
    }

    console.log('%c✅ WA Floating Widget v2.1 loaded successfully', 'color:#25D366; font-weight:bold');
})();
