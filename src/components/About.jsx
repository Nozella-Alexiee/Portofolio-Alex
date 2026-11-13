import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import { useLang } from '../i18n'
import { Fade, RevealText, Rise } from './Reveal'

export default function About() {
  const { t, P, pkl } = useLang()
  const list = useRef(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 0.7', 'end 0.6'] })
  const journey = P.journey.slice(); journey.splice(3, 0, { t: pkl.t, d: pkl.d })
  return (
    <section id="about" className="sec wrap">
      <div className="secHead"><Rise as="h2" className="h">{t('about.h')}</Rise></div>
      <RevealText className="bigText" text={P.about[0]} />
      <Fade className="aboutCols"><p>{P.about[1]}</p><p>{P.about[2]}</p></Fade>
      <div className="journey">
        <Fade as="h3" className="h jh">{t('about.journey')}</Fade>
        <ol className="tl" ref={list}>
          <span className="track" aria-hidden="true"><motion.i style={{ scaleY: scrollYProgress }} /></span>
          {journey.map((j, i) => (
            <Fade as="li" key={i} delay={0.04 * (i % 3)}>
              <b>{j.t}</b><span>{j.d}</span>
            </Fade>
          ))}
        </ol>
      </div>
    </section>
  )
}
