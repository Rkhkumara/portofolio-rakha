// ============================================================
// Portfolio Service Worker — Rakha Aditisna Kumara
// Strategy: Cache-First for static assets, Network-First for HTML
// ============================================================

const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE  = `rakha-static-${CACHE_VERSION}`;
const IMAGE_CACHE   = `rakha-images-${CACHE_VERSION}`;
const FONT_CACHE    = `rakha-fonts-${CACHE_VERSION}`;

// All known caches – old versions will be purged on activate
const ALL_CACHES = [STATIC_CACHE, IMAGE_CACHE, FONT_CACHE];

// Core static assets pre-cached at install time
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/assets/docs/CV_Rakha_Aditisna.pdf',
];

// ─── Install: pre-cache core shell ─────────────────────────
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(PRECACHE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// ─── Activate: purge old cache versions ────────────────────
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => !ALL_CACHES.includes(name))
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// ─── Fetch: routing with per-type strategy ─────────────────
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET & cross-origin API calls (GitHub, etc.)
    if (request.method !== 'GET') return;
    if (url.hostname === 'api.github.com') return;

    // ── Google Fonts & Material Symbols → Cache-First ──────
    if (
        url.hostname === 'fonts.googleapis.com' ||
        url.hostname === 'fonts.gstatic.com'
    ) {
        event.respondWith(cacheFirst(request, FONT_CACHE));
        return;
    }

    // ── Remote Images (googleusercontent) → Cache-First ────
    if (url.hostname === 'lh3.googleusercontent.com') {
        event.respondWith(cacheFirst(request, IMAGE_CACHE));
        return;
    }

    // ── Tailwind CDN & other remote scripts → Cache-First ──
    if (url.hostname === 'cdn.tailwindcss.com') {
        event.respondWith(cacheFirst(request, STATIC_CACHE));
        return;
    }

    // ── HTML pages → Network-First (always fresh), fallback cache ──
    if (request.headers.get('Accept')?.includes('text/html')) {
        event.respondWith(networkFirst(request, STATIC_CACHE));
        return;
    }

    // ── Local assets (CSS, JS, PDF, images) → Stale-While-Revalidate ──
    if (url.origin === self.location.origin) {
        event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
        return;
    }
});

// ─── Strategy: Cache-First ─────────────────────────────────
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
    } catch {
        return new Response('', { status: 408, statusText: 'Network timeout' });
    }
}

// ─── Strategy: Network-First ───────────────────────────────
async function networkFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    try {
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
    } catch {
        const cached = await cache.match(request);
        return cached || new Response('<h1>Offline</h1>', {
            headers: { 'Content-Type': 'text/html' }
        });
    }
}

// ─── Strategy: Stale-While-Revalidate ──────────────────────
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request).then((response) => {
        if (response.ok) cache.put(request, response.clone());
        return response;
    }).catch(() => null);

    return cached || await fetchPromise;
}
