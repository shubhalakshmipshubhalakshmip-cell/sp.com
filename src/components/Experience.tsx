import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, TrendingUp, Target, Globe, BarChart3 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const currentExp = experience[0];

  const impactItems = [
    {
      icon: <Globe size={18} className="text-[#8B1E24]" />,
      title: "Website & Social Media Optimization",
      desc: currentExp.responsibilities[0]
    },
    {
      icon: <Target size={18} className="text-[#8B1E24]" />,
      title: "Targeted Meta & Google Ad Campaigns",
      desc: currentExp.responsibilities[1]
    },
    {
      icon: <BarChart3 size={18} className="text-[#8B1E24]" />,
      title: "Full-Funnel Acquisition & SEO Growth",
      desc: currentExp.responsibilities[2]
    },
    {
      icon: <TrendingUp size={18} className="text-[#8B1E24]" />,
      title: "WordPress & Shopify E-Commerce Builds",
      desc: currentExp.responsibilities[3]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F2F1EC] relative border-t border-[#E8E6E1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <Briefcase size={13} className="text-[#8B1E24]" />
            <span>02 / Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Professional <span className="font-playfair italic font-normal text-[#8B1E24]">Experience</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
            Hands-on execution driving high-conversion campaigns, user acquisition funnels, and responsive web development.
          </p>
        </div>

        {/* Editorial Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#8B1E24]/30 space-y-8">
          {/* Timeline Node Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#8B1E24] ring-4 ring-[#F2F1EC]" />

          {/* Experience Card */}
          <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {/* Top Company & Role Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E8E6E1]">
              <div>
                <span className="text-xs font-mono font-medium text-[#8B1E24] uppercase tracking-widest block mb-1">
                  Growth & Web Specialist
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
                  {currentExp.organization}
                </h3>
                <div className="text-base text-[#8B1E24] font-playfair italic mt-0.5">
                  Digital Marketing & Web Executive
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#4B5563]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E6E1]">
                  <Calendar size={13} className="text-[#8B1E24]" />
                  <span>{currentExp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E6E1]">
                  <MapPin size={13} className="text-[#8B1E24]" />
                  <span>{currentExp.location}</span>
                </div>
              </div>
            </div>

            {/* 2-Column Structured Impact Grid */}
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-widest text-[#6B7280] font-mono font-semibold mb-5">
                Core Initiatives & Measurable Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] hover:border-[#8B1E24]/30 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#8B1E24]/10 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <h5 className="text-sm font-semibold text-[#111111]">{item.title}</h5>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
