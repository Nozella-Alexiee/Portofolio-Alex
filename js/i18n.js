/* Bahasa: teks antarmuka (T) + terjemahan isi EN (diambil dari situs lama). */
export const LANG = (() => { try { return localStorage.getItem('lang') === 'en' ? 'en' : 'id'; } catch (e) { return 'id'; } })();

export const T = {
  id: {
    eyebrow: 'XII RPL · SMK SIG · terbuka buat kolaborasi', h1: 'Ngoding <em>&amp;</em> membaca pasar.',
    heroSub: (n, t) => `Aku <b>${n}</b>, biasa dipanggil Alex. ${t}.`, hint: 'Scroll pelan-pelan. Grafiknya bukan sekadar grafik.',
    loading: 'membangun kota…', day: 'Pagi', night: 'Malam', contactBtn: 'Hubungi', modeTitle: 'Ganti suasana kota',
    menu: ['Tentang', 'Proyek', 'Keahlian', 'Simulasi', 'Sertifikat', 'Hobi'], rail: ['Mulai', 'Tentang', 'Proyek', 'Keahlian', 'Simulasi', 'Sertifikat', 'Hobi', 'Kontak'],
    k: ['Tentang', 'Proyek', 'Keahlian', 'Simulasi', 'Sertifikat', 'Di atas atap', 'Kontak'],
    aboutH: 'Dua minat, <em>satu cara berpikir.</em>', eco: 'Ekosistem SIG', views: n => n + ' tampilan', shotAlt: 'Tampilan', prev: 'Proyek sebelumnya', next: 'Proyek berikutnya',
    skillsH: 'Papan <em>keahlian.</em>', skillsP: 'Kayak papan bursa: baris yang menyala gantian, semuanya beneran aku pakai atau lagi aku pelajari.',
    simH: 'Bunga majemuk, <em>jadi gedung.</em>', simP: 'Geser angkanya. Tiap batang di alun-alun itu satu tahun: hitam setoranmu, hijau bunganya.',
    simF: ['Modal awal', 'Setoran per bulan', 'Bunga per tahun', 'Jangka waktu'], years: 'tahun', simA: 'Total setoran', simB: 'Estimasi bunga',
    simNote: 'Simulasi sederhana pakai bunga majemuk bulanan, cuma buat ilustrasi belajar.',
    certH: 'Yang sudah <em>diselesaikan.</em>', hobiH: 'Musik, kamera, <em>langit malam.</em>',
    fav: 'Band dan lagu favorit. Ketuk piringannya buat jeda.', playlist: 'Playlist nugas', photoP: 'Selain itu aku suka memotret hal random:', shot: 'Hasil jepretan',
    kontakH: 'Mari <em>terhubung.</em>', email: 'Kirim email', copy: 'salin', copied: 'tersalin ✓',
    board: 'PAPAN KEAHLIAN · ALEX', used: 'dipakai', learning: 'dipelajari', flows: ['kode + OTP', 'token sekali pakai', 'nilai kuis']
  },
  en: {
    eyebrow: '12th grade · SMK SIG · open to collaboration', h1: 'Code <em>&amp;</em> read the market.',
    heroSub: (n, t) => `I'm <b>${n}</b>, Alex for short. ${t}.`, hint: 'Scroll slowly. The chart is more than a chart.',
    loading: 'building the city…', day: 'Day', night: 'Night', contactBtn: 'Contact', modeTitle: 'Change the city mood',
    menu: ['About', 'Projects', 'Skills', 'Simulation', 'Certificates', 'Hobbies'], rail: ['Start', 'About', 'Projects', 'Skills', 'Simulation', 'Certificates', 'Hobbies', 'Contact'],
    k: ['About', 'Projects', 'Skills', 'Simulation', 'Certificates', 'On the rooftop', 'Contact'],
    aboutH: 'Two interests, <em>one way of thinking.</em>', eco: 'SIG ecosystem', views: n => n + ' screens', shotAlt: 'Screenshot of', prev: 'Previous project', next: 'Next project',
    skillsH: 'The skills <em>board.</em>', skillsP: 'Like a stock board: rows light up in turn, and every one is something I use or am learning.',
    simH: 'Compound interest, <em>as buildings.</em>', simP: 'Move the sliders. Each bar in the plaza is one year: black is what you deposit, green is the interest.',
    simF: ['Initial capital', 'Monthly deposit', 'Annual interest', 'Time period'], years: 'years', simA: 'Total deposits', simB: 'Estimated interest',
    simNote: 'Simple simulation using monthly compound interest, for educational illustration only.',
    certH: 'What I have <em>completed.</em>', hobiH: 'Music, photos, <em>the night sky.</em>',
    fav: 'Favourite band and song. Tap the record to pause it.', playlist: 'Study playlist', photoP: 'I also like taking photos of random things:', shot: 'My photo',
    kontakH: 'Let\'s <em>connect.</em>', email: 'Send email', copy: 'copy', copied: 'copied ✓',
    board: 'SKILLS BOARD · ALEX', used: 'in use', learning: 'learning', flows: ['code + OTP', 'one-time token', 'quiz scores']
  }
};

/* Terjemahan isi. Teks yang tidak ada di sini tetap pakai versi Indonesia. */
const EN = {
  tagline: 'A vocational student learning web development while reading financial reports',
  about: [
    'Hi, I\'m Alex — currently a 12th-grade Software Engineering student at SIG Vocational School. My interest in finance started back in middle school, wanting to understand how to manage money so I wouldn\'t just spend it carelessly later in life.',
    'When I entered vocational school I chose software engineering, honestly without much enthusiasm. But over time I got to know coding and software engineering more deeply — and it just stuck with me until now.',
    'These two interests might seem unrelated, but to me they connect: both are about recognizing patterns and building something neat out of data.'
  ],
  journey: [
    ['Middle School', 'Started being curious about financial management & capital markets.'],
    ['Early Vocational', 'Chose Software Engineering major, but honestly wasn\'t that motivated yet.'],
    ['Over time', 'Got to know and fell in love with coding / software engineering.'],
    ['18 May 2026', 'Attended Capital Market School by Indonesia Stock Exchange, Surabaya.'],
    ['Now', '12th Grade Software Engineering Student, focused on improving my skills through a web-based attendance system project.']
  ],
  fin: ['Basic Capital Market', 'Basic Financial Analysis', 'Investment & Stocks', 'Financial Recording'],
  env: ['Machine', 'Operating System', 'Development Tools', 'Backend Stack'],
  projects: {
    alexel: { tag: 'The code editor that works with AI.', desc: 'A desktop code editor I built myself, free and open source. AI agents such as Claude Code, Codex, and Gemini can code alongside me, but every change still waits for my approval and can be undone with checkpoints. Tools you usually open separately are built in: a database client, an API client, Docker, notebooks, a browser, and Remote SSH.',
      points: ['AI agents with per-change review, checkpoints, and undo', 'Databases: PostgreSQL, MySQL, SQLite, MongoDB, Redis + ER diagrams & Ask Your Data', 'An HTTP client built on .http files, with encrypted secrets', 'Jupyter notebooks, a browser tab, and Remote SSH', 'macOS · Windows · Linux'],
      links: ['Website & download', 'GitHub'], shots: ['Antartika theme', 'Database client', 'API client', 'Agent swarm', 'Notebook'] },
    onesig: { badge: '11 ROLES', tag: 'The school record book — hub of the SIG ecosystem.', desc: 'The main app of SMK SIG: timetables, attendance, report grades, announcements, a school calendar, plus a digital wallet and a co-op store with QR checkout at the cashier. An account is created once here and also works in SIGChat and SIGlearning. Each role (student, teacher, homeroom teacher, cashier, counsellor, principal and more) only sees what belongs to its job, and important changes go to an audit log.',
      points: ['When data disagrees, oneSIG is always right'], shots: ['Home', 'Co-op cashier', 'Grade sheet', 'Timetable'] },
    sigchat: { tag: 'End-to-end encrypted school chat.', desc: 'A chat app only for people at the school, replacing WhatsApp groups for school matters. Messages are end-to-end encrypted, so even the server cannot read them. Class and subject groups are created automatically from oneSIG data, students can message the counsellor directly, and teachers can pin notices, run polls and share SIGlearning lesson cards.',
      points: ['Names, classes and roles come from oneSIG'], shots: ['Chat room', 'Dark mode', 'Subject group (phone)', 'Sign in (phone)'] },
    siglearning: { tag: 'An online learning space for teachers and students.', desc: 'An online learning space. Teachers write learning outcomes and post lessons (video, PDF) and quizzes; students study and take quizzes any time, with progress tracking, exam practice and a class effort board. It opens from the oneSIG menu with no new password, and teachers can pull quiz scores into the oneSIG grade sheet.',
      points: ['Quiz scores are practice until they reach oneSIG'], shots: ['Home', 'Quiz', 'Progress', 'Teacher view'] },
    orvella: { desc: 'A coding-learning platform open to anyone. Every chapter has four phases, and the code you write really runs in a sandbox. You learn inside Orvella OS, a desktop in the browser with a dock, windows, a Sandbox, a project Gallery and Orvi, the AI assistant. Classmates can code together in real time, and mentors write their own lessons in the Content Studio.',
      points: ['Understand → Practise → Quiz → Test', '12 languages: Python · JavaScript · C · C++ · Rust · Java · Kotlin · Go · PHP · SQL · HTML · CSS', 'Your code actually runs, it is not just pattern-matched'], shots: ['Orvella OS', 'Sandbox', 'Chapter: Understand'] },
    epilketos: { tag: 'Digital student council elections.', desc: 'Digital student council elections at SMK Semen Gresik. Voters are verified by face recognition right in the browser, ballots are stored with no trace of who cast them, and the quick count turns straight into a printable official report. Runs as a kiosk-mode PWA on tablets.',
      shots: ['Voting booth', 'Ballot', 'Quick count'] },
    absensi: { name: 'Attendance System', badge: 'IN USE', tag: 'A web attendance system that is actually in use.', desc: 'A web-based attendance system, used for daily attendance recording along with summary reports for staff. It is currently used by PT Cipta Nirmala (RS SEMEN GRESIK)!',
      shots: ['Dashboard', 'Sign-in page', 'Leave & sick notes'] }
  },
  certs: [
    { title: 'Capital Market School', kind: 'Finance', date: '18 May 2026 · Surabaya', status: 'PASSED' },
    { kind: '15 AI learning modules', date: '26 July 2026', status: 'PASSED' },
    { title: 'Internship (PKL)', kind: 'Internship · Malang', date: '1 Jan – 30 Jun 2026', status: 'GOOD' }
  ],
  hobi: { note: 'Songs that accompany me coding, studying, and looking at the night sky.', info: '137 songs • 8 hours 42 minutes',
    bintang: 'One of my favorite moments is sitting for a while and looking at the night sky — spotting stars between schoolwork and coding.',
    nyanyi: 'I also love singing, and I excel at high notes!' },
  contact: 'Open to web project collaborations or discussions about finance.'
};

/* Timpa isi PORTO dengan EN (dipanggil sebelum halaman dirender). */
export function applyLang(P){
  if (LANG !== 'en') return P;
  P.tagline = EN.tagline; P.about = EN.about;
  P.journey = P.journey.map((j, i) => ({ t: EN.journey[i][0], d: EN.journey[i][1] }));
  P.skills.fin = EN.fin; P.env = P.env.map((r, i) => [EN.env[i], r[1]]);
  P.projects.forEach(p => { const e = EN.projects[p.id]; if (!e) return;
    for (const k of ['name', 'badge', 'tag', 'desc', 'points']) if (e[k]) p[k] = e[k];
    if (e.links) p.links = p.links.map((l, i) => [e.links[i] || l[0], l[1]]);
    if (e.shots) p.shots = p.shots.map((s, i) => [s[0], e.shots[i] || s[1]]); });
  P.certs.forEach((c, i) => Object.assign(c, EN.certs[i]));
  Object.assign(P.hobi.playlist, { note: EN.hobi.note, info: EN.hobi.info }); P.hobi.bintang = EN.hobi.bintang; P.hobi.nyanyi = EN.hobi.nyanyi;
  P.contact.note = EN.contact;
  return P;
}
