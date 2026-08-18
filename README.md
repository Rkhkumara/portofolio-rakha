# Rakha Aditisna Kumara — Personal Portfolio

Website portofolio pribadi yang dibangun dari nol tanpa framework berat. Semua section ada di satu file `index.html` yang dioptimasi dengan service worker dan caching strategy via Netlify.

---

## Tentang Proyek

Portofolio ini dibuat untuk menampilkan perjalanan sebagai **Data Analyst & Web Programmer** — mulai dari proyek, keahlian, sampai sertifikasi. Desainnya dark mode dengan animasi ringan, cukup cepat dimuat, dan mobile-friendly.

---

## Tech Stack

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur & semantik halaman |
| Tailwind CSS (CDN) | Utility-first styling |
| Vanilla JavaScript | Logika interaktif |
| Google Fonts | Inter & Space Grotesk |
| Material Symbols | Icon set |
| Service Worker | Offline support & caching |

---

## Struktur Folder

```
web-portofolio-rakha/
├── index.html          ← Semua section ada di sini
├── sw.js               ← Service worker untuk caching
├── netlify.toml        ← Config cache & security headers
├── package.json
└── assets/
    ├── docs/
    │   └── CV_Rakha_Aditisna.pdf
    └── img/
        └── (sertifikat PDF)
```

---

## Jalankan Lokal

Butuh Node.js, tapi cukup untuk dev server ringan.

```bash
# Install dependensi (sekali saja)
npm install

# Jalankan dev server di localhost:3000
npm run dev
```

Buka browser ke `http://localhost:3000` — auto-reload aktif setiap kali ada perubahan di `index.html` atau folder `assets/`.

---

## Deploy

Hosting di **Netlify** sebagai static site tanpa build step.

- Branch: `main`
- Publish directory: `.` (root)
- Build command: —

Setiap push ke `main` langsung live otomatis. Config caching ada di [`netlify.toml`](./netlify.toml):
- HTML → `no-cache` (selalu fresh)
- Assets → `1 tahun immutable` (hash-busted)
- Service Worker → `no-store`

---

## Sections

1. **Hero** — Intro singkat + call-to-action
2. **Tentang** — Bio & statistik
3. **Keahlian** — Tech stack yang dikuasai
4. **GitHub Stats** — Aktivitas kontribusi
5. **Proyek** — Project unggulan
6. **Pendidikan & Sertifikasi** — Riwayat akademik + sertifikat
7. **Kontak** — Form kontak

---

## Lisensi

MIT — bebas dipakai dan dimodifikasi.

---

*Rakha Aditisna Kumara · 2025*
