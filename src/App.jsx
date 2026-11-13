import { useCallback, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { useSmoothScroll, reducedMotion } from './hooks'
import { useLang } from './i18n'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Simulation from './components/Simulation'
import Services from './components/Services'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

const skipPre = () => /[?&](nopre|noanim)/.test(location.search) || reducedMotion() || (() => { try { return sessionStorage.getItem('pre') === '1' } catch { return false } })()

export default function App() {
  useSmoothScroll()
  const { P } = useLang()
  const [loading, setLoading] = useState(() => !skipPre())
  const done = useCallback(() => { try { sessionStorage.setItem('pre', '1') } catch {} setLoading(false) }, [])
  return (
    <>
      <Cursor />
      <AnimatePresence>{loading && <Preloader key="pre" onDone={done} />}</AnimatePresence>
      <Header />
      <main>
        <Hero ready={!loading} />
        <About />
        <Work />
        <Skills />
        <Simulation />
        <Services />
        <Hobbies />
        <Contact />
      </main>
    </>
  )
}
