import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, FolderGit2, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek (7)' },
    { id: 'open', label: 'Open Source & AI' },
    { id: 'sig', label: 'Ekosistem oneSIG' },
    { id: 'sekolah', label: 'Produksi & Sekolah' },
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
    <section id="proyek" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Showcase Karya</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyek Unggulan
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Dari editor kode AI desktop, sistem informasi sekolah terintegrasi, hingga aplikasi absensi aktif di rumah sakit.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-[#0e1628] text-slate-400 hover:text-slate-200 border border-blue-900/30 hover:border-blue-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {filteredProjects.map((project) => {
            const mainShot = project.shots[0];
            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#0c1322] border border-blue-900/40 hover:border-blue-700/60 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-blue-950/40"
              >
                {/* Image Preview Area */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full bg-[#080d19] overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={mainShot?.src}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#0b1120]/90 backdrop-blur-md border border-blue-800/60 text-blue-300 shadow">
                      {project.code}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-950/90 backdrop-blur-md border border-blue-700/60 text-blue-200">
                      {project.badge}
                    </span>
                  </div>

                  {/* View Details hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/50">
                      <Eye className="w-4 h-4" />
                      <span>Lihat {project.shots.length} Screenshot &amp; Detail</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-blue-300/90 leading-snug">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-1 pt-1">
                        {project.highlights.slice(0, 2).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Stack & Actions */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#111a30] border border-blue-900/40 text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detail &amp; Galeri ({project.shots.length})</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.links && project.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
                              link.isPrimary
                                ? 'bg-blue-600 hover:bg-blue-500 text-white font-semibold'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
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
