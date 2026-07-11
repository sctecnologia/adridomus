# Auditoría SEO — Adridomus Electric

**Fecha:** Julio 2026  
**Cliente:** Adridomus Electric — Electricista en Valencia  
**Dominio actual:** `adridomus.vercel.app`  
**Dominio oficial:** `adridomuselectric.com` (pendiente de compra/redirección)  
**Hosting:** Vercel (despliegue automático desde GitHub)

---

## Resumen ejecutivo

La landing page tiene una base técnica sólida: buenas prácticas de HTML semántico, Schema.org LocalBusiness completo, meta tags optimizados, diseño responsive y accesibilidad básica. Sin embargo, existen carencias importantes en visibilidad local, contenido y autoridad que deben resolverse **antes y después** de la publicación del dominio oficial.

---

## 1. LO QUE YA ESTÁ BIEN ✅

### Técnico
- Meta title y description correctos en todas las páginas (home + 4 servicios)
- Etiqueta canonical apuntando al dominio oficial
- Open Graph (title, description, image, locale)
- Twitter Cards configuradas
- `robots.txt` con referencia al sitemap
- `sitemap.xml` con 5 URLs (home + 4 servicios)
- Schema `LocalBusiness` completo (nombre, teléfono, email, horarios, área de servicio, catálogo de servicios)
- Imágenes WebP con srcset responsivo (4 tamaños)
- `preload` de hero image y `preconnect` a Google Fonts
- CSS cargado con `media="print"` para no bloquear renderizado (luego se cambia a `all`)
- Service Worker con precarga offline de todas las páginas
- Sin dependencias pesadas (no frameworks, no librerías externas)

### Experiencia de usuario
- Diseño responsive (móvil, tablet, escritorio)
- Menú hamburguesa funcional en móvil
- Skip-link para accesibilidad por teclado
- Etiquetas ARIA en navegación, secciones, botones
- Formulario con validación nativa + feedback visual
- Botón flotante de WhatsApp
- Smooth scroll y scroll-padding para anclajes

---

## 2. PROBLEMAS CRÍTICOS 🔴

### 🔴 P1: El dominio oficial no está activo

| Elemento | Estado | Impacto |
|----------|--------|---------|
| Canonical apunta a `adridomuselectric.com` | ❌ | Google encuentra discrepancia entre la URL real (`vercel.app`) y la canónica |
| Sitemap apunta a `adridomuselectric.com` | ❌ | Los bots no pueden validar las URLs |
| Open Graph image URL apunta a `adridomuselectric.com` | ❌ | Las vistas previas en redes sociales no funcionan |
| El sitio solo es accesible via `vercel.app` | ❌ | Sin dominio propio no hay branding ni SEO duradero |

**Solución:** Comprar `adridomuselectric.com` y conectarlo a Vercel como dominio personalizado. Provisionalmente, cambiar canonical y sitemap a la URL de Vercel.

### 🔴 P2: No hay Google Business Profile

Un electricista en Valencia sin ficha de Google Maps **pierde la mayoría del tráfico local**. El Local Pack (mapa con 3 resultados) es donde los usuarios buscan "electricista cerca de mí".

**Acciones necesarias:**
1. Crear/verificar perfil en Google Business Profile
2. Rellenar categoría principal ("Electrician"), servicios, horarios, fotos reales
3. Conseguir las primeras 5-10 reseñas de clientes reales
4. Vincular el perfil con la web (mismo nombre, dirección y teléfono — NAP consistente)

### 🔴 P3: Sin Google Search Console ni Analytics

No hay forma de medir tráfico, impresiones, clics ni posiciones. Sin datos no se puede mejorar.

**Acciones necesarias:**
1. Añadir Google Search Console (verificar con la cuenta `sctecnologia.admin@gmail.com`)
2. Instalar Google Analytics 4 (GA4)
3. Configurar el tag en el `<head>` del `index.html` y de las 4 páginas de servicio

### 🔴 P4: Dominio propio para email

El email `domus79@gmail.com` resta profesionalidad. Una vez comprado el dominio, crear:
- `info@adridomuselectric.com` o `hola@adridomuselectric.com`
- Esto también mejora la confianza en el Schema de contacto

---

## 3. PROBLEMAS IMPORTANTES 🟡

### 🟡 P5: Contenido insuficiente en todas las páginas

| Página | Palabras aprox. | Mínimo recomendado |
|--------|----------------|-------------------|
| Home | ~350 | 600-800 |
| Instalaciones eléctricas | ~150 | 400-600 |
| Averías eléctricas | ~150 | 400-600 |
| Reparaciones hogar | ~150 | 400-600 |
| Placas solares | ~150 | 400-600 |

**Consecuencia:** Google no tiene suficiente contexto para entender la relevancia de cada página. Las páginas finas (thin content) no posicionan bien.

**Solución:** Desarrollar contenido más extenso en cada página de servicio, incluyendo:
- Beneficios concretos para el cliente
- Tipos de proyectos (doméstico, comercial, industrial)
- Preguntas frecuentes específicas del servicio
- Diferenciación frente a competidores

### 🟡 P6: Falta de E-E-A-T (Experiencia, Expertise, Autoritatividad, Confianza)

La sección "Sobre nosotros" es genérica. Para un electricista, la autoridad se construye con:
- Nombre real del electricista/propietario (Adri? ¿Domus?)
- Años de experiencia concretos (+15 años, ¿desde cuándo exactamente?)
- Certificaciones o formaciones específicas
- Tipos de proyectos realizados
- Fotografías reales de trabajos terminados

**Solución:** Ampliar la sección About con una historia real, foto del electricista, y detalles que solo un profesional real puede aportar.

### 🟡 P7: Sin reseñas ni testimonios visibles

Las reseñas son el factor de conversión más importante para un servicio local. Sin ellas, el usuario (y Google) no tienen pruebas sociales.

**Solución:**
- Recopilar testimonios reales de clientes
- Mostrarlos con nombre y ubicación (con permiso)
- Idealmente, enlazar a reseñas de Google

### 🟡 P8: Imágenes de los servicios usando emojis

Los iconos de servicio son emojis (⚡🔌🔧☀️). Esto es mejor que nada, pero:
- No aportan valor SEO (no tienen alt text, son decorativos)
- Se ven diferentes según el dispositivo
- No diferencian la marca

**Solución:** Crear iconos SVG propios o usar una línea gráfica consistente. Como mínimo, mantener lo actual porque cumple funcionalmente.

---

## 4. MEJORAS RECOMENDADAS 🟢

### 🟢 P9: BreadcrumbList Schema

Añadir schema de migas de pan en las páginas de servicio. Ejemplo para `instalaciones-electricas/`:
```
Home > Servicios > Instalaciones eléctricas
```

Esto ayuda a Google a entender la jerarquía del sitio y puede generar enlaces de miga en los resultados de búsqueda.

### 🟢 P10: FAQ Schema en páginas de servicio

Cada página de servicio debería incluir 3-5 preguntas frecuentes con sus respuestas en formato FAQ Schema. Esto puede generar rich snippets en Google.

Ejemplo para "Averías eléctricas":
- ¿Cuánto tardas en llegar a una urgencia?
- ¿Tienes servicio de urgencias 24h?
- ¿Qué hago si salta el diferencial constantemente?

### 🟢 P11: Vercel.json para redirects/config

Crear `vercel.json` en la raíz del proyecto para:
- Redirigir www a non-www (o viceversa)
- Redirigir HTTP a HTTPS
- Configurar headers de seguridad (CSP, HSTS)
- Definir rutas claras

### 🟢 P12: Blog o sección de artículos

Un blog con contenido útil para el público local:
- "Cómo elegir un electricista en Valencia"
- "¿Por qué salta el diferencial de mi casa?"
- "Placas solares en Valencia: guía 2026"
- "Precios de instalaciones eléctricas por tipo"

Cada artículo es una puerta de entrada desde búsquedas informacionales.

### 🟢 P13: Consolidar NAP (Name, Address, Phone)

Asegurar que el nombre, dirección y teléfono son idénticos en:
- Web (Schema y visible)
- Google Business Profile
- Directorios (si los hay)
- Redes sociales

### 🟢 P14: Añadir `hreflang="es"` al `<head>`

Aunque el sitio solo está en español, especificar `hreflang` ayuda a Google a saber que el contenido es para España:
```html
<link rel="alternate" href="https://adridomuselectric.com" hreflang="es" />
<link rel="alternate" href="https://adridomuselectric.com" hreflang="x-default" />
```

### 🟢 P15: Enlaces entre páginas de servicio

En cada página de servicio, añadir una sección "Otros servicios que te pueden interesar" con enlaces internos. Mejora el flujo de link juice y la navegación.

### 🟢 P16: Optimizar sitemap dinámico

El `lastmod` está fijo. Idealmente, actualizarlo automáticamente con cada despliegue. Se puede hacer con un script en Vercel o actualizarlo manualmente al hacer cambios.

### 🟢 P17: Página 404 personalizada

Añadir una página `404.html` con diseño de la marca y enlace para volver al inicio o contactar.

---

## 5. PLAN DE ACCIÓN RECOMENDADO

### Fase 0 — Inmediato (antes de comprar el dominio)
| # | Tarea | Esfuerzo | Impacto |
|---|-------|----------|---------|
| 1 | Cambiar canonical y sitemap a `adridomus.vercel.app` temporalmente | 5 min | 🟡 Medio |
| 2 | Instalar Google Analytics 4 | 30 min | 🔴 Alto |
| 3 | Configurar Google Search Console (con Vercel) | 30 min | 🔴 Alto |
| 4 | Crear Google Business Profile y rellenar perfil | 1-2 h | 🔴 Alto |
| 5 | Conseguir 5 reseñas en Google | 1 semana | 🔴 Alto |

### Fase 1 — Compra del dominio
| # | Tarea | Esfuerzo | Impacto |
|---|-------|----------|---------|
| 6 | Comprar `adridomuselectric.com` y conectarlo a Vercel | 30 min | 🔴 Alto |
| 7 | Revertir canonical y sitemap al dominio real | 5 min | 🔴 Alto |
| 8 | Crear email profesional (`info@...`) | 30 min | 🟡 Medio |
| 9 | Configurar redirects (www, http→https) en Vercel | 15 min | 🔴 Alto |
| 10 | Validar todo en Search Console | 30 min | 🔴 Alto |

### Fase 2 — Contenido y autoridad
| # | Tarea | Esfuerzo | Impacto |
|---|-------|----------|---------|
| 11 | Ampliar sección Sobre nosotros (E-E-A-T) | 1 h | 🟡 Medio |
| 12 | Añadir testimonios reales en página de inicio | 1 h | 🟡 Medio |
| 13 | Expandir contenido de cada página de servicio (400-600 words) | 4 h | 🟡 Medio |
| 14 | Añadir FAQ Schema en cada servicio | 2 h | 🟢 Medio |
| 15 | Añadir BreadcrumbList Schema | 1 h | 🟢 Bajo |
| 16 | Crear página 404 personalizada | 30 min | 🟢 Bajo |

### Fase 3 — Crecimiento
| # | Tarea | Esfuerzo | Impacto |
|---|-------|----------|---------|
| 17 | Crear blog con 5 artículos iniciales | 8-10 h | 🟡 Medio |
| 18 | Enlazar artículos del blog con páginas de servicio | 1 h | 🟡 Medio |
| 19 | Crear iconos SVG propios para servicios | 2 h | 🟢 Bajo |
| 20 | Publicar en directorios locales (Páginas Amarillas, etc.) | 2 h | 🟡 Medio |

---

## 6. OPORTUNIDADES DE KEYWORDS

Basado en el mercado de Valencia:

| Keyword | Intención | Volumen estimado | Dificultad |
|---------|-----------|-----------------|------------|
| electricista valencia | Transaccional | Alta | Media |
| electricista de urgencia valencia | Transaccional | Media | Media |
| reparación averías eléctricas valencia | Transaccional | Media | Baja |
| instalar placas solares valencia | Comercial | Alta | Alta |
| instalaciones eléctricas valencia | Transaccional | Media | Baja |
| cambiar diferencial valencia | Transaccional | Baja | Baja |
| presupuesto electricista valencia | Comercial | Alta | Media |
| boletín eléctrico valencia | Informacional | Baja | Baja |

**Recomendación:** Atacar keywords de baja dificultad primero (reparación de averías, boletín eléctrico) y competir en las de alta dificultad con contenido de calidad + reseñas + GBP.

---

## 7. MÉTRICAS A MONITOREAR

Una vez implementado GA4 + Search Console:

| Métrica | Objetivo inicial | Herramienta |
|---------|-----------------|-------------|
| Impresiones en búsqueda | +500/mes | Search Console |
| Clics desde búsqueda | +30/mes | Search Console |
| Posición media "electricista valencia" | Top 10 | Search Console |
| Llamadas desde web | +5/mes | GA4 (evento click tel) |
| Mensajes WhatsApp | +10/mes | GA4 (evento click WhatsApp) |
| Visitas a páginas de servicio | +50/mes cada una | GA4 |
| Reseñas en Google | +5 nuevas | GBP |

---

## 8. ARCHIVOS A MODIFICAR / CREAR

| Archivo | Acción | Prioridad |
|---------|--------|-----------|
| `index.html` | Añadir GA4, expandir About, añadir testimonios | 🔴 |
| `servicios/*/index.html` | Expandir contenido, añadir FAQ+Breadcrumb Schema | 🟡 |
| `sitemap.xml` | Actualizar con dominio real y lastmod dinámico | 🔴 |
| `robots.txt` | Verificar que apunte al dominio correcto | 🟢 |
| `vercel.json` | **Crear** con redirects y config | 🟡 |
| `404.html` | **Crear** con diseño de marca | 🟢 |
| `doc/MEMORANDUM-FASE1.md` | Actualizar con checklist de esta auditoría | 🟢 |

---

*Auditoría generada el Julio 2026. Próxima revisión recomendada: 30 días después de implementar las fases 0 y 1.*
