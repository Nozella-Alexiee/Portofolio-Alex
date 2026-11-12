import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function HobbiesSection() {
  const { hobbies } = PORTFOLIO_DATA;

  return (
    <section id="hobi" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Di Luar Koding</h2>
          <p className="text-slate-400 text-sm mt-1">Musik yang diputar pas nugas dan kegemaran mengamati langit malam.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Apple Music Playlist */}
          <div className="md:col-span-7 p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-blue-400">Apple Music</span>
                <span className="text-slate-400">{hobbies.playlist.info}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{hobbies.playlist.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{hobbies.playlist.description}</p>
              
              <div className="flex flex-wrap gap-1.5 pt-1">
                {hobbies.playlist.artists.map((artist, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300">
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex justify-end">
              <a
                href={hobbies.playlist.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <span>Buka di Apple Music</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Westlife Favorite Song */}
          <div className="md:col-span-5 p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-400">Lagu Andalan</span>
              <div className="flex items-center gap-3">
                <img
                  src={hobbies.favoriteSong.cover}
                  alt={hobbies.favoriteSong.title}
                  className="w-14 h-14 rounded-lg object-cover border border-slate-800"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">{hobbies.favoriteSong.title}</h4>
                  <p className="text-xs text-blue-400">{hobbies.favoriteSong.artist}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Westlife (1999)</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {hobbies.nightSky.quote}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {hobbies.nightSky.photos.map((foto, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-950">
                  <img src={foto} alt="Langit malam" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
