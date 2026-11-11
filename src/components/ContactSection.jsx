import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Instagram, Linkedin, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const { contact } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    // Format mailto link to open client mail
    const subject = encodeURIComponent(`Halo Alex - Pesan dari ${formData.name}`);
    const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Terhubung &amp; Kolaborasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Membangun Sesuatu yang Berarti
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {contact.note}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Email Resmi
              </span>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#111a30]/80 border border-slate-800">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {contact.email}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 font-light">
                Respons biasanya dalam 1x24 jam untuk proyek baru atau obrolan santai.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-3xl bg-[#0c1322] border border-blue-900/40 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Jejaring Sosial
              </span>

              {contact.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#111a30]/60 hover:bg-[#16223e] border border-slate-800/80 hover:border-blue-700/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    {link.name === 'GitHub' && <Github className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />}
                    {link.name === 'Instagram' && <Instagram className="w-4 h-4 text-slate-300 group-hover:text-pink-400" />}
                    {link.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-sky-400" />}
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {link.username}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

          </div>

          {/* Right: Quick Direct Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0c1322] border border-blue-900/40">
            <h3 className="text-lg font-bold text-white mb-1">
              Kirim Pesan Cepat
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Isi form berikut untuk langsung membuka aplikasi email Anda dengan format pesan rapi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111a30] border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Anda
                  </label>
                  <input
                    type="email"
                    placeholder="email@anda.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111a30] border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Isi Pesan / Rencana Proyek *
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Ceritakan tentang proyek web atau topik finance yang ingin didiskusikan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111a30] border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/50"
              >
                <Send className="w-4 h-4" />
                <span>{sent ? "Membuka Email..." : "Kirimkan ke nongzel52@gmail.com"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
