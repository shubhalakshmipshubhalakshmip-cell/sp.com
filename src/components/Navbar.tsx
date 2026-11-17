import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F7F4]/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.04)] text-[#111111]'
            : 'bg-black/25 backdrop-blur-xl border-b border-white/10 text-white'
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
            className="transition-transform duration-300 group-hover:scale-110"
            fill={scrolled ? '#8B1E24' : '#ffffff'}
          >
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span
            className={`font-playfair italic text-lg font-medium tracking-tight transition-colors ${
              scrolled ? 'text-[#111111]' : 'text-white'
            }`}
          >
            {portfolioData.personal.brandName}
          </span>
        </a>

        {/* Center Pill (Desktop & Tablet md+) */}
        <div
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 rounded-full px-2 py-1.5 items-center gap-1 transition-all duration-300 ${
            scrolled
              ? 'bg-black/5 border border-black/10 text-[#111111]'
              : 'bg-white/15 backdrop-blur-md border border-white/20 text-white'
          }`}
        >
          {portfolioData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                scrolled
                  ? 'text-[#4B5563] hover:text-[#111111] hover:bg-black/5'
                  : 'text-white/85 hover:text-white hover:bg-white/15'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right (Desktop CTA - Direct WhatsApp Connect) */}
        <div className="hidden md:block z-10">
          <a
            href={portfolioData.contact.whatsappDefaultLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer ${
              scrolled
                ? 'bg-[#8B1E24] text-white hover:bg-[#70161b]'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <MessageCircle size={14} className={scrolled ? 'text-white' : 'text-emerald-600'} />
            <span>Let's talk</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Right (Mobile Hamburger Button) */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className={`p-2 rounded-full backdrop-blur-md border transition-colors cursor-pointer flex items-center justify-center ${
              scrolled
                ? 'text-[#111111] bg-black/5 border-black/10'
                : 'text-white bg-black/35 border-white/25'
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Luxury Editorial Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-[#0c0507]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-7 pt-24 animate-in fade-in duration-300 md:hidden overflow-y-auto">
          {/* Navigation Links with Large Playfair Numbers */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#E5B5B7] block mb-2">
              Navigation
            </span>
            {portfolioData.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="flex items-center justify-between py-3 border-b border-white/10 group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-playfair italic text-[#E5B5B7] text-lg">
                    0{idx + 1}
                  </span>
                  <span className="text-2xl font-light tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Quick Contact Actions with WhatsApp Priority */}
          <div className="pt-6 space-y-4 border-t border-white/15">
            <a
              href={portfolioData.contact.whatsappDefaultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-emerald-600 to-[#8B1E24] text-white text-sm font-semibold py-3.5 rounded-2xl hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp (+91 9844272652)</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-white/70">
              <a
                href={portfolioData.contact.whatsappDefaultLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:text-white"
                aria-label="WhatsApp Shubha"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={portfolioData.contact.phoneLink}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:text-white"
                aria-label="Call Shubha"
              >
                <Phone size={18} />
              </a>
              <a
                href={portfolioData.contact.emailLink}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:text-white"
                aria-label="Email Shubha"
              >
                <Mail size={18} />
              </a>
              <a
                href={portfolioData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
