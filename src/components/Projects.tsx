import React, { useState, useEffect } from 'react';
import { portfolioData, LiveStorefront, SocialMediaPage } from '../data/portfolioData';
import {
  Layers,
  BarChart3,
  Check,
  ArrowUpRight,
  X,
  ExternalLink,
  Globe,
  Lock,
  Sparkles,
  Instagram,
  Eye,
  ArrowRight,
  Share2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const [storefrontModalOpen, setStorefrontModalOpen] = useState(false);
  const [activeStorefrontIndex, setActiveStorefrontIndex] = useState(0);

  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);

  const liveStorefronts = projects[0]?.liveStorefronts || [];
  const currentStorefront: LiveStorefront | undefined = liveStorefronts[activeStorefrontIndex];

  const socialPages = projects[1]?.socialMediaPages || [];
  const currentSocial: SocialMediaPage | undefined = socialPages[activeSocialIndex];

  // Close modals on Escape key & manage body scroll
  useEffect(() => {
    const isAnyModalOpen = storefrontModalOpen || socialModalOpen;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStorefrontModalOpen(false);
        setSocialModalOpen(false);
      }
    };

    if (isAnyModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [storefrontModalOpen, socialModalOpen]);

  const openStorefrontModal = (index: number = 0) => {
    setActiveStorefrontIndex(index);
    setStorefrontModalOpen(true);
  };

  const openSocialModal = (index: number = 0) => {
    setActiveSocialIndex(index);
    setSocialModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="pt-10 pb-16 sm:py-24 md:py-32 bg-[#F8F7F4] relative border-t border-[#E8E6E1] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-start mb-6 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-3 sm:mb-4">
              <Layers size={13} className="text-[#8B1E24]" />
              <span>03 / Delivered Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              Delivered <span className="font-playfair italic font-normal text-[#8B1E24]">Works</span>
            </h2>
            <p className="text-[#4B5563] text-xs sm:text-base max-w-xl mt-2 sm:mt-3 font-light leading-relaxed">
              Websites, social media growth & digital campaigns I've built and scaled.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ========================================================= */}
            {/* CARD 01: Live E-Commerce & Brand Websites (Interactive) */}
            {/* ========================================================= */}
            <div
              onClick={() => openStorefrontModal(0)}
              className="bg-white border border-[#E8E6E1] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(139,30,36,0.12)] hover:border-[#8B1E24]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ring-1 ring-[#8B1E24]/10"
            >
              <div>
                {/* Visual Header */}
                <div className="h-52 w-full bg-gradient-to-br from-[#1E090B] via-[#2A0B0E] to-[#120506] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B1E24]/25 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15 inline-flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>3 Live Client Brands</span>
                    </span>
                    <span className="text-[11px] font-semibold text-[#E5B5B7] bg-[#8B1E24]/40 border border-[#8B1E24]/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 group-hover:bg-[#8B1E24] transition-colors">
                      <span>View Live Storefronts (3)</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>

                  {/* 3-Brand Mini Cards */}
                  <div className="grid grid-cols-3 gap-2 z-10 mt-2">
                    {liveStorefronts.map((site, sIdx) => (
                      <button
                        key={site.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openStorefrontModal(sIdx);
                        }}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl p-2.5 border border-white/15 text-left transition-all hover:scale-105 active:scale-95 group/btn cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="w-5 h-5 rounded-lg bg-[#8B1E24] text-white text-[10px] font-bold flex items-center justify-center">
                            0{sIdx + 1}
                          </span>
                          <ArrowUpRight size={12} className="text-white/50 group-hover/btn:text-white transition-colors" />
                        </div>
                        <div className="text-xs font-semibold text-white truncate">{site.name}</div>
                        <div className="text-[10px] text-white/60 font-mono truncate">{site.domain}</div>
                      </button>
                    ))}
                  </div>

                  <div className="z-10 text-[10px] font-mono text-[#E5B5B7]/80 flex items-center gap-1">
                    <Sparkles size={10} />
                    <span>Interactive modal • Preview live frontpages</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8B1E24]">
                      {projects[0].category}
                    </span>
                    <span className="font-mono text-xs text-[#9CA3AF]">01</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#8B1E24] transition-colors flex items-center justify-between">
                    <span>{projects[0].title}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#8B1E24] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0"
                    />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
                    {projects[0].description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E8E6E1]">
                    {projects[0].highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <Check size={13} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Contrast Interactive Bottom CTA Button & Tags */}
              <div className="p-6 pt-0 space-y-3.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openStorefrontModal(0);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#8B1E24] text-white group-hover:bg-[#6E161B] flex items-center justify-between font-medium text-xs sm:text-sm shadow-sm transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Eye size={15} />
                    <span>Preview 3 Live Websites</span>
                  </span>
                  <span className="text-[11px] font-mono text-white/80 group-hover:text-white flex items-center gap-1">
                    <span>Tap to Open</span>
                    <ArrowRight size={13} />
                  </span>
                </button>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8E6E1]">
                  {projects[0].tags.map((tag) => (
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

            {/* ========================================================= */}
            {/* CARD 02: Social Media Handling & Brand Growth (Interactive) */}
            {/* ========================================================= */}
            <div
              onClick={() => openSocialModal(0)}
              className="bg-white border border-[#E8E6E1] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(139,30,36,0.12)] hover:border-[#8B1E24]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ring-1 ring-[#8B1E24]/10"
            >
              <div>
                {/* Visual Header */}
                <div className="h-52 w-full bg-gradient-to-br from-[#1C0B14] via-[#12080D] to-[#0A0508] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15 inline-flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                      </span>
                      <span>4 Managed Instagram Pages</span>
                    </span>
                    <span className="text-[11px] font-semibold text-pink-200 bg-pink-950/60 border border-pink-700/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 group-hover:bg-gradient-to-r group-hover:from-[#833AB4] group-hover:to-[#FD1D1D] transition-all">
                      <Instagram size={11} />
                      <span>Preview 4 Pages</span>
                      <ArrowUpRight size={11} />
                    </span>
                  </div>

                  {/* 2x2 Grid of 4 Managed Instagram Handles */}
                  <div className="grid grid-cols-2 gap-2 z-10 mt-1">
                    {socialPages.map((page, pIdx) => (
                      <button
                        key={page.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openSocialModal(pIdx);
                        }}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/15 text-left transition-all hover:scale-105 active:scale-95 group/btn cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-white truncate max-w-[100px] sm:max-w-[120px]">
                            {page.handle}
                          </span>
                          <ArrowUpRight size={11} className="text-white/50 group-hover/btn:text-white flex-shrink-0" />
                        </div>
                        <div className="text-[9px] text-pink-200/80 font-mono truncate">{page.category}</div>
                      </button>
                    ))}
                  </div>

                  <div className="z-10 text-[10px] font-mono text-white/70 flex items-center justify-between">
                    <span>Content • Poster Design • Growth</span>
                    <span className="text-pink-300 font-semibold">Tap to Explore</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8B1E24]">
                      {projects[1].category}
                    </span>
                    <span className="font-mono text-xs text-[#9CA3AF]">02</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#8B1E24] transition-colors flex items-center justify-between">
                    <span>{projects[1].title}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#8B1E24] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0"
                    />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
                    {projects[1].description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E8E6E1]">
                    {projects[1].highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <Check size={13} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Contrast Interactive Bottom CTA Button & Tags */}
              <div className="p-6 pt-0 space-y-3.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openSocialModal(0);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#8B1E24] text-white group-hover:bg-[#6E161B] flex items-center justify-between font-medium text-xs sm:text-sm shadow-sm transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram size={15} />
                    <span>Preview 4 Instagram Pages</span>
                  </span>
                  <span className="text-[11px] font-mono text-white/80 group-hover:text-white flex items-center gap-1">
                    <span>Tap to Open</span>
                    <ArrowRight size={13} />
                  </span>
                </button>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8E6E1]">
                  {projects[1].tags.map((tag) => (
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

            {/* ========================================================= */}
            {/* CARD 03: End-to-End Digital Execution & AI Workflows (Non-Clickable) */}
            {/* ========================================================= */}
            <div className="bg-white border border-[#E8E6E1] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#8B1E24]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Visual Header */}
                <div className="h-52 w-full bg-gradient-to-br from-[#1A0A0D] via-[#260C11] to-[#120508] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#8B1E24]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15 inline-flex items-center gap-1.5">
                      <Sparkles size={11} className="text-[#E5B5B7]" />
                      <span>100% Execution • AI-Powered Workflow</span>
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-[#E5B5B7] bg-[#8B1E24]/30 border border-[#8B1E24]/50 px-2.5 py-0.5 rounded-full">
                      Full-Stack Execution
                    </span>
                  </div>

                  {/* 4 Feature Badges */}
                  <div className="grid grid-cols-2 gap-2 z-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                      <div className="text-[9px] text-[#E5B5B7] font-mono uppercase tracking-wider">SEO & Growth</div>
                      <div className="text-xs font-semibold text-white">Technical & On-Page</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                      <div className="text-[9px] text-[#E5B5B7] font-mono uppercase tracking-wider">Web Development</div>
                      <div className="text-xs font-semibold text-white">Custom & Responsive</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                      <div className="text-[9px] text-[#E5B5B7] font-mono uppercase tracking-wider">Social & Posters</div>
                      <div className="text-xs font-semibold text-white">End-to-End Handling</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                      <div className="text-[9px] text-[#E5B5B7] font-mono uppercase tracking-wider">AI Acceleration</div>
                      <div className="text-xs font-semibold text-white">35+ AI Tools</div>
                    </div>
                  </div>

                  <div className="z-10 text-[10px] font-mono text-white/70 flex items-center justify-between">
                    <span>Precision • Speed • Measurable ROI</span>
                    <span className="text-[#E5B5B7]">100% Autonomous</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8B1E24]">
                      {projects[2].category}
                    </span>
                    <span className="font-mono text-xs text-[#9CA3AF]">03</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight leading-snug mb-3">
                    {projects[2].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
                    {projects[2].description}
                  </p>

                  {/* 4 Detailed Highlights */}
                  <div className="space-y-2.5 pt-3 border-t border-[#E8E6E1]">
                    {projects[2].highlights.map((item, hIdx) => {
                      const parts = item.split(': ');
                      const title = parts.length > 1 ? parts[0] : '';
                      const detail = parts.length > 1 ? parts.slice(1).join(': ') : item;
                      return (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                          <Check size={13} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">
                            {title && <strong className="text-[#111111] font-medium">{title}: </strong>}
                            <span>{detail}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]">
                  {projects[2].tags.map((tag) => (
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
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* MODAL 01: Live Website Preview Modal Popup */}
      {/* ===================================================================== */}
      {storefrontModalOpen && currentStorefront && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setStorefrontModalOpen(false);
          }}
        >
          <div className="max-w-5xl w-full bg-[#111111] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white max-h-[94vh] animate-in zoom-in-95 duration-200">
            {/* Top Bar: Switcher Tabs, Open Button & Close Button */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#181818] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
                {liveStorefronts.map((site, sIdx) => {
                  const isActive = sIdx === activeStorefrontIndex;
                  return (
                    <button
                      key={site.id}
                      type="button"
                      onClick={() => setActiveStorefrontIndex(sIdx)}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#8B1E24] text-white shadow-sm font-semibold'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>0{sIdx + 1}. {site.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2.5 ml-auto">
                <a
                  href={currentStorefront.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#111111] hover:bg-neutral-100 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Open Live Site</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => setStorefrontModalOpen(false)}
                  aria-label="Close Preview"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Short Impact Line */}
            <div className="px-5 sm:px-6 py-3 bg-[#141414] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#E5B5B7] font-semibold uppercase tracking-wider">
                  {currentStorefront.name} ({currentStorefront.domain})
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">{currentStorefront.category}</span>
              </div>
              <p className="text-white/80 font-light text-xs max-w-xl">
                {currentStorefront.impact}
              </p>
            </div>

            {/* Browser Frame Header */}
            <div className="bg-[#1f1f1f] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="bg-black/60 px-3 py-0.5 rounded-md text-[11px] text-white/80 flex items-center gap-1.5 ml-2">
                  <Lock size={10} className="text-emerald-400" />
                  <span>{currentStorefront.url}</span>
                </div>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/70">
                  {currentStorefront.allowIframe ? 'Interactive View' : 'Live Snapshot'}
                </span>
              </div>

              <a
                href={currentStorefront.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#E5B5B7] hover:underline"
              >
                <span>Visit site in new tab</span>
                <ArrowUpRight size={11} />
              </a>
            </div>

            {/* Viewport */}
            <div className="relative w-full bg-[#0a0a0a] flex-1 min-h-[50vh] sm:min-h-[58vh] overflow-hidden flex items-center justify-center">
              {currentStorefront.allowIframe ? (
                <iframe
                  src={currentStorefront.url}
                  title={`${currentStorefront.name} Live Storefront`}
                  className="w-full h-[52vh] sm:h-[60vh] border-none bg-white"
                  loading="lazy"
                />
              ) : (
                <a
                  href={currentStorefront.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/snap relative w-full h-[52vh] sm:h-[60vh] block overflow-hidden bg-gradient-to-br from-[#180a0c] to-[#0a0a0a]"
                >
                  <img
                    src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(currentStorefront.url)}?w=1280`}
                    alt={`${currentStorefront.name} Live Frontpage`}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/snap:opacity-100 group-hover/snap:scale-[1.02] transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/75 backdrop-blur-xl border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-2xl group-hover/snap:scale-105 group-hover/snap:border-white/50 transition-all">
                      <span>Click to Launch Live Website in Chrome</span>
                      <ExternalLink size={15} className="text-[#E5B5B7]" />
                    </div>
                    <p className="text-[11px] text-white/75 font-mono mt-3 max-w-md">
                      Interactive live storefront • Opens {currentStorefront.domain} in a fresh browser tab
                    </p>
                  </div>
                </a>
              )}
            </div>

            {/* Bottom Fallback Banner */}
            <div className="px-5 py-3 bg-[#181818] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
              <span className="text-[11px] text-white/60">
                {currentStorefront.allowIframe
                  ? 'Previewing live frontpage • Click "Open Live Site" to browse catalog in full screen'
                  : 'Live frontpage snapshot • Click anywhere on the preview to open the live site in Chrome'}
              </span>
              <a
                href={currentStorefront.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#E5B5B7] hover:text-white underline inline-flex items-center gap-1"
              >
                <span>Open in Chrome ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 02: Social Media & Instagram Pages Showcase Modal Popup */}
      {/* ===================================================================== */}
      {socialModalOpen && currentSocial && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSocialModalOpen(false);
          }}
        >
          <div className="max-w-xl w-full bg-[#111111] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white max-h-[92vh] animate-in zoom-in-95 duration-200">
            {/* Top Bar: Clean Compact Tab Switcher & Unclipped X Close Button */}
            <div className="px-4 sm:px-6 py-3 bg-[#181818] border-b border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[calc(100%-48px)] no-scrollbar">
                {socialPages.map((page, pIdx) => {
                  const isActive = pIdx === activeSocialIndex;
                  return (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setActiveSocialIndex(pIdx)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-sm font-semibold'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{page.handle}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setSocialModalOpen(false)}
                aria-label="Close Preview"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer flex-shrink-0 ml-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Single Unified Profile Body (pt-6 to pt-8, Zero Clipping, Clean Hierarchy) */}
            <div className="pt-6 sm:pt-8 px-5 sm:px-8 pb-6 bg-gradient-to-b from-[#180812] via-[#0D0D0D] to-[#0A0A0A] overflow-y-auto flex flex-col items-center text-center">
              {/* Instagram Story Gradient Ring & Avatar */}
              <div className="p-1 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg mb-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center text-white border-2 border-black">
                  <Instagram size={30} className="text-white" />
                </div>
              </div>

              {/* Brand Title & Handle */}
              <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-1">
                {currentSocial.name}
              </h4>
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="text-xs sm:text-sm font-mono text-pink-300 font-medium">
                  {currentSocial.handle}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs text-white/70">{currentSocial.category}</span>
              </div>

              {/* Role Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/90 mb-4 font-mono">
                Role: {currentSocial.role}
              </div>

              {/* 2-Line Concise Impact Summary */}
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-lg mb-5 leading-relaxed">
                {currentSocial.impact}
              </p>

              {/* 3 Compact Checkmarked Deliverables */}
              <div className="w-full max-w-lg space-y-2 mb-6 text-left">
                {currentSocial.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2.5"
                  >
                    <Check size={14} className="text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90 font-light leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* ONLY ONE PRIMARY CTA BUTTON at the bottom */}
              <a
                href={currentSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-lg py-3 sm:py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium text-sm hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Instagram size={17} />
                <span>Open {currentSocial.handle} on Instagram ↗</span>
              </a>

              <p className="text-[11px] font-mono text-white/45 mt-3">
                Tap above to view live posts, carousels, reels & audience engagement
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
