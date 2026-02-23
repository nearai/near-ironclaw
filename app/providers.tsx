'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!posthog.init) {
      console.warn('PostHog not loaded yet, retrying...')
      setTimeout(() => {
        posthog.init('phc_glaMeuuO1gLFSB2U9y27MchidXEmSnFOQLB8cceyVSb', {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'always',
          capture_pageview: false,
          persistence: 'localStorage+cookie',
          cookie_expiration: 90,
          respect_dnt: true,
          opt_out_capturing_by_default: false,
        })
      }, 100)
    } else {
      posthog.init('phc_glaMeuuO1gLFSB2U9y27MchidXEmSnFOQLB8cceyVSb', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always',
        capture_pageview: false,
        persistence: 'localStorage+cookie',
        cookie_expiration: 90,
        respect_dnt: true,
        opt_out_capturing_by_default: false,
      })
    }
    if ((navigator as any).globalPrivacyControl === true) {
      posthog.opt_out_capturing()
    }
  }, [])
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
