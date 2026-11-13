import { useState } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../i18n'
import { goTo, useClock } from '../hooks'
import { Fade, Magnetic, Rise } from './Reveal'

export default function Contact() {
  const { t, P } = useLang()
  const c = P.contact, [copied, setCopied] = useState(false), time = useClock()
  const copy = () => { const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1700) }; navigator.clipboard?.writeText(c.email).then(done, done) || done() }
  return (
    <>
      <section id="contact" className="sec wrap ctSec">
        <motion.div className="ct" initial={{ borderRadius: '80px' }} whileInView={{ borderRadius: '48px' }} viewport={{ once: true, margin: '0px 0px -20% 0px' }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
          <Rise as="h2" className="h ctBig">{t('contact.big')}</Rise>
          <Fade as="p" className="ctNote">{c.note}</Fade>
          <Magnetic strength={0.18} className="ctMailWrap"><a className="ctMail h" href={'mailto:' + c.email} data-cursor="">{c.email}</a></Magnetic>
          <Fade className="ctRow">
            <a className="btn" href={'mailto:' + c.email}>{t('contact.mail')} <span className="arrow">↗</span></a>
            <button className="btn soft" onClick={copy}>{copied ? t('contact.copied') + ' ✓' : t('contact.copy')}</button>
            <span className="ctSoc">{c.links.map((l) => <a key={l[0]} className="ul" href={l[1]} target="_blank" rel="noopener">{l[0]}</a>)}</span>
          </Fade>
        </motion.div>
      </section>
      <footer className="foot wrap">
        <span>{t('foot.copy')}</span>
        <span className="footR"><span className="tnum">Gresik · {time} WIB</span><button className="ul" onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : scrollTo({ top: 0, behavior: 'smooth' }))}>{t('foot.top')} ↑</button></span>
      </footer>
    </>
  )
}
