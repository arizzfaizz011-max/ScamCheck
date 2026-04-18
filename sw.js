const CACHE_NAME = 'scamcheck-v2';
const ASSETS = [
'/ScamCheck/',
'/ScamCheck/index.html',
'/ScamCheck/manifest.json',
'/ScamCheck/2EA58EB5-1F9A-4109-B55E-103311109FF1.png'
];
self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(ASSETS);
})
);
});
self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});
