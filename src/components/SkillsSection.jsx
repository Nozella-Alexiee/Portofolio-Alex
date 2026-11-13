import React from "react";
import { Cpu, Layout, Server, Database, TrendingUp, Wrench, CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: Layout,
      skills: ["React 19 & Vite", "TypeScript", "Tailwind CSS", "CodeMirror 6", "PWA"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend & API",
      icon: Server,
      skills: ["FastAPI (Python)", "PHP 8.1 & Laravel", "Node.js & Express", "WebSocket", "RESTful API"],
      color: "from-blue-600 to-indigo-500",
    },
    {
      title: "Basis Data & Query",
      icon: Database,
      skills: ["PostgreSQL", "MariaDB / MySQL", "SQLite", "Redis", "Relational Modeling"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Finance & Pasar Modal",
      icon: TrendingUp,
      skills: ["Pasar Modal BEI (IDX)", "Analisa Laporan Keuangan", "Kalkulasi Bunga Majemuk", "Manajemen Risiko"],
      color: "from-sky-400 to-blue-600",
    },
    {
      title: "Alat & Ekosistem Kerja",
      icon: Wrench,
      skills: ["MacBook Air M1 (macOS)", "VS Code & Alexel", "Docker", "Git & GitHub", "Terminal Zsh"],
      color: "from-indigo-500 to-cyan-400",
    },
  ];

  return (
    <section id="keahlian" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tech Stack &amp; <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Kemampuan</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Teknologi dan instrumen yang digunakan aktif dalam membangun proyek riil dan analisis data.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-sans">{cat.title}</h3>
                </div>

                <div className="space-y-2 pt-1">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
