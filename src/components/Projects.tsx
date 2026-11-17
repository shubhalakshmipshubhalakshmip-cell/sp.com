import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, ShoppingCart, Activity, BarChart3, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ecohaven':
        return <ShoppingCart size={22} className="text-[#8B1E24]" />;
      case 'health-monitor':
        return <Activity size={22} className="text-[#8B1E24]" />;
      case 'marketing-optimization':
        return <BarChart3 size={22} className="text-[#8B1E24]" />;
      default:
        return <Layers size={22} className="text-[#8B1E24]" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Layers size={13} className="text-[#8B1E24]" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Featured <span className="font-playfair italic font-normal text-[#8B1E24]">Projects</span>
          </h2>
          <p className="text-[#4B5563] text-base max-w-xl mt-3 font-light">
            A curation of digital products, e-commerce stores, full-stack web platforms, and data-driven marketing campaigns.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white border border-[#E5E5E0] rounded-3xl p-7 sm:p-8 flex flex-col justify-between group hover:border-[#8B1E24]/30 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              {/* Top accent indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E5E5E0] group-hover:bg-[#8B1E24] transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B1E24]/10 border border-[#8B1E24]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="font-mono text-xs font-medium text-[#9CA3AF]">0{idx + 1}</span>
                </div>

                <div className="text-xs uppercase tracking-wider font-mono font-medium text-[#8B1E24] mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight leading-snug mb-4">
                  {project.title}
                </h3>

                {project.techStack && (
                  <div className="p-3 mb-4 rounded-xl bg-[#F8F7F4] border border-[#E5E5E0] text-xs font-mono text-[#374151]">
                    <span className="text-[#8B1E24] block mb-0.5 uppercase tracking-wider text-[10px] font-semibold">Tech Stack:</span>
                    {project.techStack}
                  </div>
                )}

                <p className="text-sm text-[#4B5563] leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#E5E5E0]">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563] font-normal">
                      <Check size={14} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#E5E5E0]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#F8F7F4] text-[11px] font-mono text-[#4B5563] border border-[#E5E5E0]"
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
