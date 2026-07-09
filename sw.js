const CACHE = 'adridomus-v2';

const PRECACHE = [
  '/adridomus/',
  '/adridomus/index.html',
  '/adridomus/style.css',
  '/adridomus/script.js',
  '/adridomus/img/optimized/banner.webp',
  '/adridomus/img/optimized/banner@400w.webp',
  '/adridomus/img/optimized/banner@800w.webp',
  '/adridomus/img/optimized/banner@1.2x.webp',
  '/adridomus/img/optimized/banner.jpg',
  '/adridomus/img/optimized/banner@400w.jpg',
  '/adridomus/img/optimized/banner@800w.jpg',
  '/adridomus/img/optimized/banner@1.2x.jpg',
  '/adridomus/servicios/instalaciones-electricas/index.html',
  '/adridomus/servicios/averias-electricas/index.html',
  '/adridomus/servicios/reparaciones-hogar/index.html',
  '/adridomus/servicios/placas-solares/index.html',
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