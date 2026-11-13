import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import { useLang } from '../i18n'
import { Fade, Rise } from './Reveal'

export default function Hobbies() {
  const { t, P } = useLang()
  const H = P.hobi, ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]), y2 = useTransform(scrollYProgress, [0, 1], [-30, 70])
  return (
    <section id="hobi" className="sec wrap" ref={ref}>
      <div className="secHead"><Rise as="h2" className="h">{t('hobi.h')}</Rise></div>
      <div className="hbGrid">
        <Fade className="hbMusic">
          <h3 className="h">{t('hobi.music')}</h3>
          <p className="hbNote">{H.playlist.note}</p>
          <p className="hbArt">{H.playlist.artists.join(', ')}</p>
          <p className="hbInfo">{H.playlist.info}</p>
          <div className="hbBtns"><a className="btn sky sm" href={H.playlist.url} target="_blank" rel="noopener">{t('hobi.playlist')} <span className="arrow">↗</span></a></div>
          <p className="hbFav"><b>{t('hobi.fav')}:</b> {t('hobi.favV')}</p>
          <div className="hbBtns"><a className="btn soft sm" href={H.band.spotify} target="_blank" rel="noopener">Spotify <span className="arrow">↗</span></a><a className="btn soft sm" href={H.band.apple} target="_blank" rel="noopener">Apple Music <span className="arrow">↗</span></a></div>
        </Fade>
        <Fade className="hbText" delay={0.1}>
          <h3 className="h">{t('hobi.stars')}</h3><p>{H.bintang}</p>
          <h3 className="h">{t('hobi.sing')}</h3><p>{H.nyanyi}</p>
        </Fade>
        <div className="hbPhotos" aria-label={t('hobi.photo')}>
          <motion.img style={{ y: y1 }} className="p1" src={'/images/' + H.foto[0]} alt={t('hobi.photo') + ' 1'} loading="lazy" whileHover={{ rotate: 0, scale: 1.04 }} />
          <motion.img style={{ y: y2 }} className="p2" src={'/images/' + H.foto[1]} alt={t('hobi.photo') + ' 2'} loading="lazy" whileHover={{ rotate: 0, scale: 1.04 }} />
        </div>
      </div>
    </section>
  )
}
