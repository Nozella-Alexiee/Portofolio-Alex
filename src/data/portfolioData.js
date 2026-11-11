export const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmad Zulfikri Alexander Disyin",
    nick: "Alex",
    kelas: "XII RPL",
    school: "SMK SIG (SMK Semen Gresik)",
    schoolShort: "SMK SIG",
    minat: "Web Development & Finance",
    tagline: "Siswa RPL yang gemar membangun web modern sekaligus membaca laporan keuangan & pasar modal.",
    avatar: "/images/profil.jpg",
    avatarAlt: "/images/foto-profil.jpg",
    statusBadge: "Terbuka untuk Kolaborasi Proyek & Diskusi",
    location: "Gresik / Jawa Timur, Indonesia",
    about: [
      "Halo, aku Alex — saat ini kelas XII RPL di SMK SIG. Ketertarikanku ke dunia finance sebenarnya sudah dimulai sejak bangku SMP, didorong rasa ingin tahu mendalam tentang cara mengelola finansial secara mandiri dan membaca pola pasar modal.",
      "Ketika awal masuk SMK mengambil jurusan RPL (Rekayasa Perangkat Lunak), jujur belum seberapa niat. Namun seiring berjalannya waktu dan berbagai tantangan coding, aku justru jatuh cinta pada rekayasa perangkat lunak dan arsitektur sistem.",
      "Sekilas dua bidang ini terlihat bertolak belakang, tetapi bagiku keduanya memiliki benang merah yang sama: seni membaca pola, logika sistemik, dan menyusun sesuatu yang rapi serta bernilai dari data."
    ]
  },

  quickStats: [
    { label: "Proyek Selesai", value: "7+" },
    { label: "Pendidikan", value: "XII RPL" },
    { label: "Fokus", value: "Full-Stack & Finance" },
    { label: "Status", value: "Available" }
  ],

  journey: [
    {
      period: "SMP",
      title: "Ketertarikan Awal Finansial",
      desc: "Mulai penasaran dengan pengelolaan keuangan pribadi, instrumen investasi, dan dinamika pasar modal."
    },
    {
      period: "Awal SMK",
      title: "Langkah Pertama di RPL",
      desc: "Memilih jurusan Rekayasa Perangkat Lunak di SMK SIG, memulai fondasi algoritma dan pemrograman web dasar."
    },
    {
      period: "Pertengahan SMK",
      title: "Jatuh Cinta pada Software Engineering",
      desc: "Mulai eksplorasi mendalam: React, arsitektur backend, desktop apps, dan ekosistem open-source."
    },
    {
      period: "18 Mei 2026",
      title: "Sekolah Pasar Modal IDX",
      desc: "Menyelesaikan program Sekolah Pasar Modal resmi dari PT Bursa Efek Indonesia (IDX) di Surabaya."
    },
    {
      period: "Sekarang",
      title: "Kelas XII RPL & Produksi Nyata",
      desc: "Membangun sistem skala nyata seperti Sistem Absensi untuk RS Semen Gresik, Ekosistem oneSIG, dan Alexel Studio."
    }
  ],

  skills: {
    frontend: [
      { name: "React / Vite", level: "Mahir" },
      { name: "TypeScript", level: "Menengah" },
      { name: "JavaScript (ES6+)", level: "Mahir" },
      { name: "Tailwind CSS", level: "Mahir" },
      { name: "HTML5 & CSS3", level: "Mahir" },
      { name: "PWA & Kiosk", level: "Menengah" }
    ],
    backend: [
      { name: "PHP & Laravel", level: "Mahir" },
      { name: "Node.js & Express", level: "Menengah" },
      { name: "FastAPI (Python)", level: "Menengah" },
      { name: "REST API & WebSocket", level: "Menengah" }
    ],
    database: [
      { name: "PostgreSQL", level: "Mahir" },
      { name: "MySQL / MariaDB", level: "Mahir" },
      { name: "SQLite & Redis", level: "Dasar" },
      { name: "MongoDB", level: "Dasar" }
    ],
    tools: [
      { name: "MacBook Air M1 (macOS)", level: "Daily Driver" },
      { name: "VS Code & Git", level: "Mahir" },
      { name: "Docker", level: "Menengah" },
      { name: "DBeaver & Terminal", level: "Mahir" }
    ],
    finance: [
      { name: "Dasar Pasar Modal (IDX)", level: "Tersertifikasi" },
      { name: "Analisis Laporan Keuangan", level: "Menengah" },
      { name: "Investasi & Portofolio Saham", level: "Menengah" },
      { name: "Kalkulasi Bunga Majemuk", level: "Mahir" }
    ]
  },

  projects: [
    {
      id: "alexel",
      code: "ALXL",
      name: "Alexel Studio",
      badge: "v1.0 · OPEN SOURCE",
      category: "Desktop & AI Tool",
      tagline: "Editor kode desktop pintar yang berkolaborasi langsung bersama Agen AI.",
      description: "Editor kode desktop open-source buatan mandiri yang terintegrasi mulus dengan agen AI (Claude Code, Codex, Gemini). Dilengkapi peninjauan per perubahan, checkpoint rollback, klien database langsung (PostgreSQL, MySQL, SQLite, Mongo, Redis), klien HTTP, notebook Jupyter, dan Remote SSH.",
      highlights: [
        "Review AI mandiri dengan checkpoint rollback dan peninjauan diff",
        "Klien database multi-engine bawaan & diagram visual ER",
        "Klien HTTP berkas .http dengan enkripsi aman",
        "Dukungan multi-platform: macOS, Windows, Linux"
      ],
      stack: ["Electron", "React 19", "TypeScript", "CodeMirror 6", "Node.js", "Vite"],
      shots: [
        { src: "/images/proyek/alexel-antartika.webp", title: "Tema Antartika" },
        { src: "/images/proyek/alexel-database.webp", title: "Klien Database" },
        { src: "/images/proyek/alexel-api.webp", title: "Klien API" },
        { src: "/images/proyek/alexel-kawanan.webp", title: "Kawanan Agen AI" },
        { src: "/images/proyek/alexel-notebook.webp", title: "Jupyter Notebook" }
      ],
      links: [
        { label: "Unduh & Website", url: "https://alexel-stdio.netlify.app/", isPrimary: true },
        { label: "GitHub", url: "https://github.com/Nozella-Alexiee/alexel-studio", isPrimary: false }
      ]
    },
    {
      id: "onesig",
      code: "ONE",
      name: "oneSIG",
      badge: "11 PERAN · INTI SEKOLAH",
      category: "Ekosistem SIG",
      tagline: "Buku induk digital sekolah — pusat single-source-of-truth SMK SIG.",
      description: "Sistem informasi terpadu SMK SIG yang mengintegrasikan absensi, jadwal mata pelajaran, rekap rapor, kalender akademik, hingga dompet digital dan kasir koperasi berbasis scan QR. Mengakomodasi 11 hak akses peran dengan audit log ketat.",
      highlights: [
        "Single identity & data source untuk SIGChat dan SIGlearning",
        "Kasir koperasi digital scan QR instan",
        "Multi-role RBAC: Siswa, Guru, Wali Kelas, Kasir, BK, Kepala Sekolah",
        "Audit log komprehensif untuk setiap perubahan nilai & data siswa"
      ],
      stack: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "Docker", "PWA"],
      shots: [
        { src: "/images/proyek/onesig-beranda.webp", title: "Beranda Utama" },
        { src: "/images/proyek/onesig-kasir.webp", title: "Kasir Koperasi QR" },
        { src: "/images/proyek/onesig-rekap.webp", title: "Rekap Nilai Siswa" },
        { src: "/images/proyek/onesig-jadwal.webp", title: "Manajemen Jadwal" }
      ],
      links: []
    },
    {
      id: "sigchat",
      code: "CHAT",
      name: "SIGChat",
      badge: "E2EE · PRIVAT",
      category: "Ekosistem SIG",
      tagline: "Aplikasi obrolan sekolah aman dengan enkripsi end-to-end.",
      description: "Media komunikasi internal sekolah pengganti grup WhatsApp konvensional. Menggunakan enkripsi end-to-end (E2EE) sehingga server tidak dapat mengintip isi pesan. Kanal kelas otomatis tersinkronisasi dengan master data oneSIG.",
      highlights: [
        "Enkripsi End-to-End (E2EE) untuk keamanan pesan",
        "Grup kelas & mapel otomatis terbentuk dari sinkronisasi data oneSIG",
        "Saluran konsultasi privat guru BK dan polling interaktif",
        "PWA responsif untuk mobile smartphone dan desktop browser"
      ],
      stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "PWA"],
      shots: [
        { src: "/images/proyek/sigchat-room.webp", title: "Ruang Obrolan Terenkripsi" },
        { src: "/images/proyek/sigchat-gelap.webp", title: "Mode Gelap (Desktop)" },
        { src: "/images/proyek/sigchat-room-m.webp", title: "Tampilan Mobile Room" },
        { src: "/images/proyek/sigchat-pair-m.webp", title: "Otentikasi & Pair Perangkat" }
      ],
      links: []
    },
    {
      id: "siglearning",
      code: "LRN",
      name: "SIGlearning",
      badge: "LMS · INTERAKTIF",
      category: "Ekosistem SIG",
      tagline: "Learning management system sekolah dengan tracking progres terpadu.",
      description: "Platform belajar online untuk SMK SIG. Guru dapat menerbitkan modul Capaian Pembelajaran (CP), video, dokumen PDF, dan latihan soal adaptif. Siswa dapat memonitor progres capaian dan mengerjakan kuis interaktif tanpa otentikasi terpisah.",
      highlights: [
        "Single Sign-On langsung dari akun oneSIG",
        "Papan peringkat latihan & analitik pemahaman siswa",
        "Nilai kuis latihan dapat langsung ditarik ke rapor oneSIG",
        "Antarmuka yang ramah bagi guru maupun siswa"
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      shots: [
        { src: "/images/proyek/siglearning-beranda.webp", title: "Beranda Pembelajaran" },
        { src: "/images/proyek/siglearning-kuis.webp", title: "Pengerjaan Kuis Interaktif" },
        { src: "/images/proyek/siglearning-progres.webp", title: "Tracking Progres Capaian" },
        { src: "/images/proyek/siglearning-guru.webp", title: "Portal Manajemen Guru" }
      ],
      links: []
    },
    {
      id: "orvella",
      code: "ORVL",
      name: "Orvella OS",
      badge: "OPEN SOURCE",
      category: "Platform Belajar",
      tagline: "Platform edukasi pemrograman interaktif dengan sandbox 12 bahasa.",
      description: "Ekosistem edukasi kode yang menghadirkan web desktop 'Orvella OS' lengkap dengan dock, jendela multitasking, sandbox kompilasi 12 bahasa (Python, JS, C, C++, Rust, Go, SQL, dll.), kolaborasi live realtime, dan asisten AI pintar.",
      highlights: [
        "Metode 4 Tahap: Pahami → Perkuat → Kuis → Uji",
        "12 bahasa pemrograman dijalankan sungguhan di isolated sandbox",
        "Real-time pair programming kolaboratif",
        "Studio materi untuk pembuatan modul interaktif"
      ],
      stack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "CodeMirror 6", "Docker"],
      shots: [
        { src: "/images/proyek/orvella-beranda.webp", title: "Orvella Desktop OS" },
        { src: "/images/proyek/orvella-sandbox.webp", title: "Sandbox Eksekusi Kode" },
        { src: "/images/proyek/orvella-pahami.webp", title: "Modul Belajar Interaktif" }
      ],
      links: [
        { label: "Instagram @orvella.labs", url: "https://instagram.com/orvella.labs", isPrimary: true }
      ]
    },
    {
      id: "epilketos",
      code: "PLKT",
      name: "E-Pilketos",
      badge: "v2.0 · FACE RECOGNITION",
      category: "Aplikasi Sekolah",
      tagline: "Sistem pemilihan OSIS digital berbasis pengenalan biometrik wajah.",
      description: "Solusi pemilihan ketua OSIS digital tanpa kertas. Pemilih divalidasi langsung di browser menggunakan face recognition (face-api.js), suara disimpan secara anonim tanpa jejak identitas pemilih, dan rekapitulasi quick count otomatis siap cetak berita acara.",
      highlights: [
        "Verifikasi biometrik wajah langsung di browser pemilih",
        "Prinsip LUBER JURDIL: enkripsi anonimitas surat suara",
        "Mode Kiosk PWA responsif di tablet bilik suara",
        "Generate berita acara & grafik hasil voting real-time"
      ],
      stack: ["PHP 8.1", "MariaDB", "face-api.js", "PWA", "JavaScript"],
      shots: [
        { src: "/images/proyek/epilketos-bilik.webp", title: "Bilik Suara Digital" },
        { src: "/images/proyek/epilketos-surat-suara.webp", title: "Tampilan Surat Suara" },
        { src: "/images/proyek/epilketos-hasil.webp", title: "Rekap Quick Count & Berita Acara" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Nozella-Alexiee/e-pilketos", isPrimary: true }
      ]
    },
    {
      id: "absensi",
      code: "ABSN",
      name: "Sistem Absensi Karyawan",
      badge: "PRODUKSI · RS SEMEN GRESIK",
      category: "Industri / Rumah Sakit",
      tagline: "Sistem absensi berbasis web yang diimplementasikan di RS Semen Gresik.",
      description: "Aplikasi web presensi pegawai yang digunakan aktif oleh PT Cipta Nirmala (RS Semen Gresik). Menyediakan pencatatan kehadiran harian, pengajuan izin, sakit, dinas luar, serta export rekapitulasi kehadiran komprehensif bagi manajemen HR.",
      highlights: [
        "Digunakan aktif dalam operasional PT Cipta Nirmala / RS Semen Gresik",
        "Manajemen pengajuan izin, sakit, dan cuti terintegrasi",
        "Dashboard rekapitulasi kehadiran otomatis untuk bagian kepegawaian",
        "UI bersih, intuitif, dan responsif untuk mobile staf"
      ],
      stack: ["PHP", "MySQL", "Bootstrap", "Apache", "JavaScript"],
      shots: [
        { src: "/images/tampilan-1.jpg", title: "Dashboard Manajemen Kehadiran" },
        { src: "/images/tampilan-2.jpg", title: "Halaman Otentikasi Pegawai" },
        { src: "/images/tampilan-3.png", title: "Formulir Izin & Sakit" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Nozella-Alexiee/Absensi", isPrimary: true }
      ]
    }
  ],

  certificates: [
    {
      id: "idx",
      title: "Sekolah Pasar Modal (SPM)",
      issuer: "PT Bursa Efek Indonesia (IDX)",
      date: "18 Mei 2026",
      location: "Surabaya",
      category: "Finance & Capital Market",
      badge: "Tersertifikasi",
      image: "/images/sertifikat-pasar-modal.jpg",
      logo: "/images/logo-idx.jpg",
      description: "Pelatihan resmi mengenai mekanisme perdagangan pasar modal, instrumen saham, analisis fundamental emiten, serta manajemen risiko investasi."
    },
    {
      id: "asean-ai",
      title: "AI Ready ASEAN",
      issuer: "ASEAN Foundation",
      date: "26 Juli 2026",
      location: "Regional ASEAN",
      category: "Artificial Intelligence",
      badge: "15 Modul Lulus",
      image: "/images/sertifikat-ai-cert.jpg",
      logo: "/images/logo-ai-ready-asean.png",
      description: "Kurikulum komprehensif kecerdasan buatan mencakup etika AI, machine learning, data science, dan implementasi otomasi produktif."
    },
    {
      id: "pkl-nale",
      title: "Praktik Kerja Lapangan (PKL)",
      issuer: "PT Nale System Integrator",
      date: "1 Jan – 30 Jun 2026",
      location: "Malang",
      category: "Software Industry",
      badge: "Nilai Sangat Baik",
      image: "/images/sertifikat-pkl.jpg",
      logo: "/images/asian-foundation.png",
      description: "Pengalaman 6 bulan praktik di industri software house: pengerjaan sistem skala produksi, koordinasi tim pengembang, dan deployment aplikasi."
    }
  ],

  hobbies: {
    playlist: {
      title: "Musik-In",
      info: "137 lagu • 8 jam 42 menit",
      description: "Daftar putar lagu-lagu pengiring saat ngoding malam, eksplorasi sistem, dan merenung di bawah langit berbintang.",
      url: "https://music.apple.com/id/playlist/musik-in/pl.u-38oWXBgTY0YdybE?l=id",
      artists: ["Justin Bieber", "Djo", "Rihanna", "Ariana Grande", "SZA", "Arctic Monkeys", "Tommy Richman"]
    },
    favoriteSong: {
      title: "If I Let You Go",
      artist: "Westlife",
      cover: "/images/if-i-let-you-go-cover.jpg",
      bandPhoto: "/images/westlife-band.webp",
      spotifyUrl: "https://open.spotify.com/intl-id/track/3St0RlsL0Z0klK1mqWakQm?si=6595a19fc918413d",
      appleUrl: "https://music.apple.com/us/song/if-i-let-you-go-radio-edit/266441693"
    },
    stargazing: {
      text: "Salah satu momen favoritku adalah duduk sejenak memandangi langit malam — melihat kelap-kelip bintang di sela-sela kesibukan tugas sekolah dan baris kode.",
      photos: ["/images/hobi-foto-1.jpg", "/images/hobi-foto-2.jpg"]
    }
  },

  contact: {
    note: "Terbuka untuk kolaborasi proyek pembuatan aplikasi web, eksplorasi open-source, maupun diskusi seputar pasar modal & analisis keuangan.",
    email: "nongzel52@gmail.com",
    links: [
      { name: "GitHub", url: "https://github.com/Nozella-Alexiee", username: "Nozella-Alexiee" },
      { name: "Instagram", url: "https://instagram.com/ale.xiee._", username: "@ale.xiee._" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/nozella-alexander-b5044a413", username: "Nozella Alexander" }
    ]
  }
};

/**
 * Kalkulasi Bunga Majemuk Bulanan
 */
export function hitungMajemuk(modalAwal, setoranBulanan, bungaTahunanPersen, durasiTahun) {
  const r = (bungaTahunanPersen / 100) / 12;
  let saldo = modalAwal;
  let totalDisetor = modalAwal;
  const breakdownTahunan = [{ tahun: 0, saldo: modalAwal, disetor: modalAwal }];

  for (let bulan = 1; bulan <= durasiTahun * 12; bulan++) {
    saldo = saldo * (1 + r) + setoranBulanan;
    totalDisetor += setoranBulanan;
    if (bulan % 12 === 0) {
      breakdownTahunan.push({
        tahun: bulan / 12,
        saldo: Math.round(saldo),
        disetor: Math.round(totalDisetor)
      });
    }
  }

  return {
    breakdownTahunan,
    saldoAkhir: Math.round(saldo),
    totalDisetor: Math.round(totalDisetor),
    totalBunga: Math.round(saldo - totalDisetor)
  };
}

export function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}
