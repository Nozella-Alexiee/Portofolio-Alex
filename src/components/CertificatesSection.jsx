import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function CertificatesSection() {
  const { certificates } = PORTFOLIO_DATA;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="sertifikat" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Sertifikat</h2>
          <p className="text-slate-400 text-sm mt-1">Sertifikasi pasar modal, pelatihan kecerdasan buatan, dan magang industri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium shadow">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Asli</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <div className="text-[11px] font-mono text-blue-400">{cert.category}</div>
                  <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                  <p className="text-xs text-slate-300">{cert.issuer}</p>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-slate-800/60 flex justify-between text-[11px] font-mono text-slate-400">
                <span>{cert.date}</span>
                <span>{cert.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={activeCert.image} alt={activeCert.title} className="w-full rounded-lg" />
            <div className="pt-3 px-1 text-sm font-medium text-white flex justify-between items-center">
              <span>{activeCert.title} — {activeCert.issuer}</span>
              <span className="text-xs text-slate-400 font-mono">{activeCert.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
