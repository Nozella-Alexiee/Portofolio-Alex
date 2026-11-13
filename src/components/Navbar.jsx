import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const NAV_ITEMS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Simulasi", href: "#simulasi" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        <div
          className={`rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-[#030014]/85 backdrop-blur-xl border border-blue-500/25 shadow-[0_4px_30px_rgba(37,99,235,0.15)]"
              : "bg-[#030014]/60 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => scrollTo(e, "#top")}
            className="flex items-center gap-1.5 group font-bold tracking-tight text-white text-lg font-sans"
          >
            <span>alex</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_8px_#3b82f6]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-blue-600/30 text-cyan-300 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/Nozella-Alexiee"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#kontak"
              onClick={(e) => scrollTo(e, "#kontak")}
              className="relative group inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-white overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-sm opacity-50 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10">Hubungi</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#030014]/95 backdrop-blur-2xl border border-blue-500/30 shadow-2xl space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:bg-blue-600/20 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center">
              <a
                href="https://github.com/Nozella-Alexiee"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Alex</span>
              </a>
              <a
                href="#kontak"
                onClick={(e) => scrollTo(e, "#kontak")}
                className="text-xs font-bold text-cyan-400"
              >
                Hubungi Saya →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
