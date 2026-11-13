import React, { useState, useEffect } from "react";
import { Mail, Copy, Check, ArrowUpRight, Download, Clock } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("nongzel52@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="kontak" className="py-20 pb-28 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Main Glass Contact Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 hover:bg-white/[0.07] backdrop-blur-2xl border border-white/10 hover:border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.15)] transition-all duration-500 space-y-8 text-center sm:text-left relative overflow-hidden">
          
          {/* Subtle Ambient Glow inside */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Terbuka Untuk Kesempatan &amp; Diskusi</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Mari Terhubung &amp; <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Berkolaborasi</span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
              Punya ide proyek, tawaran magang/kerja, atau sekadar ingin berdiskusi santai seputar software engineering dan analisa pasar modal? Jangan ragu untuk menyapa.
            </p>
          </div>

          {/* Direct Email Action Capsule */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto inline-flex items-center justify-between gap-3 p-2 pl-4 rounded-2xl bg-black/50 border border-blue-500/30 shadow-inner">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs sm:text-sm text-white font-semibold">nongzel52@gmail.com</span>
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow hover:scale-105 active:scale-95 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Tersalin!" : "Salin"}</span>
              </button>
            </div>

            <a
              href="mailto:nongzel52@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-slate-200 text-xs font-bold transition-all shadow"
            >
              <span>Buka Mail Client</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* CV Downloads + Live Time + Socials */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            
            {/* CV Download Buttons */}
            <div className="flex items-center gap-2.5">
              <span className="text-slate-400 font-mono">Unduh CV:</span>
              <a
                href="/cv/CV-Alexander-ID.pdf"
                download
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-cyan-300 font-semibold transition-colors"
              >
                <Download className="w-3 h-3 text-cyan-400" />
                <span>Versi ID</span>
              </a>
              <a
                href="/cv/CV-Alexander-EN.pdf"
                download
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-cyan-300 font-semibold transition-colors"
              >
                <Download className="w-3 h-3 text-cyan-400" />
                <span>Versi EN</span>
              </a>
            </div>

            {/* Live Clock + Location */}
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Gresik, Jawa Timur</span>
              <span>·</span>
              <span className="text-white font-bold">{time || "--:--:--"} WIB</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Nozella-Alexiee"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ale.xiee._"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nozella-alexander-b5044a413"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
