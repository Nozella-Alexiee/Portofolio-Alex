import { useCallback, useEffect, useRef, useState } from 'react'

const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function scrollToId(id) {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' })
}

export function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
        })
      )
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function useScrollSpy(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const marker = window.scrollY + window.innerHeight * 0.34
      let current = null
      ids.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) current = id
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids.join('|')])
  return active
}

export function useMedia(query) {
  const [matches, setMatches] = useState(() =>
    typeof matchMedia === 'undefined' ? false : matchMedia(query).matches
  )
  useEffect(() => {
    const mql = matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export function useLockScroll(active) {
  useEffect(() => {
    if (!active) return
    const root = document.documentElement
    const previous = root.style.overflow
    const previousPadding = root.style.paddingRight
    const gap = window.innerWidth - root.clientWidth
    root.style.overflow = 'hidden'
    if (gap > 0) root.style.paddingRight = `${gap}px`
    return () => {
      root.style.overflow = previous
      root.style.paddingRight = previousPadding
    }
  }, [active])
}

export function useFocusTrap(ref, active, onClose) {
  const previousFocus = useRef(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!active) return
    previousFocus.current = document.activeElement
    const node = ref.current
    if (!node) return

    const focusable = () =>
      [...node.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(
        (element) => element.offsetParent !== null || element === document.activeElement
      )

    const first = focusable()[0]
    if (first) requestAnimationFrame(() => first.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus()
    }
  }, [active, ref])
}

export function useCopy() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2200)
  }, [])
  useEffect(() => () => window.clearTimeout(timer.current), [])
  return { copied, copy }
}
