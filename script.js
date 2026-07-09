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