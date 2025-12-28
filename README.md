# 🚀 Portofolio Rakha Aditisna Kumara

Website portofolio pribadi yang menampilkan keahlian, proyek, dan pengalaman sebagai **Data Analyst & Web Programmer**. Dibangun dengan teknologi modern untuk memberikan pengalaman pengguna yang responsif dan interaktif.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Fitur

- 🎨 **Desain Modern & Responsif** - UI yang menarik dengan Tailwind CSS, responsif di semua perangkat
- 📊 **Statistik GitHub Real-time** - Menampilkan kontribusi dan aktivitas GitHub secara langsung
- 🏆 **Sertifikasi Interaktif** - Modal untuk melihat sertifikasi dan penghargaan
- 🎯 **Smooth Scrolling & Navigation** - Navigasi yang mulus dengan scroll spy untuk tracking section aktif
- 📱 **Mobile-First Design** - Optimized untuk mobile, tablet, dan desktop
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk performa optimal

## 🛠️ Teknologi yang Digunakan

### Core Technologies
- **React 19.2.0** - Library JavaScript untuk membangun UI
- **Vite 7.2.4** - Build tool yang cepat dan modern
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### Dependencies
- **lucide-react** - Icon library yang modern dan ringan
- **react-dom** - React DOM renderer

### Development Tools
- **ESLint** - Linting untuk kualitas kode
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Instalasi

### Prerequisites
Pastikan Anda telah menginstall:
- **Node.js** (versi 18 atau lebih tinggi)
- **npm** atau **yarn**

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/Rkhkumara/portofolio-rakha.git
   cd portofolio-rakha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173
   ```

## 🚀 Build untuk Production

```bash
# Build project
npm run build

# Preview production build
npm run preview
```

File hasil build akan berada di folder `dist/` dan siap untuk di-deploy.

## 📂 Struktur Project

```
portofolio-rakha/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, documents, certificates
│   │   ├── docs/        # CV dan dokumen PDF
│   │   └── img/         # Gambar dan sertifikasi
│   ├── components/      # React components
│   │   ├── CertModal.jsx
│   │   ├── GithubStats.jsx
│   │   ├── Navbar.jsx
│   │   └── StatCard.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useScrollSpy.js
│   ├── utils/           # Utility functions
│   │   └── config.js
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── dist/                # Production build output
├── index.html           # HTML template
├── package.json         # Dependencies dan scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # Dokumentasi project
```

## 🎯 Sections

Website ini terdiri dari beberapa section:

1. **Home/Hero** - Introduction dan call-to-action
2. **Tentang Saya** - Profil, pendidikan, dan latar belakang
3. **Keahlian** - Teknologi dan skill yang dikuasai
4. **GitHub Stats** - Statistik kontribusi GitHub real-time
5. **Proyek Unggulan** - Portfolio proyek yang telah dikerjakan
6. **Pendidikan & Sertifikasi** - Riwayat pendidikan dan sertifikasi
7. **Kontak** - Form kontak dan informasi kontak

## ⚙️ Konfigurasi

### GitHub Username
Edit file `src/utils/config.js` untuk mengubah username GitHub:

```javascript
export const GITHUB_USERNAME = "Rkhkumara";
```

## 📝 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Menjalankan ESLint

## 🌐 Deployment

Project ini di-deploy menggunakan **Netlify**. Berikut beberapa cara untuk melakukan deployment:

### Metode 1: Netlify Drag & Drop (Paling Mudah)

1. **Build project terlebih dahulu**
   ```bash
   npm run build
   ```

2. **Buka [Netlify Drop](https://app.netlify.com/drop)**
   - Drag & drop folder `dist/` ke halaman Netlify
   - Website akan langsung live!

### Metode 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login ke Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   # Build project
   npm run build
   
   # Deploy ke Netlify
   netlify deploy --prod --dir=dist
   ```

### Metode 3: Continuous Deployment (Recommended)

1. **Push code ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Hubungkan ke Netlify**
   - Login ke [Netlify](https://app.netlify.com)
   - Klik "Add new site" → "Import an existing project"
   - Pilih repository GitHub Anda
   - Konfigurasi build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Klik "Deploy site"

3. **Setelah deployment pertama**
   - Netlify akan otomatis deploy setiap kali ada push ke repository
   - Anda akan mendapat URL seperti: `https://your-site-name.netlify.app`

### Netlify Configuration (Opsional)

Untuk konfigurasi lebih lanjut, buat file `netlify.toml` di root project:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

File ini memastikan routing SPA berfungsi dengan baik di Netlify.

## 📄 Lisensi

Project ini adalah portofolio pribadi. Semua hak cipta dilindungi.

## 👤 Kontak

**Rakha Aditisna Kumara**

- 📧 Email: aditisna.raka@gmail.com
- 📱 Phone: +62 821-1420-1556
- 💼 LinkedIn: [LinkedIn Profile](https://linkedin.com)
- 🐙 GitHub: [@Rkhkumara](https://github.com/Rkhkumara)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon library

---
