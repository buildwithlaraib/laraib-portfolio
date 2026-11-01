import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreWorkClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting - subtle electric blue glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle background tech grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small status label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {PORTFOLIO_DATA.personal.availability}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl text-balance">
              Building Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-400">
                Make an Impact.
              </span>
            </h1>

            {/* Lead Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-xl">
              {PORTFOLIO_DATA.personal.leadBio}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onContactClick}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 active:scale-[0.98] transition-all duration-200 rounded-lg shadow-lg shadow-sky-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorkClick}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">
                Connect
              </span>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-sky-400 transition-colors"
                aria-label="Laraib Mukhtar GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-sky-400 transition-colors"
                aria-label="Laraib Mukhtar LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-sky-400 transition-colors"
                aria-label="Send email to Laraib Mukhtar"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container & Developer Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm group">
              {/* Corner accent glow */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-sky-500/20 blur-xl rounded-full pointer-events-none" />

              {/* Portrait Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                <img
                  src={PORTFOLIO_DATA.personal.portraitImage}
                  alt="Laraib Mukhtar — Frontend Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_22%] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG card if image fails
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Styled CSS/SVG Fallback */}
                <div
                  className="hidden w-full h-full flex-col items-center justify-center p-8 bg-gradient-to-br from-zinc-900 to-black text-center"
                  aria-hidden="true"
                >
                  <div className="w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
                    <Code2 className="w-10 h-10 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Laraib Mukhtar</h3>
                  <p className="text-xs text-sky-400 font-mono">Frontend Developer</p>
                </div>

                {/* Subtle overlay gradient at the bottom of portrait */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-sm font-semibold text-white">Laraib Mukhtar</p>
                      <p className="text-xs text-sky-400 font-mono">Frontend Developer</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>Build With Laraib</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0d1117]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">React & TypeScript</p>
                  <p className="text-[11px] text-zinc-400 font-mono">Production Ready UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Feature/Proof Strip Below the Split */}
        <div className="mt-20 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs font-mono text-sky-400 mb-1">Architecture</p>
            <h4 className="text-sm sm:text-base font-semibold text-white">Component-Driven</h4>
            <p className="text-xs text-zinc-400 mt-1">Modular & reusable React patterns</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs font-mono text-sky-400 mb-1">Responsiveness</p>
            <h4 className="text-sm sm:text-base font-semibold text-white">Multi-Device Fluid</h4>
            <p className="text-xs text-zinc-400 mt-1">Mobile, tablet & desktop fidelity</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs font-mono text-sky-400 mb-1">Code Quality</p>
            <h4 className="text-sm sm:text-base font-semibold text-white">Clean & Structured</h4>
            <p className="text-xs text-zinc-400 mt-1">Semantic, typed, and maintainable</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs font-mono text-sky-400 mb-1">Design Fidelity</p>
            <h4 className="text-sm sm:text-base font-semibold text-white">Pixel-Accurate</h4>
            <p className="text-xs text-zinc-400 mt-1">Faithful to UI/UX prototypes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
