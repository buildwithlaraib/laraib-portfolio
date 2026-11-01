import React, { useState, useMemo } from 'react';
import { Search, Code, Palette, Wrench, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Styling' | 'Tools'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories: Array<'All' | 'Frontend' | 'Styling' | 'Tools'> = ['All', 'Frontend', 'Styling', 'Tools'];

  const filteredSkills = useMemo(() => {
    return PORTFOLIO_DATA.skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-4 h-4 text-sky-400" />;
      case 'Styling':
        return <Palette className="w-4 h-4 text-sky-400" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      default:
        return <Layers className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Modern Tech Stack & Specialized Tooling.
            </h2>
            <p className="text-base text-zinc-300">
              Interactive overview of technologies and workflows I use to build scalable, responsive web experiences.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Interactive Category Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/[0.08]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
          <div className="ml-auto text-xs font-mono text-zinc-500 hidden sm:block">
            Showing {filteredSkills.length} of {PORTFOLIO_DATA.skills.length} skills
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`p-6 rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'border-sky-500/50 shadow-lg shadow-sky-500/10'
                    : 'border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </h3>
                      {/* Clean unboxed metadata with dot separator */}
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                        <span>{skill.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{skill.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {skill.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sky-400">
                    {skill.highlight}
                  </span>
                  <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    View notes →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 p-8 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <p className="text-sm text-zinc-400 mb-2">No technologies matched "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs text-sky-400 hover:underline"
            >
              Reset search & filters
            </button>
          </div>
        )}

        {/* Selected Skill Detail Modal / Flyout */}
        {selectedSkill && (
          <div className="mt-8 p-6 rounded-xl bg-sky-950/20 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-sky-400 uppercase">Focused Skill</span>
                <span className="text-xs text-zinc-500">·</span>
                <span className="text-sm font-bold text-white">{selectedSkill.name}</span>
              </div>
              <p className="text-xs text-zinc-300">
                {selectedSkill.description} Used for building clean, maintainable, production-ready frontend solutions.
              </p>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-3 py-1.5 text-xs text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
