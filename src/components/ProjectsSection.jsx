import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua (7)' },
    { id: 'open', label: 'AI & Open Source' },
    { id: 'sig', label: 'Ekosistem oneSIG' },
    { id: 'sekolah', label: 'Produksi Nyata' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => {
        if (activeCategory === 'open') return p.id === 'alexel' || p.id === 'orvella';
        if (activeCategory === 'sig') return p.id === 'onesig' || p.id === 'sigchat' || p.id === 'siglearning';
        if (activeCategory === 'sekolah') return p.id === 'epilketos' || p.id === 'absensi';
        return true;
      });

  return (
    <section id="proyek" className="pt-4">
      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Proyek Pilihan</h2>
            <p className="text-slate-400 text-sm mt-1">
              Editor kode AI desktop, sistem sekolah terintegrasi, hingga sistem absensi rumah sakit.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-slate-900/60 border border-slate-800 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const mainShot = project.shots[0];
            return (
              <div
                key={project.id}
                className="group rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-all flex flex-col overflow-hidden"
              >
                {/* Image Preview */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={mainShot?.src}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-slate-200 backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium shadow">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Buka Galeri ({project.shots.length})</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-blue-400 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack & Links */}
                  <div className="pt-3 border-t border-slate-800/60 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-slate-400 hover:text-white font-medium flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-400" />
                        <span>Detail &amp; Screenshot</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.links && project.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
