var cacheUrls = [
    '/',
    '/src/css/styles.css',
    '/src/main.js',
    '/src/libs/*'
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