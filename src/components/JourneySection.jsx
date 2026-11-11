import React from 'react';
import { Milestone, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function JourneySection() {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section id="perjalanan" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Rekam Jejak</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan &amp; Milestone
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Dari rasa penasaran pertama terhadap pasar modal hingga dipercaya membangun sistem skala produksi.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-blue-900/60 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {journey.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Dot marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080d19] border-2 border-blue-500 group-hover:border-cyan-400 transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300"></div>
              </div>

              {/* Content Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/60 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-300">
                    {step.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Fase {idx + 1} of {journey.length}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
