import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { useUI } from '../ui'
import { ALL_TECH } from '../data/content'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'
import Lightbox from './Lightbox'
import { Download } from './Icons'

export default function Skills() {
  const { content } = useUI()
  const skills = content.skills
  const [zoom, setZoom] = useState(null)
  const web = skills.groups[0]
  const finance = skills.groups[1]

  const sentence = (lead, items, index) => (
    <Reveal as="p" className="skSent" delay={0.04 * index}>
      {lead}{' '}
      {items.map((item, itemIndex) => (
        <span key={item}>
          <em className="skill">{item}</em>
          {itemIndex < items.length - 2 ? ', ' : itemIndex === items.length - 2 ? ` ${skills.and} ` : '.'}
        </span>
      ))}
    </Reveal>
  )

  return (
    <section id="skills" className="sec wrap" aria-labelledby="skills-title">
      <SectionHead id="skills" title={skills.label} />

      {sentence(skills.webLead, web.items, 0)}
      {sentence(skills.finLead, finance.items, 1)}

      <Reveal className="skEnv" delay={0.06}>
        <dl>
          {skills.env.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <p className="skUsedT">{skills.techLabel}</p>
          <p className="used">{ALL_TECH.join(' · ')}</p>
        </div>
      </Reveal>

      <div className="certs">
        <div className="certHead">
          <Reveal as="h3" className="h">{skills.credentialsLabel}</Reveal>
          <Reveal as="span" className="drag" delay={0.05}>{skills.certDrag}</Reveal>
        </div>
        <Reveal className="certWrap" delay={0.06}>
          <div className="certTrack" role="list" tabIndex={0} aria-label={skills.credentialsLabel}>
            {content.certs.map((cert, index) => (
              <article className="cert" key={cert.image} role="listitem">
                <button
                  type="button"
                  className="certBtn"
                  onClick={() => setZoom(cert)}
                  aria-label={`${skills.viewCert}: ${cert.title}`}
                >
                  <span className="certImg">
                    <img src={`/images/${cert.image}`} alt={cert.title} loading="lazy" decoding="async" />
                  </span>
                  <span className="certMeta">
                    <span className="co">{cert.org}</span>
                    <span className="certTitle h">{cert.title}</span>
                    <span className="certSub">{cert.kind} · {cert.date}</span>
                    <span className="certStatus">{cert.status}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="cvRow" delay={0.04}>
        <span className="cvRowLabel">{skills.cvTitle}</span>
        <span className="cvRowLinks">
          <a className="ul" href="/cv/CV-Alexander-ID.pdf" download>
            <Download size={15} /> {skills.cvId}
          </a>
          <a className="ul" href="/cv/CV-Alexander-EN.pdf" download>
            <Download size={15} /> {skills.cvEn}
          </a>
        </span>
      </Reveal>

      <AnimatePresence>{zoom && <Lightbox cert={zoom} onClose={() => setZoom(null)} />}</AnimatePresence>
    </section>
  )
}
