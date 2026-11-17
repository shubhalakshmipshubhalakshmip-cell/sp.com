import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { RevealLayer } from './RevealLayer';
import { Sparkles } from 'lucide-react';

const SPOTLIGHT_R = 260;

export const Hero: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [hasInteracted, setHasInteracted] = useState(false);
  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!hasInteracted) setHasInteracted(true);
      if (smoothRef.current.x < -500) {
        smoothRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
        if (!hasInteracted) setHasInteracted(true);
        if (smoothRef.current.x < -500) {
          smoothRef.current = { x: touch.clientX, y: touch.clientY };
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
        if (!hasInteracted) setHasInteracted(true);
        if (smoothRef.current.x < -500) {
          smoothRef.current = { x: touch.clientX, y: touch.clientY };
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const loop = () => {
      if (mouseRef.current.x > -500) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.12;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.12;

        setCursorPos({
          x: Math.round(smoothRef.current.x * 10) / 10,
          y: Math.round(smoothRef.current.y * 10) / 10
        });
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasInteracted]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-screen bg-[#140406]"
      style={{ height: '100dvh', touchAction: 'pan-y' }}
    >
      {/* 1. Base image (z-10): Positioned at center 18% on mobile/tablet so face & sunglasses are always visible */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hero-zoom z-10 bg-[center_18%] sm:bg-center"
        style={{
          backgroundImage: `url(${portfolioData.personal.images.base})`
        }}
      >
        {/* Mobile-only gradient protection in lower-third for 100% crystal-clear typography */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* 2. Reveal layer (z-30): RevealLayer component showing Reveal_image inside spotlight */}
      <RevealLayer
        image={portfolioData.personal.images.reveal}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={SPOTLIGHT_R}
      />

      {/* Minimal Floating Spotlight Hint Pill */}
      <div
        className={`absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-all duration-700 ${
          hasInteracted ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono shadow-lg">
          <Sparkles size={12} className="text-[#E5B5B7] animate-pulse" />
          <span className="sm:hidden">Touch & drag to reveal</span>
          <span className="hidden sm:inline">Move cursor to reveal</span>
        </div>
      </div>

      {/* 3. Heading (z-50): Lower-third on mobile (< 640px), left vertical-center on tablet & desktop */}
      <div className="absolute z-50 pointer-events-none bottom-8 left-5 right-5 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-[60px] md:left-[80px] flex flex-col items-start text-left">
        <h1 className="text-white leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
          {/* Line 1: I'm */}
          <span
            className="block font-playfair italic font-normal text-4xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            I'm
          </span>
          {/* Line 2: SHUBHA */}
          <span
            className="block font-normal text-4xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal tracking-tight"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            SHUBHA
          </span>
          {/* Subtitle directly under heading */}
          <span
            className="block font-playfair italic text-white/95 text-sm sm:text-lg md:text-xl mt-2.5 sm:mt-4 hero-anim hero-reveal"
            style={{ letterSpacing: '-0.02em', animationDelay: '0.58s' }}
          >
            {portfolioData.personal.heroSubtitle}
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left paragraph (z-50): tablet/desktop only */}
      <div
        className="hidden sm:block absolute bottom-14 max-w-[270px] hero-anim hero-fade z-50 pointer-events-none"
        style={{ left: '80px', animationDelay: '0.7s' }}
      >
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {portfolioData.personal.heroBio}
        </p>
      </div>

      {/* 5. Bottom-right block (z-50): tablet/desktop only */}
      <div
        className="hidden sm:flex absolute bottom-14 right-10 md:right-14 max-w-[270px] flex-col items-start gap-4 hero-anim hero-fade z-50 pointer-events-none"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {portfolioData.personal.heroPhilosophy}
        </p>
      </div>
    </section>
  );
};
