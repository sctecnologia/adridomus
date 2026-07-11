const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('contact-form');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const telefono = this.telefono.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  if (!nombre || !telefono || !mensaje) {
    feedback.className = 'form-feedback error';
    feedback.textContent = 'Completa los campos obligatorios (nombre, teléfono y mensaje).';
    return;
  }

  const phoneRegex = /^[\d\s\+\-]{9,}$/;
  if (!phoneRegex.test(telefono)) {
    feedback.className = 'form-feedback error';
    feedback.textContent = 'Introduce un teléfono válido (mínimo 9 dígitos).';
    return;
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.className = 'form-feedback error';
    feedback.textContent = 'Introduce un email válido.';
    return;
  }

  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  const body = `Hola, soy ${nombre}.\nTeléfono: ${telefono}${email ? `\nEmail: ${email}` : ''}\n\n${mensaje}`;

  const wa = `https://wa.me/34632321615?text=${encodeURIComponent(body)}`;
  window.open(wa, '_blank', 'noopener,noreferrer');

  this.reset();
  btn.textContent = originalText;
  btn.disabled = false;
  feedback.className = 'form-feedback success';
  feedback.textContent = `Gracias, ${nombre}. Te responderé lo antes posible por WhatsApp.`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Cookie Consent ---
const GA4_ID = 'G-XXXXXXXXXX'; // CAMBIAR por el ID real de GA4 cuando esté disponible

function loadGA4() {
  if (window.gaLoaded) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);
  window.gaLoaded = true;
}

const banner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('cookieAccept');
const rejectBtn = document.getElementById('cookieReject');

if (banner && acceptBtn && rejectBtn) {
  const consent = localStorage.getItem('cookie_consent');

  if (consent === 'accepted') {
    loadGA4();
  } else if (consent === 'rejected') {
    // No cargar GA4
  } else {
    // Mostrar banner
    setTimeout(() => banner.classList.add('show'), 400);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'accepted');
    banner.classList.remove('show');
    loadGA4();
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'rejected');
    banner.classList.remove('show');
  });
}