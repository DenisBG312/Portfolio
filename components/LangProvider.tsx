'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang, type TKey } from '@/lib/i18n'

interface LangContextValue {
  lang: Lang
  t: (key: TKey) => string
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  t: (k) => translations.en[k],
  toggleLang: () => {},
})

export function useLang() {
  return useContext(LangContext)
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = (key: TKey): string => translations[lang][key]
  const toggleLang = () => setLang((l) => (l === 'en' ? 'bg' : 'en'))

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}
