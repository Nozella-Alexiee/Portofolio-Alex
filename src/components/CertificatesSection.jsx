import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, MapPin, Eye, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function CertificatesSection() {
  const { certificates } = PORTFOLIO_DATA;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="sertifikat" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Kredensial &amp; Lisensi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sertifikasi Resmi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Sertifikasi di bidang pasar modal, kecerdasan buatan, dan praktik kerja industri software engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Certificate Thumbnail Header */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative aspect-[4/3] bg-[#070b14] overflow-hidden cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-70" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-950/90 border border-blue-700/60 text-blue-200 backdrop-blur-md">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Sertifikat Asli</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] font-mono text-blue-400">
                    {cert.category}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="p-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {cert.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {cert.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0c1322] border border-blue-800/50 rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white">{activeCert.title} — {activeCert.issuer}</h4>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 bg-[#070b14] max-h-[80vh] flex items-center justify-center overflow-auto">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[75vh] w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
