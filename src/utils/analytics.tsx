import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type AnalyticsContextValue = {
  consent: boolean
  setConsent: (v: boolean) => void
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null)

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<boolean>(() => localStorage.getItem('analytics-consent') === 'yes')

  useEffect(() => {
    localStorage.setItem('analytics-consent', consent ? 'yes' : 'no')
    if (consent) {
      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      script.async = true
      document.head.appendChild(script)
      window.dataLayer = window.dataLayer || []
      function gtag() {
        // @ts-ignore
        window.dataLayer.push(arguments)
      }
      // @ts-ignore
      gtag('js', new Date())
      // @ts-ignore replace with real id in env
      gtag('config', 'GA_MEASUREMENT_ID')
    }
  }, [consent])

  const value = useMemo(() => ({ consent, setConsent: setConsentState }), [consent])
  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>
}

export function useAnalytics() {
  const ctx = useContext(AnalyticsContext)
  if (!ctx) throw new Error('useAnalytics must be used within AnalyticsProvider')
  return ctx
}

export function ConsentBanner() {
  const { consent, setConsent } = useAnalytics()
  if (consent) return null
  return (
    <div className="fixed bottom-0 inset-x-0 p-3 bg-background/95">
      <div className="container flex items-center justify-between gap-4">
        <p>We use analytics to improve experience. Allow?</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" onClick={() => setConsent(true)} aria-label="Accept analytics">
            Accept
          </button>
          <button className="px-3 py-1 border rounded" onClick={() => setConsent(false)} aria-label="Decline analytics">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    dataLayer: any[]
  }
}

