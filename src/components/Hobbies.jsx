import { useUI } from '../ui'
import SectionHead from './SectionHead'
import { Reveal } from './Reveal'
import LiquidGlass from './LiquidGlass'
import { ArrowUpRight, Play } from './Icons'

export default function Hobbies() {
  const { content } = useUI()
  const hobbies = content.hobbies
  const { music, band, stars, photo, sing } = hobbies

  return (
    <section id="hobi" className="sec wrap" aria-labelledby="hobi-title">
      <SectionHead
        id="hobi"
        title={content.nav.hobi}
        aside={<p className="hbLede">{hobbies.lead}</p>}
      />

      <div className="hbGrid">
        <Reveal className="hbMusicWrap">
          <LiquidGlass className="hbMusic" radius={30} blur={14} saturation={170} strength={32} band={34} tint="var(--glass-tint)">
            <h3 className="h hbMusicTitle">{hobbies.musicTitle}</h3>
            <p className="hbNote">{music.note}</p>
            <p className="hbArt">{music.artists.join(' · ')}</p>
            <p className="hbInfo">{music.info}</p>
            <a className="btn sky sm" href={music.url} target="_blank" rel="noreferrer">
              <Play size={14} /> {hobbies.playlist}
            </a>

            <div className="hbBand">
              <span className="mono">{hobbies.bandTitle}</span>
              <b>{band.name}</b>
              <span className="hbBandSong">{band.song}</span>
              <span className="hbBandLinks">
                <a href={band.spotify} target="_blank" rel="noreferrer">Spotify <ArrowUpRight size={12} /></a>
                <a href={band.apple} target="_blank" rel="noreferrer">Apple Music <ArrowUpRight size={12} /></a>
              </span>
            </div>
          </LiquidGlass>
        </Reveal>

        <div className="hbText">
          <Reveal>
            <h3 className="h">{hobbies.starsTitle}</h3>
            <p>{stars.note}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="h">{hobbies.singTitle}</h3>
            <p>{sing.note}</p>
          </Reveal>
        </div>

        <div className="hbPhotos">
          <div className="hbPhoto hbPhotoOne">
            <Reveal className="hbPhotoInner" delay={0.04}>
              <img src={`/images/${stars.photo}`} alt={hobbies.photoAlt} loading="lazy" decoding="async" />
            </Reveal>
          </div>
          <div className="hbPhoto hbPhotoTwo">
            <Reveal className="hbPhotoInner" delay={0.12}>
              <img src={`/images/${photo.photo}`} alt={hobbies.photoAlt} loading="lazy" decoding="async" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
