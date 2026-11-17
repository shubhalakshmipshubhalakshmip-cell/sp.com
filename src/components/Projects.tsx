import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, ShoppingCart, Activity, BarChart3, Check, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  // Custom visual header illustrations in pure CSS/SVG
  const renderVisualHeader = (id: string) => {
    switch (id) {
      case 'ecohaven':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#1E090B] via-[#2D0D10] to-[#120506] p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#8B1E24]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                E-Commerce Storefront
              </span>
              <ShoppingCart size={16} className="text-[#E5B5B7]" />
            </div>

            {/* Bespoke Mini UI Preview */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E24] flex items-center justify-center font-playfair italic text-white text-base">
                  Eh
                </div>
                <div>
                  <div className="text-xs font-medium text-white">EcoHaven Minimalist Catalog</div>
                  <div className="text-[10px] text-white/60">Dynamic Cart • Shopify & WP</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#E5B5B7]">$129.00</span>
            </div>
          </div>
        );

      case 'health-monitor':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#0B1520] via-[#0D2235] to-[#070E15] p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                HealthTech Telemetry
              </span>
              <Activity size={16} className="text-cyan-300" />
            </div>

            {/* Bespoke Health Telemetry Wave */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 z-10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-white/70 font-mono">Glycemic Risk Metric</span>
                <span className="text-[10px] text-emerald-400 font-mono font-medium">Optimal • 98 mg/dL</span>
              </div>
              <svg className="w-full h-8" viewBox="0 0 200 32" fill="none">
                <path
                  d="M0 16 L40 16 L50 4 L60 28 L70 16 L110 16 L120 8 L130 24 L140 16 L200 16"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        );

      case 'marketing-optimization':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#1C1405] via-[#2E2008] to-[#120D03] p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                Performance Analytics
              </span>
              <BarChart3 size={16} className="text-amber-300" />
            </div>

            {/* Bespoke Analytics Bar Graph */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 z-10 flex items-end justify-between gap-2">
              <div>
                <div className="text-[10px] text-white/70 font-mono">Conversion Uplift</div>
                <div className="text-base font-semibold text-amber-300">+48.6% CTR</div>
              </div>
              <div className="flex items-end gap-1.5 h-10">
                <div className="w-3 bg-amber-400/40 rounded-t h-4" />
                <div className="w-3 bg-amber-400/60 rounded-t h-6" />
                <div className="w-3 bg-amber-400/80 rounded-t h-8" />
                <div className="w-3 bg-amber-400 rounded-t h-10" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E8E6E1] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Layers size={13} className="text-[#8B1E24]" />
            <span>03 / Selected Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Featured <span className="font-playfair italic font-normal text-[#8B1E24]">Projects</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
            E-commerce stores, full-stack health platforms, and high-ROI digital marketing campaign frameworks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white border border-[#E8E6E1] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#8B1E24]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Header Mockup */}
                {renderVisualHeader(project.id)}

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8B1E24]">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#9CA3AF]">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#8B1E24] transition-colors">
                    {project.title}
                  </h3>

                  {project.techStack && (
                    <div className="p-2.5 mb-3 rounded-xl bg-[#F8F7F4] border border-[#E8E6E1] text-[11px] font-mono text-[#374151]">
                      <span className="text-[#8B1E24] font-semibold block text-[10px] uppercase">Stack:</span>
                      {project.techStack}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E8E6E1]">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <Check size={13} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#F8F7F4] text-[10px] font-mono text-[#4B5563] border border-[#E8E6E1]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
