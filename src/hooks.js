import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

/* Smooth scroll. Dimatikan kalau pengguna minta gerakan dikurangi. */
export function useSmoothScroll() {
  useEffect(() => {
    if (reducedMotion()) return
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95 })
    window.__lenis = lenis
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null }
  }, [])
}

export function goTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4, easing: (x) => 1 - Math.pow(1 - x, 4) })
  else el.scrollIntoView({ behavior: 'smooth' })
}

/* Bagian mana yang sedang di tengah layar. */
export function useActive(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [ids.join()])
  return active
}

/* Jam Gresik (WIB). */
export function useClock() {
  const [t, setT] = useState('')
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour12: false }))
    f(); const id = setInterval(f, 1000); return () => clearInterval(id)
  }, [])
  return t
}
