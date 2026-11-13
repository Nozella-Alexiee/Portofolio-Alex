import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'lenis/dist/lenis.css'
import './base.css'
import './sections.css'
import { LangProvider } from './i18n'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode><LangProvider><App /></LangProvider></StrictMode>
)
