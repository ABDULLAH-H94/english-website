/*! English Path – Service Worker (Workbox 7)
 * ---------------------------------------------------------------------------
 * Change log:
 *   2026-10-17 : Initial PWA / offline support.
 *                - Network-first for page navigations (fresh online, cached offline).
 *                - Cache-first for static assets with versioned/immutable names.
 *                - Stale-while-revalidate for fonts & CDN libraries.
 *                - Precache the whole app shell for full offline availability.
 *                - Excludes login / OAuth / cross-origin requests from app caches.
 * ---------------------------------------------------------------------------
 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js');

/* Bump this value on every deploy so the precache refreshes. */
const BUILD = '2026-10-17';

if (self.workbox) {
  workbox.setConfig({ debug: false });
  workbox.core.clientsClaim();
  workbox.core.skipWaiting();

  const { registerRoute } = workbox.routing;
  const { NetworkFirst, CacheFirst, StaleWhileRevalidate } = workbox.strategies;
  const { ExpirationPlugin } = workbox.expiration;
  const { CacheableResponsePlugin } = workbox.cacheableResponse;

  /* Never cache login / OAuth / auth callbacks, and never cache cross-origin
     app requests (OAuth providers, identity pages, etc.). */
  const AUTH_DENYLIST = /\/(login|logout|signin|sign-in|signup|sign-up|oauth|oauth2|auth|authorize|callback|session|token)\b/i;
  const isDenied = (url) => AUTH_DENYLIST.test(url.pathname) || url.origin !== self.location.origin;

  /* ---- Precache the app shell: guarantees the site works fully offline ---- */
  workbox.precaching.precacheAndRoute([
    { url: './', revision: BUILD },
    { url: 'index.html', revision: BUILD },
    { url: 'questions.html', revision: BUILD },
    { url: 'style.css', revision: BUILD },
    { url: 'questions.css', revision: BUILD },
    { url: 'script.js', revision: BUILD },
    { url: 'questions.js', revision: BUILD },
    { url: 'pwa.js', revision: BUILD },
    { url: 'manifest.json', revision: BUILD },
    { url: 'icons/icon-192.png', revision: BUILD },
    { url: 'icons/icon-512.png', revision: BUILD },
    { url: 'icons/icon-maskable-192.png', revision: BUILD },
    { url: 'icons/icon-maskable-512.png', revision: BUILD },
    { url: 'icons/apple-touch-icon.png', revision: BUILD },
    { url: 'icons/favicon-32.png', revision: BUILD }
  ]);

  /* ---- Pages (HTML navigations): Network-first ---- */
  registerRoute(
    ({ request, url }) => request.mode === 'navigate' && !isDenied(url),
    new NetworkFirst({
      cacheName: 'ep-pages',
      networkTimeoutSeconds: 4,
      plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })]
    })
  );

  /* ---- Static assets (immutable / versioned names): Cache-first ---- */
  registerRoute(
    ({ request, url }) =>
      !isDenied(url) &&
      ['style', 'script', 'image', 'font', 'manifest'].includes(request.destination),
    new CacheFirst({
      cacheName: 'ep-static',
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        new ExpirationPlugin({
          maxEntries: 150,
          maxAgeSeconds: 60 * 60 * 24 * 365,
          purgeOnQuotaError: true
        })
      ]
    })
  );

  /* ---- Google Fonts / cdnjs: stale-while-revalidate ---- */
  registerRoute(
    ({ url }) => /fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com/.test(url.origin),
    new StaleWhileRevalidate({ cacheName: 'ep-vendor' })
  );

  /* Allow the page to trigger an immediate update. */
  self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
  });
} else {
  console.warn('[SW] Workbox failed to load; offline support disabled.');
}
