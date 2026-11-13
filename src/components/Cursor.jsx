import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/* Titik biru yang mengikuti kursor; membesar dan menampilkan label di atas elemen [data-cursor]. */
export default function Cursor() {
  const [fine] = useState(() => matchMedia('(hover: hover) and (pointer: fine)').matches)
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 520, damping: 40, mass: 0.5 }), sy = useSpring(y, { stiffness: 520, damping: 40, mass: 0.5 })
  const [label, setLabel] = useState(null)
  useEffect(() => {
    if (!fine) return
    const move = (e) => {
      x.set(e.clientX); y.set(e.clientY)
      const t = e.target.closest?.('[data-cursor]')
      setLabel(t ? t.dataset.cursor : null)
    }
    addEventListener('mousemove', move)
    return () => removeEventListener('mousemove', move)
  }, [fine, x, y])
  if (!fine) return null
  const big = label !== null
  return (
    <motion.div style={{ position: 'fixed', top: 0, left: 0, x: sx, y: sy, zIndex: 300, pointerEvents: 'none' }}>
      <motion.div className="cursor" style={{ position: 'absolute', margin: 0, left: 0, top: 0, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: big ? (label ? 88 : 44) : 14, height: big ? (label ? 88 : 44) : 14 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
        {label ? <span>{label}</span> : null}
      </motion.div>
    </motion.div>
  )
}
