import { useUI } from '../ui'
import { useClock } from '../lib/hooks'
import { Reveal } from './Reveal'
import LiquidGlass from './LiquidGlass'
import { ArrowUpRight, Copy, Download } from './Icons'

export default function Contact() {
  const { content, copyEmail } = useUI()
  const contact = content.contact
  const time = useClock()

  return (
    <>
      <section id="contact" className="sec wrap ctSec" aria-labelledby="contact-title">
        <Reveal>
          <LiquidGlass className="ct" radius={48} blur={16} saturation={175} strength={42} band={48} tint="var(--glass-sky)">
            <span className="ctKicker mono">{contact.availability}</span>

            <h2 id="contact-title" className="h ctBig">
              {contact.title} <span>{contact.titleItalic}</span>
            </h2>

            <p className="ctNote">{contact.note}</p>

            <a className="ctMail h" href={`mailto:${content.profile.email}`}>
              {content.profile.email}
              <ArrowUpRight size={28} />
            </a>

            <div className="ctRow">
              <a className="btn ctPrimary" href={`mailto:${content.profile.email}`}>
                {contact.email}
                <span className="arrow">↗</span>
              </a>
              <button type="button" className="btn soft ctSecondary" onClick={copyEmail}>
                <Copy size={16} /> {contact.copy}
              </button>
            </div>

            <div className="ctBottom">
              <div>
                <span className="mono ctSocialLabel">{contact.socials}</span>
                <div className="ctSoc">
                  {content.profile.socials.map((social) => (
                    <a key={social.label} className="ul" href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="ctSide">
                <span className="mono">{contact.localTime}</span>
                <b>{time || '--:--:--'} WIB</b>
                <span className="ctCv">
                  <a href="/cv/CV-Alexander-ID.pdf" download><Download size={13} /> CV ID</a>
                  <a href="/cv/CV-Alexander-EN.pdf" download><Download size={13} /> CV EN</a>
                </span>
              </div>
            </div>
          </LiquidGlass>
        </Reveal>
      </section>

      <footer className="foot wrap">
        <span>© 2026 {content.profile.short} — {contact.footerNote}</span>
        <span className="footR">
          <span className="tnum">Gresik · {time || '--:--:--'} WIB</span>
          <button
            type="button"
            className="ul"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {contact.backTop} ↑
          </button>
        </span>
      </footer>
    </>
  )
}
