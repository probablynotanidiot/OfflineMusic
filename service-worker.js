const CACHE_NAME = "music-player-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css", // if you separate your CSS later
  "./icon-192.png",
  "./icon-512.png"
  // You can add other files like scripts or images here
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
