import IronClawApp from '@/components/ironclaw/IronClawApp';

export const metadata = {
  title: 'IronClaw – Secure AI Agents',
  description: 'Rust-based secure alternative to OpenClaw. Running in encrypted enclaves.',
};

export default function IronClawPage() {
  return <IronClawApp />;
}
