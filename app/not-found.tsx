'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Home } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Magnetic Canvas — blue dots on dark bg
const MagneticHeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const dotColor = '#4CA7E6';
    const spacing = 30;
    const radius = 1.5;
    const interactionRadius = 250;
    const magneticStrength = 0.4;

    type Dot = { originX: number; originY: number; x: number; y: number };
    let dots: Dot[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ originX: i * spacing, originY: j * spacing, x: i * spacing, y: j * spacing });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mousePosRef.current;
      dots.forEach((dot) => {
        const dx = mx - dot.originX;
        const dy = my - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let tx = dot.originX, ty = dot.originY;
        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const pull = force * magneticStrength;
          tx = dot.originX + dx * pull;
          ty = dot.originY + dy * pull;
        }
        dot.x += (tx - dot.x) * 0.1;
        dot.y += (ty - dot.y) * 0.1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.35 }}
    />
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Cipher Text Effect
const CIPHER_CHARS = '+=*/<>!&|^~%;:{}[]()#@$_';

const useCipherHover = (text: string) => {
  const [displayed, setDisplayed] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const trigger = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const pool = CIPHER_CHARS.split('');
    const rand = () => pool[Math.floor(Math.random() * pool.length)];
    let index = 0;
    let ticks = 0;
    const TICKS_PER_CHAR = 3;
    const build = (activeIdx: number, scramChar: string) =>
      text.split('').map((c, i) => (c === ' ' ? ' ' : i === activeIdx ? scramChar : c)).join('');

    intervalRef.current = setInterval(() => {
      while (index < text.length && text[index] === ' ') index++;
      if (index >= text.length) {
        setDisplayed(text);
        clearInterval(intervalRef.current!);
        return;
      }
      setDisplayed(build(index, rand()));
      ticks++;
      if (ticks >= TICKS_PER_CHAR) { ticks = 0; index++; }
    }, 35);
  };

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return { displayed, trigger };
};

// ─── Gradient Cipher Button ───────────────────────────────────────────────────
type GradientCipherButtonProps = {
  label: string;
  icon?: React.ComponentType<LucideProps>;
  onClick?: () => void;
  className?: string;
};

const GradientCipherButton = ({ label, icon: Icon, onClick, className = '' }: GradientCipherButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const { displayed, trigger } = useCipherHover(label);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => { setHovered(true); trigger(); }}
      onMouseLeave={() => setHovered(false)}
      className={`font-bold text-base px-7 py-3.5 flex items-center justify-center gap-2 relative overflow-hidden whitespace-nowrap cursor-pointer ${className}`}
      style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 130%, #4CA7E6 0%, #2882c8 65%)',
        color: '#fff',
        borderRadius: '16px',
        transition: 'box-shadow 0.3s ease',
        boxShadow: hovered ? '0 24px 24px -20px rgba(76,167,230,0.55)' : 'none',
        fontFamily: 'var(--font-fk-grotesk-mono), monospace',
        fontWeight: 400,
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 200% 220% at 50% 110%, #5BBAF5 0%, #2882c8 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          borderRadius: '16px',
        }}
      />
      <span style={{
        position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center',
        animation: hovered ? 'rocket-prepare 0.7s ease-in-out infinite' : 'none',
      }}>
        {Icon ? <Icon size={19} /> : <Home size={19} />}
      </span>
      <span style={{ position: 'relative', zIndex: 1 }}>{displayed}</span>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Easter egg hook — 3 clicks within 10 seconds plays the sound
const useTripleClickEgg = () => {
  const clickTimesRef = useRef<number[]>([]);

  const handleClick = () => {
    const now = Date.now();
    clickTimesRef.current = clickTimesRef.current.filter(t => now - t < 10000);
    clickTimesRef.current.push(now);
    if (clickTimesRef.current.length >= 5) {
      clickTimesRef.current = [];
      const audio = new Audio('/eegg/sound/expedition_fail_33.mp3');
      audio.play().catch(() => {});
    }
  };

  return handleClick;
};

// ─────────────────────────────────────────────────────────────────────────────
export default function NotFound() {
  const handleEggClick = useTripleClickEgg();

  return (
    <section
      onClick={handleEggClick}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 70% 45% at 50% 100%, rgba(76,167,230,0.14) 0%, transparent 70%), #0a0a0a',
        borderRadius: '0 0 48px 48px',
      }}
    >
      <MagneticHeroCanvas />

      {/* Desktop: character image, absolutely positioned right */}
      <div
        className="absolute bottom-[-35px] z-0 pointer-events-none hidden md:block"
        style={{ right: '140px', opacity: 0.35 }}
      >
        <Image
          src="/images/iron_claw_guy1.png"
          alt="IronClaw"
          width={460}
          height={460}
          className="object-contain"
          style={{ width: 'clamp(200px, 29vw, 460px)', height: 'auto', filter: 'grayscale(30%)' }}
          priority
        />
      </div>

      <div className="flex items-center w-full min-h-screen relative z-10 px-8 pt-20 pb-8 md:p-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 w-full">
          <div>
            {/* Error badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 md:mb-8"
              style={{ backgroundColor: 'rgba(76,167,230,0.10)', border: '1px solid rgba(76,167,230,0.28)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4CA7E6' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4CA7E6' }} />
              </span>
              <span
                className="text-[12px] lg:text-[14px] font-light uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-fk-grotesk-mono), monospace' }}
              >
                Error 404
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-bold mb-3 md:mb-6 leading-none"
              style={{
                color: '#fff',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-fk-grotesk), sans-serif',
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              }}
            >
              <span style={{
                background: 'linear-gradient(to bottom, #4CA7E6 0%, #2882c8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>404</span>
            </h1>

            <h2
              className="font-bold mb-3 md:mb-6 leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
              style={{ color: '#fff', letterSpacing: '-0.02em', fontFamily: 'var(--font-fk-grotesk), sans-serif' }}
            >
              Lost in the{' '}
              <span style={{
                background: 'linear-gradient(to bottom, #4CA7E6 0%, #2882c8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Enclave</span>
            </h2>

            <p
              className="text-base md:text-lg max-w-xl leading-relaxed mb-5 md:mb-10"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Nothing broke. You just took a wrong turn. We&apos;ve got you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-12">
              <GradientCipherButton
                label="Back to Home"
                icon={Home}
                onClick={() => { window.location.href = '/'; }}
              />
            </div>
          </div>

          {/* Mobile: character image in flow */}
          <div className="flex justify-center pt-4 pb-2 md:hidden">
            <Image
              src="/images/iron_claw_guy1.png"
              alt="IronClaw"
              width={460}
              height={460}
              className="object-contain"
              style={{ width: 'clamp(110px, 35vw, 190px)', height: 'auto', opacity: 0.35, filter: 'grayscale(30%)' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
