import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <BookOpen size={13} className="text-[#8B1E24]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Formal <span className="font-playfair italic font-normal text-[#8B1E24]">Education</span>
          </h2>
          <p className="text-[#4B5563] text-base max-w-xl mt-3 font-light">
            Strong foundation in Computer Applications, Mathematics, Natural Sciences, and Computational Problem Solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5E0] rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8B1E24] uppercase tracking-wider font-semibold">
                    <Award size={13} className="text-[#8B1E24]" />
                    <span>Academic Qualification 0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-base text-[#8B1E24] font-playfair italic font-medium">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#4B5563]">
                  {edu.period && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0]">
                      <Calendar size={13} className="text-[#8B1E24]" />
                      <span>{edu.period}</span>
                    </div>
                  )}
                  {edu.location && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0]">
                      <MapPin size={13} className="text-[#8B1E24]" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {edu.details && (
                <div className="mt-5 pt-5 border-t border-[#E5E5E0] text-sm text-[#4B5563] font-light">
                  {edu.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
