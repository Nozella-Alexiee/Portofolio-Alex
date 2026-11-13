/* Ganti tema terang/gelap. Di browser yang mendukung, tema baru melebar sebagai lingkaran dari tombolnya. */
export function toggleTheme(btn) {
  const root = document.documentElement
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  const apply = () => { root.setAttribute('data-theme', next); try { localStorage.setItem('theme', next) } catch {} }
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (calm || !document.startViewTransition) return apply()
  const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2
  const rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const ms = +((/[?&]tms=(\d+)/.exec(location.search) || [])[1]) || 700
  document.startViewTransition(apply).ready.then(() => {
    root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${rad}px at ${x}px ${y}px)`] },
      { duration: ms, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' })
  }).catch(() => {})
}
