importScripts('/static/uv/uv.bundle.js');
importScripts('/static/uv/uv.config.js');
importScripts('/static/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
