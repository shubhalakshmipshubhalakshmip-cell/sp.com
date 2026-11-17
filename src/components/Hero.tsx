import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { RevealLayer } from './RevealLayer';

const SPOTLIGHT_R = 260;

export const Hero: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (smoothRef.current.x < -500) {
        smoothRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
        if (smoothRef.current.x < -500) {
          smoothRef.current = { x: touch.clientX, y: touch.clientY };
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const loop = () => {
      if (mouseRef.current.x > -500) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

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
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-screen bg-[#1a0507]"
      style={{ height: '100dvh' }}
    >
      {/* 1. Base image (z-10): Bright, vibrant studio background without heavy dark black tint */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom z-10"
        style={{
          backgroundImage: `url(${portfolioData.personal.images.base})`
        }}
      />

      {/* 2. Reveal layer (z-30): RevealLayer component showing Reveal_image inside spotlight */}
      <RevealLayer
        image={portfolioData.personal.images.reveal}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={SPOTLIGHT_R}
      />

      {/* 3. Heading (z-50): absolute top-1/2 -translate-y-1/2 with light crisp text shadow */}
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-start text-left px-5 pointer-events-none left-4 sm:left-[80px] z-50">
        <h1 className="text-white leading-[0.95] drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]">
          {/* Line 1: I'm */}
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
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
            className="block font-playfair italic text-white/95 text-base sm:text-lg md:text-xl mt-3 sm:mt-4 hero-anim hero-reveal"
            style={{ letterSpacing: '-0.02em', animationDelay: '0.58s' }}
          >
            {portfolioData.personal.heroSubtitle}
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left paragraph (z-50): hidden sm:block absolute bottom-14 */}
      <div
        className="hidden sm:block absolute bottom-14 max-w-[270px] hero-anim hero-fade z-50 pointer-events-none"
        style={{ left: '100px', animationDelay: '0.7s' }}
      >
        <p className="text-sm text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {portfolioData.personal.heroBio}
        </p>
      </div>

      {/* 5. Bottom-right block (z-50): absolute bottom-10 sm:bottom-24 */}
      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[270px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade z-50 pointer-events-none"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {portfolioData.personal.heroPhilosophy}
        </p>
      </div>
    </section>
  );
};
