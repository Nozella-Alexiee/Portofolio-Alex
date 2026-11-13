import { motion, useReducedMotion } from 'motion/react'

export const EASE = [0.16, 1, 0.3, 1]

export function Reveal({ children, className = '', delay = 0, y = 26, as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function MaskedLine({ children, className = '', delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  return (
    <Tag className={`maskedLine ${className}`}>
      <motion.span
        className="maskedLineInner"
        initial={reduce ? false : { y: '110%' }}
        whileInView={reduce ? undefined : { y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.span>
    </Tag>
  )
}
