import React from 'react';
import { ArrowUpRight, Code, Laptop, Sparkles, Layout, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-sky-400" />;
      case 1:
        return <Laptop className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      default:
        return <Layout className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Specialized Frontend Solutions for Web & Product Teams.
          </h2>
          <p className="text-base text-zinc-300">
            Frontend development services tailored to deliver performant, user-centric, and maintainable digital experiences.
          </p>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-sky-500/5 relative overflow-hidden"
            >
              {/* Corner hover glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                    {getServiceIcon(index)}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">Service 0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Core Deliverables
                  </p>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-sky-400" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">0{index + 1} / 04</span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-sky-400 transition-colors cursor-pointer"
                >
                  <span>Inquire for this Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
