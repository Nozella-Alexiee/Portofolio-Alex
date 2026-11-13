import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { useUI } from '../ui'
import { formatCurrency, simulate } from '../lib/finance'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'
import LiquidGlass from './LiquidGlass'

function AnimatedCurrency({ value, lang }) {
  const reduce = useReducedMotion()
  const spring = useSpring(value, { stiffness: 85, damping: 20 })
  const text = useTransform(spring, (latest) => formatCurrency(latest, lang))

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  if (reduce) return <>{formatCurrency(value, lang)}</>
  return <motion.span>{text}</motion.span>
}

function RangeField({ label, value, min, max, step, display, onChange }) {
  const percent = ((value - min) / (max - min)) * 100
  return (
    <label className="fld">
      <span className="fl">
        <span>{label}</span>
        <b>{display}</b>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--p': `${percent}%` }}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}

function SimChart({ result, label }) {
  const width = 640
  const height = 300
  const pad = 8
  const series = result.series
  const max = Math.max(...series.map((point) => point.balance), 1)
  const x = (year) => pad + (year / Math.max(result.years, 1)) * (width - pad * 2)
  const y = (value) => height - pad - (value / max) * (height - pad * 2)
  const line = series.map((point, index) => `${index === 0 ? 'M' : 'L'}${x(point.year).toFixed(1)} ${y(point.balance).toFixed(1)}`).join(' ')
  const deposit = series.map((point, index) => `${index === 0 ? 'M' : 'L'}${x(point.year).toFixed(1)} ${y(point.deposited).toFixed(1)}`).join(' ')
  const area = `${line} L${x(result.years).toFixed(1)} ${height - pad} L${pad} ${height - pad} Z`

  return (
    <svg className="chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label={label}>
      <defs>
        <linearGradient id="simArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--on-sky)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--on-sky)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#simArea)" />
      <path d={deposit} fill="none" stroke="var(--on-sky)" strokeOpacity="0.38" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" />
      <path d={line} fill="none" stroke="var(--on-sky)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Lab() {
  const { content, lang } = useUI()
  const lab = content.lab
  const [values, setValues] = useState({ modal: 5000000, monthly: 500000, rate: 7, years: 10 })
  const result = useMemo(() => simulate(values), [values])
  const activePreset = content.presets.find(
    (preset) =>
      preset.modal === values.modal &&
      preset.monthly === values.monthly &&
      preset.rate === values.rate &&
      preset.years === values.years
  )?.id

  const update = (key) => (value) => setValues((current) => ({ ...current, [key]: value }))
  const rateLabel = `${String(values.rate).replace('.', lang === 'en' ? '.' : ',')}%`

  return (
    <section id="sim" className="sec wrap" aria-labelledby="sim-title">
      <SectionHead id="sim" title={content.nav.sim} />

      <Reveal>
        <LiquidGlass className="simCard" radius={44} blur={14} saturation={170} strength={38} band={44} tint="var(--glass-tint)">
          <div className="simGrid">
            <div className="simIn">
              <h3 className="h">{lab.title.replace(/,\s*$/, '')}</h3>
              <p className="simLede">{lab.lead}</p>

              <div className="simPresets">
                <span className="mono">{lab.presetsLabel}</span>
                <div>
                  {content.presets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className={activePreset === preset.id ? 'isActive' : ''}
                      aria-pressed={activePreset === preset.id}
                      onClick={() =>
                        setValues({ modal: preset.modal, monthly: preset.monthly, rate: preset.rate, years: preset.years })
                      }
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="simRanges">
                <RangeField
                  label={lab.fields.modal}
                  value={values.modal}
                  min={0}
                  max={100000000}
                  step={500000}
                  display={formatCurrency(values.modal, lang)}
                  onChange={update('modal')}
                />
                <RangeField
                  label={lab.fields.monthly}
                  value={values.monthly}
                  min={0}
                  max={5000000}
                  step={50000}
                  display={formatCurrency(values.monthly, lang)}
                  onChange={update('monthly')}
                />
                <RangeField
                  label={lab.fields.rate}
                  value={values.rate}
                  min={0}
                  max={20}
                  step={0.5}
                  display={rateLabel}
                  onChange={update('rate')}
                />
                <RangeField
                  label={lab.fields.years}
                  value={values.years}
                  min={1}
                  max={30}
                  step={1}
                  display={`${values.years} ${lab.year}`}
                  onChange={update('years')}
                />
              </div>

              <p className="simNote">{lab.note}</p>
            </div>

            <div className="simOut">
              <span className="simLab">{lab.resultLabel}</span>
              <p className="simBig h">
                <AnimatedCurrency value={result.final} lang={lang} />
              </p>
              <div className="simTwo">
                <span>
                  <i className="d1" />
                  {lab.deposited}
                  <b>{formatCurrency(result.deposited, lang)}</b>
                </span>
                <span>
                  <i className="d2" />
                  {lab.interest}
                  <b>{formatCurrency(result.interest, lang)}</b>
                </span>
              </div>
              <SimChart result={result} label={`${lab.chartLabel}. ${lab.resultLabel}: ${formatCurrency(result.final, lang)}`} />
            </div>
          </div>
        </LiquidGlass>
      </Reveal>
    </section>
  )
}
