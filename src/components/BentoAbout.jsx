import React from 'react';
import { BookOpen, Laptop, LineChart, Code, Sparkles, Terminal, Cpu, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BentoAbout() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="tentang" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mengenal Alex</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Antara Kode Rapi &amp; Pola Finansial.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Bagaimana ketertarikan pada pasar modal sejak SMP bertemu dengan dunia rekayasa perangkat lunak di SMK SIG.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Main Story Card (8 cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0c1322] border border-blue-900/40 relative overflow-hidden group hover:border-blue-700/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-2.5 text-blue-400 text-xs font-mono mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Cerita Singkat</span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profile.about.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "font-normal" : "text-slate-400 font-light"}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                SMK SIG Gresik
              </span>
              <span>•</span>
              <span>XII Rekayasa Perangkat Lunak</span>
              <span>•</span>
              <span className="text-slate-300">Portofolio 2026</span>
            </div>
          </div>

          {/* Development Environment & Specs Card (4 cols) */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 flex flex-col justify-between group hover:border-blue-700/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-4">
                <Laptop className="w-4 h-4" />
                <span>Workstation &amp; Tools</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">
                Spesifikasi &amp; Alat Tempur
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#111a30]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Hardware</span>
                  <span className="text-slate-200 font-semibold">MacBook Air M1</span>
                </div>

                <div className="p-3 rounded-xl bg-[#111a30]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Sistem Operasi</span>
                  <span className="text-slate-200 font-semibold">macOS Sequoia</span>
                </div>

                <div className="p-3 rounded-xl bg-[#111a30]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Editor Utama</span>
                  <span className="text-slate-200 font-semibold">VS Code &amp; Alexel</span>
                </div>

                <div className="p-3 rounded-xl bg-[#111a30]/80 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Database Client</span>
                  <span className="text-slate-200 font-semibold">DBeaver &amp; TablePlus</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Shell: Zsh · Git Version Control</span>
            </div>
          </div>

          {/* Core Mindset Card (6 cols) */}
          <div className="md:col-span-6 p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all duration-300">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-3">
              <Code className="w-4 h-4" />
              <span>Pendekatan Rekayasa</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Kualitas Kode &amp; Pengalaman Pengguna
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Membangun aplikasi bukan sekadar membuat fitur berjalan, melainkan memastikan sistem beroperasi stabil, struktur data normal, antarmuka responsif tanpa animasi berlebihan, dan arsitektur kode mudah dirawat.
            </p>
          </div>

          {/* Finance Mindset Card (6 cols) */}
          <div className="md:col-span-6 p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all duration-300">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-3">
              <LineChart className="w-4 h-4" />
              <span>Pendekatan Finansial</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Analisis Fundamental &amp; Pasar Modal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Memahami laporan keuangan, pergerakan valuasi, dan logika compounding. Latar belakang ini melatih ketelitian logika yang sangat berharga ketika mendesain sistem basis data dan alur data aplikasi.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
