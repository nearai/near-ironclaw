import { Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#f6f6f6', fontFamily: 'var(--font-fk-grotesk), sans-serif' }}
    >
      <div className="flex items-center gap-2 mb-12">
        <Shield size={28} style={{ color: '#4CA7E6' }} />
        <div className="flex items-baseline gap-[1px]">
          <span style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '-0.04em', color: '#111' }}>iron</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.04em', color: '#4CA7E6' }}>claw</span>
        </div>
      </div>

      <h1
        style={{
          fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          fontWeight: 700,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color: '#111',
        }}
      >
        Coming soon.
      </h1>
    </div>
  );
}
