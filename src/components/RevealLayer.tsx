import React, { useEffect, useRef } from 'react';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
  radius: number;
}

export const RevealLayer: React.FC<RevealLayerProps> = ({
  image,
  cursorX,
  cursorY,
  radius
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealDivRef = useRef<HTMLDivElement | null>(null);

  // Resize canvas to window dimensions on mount & resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update mask on every cursor/touch coordinate update
  useEffect(() => {
    const canvas = canvasRef.current;
    const revealDiv = revealDivRef.current;
    if (!canvas || !revealDiv) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (cursorX > -500 && cursorY > -500) {
      // Build radial gradient at (cursorX, cursorY) from radius 0 to radius
      const grad = ctx.createRadialGradient(
        cursorX,
        cursorY,
        0,
        cursorX,
        cursorY,
        radius
      );
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      grad.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
      grad.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cursorX, cursorY, radius, 0, Math.PI * 2);
      ctx.fill();

      try {
        const maskData = canvas.toDataURL();
        revealDiv.style.maskImage = `url(${maskData})`;
        revealDiv.style.webkitMaskImage = `url(${maskData})`;
        revealDiv.style.maskSize = '100% 100%';
        revealDiv.style.webkitMaskSize = '100% 100%';
        revealDiv.style.maskRepeat = 'no-repeat';
        revealDiv.style.webkitMaskRepeat = 'no-repeat';
      } catch (e) {
        // Fallback to CSS radial gradient mask
        const cssMask = `radial-gradient(circle ${radius}px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, rgba(0,0,0,0) 100%)`;
        revealDiv.style.maskImage = cssMask;
        revealDiv.style.webkitMaskImage = cssMask;
      }
      revealDiv.style.opacity = '1';
    } else {
      revealDiv.style.maskImage = 'none';
      revealDiv.style.webkitMaskImage = 'none';
      revealDiv.style.opacity = '0';
    }
  }, [cursorX, cursorY, radius]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        ref={revealDivRef}
        className="absolute inset-0 bg-cover bg-no-repeat z-30 pointer-events-none transition-opacity duration-300 bg-[center_18%] sm:bg-center"
        style={{
          backgroundImage: `url(${image})`,
          opacity: 0
        }}
      />
    </>
  );
};
