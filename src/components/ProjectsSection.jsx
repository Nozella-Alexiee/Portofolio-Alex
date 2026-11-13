import React, { useState } from "react";
import { FolderGit2, ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight, Layers, CheckCircle } from "lucide-react";

export const PROJECTS = [
  {
    id: "alexel",
    name: "Alexel Studio",
    badge: "v1.0 · Open Source",
    category: "open",
    categoryLabel: "Open Source & AI",
    stack: ["Electron", "React 19", "TypeScript", "CodeMirror 6", "Node.js"],
    tagline: "Editor kode desktop yang berkolaborasi langsung bersama Agen AI.",
    desc: "Editor kode desktop open-source buatan mandiri yang terintegrasi mulus dengan agen AI (Claude Code, Codex, Gemini). Dilengkapi peninjauan per perubahan, checkpoint rollback, klien database (PostgreSQL, MySQL, SQLite, Redis), klien HTTP, notebook, browser, dan remote SSH.",
    points: [
      "Review AI mandiri dengan checkpoint rollback dan peninjauan diff",
      "Klien database multi-engine bawaan & diagram visual ER",
      "Klien HTTP lewat berkas .http dengan rahasia terenkripsi",
      "Notebook Jupyter bawaan dan remote SSH terminal",
    ],
    liveUrl: "https://alexel-stdio.netlify.app/",
    githubUrl: "https://github.com/Nozella-Alexiee/alexel-studio",
    images: [
      "/images/proyek/alexel-antartika.webp",
      "/images/proyek/alexel-database.webp",
      "/images/proyek/alexel-api.webp",
      "/images/proyek/alexel-kawanan.webp",
      "/images/proyek/alexel-notebook.webp",
    ],
  },
  {
    id: "onesig",
    name: "oneSIG",
    badge: "11 Peran · Inti Sekolah",
    category: "sig",
    categoryLabel: "Ekosistem SIG",
    stack: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "Docker", "PWA"],
    tagline: "Buku induk digital sekolah — pusat single-source-of-truth SMK SIG.",
    desc: "Sistem informasi terpadu SMK SIG yang mengintegrasikan absensi, jadwal mata pelajaran, rekap rapor, kalender akademik, hingga dompet digital dan kasir koperasi berbasis scan QR. Mengakomodasi 11 hak akses peran berbeda dengan log audit transaksi.",
    points: [
      "Single Identity & data source untuk SIGChat dan SIGlearning",
      "Kasir koperasi digital scan QR instan dengan dompet siswa",
      "Sebelas peran terpisah: siswa, guru, wali kelas, kasir, BK, kepala sekolah",
      "Log audit lengkap untuk setiap perubahan data penting",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nozella-Alexiee/oneSIG",
    images: [
      "/images/proyek/onesig-beranda.webp",
      "/images/proyek/onesig-kasir.webp",
      "/images/proyek/onesig-rekap.webp",
      "/images/proyek/onesig-jadwal.webp",
    ],
  },
  {
    id: "sigchat",
    name: "SIGChat",
    badge: "E2EE · Privat",
    category: "sig",
    categoryLabel: "Ekosistem SIG",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "PWA"],
    tagline: "Aplikasi obrolan sekolah aman dengan enkripsi end-to-end.",
    desc: "Media komunikasi internal sekolah pengganti grup WhatsApp konvensional. Menggunakan enkripsi end-to-end (E2EE) sehingga server tidak dapat mengintip isi pesan. Kanal kelas otomatis sinkron dengan data rombel oneSIG.",
    points: [
      "Enkripsi End-to-End (E2EE) untuk keamanan pesan",
      "Grup kelas & mapel otomatis terbentuk dari sinkronisasi data oneSIG",
      "Jalur cepat konsultasi bimbingan konseling (BK) langsung ke guru",
      "Dukungan polling materi dan pinning pengumuman guru",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nozella-Alexiee/sigchat",
    images: [
      "/images/proyek/sigchat-room.webp",
      "/images/proyek/sigchat-gelap.webp",
      "/images/proyek/sigchat-room-m.webp",
      "/images/proyek/sigchat-pair-m.webp",
    ],
  },
  {
    id: "siglearning",
    name: "SIGlearning",
    badge: "LMS · Interaktif",
    category: "sig",
    categoryLabel: "Ekosistem SIG",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    tagline: "Learning management system sekolah dengan tracking progres terpadu.",
    desc: "Platform belajar online untuk SMK SIG. Guru dapat menerbitkan modul Capaian Pembelajaran (CP), video, dokumen PDF, dan latihan soal adaptif. Siswa dapat memonitor progres capaian dan mengerjakan kuis interaktif.",
    points: [
      "Single Sign-On langsung dari akun oneSIG",
      "Papan peringkat latihan & analitik pemahaman siswa",
      "Sinkronisasi otomatis nilai kuis ke Rekap Rapor oneSIG",
      "Akses materi fleksibel dengan progress bar per mata pelajaran",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nozella-Alexiee/siglearning",
    images: [
      "/images/proyek/siglearning-beranda.webp",
      "/images/proyek/siglearning-kuis.webp",
      "/images/proyek/siglearning-progres.webp",
      "/images/proyek/siglearning-guru.webp",
    ],
  },
  {
    id: "orvella",
    name: "Orvella OS",
    badge: "Open Source · 12 Bahasa",
    category: "open",
    categoryLabel: "Open Source & AI",
    stack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "CodeMirror 6", "Docker"],
    tagline: "Platform edukasi pemrograman interaktif dengan sandbox 12 bahasa.",
    desc: "Ekosistem edukasi kode yang menghadirkan web desktop 'Orvella OS' lengkap dengan dock, jendela multitasking, sandbox kompilasi 12 bahasa (Python, JS, C, C++, Rust, Go, SQL, dll.), kolaborasi live realtime via WebSocket.",
    points: [
      "Metode 4 Tahap: Pahami → Perkuat → Kuis → Uji",
      "12 bahasa pemrograman dijalankan sungguhan di isolated sandbox",
      "Tampilan desktop OS modern dengan window manager mandiri",
      "Integrasi diagram konsep dan tutorial terstruktur",
    ],
    liveUrl: "https://instagram.com/orvella.labs",
    githubUrl: "https://github.com/Nozella-Alexiee/orvella",
    images: [
      "/images/proyek/orvella-beranda.webp",
      "/images/proyek/orvella-pahami.webp",
      "/images/proyek/orvella-sandbox.webp",
    ],
  },
  {
    id: "epilketos",
    name: "E-Pilketos",
    badge: "v2.0 · Face Recognition",
    category: "sekolah",
    categoryLabel: "Industri & Sekolah",
    stack: ["PHP 8.1", "MariaDB", "face-api.js", "PWA", "JavaScript"],
    tagline: "Sistem pemilihan OSIS digital berbasis pengenalan biometrik wajah.",
    desc: "Solusi pemilihan ketua OSIS digital tanpa kertas. Pemilih divalidasi langsung di browser menggunakan face recognition (face-api.js), suara disimpan secara anonim tanpa jejak identitas pemilih, dan rekapitulasi real-time.",
    points: [
      "Verifikasi biometrik wajah langsung di browser pemilih",
      "Prinsip LUBER JURDIL: enkripsi anonimitas surat suara",
      "Quick count grafik perolehan suara live realtime",
      "Pencegahan suara ganda (anti-double voting lock)",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nozella-Alexiee/e-pilketos",
    images: [
      "/images/proyek/epilketos-bilik.webp",
      "/images/proyek/epilketos-hasil.webp",
      "/images/proyek/epilketos-surat-suara.webp",
    ],
  },
  {
    id: "absensi",
    name: "Sistem Absensi Karyawan",
    badge: "Produksi · RS Semen Gresik",
    category: "sekolah",
    categoryLabel: "Industri & Sekolah",
    stack: ["PHP", "MySQL", "Bootstrap", "Apache", "JavaScript"],
    tagline: "Sistem absensi berbasis web yang diimplementasikan di RS Semen Gresik.",
    desc: "Aplikasi web presensi pegawai yang digunakan aktif oleh PT Cipta Nirmala (RS Semen Gresik). Menyediakan pencatatan kehadiran harian, pengajuan izin, sakit, dinas luar, serta export rekapitulasi kehadiran staf ke format laporan resmi.",
    points: [
      "Digunakan aktif dalam operasional PT Cipta Nirmala / RS Semen Gresik",
      "Manajemen pengajuan izin, sakit, dan cuti terintegrasi",
      "Laporan presensi otomatis terstandarisasi untuk divisi SDM",
      "Arsitektur database relasional yang stabil dan cepat",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nozella-Alexiee/absensi",
    images: [
      "/images/proyek/onesig-beranda.webp",
      "/images/proyek/onesig-jadwal.webp",
    ],
  },
];

const FILTERS = [
  { id: "all", label: "Semua Proyek (7)" },
  { id: "sig", label: "Ekosistem SIG" },
  { id: "open", label: "Open Source & AI" },
  { id: "sekolah", label: "Industri & Sekolah" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImg = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="proyek" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase Karya Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Portofolio <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Proyek</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Dari editor kode desktop AI, ekosistem sistem sekolah terpadu, hingga absensi aktif di rumah sakit.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (Fazri Lukman Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Preview with Hover Zoom */}
                <div
                  onClick={() => openModal(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white border border-blue-400/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Quick View Tag on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg">
                      Lihat Screenshot ({project.images.length})
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400/90">{project.categoryLabel}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-lg bg-blue-500/10 text-cyan-400 font-mono">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <span>Detail Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white text-xs font-semibold border border-blue-500/30 transition-all"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                      title="Lihat kode di GitHub"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal Dialog */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#030014] border border-blue-500/40 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-10">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.name}
              </h3>
              <p className="text-sm text-slate-300 font-medium">{selectedProject.tagline}</p>
            </div>

            {/* Carousel Screenshot Gallery */}
            <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={selectedProject.images[currentImgIndex]}
                alt={`${selectedProject.name} screenshot ${currentImgIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Prev/Next Carousel Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-colors shadow-lg"
                    aria-label="Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-colors shadow-lg"
                    aria-label="Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    {selectedProject.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImgIndex ? "bg-cyan-400 w-4" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Deep Description */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p>{selectedProject.desc}</p>

              {/* Bullet Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold font-mono uppercase text-slate-400">Sorotan Fitur &amp; Arsitektur:</h4>
                <ul className="space-y-1.5">
                  {selectedProject.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <h4 className="text-xs font-bold font-mono uppercase text-slate-400 mb-2">Teknologi yang Digunakan:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((st, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono font-semibold"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <span>Buka Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                >
                  <span>Buka di GitHub</span>
                  <FolderGit2 className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
