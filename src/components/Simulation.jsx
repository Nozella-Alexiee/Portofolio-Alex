import { useEffect, useMemo, useState } from 'react'
import { motion, useSpring, useTransform } from 'motion/react'
import { useLang } from '../i18n'
import { hitungMajemuk, titikGrafik } from '../data/porto'
import { Fade, Rise } from './Reveal'

const W = 800, H = 360, PAD = 24

export default function Simulation() {
  const { t, rp, lang } = useLang()
  const [v, setV] = useState({ modal: 5000000, setor: 500000, bunga: 7, tahun: 10 })
  const R = useMemo(() => hitungMajemuk(v.modal, v.setor, v.bunga, v.tahun), [v])
  const pts = useMemo(() => titikGrafik(v.modal, v.setor, v.bunga, v.tahun), [v])
  const max = Math.max(pts[pts.length - 1].saldo, 1)
  const y = (n) => H - PAD - (n / max) * (H - PAD * 2)
  const x = (i) => (i / (pts.length - 1)) * W
  const line = 'M' + pts.map((p, i) => `${x(i).toFixed(1)} ${y(p.saldo).toFixed(1)}`).join(' L')
  const dep = 'M' + pts.map((p, i) => `${x(i).toFixed(1)} ${y(p.disetor).toFixed(1)}`).join(' L')
  const area = `${line} L${W} ${H} L0 ${H} Z`
  const spring = useSpring(R.akhir, { stiffness: 90, damping: 20 })
  useEffect(() => { spring.set(R.akhir) }, [R.akhir, spring])
  const txt = useTransform(spring, (n) => rp(n))
  const f = (k, label, min, max_, step, fmt) => (
    <label className="fld">
      <span className="fl"><span>{label}</span><b>{fmt(v[k])}</b></span>
      <input type="range" min={min} max={max_} step={step} value={v[k]} style={{ '--p': ((v[k] - min) / (max_ - min)) * 100 + '%' }} onChange={(e) => setV({ ...v, [k]: +e.target.value })} />
    </label>
  )
  const yrs = (n) => `${n} ${n === 1 ? t('sim.year') : t('sim.years')}`
  return (
    <section id="sim" className="sec wrap">
      <div className="secHead"><Rise as="h2" className="h">{t('sim.h')}</Rise></div>
      <Fade className="simCard">
        <div className="simIn">
          <h3 className="h">{t('sim.sub')}</h3>
          {f('modal', t('sim.f1'), 0, 50000000, 500000, rp)}
          {f('setor', t('sim.f2'), 0, 5000000, 50000, rp)}
          {f('bunga', t('sim.f3'), 0, 20, 0.5, (n) => String(n).replace('.', lang === 'en' ? '.' : ',') + '%')}
          {f('tahun', t('sim.f4'), 1, 30, 1, yrs)}
          <p className="simNote">{t('sim.note')}</p>
        </div>
        <div className="simOut">
          <p className="simLab">{t('sim.final')}</p>
          <motion.p className="simBig h">{txt}</motion.p>
          <div className="simTwo"><span><i className="d1" />{t('sim.dep')}<b>{rp(R.disetor)}</b></span><span><i className="d2" />{t('sim.int')}<b>{rp(R.bunga)}</b></span></div>
          <svg className="chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label={t('sim.final')}>
            <defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--sky2)" stopOpacity=".55" /><stop offset="1" stopColor="var(--sky2)" stopOpacity="0" /></linearGradient></defs>
            <motion.path d={area} fill="url(#ga)" animate={{ d: area }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
            <motion.path d={dep} fill="none" stroke="var(--mut)" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" animate={{ d: dep }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
            <motion.path d={line} fill="none" stroke="var(--sky2)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" animate={{ d: line }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
          </svg>
        </div>
      </Fade>
    </section>
  )
}
