import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async'
import { AnalyticsProvider, ConsentBanner } from './utils/analytics'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <AnalyticsProvider>
          <App />
          <ConsentBanner />
        </AnalyticsProvider>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
=======
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
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
