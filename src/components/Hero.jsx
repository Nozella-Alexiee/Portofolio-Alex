import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useUI } from '../ui'
import { scrollToId, useClock } from '../lib/hooks'

const NAME = 'Alexander'.split('')

export default function Hero() {
  const { content } = useUI()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const time = useClock()
  const hero = content.hero
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const archY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const ease = [0.76, 0, 0.24, 1]

  return (
    <section id="top" className="hero" ref={ref} aria-labelledby="hero-title">
      <motion.h1 id="hero-title" className="name h" aria-label="Alexander" style={reduce ? undefined : { y: nameY }}>
        {NAME.map((letter, index) => (
          <span className="ch" key={`${letter}-${index}`} aria-hidden="true">
            <motion.span
              initial={reduce ? false : { y: '115%' }}
              animate={reduce ? undefined : { y: 0 }}
              transition={{ duration: 1.05, ease, delay: 0.18 + index * 0.05 }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <div className="stage" aria-hidden="true">
        <motion.div
          className="arch"
          style={reduce ? undefined : { y: archY }}
          initial={reduce ? false : { scaleY: 0 }}
          animate={reduce ? undefined : { scaleY: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
        />
        <motion.div
          className="photo"
          style={reduce ? undefined : { y: photoY }}
          initial={reduce ? false : { opacity: 0, scale: 1.05 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <img src="/images/alex-cutout.webp" alt="" width="1100" height="1057" fetchpriority="high" />
        </motion.div>

        <motion.button
          type="button"
          className="badge"
          onClick={() => scrollToId('about')}
          aria-label={hero.scroll}
          initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -40 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
        >
          <svg viewBox="0 0 200 200" className="spin" aria-hidden="true">
            <defs>
              <path id="heroCircle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
            </defs>
            <text>
              <textPath href="#heroCircle" textLength="468" lengthAdjust="spacing">
                Web Developer • Finance • Web Developer • Finance •
              </textPath>
            </text>
          </svg>
          <span className="dn">↓</span>
        </motion.button>
      </div>

      <motion.div
        className="heroTxt"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
      >
        <span className="heroAlias">aka {content.profile.alias}</span>
        <p className="st">{hero.statement}</p>
        <p className="heroLede">{hero.lede}</p>
        <div className="ctas">
          <button type="button" className="btn" onClick={() => scrollToId('work')}>
            {hero.ctaWork} <span className="arrow">↓</span>
          </button>
          <button type="button" className="btn soft" onClick={() => scrollToId('contact')}>
            {hero.ctaContact}
          </button>
        </div>
        <p className="where">
          <span className="liveLine"><i />{hero.available}</span>
          <span className="whereDivider" aria-hidden="true">·</span>
          {content.profile.location}
          <span className="whereDivider" aria-hidden="true">·</span>
          <span>{time || '--:--:--'} WIB</span>
        </p>
      </motion.div>
    </section>
  )
}
