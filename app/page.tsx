import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

const sites = [
  {
    slug: 'ironclaw',
    name: 'IronClaw',
    description: 'Secure Rust-based AI agent runner with encrypted credential vaults.',
    tag: 'Security',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    accent: 'group-hover:border-orange-500/30',
  },
  {
    slug: 'ironclaw-magnetic',
    name: 'IronClaw — Magnetic',
    description: 'Editorial variant with lime palette, magnetic dot canvas, and brutalist typography.',
    tag: 'Security',
    tagColor: 'text-[#ccff00] bg-[#ccff00]/10 border-[#ccff00]/20',
    accent: 'group-hover:border-[#ccff00]/30',
  },
  {
    slug: 'ironclaw-sticky',
    name: 'IronClaw — Sticky',
    description: 'Neutral cream palette with stacked sticky-scroll sections, vertical marquee widgets, and terracotta accents.',
    tag: 'Security',
    tagColor: 'text-[#b7410e] bg-[#b7410e]/10 border-[#b7410e]/20',
    accent: 'group-hover:border-[#b7410e]/30',
  },
  {
    slug: 'ironclaw-forest',
    name: 'IronClaw — Forest',
    description: 'Clean SaaS design with deep forest green palette, terminal hero mockup, and card-based sections.',
    tag: 'Security',
    tagColor: 'text-[#c9ffad] bg-[#052e26]/60 border-[#c9ffad]/20',
    accent: 'group-hover:border-[#c9ffad]/30',
  },
  {
    slug: 'ironclaw-near',
    name: 'IronClaw — NEAR',
    description: 'Hybrid bento + editorial design with NEAR AI blue branding, vertical widget marquee, and visible borders.',
    tag: 'Security',
    tagColor: 'text-[#4CA7E6] bg-[#2257B5]/10 border-[#2257B5]/30',
    accent: 'group-hover:border-[#4CA7E6]/40',
  },
  {
    slug: 'ironclaw-v2',
    name: 'IronClaw — V2',
    description: 'Dark space theme with red accent, glass cards, terminal mockup, and Space Grotesk typography.',
    tag: 'Security',
    tagColor: 'text-[#FF4F4F] bg-[#FF4F4F]/10 border-[#FF4F4F]/20',
    accent: 'group-hover:border-[#FF4F4F]/30',
  },
  {
    slug: 'ironclaw-hybrid',
    name: 'IronClaw — Hybrid',
    description: 'Combines NEAR bento structure (12-col hero, masonry problem, 2-col solution) with V2 dark space visuals — glass cards, red accent, dot grid, and terminal mockup.',
    tag: 'Security',
    tagColor: 'text-[#FF4F4F] bg-[#FF4F4F]/10 border-[#FF4F4F]/20',
    accent: 'group-hover:border-[#FF4F4F]/30',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-gray-300">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
            <Shield className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-white tracking-tight">NEAR AI – Demos</span>
        </div>
        <span className="text-xs text-gray-600 font-mono">{sites.length} site{sites.length !== 1 ? 's' : ''}</span>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero text */}
        <div className="mb-12">
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Demo Hub</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            POC Sites
          </h1>
          <p className="text-gray-400 max-w-md">
            A collection of proof-of-concept demos. Select a site to preview it.
          </p>
        </div>

        {/* Sites grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sites.map((site) => (
            <Link
              key={site.slug}
              href={`/${site.slug}`}
              className={`group bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-0.5 ${site.accent}`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${site.tagColor}`}>
                  {site.tag}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1">{site.name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{site.description}</p>
              </div>
              <div className="mt-auto pt-2 border-t border-white/5">
                <span className="text-xs font-mono text-gray-600">/{site.slug}</span>
              </div>
            </Link>
          ))}

          {/* Placeholder cards for upcoming sites */}
          {Array.from({ length: Math.max(0, 2 - sites.length) }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-[#050505] border border-white/5 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-2 min-h-[180px]"
            >
              <span className="text-xs text-gray-700 font-mono">coming soon</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
