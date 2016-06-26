let cacheUrls = [
    '/index.html',
    '/src/css/styles.css',
    '/src/main.js',
    '/src/libs/require/require.js',
    '/src/libs/text/text.js',
    '/src/libs/path/path.js',
    '/src/js/Router.js'
];

let CACHE_NAME = 'caches-v5';

self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll(cacheUrls);
        })
    );
    console.log("service worker installation finished");
});

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.match(event.request)
            .then((response)=>{
                let fetchPromise = fetch(event.request)
                .then((networkResponse)=>{
                    if(networkResponse.ok){
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }else{
                        return new Response("You are offline!");
                    }
                }).catch((why)=>{
                    console.log(why);
                    return new Response("You are offline!");
                });
                return response || fetchPromise;
            });
        })
    );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});