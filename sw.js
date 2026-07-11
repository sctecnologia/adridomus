const CACHE = 'adridomus-v3';

const PRECACHE = [
  './',
  'index.html',
  'style.css',
  'script.js',
  '404.html',
  'img/optimized/banner.webp',
  'img/optimized/banner@400w.webp',
  'img/optimized/banner@800w.webp',
  'img/optimized/banner@1.2x.webp',
  'img/optimized/banner.jpg',
  'img/optimized/banner@400w.jpg',
  'img/optimized/banner@800w.jpg',
  'img/optimized/banner@1.2x.jpg',
  'servicios/instalaciones-electricas/index.html',
  'servicios/averias-electricas/index.html',
  'servicios/reparaciones-hogar/index.html',
  'servicios/placas-solares/index.html',
  'legal/aviso-legal/index.html',
  'legal/politica-privacidad/index.html',
  'legal/politica-cookies/index.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request).then(response => {
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetched;
    })
  );
});