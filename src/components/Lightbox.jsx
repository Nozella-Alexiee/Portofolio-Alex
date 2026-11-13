import { useRef } from 'react'
import { motion } from 'motion/react'
import { useFocusTrap, useLockScroll } from '../lib/hooks'
import { Close } from './Icons'

export default function Lightbox({ cert, onClose }) {
  const panel = useRef(null)
  useLockScroll(true)
  useFocusTrap(panel, true, onClose)

  return (
    <motion.div
      className="lightbox"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button type="button" className="lightboxClose" onClick={onClose} aria-label="Tutup">
        <Close />
      </button>
      <motion.figure
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={`/images/${cert.image}`} alt={cert.title} />
        <figcaption>
          <span>{cert.org}</span>
          <b>{cert.title}</b>
          <span>{cert.kind} · {cert.date}</span>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
