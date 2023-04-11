const CACHE_NAME = "version-1";
const urlsToCache = ["/index.html", "offline.html"];
const self = this;

/* Instalacion del Service Worker */
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((caches) => {
                console.log('opened cache')
                return caches.addAll(urlsToCache)
            })

    )
});

/* Peticiones del Service Worker */
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});

/* Activacion del Service Worker */
self.addEventListener("activate", (event) => {

    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
});


