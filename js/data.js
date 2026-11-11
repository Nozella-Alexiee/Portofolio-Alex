/* Isi portofolio Alex. Sumber: index.html lama di GitHub (commit 493e867).
   Semua teks di halaman diambil dari sini. */
window.PORTO = {
  img: 'images/',
  name: 'Ahmad Zulfikri Alexander Disyin',
  nick: 'Alex',
  kelas: 'XII RPL',
  school: 'SMK SIG',
  minat: 'Web Development & Finance',
  tagline: 'Siswa RPL yang belajar bikin web sekaligus baca laporan keuangan',
  photo: 'profil.jpg',
  about: [
    'Halo, aku Alex — sekarang kelas XII RPL di SMK SIG. Ketertarikanku ke dunia finance sebenarnya udah mulai sejak SMP, pengen paham cara mengelola keuangan sendiri biar ke depannya nggak asal-asalan urus uang.',
    'Pas awal masuk SMK ambil jurusan RPL, jujur aja ngga seberapa niat. Tapi semakin berjalannya waktu, aku mulai kenalan lebih jauh sama dunia coding dan software engineering — dan ternyata malah keterusan sampai sekarang.',
    'Dua minat ini kelihatannya beda arah, tapi buatku nyambung: keduanya soal membaca pola dan menyusun sesuatu yang rapi dari data.'
  ],
  journey: [
    { t: 'SMP', d: 'Mulai penasaran sama pengelolaan keuangan & pasar modal.' },
    { t: 'Awal SMK', d: 'Ambil jurusan RPL, tapi jujur belum seberapa niat.' },
    { t: 'Berjalan waktu', d: 'Mulai kenalan & jatuh cinta sama dunia coding / software engineering.' },
    { t: '18 Mei 2026', d: 'Ikut Sekolah Pasar Modal dari PT Bursa Efek Indonesia, Surabaya.' },
    { t: 'Sekarang', d: 'Kelas XII RPL, fokus mendalami lewat project Sistem Absensi Berbasis Website.' }
  ],
  skills: {
    web: ['HTML & CSS', 'JavaScript', 'PHP & MySQL', 'Laravel'],
    fin: ['Dasar Pasar Modal', 'Analisis Keuangan Dasar', 'Investasi & Saham', 'Pencatatan Keuangan']
  },
  env: [
    ['Perangkat', 'Macbook Air M1'],
    ['Sistem Operasi', 'Mac OS'],
    ['Tools', 'VS Code, DBeaver, Git, Terminal'],
    ['Backend Stack', 'Apache, PHP, MariaDB, Laravel, Node.js, Express, PostgreSQL, Docker']
  ],
  projects: [
    { id: 'alexel', code: 'ALXL', name: 'Alexel Studio', badge: 'v1.0 · OPEN SOURCE', group: 'open', color: '#4aa8ff',
      tag: 'Editor kode yang bekerja bersama AI.',
      desc: 'Editor kode desktop buatanku sendiri, gratis dan open source. Agen AI seperti Claude Code, Codex, dan Gemini bisa ikut ngoding, tapi setiap perubahan tetap harus aku setujui dulu dan bisa dibatalkan lewat checkpoint. Alat yang biasanya dibuka terpisah sudah ada di dalamnya: klien database, klien API, Docker, notebook, browser, sampai Remote SSH.',
      points: ['Agen AI dengan peninjauan per perubahan, checkpoint, dan undo', 'Database: PostgreSQL, MySQL, SQLite, MongoDB, Redis + diagram ER & Tanya Data', 'Klien HTTP lewat berkas .http, dengan rahasia terenkripsi', 'Notebook Jupyter, tab browser, dan Remote SSH', 'macOS · Windows · Linux'],
      stack: ['Electron', 'React 19', 'TypeScript', 'CodeMirror 6', 'Node.js', 'Vite'],
      shots: [['proyek/alexel-antartika.webp', 'Tema Antartika'], ['proyek/alexel-database.webp', 'Klien database'], ['proyek/alexel-api.webp', 'Klien API'], ['proyek/alexel-kawanan.webp', 'Kawanan agen'], ['proyek/alexel-notebook.webp', 'Notebook']],
      links: [['Website & unduh', 'https://alexel-stdio.netlify.app/'], ['GitHub', 'https://github.com/Nozella-Alexiee/alexel-studio']] },
    { id: 'onesig', code: 'ONE', name: 'oneSIG', badge: '11 PERAN', group: 'sig', color: '#e0465f',
      tag: 'Buku induk sekolah — pusat Ekosistem SIG.',
      desc: 'Aplikasi utama SMK SIG. Jadwal, absensi, nilai rapor, pengumuman, kalender, sampai dompet digital dan koperasi dengan kasir scan QR. Akun dibuat sekali di sini, lalu dipakai juga di SIGChat dan SIGlearning. Tiap peran (siswa, guru, wali kelas, kasir, BK, kepala sekolah, dan lainnya) cuma melihat yang memang tugasnya, dan perubahan penting masuk log audit.',
      points: ['Kalau ada beda data, yang benar selalu yang di oneSIG'],
      stack: ['React', 'TypeScript', 'Vite', 'FastAPI', 'PostgreSQL', 'Docker', 'PWA'],
      shots: [['proyek/onesig-beranda.webp', 'Beranda'], ['proyek/onesig-kasir.webp', 'Kasir koperasi'], ['proyek/onesig-rekap.webp', 'Rekap nilai'], ['proyek/onesig-jadwal.webp', 'Jadwal']],
      links: [] },
    { id: 'sigchat', code: 'CHAT', name: 'SIGChat', badge: 'E2EE', group: 'sig', color: '#22c9ab',
      tag: 'Chat sekolah yang terenkripsi end-to-end.',
      desc: 'Chat khusus warga sekolah, pengganti grup WhatsApp untuk urusan sekolah. Pesannya terenkripsi end-to-end, jadi server pun nggak bisa membacanya. Grup kelas dan grup mapel terbentuk otomatis dari data oneSIG, siswa bisa langsung chat guru BK, dan guru bisa menyematkan info, bikin polling, serta membagikan kartu materi SIGlearning.',
      points: ['Nama, kelas, dan peran dipinjam dari oneSIG'],
      stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSocket', 'PWA'],
      shots: [['proyek/sigchat-room.webp', 'Ruang chat'], ['proyek/sigchat-gelap.webp', 'Mode gelap'], ['proyek/sigchat-room-m.webp', 'Grup mapel (HP)'], ['proyek/sigchat-pair-m.webp', 'Masuk (HP)']],
      links: [] },
    { id: 'siglearning', code: 'LRN', name: 'SIGlearning', badge: 'CP · KUIS', group: 'sig', color: '#3ecf80',
      tag: 'Ruang belajar online buat guru dan siswa.',
      desc: 'Tempat belajar online. Guru menulis Capaian Pembelajaran, menaruh materi (video, PDF) dan kuis; siswa belajar dan mengerjakan kuis kapan saja, lengkap dengan progres, latihan ujian, dan peringkat usaha kelas. Masuknya dari menu oneSIG tanpa password baru, dan nilai kuisnya bisa ditarik guru ke Rekap Nilai oneSIG.',
      points: ['Nilai kuis itu nilai latihan, resmi setelah masuk oneSIG'],
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
      shots: [['proyek/siglearning-beranda.webp', 'Beranda'], ['proyek/siglearning-kuis.webp', 'Kuis'], ['proyek/siglearning-progres.webp', 'Progres'], ['proyek/siglearning-guru.webp', 'Tampilan guru']],
      links: [] },
    { id: 'orvella', code: 'ORVL', name: 'Orvella', badge: 'OPEN SOURCE', group: 'open', color: '#8f7bff',
      tag: 'Learn. Build. Collaborate.',
      desc: 'Platform belajar ngoding yang terbuka buat siapa aja. Tiap bab punya empat fase, dan kode yang ditulis benar-benar dijalankan di sandbox. Belajarnya di Orvella OS, desktop di dalam browser lengkap dengan dock, jendela, Sandbox, Galeri proyek, dan Orvi si asisten AI. Bisa ngoding bareng teman secara realtime, dan mentor menyusun materinya sendiri lewat Studio Materi.',
      points: ['Pahami → Perkuat → Kuis → Uji', '12 bahasa: Python · JavaScript · C · C++ · Rust · Java · Kotlin · Go · PHP · SQL · HTML · CSS', 'Kodenya jalan beneran, bukan cuma dicocokkan'],
      stack: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'CodeMirror 6', 'Docker'],
      shots: [['proyek/orvella-beranda.webp', 'Orvella OS'], ['proyek/orvella-sandbox.webp', 'Sandbox'], ['proyek/orvella-pahami.webp', 'Bab: Pahami']],
      links: [['@orvella.labs', 'https://instagram.com/orvella.labs']] },
    { id: 'epilketos', code: 'PLKT', name: 'E-Pilketos', badge: 'v2.0', group: 'sekolah', color: '#ffb020',
      tag: 'Pemilihan ketua OSIS digital.',
      desc: 'Pemilihan ketua OSIS digital di SMK Semen Gresik. Pemilih diverifikasi lewat pengenalan wajah langsung di browser, suara disimpan tanpa jejak siapa yang memilih, dan hasil quick count langsung jadi berita acara siap cetak. Jalan sebagai PWA mode kiosk di tablet.',
      points: [],
      stack: ['PHP 8.1', 'MariaDB', 'face-api.js', 'PWA'],
      shots: [['proyek/epilketos-bilik.webp', 'Bilik suara'], ['proyek/epilketos-surat-suara.webp', 'Surat suara'], ['proyek/epilketos-hasil.webp', 'Quick count']],
      links: [['GitHub', 'https://github.com/Nozella-Alexiee/e-pilketos']] },
    { id: 'absensi', code: 'ABSN', name: 'Sistem Absensi', badge: 'DIPAKAI', group: 'sekolah', color: '#ff7a59',
      tag: 'Absensi web yang beneran dipakai.',
      desc: 'Sistem absensi berbasis web, dipakai buat pencatatan kehadiran harian lengkap sama rekap laporan buat staff. Sekarang dipakai sama PT Cipta Nirmala (RS SEMEN GRESIK) lho!',
      points: [],
      stack: ['PHP', 'MySQL', 'XAMPP', 'Bootstrap'],
      shots: [['tampilan-1.jpg', 'Dashboard'], ['tampilan-2.jpg', 'Halaman masuk'], ['tampilan-3.png', 'Izin & sakit']],
      links: [['GitHub', 'https://github.com/Nozella-Alexiee/Absensi']] }
  ],
  certs: [
    { org: 'PT Bursa Efek Indonesia (IDX)', title: 'Sekolah Pasar Modal', kind: 'Finance', date: '18 Mei 2026 · Surabaya', status: 'LULUS', img: 'sertifikat-pasar-modal.jpg' },
    { org: 'ASEAN Foundation', title: 'AI Ready ASEAN', kind: '15 modul belajar AI', date: '26 Juli 2026', status: 'LULUS', img: 'sertifikat-ai-cert.jpg' },
    { org: 'PT Nale System Integrator', title: 'Praktik Kerja Lapangan', kind: 'PKL · Malang', date: '1 Jan – 30 Jun 2026', status: 'BAIK', img: 'sertifikat-pkl.jpg' }
  ],
  hobi: {
    playlist: { artists: ['Justin Bieber', 'Djo', 'Rihanna', 'Ariana Grande', 'SZA', 'Arctic Monkeys', 'Tommy Richman'], info: '137 lagu • 8 jam 42 menit',
      note: 'Lagu-lagu yang nemenin aku ngoding, belajar, dan lihat langit malam.', url: 'https://music.apple.com/id/playlist/musik-in/pl.u-38oWXBgTY0YdybE?l=id' },
    band: { name: 'Westlife', song: 'If I Let You Go', cover: 'if-i-let-you-go-cover.jpg', photo: 'westlife-band.webp',
      spotify: 'https://open.spotify.com/intl-id/track/3St0RlsL0Z0klK1mqWakQm?si=6595a19fc918413d', apple: 'https://music.apple.com/us/song/if-i-let-you-go-radio-edit/266441693' },
    bintang: 'Salah satu momen favoritku itu duduk sebentar sambil lihat langit malam — kelihatan bintang-bintang di antara kesibukan sekolah & ngoding.',
    foto: ['hobi-foto-1.jpg', 'hobi-foto-2.jpg'],
    nyanyi: 'Aku juga suka bernyanyi, dan unggul di nada tinggi lho!'
  },
  contact: {
    note: 'Terbuka untuk kolaborasi project web maupun diskusi seputar finance.',
    email: 'nongzel52@gmail.com',
    links: [['GitHub', 'https://github.com/Nozella-Alexiee'], ['Instagram', 'https://instagram.com/ale.xiee._'], ['LinkedIn', 'https://www.linkedin.com/in/nozella-alexander-b5044a413']]
  }
};

/* Bunga majemuk bulanan, sama seperti kalkulator di situs sekarang. Mengembalikan saldo per akhir tahun. */
window.hitungMajemuk = function (modal, setoran, bungaPersen, tahun) {
  var r = bungaPersen / 100 / 12, saldo = modal, disetor = modal, rows = [{ y: 0, saldo: modal, disetor: modal }];
  for (var m = 1; m <= tahun * 12; m++) {
    saldo = saldo * (1 + r) + setoran; disetor += setoran;
    if (m % 12 === 0) rows.push({ y: m / 12, saldo: saldo, disetor: disetor });
  }
  return { rows: rows, akhir: saldo, disetor: disetor, bunga: saldo - disetor };
};
window.rupiah = function (n) { return 'Rp' + Math.round(n).toLocaleString('id-ID'); };
