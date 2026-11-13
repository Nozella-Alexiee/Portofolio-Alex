import React from "react";
import { Music, Disc3, Sparkles, ExternalLink, Moon } from "lucide-react";

export default function HobbiesSection() {
  const artists = ["Juice WRLD", "The Kid LAROI", "Post Malone", "Westlife"];

  return (
    <section id="hobi" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Music className="w-3.5 h-3.5" />
            <span>Di Luar Koding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Musik &amp; <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Langit Malam</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Musik yang menemani saat ngoding berjam-jam dan kegemaran mengamati langit malam.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Apple Music Playlist Card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <Disc3 className="w-4 h-4 animate-spin-slower text-blue-400" />
                  Apple Music Playlist
                </span>
                <span className="text-slate-400 font-mono">11 lagu · 32 menit</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Playlist yang Selalu Diputar Pas Nugas
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Koleksi lagu andalan yang menemani dari awal buka code editor sampai larut malam. Ritme yang pas bikin tetap fokus menyusun arsitektur dan memecahkan bug sulit.
              </p>

              {/* Artists Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {artists.map((artist, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Diputar di macOS Music</span>
              <a
                href="https://music.apple.com/id/playlist/bila-aku-tahu/pl.u-NpXm9m4u4m4a9xG"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold hover:scale-105 transition-transform shadow"
              >
                <span>Buka di Apple Music</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Westlife Favorite Song & Stargazing Card */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Westlife Song Tile */}
            <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">Lagu Andalan</span>
              
              <div className="flex items-center gap-4">
                <img
                  src="/images/if-i-let-you-go-cover.jpg"
                  alt="If I Let You Go - Westlife"
                  className="w-16 h-16 rounded-2xl object-cover border border-white/10 shadow-lg"
                />
                <div>
                  <h4 className="text-base font-bold text-white">If I Let You Go</h4>
                  <p className="text-xs text-cyan-400 font-semibold">Westlife (1999)</p>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">Pop Klasik Legendaris</p>
                </div>
              </div>
            </div>

            {/* Stargazing Photos Tile */}
            <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-cyan-400 flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5" />
                  Langit Malam Gresik
                </span>
                <span className="text-slate-400 text-[11px] font-mono">Bintang &amp; Refleksi</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Melihat langit malam waktu istirahat ngoding bikin pikiran segar kembali dan mengingatkan betapa luasnya semesta.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                  <img src="/images/hobi-foto-1.jpg" alt="Langit malam 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                  <img src="/images/hobi-foto-2.jpg" alt="Langit malam 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
