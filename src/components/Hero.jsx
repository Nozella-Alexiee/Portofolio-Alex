import React, { useState } from 'react';
import { ArrowDown, Github, Instagram, Linkedin, Mail, Copy, Check, Sparkles, Code2, TrendingUp, Layers, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { profile, quickStats } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[250px] bg-sky-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 shadow-sm shadow-blue-900/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-blue-200">
                XII RPL · SMK SIG · Terbuka Kolaborasi
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-slate-400 text-sm md:text-base font-mono font-medium tracking-wide">
                Halo, saya <span className="text-blue-400 font-semibold">{profile.name}</span>
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Merakit web modern <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                  &amp; membaca data finansial.
                </span>
              </h1>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-normal">
              Siswa kelas XII RPL di <span className="text-white font-medium">SMK SIG</span> yang fokus merancang sistem web skala nyata, desktop tool cerdas, serta mendalami analisis laporan keuangan dan pasar modal.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto pt-1">
              <a
                href="#proyek"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/50"
              >
                <span>Eksplor 7 Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0e1628] hover:bg-[#15223c] border border-blue-900/50 text-slate-200 hover:text-white font-medium text-sm transition-all hover:border-blue-700/60"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blue-400" />}
                <span className="font-mono text-xs">{copied ? "Email Tersalin!" : "Salin Email"}</span>
              </button>

              <a
                href="#simulasi"
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/40 text-blue-300 hover:text-blue-100 font-medium text-sm transition-all"
              >
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Simulasi Bunga Majemuk</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs font-mono text-slate-400">Temukan saya:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Nozella-Alexiee"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/ale.xiee._"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-600 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nozella-alexander-b5044a413"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Bento Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-3xl bg-[#0c1322] border border-blue-900/50 p-6 shadow-2xl flex flex-col space-y-5">
                
                {/* Photo & Quick Info Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      onError={(e) => { e.target.src = profile.avatarAlt; }}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/40 shadow-md shadow-blue-900/40"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-[#0c1322] flex items-center justify-center text-[10px] text-white font-bold" title="Verified Dev">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white tracking-tight">
                      {profile.nick} <span className="text-xs text-blue-400 font-mono font-normal">({profile.kelas})</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">{profile.school}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      {profile.minat}
                    </p>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-[#111a30]/80 border border-blue-900/40">
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <Code2 className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Web Dev</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">React, Laravel, TS, Fast & Clean UX</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#111a30]/80 border border-blue-900/40">
                    <div className="flex items-center gap-2 text-sky-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Finance</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Pasar Modal, Laporan Keuangan, IDX</p>
                  </div>
                </div>

                {/* Production Highlight snippet */}
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-blue-200">Aplikasi Produksi Nyata</p>
                    <p className="text-slate-300 mt-0.5 leading-snug">
                      Sistem Absensi aktif dipakai di <strong className="text-white">RS Semen Gresik</strong> & ekosistem sekolah <strong className="text-white">oneSIG</strong>.
                    </p>
                  </div>
                </div>

                {/* Hardware & Tools strip */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>💻 Macbook Air M1 (macOS)</span>
                  <span className="text-blue-400">Gresik, ID</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {quickStats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0c1322]/80 border border-blue-900/30 hover:border-blue-700/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                {item.value}
              </div>
              <div className="text-xs font-medium text-slate-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
