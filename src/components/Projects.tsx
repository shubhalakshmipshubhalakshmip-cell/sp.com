import React, { useState, useEffect } from 'react';
import { portfolioData, LiveStorefront } from '../data/portfolioData';
import {
  Layers,
  Activity,
  BarChart3,
  Check,
  ArrowUpRight,
  X,
  ExternalLink,
  Globe,
  Lock,
  Sparkles
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const [modalOpen, setModalOpen] = useState(false);
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);

  const liveStorefronts = projects[0]?.liveStorefronts || [];
  const currentSite: LiveStorefront | undefined = liveStorefronts[activeSiteIndex];

  // Close modal on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const openStorefrontModal = (index: number = 0) => {
    setActiveSiteIndex(index);
    setModalOpen(true);
  };

  // Visual header illustrations
  const renderVisualHeader = (project: (typeof projects)[0]) => {
    if (project.id === 'live-storefronts') {
      return (
        <div className="h-52 w-full bg-gradient-to-br from-[#1E090B] via-[#2A0B0E] to-[#120506] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B1E24]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Top meta strip */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15 inline-flex items-center gap-1.5">
              <Globe size={11} className="text-[#E5B5B7]" />
              <span>3 Live Client Brands</span>
            </span>
            <span className="text-[11px] font-semibold text-[#E5B5B7] bg-[#8B1E24]/40 border border-[#8B1E24]/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 group-hover:bg-[#8B1E24] transition-colors">
              <span>View Live Storefronts (3)</span>
              <ArrowUpRight size={12} />
            </span>
          </div>

          {/* 3-Brand Live Showcase Preview Cards */}
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

          {/* Bottom helper prompt */}
          <div className="z-10 text-[10px] font-mono text-[#E5B5B7]/80 flex items-center gap-1">
            <Sparkles size={10} />
            <span>Click card to open live preview modal</span>
          </div>
        </div>
      );
    }

    if (project.id === 'health-monitor') {
      return (
        <div className="h-52 w-full bg-gradient-to-br from-[#0B1520] via-[#0D2235] to-[#070E15] p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
              HealthTech Telemetry
            </span>
            <Activity size={16} className="text-cyan-300" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 z-10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-white/70 font-mono">Glycemic Risk Metric</span>
              <span className="text-[10px] text-emerald-400 font-mono font-medium">Optimal • 98 mg/dL</span>
            </div>
            <svg className="w-full h-8" viewBox="0 0 200 32" fill="none">
              <path
                d="M0 16 L40 16 L50 4 L60 28 L70 16 L110 16 L120 8 L130 24 L140 16 L200 16"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="z-10 text-[10px] font-mono text-cyan-300/80">
            Full-Stack PHP, SQL & JS Architecture
          </div>
        </div>
      );
    }

    if (project.id === 'marketing-optimization') {
      return (
        <div className="h-52 w-full bg-gradient-to-br from-[#1C1405] via-[#2E2008] to-[#120D03] p-5 flex flex-col justify-between relative overflow-hidden text-white rounded-t-3xl">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
              Performance Analytics
            </span>
            <BarChart3 size={16} className="text-amber-300" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 z-10 flex items-end justify-between gap-2">
            <div>
              <div className="text-[10px] text-white/70 font-mono">Conversion Uplift</div>
              <div className="text-base font-semibold text-amber-300">+48.6% CTR</div>
            </div>
            <div className="flex items-end gap-1.5 h-10">
              <div className="w-3 bg-amber-400/40 rounded-t h-4" />
              <div className="w-3 bg-amber-400/60 rounded-t h-6" />
              <div className="w-3 bg-amber-400/80 rounded-t h-8" />
              <div className="w-3 bg-amber-400 rounded-t h-10" />
            </div>
          </div>

          <div className="z-10 text-[10px] font-mono text-amber-300/80">
            Audience Intent & Paid Funnel Retargeting
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <section id="projects" className="py-24 sm:py-32 bg-[#F8F7F4] relative border-t border-[#E8E6E1] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-start mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
              <Layers size={13} className="text-[#8B1E24]" />
              <span>03 / Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              Featured <span className="font-playfair italic font-normal text-[#8B1E24]">Projects</span>
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
              Live client storefronts, full-stack health platforms, and high-ROI digital marketing campaign frameworks.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const isStorefront = project.id === 'live-storefronts';

              return (
                <div
                  key={project.id}
                  onClick={isStorefront ? () => openStorefrontModal(0) : undefined}
                  className={`bg-white border border-[#E8E6E1] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#8B1E24]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    isStorefront ? 'cursor-pointer ring-1 ring-[#8B1E24]/10' : ''
                  }`}
                >
                  <div>
                    {/* Visual Header Mockup */}
                    {renderVisualHeader(project)}

                    {/* Content Body */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8B1E24]">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-[#9CA3AF]">0{idx + 1}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#8B1E24] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        {isStorefront && (
                          <ArrowUpRight
                            size={18}
                            className="text-[#8B1E24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0"
                          />
                        )}
                      </h3>

                      {project.techStack && (
                        <div className="p-2.5 mb-3 rounded-xl bg-[#F8F7F4] border border-[#E8E6E1] text-[11px] font-mono text-[#374151]">
                          <span className="text-[#8B1E24] font-semibold block text-[10px] uppercase">Stack:</span>
                          {project.techStack}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-[#E8E6E1]">
                        {project.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                            <Check size={13} className="text-[#8B1E24] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tags Footer */}
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]">
                      {project.tags.map((tag) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Live Website Preview Modal Popup */}
      {modalOpen && currentSite && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="max-w-5xl w-full bg-[#111111] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white max-h-[94vh] animate-in zoom-in-95 duration-200">
            {/* Top Bar: Switcher Tabs, Open Button & Close Button */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#181818] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              {/* Site Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
                {liveStorefronts.map((site, sIdx) => {
                  const isActive = sIdx === activeSiteIndex;
                  return (
                    <button
                      key={site.id}
                      type="button"
                      onClick={() => setActiveSiteIndex(sIdx)}
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

              {/* Action Buttons: Open in Tab & Close */}
              <div className="flex items-center gap-2.5 ml-auto">
                <a
                  href={currentSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#111111] hover:bg-neutral-100 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Open Live Site</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close Preview"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Short Impact Line per Site */}
            <div className="px-5 sm:px-6 py-3 bg-[#141414] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#E5B5B7] font-semibold uppercase tracking-wider">
                  {currentSite.name} ({currentSite.domain})
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">{currentSite.category}</span>
              </div>
              <p className="text-white/80 font-light text-xs max-w-xl">
                {currentSite.impact}
              </p>
            </div>

            {/* Browser Window Frame with Address Bar */}
            <div className="bg-[#1f1f1f] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="bg-black/60 px-3 py-0.5 rounded-md text-[11px] text-white/80 flex items-center gap-1.5 ml-2">
                  <Lock size={10} className="text-emerald-400" />
                  <span>{currentSite.url}</span>
                </div>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/70">
                  {currentSite.allowIframe ? 'Interactive View' : 'Live Snapshot'}
                </span>
              </div>

              <a
                href={currentSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#E5B5B7] hover:underline"
              >
                <span>Visit site in new tab</span>
                <ArrowUpRight size={11} />
              </a>
            </div>

            {/* Smart Hybrid Viewport: Live Iframe for Pilates Hub, or Snapshot Preview with Launch Button for The Footsteps & Bounce Here */}
            <div className="relative w-full bg-[#0a0a0a] flex-1 min-h-[50vh] sm:min-h-[58vh] overflow-hidden flex items-center justify-center">
              {currentSite.allowIframe ? (
                <iframe
                  src={currentSite.url}
                  title={`${currentSite.name} Live Storefront`}
                  className="w-full h-[52vh] sm:h-[60vh] border-none bg-white"
                  loading="lazy"
                />
              ) : (
                <a
                  href={currentSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/snap relative w-full h-[52vh] sm:h-[60vh] block overflow-hidden bg-gradient-to-br from-[#180a0c] to-[#0a0a0a]"
                >
                  {/* High-res live frontpage snapshot */}
                  <img
                    src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(currentSite.url)}?w=1280`}
                    alt={`${currentSite.name} Live Frontpage`}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/snap:opacity-100 group-hover/snap:scale-[1.02] transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

                  {/* Floating Glassmorphic Center Pill Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/75 backdrop-blur-xl border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-2xl group-hover/snap:scale-105 group-hover/snap:border-white/50 transition-all">
                      <span>Click to Launch Live Website in Chrome</span>
                      <ExternalLink size={15} className="text-[#E5B5B7]" />
                    </div>
                    <p className="text-[11px] text-white/75 font-mono mt-3 max-w-md">
                      Interactive live storefront • Opens {currentSite.domain} in a fresh browser tab
                    </p>
                  </div>
                </a>
              )}
            </div>

            {/* Bottom Fallback & Action Banner */}
            <div className="px-5 py-3 bg-[#181818] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
              <span className="text-[11px] text-white/60">
                {currentSite.allowIframe
                  ? 'Previewing live frontpage • Click "Open Live Site" to browse catalog in full screen'
                  : 'Live frontpage snapshot • Click anywhere on the preview to open the live site in Chrome'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={currentSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#E5B5B7] hover:text-white underline inline-flex items-center gap-1"
                >
                  <span>Open in Chrome ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
