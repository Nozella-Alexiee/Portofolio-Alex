import React, { useState, useEffect } from "react";
import { Sparkles, ArrowDown, Copy, Check, TrendingUp } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

const ROTATING_PHRASES = [
  "Siswa XII RPL di SMK Semen Gresik",
  "Membangun oneSIG, SIGChat, & SIGlearning",
  "Kreator Alexel Studio — AI Code Editor",
  "Mendalami Analisa Fundamental Pasar Modal BEI",
];

const TECH_PILLS = [
  "React",
  "TypeScript",
  "FastAPI",
  "PHP & Laravel",
  "PostgreSQL",
  "Docker",
  "Electron",
  "Pasar Modal BEI",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROTATING_PHRASES[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayedText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("nongzel52@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="min-h-[680px] lg:min-h-[760px] pt-32 pb-16 flex flex-col items-center justify-center text-center relative z-10">
      <div className="max-w-4xl mx-auto space-y-7 px-4">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>XII RPL · SMK Semen Gresik · Terbuka Kolaborasi</span>
        </div>

        {/* Main Title - Big, Centered, Deep Blue / Cyan Gradient */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400">
            Portfolio &amp; Personal Website
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none">
            Ahmad Zulfikri
            <span className="block mt-1 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(59,130,246,0.5)]">
              Alexander
            </span>
          </h1>
        </div>

        {/* Typewriter Rotating Subtitle */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-lg sm:text-2xl font-medium text-slate-200">
            {displayedText}
            <span className="inline-block w-[3px] h-5 sm:h-6 bg-cyan-400 ml-1.5 animate-blink align-middle" />
          </p>
        </div>

        {/* Bio Lead */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Siswa XII RPL di SMK SIG yang fokus merancang arsitektur sistem web skala riil, aplikasi desktop AI tooling, dan mendalami logika analisis fundamental pasar modal.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Primary Button */}
          <button
            onClick={() => scrollTo("proyek")}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Eksplor 7 Proyek</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary Button - Finance Sim */}
          <button
            onClick={() => scrollTo("simulasi")}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-slate-200 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Simulasi Bunga Majemuk</span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 text-sm font-medium backdrop-blur-md transition-all"
            title="Salin email nongzel52@gmail.com"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? "Email Tersalin!" : "Salin Email"}</span>
          </button>
        </div>

        {/* Social Link Tiles */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href="https://github.com/Nozella-Alexiee"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/ale.xiee._"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nozella-alexander-b5044a413"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {TECH_PILLS.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-blue-400/40 hover:text-cyan-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
