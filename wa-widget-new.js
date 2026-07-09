<!-- ==================== FLOATING WHATSAPP WIDGET (Versi Update) ==================== -->
<div id="wa-widget">
  <!-- Tombol Floating WhatsApp -->
  <div onclick="toggleWaPanel()" 
       class="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] shadow-2xl rounded-full flex items-center justify-center cursor-pointer z-[99999] transition-all duration-300 hover:scale-110 active:scale-95"
       style="box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(16 185 129 / 0.2);">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 32 32">
      <path d="M16 0C7.164 0 0 7.164 0 16c0 2.885.775 5.587 2.13 7.96L.5 32l8.04-2.13A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.5c-1.61 0-3.18-.3-4.66-.88l-.33-.13-4.8 1.27 1.27-4.8-.13-.33A13.5 13.5 0 012.5 16C2.5 8.5 8.5 2.5 16 2.5S29.5 8.5 29.5 16 23.5 29.5 16 29.5zM23.3 18.3c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.35.25-.65.1-.3-.15-1.25-.45-2.4-1.45-.9-.8-1.5-1.8-1.7-2.1-.2-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.7-1.7-.95-2.3-.25-.6-.5-.52-.7-.53-.18 0-.38-.02-.58-.02-.2 0-.52.08-.8.4-.28.3-.95.93-.95 2.25 0 1.32.97 2.6 1.1 2.78.13.18 1.9 2.9 4.6 4.06 2.7 1.16 2.7 1.16 2.7 1.16.32.08.55.12.75.12.42 0 .8-.32.9-.75.1-.42.1-.75.07-.82-.03-.08-.15-.2-.32-.35z"/>
    </svg>
  </div>

  <!-- Panel Pilihan (WhatsApp Style) -->
  <div id="wa-panel" 
       class="hidden fixed bottom-24 right-6 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 z-[99999] overflow-hidden">
    
    <!-- Header WhatsApp Style -->
    <div class="bg-[#25D366] px-5 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </div>
        <div>
          <div class="text-white font-bold text-lg tracking-tight">Chat via WhatsApp</div>
          <div class="flex items-center gap-x-1.5 mt-0.5">
            <div class="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span class="text-emerald-100 text-xs font-medium">Online sekarang • Balas cepat</span>
          </div>
        </div>
      </div>
      <button onclick="toggleWaPanel()" class="text-white/80 hover:text-white p-1 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6h12v12" />
        </svg>
      </button>
    </div>

    <!-- Daftar Kontak / Departemen -->
    <div class="p-3 space-y-1">
      
      <!-- Administrasi -->
      <div onclick="openWhatsApp('6282121218493', 'Administrasi')" 
           class="group flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 rounded-2xl cursor-pointer transition-all">
        <div class="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 transition-colors rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-800">Administrasi</div>
          <div class="text-sm text-gray-500">Pertanyaan umum, pendaftaran, dan kebutuhan administrasi</div>
        </div>
        <div class="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <!-- Keuangan & Penagihan -->
      <div onclick="openWhatsApp('6285111318493', 'Keuangan')" 
           class="group flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 rounded-2xl cursor-pointer transition-all">
        <div class="w-11 h-11 bg-blue-100 group-hover:bg-blue-200 transition-colors rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-800">Keuangan &amp; Penagihan</div>
          <div class="text-sm text-gray-500">Pembayaran, invoice, dan segala urusan keuangan</div>
        </div>
        <div class="text-blue-500 opacity-0 group-hover:opacity-100 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="px-5 py-3 bg-gray-50 border-t border-gray-100">
      <div class="text-center text-[10px] text-gray-400">Terhubung langsung ke WhatsApp • Biasanya balas dalam beberapa menit</div>
    </div>
  </div>
</div>

<script>
  function toggleWaPanel() {
    const panel = document.getElementById('wa-panel');
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      panel.classList.add('block');
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    }
  }

  function openWhatsApp(number, department) {
    const panel = document.getElementById('wa-panel');
    panel.classList.add('hidden');
    panel.classList.remove('block');

    // Pesan default dalam bahasa Indonesia
    const message = encodeURIComponent(`Halo ${department},\n\nSaya ingin bertanya...`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  }

  // Tutup panel jika klik di luar
  document.addEventListener('click', function(e) {
    const widget = document.getElementById('wa-widget');
    const panel = document.getElementById('wa-panel');
    if (widget && panel && !widget.contains(e.target) && !panel.classList.contains('hidden')) {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    }
  });

  // ESC key untuk nutup panel
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      const panel = document.getElementById('wa-panel');
      if (panel && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        panel.classList.remove('block');
      }
    }
  });
</script>
<!-- ==================== END OF WIDGET ==================== -->
