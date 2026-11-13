import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { getContent } from './data/content'

const UIContext = createContext(null)

function initialLang() {
  try {
    const query = new URLSearchParams(window.location.search).get('lang')
    if (query === 'en' || query === 'id') return query
    return localStorage.getItem('lang') === 'en' ? 'en' : 'id'
  } catch {
    return 'id'
  }
}

function initialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function UIProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const [theme, setTheme] = useState(initialTheme)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const content = useMemo(() => getContent(lang), [lang])

  const setLang = useCallback((next) => {
    if (next !== 'id' && next !== 'en') return
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.meta.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'en' ? 'en_US' : 'id_ID')
  }, [lang, content])

  useEffect(() => {
    try {
      if (localStorage.getItem('theme')) return
    } catch {
      return
    }
    const mql = matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      const next = event.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      document.documentElement.style.colorScheme = next
      setTheme(next)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const showToast = useCallback((message) => {
    setToast(message)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 2400)
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content.profile.email)
    } catch {
      const area = document.createElement('textarea')
      area.value = content.profile.email
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    showToast(content.contact.copied)
  }, [content, showToast])

  const toggleTheme = useCallback(
    (button) => {
      const root = document.documentElement
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
      const apply = () => {
        root.dataset.theme = next
        root.style.colorScheme = next
        document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
          meta.setAttribute('content', next === 'dark' ? '#050505' : '#ffffff')
        })
        try {
          localStorage.setItem('theme', next)
        } catch {}
        setTheme(next)
      }
      const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
      if (calm || !document.startViewTransition || !(button instanceof HTMLElement)) {
        apply()
        return
      }
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const transition = document.startViewTransition(apply)
      transition.ready
        .then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 650, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' }
          )
        })
        .catch(() => {})
    },
    []
  )

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openProject = useCallback((id) => setActiveProject(id), [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      toggleTheme,
      content,
      paletteOpen,
      setPaletteOpen,
      activeProject,
      openProject,
      closeProject: () => setActiveProject(null),
      toast: showToast,
      copyEmail,
    }),
    [lang, setLang, theme, toggleTheme, content, paletteOpen, activeProject, openProject, showToast, copyEmail]
  )

  return (
    <UIContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="toastDot" aria-hidden="true" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) throw new Error('useUI must be used inside UIProvider')
  return context
}
