import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AnalyticsProvider, ConsentBanner } from './utils/analytics'
import { LanguageProvider } from './context/LanguageContext'
import reportWebVitals, { sendToAnalytics } from './reportWebVitals'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <AnalyticsProvider>
        <App />
        <ConsentBanner />
      </AnalyticsProvider>
    </LanguageProvider>
  </StrictMode>,
)

reportWebVitals(sendToAnalytics)
