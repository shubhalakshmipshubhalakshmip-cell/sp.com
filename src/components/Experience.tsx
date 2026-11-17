import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F2F1EC] relative border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Briefcase size={13} className="text-[#8B1E24]" />
            <span>Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Professional <span className="font-playfair italic font-normal text-[#8B1E24]">Experience</span>
          </h2>
          <p className="text-[#4B5563] text-base max-w-xl mt-3 font-light">
            Proven hands-on experience driving marketing campaigns, optimizing conversion funnels, and building responsive digital web presences.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Subtle crimson accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8B1E24]" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[#E5E5E0]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1E24]/10 text-xs font-mono font-medium text-[#8B1E24] mb-3">
                    <TrendingUp size={13} />
                    <span>Agency Growth & Digital Marketing</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
                    {exp.organization}
                  </h3>
                  <div className="text-lg font-playfair italic text-[#8B1E24] mt-1 font-medium">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#4B5563] font-mono">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0]">
                    <Calendar size={14} className="text-[#8B1E24]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0]">
                    <MapPin size={14} className="text-[#8B1E24]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-widest text-[#6B7280] font-mono font-semibold mb-6">
                  Key Responsibilities & Measurable Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] hover:border-[#8B1E24]/30 hover:bg-white transition-all duration-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#8B1E24]/10 flex-shrink-0 flex items-center justify-center text-[#8B1E24] mt-0.5 border border-[#8B1E24]/20">
                        <CheckCircle size={12} />
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed font-normal">
                        {resp}
                      </p>
                    </div>
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
