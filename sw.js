let cacheUrls = [
    '/',
    '/src/css/styles.css',
    '/src/main.js',
    '/src/libs/require/require.js',
    '/src/libs/text/text.js',
];
self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open('caches-v1')
        .then((cache)=>{
            return cache.addAll(cacheUrls);
        })
    );
    console.log("service worker installation finished");
});

self.addEventListener('fetch', (event)=>{
    event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});