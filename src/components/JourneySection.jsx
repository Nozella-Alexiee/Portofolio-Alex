import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function JourneySection() {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section id="perjalanan" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Perjalanan</h2>
          <p className="text-slate-400 text-sm mt-1">Langkah demi langkah dari awal belajar sampai sekarang.</p>
        </div>

        <div className="relative border-l border-slate-800 ml-3 pl-6 space-y-6">
          {journey.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-blue-500" />

              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-400">{step.period}</span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
