import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Monitor, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectPlaceholder } from './ProjectPlaceholder';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [iframeError, setIframeError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e14] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c0e14]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 uppercase">{project.category}</span>
            <span className="text-zinc-600">·</span>
            <h3 id="project-modal-title" className="text-lg font-bold text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.isAvailableOnline && (
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/10 mr-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-sky-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                    activeTab === 'preview'
                      ? 'bg-sky-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Live Sandbox</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-6">
          {activeTab === 'overview' ? (
            <>
              {/* Image / Placeholder banner */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} interface showcase`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProjectPlaceholder
                    title={project.title}
                    category={project.category}
                    demoUrl={project.demoUrl}
                    isModal={true}
                  />
                )}
              </div>

              {/* Overview Prose */}
              <div>
                <h4 className="text-sm font-mono text-sky-400 uppercase tracking-wider mb-2">
                  Project Summary
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Technologies & Standards
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                  {project.tags.map((t, i) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Engineering & Architectural Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Embedded Live Interactive Sandbox Iframe */
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-2 border-b border-white/[0.06]">
                <span>Testing: {project.demoUrl}</span>
                <span className="text-sky-400">Interactive Preview</span>
              </div>

              <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-white/10 bg-black">
                {iframeError ? (
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <AlertCircle className="w-8 h-8 text-amber-400 mb-3" />
                    <p className="text-sm text-zinc-200 mb-2">
                      Live preview restricted by browser security policy.
                    </p>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-500 rounded-lg hover:bg-sky-400 transition-colors"
                    >
                      <span>Open Live Demo in New Window</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={project.demoUrl}
                    title={`${project.title} live preview`}
                    className="w-full h-full border-0 bg-white"
                    onError={() => setIframeError(true)}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#0c0e14]">
          <div className="text-xs font-mono text-zinc-500">
            Build With Laraib · 2026
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-lg transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.isAvailableOnline ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">
                Concept Project Showcase
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
