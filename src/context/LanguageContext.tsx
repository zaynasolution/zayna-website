import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import en from '../i18n/en'
import ar from '../i18n/ar'

type Lang = 'en' | 'ar'

type I18nDict = Record<string, string>

type LanguageContextValue = {
  lang: Lang
  rtl: boolean
  t: (key: string) => string
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const DICTS: Record<Lang, I18nDict> = { en, ar }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const dict = DICTS[lang]
    return {
      lang,
      rtl: lang === 'ar',
      t: (key: string) => dict[key] ?? key,
      setLang: (l: Lang) => setLangState(l),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
