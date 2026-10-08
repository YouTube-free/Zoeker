// Service worker: zorgt dat de app offline opent en plaatjes snel laden.
// Verander VERSIE als je plaatjes vervangt met dezelfde bestandsnaam.
const VERSIE = "trein-v1";
const BESTANDEN = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png",
  "plaatjes/ddz-6.png", "plaatjes/ddz-4.png", "plaatjes/virm-6.png", "plaatjes/virm-6-nieuw.png",
  "plaatjes/flirt-4.png", "plaatjes/flirt-3.png", "plaatjes/icng-8.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSIE).then(c => c.addAll(BESTANDEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== VERSIE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return; // NS-aanvragen en lettertypen gaan gewoon door
  if (e.request.mode === "navigate") { // pagina: eerst netwerk, zodat updates direct zichtbaar zijn
    e.respondWith(fetch(e.request).then(r => { const k = r.clone(); caches.open(VERSIE).then(c => c.put(e.request, k)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else { // plaatjes en iconen: eerst cache
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(n => { const k = n.clone(); caches.open(VERSIE).then(c => c.put(e.request, k)); return n; })));
  }
});
