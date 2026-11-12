import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Simulasi', href: '#simulasi' },
    { label: 'Perjalanan', href: '#perjalanan' },
    { label: 'Sertifikat', href: '#sertifikat' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#080c16]/90 backdrop-blur-md border-b border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-bold text-base tracking-tight text-white">
            alex<span className="text-blue-500">.</span>
          </span>
          <span className="text-[11px] font-mono text-slate-400">SMK SIG</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Nozella-Alexiee"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="#kontak"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            Hubungi
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c16] border-b border-slate-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs font-medium py-2 rounded-lg bg-blue-600 text-white"
            >
              Hubungi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
