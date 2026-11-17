import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Sparkles, CheckCircle2, Heart, ArrowRight, MessageCircle, ArrowDownRight, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector('#projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-8 sm:pt-12 pb-24 sm:pb-32 bg-[#F8F7F4] relative border-t border-[#E8E6E1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Sleek High-Impact Work & Featured Projects Showcase Bar */}
        <div className="bg-white border border-[#E8E6E1] rounded-3xl p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 sm:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 group hover:border-[#8B1E24]/30 transition-all">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#8B1E24]">
              <Layers size={13} className="text-[#8B1E24]" />
              <span>Selected Work & Portfolio</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-[#111111] leading-snug">
              Explore my live work in Website Development, Social Media Management & Paid Ad Campaigns.
            </p>
          </div>

          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="bg-[#8B1E24] hover:bg-[#6E161B] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition shadow-md hover:shadow-[#8B1E24]/20 active:scale-95 cursor-pointer flex-shrink-0"
          >
            <span>Explore Featured Projects</span>
            <ArrowDownRight size={16} />
          </a>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Sparkles size={13} className="text-[#8B1E24]" />
            <span>01 / Profile & Narrative</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            About <span className="font-playfair italic font-normal text-[#8B1E24]">Shubhalakshmi</span>
          </h2>
          <div className="flex items-center gap-2 mt-3 text-sm text-[#4B5563]">
            <MapPin size={16} className="text-[#8B1E24]" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Left Main Card (md:col-span-7) */}
          <div className="md:col-span-7 bg-white border border-[#E8E6E1] rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-mono font-medium text-[#8B1E24] uppercase tracking-widest mb-4">
                Philosophy & Vision
              </div>
              <h3 className="font-playfair italic text-2xl sm:text-3xl text-[#111111] leading-snug mb-6">
                "Driving business growth through modern marketing & clean code."
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-light">
                {personal.aboutSummary}
              </p>
            </div>

            {/* 3-Column Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-8 border-t border-[#E8E6E1]">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-light text-[#8B1E24] tracking-tight">35+</div>
                <div className="text-[11px] sm:text-xs text-[#6B7280] uppercase tracking-wider font-medium leading-tight">
                  AI Tools Mastered
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight">100%</div>
                <div className="text-[11px] sm:text-xs text-[#6B7280] uppercase tracking-wider font-medium leading-tight">
                  Responsive Web
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-light text-[#8B1E24] tracking-tight">ROI</div>
                <div className="text-[11px] sm:text-xs text-[#6B7280] uppercase tracking-wider font-medium leading-tight">
                  Ads & SEO Focus
                </div>
              </div>
            </div>
          </div>

          {/* Right Stacked Bento Cards (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-5 md:gap-6">
            {/* Card A: Core Strengths */}
            <div className="bg-white border border-[#E8E6E1] rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#111111]">Core Strengths</h4>
                  <p className="text-xs text-[#6B7280]">Key professional abilities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {personal.personalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] text-xs font-medium text-[#111111]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E24] flex-shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card B: Beyond Work & Location */}
            <div className="bg-white border border-[#E8E6E1] rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24]">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#111111]">Beyond Work</h4>
                  <p className="text-xs text-[#6B7280]">Interests & pursuits</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E6E1] text-xs text-[#4B5563]"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-[#E8E6E1] text-xs text-[#6B7280]">
                <MapPin size={13} className="text-[#8B1E24]" />
                <span>Base: Mysore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Full-Width Luxury Collaboration Banner (md:col-span-12) */}
          <div className="md:col-span-12 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#8B1E24] via-[#5C1014] to-[#1A080A] text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E5B5B7]">
                Available for New Ventures
              </span>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight leading-snug">
                Ready to scale your brand & <span className="font-playfair italic font-normal">web presence</span>?
              </h3>
            </div>

            <a
              href={portfolioData.contact.whatsappDefaultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#111111] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8F7F4] hover:scale-105 active:scale-95 transition-all shadow-md flex-shrink-0"
            >
              <MessageCircle size={15} className="text-emerald-600" />
              <span>Start on WhatsApp</span>
              <ArrowRight size={14} className="text-[#8B1E24]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
