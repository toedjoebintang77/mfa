self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
});
