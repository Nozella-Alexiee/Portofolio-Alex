import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useFocusTrap, useLockScroll } from '../lib/hooks'
import { ArrowLeft, ArrowRight, ArrowUpRight, Close } from './Icons'

export default function ProjectDialog({ project, index, projects, content, onClose, onOpen }) {
  const [shot, setShot] = useState(0)
  const panel = useRef(null)
  const scroller = useRef(null)

  useLockScroll(true)
  useFocusTrap(panel, true, onClose)

  useEffect(() => {
    setShot(0)
    if (scroller.current) scroller.current.scrollTop = 0
  }, [project.id])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onOpen(projects[(index + 1) % projects.length].id)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onOpen(projects[(index - 1 + projects.length) % projects.length].id)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, onOpen, projects])

  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const image = project.images[shot] ?? project.images[0]

  const go = (offset) => {
    onOpen(projects[(index + offset + projects.length) % projects.length].id)
  }

  return (
    <motion.div
      className="projectDialog"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: 'inset(0% 0 0 0)' }}
      exit={{ clipPath: 'inset(100% 0 0 0)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="pdTop">
        <button type="button" className="pdClose" onClick={onClose}>
          <Close size={18} />
          <span>{content.actions.close}</span>
        </button>
        <span className="pdCounter mono">
          {content.dialog.project.toUpperCase()} {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
        <div className="pdTopNav">
          <button type="button" onClick={() => go(-1)} aria-label={content.dialog.prev}><ArrowLeft /></button>
          <button type="button" onClick={() => go(1)} aria-label={content.dialog.next}><ArrowRight /></button>
        </div>
      </div>

      <div className="pdScroll" ref={scroller}>
        <div className="pdHero">
          <motion.div
            className="pdTitleBlock"
            key={`title-${project.id}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="chip">{project.badge}</span>
            <h2 id="project-title">{project.name}</h2>
            <p>{project.tagline}</p>
            <span className="pdSwipeHint mono">← → {content.dialog.next.toLowerCase()}</span>
          </motion.div>

          <div className="pdMainMedia">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={`${project.id}-${shot}`}
                src={`/images/${image.src}`}
                alt={image.alt}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <span className="pdShotLabel mono">{image.caption} · {shot + 1}/{project.images.length}</span>
          </div>
        </div>

        <div className="pdThumbs" aria-label={content.dialog.gallery}>
          {project.images.map((item, i) => (
            <button
              key={item.src}
              type="button"
              className={i === shot ? 'isActive' : ''}
              onClick={() => setShot(i)}
              aria-label={item.caption}
              aria-pressed={i === shot}
            >
              <img src={`/images/${item.src}`} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>

        <div className="pdColumns">
          <motion.div
            className="pdText"
            key={`text-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3>{content.dialog.overview}</h3>
            <p>{project.desc}</p>

            {project.points.length > 0 && (
              <>
                <h3>{content.dialog.highlights}</h3>
                <ul className="pdPoints">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          <aside className="pdMeta">
            <div>
              <span className="mono">{content.dialog.stack}</span>
              <p>{project.stack.join(' · ')}</p>
            </div>
            {project.links.length > 0 && (
              <div>
                <span className="mono">{content.dialog.links}</span>
                <div className="pdLinks">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <div className="pdNav">
          <button type="button" className="pdNavButton" onClick={() => go(-1)}>
            <span className="mono">{content.dialog.prev}</span>
            <strong>{previous.name}</strong>
            <ArrowLeft size={18} />
          </button>
          <button type="button" className="pdNavButton pdNavNext" onClick={() => go(1)}>
            <span className="mono">{content.dialog.next}</span>
            <strong>{next.name}</strong>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
