import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useUI } from '../ui'
import { SECTIONS } from '../data/content'
import { scrollToId, useFocusTrap, useLockScroll } from '../lib/hooks'
import { ArrowUpRight, Search } from './Icons'

const GROUP_ORDER = ['navigate', 'projects', 'actions', 'social']

export default function CommandPalette() {
  const { content, lang, setLang, toggleTheme, paletteOpen, setPaletteOpen, openProject, copyEmail } = useUI()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const panel = useRef(null)
  const input = useRef(null)

  useLockScroll(paletteOpen)
  useFocusTrap(panel, paletteOpen, () => setPaletteOpen(false))

  const commands = useMemo(() => {
    const navigate = SECTIONS.map((id, index) => ({
      id: `nav-${id}`,
      group: 'navigate',
      label: content.nav[id],
      meta: `0${index + 1}`,
      keywords: `section ${id} ${content.nav[id]}`,
      run: () => scrollToId(id),
    }))

    const projects = content.projects.map((project) => ({
      id: `project-${project.id}`,
      group: 'projects',
      label: project.name,
      meta: project.badge,
      keywords: `${project.name} ${project.stack.join(' ')} ${project.tagline}`,
      run: () => openProject(project.id),
    }))

    const actions = [
      {
        id: 'theme',
        group: 'actions',
        label: content.palette.theme,
        meta: 'T',
        keywords: 'theme dark light gelap terang',
        run: () => toggleTheme(document.querySelector('.themeBtn')),
      },
      {
        id: 'lang',
        group: 'actions',
        label: lang === 'id' ? content.palette.langEn : content.palette.langId,
        meta: lang.toUpperCase(),
        keywords: 'language bahasa english indonesia',
        run: () => setLang(lang === 'id' ? 'en' : 'id'),
      },
      {
        id: 'copy',
        group: 'actions',
        label: content.palette.copy,
        meta: 'C',
        keywords: 'copy email salin',
        run: copyEmail,
      },
      {
        id: 'cv',
        group: 'actions',
        label: content.palette.cv,
        meta: 'D',
        keywords: 'cv resume download unduh',
        run: () => window.open(content.profile.cv, '_blank', 'noopener'),
      },
    ]

    const social = content.profile.socials.map((item) => ({
      id: `social-${item.label}`,
      group: 'social',
      label: item.label,
      meta: '↗',
      keywords: item.label,
      run: () => window.open(item.href, '_blank', 'noopener'),
    }))

    return [...navigate, ...projects, ...actions, ...social]
  }, [content, lang, setLang, toggleTheme, openProject, copyEmail])

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return commands
    return commands.filter((command) => `${command.label} ${command.keywords}`.toLowerCase().includes(value))
  }, [commands, query])

  const groups = useMemo(
    () =>
      GROUP_ORDER.map((key) => ({
        key,
        label: content.palette.groups[key],
        items: filtered.filter((command) => command.group === key),
      })).filter((group) => group.items.length > 0),
    [content.palette.groups, filtered]
  )

  useEffect(() => {
    if (!paletteOpen) return
    setQuery('')
    setActive(0)
    const id = requestAnimationFrame(() => input.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [paletteOpen])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    if (active > filtered.length - 1) setActive(Math.max(0, filtered.length - 1))
  }, [active, filtered.length])

  const run = (command) => {
    if (!command) return
    setPaletteOpen(false)
    window.setTimeout(() => command.run(), 40)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (index + 1) % Math.max(filtered.length, 1))
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (index - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1))
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      run(filtered[active])
    }
  }

  let offset = 0

  return (
    <AnimatePresence>
      {paletteOpen && (
        <motion.div
          className="paletteLayer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setPaletteOpen(false)
          }}
        >
          <motion.div
            className="palettePanel"
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="palette-title"
            initial={{ opacity: 0, y: -12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="paletteSearch">
              <Search size={18} />
              <input
                ref={input}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onKeyDown}
                placeholder={content.palette.placeholder}
                aria-label={content.palette.placeholder}
                aria-controls="palette-list"
                aria-activedescendant={filtered[active] ? `palette-${filtered[active].id}` : undefined}
                autoComplete="off"
                spellCheck="false"
              />
              <kbd>ESC</kbd>
            </div>

            <div className="paletteList" id="palette-list" role="listbox" aria-labelledby="palette-title">
              <span id="palette-title" className="srOnly">{content.palette.title}</span>
              {groups.map((group) => (
                <div className="paletteGroup" key={group.key}>
                  <span className="paletteGroupLabel mono">{group.label}</span>
                  {group.items.map((command) => {
                    const index = offset
                    offset += 1
                    return (
                      <button
                        key={command.id}
                        id={`palette-${command.id}`}
                        type="button"
                        role="option"
                        aria-selected={index === active}
                        className={`paletteItem ${index === active ? 'isActive' : ''}`}
                        onMouseEnter={() => setActive(index)}
                        onClick={() => run(command)}
                      >
                        <span className="paletteItemLabel">{command.label}</span>
                        <span className="paletteItemMeta mono">{command.meta}</span>
                        {command.group === 'projects' && <ArrowUpRight size={15} />}
                      </button>
                    )
                  })}
                </div>
              ))}
              {!filtered.length && <p className="paletteEmpty">{content.palette.empty}</p>}
            </div>

            <div className="paletteFoot">
              <span><kbd>↑</kbd><kbd>↓</kbd> {lang === 'id' ? 'navigasi' : 'navigate'}</span>
              <span><kbd>↵</kbd> {content.palette.open}</span>
              <span><kbd>esc</kbd> {content.palette.close}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
