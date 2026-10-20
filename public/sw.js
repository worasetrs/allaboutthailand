// Offline support: essentials and key guides are precached; other pages are
// cached as you visit them (network first, cache as fallback).
const VERSION = 'aat-v1';
const PRECACHE = [
  '/',
  '/essentials/',
  '/guides/',
  '/guides/visa-exemption/',
  '/guides/tdac-arrival-card/',
  '/guides/healthcare-and-emergencies/',
  '/guides/money-atms-and-payments/',
  '/guides/etiquette-and-laws/',
  '/favicon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isFont) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((r) => r || caches.match('/essentials/'))),
    );
    return;
  }

  // Static assets and fonts: cache first, refresh in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || network;
    }),
  );
});
