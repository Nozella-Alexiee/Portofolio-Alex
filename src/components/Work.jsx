import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useUI } from '../ui'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'

const FILTERS = ['all', 'open', 'sig', 'sekolah']

export default function Work() {
  const { content, openProject } = useUI()
  const [filter, setFilter] = useState('all')
  const reduce = useReducedMotion()

  const projects = useMemo(
    () => (filter === 'all' ? content.projects : content.projects.filter((project) => project.group === filter)),
    [content.projects, filter]
  )

  return (
    <section id="work" className="sec wrap" aria-labelledby="work-title">
      <SectionHead id="work" title={content.work.label} />

      <Reveal className="filters" delay={0.04}>
        {FILTERS.map((id) => (
          <button
            key={id}
            type="button"
            className={`ul${filter === id ? ' on' : ''}`}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {content.work.filters[id]}
          </button>
        ))}
      </Reveal>

      {filter === 'sig' && <p className="sigNote">{content.work.sigNote}</p>}

      <motion.div
        key={filter}
        className="cards"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`card${filter === 'all' && index === 0 && projects.length > 1 ? ' wide' : ''}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -6% 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.06 }}
          >
            <button
              type="button"
              className="cardBtn"
              onClick={() => openProject(project.id)}
              aria-label={`${content.work.view}: ${project.name}`}
            >
              <span className="cimg">
                <img
                  src={`/images/${project.images[0].src}`}
                  alt={project.images[0].alt}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  decoding="async"
                />
              </span>
              <span className="cbody">
                <span className="ctop">
                  <span className="h cname">{project.name}</span>
                  <span className="cbadge">{project.badge}</span>
                </span>
                <span className="ctag">{project.tagline}</span>
                <span className="cstack">{project.stack.slice(0, 4).join(' · ')}</span>
              </span>
              <span className="cgo" aria-hidden="true">↗</span>
            </button>
          </motion.article>
        ))}
      </motion.div>

      {!projects.length && <p className="workEmpty">{content.work.empty}</p>}
    </section>
  )
}
