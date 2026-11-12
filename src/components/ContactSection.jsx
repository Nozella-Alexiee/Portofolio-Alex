import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const { contact } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="pt-4 pb-8">
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-white">Mari Terhubung</h2>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            {contact.note} Mau diskusi seputar project web, kolaborasi, atau sekadar ngobrol soal finance dan teknologi, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="inline-flex items-center gap-2 p-1.5 pl-3 rounded-lg bg-slate-950 border border-slate-800">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs sm:text-sm text-slate-200">{contact.email}</span>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin'}</span>
            </button>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            <span>Buka Mail Client</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
          <span className="font-mono">Media Sosial:</span>
          {contact.links?.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-blue-500"
            >
              <span>{link.name || link.label}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
