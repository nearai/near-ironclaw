'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Cpu,
  Server,
  EyeOff,
  Activity,
  Network,
  Github,
  ArrowRight,
  Menu,
  X,
  Check,
  AlertTriangle,
  Terminal,
  Zap,
  Code,
  Cloud,
} from 'lucide-react';

// --- Helper Components ---

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="glass-card p-6 rounded-xl hover:translate-y-[-2px] transition-transform duration-300 group">
    <div className="mb-4 text-[#FF4F4F] group-hover:scale-110 transition-transform duration-300 inline-block">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

type GlobeIconProps = {
  className?: string;
  size?: number;
};

const GlobeIcon = ({ className, size }: GlobeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

type StepProps = {
  number: string;
  title: string;
  desc: string;
};

const Step = ({ number, title, desc }: StepProps) => (
  <div className="flex gap-4">
    <div className="font-mono text-[#FF4F4F] font-bold text-lg pt-1">{number}</div>
    <div>
      <h4 className="text-lg font-bold mb-1 text-white">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

type ComparisonRowProps = {
  label: string;
  v1: string;
  v2: string;
  highlight?: boolean;
};

const ComparisonRow = ({ label, v1, v2, highlight }: ComparisonRowProps) => (
  <div className="grid grid-cols-3 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors">
    <div className="p-4 text-sm font-medium text-gray-300 flex items-center">{label}</div>
    <div className="p-4 text-sm text-gray-500 text-center border-l border-gray-800 flex items-center justify-center">
      {v1}
    </div>
    <div
      className={`p-4 text-sm font-medium text-center border-l border-gray-800 bg-[#FF4F4F]/5 flex items-center justify-center ${
        highlight ? 'text-[#FF4F4F]' : 'text-white'
      }`}
    >
      {v2}
    </div>
  </div>
);

// --- Main Component ---

export default function IronClawV2App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-space-grotesk overflow-x-hidden selection:bg-[#FF4F4F] selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF4F4F] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-900 opacity-[0.03] blur-[120px] rounded-full"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space-grotesk { font-family: 'Space Grotesk', sans-serif; }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card:hover {
          border-color: rgba(255, 79, 79, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        .neon-text {
          text-shadow: 0 0 20px rgba(255, 79, 79, 0.5);
        }
        .nav-link {
          font-size: 0.875rem;
          color: #9CA3AF;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: white;
        }
      `}</style>

      {/* ── Back-to-hub bar ─────────────────────────────────────────────── */}
      <div
        className="relative z-50 px-6 py-2 flex items-center justify-between"
        style={{ backgroundColor: '#03030A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 transition-colors"
          style={{ color: '#555' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#555')}
        >
          <span>←</span> All demos
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: '#333' }}>
          ironclaw / v2
        </span>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-[#05050A]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="text-[#FF4F4F]" size={24} />
              <span className="font-bold text-lg tracking-tight">IronClaw</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#why-switch" className="nav-link">Why Switch</a>
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#compare" className="nav-link">Compare</a>
              <a href="#" className="nav-link flex items-center gap-1">
                <Github size={14} /> GitHub
              </a>
            </div>

            <div className="hidden md:block">
              <button className="bg-[#FF4F4F] text-black font-bold px-4 py-1.5 rounded-full text-sm hover:bg-[#ff3333] transition-colors">
                Deploy Now
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#05050A]">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#why-switch" className="block px-3 py-2 text-base font-medium text-gray-300">Why Switch</a>
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-300">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-300">How It Works</a>
              <a href="#compare" className="block px-3 py-2 text-base font-medium text-gray-300">Compare</a>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Hero */}
        <header className="flex flex-col items-center text-center pt-12 pb-12">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[#1A1A20] border border-gray-800 rounded-full px-3 py-1 text-xs text-[#FF4F4F] hover:border-[#FF4F4F] transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4F4F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4F4F]"></span>
              </span>
              Now on NEAR AI Cloud
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 max-w-4xl leading-tight">
            Iron<span className="text-[#FF4F4F]">Claw</span>: Your Always-On AI Agent,{' '}
            <span className="text-gray-500">Privacy Guaranteed</span>
          </h1>

          <p className="text-[#FF4F4F] font-semibold tracking-widest text-sm uppercase mb-6 neon-text">
            Use AI agents without risking your credentials.
          </p>

          <p className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed">
            The secure, open-source alternative to OpenClaw. Built in{' '}
            <span className="text-white font-bold">Rust</span>. Running in encrypted enclaves on{' '}
            <span className="text-white font-bold">NEAR AI Cloud</span>.
            <br className="hidden md:block" />
            Your secrets never touch the LLM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#FF4F4F] text-black font-bold px-8 py-3 rounded-full text-sm hover:bg-[#ff3333] transition-colors flex items-center justify-center gap-2">
              <Shield size={18} /> Deploy Secure Agent
            </button>
            <button className="bg-[#1A1A20] border border-gray-800 text-white font-bold px-8 py-3 rounded-full text-sm hover:border-[#FF4F4F] transition-colors flex items-center justify-center gap-2">
              <Code size={18} /> Read the Source
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-[#05050A]"></div>
              ))}
            </div>
            <span>2,000+ GitHub stars · Open source · Built by the NEAR team</span>
          </div>
        </header>

        {/* Social Proof Banner */}
        <div className="mb-24 border-y border-white/5 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-gray-400 uppercase tracking-wider">
            <span className="flex items-center gap-2"><Github size={16} /> 2,000+ GitHub Stars</span>
            <span className="flex items-center gap-2"><Zap size={16} /> 100% Rust</span>
            <span className="flex items-center gap-2"><Lock size={16} /> 0 Secrets Exposed</span>
            <span className="flex items-center gap-2"><Cloud size={16} /> 1-click Cloud Deploy</span>
          </div>
        </div>

        {/* SECTION: THE PROBLEM */}
        <section id="why-switch" className="mb-24">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2">
              <span className="text-[#FF4F4F] text-xl">)</span>
              <h2 className="text-xl font-bold">The Problem</h2>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              OpenClaw is powerful.
              <br />
              It&apos;s also <span className="text-[#FF4F4F]">exposing your secrets.</span>
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Credentials get exposed through prompt injection. Malicious skills steal passwords.
              If you&apos;re running OpenClaw with anything sensitive, you already know the risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-red-500/50">
              <AlertTriangle className="text-red-500 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">Prompt injection dumps secrets</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                A single crafted prompt can trick the LLM into revealing every API key and password
                you&apos;ve given it. Telling it &ldquo;don&apos;t share&rdquo; doesn&apos;t help.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border-l-4 border-l-red-500/50">
              <EyeOff className="text-red-500 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">341 malicious skills found</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Researchers found hundreds of community skills designed to quietly exfiltrate
                credentials. You won&apos;t spot them in a code review.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border-l-4 border-l-red-500/50">
              <GlobeIcon className="text-red-500 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">30,000+ exposed instances</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tens of thousands of OpenClaw instances are publicly reachable. Attackers are
                already weaponizing them.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: HOW IRONCLAW FIXES THIS */}
        <section className="mb-24 bg-[#0A0A0F] border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF4F4F] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#FF4F4F] font-bold tracking-wider text-xs uppercase mb-2 block">
              Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The LLM never touches your secrets.{' '}
              <span className="text-[#FF4F4F]">Ever.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              IronClaw doesn&apos;t rely on telling the AI &ldquo;please don&apos;t leak
              this.&rdquo; Your credentials live in an encrypted vault that the LLM physically
              cannot access. They&apos;re injected at the network boundary — only for endpoints
              you&apos;ve pre-approved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Rust', 'Wasm Sandbox', 'Encrypted Vault', 'TEE / CVM', 'Endpoint Allowlist'].map(
              tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-[#FF4F4F]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </section>

        {/* SECTION: WHAT YOU GET */}
        <section id="features" className="mb-24">
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-[#FF4F4F] text-xl">)</span>
            <h2 className="text-xl font-bold">What You Get</h2>
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-bold">Security you don&apos;t have to think about.</h3>
            <p className="text-gray-400 mt-2">
              Every layer is built so that even if something goes wrong, your credentials don&apos;t
              leave the vault.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Lock size={24} />}
              title="Encrypted Vault"
              desc="Your credentials are invisible to the AI. API keys, tokens, and passwords are encrypted at rest and injected into requests at the host boundary."
            />
            <FeatureCard
              icon={<Cpu size={24} />}
              title="Sandboxed Tools"
              desc="A compromised skill can't touch anything else. Every tool runs in its own Wasm container with capability-based permissions."
            />
            <FeatureCard
              icon={<Server size={24} />}
              title="Encrypted Enclaves"
              desc="Not even the cloud provider can see your data. Your instance runs inside a Trusted Execution Environment on NEAR AI Cloud."
            />
            <FeatureCard
              icon={<Activity size={24} />}
              title="Leak Detection"
              desc="Credential exfiltration gets caught before it leaves. All outbound traffic is scanned in real-time for patterns that look like secrets."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Built in Rust"
              desc="Entire classes of exploits don't exist here. No garbage collector, no buffer overflows. Memory safety is enforced at compile time."
            />
            <FeatureCard
              icon={<Network size={24} />}
              title="Network Allowlisting"
              desc="You control exactly where data goes. Tools can only reach endpoints you've pre-approved. No silent phone-home."
            />
          </div>
        </section>

        {/* SECTION: HOW IT WORKS */}
        <section id="how-it-works" className="mb-24">
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-[#FF4F4F] text-xl">)</span>
            <h2 className="text-xl font-bold">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                From zero to secure agent in under 5 minutes.
              </h3>
              <p className="text-gray-400 mb-8">
                If you&apos;ve used OpenClaw, you already know the workflow. IronClaw just locks it
                down.
              </p>

              <div className="space-y-8">
                <Step
                  number="01"
                  title="Deploy in one click"
                  desc="Launch your own IronClaw instance on NEAR AI Cloud. It boots inside a Trusted Execution Environment — encrypted from the start."
                />
                <Step
                  number="02"
                  title="Store your credentials"
                  desc="Add API keys, tokens, and passwords to the encrypted vault. IronClaw injects them only where you've allowed."
                />
                <Step
                  number="03"
                  title="Work like you always do"
                  desc="Browse, research, code, automate. Same capabilities as OpenClaw — except now a prompt injection can't steal your credentials."
                />
              </div>
            </div>

            {/* Terminal visual */}
            <div className="bg-[#0A0A0F] border border-gray-800 rounded-xl overflow-hidden shadow-2xl h-full min-h-[400px] flex flex-col">
              <div className="flex items-center px-4 py-2 bg-[#121218] border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs text-gray-500 font-mono">ironclaw-cli — TEE</div>
              </div>
              <div className="p-6 font-mono text-xs md:text-sm text-gray-300 space-y-4">
                <div>
                  <span className="text-green-500">➜</span>{' '}
                  <span className="text-blue-400">~</span> ironclaw deploy --target near-cloud
                </div>
                <div className="text-gray-500 pl-4">
                  [+] Provisioning Enclave (AMD SEV-SNP)... Done
                  <br />
                  [+] Verifying Attestation Report... Verified
                  <br />
                  [+] Booting IronClaw Runtime (Rust v1.75)... Ready
                </div>
                <div>
                  <span className="text-green-500">➜</span>{' '}
                  <span className="text-blue-400">~</span> ironclaw secrets add OPENAI_API_KEY
                </div>
                <div className="text-gray-500 pl-4">
                  [?] Enter Value: ************************
                  <br />
                  [+] Secret encrypted and stored in Vault.
                  <br />
                  [i] Policy: Only injectable to https://api.openai.com/*
                </div>
                <div>
                  <span className="text-green-500">➜</span>{' '}
                  <span className="text-blue-400">~</span>{' '}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SIDE BY SIDE */}
        <section id="compare" className="mb-24">
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-[#FF4F4F] text-xl">)</span>
            <h2 className="text-xl font-bold">Compare</h2>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">
              Everything you like about OpenClaw.
              <br />
              Nothing you&apos;re worried about.
            </h3>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-3 bg-[#1A1A20] text-sm font-bold border-b border-gray-800">
              <div className="p-4 text-gray-500">Feature</div>
              <div className="p-4 text-center text-gray-400">OpenClaw</div>
              <div className="p-4 text-center text-[#FF4F4F] bg-[#FF4F4F]/5">IronClaw</div>
            </div>

            <ComparisonRow label="Language" v1="JavaScript" v2="Rust" highlight />
            <ComparisonRow label="Memory Safety" v1="✗ Runtime GC" v2="✓ Compile-time" highlight />
            <ComparisonRow label="Secret Handling" v1="✗ LLM can see secrets" v2="✓ Encrypted vault" highlight />
            <ComparisonRow label="Tool Isolation" v1="✗ Shared process" v2="✓ Per-tool Wasm sandbox" highlight />
            <ComparisonRow label="Prompt Injection" v1="✗ 'Please don't leak'" v2="✓ Architectural separation" highlight />
            <ComparisonRow label="Cloud Privacy" v1="Standard VPS" v2="Encrypted TEE" highlight />
            <ComparisonRow label="Network Control" v1="✗ Unrestricted" v2="✓ Endpoint allowlist" highlight />
            <ComparisonRow label="Leak Detection" v1="✗ None" v2="✓ Real-time scanning" highlight />
          </div>
        </section>

        {/* SECTION: FINAL CTA */}
        <section className="mb-32">
          <div className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto border border-[#FF4F4F]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4F4F]/5 to-transparent pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Deploy an AI agent you can <br />
              actually <span className="text-[#FF4F4F]">trust</span> with your credentials.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Open source. One-click deploy on NEAR AI Cloud. Your secrets never leave the encrypted
              vault.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-[#FF4F4F] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-[#ff3333] transition-colors shadow-[0_0_20px_rgba(255,79,79,0.3)]">
                Deploy Secure Agent
              </button>
              <button className="bg-transparent border border-gray-700 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                <Github size={20} /> Star on GitHub
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 pb-12 border-t border-white/5 pt-12">
          <div className="flex justify-center gap-2 mb-2 items-center">
            <span className="font-bold text-gray-300">IronClaw</span>
            <span className="text-gray-600">—</span>
            <span>by NEAR AI</span>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-[#FF4F4F]">
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">NEAR AI</a>
            <a href="#" className="hover:underline">OpenClaw</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
