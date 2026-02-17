import IronClawStickyApp from '@/components/ironclaw/IronClawStickyApp';

export const metadata = {
  title: 'IronClaw – Secure AI Agents (Sticky)',
  description: 'Rust-based secure alternative to OpenClaw. Running in encrypted enclaves.',
};

export default function IronClawStickyPage() {
  return <IronClawStickyApp />;
}
