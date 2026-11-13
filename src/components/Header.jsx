import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useLang } from '../i18n'
import { goTo, useActive } from '../hooks'
import { toggleTheme } from '../theme'

const LINKS = [['about', 'nav.about'], ['work', 'nav.work'], ['skills', 'nav.skills'], ['sim', 'nav.sim'], ['services', 'nav.services'], ['contact', 'nav.contact']]
const dl = (lang) => `cv/CV-Alexander-${lang === 'en' ? 'EN' : 'ID'}.pdf`

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [hide, setHide] = useState(false), [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setHide(y > 160 && y > (scrollY.getPrevious() ?? 0) && !open))
  const active = useActive(LINKS.map((l) => l[0]))
  const go = (id) => { setOpen(false); setTimeout(() => goTo(id), open ? 400 : 0) }
  return (
    <>
      <motion.header className="hdr" animate={{ y: hide ? '-140%' : 0 }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
        <div className="cap">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo(0) : scrollTo({ top: 0, behavior: 'smooth' }) }}>Alexander</a>
          <nav className="nav" aria-label="Menu">
            {LINKS.map(([id, k]) => (
              <a key={id} href={'#' + id} className={active === id ? 'on' : ''} onClick={(e) => { e.preventDefault(); go(id) }}>
                {active === id && <motion.span layoutId="pillbg" className="pillbg" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                <span>{t(k)}</span>
              </a>
            ))}
          </nav>
          <div className="lang" data-l={lang} role="group" aria-label={t('nav.lang')}>
            <span className="thumb" />
            <button type="button" aria-pressed={lang === 'id'} onClick={() => setLang('id')}>ID</button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="rd" aria-label={t('nav.theme')} onClick={(e) => toggleTheme(e.currentTarget)}>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          </button>
          <a className="btn sky sm cv" href={dl(lang)} download>{t('nav.cv')}</a>
          <button className="rd burger" aria-label={t('nav.menu')} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 9h14M5 15h14" />}</svg>
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div className="menu" initial={{ clipPath: 'circle(0% at 90% 4%)' }} animate={{ clipPath: 'circle(150% at 90% 4%)' }} exit={{ clipPath: 'circle(0% at 90% 4%)' }} transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}>
            <div>
              {LINKS.map(([id, k], i) => (
                <a key={id} className="lk" href={'#' + id} onClick={(e) => { e.preventDefault(); go(id) }}>
                  <motion.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ delay: 0.3 + i * 0.05, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>{t(k)}</motion.span>
                </a>
              ))}
            </div>
            <a className="btn sky" style={{ width: 'max-content' }} href={dl(lang)} download>{t('nav.cv')}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
