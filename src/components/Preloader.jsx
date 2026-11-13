import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

/* Nama terisi dari bawah sampai penuh, lalu layar terbuka ke atas. */
export default function Preloader({ onDone }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf, t0
    const step = (t) => {
      if (!t0) t0 = t
      const k = Math.min((t - t0) / 1400, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - k, 2.4))))
      if (k < 1) raf = requestAnimationFrame(step); else setTimeout(onDone, 260)
    }
    raf = requestAnimationFrame(step)
    const safety = setTimeout(onDone, 4200) /* kalau animasi ditahan browser */
    return () => { cancelAnimationFrame(raf); clearTimeout(safety) }
  }, [onDone])
  return (
    <motion.div className="pre" initial={{ clipPath: 'inset(0% 0% 0% 0% round 0px)' }} exit={{ clipPath: 'inset(0% 0% 100% 0% round 0px 0px 80px 80px)' }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
      <div className="wm" aria-label="Alexander"><b>Alexander</b><i style={{ clipPath: `inset(${100 - n}% 0 0 0)` }}>Alexander</i></div>
      <span className="pc">{n}%</span>
    </motion.div>
  )
}
