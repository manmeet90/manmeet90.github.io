var cacheUrls = [
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
    caches.match(event.request);
});