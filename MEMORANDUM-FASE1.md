# MEMORÁNDUM — Fase 1: Landing Page Adridomus Electric

**Fecha:** Julio 2026
**Cliente:** Adridomus Electric — Electricista en Valencia
**Contacto:** 632 32 16 15 · domus79@gmail.com

---

## Resumen

Reestructuración completa del sitio web de Adridomus Electric: de una landing page básica a una estructura multi-página con SEO sólido, tipografía Manrope, diseño refinado manteniendo la paleta original (azul #122B53, amarillo #FCB60E).

---

## Qué se ha hecho

### 1. Landing page (`index.html`)
- Hero con banner responsive existente (WebP + JPEG, srcset con 4 tamaños)
- Overlay azul con titular "Electricista de confianza en Valencia"
- Secciones: Hero, Trusted bar, Servicios, Sobre nosotros, Contacto, Footer
- Menú responsive con hamburguesa, smooth scroll, skip-link, WhatsApp flotante

### 2. SEO implementado
- Schema `LocalBusiness` completo con servicios, horarios (Lun–Vie 8–20, Sáb 9–14), área de servicio
- Meta title, description, canonical, Open Graph con imagen, Twitter Cards
- `robots.txt` y `sitemap.xml` con 5 URLs
- Contenido textual ampliado en cada sección
- Tipografía: Manrope en lugar de Inter

### 3. Estructura multi-página
- `/` — Landing principal
- `/servicios/instalaciones-electricas/`
- `/servicios/averias-electricas/`
- `/servicios/reparaciones-hogar/`
- `/servicios/placas-solares/`

### 4. Diseño visual
- Paleta original: azul `#122B53`, amarillo `#FCB60E`, blanco, grises
- Manrope como fuente principal (moderna, legible, profesional)
- Service Worker actualizado (v2) con precache de páginas de servicio
- Diseño responsive completo (móvil, tablet, escritorio)

### 5. Formulario de contacto
- Validación con feedback visual (no alerts)
- Envío por WhatsApp con los datos del formulario
- Labels visibles para accesibilidad

---

## Pendiente para Fase 2

- [ ] Google Business Profile
- [ ] Blog con artículos informativos
- [ ] Testimonios de clientes reales
- [ ] Contenido sobre "Sobre nosotros" más extenso (E-E-A-T)
- [ ] Enlace funcional del formulario a backend (EmailJS, Formspree, etc.)

---

## Contacto
- Teléfono: 632 32 16 15
- Email: domus79@gmail.com
- Web: adridomuselectric.com
- WhatsApp: wa.me/34632321615