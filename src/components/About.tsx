import React, { useState } from 'react';
import { Sparkles, Terminal, CheckCircle2, HeartHandshake, BookOpen, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillarIcons = [
    <Terminal className="w-5 h-5 text-sky-400" key="dev" />,
    <ShieldCheck className="w-5 h-5 text-sky-400" key="clean" />,
    <LayoutTemplate className="w-5 h-5 text-sky-400" key="resp" />,
    <HeartHandshake className="w-5 h-5 text-sky-400" key="user" />,
    <BookOpen className="w-5 h-5 text-sky-400" key="learn" />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Passionate About Translating Ideas Into Living Code.
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            {PORTFOLIO_DATA.personal.extendedBio}
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Pillar List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
              Core Principles & Focus Areas
            </p>
            {PORTFOLIO_DATA.aboutPillars.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={pillar.title}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3.5 cursor-pointer border ${
                    isActive
                      ? 'bg-white/[0.06] border-sky-500/40 shadow-lg shadow-sky-500/5'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-1">
                    <span className={`text-xs font-mono ${isActive ? 'text-sky-400' : 'text-zinc-600'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md relative overflow-hidden">
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                    {pillarIcons[activePillarIndex]}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sky-400">Pillar 0{activePillarIndex + 1}</span>
                    <h4 className="text-lg font-bold text-white">
                      {PORTFOLIO_DATA.aboutPillars[activePillarIndex].title}
                    </h4>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-500 hidden sm:block">
                  Build With Laraib
                </div>
              </div>

              <p className="text-base text-zinc-200 leading-relaxed mb-8">
                {PORTFOLIO_DATA.aboutPillars[activePillarIndex].description}
              </p>

              {/* Developer Mindset Breakdown */}
              <div className="space-y-4 pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Developer Commitments
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Semantic Structure</p>
                      <p className="text-[11px] text-zinc-400">Accessible and crawlable DOM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Speed & Lightweight</p>
                      <p className="text-[11px] text-zinc-400">Optimized bundle and render cycles</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Design Consistency</p>
                      <p className="text-[11px] text-zinc-400">Strict adherence to design systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Version Control Rigor</p>
                      <p className="text-[11px] text-zinc-400">Git commit discipline & PR hygiene</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive quote footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>"Turning designs into high-performance digital experiences."</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">Laraib Mukhtar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
