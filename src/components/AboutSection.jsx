import React from "react";
import { User, Award, Code2, LineChart, Laptop, Terminal, Database } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Code2,
      value: "7+",
      label: "Proyek Skala Riil",
      desc: "Ekosistem SIG, Alexel Studio, Orvella, dll.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Award,
      value: "3",
      label: "Sertifikasi Resmi",
      desc: "IDX Pasar Modal, AI ASEAN, PKL Industri.",
      color: "from-blue-500 to-sky-400",
    },
    {
      icon: User,
      value: "XII",
      label: "RPL SMK Semen Gresik",
      desc: "Fokus arsitektur web & backend terpadu.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: LineChart,
      value: "BEI",
      label: "Pasar Modal & Finance",
      desc: "Alumni Sekolah Pasar Modal resmi PT Bursa Efek Indonesia.",
      color: "from-sky-400 to-blue-500",
    },
  ];

  return (
    <section id="tentang" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-12 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tentang <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Perjalanan memadukan dunia rekayasa perangkat lunak dan analisa fundamental pasar modal.
          </p>
        </div>

        {/* Profile + Stat Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Profile Photo with Fazri-style Glowing Rings */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Glowing Blur Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 rounded-full blur-2xl opacity-35 group-hover:opacity-60 transition duration-700 animate-pulse-slow" />
              
              {/* Inner Circle Photo Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 p-1.5 bg-[#030014]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <img
                  src="/images/profil.jpg"
                  alt="Ahmad Zulfikri Alexander"
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Status Badge Tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#030014]/90 backdrop-blur-xl border border-blue-500/40 text-[11px] font-bold text-cyan-300 whitespace-nowrap shadow-lg">
                Ahmad Zulfikri Alexander · Gresik
              </div>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="relative group p-5 rounded-2xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${s.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-white font-sans">{s.value}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Narrative Story Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
            <Terminal className="w-4 h-4" />
            <span>Cerita &amp; Visi</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Dari Awal Iseng Sampai Beneran Keterusan Ngoding.
          </h3>

          <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            <p>
              Halo, aku <strong className="text-white font-semibold">Alex</strong> — saat ini kelas XII RPL di <span className="text-cyan-400 font-medium">SMK Semen Gresik (SMK SIG)</span>. Waktu awal masuk jurusan RPL, sejujurnya belum seberapa niat. Tapi semakin sering berhadapan langsung dengan logika coding, arsitektur backend, dan problem solving—ternyata malah keterusan dan jatuh cinta sampai sekarang.
            </p>
            <p>
              Di luar ngoding, ketertarikanku ke dunia finance sebenarnya udah dimulai sejak bangku SMP karena penasaran cara mengelola uang secara mandiri dan membaca pola pasar modal, hingga akhirnya menyelesaikan program Sekolah Pasar Modal resmi dari PT Bursa Efek Indonesia (IDX) di Surabaya.
            </p>
            <p>
              Dua hal ini sekilas berlawanan, tapi bagiku saling melengkapi: keduanya sama-sama soal membaca data, menyusun logika yang presisi, dan membangun sistem yang rapi serta dapat diandalkan.
            </p>
          </div>

          {/* Workstation Specification Pills */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-0.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Perangkat</span>
              <p className="font-semibold text-slate-200">MacBook Air M1</p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-0.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Sistem Operasi</span>
              <p className="font-semibold text-slate-200">macOS</p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-0.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Editor Kode</span>
              <p className="font-semibold text-slate-200">VS Code &amp; Alexel</p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-0.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Database Tool</span>
              <p className="font-semibold text-slate-200">DBeaver &amp; Terminal</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
