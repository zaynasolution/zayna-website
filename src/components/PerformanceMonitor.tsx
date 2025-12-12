import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onINP, onTTFB } from 'web-vitals'

type Reporter = (metric: { name: string; value: number }) => void

export default function PerformanceMonitor({ report }: { report?: Reporter }) {
  useEffect(() => {
    const r = report ?? ((m) => console.log(`[WebVital] ${m.name}:`, m.value))
    onCLS((m) => r({ name: m.name, value: m.value }))
    onFCP((m) => r({ name: m.name, value: m.value }))
    onLCP((m) => r({ name: m.name, value: m.value }))
    onINP((m) => r({ name: m.name, value: m.value }))
    onTTFB((m) => r({ name: m.name, value: m.value }))
  }, [report])
  return null
}
