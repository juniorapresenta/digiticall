
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function(){ mobileMenu.classList.toggle('hidden'); });
  }

  function smoothScrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  window.scrollToContact = function(){ smoothScrollToId('contato'); }
  window.scrollToServices = function(){ smoothScrollToId('servicos'); }

  // data-action binding
  document.querySelectorAll('[data-action]').forEach(function(el){
    const action = el.getAttribute('data-action');
    el.addEventListener('click', function(e){
      e.preventDefault();
      if (action === 'scrollToContact') window.scrollToContact();
      else if (action === 'scrollToServices') window.scrollToServices();
      else if (action === 'openWhatsApp') window.openWhatsApp();
      else if (action === 'openServiceModal') {
        const slug = el.getAttribute('data-service') || el.dataset.service;
        if (window.openServiceModal) window.openServiceModal(slug);
      }
    });
  });

  // Contact form AJAX with honeypot
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      const honeypot = form.querySelector('[name="contact_honeypot"]');
      if (honeypot && honeypot.value) return;
      const fd = new FormData(form);
      try {
        const res = await fetch(form.action || '/api/contato', { method: (form.method || 'POST').toUpperCase(), body: fd });
        if (res.ok) { alert('Mensagem enviada!'); form.reset(); }
        else { alert('Erro ao enviar.'); }
      } catch (err) { console.error(err); alert('Erro de rede.'); }
    });
  }

  window.openWhatsApp = function(){
    const number = '5561999999999';
    const text = encodeURIComponent('Olá, gostaria de uma consultoria gratuita.');
    window.open('https://wa.me/' + number + '?text=' + text, '_blank');
  };
});
