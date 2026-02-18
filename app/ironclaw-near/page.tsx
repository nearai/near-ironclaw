import IronClawNearApp from '@/components/ironclaw/IronClawNearApp';

export const metadata = {
  title: 'IronClaw — NEAR AI',
  description: 'Secure Rust-based AI agent runner. Running in encrypted enclaves on NEAR AI Cloud. Your secrets never touch the LLM.',
};

export default function IronClawNearPage() {
  return <IronClawNearApp />;
}
