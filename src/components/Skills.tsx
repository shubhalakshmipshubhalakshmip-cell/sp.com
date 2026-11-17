import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Megaphone, Code2, Wrench, GraduationCap, Trophy, CheckCircle2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F2F1EC] relative border-t border-[#E8E6E1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Cpu size={13} className="text-[#8B1E24]" />
            <span>04 / Capabilities & AI</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Skills & <span className="font-playfair italic font-normal text-[#8B1E24]">Certifications</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
            Growth marketing frameworks, software programming languages, 35+ AI toolkits, and certified competencies.
          </p>
        </div>

        {/* Multi-Column Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 1. Growth & Digital Marketing */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                  <Megaphone size={19} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111111]">Digital Marketing</h3>
                  <p className="text-xs text-[#6B7280]">Campaigns & Paid Media</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.digitalMarketing.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E6E1] text-xs font-medium text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Code & Web Engineering */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                  <Code2 size={19} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111111]">Code & Web Tech</h3>
                  <p className="text-xs text-[#6B7280]">Full-Stack Languages</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programmingAndWeb.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E6E1] text-xs font-mono font-medium text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Tools & 35+ AI Stack */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                  <Wrench size={19} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111111]">IDEs & 35+ AI Stack</h3>
                  <p className="text-xs text-[#6B7280]">Workflow Accelerators</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      item.includes('35+')
                        ? 'bg-[#8B1E24] text-white font-semibold shadow-sm inline-flex items-center gap-1.5'
                        : 'bg-[#F8F7F4] border border-[#E8E6E1] text-[#374151] hover:bg-[#8B1E24] hover:text-white hover:border-[#8B1E24]'
                    }`}
                  >
                    {item.includes('35+') && <Sparkles size={11} />}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Row: Courses (2025) & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Courses (2025) */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111111]">2025 Certified Cohorts</h3>
                <span className="text-xs font-mono font-medium text-[#8B1E24]">Advanced Professional Specializations</span>
              </div>
            </div>
            <div className="space-y-3">
              {skills.courses2025.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8B1E24] mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#374151] font-normal leading-relaxed">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111111]">Recognized Milestones</h3>
                <span className="text-xs font-mono font-medium text-[#8B1E24]">Performance & Execution</span>
              </div>
            </div>
            <div className="space-y-3">
              {skills.achievements.map((achieve, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1]"
                >
                  <CheckCircle2 size={16} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#374151] font-normal leading-relaxed">{achieve}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
