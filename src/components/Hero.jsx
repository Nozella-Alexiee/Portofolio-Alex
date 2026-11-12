import React, { useState } from 'react';
import { ArrowDown, Github, Instagram, Linkedin, Mail, Copy, Check, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>XII RPL · SMK Semen Gresik</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Siswa RPL yang ngoding web sekaligus mendalami pasar modal.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            Halo, gue <span className="text-white font-semibold">{profile.name}</span> (biasa dipanggil {profile.nick}). Fokus bikin sistem web fungsional skala nyata, desktop tool, dan punya minat mendalam di analisa laporan keuangan.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <span>Eksplor 7 Proyek</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#simulasi"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Simulasi Bunga</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 text-sm font-mono transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Email Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60 text-slate-400 text-sm">
            <span className="font-mono text-xs">Tautan:</span>
            <a
              href="https://github.com/Nozella-Alexiee"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/ale.xiee._"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nozella-alexander-b5044a413"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Gresik, Jawa Timur</span>
          </div>
        </div>

        {/* Right Column: Clean Profile Photo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 p-3 shadow-xl">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
              <img
                src="/images/profil.jpg"
                alt="Ahmad Zulfikri Alexander"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-400">
              <span className="font-medium text-slate-200">Ahmad Zulfikri Alexander</span>
              <span className="font-mono text-[11px] text-blue-400">SMK SIG RPL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
