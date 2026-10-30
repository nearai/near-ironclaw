'use client';

import React from 'react';
import { X } from 'lucide-react';
import { usePostHog } from 'posthog-js/react';

// Height of the bar in px. The fixed nav is shifted down by this much at the
// top of the page so the two never overlap.
export const ANNOUNCEMENT_BAR_HEIGHT = 40;

export const ANNOUNCEMENT_STORAGE_KEY = 'ic_announcement_near_ai_dismissed';

const NEAR_AI_URL =
  'https://near.ai?utm_source=ironclaw&utm_medium=web&utm_campaign=announcement_bar&utm_content=private_inference';

export function AnnouncementBar({ onDismiss }: { onDismiss: () => void }) {
  const posthog = usePostHog();

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative flex items-center justify-center pl-3 pr-9 sm:px-10"
      style={{ height: ANNOUNCEMENT_BAR_HEIGHT, backgroundColor: '#111', color: '#fff' }}
    >
      <a
        href={NEAR_AI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 min-w-0 text-[11px] sm:text-[13px] leading-snug hover:opacity-90"
        onClick={() => posthog?.capture('cta_clicked', {
          cta_text: 'Try NEAR AI Cloud',
          cta_type: 'near_ai',
          page_section: 'announcement_bar',
        })}
      >
        <span className="truncate">
          <span className="hidden md:inline">
            Give your agent private AI models that run in secure enclaves.
          </span>
          <span className="md:hidden">Private AI models for your agent.</span>
        </span>
        <span className="flex-shrink-0 font-medium" style={{ color: '#4CA7E6' }}>
          <span>Try NEAR AI Cloud</span>
          <span aria-hidden="true"> →</span>
        </span>
      </a>
      <button
        type="button"
        aria-label="Dismiss announcement"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer opacity-60 hover:opacity-100"
        style={{ color: '#fff' }}
        onClick={onDismiss}
      >
        <X size={14} />
      </button>
    </div>
  );
}
