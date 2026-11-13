import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n'
import { Fade } from './Reveal'

/* Baris sertifikat yang bisa diseret dengan momentum. Klik gambar buat memperbesar. */
export default function Certificates() {
  const { t, P } = useLang()
  const track = useRef(null), wrap = useRef(null), moved = useRef(false)
  const [lim, setLim] = useState(0), [zoom, setZoom] = useState(null)
  useEffect(() => {
    const m = () => setLim(Math.min(0, wrap.current.clientWidth - track.current.scrollWidth))
    m(); const ro = new ResizeObserver(m); ro.observe(wrap.current); ro.observe(track.current); return () => ro.disconnect()
  }, [P])
  useEffect(() => {
    if (zoom === null) return
    const k = (e) => e.key === 'Escape' && setZoom(null)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [zoom])
  return (
    <div className="certs">
      <Fade className="certHead"><h3 className="h">{t('cert.h')}</h3><span className="drag">{t('cert.drag')} ←→</span></Fade>
      <div className="certWrap" ref={wrap}>
        <motion.div className="certTrack" ref={track} drag="x" dragConstraints={{ left: lim, right: 0 }} dragElastic={0.12} data-cursor={t('cur.drag')}
          onDragStart={() => { moved.current = true }} onDragEnd={() => setTimeout(() => { moved.current = false }, 60)}>
          {P.certs.map((c, i) => (
            <article className="cert" key={i}>
              <button className="certImg" onClick={() => !moved.current && setZoom(i)} aria-label={c.title}><img src={'/images/' + c.img} alt={c.title} draggable="false" loading="lazy" /></button>
              <div className="certMeta"><span className="co">{c.org}</span><h4 className="h">{c.title}</h4><p>{c.kind} · {c.date}</p><span className="st">{c.status}</span></div>
            </article>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {zoom !== null && (
          <motion.div className="lb" onClick={() => setZoom(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} data-lenis-prevent>
            <motion.img src={'/images/' + P.certs[zoom].img} alt={P.certs[zoom].title} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
