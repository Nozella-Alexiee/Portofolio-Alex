import { Reveal } from './Reveal'

export default function SectionHead({ id, title, italic, lead, aside }) {
  return (
    <header className="secHead">
      <div className="secHeadRow">
        <Reveal as="h2" id={`${id}-title`} className="h">
          {title}
          {italic && (
            <>
              {' '}
              <span className="hl">{italic}</span>
            </>
          )}
        </Reveal>
        {aside && <Reveal className="secAside" delay={0.08}>{aside}</Reveal>}
      </div>
      {lead && <Reveal as="p" className="secLead" delay={0.1}>{lead}</Reveal>}
    </header>
  )
}
