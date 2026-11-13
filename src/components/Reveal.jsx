import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'

export const EASE = [0.76, 0, 0.24, 1]
const OUT = [0.16, 1, 0.3, 1]

/* Teks naik dari balik topeng saat masuk layar. */
export function Rise({ children, as: Tag = 'div', className = '', delay = 0 }) {
  return (
    <Tag className={className}>
      <span className="mask">
        <motion.span className="rise" initial={{ y: '108%' }} whileInView={{ y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 1, ease: EASE, delay }}>{children}</motion.span>
      </span>
    </Tag>
  )
}

export function Fade({ children, className = '', delay = 0, y = 28, as = 'div', ...rest }) {
  const Tag = motion[as]
  return <Tag className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease: OUT, delay }} {...rest}>{children}</Tag>
}

function Word({ children, p, range }) {
  const o = useTransform(p, range, [0.13, 1])
  return <span className="w"><motion.span style={{ opacity: o }}>{children}</motion.span>{' '}</span>
}

/* Paragraf yang kata-katanya menyala satu per satu mengikuti scroll. */
export function RevealText({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.5'] })
  const words = text.split(' ')
  return <p ref={ref} className={className}>{words.map((w, i) => <Word key={i} p={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>)}</p>
}

/* Elemen yang sedikit ditarik ke arah kursor. */
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 }), sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const move = (e) => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength) }
  const leave = () => { x.set(0); y.set(0) }
  return <motion.div ref={ref} className={className} style={{ x: sx, y: sy, display: 'inline-block' }} onMouseMove={move} onMouseLeave={leave}>{children}</motion.div>
}
