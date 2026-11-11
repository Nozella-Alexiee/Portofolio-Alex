import React from 'react';
import { Headphones, Music, Stars, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function HobbiesSection() {
  const { hobbies } = PORTFOLIO_DATA;

  return (
    <section id="hobi" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Sisi Personal &amp; Inspirasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Musik &amp; Langit Malam
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Di luar baris kode dan grafik saham, hal-hal sederhana inilah yang menemani hari-hariku.
          </p>
        </div>

        {/* Bento Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Apple Music Playlist Card (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-7 rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                  <Headphones className="w-4 h-4" />
                  <span>Playlist Favorit</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-950/40 border border-rose-900/50 text-rose-300">
                  {hobbies.playlist.info}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {hobbies.playlist.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                {hobbies.playlist.description}
              </p>

              {/* Artists Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {hobbies.playlist.artists.map((artist, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#111c34] border border-blue-900/40 text-blue-200"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Tersedia di Apple Music</span>
              <a
                href={hobbies.playlist.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <span>Buka Playlist</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Westlife Favorite Song Card (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-4">
                <Music className="w-4 h-4" />
                <span>Lagu Pilihan</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={hobbies.favoriteSong.cover}
                  alt={hobbies.favoriteSong.title}
                  className="w-16 h-16 rounded-xl object-cover border border-blue-800/50 shadow"
                />
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">
                    {hobbies.favoriteSong.title}
                  </h4>
                  <p className="text-xs text-blue-400 font-mono mt-0.5">
                    {hobbies.favoriteSong.artist}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Radio Edit · Nostalgia 90s Pop
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                "Aku juga suka bernyanyi dan kerap melatih jangkauan nada tinggi di waktu luang!"
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={hobbies.favoriteSong.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 hover:bg-emerald-900/50 text-xs font-semibold transition-colors"
              >
                Spotify
              </a>
              <a
                href={hobbies.favoriteSong.appleUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 px-3 rounded-lg bg-blue-950/40 border border-blue-800/50 text-blue-300 hover:bg-blue-900/50 text-xs font-semibold transition-colors"
              >
                Apple Music
              </a>
            </div>
          </div>

          {/* Stargazing Photo Card (12 cols) */}
          <div className="md:col-span-12 p-6 sm:p-7 rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-3">
              <Stars className="w-4 h-4" />
              <span>Melihat Langit Malam</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Jeda di Bawah Bintang
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {hobbies.stargazing.text}
                </p>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  Foto jepretan sendiri saat malam hari.
                </div>
              </div>

              <div className="md:col-span-6 grid grid-cols-2 gap-3">
                {hobbies.stargazing.photos.map((photo, pIdx) => (
                  <div key={pIdx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-blue-900/40 group/photo">
                    <img
                      src={photo}
                      alt={`Foto langit ${pIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
