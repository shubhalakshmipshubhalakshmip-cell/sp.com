import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E8E6E1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <BookOpen size={13} className="text-[#8B1E24]" />
            <span>05 / Academic Foundation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Formal <span className="font-playfair italic font-normal text-[#8B1E24]">Education</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
            Rigorous background in Computer Applications, Science, and Analytical Problem Solving.
          </p>
        </div>

        {/* Sleek Horizontal 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E6E1] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:border-[#8B1E24]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                    <Award size={16} />
                  </div>
                  <span className="font-mono text-xs text-[#9CA3AF]">0{idx + 1}</span>
                </div>

                {edu.period && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#E8E6E1] text-[11px] font-mono text-[#8B1E24] font-medium mb-3">
                    <Calendar size={11} />
                    <span>{edu.period}</span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-[#111111] tracking-tight leading-snug mb-1">
                  {edu.degree}
                </h3>

                <div className="text-sm text-[#8B1E24] font-playfair italic mb-3">
                  {edu.institution}
                </div>

                {edu.details && (
                  <p className="text-xs text-[#4B5563] leading-relaxed font-light pt-3 border-t border-[#E8E6E1]">
                    {edu.details}
                  </p>
                )}
              </div>

              {edu.location && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280] font-mono pt-4 mt-4 border-t border-[#E8E6E1]">
                  <MapPin size={12} className="text-[#8B1E24]" />
                  <span>{edu.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
