import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useLang } from '../i18n'
import { goTo, useClock } from '../hooks'

const NAME = 'Alexander'.split('')

export default function Hero({ ready }) {
  const { t } = useLang()
  const ref = useRef(null), time = useClock()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const archY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const ease = [0.76, 0, 0.24, 1]
  return (
    <section id="top" className="hero" ref={ref}>
      <motion.h1 className="name h" aria-label="Alexander" style={{ y: nameY }}>
        {NAME.map((c, i) => (
          <span className="ch" key={i} aria-hidden="true">
            <motion.span initial={{ y: '115%' }} animate={ready ? { y: 0 } : {}} transition={{ duration: 1.05, ease, delay: 0.25 + i * 0.05 }}>{c}</motion.span>
          </span>
        ))}
      </motion.h1>
      <div className="stage">
      <motion.div className="arch" style={{ y: archY }} initial={{ scaleY: 0 }} animate={ready ? { scaleY: 1 } : {}} transition={{ duration: 1.2, ease, delay: 0.1 }} />
      <motion.div className="photo" style={{ y: photoY }} initial={{ opacity: 0, scale: 1.06 }} animate={ready ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}>
        <img src="/images/alex-cutout.webp" alt={t('alt.photo')} width="1100" height="1057" fetchpriority="high" />
      </motion.div>
      <motion.button className="badge" onClick={() => goTo('about')} aria-label={t('hero.scroll')} initial={{ opacity: 0, scale: 0.6, rotate: -40 }} animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.1 }} data-cursor="">
        <svg viewBox="0 0 200 200" className="spin" aria-hidden="true">
          <defs><path id="circ" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" /></defs>
          <text><textPath href="#circ" textLength="468" lengthAdjust="spacing">Web Developer • Finance • Web Developer • Finance •</textPath></text>
        </svg>
        <span className="dn" aria-hidden="true">↓</span>
      </motion.button>
      </div>
      <motion.div className="heroTxt" initial={{ opacity: 0, y: 28 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}>
        <p className="st">{t('hero.statement')}</p>
        <div className="ctas">
          <button className="btn" onClick={() => goTo('work')}>{t('hero.cta1')} <span className="arrow">↓</span></button>
          <button className="btn soft" onClick={() => goTo('contact')}>{t('hero.cta2')}</button>
        </div>
        <p className="where">{t('hero.whereV')} · <span>{time || '--:--:--'}</span> WIB</p>
      </motion.div>
    </section>
  )
}
