import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Sparkles, CheckCircle2, Heart, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E5E5E0]">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8B1E24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Sparkles size={13} className="text-[#8B1E24]" />
            <span>Profile & Overview</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            About <span className="font-playfair italic font-normal text-[#8B1E24]">Shubhalakshmi</span>
          </h2>
          <div className="flex items-center gap-2 mt-3 text-sm text-[#4B5563]">
            <MapPin size={16} className="text-[#8B1E24]" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Big Summary Callout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1E24]/10 to-transparent rounded-bl-full pointer-events-none" />
              <h3 className="font-playfair italic text-2xl sm:text-3xl text-[#111111] mb-6 leading-snug">
                Driving business growth through modern marketing & clean code.
              </h3>
              <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed font-light">
                {personal.aboutSummary}
              </p>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E5E5E0]">
                <div>
                  <div className="text-3xl font-light text-[#8B1E24] tracking-tight">35+</div>
                  <div className="text-xs text-[#4B5563] mt-1 uppercase tracking-wider font-medium">AI Tools Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#111111] tracking-tight">100%</div>
                  <div className="text-xs text-[#4B5563] mt-1 uppercase tracking-wider font-medium">Responsive Design</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#8B1E24] tracking-tight">ROI</div>
                  <div className="text-xs text-[#4B5563] mt-1 uppercase tracking-wider font-medium">Ads & SEO Focus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Skills & Interests Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Personal Skills Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111]">Personal Strengths</h4>
                  <p className="text-xs text-[#6B7280]">Core professional attributes</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {personal.personalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#8B1E24]" />
                    <span className="text-sm text-[#111111] font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Passions Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111]">Interests & Pursuits</h4>
                  <p className="text-xs text-[#6B7280]">What fuels continuous curiosity</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-[#F8F7F4] border border-[#E5E5E0] text-sm text-[#4B5563] font-normal"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaboration Action Pill */}
            <a
              href="#contact"
              className="group flex items-center justify-between p-5 rounded-3xl bg-white border border-[#E5E5E0] hover:border-[#8B1E24]/50 shadow-sm hover:shadow-md transition-all duration-300 text-[#111111]"
            >
              <div>
                <div className="text-xs text-[#8B1E24] uppercase tracking-widest font-mono font-medium">Ready to collaborate?</div>
                <div className="text-sm font-semibold mt-0.5 text-[#111111]">Let's discuss opportunities & projects</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#8B1E24] text-white flex items-center justify-center group-hover:scale-105 group-hover:bg-[#70161b] transition-all">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
