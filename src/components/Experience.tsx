import React from 'react';
import { Briefcase, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Hands-On Industry Experience & Collaboration.
          </h2>
          <p className="text-base text-zinc-300">
            Real internship experience working directly on production web interfaces and development workflows.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-10 relative overflow-hidden backdrop-blur-md">
          {/* Subtle ambient highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 blur-[100px] pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span className="text-sky-300 font-semibold">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>On-site / Team Environment</span>
              </div>
            </div>
          </div>

          {/* Overview summary */}
          <div className="py-6">
            <p className="text-base text-zinc-200 leading-relaxed max-w-4xl">
              {exp.summary}
            </p>
          </div>

          {/* Key Responsibilities Grid */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Core Responsibilities & Technical Contributions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used Strip */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 mr-2">Technologies:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
