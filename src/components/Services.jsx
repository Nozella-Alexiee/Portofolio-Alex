import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n'
import { goTo } from '../hooks'
import { Fade, Rise } from './Reveal'

const TAGS = {
  id: [['PHP', 'React', 'TypeScript', 'FastAPI', 'Node.js'], ['Absensi', 'Pemilihan', 'Kasir QR'], ['Docker', 'Linux']],
  en: [['PHP', 'React', 'TypeScript', 'FastAPI', 'Node.js'], ['Attendance', 'Voting', 'QR cashier'], ['Docker', 'Linux']],
}

export default function Services() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <section id="services" className="sec wrap">
      <div className="secHead svcHead"><Rise as="h2" className="h">{t('svc.h')}</Rise><Fade as="p" className="svcLede">{t('svc.lede')}</Fade></div>
      <div className="svcList">
        {[1, 2, 3].map((n, i) => {
          const on = open === i
          return (
            <motion.div key={n} layout className={'svc' + (on ? ' on' : '')} transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}>
              <button className="svcBtn" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}>
                <span className="h svcT">{t('svc.' + n)}</span>
                <span className="plus" aria-hidden="true"><i /><i /></span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div className="svcBody" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="svcIn">
                      <p>{t('svc.' + n + 'd')}</p>
                      <p className="svcTags">{TAGS[lang][i].join(' · ')}</p>
                      <button className="btn" onClick={() => goTo('contact')}>{t('svc.cta')} <span className="arrow">↗</span></button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
