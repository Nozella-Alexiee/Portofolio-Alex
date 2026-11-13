import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-8 relative z-10 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-300">Alex</span> · Ahmad Zulfikri Alexander Disyin · XII RPL SMK SIG
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors font-medium"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
