var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  '/',
  '/manifest.json',
  'index.html',
  '/script/webpack-bundle.js'
];

window.addEventListener('install', function(event) {
  console.log("Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        console.log("Cache opened");
        return cache.addAll(urlsToCache);
      })
  );
});

window.addEventListener('activate', function(event){
  console.log("Cache version ready to handle requests -",CACHE_NAME);
});

window.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});