import { useReducedMotion } from 'motion/react'

export default function Ticker({ items, label, className = '' }) {
  const reduce = useReducedMotion()
  const doubled = [...items, ...items]
  return (
    <div className={`ticker ${className}`} aria-hidden="true">
      {label && <span className="tickerLabel">{label}</span>}
      <div className="tickerViewport">
        <div className={`tickerTrack ${reduce ? 'isStatic' : ''}`}>
          {doubled.map((item, index) => (
            <span className="tickerItem" key={`${item}-${index}`}>
              <span className="tickerDiamond" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
