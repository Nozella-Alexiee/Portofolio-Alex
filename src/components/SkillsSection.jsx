import React, { useState } from 'react';
import { Layout, Server, Database, TrendingUp, Wrench, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'backend', label: 'Backend & API', icon: Server },
    { id: 'database', label: 'Basis Data', icon: Database },
    { id: 'finance', label: 'Finance & Pasar Modal', icon: TrendingUp },
    { id: 'tools', label: 'Tools & Platform', icon: Wrench },
  ];

  const skillGroups = [
    {
      id: 'frontend',
      title: 'Frontend & UI Engineering',
      desc: 'Membangun antarmuka modern yang cepat, clean, dan responsif',
      icon: Layout,
      items: skills.frontend,
      accent: 'border-blue-500/40 text-blue-400'
    },
    {
      id: 'backend',
      title: 'Backend & Sistem Layanan',
      desc: 'Arsitektur API, autentikasi multi-role, dan integrasi websocket',
      icon: Server,
      items: skills.backend,
      accent: 'border-sky-500/40 text-sky-400'
    },
    {
      id: 'database',
      title: 'Basis Data & Pemodelan',
      desc: 'Desain relasi tabel, efisiensi query, dan integritas data',
      icon: Database,
      items: skills.database,
      accent: 'border-cyan-500/40 text-cyan-400'
    },
    {
      id: 'finance',
      title: 'Finance & Pasar Modal',
      desc: 'Literasi pasar modal BEI, pembacaan laporan keuangan & kalkulasi',
      icon: TrendingUp,
      items: skills.finance,
      accent: 'border-blue-400/40 text-blue-300'
    },
    {
      id: 'tools',
      title: 'Tools & Lingkungan Kerja',
      desc: 'Perangkat keras dan toolset produktivitas harian',
      icon: Wrench,
      items: skills.tools,
      accent: 'border-slate-500/40 text-slate-300'
    }
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="keahlian" className="py-16 md:py-24 border-t border-slate-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
              <span>Stack &amp; Kemampuan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Keahlian Teknis &amp; Finansial
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Daftar teknologi dan keahlian yang aku gunakan dalam proyek riil, riset mandiri, dan studi kejuruan.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-[#0e1628] text-slate-400 hover:text-slate-200 border border-blue-900/30 hover:border-blue-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="p-6 rounded-2xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-blue-950/70 border ${group.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{group.title}</h3>
                      <p className="text-[11px] text-slate-400 font-mono">{group.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mt-4 pt-4 border-t border-slate-800/80">
                    {group.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#111a30]/60 border border-slate-800/80 hover:border-blue-800/60 transition-colors"
                      >
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-950/80 border border-blue-800/50 text-blue-300">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Diuji dalam proyek aktif</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
