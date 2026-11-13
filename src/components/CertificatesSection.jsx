import React, { useState } from "react";
import { Award, Eye, X, Calendar, MapPin } from "lucide-react";

export const CERTIFICATES = [
  {
    id: "idx",
    title: "Sekolah Pasar Modal (Level 1 & 2)",
    issuer: "PT Bursa Efek Indonesia (IDX)",
    date: "18 Mei 2024",
    location: "Surabaya, Jawa Timur",
    badge: "Pasar Modal Resmi",
    image: "/images/sertifikat-pasar-modal.jpg",
    desc: "Menyelesaikan pelatihan resmi Sekolah Pasar Modal mengenai struktur bursa efek, analisa fundamental rasio keuangan, evaluasi emiten, dan mekanika perdagangan saham di Bursa Efek Indonesia.",
  },
  {
    id: "ai-asean",
    title: "AI Ready ASEAN - Certificate of Completion",
    issuer: "The ASEAN Foundation & Microsoft",
    date: "2024",
    location: "ASEAN Regional",
    badge: "Artificial Intelligence",
    image: "/images/sertifikat-ai-cert.jpg",
    desc: "Sertifikasi kompetensi fundamental kecerdasan buatan, etika penerapan model AI, dan implementasi teknologi machine learning dari The ASEAN Foundation bekerja sama dengan Microsoft.",
  },
  {
    id: "pkl",
    title: "Praktik Kerja Lapangan (PKL) Rekayasa Perangkat Lunak",
    issuer: "PT Cipta Nirmala (RS Semen Gresik)",
    date: "2024",
    location: "Gresik, Jawa Timur",
    badge: "Industri Nyata",
    image: "/images/sertifikat-pkl.jpg",
    desc: "Sertifikat penyelesaian magang industri resmi dalam merancang dan mengembangkan sistem absensi presensi pegawai berbasis web di lingkungan rumah sakit PT Cipta Nirmala.",
  },
];

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="sertifikat" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Kredensial &amp; Lisensi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sertifikasi <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Resmi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Sertifikasi resmi di bidang pasar modal IDX, kecerdasan buatan, dan magang industri perangkat lunak.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Thumbnail Image */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-transparent to-transparent opacity-70" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white border border-blue-400/30">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Dokumen Asli</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3">
                    {cert.desc}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="p-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {cert.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {cert.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#030014] border border-blue-500/40 rounded-3xl overflow-hidden p-4 sm:p-6 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-blue-600 transition-colors z-10"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden rounded-2xl bg-black">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs gap-1 pt-1">
              <span className="font-bold text-white text-sm">{activeCert.title} — {activeCert.issuer}</span>
              <span className="text-cyan-400 font-mono">{activeCert.date} · {activeCert.location}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
