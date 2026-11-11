import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentShotIndex, setCurrentShotIndex] = useState(0);

  useEffect(() => {
    setCurrentShotIndex(0);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project]);

  if (!project) return null;

  const currentShot = project.shots[currentShotIndex];

  const handleNext = () => {
    setCurrentShotIndex((prev) => (prev + 1) % project.shots.length);
  };

  const handlePrev = () => {
    setCurrentShotIndex((prev) => (prev - 1 + project.shots.length) % project.shots.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0b1220] border border-blue-800/50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-[#0e1628]/90">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400">
              {project.code}
            </span>
            <div>
              <h3 className="font-bold text-white text-base leading-tight">{project.name}</h3>
              <p className="text-xs text-slate-400">{project.category} · {project.badge}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative bg-[#070b14] flex-1 min-h-[250px] sm:min-h-[380px] max-h-[500px] flex items-center justify-center overflow-hidden p-2">
          {currentShot && (
            <img
              src={currentShot.src}
              alt={currentShot.title}
              className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
            />
          )}

          {/* Navigation Controls */}
          {project.shots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 transition-colors"
                aria-label="Screenshot sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 transition-colors"
                aria-label="Screenshot berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Caption Badge */}
          {currentShot && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 text-xs font-mono text-slate-200">
              {currentShot.title} ({currentShotIndex + 1} / {project.shots.length})
            </div>
          )}
        </div>

        {/* Thumbnail Selector & Details */}
        <div className="p-4 sm:p-5 bg-[#0e1628] border-t border-slate-800/80 space-y-4 overflow-y-auto">
          
          {/* Thumbnail Bar */}
          {project.shots.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {project.shots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentShotIndex(idx)}
                  className={`h-12 w-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    currentShotIndex === idx ? 'border-blue-500 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={shot.src} alt={shot.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            {project.description}
          </p>

          {/* Tech Stack Chips & Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#111c34] border border-blue-900/40 text-blue-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {project.links && project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    link.isPrimary
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
