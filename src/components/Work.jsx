import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n'
import { Fade, Rise } from './Reveal'
import ProjectOverlay from './ProjectOverlay'

const FILTERS = [['all', 'work.all'], ['open', 'work.open'], ['sig', 'work.sig'], ['sekolah', 'work.sekolah']]

export default function Work() {
  const { t, P } = useLang()
  const [f, setF] = useState('all'), [open, setOpen] = useState(null)
  const list = useMemo(() => P.projects.filter((p) => f === 'all' || p.group === f), [P, f])
  return (
    <section id="work" className="sec wrap">
      <div className="secHead"><Rise as="h2" className="h">{t('work.h')}</Rise></div>
      <Fade className="filters">{FILTERS.map(([k, key]) => <button key={k} className={'ul' + (f === k ? ' on' : '')} onClick={() => setF(k)}>{t(key)}</button>)}</Fade>
      {f === 'sig' && <p className="sigNote">{t('work.sigNote')}</p>}
      <div className="cards">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <motion.article key={p.id} layout className={'card' + (i === 0 && list.length > 1 ? ' wide' : '')}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i === 0 ? 0 : (i % 2) * 0.08 }}>
              <button className="cardBtn" onClick={() => setOpen(i)} data-cursor={t('cur.view')}>
                <span className="cimg"><img src={'/images/' + p.shots[0][0]} alt="" loading="lazy" /></span>
                <span className="cbody">
                  <span className="ctop"><h3 className="h">{p.name}</h3><span className="cbadge">{p.badge}</span></span>
                  <span className="ctag">{p.tag}</span>
                  <span className="cstack">{p.stack.slice(0, 4).join(' · ')}</span>
                </span>
                <span className="cgo" aria-hidden="true">↗</span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>{open !== null && <ProjectOverlay key="ov" list={list} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  )
}
