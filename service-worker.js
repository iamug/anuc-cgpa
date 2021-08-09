// if ('serviceWorker' in navigator) {
//     // register service worker
//     navigator.serviceWorker.register('/service-worker.js');
// }

const staticDevCoffee = "anuc-cgpa";
const assets = [
  "./",
  "./index.html",
  "./css/jquery.mobile-1.4.5.min.css",
  "./js/ajax.js",
  "./js/jquery-2.1.4.min.js",
  "./js/jquery.mobile-1.4.5.min.js",
  "./img/anuc_high-192.png",
  "/img/anuc_high-512.png",
  "./img/anuc_high.png",
  "./img/anuc_medium.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
