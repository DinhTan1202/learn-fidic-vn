const CACHE_NAME = 'learn-fidic-v21';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './security.js',
  './data/fidic-data.js',
  './data/clauses-extended.js',
  './data/red17-part1.js',
  './data/red17-part2.js',
  './data/red17-part3.js',
  './data/other-books.js',
  './data/extra-data.js',
  './data/source-library.js',
  './data/fidic-guides.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
