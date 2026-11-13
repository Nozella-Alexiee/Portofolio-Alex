import { useMemo } from 'react'
import { useLang } from '../i18n'
import { Fade, Rise } from './Reveal'
import Certificates from './Certificates'

export default function Skills() {
  const { t, P } = useLang()
  const used = useMemo(() => { const a = []; P.projects.forEach((p) => p.stack.forEach((s) => a.includes(s) || a.push(s))); return a }, [P])
  const sentence = (lead, items) => (
    <Fade as="p" className="skSent">
      {lead}{' '}
      {items.map((s, i) => <span key={s}><em className="skill">{s}</em>{i < items.length - 2 ? ', ' : i === items.length - 2 ? ` ${t('skills.and')} ` : '.'}</span>)}
    </Fade>
  )
  return (
    <section id="skills" className="sec wrap">
      <div className="secHead"><Rise as="h2" className="h">{t('skills.h')}</Rise></div>
      {sentence(t('skills.webS'), P.skills.web)}
      {sentence(t('skills.finS'), P.skills.fin)}
      <Fade className="skEnv">
        <dl>{P.env.map((r) => <div key={r[0]}><dt>{r[0]}</dt><dd>{r[1]}</dd></div>)}</dl>
        <div><p className="skUsedT">{t('skills.used')}</p><p className="used">{used.join(' · ')}</p></div>
      </Fade>
      <Certificates />
    </section>
  )
}
