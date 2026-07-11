# MEMORÁNDUM — Fase 1: Landing Page Adridomus Electric

**Fecha:** Julio 2026
**Cliente:** Adridomus Electric — Electricista en Valencia
**Contacto:** 632 32 16 15 · domus79@gmail.com
**URL actual:** https://adridomus.vercel.app
**Dominio oficial:** `adridomuselectric.com` (pendiente de compra)

---

## Resumen

Sitio web completo de Adridomus Electric con estructura multi-página (1 home + 4 servicios + 3 legales), SEO on-page avanzado, iconos SVG, páginas legales, banner de cookies y contenido expandido. Pendiente de que el cliente complete ciertos datos y contrate el dominio definitivo.

---

## Qué se ha implementado

### Páginas (8 totales)
| Ruta | Propósito |
|------|-----------|
| `/` | Landing principal |
| `/servicios/instalaciones-electricas/` | Instalaciones eléctricas |
| `/servicios/averias-electricas/` | Reparación de averías |
| `/servicios/reparaciones-hogar/` | Mantenimiento y reparaciones |
| `/servicios/placas-solares/` | Placas solares |
| `/legal/aviso-legal/` | Aviso Legal |
| `/legal/politica-privacidad/` | Política de Privacidad |
| `/legal/politica-cookies/` | Política de Cookies |
| `/404.html` | Página de error personalizada |

### SEO implementado
- Schema `LocalBusiness` completo (servicios, horarios, área, catálogo)
- Schema `BreadcrumbList` en cada página de servicio
- Schema `FAQPage` con 4 preguntas/respuestas por servicio
- Meta title, description, canonical, Open Graph, Twitter Cards
- Hreflang (es + x-default) en todas las páginas
- `robots.txt` y `sitemap.xml` con 8 URLs
- Contenido expandido: 400-470 palabras por página de servicio
- Enlaces internos entre servicios

### Contenido legal
- Aviso Legal (plantilla — pendiente de datos del titular)
- Política de Privacidad (plantilla RGPD — pendiente de datos del titular)
- Política de Cookies (detalle de cookies usadas)
- Banner de consentimiento con botones Aceptar / Rechazar
- GA4 se carga dinámicamente solo tras aceptar cookies
- Enlaces legales en el footer de todas las páginas

### Diseño y UX
- Paleta: azul `#122B53`, amarillo `#FCB60E`
- Tipografía Manrope (Google Fonts)
- Iconos SVG personalizados para cada servicio (rayo, enchufe, llave inglesa, sol)
- Diseño responsive (móvil, tablet, escritorio)
- Menú hamburguesa en móvil, skip-link, ARIA labels
- Formulario de contacto con validación → WhatsApp
- Botón flotante de WhatsApp
- Página 404 con diseño de marca

### Técnico
- Hosting: Vercel (despliegue automático desde GitHub)
- `vercel.json` con redirects y headers de seguridad
- Service Worker v3 con precarga offline de todas las páginas
- Imágenes WebP con srcset responsivo (4 tamaños)
- Sin frameworks ni dependencias externas

---

## Checklist para el cliente 🎯

### 🔴 Urgente (para poder publicar con garantías)

- [ ] **Contratar dominio** — Definir dominio definitivo y conectarlo a Vercel. Actualmente el canonical apunta a `adridomus.vercel.app` (temporal). Cuando tengas el dominio, se cambia canonical + sitemap + OG URLs en 5 minutos.
- [ ] **Google Business Profile** — Crear y verificar la ficha de Google Maps. Imprescindible para aparecer en el mapa de Valencia. Sin esto, el negocio no existe en búsquedas locales.

### 🟡 Importante (completar datos personales)

- [ ] **ID de Google Analytics (GA4)** — Conseguir el código de medición y ponerlo en `script.js` (línea 84). Busca `G-XXXXXXXXXX` y cámbialo por el real.
- [ ] **Código de Search Console** — Obtener la meta tag de verificación y reemplazar `PON_AQUI_TU_CODIGO_DE_VERIFICACION` en las 5 páginas HTML (home + 4 servicios).
- [ ] **Datos del titular (Aviso Legal y Privacidad)** — En las páginas legales hay marcadores `[Pendiente de...]` para completar: nombre completo, NIF/CIF, dirección fiscal.
- [ ] **Contenido "Sobre nosotros"** — En `index.html` hay un bloque marcado como `<!-- BORRADOR -->`. Confirmar o modificar los datos personales (nombre del electricista, años exactos de experiencia, certificaciones).

### 🟢 A medio plazo

- [ ] **Email profesional** — Crear `info@adridomuselectric.com` (o similar) una vez comprado el dominio. Cambiar el email de contacto en toda la web.
- [ ] **Blog** — Añadir artículos informativos para captar tráfico de búsqueda (ej: "Cómo elegir electricista en Valencia", "¿Por qué salta el diferencial?").
- [ ] **Reseñas de Google** — Conseguir las primeras 5 reseñas en Google Business Profile.
- [ ] **Fotos reales de trabajos** — Sustituir la imagen del banner por fotos reales de instalaciones realizadas (mejora la confianza y el E-E-A-T).

---

## Notas técnicas

- El certificado SSL lo gestiona Vercel automáticamente (gratuito).
- El despliegue es automático: cada `git push` a `main` actualiza el sitio en < 1 minuto.
- Las páginas legales son **plantillas estándar**. Se recomienda revisión por un asesor legal antes de la publicación definitiva.
- El banner de cookies guarda la preferencia del usuario en `localStorage` (1 año).
- GA4 solo se activa si el usuario hace clic en "Aceptar".

---

## Contacto
- Teléfono: 632 32 16 15
- Email: domus79@gmail.com
- Web: https://adridomus.vercel.app
- WhatsApp: wa.me/34632321615
- Repositorio: github.com/sctecnologia/adridomus
