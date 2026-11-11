import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Copy, Check, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Simulasi Finansial', href: '#simulasi' },
    { label: 'Perjalanan', href: '#perjalanan' },
    { label: 'Sertifikat', href: '#sertifikat' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/85 backdrop-blur-md border-b border-blue-900/40 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold text-base transition-transform group-hover:scale-105 group-hover:border-blue-400">
            <Terminal className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1">
              alex<span className="text-blue-500">.</span>dev
            </span>
            <span className="text-[10px] text-slate-400 font-mono leading-none">XII RPL · SMK SIG</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b1222]/80 border border-blue-900/40 px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-blue-400 px-3 py-1.5 rounded-full hover:bg-blue-600/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Email Copy or Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 hover:bg-blue-900/60 hover:text-blue-200 transition-all"
            title="Salin alamat email Alex"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>nongzel52@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="#kontak"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/30 transition-all hover:shadow-blue-500/50"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-blue-900/40 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a101f]/95 backdrop-blur-xl border-b border-blue-900/50 px-4 py-4 mt-2 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-center gap-2 text-xs font-mono py-2 rounded-lg bg-blue-950/70 border border-blue-800/60 text-blue-300"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Email Tersalin!" : "nongzel52@gmail.com"}</span>
            </button>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 rounded-lg bg-blue-600 text-white"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
