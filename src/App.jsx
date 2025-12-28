import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Layout,
  Server,
  Award,
  BookOpen,
  Download,
  Star,
  Eye,
} from "lucide-react";

// Import modular components and hooks
import Navbar from "./components/Navbar";
import GithubStats from "./components/GithubStats";
import CertModal from "./components/CertModal";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { GITHUB_USERNAME } from "./utils/config";

// Import sertifikasi images
import cert1 from "./assets/img/1.pdf";
import cert2 from "./assets/img/2.pdf";
import cert3 from "./assets/img/3.pdf";

const App = () => {
  // Menggunakan custom hook untuk scroll spy
  const activeSection = useScrollSpy([
    "home",
    "tentang",
    "keahlian",
    "github",
    "proyek",
    "kontak",
  ]);

  // State untuk modal sertifikasi
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: null,
    title: "",
  });

  const openModal = (imageSrc, title) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: null,
      title: "",
    });
  };

  return (
    <div className="font-sans text-slate-800 bg-gray-50">
      <Navbar activeSection={activeSection} />

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Data Analyst <span className="text-slate-300">&</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Web Programmer
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            Mahasiswa Sistem Informasi yang berfokus mengubah data mentah
            menjadi wawasan bermakna dan membangun aplikasi web yang fungsional
            dan efisien.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <a
              href="#github"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-orange-600 hover:bg-orange-700 shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Github className="mr-2 h-5 w-5" />
              Lihat Statistik GitHub
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all transform hover:-translate-y-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-400 grayscale hover:grayscale-0 transition-all duration-500">
            <Code className="h-8 w-8 hover:text-blue-500 transition-colors" />
            <Database className="h-8 w-8 hover:text-green-500 transition-colors" />
            <Layout className="h-8 w-8 hover:text-purple-500 transition-colors" />
            <Server className="h-8 w-8 hover:text-orange-500 transition-colors" />
          </div>
        </div>
      </section>

      {/* --- TENTANG SAYA --- */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 transform translate-x-3 translate-y-3 rounded-2xl"></div>
              <img
                className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
                src="https://placehold.co/600x600/f1f5f9/1e293b?text=Rakha+Profile"
                alt="Foto Profil Rakha"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                Tentang Saya
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Solusi Berbasis Data & Logika
              </h2>
              <div className="mt-6 text-lg text-slate-600 space-y-4">
                <p>
                  Saya adalah mahasiswa tingkat akhir Sistem Informasi di{" "}
                  <strong>Universitas Gunadarma</strong> dengan IPK{" "}
                  <strong>3.73</strong>. Saya memiliki ketertarikan mendalam
                  pada dua dunia yang saling melengkapi: Analisis Data dan
                  Pengembangan Web.
                </p>
                <p>
                  Saya terbiasa bekerja dengan disiplin tinggi, menguasai Python
                  (Pandas/NumPy) untuk pengolahan data, serta SQL dan teknologi
                  web modern untuk menciptakan solusi digital yang efisien.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600">3.73</div>
                  <div className="text-sm font-medium text-slate-600">
                    IPK Saat Ini
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm font-medium text-slate-600">
                    Proyek Selesai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEAHLIAN --- */}
      <section id="keahlian" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
              Teknologi
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Keahlian Utama
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Python",
                icon: <Code />,
                color: "bg-yellow-100 text-yellow-700",
              },
              {
                name: "Pandas",
                icon: <Database />,
                color: "bg-blue-100 text-blue-700",
              },
              {
                name: "SQL",
                icon: <Server />,
                color: "bg-green-100 text-green-700",
              },
              {
                name: "HTML/CSS",
                icon: <Layout />,
                color: "bg-orange-100 text-orange-700",
              },
              {
                name: "PHP",
                icon: <Code />,
                color: "bg-purple-100 text-purple-700",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-orange-200 text-center"
              >
                <div
                  className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full mb-4 ${skill.color} group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GITHUB STATS --- */}
      <section id="github" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                Real-time Data
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl flex items-center gap-3">
                <Github className="w-8 h-8 md:w-10 md:h-10" />
                Statistik GitHub
              </h2>
              <p className="mt-2 text-slate-400 max-w-2xl">
                Ringkasan aktivitas dan kontribusi saya di platform open source
                GitHub.
              </p>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              Lihat Profil Penuh <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          <GithubStats username={GITHUB_USERNAME} />
        </div>
      </section>

      {/* --- PROYEK UNGGULAN --- */}
      <section id="proyek" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
              Portofolio
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Proyek Unggulan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Analisis Data Penjualan",
                desc: "Mengolah dataset besar menggunakan Python Pandas untuk menemukan tren musiman dan pola pembelian.",
                tags: ["Python", "Pandas", "Matplotlib"],
                color: "bg-blue-500",
              },
              {
                title: "Sistem Informasi Web",
                desc: "Aplikasi manajemen data berbasis PHP dan MySQL dengan antarmuka responsif untuk efisiensi admin.",
                tags: ["PHP", "MySQL", "Bootstrap"],
                color: "bg-orange-500",
              },
              {
                title: "Dashboard Interaktif",
                desc: "Visualisasi data real-time untuk monitoring performa bisnis menggunakan teknologi web modern.",
                tags: ["JavaScript", "Chart.js", "API"],
                color: "bg-green-500",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className={`h-48 w-full ${project.color} bg-opacity-10 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-900/10 text-6xl font-black">
                    {idx + 1}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PENDIDIKAN & SERTIFIKASI --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600 mr-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Pendidikan
                </h3>
              </div>

              <div className="space-y-8 pl-4 border-l-2 border-slate-200">
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-orange-500"></div>
                  <h4 className="text-lg font-bold text-slate-900">
                    S1 Sistem Informasi
                  </h4>
                  <p className="text-slate-500 text-sm mb-2">
                    Universitas Gunadarma, 2022 - Sekarang
                  </p>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    IPK: 3.73 / 4.00
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300"></div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Ilmu Pengetahuan Alam
                  </h4>
                  <p className="text-slate-500 text-sm">
                    SMAN 100 Jakarta, 2019 - 2022
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Sertifikasi & Penghargaan
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Intro to Data Analytics",
                    issuer: "RevoU Mini Course",
                    year: "2024",
                    highlight: false,
                    imageSrc: cert1,
                  },
                  {
                    title: "Cloud & AI for Digital Business",
                    issuer: "Microcredential (KOMDIGI)",
                    year: "2024",
                    highlight: true,
                    imageSrc: cert2,
                  },
                  {
                    title: "Juara 3 - Live Coding",
                    issuer: "Unlimited Software Building",
                    year: "2024",
                    highlight: true,
                    imageSrc: cert3,
                  },
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => cert.imageSrc && openModal(cert.imageSrc, cert.title)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex justify-between items-center group ${
                      cert.highlight
                        ? "bg-white border-orange-200 shadow-sm hover:border-orange-400 hover:shadow-lg hover:-translate-y-1"
                        : "bg-slate-50 border-slate-100 hover:border-orange-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex-1">
                      <h4
                        className={`font-bold transition-colors duration-300 ${
                          cert.highlight
                            ? "text-orange-900 group-hover:text-orange-700"
                            : "text-slate-700 group-hover:text-orange-600"
                        }`}
                      >
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {cert.highlight && (
                        <Star
                          size={18}
                          className="text-orange-500 fill-orange-500 group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {cert.imageSrc && (
                        <div className="p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                          <Eye size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KONTAK --- */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 text-white">
                <h2 className="text-3xl font-extrabold mb-6">
                  Mari Bekerja Sama
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  Tertarik mendiskusikan proyek data, pengembangan web, atau
                  peluang karir? Saya siap berdiskusi.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-slate-200 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">aditisna.raka@gmail.com</span>
                  </div>
                  <div className="flex items-center text-slate-200 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg">+62 821-1420-1556</span>
                  </div>
                </div>
                <div className="mt-12 flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-10 lg:p-16 bg-white lg:bg-gray-50">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="Ceritakan kebutuhan Anda..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Sertifikasi */}
      <CertModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
      />

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4 text-slate-500">
            &copy; 2025 Rakha Aditisna Kumara. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
