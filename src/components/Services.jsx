import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useUI } from '../ui'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'
import LiquidGlass from './LiquidGlass'

export default function Services() {
  const { content } = useUI()
  const services = content.services
  const [open, setOpen] = useState(0)

  return (
    <section id="services" className="sec wrap" aria-labelledby="services-title">
      <SectionHead
        id="services"
        title={services.label}
        aside={<p className="svcLede">{services.lead}</p>}
      />

      <div className="svcList">
        {services.items.map((item, index) => {
          const isOpen = open === index
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.div layout className={`svc${isOpen ? ' on' : ''}`} transition={{ layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}>
                <LiquidGlass
                  radius={30}
                  blur={isOpen ? 12 : 0}
                  saturation={165}
                  strength={30}
                  band={30}
                  tint={isOpen ? 'var(--glass-sky-soft)' : 'transparent'}
                  sheen={isOpen}
                >
                  <button
                    type="button"
                    className="svcBtn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="h svcT">{item.title}</span>
                    <span className="plus" aria-hidden="true"><i /><i /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="svcBody"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="svcIn">
                          <p>{item.desc}</p>
                          <p className="svcTags">{item.tags.join(' · ')}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LiquidGlass>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
