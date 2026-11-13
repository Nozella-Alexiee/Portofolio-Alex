import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PORTO } from './data/porto'
import { EN } from './data/en'

/* Teks antarmuka. Isi proyek, sertifikat, dll. datang dari data/porto.js (ID) dan data/en.js (EN). */
const STR = {
  id: {
    'nav.about': 'Tentang', 'nav.work': 'Karya', 'nav.skills': 'Keahlian', 'nav.sim': 'Simulasi', 'nav.services': 'Layanan', 'nav.contact': 'Kontak',
    'nav.cv': 'Unduh CV', 'nav.menu': 'Menu', 'nav.close': 'Tutup', 'nav.theme': 'Ganti tema terang atau gelap', 'nav.lang': 'Ganti bahasa',
    'hero.role': 'Web Developer', 'hero.role2': 'Pelajar pasar modal',
    'hero.statement': 'Siswa RPL yang belajar bikin web sekaligus baca laporan keuangan.',
    'hero.where': 'Berbasis di', 'hero.whereV': 'Gresik, Jawa Timur', 'hero.now': 'Sekarang', 'hero.nowV': 'Kelas XII RPL · SMK SIG', 'hero.time': 'Waktu setempat', 'hero.scroll': 'Gulir', 'hero.cta1': 'Lihat karya', 'hero.cta2': 'Ngobrol yuk',
    'about.h': 'Tentang', 'about.journey': 'Perjalanan',
    'work.h': 'Karya', 'work.all': 'Semua', 'work.open': 'Open source', 'work.sig': 'Ekosistem SIG', 'work.sekolah': 'Sekolah & kerja',
    'work.view': 'Lihat', 'work.stack': 'Teknologi', 'work.links': 'Tautan', 'work.prev': 'Sebelumnya', 'work.next': 'Berikutnya', 'work.sigNote': 'Satu akun sekolah, tiga aplikasi yang saling nyambung.',
    'skills.h': 'Keahlian', 'skills.web': 'Web', 'skills.fin': 'Finance', 'skills.env': 'Lingkungan', 'skills.used': 'Teknologi yang kepakai di proyek-proyekku', 'skills.webS': 'Buat bikin web, aku biasa pakai', 'skills.finS': 'Buat urusan finance, aku lagi belajar', 'skills.and': 'dan',
    'sim.h': 'Simulasi', 'sim.sub': 'Bunga majemuk', 'sim.f1': 'Modal awal', 'sim.f2': 'Setoran per bulan', 'sim.f3': 'Bunga per tahun', 'sim.f4': 'Jangka waktu',
    'sim.final': 'Estimasi akhir', 'sim.dep': 'Total setoran', 'sim.int': 'Estimasi bunga', 'sim.years': 'tahun', 'sim.year': 'tahun',
    'sim.note': 'Simulasi sederhana pakai bunga majemuk bulanan, cuma buat ilustrasi belajar.',
    'cert.h': 'Sertifikat', 'cert.drag': 'Seret',
    'svc.h': 'Layanan', 'svc.lede': 'Butuh website atau sistem untuk sekolah, usaha, atau organisasi? Ceritakan kebutuhannya, nanti aku bilang apa yang bisa aku kerjakan.', 'svc.cta': 'Diskusi proyek',
    'svc.1': 'Aplikasi web', 'svc.1d': 'Aplikasi web lengkap, dari tampilan sampai backend dan database.',
    'svc.2': 'Sistem informasi', 'svc.2d': 'Absensi, pemilihan digital, kasir, dan pencatatan. Sistem absensi buatanku sudah dipakai nyata.',
    'svc.3': 'Pasang di server', 'svc.3d': 'Bantu memasang aplikasi ke server atau hosting, plus panduan pemakaiannya.',
    'hobi.h': 'Hobi', 'hobi.music': 'Yang diputer pas nugas', 'hobi.fav': 'Band favorit', 'hobi.favV': 'Westlife, lagu favorit If I Let You Go.', 'hobi.playlist': 'Playlist Apple Music', 'hobi.stars': 'Melihat bintang', 'hobi.sing': 'Bernyanyi', 'hobi.photo': 'Memotret hal random',
    'contact.h': 'Kontak', 'contact.big': 'Mari terhubung.', 'contact.mail': 'Kirim email', 'contact.copy': 'Salin', 'contact.copied': 'Tersalin',
    'foot.copy': '© 2026 Ahmad Zulfikri Alexander Disyin — XII RPL', 'foot.top': 'Kembali ke atas',
    'cur.drag': 'Seret', 'cur.view': 'Lihat', 'alt.photo': 'Foto Alex',
  },
  en: {
    'nav.about': 'About', 'nav.work': 'Work', 'nav.skills': 'Skills', 'nav.sim': 'Simulation', 'nav.services': 'Services', 'nav.contact': 'Contact',
    'nav.cv': 'Download CV', 'nav.menu': 'Menu', 'nav.close': 'Close', 'nav.theme': 'Switch between light and dark theme', 'nav.lang': 'Switch language',
    'hero.role': 'Web Developer', 'hero.role2': 'Capital market student',
    'hero.statement': 'A vocational student learning web development while reading financial reports.',
    'hero.where': 'Based in', 'hero.whereV': 'Gresik, East Java', 'hero.now': 'Now', 'hero.nowV': 'Grade 12 RPL · SMK SIG', 'hero.time': 'Local time', 'hero.scroll': 'Scroll', 'hero.cta1': 'See my work', 'hero.cta2': 'Say hi',
    'about.h': 'About', 'about.journey': 'Journey',
    'work.h': 'Work', 'work.all': 'All', 'work.open': 'Open source', 'work.sig': 'SIG Ecosystem', 'work.sekolah': 'School & work',
    'work.view': 'View', 'work.stack': 'Stack', 'work.links': 'Links', 'work.prev': 'Previous', 'work.next': 'Next', 'work.sigNote': 'One school account, three apps that work together.',
    'skills.h': 'Skills', 'skills.web': 'Web', 'skills.fin': 'Finance', 'skills.env': 'Environment', 'skills.used': 'Technology used across my projects', 'skills.webS': 'To build for the web, I usually work with', 'skills.finS': "For finance, I'm learning", 'skills.and': 'and',
    'sim.h': 'Simulation', 'sim.sub': 'Compound interest', 'sim.f1': 'Initial capital', 'sim.f2': 'Monthly deposit', 'sim.f3': 'Annual interest', 'sim.f4': 'Time period',
    'sim.final': 'Final estimate', 'sim.dep': 'Total deposits', 'sim.int': 'Estimated interest', 'sim.years': 'years', 'sim.year': 'year',
    'sim.note': 'Simple simulation using monthly compound interest, for educational illustration only.',
    'cert.h': 'Certificates', 'cert.drag': 'Drag',
    'svc.h': 'Services', 'svc.lede': "Need a website or system for a school, business, or organization? Tell me what you need and I'll say what I can build.", 'svc.cta': 'Discuss a project',
    'svc.1': 'Web apps', 'svc.1d': 'Full web apps, from the interface to the backend and database.',
    'svc.2': 'Information systems', 'svc.2d': 'Attendance, digital voting, cashier, and record keeping. The attendance system I built is in real use.',
    'svc.3': 'Server deployment', 'svc.3d': 'Help putting an app on a server or hosting, plus a usage guide.',
    'hobi.h': 'Hobbies', 'hobi.music': 'On repeat while studying', 'hobi.fav': 'Favourite band', 'hobi.favV': 'Westlife, favourite song If I Let You Go.', 'hobi.playlist': 'Apple Music playlist', 'hobi.stars': 'Stargazing', 'hobi.sing': 'Singing', 'hobi.photo': 'Taking random photos',
    'contact.h': 'Contact', 'contact.big': "Let's connect.", 'contact.mail': 'Send email', 'contact.copy': 'Copy', 'contact.copied': 'Copied',
    'foot.copy': '© 2026 Ahmad Zulfikri Alexander Disyin — 12th grade RPL', 'foot.top': 'Back to top',
    'cur.drag': 'Drag', 'cur.view': 'View', 'alt.photo': 'Photo of Alex',
  },
}

/* Salinan isi dengan terjemahan Inggris ditimpa di atasnya. */
function localize(lang) {
  const P = structuredClone(PORTO)
  if (lang !== 'en') return P
  P.about = EN.about
  P.journey = P.journey.map((j, i) => ({ t: EN.journey[i][0], d: EN.journey[i][1] }))
  P.skills.fin = EN.fin
  P.env = P.env.map((r, i) => [EN.env[i], r[1]])
  P.projects.forEach((p) => {
    const e = EN.projects[p.id]
    if (!e) return
    for (const k of ['name', 'badge', 'tag', 'desc', 'points']) if (e[k]) p[k] = e[k]
    if (e.links) p.links = p.links.map((l, i) => [e.links[i] || l[0], l[1]])
    if (e.shots) p.shots = p.shots.map((s, i) => [s[0], e.shots[i] || s[1]])
  })
  P.certs.forEach((c, i) => Object.assign(c, EN.certs[i]))
  Object.assign(P.hobi.playlist, { note: EN.hobi.note, info: EN.hobi.info })
  P.hobi.bintang = EN.hobi.bintang
  P.hobi.nyanyi = EN.hobi.nyanyi
  P.contact.note = EN.contact
  return P
}

const Ctx = createContext(null)
const first = () => {
  try {
    const q = /[?&]lang=(en|id)/.exec(location.search)
    if (q) return q[1]
    return localStorage.getItem('lang') === 'en' ? 'en' : 'id'
  } catch { return 'id' }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(first)
  const setLang = useCallback((l) => { setLangState(l); try { localStorage.setItem('lang', l) } catch {} }, [])
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const value = useMemo(() => ({
    lang, setLang, P: localize(lang),
    t: (k) => STR[lang][k] ?? STR.id[k] ?? k,
    rp: (n) => 'Rp' + Math.round(n).toLocaleString(lang === 'en' ? 'en-US' : 'id-ID'),
    pkl: lang === 'en' ? { t: EN.pkl[0], d: EN.pkl[1] } : { t: 'Jan – Jun 2026', d: 'PKL di PT Nale System Integrator, Malang. Hasil penilaian: BAIK.' },
  }), [lang, setLang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useLang = () => useContext(Ctx)
