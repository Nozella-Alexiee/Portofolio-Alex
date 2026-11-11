import React from 'react';
import { Terminal, ArrowUp, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#050810] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white tracking-tight flex items-center gap-1">
              alex<span className="text-blue-500">.</span>dev
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-950/90 text-blue-400 border border-blue-800/50">
                mockup
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Ahmad Zulfikri Alexander Disyin · SMK SIG
            </p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-center font-mono text-[11px] text-slate-400">
          Dirancang minimalis, cepat, dan fokus pada substansi karya.
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628] hover:bg-[#16223d] border border-blue-900/40 text-slate-300 hover:text-white transition-colors"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
