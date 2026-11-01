import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ProjectPlaceholder } from './ProjectPlaceholder';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Web App' | 'Utility' | 'Landing Page'>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters: Array<'All' | 'Web App' | 'Utility' | 'Landing Page'> = [
    'All',
    'Web App',
    'Utility',
    'Landing Page',
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Real Work Crafted With Clean Code.
            </h2>
            <p className="text-base text-zinc-300">
              Interactive web applications, responsive websites, and tools built with a focus on modern user experience.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/5"
            >
              {/* Project Showcase Container: Clearly labeled placeholder frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-white/[0.08]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ProjectPlaceholder
                    title={project.title}
                    category={project.category}
                    demoUrl={project.demoUrl}
                  />
                )}

                {/* Overlay actions bar on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm p-4 z-20">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview</span>
                  </button>

                  {project.isAvailableOnline && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 shrink-0">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags with typographic separator */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-400 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <React.Fragment key={tag}>
                        <span className="text-sky-300/80">{tag}</span>
                        {tagIndex < project.tags.length - 1 && (
                          <span className="text-zinc-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {project.isAvailableOnline ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Details & Features →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
