import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 py-8 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-300">Alex</span> · Ahmad Zulfikri Alexander Disyin · XII RPL SMK SIG
        </div>

        <button
          onClick={scrollToTop}
          className="text-slate-400 hover:text-white transition-colors"
        >
          ↑ Kembali ke atas
        </button>
      </div>
    </footer>
  );
}
