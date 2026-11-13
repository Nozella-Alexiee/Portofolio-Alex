import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n'
import { EASE } from './Reveal'

/* Detail proyek: lembar membulat yang naik dari bawah. Esc menutup, panah kiri/kanan pindah proyek. */
export default function ProjectOverlay({ list, index, onIndex, onClose }) {
  const { t } = useLang()
  const p = list[index], [shot, setShot] = useState(0)
  useEffect(() => setShot(0), [index])
  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % list.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + list.length) % list.length)
    }
    addEventListener('keydown', key)
    window.__lenis?.stop(); document.documentElement.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', key); window.__lenis?.start(); document.documentElement.style.overflow = '' }
  }, [index, list.length, onClose, onIndex])
  const s = p.shots[shot]
  return (
    <>
      <motion.div className="ovScrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.div className="ov" role="dialog" aria-modal="true" aria-label={p.name} data-lenis-prevent
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.85, ease: EASE }}>
        <button className="rd ovClose" onClick={onClose} aria-label={t('nav.close')} autoFocus><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
        <div className="ovBody">
          <div className="ovGal">
            <div className="ovMain">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img key={p.id + shot} src={'/images/' + s[0]} alt={p.name + ' — ' + s[1]} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} />
              </AnimatePresence>
              <span className="cap">{s[1]} · {shot + 1}/{p.shots.length}</span>
            </div>
            <div className="ovThumbs">{p.shots.map((x, i) => <button key={i} className={i === shot ? 'on' : ''} onClick={() => setShot(i)} aria-label={x[1]}><img src={'/images/' + x[0]} alt="" loading="lazy" /></button>)}</div>
          </div>
          <motion.div className="ovInfo" key={p.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}>
            <span className="cbadge">{p.badge}</span>
            <h3 className="h">{p.name}</h3>
            <p className="tg">{p.tag}</p>
            <p className="ds">{p.desc}</p>
            {p.points.length > 0 && <ul className="pts">{p.points.map((x, i) => <li key={i}>{x}</li>)}</ul>}
            <p className="stk"><b>{t('work.stack')}:</b> {p.stack.join(' · ')}</p>
            {p.links.length > 0 && <div className="lnks">{p.links.map((l, i) => <a key={i} className={'btn' + (i === 0 ? ' sky' : ' soft')} href={l[1]} target="_blank" rel="noopener">{l[0]} <span className="arrow">↗</span></a>)}</div>}
            <div className="ovNav">
              <button className="ul" onClick={() => onIndex((index - 1 + list.length) % list.length)}>← {t('work.prev')}</button>
              <button className="ul" onClick={() => onIndex((index + 1) % list.length)}>{t('work.next')} →</button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
