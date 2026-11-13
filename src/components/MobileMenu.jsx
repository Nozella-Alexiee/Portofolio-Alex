import { useRef } from 'react'
import { motion } from 'motion/react'
import { useUI } from '../ui'
import { SECTIONS } from '../data/content'
import { useClock, useFocusTrap, useLockScroll } from '../lib/hooks'
import { ArrowUpRight, Close, Download } from './Icons'

export default function MobileMenu({ onClose, onNavigate }) {
  const { content, lang, setLang, theme, toggleTheme } = useUI()
  const panel = useRef(null)
  const time = useClock()
  useLockScroll(true)
  useFocusTrap(panel, true, onClose)

  return (
    <motion.div
      className="mobileMenu"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={content.actions.menu}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="mobileMenuTop">
        <span className="brand">Alexander<span className="brandDot">.</span></span>
        <button type="button" className="iconButton" onClick={onClose} aria-label={content.actions.close}>
          <Close />
        </button>
      </div>

      <nav className="mobileNav" aria-label="Primary mobile">
        {SECTIONS.map((id, index) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(event) => {
              event.preventDefault()
              onNavigate(id)
            }}
          >
            <span className="mobileNavNumber">{String(index + 1).padStart(2, '0')}</span>
            <span className="mobileNavLabel">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.18 + index * 0.045, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {content.nav[id]}
              </motion.span>
            </span>
            <ArrowUpRight size={26} />
          </a>
        ))}
      </nav>

      <div className="mobileMenuFoot">
        <div className="mobileMenuMeta">
          <span>{content.profile.location} · {time} WIB</span>
          <span className="liveLine"><i />{content.hero.available}</span>
        </div>
        <a className="mobileEmail" href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
        <div className="mobileMenuActions">
          <a className="button buttonSmall" href={content.profile.cv} download>
            <Download /> {content.actions.cv}
          </a>
          <div className="langSwitch" role="group" aria-label={content.actions.language}>
            <button type="button" aria-pressed={lang === 'id'} onClick={() => setLang('id')}>ID</button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
          <button type="button" className="iconButton" aria-label={content.actions.theme} onClick={(event) => toggleTheme(event.currentTarget)}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
        <div className="mobileSocials">
          {content.profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
