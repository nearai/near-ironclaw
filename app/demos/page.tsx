import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

const sites = [
  {
    slug: 'ironclaw-renew',
    name: 'IronClaw — Renew',
    description: 'Dark theme with magnetic dot hero, blue accent, sticky-scroll feature cards, animated UI demos, and comparison table.',
    tag: 'Latest',
    tagColor: 'text-[#4CA7E6] bg-[#4CA7E6]/10 border-[#4CA7E6]/30',
    accent: 'group-hover:border-[#4CA7E6]/40',
    featured: true,
  },
  {
    slug: 'ironclaw-blue',
    name: 'IronClaw — Blue',
    description: 'Blue accent theme with ASCII scatter hero, cipher text effect, gradient cipher buttons, and sticky-scroll sections.',
    tag: 'Dark',
    tagColor: 'text-[#4CA7E6] bg-[#4CA7E6]/10 border-[#4CA7E6]/30',
    accent: 'group-hover:border-[#4CA7E6]/40',
  },
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
  {
    slug: 'ironclaw-blue-grid',
    name: 'IronClaw — Blue Grid',
    description: 'Blue accent variant with magnetic dot canvas hero — dots react to cursor position.',
    tag: 'Security',
    tagColor: 'text-[#4CA7E6] bg-[#4CA7E6]/10 border-[#4CA7E6]/30',
    accent: 'group-hover:border-[#4CA7E6]/40',
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
          <p className="text-gray-400 whitespace-nowrap">
            A collection of proof-of-concept demos. Select a site to preview it.
          </p>
        </div>

        {/* Featured card */}
        {(() => {
          const featured = sites.find(s => (s as typeof sites[0] & { featured?: boolean }).featured);
          if (!featured) return null;
          return (
            <Link
              href={`/${featured.slug}`}
              className={`group border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-end gap-6 mb-4 transition-all hover:-translate-y-0.5 bg-[#05080f] border-[#4CA7E6]/25 ring-1 ring-[#4CA7E6]/15 ${featured.accent}`}
            >
              <div className="flex-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-5 inline-block ${featured.tagColor}`}>
                  {featured.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{featured.name}</h2>
                <p className="text-base text-gray-400 leading-relaxed max-w-xl">{featured.description}</p>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-end gap-4 shrink-0">
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                <span className="text-xs font-mono text-gray-600">/{featured.slug}</span>
              </div>
            </Link>
          );
        })()}

        {/* Sites grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sites.filter(s => !(s as typeof sites[0] & { featured?: boolean }).featured).map((site) => (
            <Link
              key={site.slug}
              href={`/${site.slug}`}
              className={`group border rounded-2xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-0.5 bg-[#0A0A0A] border-white/5 ${site.accent}`}
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
        </div>
      </main>
    </div>
  );
}
