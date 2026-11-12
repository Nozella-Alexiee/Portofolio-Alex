import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const groups = [
    { name: 'Frontend & UI', items: ['React / Vite', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'PWA'] },
    { name: 'Backend & API', items: ['PHP & Laravel', 'Node.js & Express', 'FastAPI (Python)', 'REST API', 'WebSocket'] },
    { name: 'Basis Data', items: ['PostgreSQL', 'MySQL / MariaDB', 'SQLite', 'Redis'] },
    { name: 'Finance & Analisis', items: ['Pasar Modal (IDX)', 'Analisa Lap. Keuangan', 'Kalkulasi Bunga Majemuk', 'Portofolio Saham'] },
    { name: 'Tools Sehari-hari', items: ['MacBook Air M1', 'VS Code', 'Git & GitHub', 'Docker', 'DBeaver', 'Terminal / Zsh'] },
  ];

  return (
    <section id="keahlian" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Keahlian &amp; Stack</h2>
          <p className="text-slate-400 text-sm mt-1">Teknologi dan instrumen yang biasa aku pakai sehari-hari.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-white">{group.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
