import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] py-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold tracking-tight text-white">
                {PORTFOLIO_DATA.personal.brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
          </div>

          {/* Navigation & Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            <span>© 2026 Laraib Mukhtar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-sky-400 fill-sky-400" />
              <span>using React & TypeScript</span>
            </span>

            <button
              onClick={onBackToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
