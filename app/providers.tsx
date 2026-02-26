'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'always',
      capture_pageview: false,
      persistence: 'localStorage+cookie',
      cookie_expiration: 90,
      respect_dnt: true,
      disable_session_recording: true,
      opt_out_capturing_by_default: false,
      loaded: (ph) => {
        ;(window as any).posthog = ph
        ph.capture('page_view', {
          page_url: window.location.href,
          page_path: window.location.pathname,
          page_title: document.title,
          referrer: document.referrer,
        })
        if ((navigator as any).globalPrivacyControl === true) {
          ph.opt_out_capturing()
        }
      },
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
