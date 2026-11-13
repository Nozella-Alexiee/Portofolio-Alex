import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useUI } from '../ui'
import { SECTIONS } from '../data/content'
import { scrollToId, useScrollSpy } from '../lib/hooks'
import { Download, Menu as MenuIcon, Moon, Search, Sun } from './Icons'
import LiquidGlass from './LiquidGlass'
import MobileMenu from './MobileMenu'

export default function Header() {
  const { content, lang, setLang, theme, toggleTheme, paletteOpen, setPaletteOpen } = useUI()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const active = useScrollSpy(SECTIONS)

  useMotionValueEvent(scrollY, 'change', (value) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(value > 220 && value > previous && !menuOpen && !paletteOpen)
  })

  const navigate = (id) => {
    setMenuOpen(false)
    window.setTimeout(() => scrollToId(id), 60)
  }

  return (
    <>
      <motion.header
        className="hdr"
        animate={{ y: hidden ? '-135%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <LiquidGlass className="cap" radius={999} blur={15} saturation={175} strength={26} band={30} tint="var(--glass-tint-strong)">
          <a
            className="brand"
            href="#top"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Alexander<span className="brandDot">.</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'on' : ''}
                aria-current={active === id ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(id)
                }}
              >
                {active === id && (
                  <motion.span
                    layoutId="navPill"
                    className="pillbg"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span>{content.nav[id]}</span>
              </a>
            ))}
          </nav>

          <div className="capActions">
            <button
              type="button"
              className="rd searchBtn"
              aria-label={content.actions.palette}
              onClick={() => setPaletteOpen(true)}
            >
              <Search />
            </button>

            <div className="lang" data-l={lang} role="group" aria-label={content.actions.language}>
              <span className="thumb" aria-hidden="true" />
              <button type="button" aria-pressed={lang === 'id'} onClick={() => setLang('id')}>ID</button>
              <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            </div>

            <button
              type="button"
              className="rd themeBtn"
              aria-label={content.actions.theme}
              onClick={(event) => toggleTheme(event.currentTarget)}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>

            <a className="btn sky sm cv" href={content.profile.cv} download>
              <Download />
              <span>{content.actions.cv}</span>
            </a>

            <button
              type="button"
              className="rd burger"
              aria-label={content.actions.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>

          <motion.span className="scrollProgress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        </LiquidGlass>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} onNavigate={navigate} />}
      </AnimatePresence>
    </>
  )
}
