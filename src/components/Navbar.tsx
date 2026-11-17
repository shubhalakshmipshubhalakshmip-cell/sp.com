import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/85 backdrop-blur-xl border-b border-black/10 shadow-lg shadow-black/10 py-3 sm:py-4 text-white'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Left: SVG Logo + Wordmark */}
      <a
        href="#home"
        onClick={(e) => handleScrollTo(e, '#home')}
        className="flex items-center gap-2.5 group cursor-pointer z-10"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 256 256"
          fill="#ffffff"
          className="transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="font-playfair italic text-lg text-white font-medium tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {portfolioData.personal.brandName}
        </span>
      </a>

      {/* Center Pill (Desktop) */}
      <div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 rounded-full px-2 py-1.5 items-center gap-1 transition-all duration-300 shadow-md ${
          scrolled
            ? 'bg-white/10 backdrop-blur-lg border border-white/15 shadow-black/10'
            : 'bg-black/35 backdrop-blur-md border border-white/25 shadow-black/20'
        }`}
      >
        {portfolioData.navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleScrollTo(e, item.href)}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white/90 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right (Desktop CTA) */}
      <div className="hidden md:block z-10">
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, '#contact')}
          className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-105 active:scale-95 inline-block cursor-pointer ${
            scrolled
              ? 'bg-[#8B1E24] text-white hover:bg-[#70161b] hover:shadow-[#8B1E24]/30'
              : 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-black/20'
          }`}
        >
          Let's talk
        </a>
      </div>

      {/* Right (Mobile Hamburger Button) */}
      <div className="md:hidden z-10">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="text-white p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/25 hover:bg-black/60 transition-colors cursor-pointer flex items-center justify-center shadow-md"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Responsive Mobile Glassmorphic Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-5 bg-[#141414]/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300 text-white">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-4 py-3 rounded-2xl text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/15">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full text-center bg-[#8B1E24] text-white text-sm font-semibold py-3 rounded-2xl hover:bg-[#70161b] transition-colors block shadow-md"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
