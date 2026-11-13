import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import { useUI } from '../ui'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'

export default function About() {
  const { content } = useUI()
  const about = content.about
  const list = useRef(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 0.72', 'end 0.6'] })

  return (
    <section id="about" className="sec wrap" aria-labelledby="about-title">
      <SectionHead id="about" title={about.label} />

      <Reveal>
        <p className="bigText">{about.lead}</p>
      </Reveal>

      <Reveal className="aboutCols" delay={0.06}>
        <p>{about.body[0]}</p>
        <div>
          <p>{about.body[1]}</p>
          {about.body[2] && <p>{about.body[2]}</p>}
        </div>
      </Reveal>

      <div className="journey">
        <Reveal as="h3" className="h jh">{about.journeyTitle}</Reveal>
        <ol className="tl" ref={list}>
          <span className="track" aria-hidden="true">
            <motion.i style={{ scaleY: scrollYProgress }} />
          </span>
          {about.journey.map((entry, index) => (
            <Reveal as="li" key={`${entry.when}-${index}`} delay={0.03 * (index % 3)}>
              <b>{entry.when}</b>
              <span>{entry.what}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
