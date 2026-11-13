import { AnimatePresence } from 'motion/react'
import { UIProvider, useUI } from './ui'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Lab from './components/Lab'
import Services from './components/Services'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'
import ProjectDialog from './components/ProjectDialog'

function Site() {
  const { content, activeProject, closeProject, openProject } = useUI()
  const project = content.projects.find((item) => item.id === activeProject)

  return (
    <>
      <a className="skipLink" href="#main">
        {content.actions.skip}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Lab />
        <Services />
        <Hobbies />
        <Contact />
      </main>

      <CommandPalette />

      <AnimatePresence>
        {project && (
          <ProjectDialog
            project={project}
            index={content.projects.indexOf(project)}
            projects={content.projects}
            content={content}
            onClose={closeProject}
            onOpen={openProject}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <UIProvider>
      <Site />
    </UIProvider>
  )
}
