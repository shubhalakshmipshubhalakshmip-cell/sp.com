import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Megaphone, Code2, Wrench, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F2F1EC] relative border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Cpu size={13} className="text-[#8B1E24]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Skills & <span className="font-playfair italic font-normal text-[#8B1E24]">Certifications</span>
          </h2>
          <p className="text-[#4B5563] text-base max-w-xl mt-3 font-light">
            A versatile blend of growth marketing expertise, algorithmic web programming, modern development IDEs, and 35+ advanced AI toolsets.
          </p>
        </div>

        {/* Top 3 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1. Digital Marketing */}
          <div className="bg-white border border-[#E5E5E0] rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                  <Megaphone size={19} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Digital Marketing</h3>
                  <p className="text-xs text-[#6B7280]">Growth & Paid Media</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.digitalMarketing.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0] text-xs font-medium text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Programming Languages & Web */}
          <div className="bg-white border border-[#E5E5E0] rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                  <Code2 size={19} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Code & Web Tech</h3>
                  <p className="text-xs text-[#6B7280]">Languages & Frameworks</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programmingAndWeb.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E5E5E0] text-xs font-mono font-medium text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Tools & AI Systems */}
          <div className="bg-white border border-[#E5E5E0] rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                  <Wrench size={19} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">Tools & IDEs</h3>
                  <p className="text-xs text-[#6B7280]">Modern Workflow Stack</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      item.includes('35+')
                        ? 'bg-[#8B1E24] text-white font-semibold shadow-sm'
                        : 'bg-[#F8F7F4] border border-[#E5E5E0] text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24]'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split: Courses (2025) & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Courses (2025) */}
          <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Advanced Courses Completed</h3>
                <span className="text-xs font-mono font-medium text-[#8B1E24]">2025 Cohorts & Specializations</span>
              </div>
            </div>
            <div className="space-y-3.5">
              {skills.courses2025.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] hover:border-[#8B1E24]/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8B1E24] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#4B5563] font-normal leading-relaxed">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Key Achievements</h3>
                <span className="text-xs font-mono font-medium text-[#8B1E24]">Recognized Performance & Impact</span>
              </div>
            </div>
            <div className="space-y-3.5">
              {skills.achievements.map((achieve, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] hover:border-[#8B1E24]/30 transition-colors"
                >
                  <CheckCircle2 size={16} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#4B5563] font-normal leading-relaxed">{achieve}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
