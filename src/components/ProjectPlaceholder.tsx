import React from 'react';
import { Laptop, Globe, Code2 } from 'lucide-react';

interface ProjectPlaceholderProps {
  title: string;
  category: string;
  demoUrl: string;
  isModal?: boolean;
}

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({
  title,
  category,
  demoUrl,
  isModal = false,
}) => {
  const displayUrl = demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div
      className={`w-full h-full bg-[#07090e] flex flex-col justify-between p-4 sm:p-6 relative select-none border border-white/[0.06] ${
        isModal ? 'rounded-xl min-h-[280px]' : ''
      }`}
    >
      {/* Subtle blueprint grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"
        aria-hidden="true"
      />

      {/* Browser mockup top chrome */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400 max-w-[200px] sm:max-w-xs truncate">
          <Globe className="w-3 h-3 text-sky-400 shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
          16:9 Frame
        </div>
      </div>

      {/* Centered content: Clearly labeled placeholder */}
      <div className="my-auto py-6 sm:py-8 flex flex-col items-center justify-center text-center relative z-10">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-105 transition-transform duration-300">
          <Laptop className="w-6 h-6" />
        </div>

        <h4 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
          {title}
        </h4>

        <p className="text-xs font-mono text-sky-400 mb-2">
          {category}
        </p>

        <div className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.08]">
          <Code2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Project Screenshot Placeholder</span>
        </div>
      </div>

      {/* Bottom status line */}
      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500 relative z-10">
        <span>Ready for live screenshot</span>
        <span>Build With Laraib</span>
      </div>
    </div>
  );
};
