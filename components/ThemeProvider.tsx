'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Accent = 'terracotta' | 'ochre' | 'sage' | 'rust'
type TypePair = 'mono-serif' | 'all-mono' | 'plex' | 'space'
type Theme = 'light' | 'dark'

const ACCENT_MAP: Record<string, Accent> = {
  '#c8553d': 'terracotta',
  '#c98a2c': 'ochre',
  '#6e7d52': 'sage',
  '#9e3d24': 'rust',
}

interface TweakState {
  theme: Theme
  accent: string
  typePair: TypePair
}

interface ThemeContextValue extends TweakState {
  setTheme: (v: Theme) => void
  setAccent: (v: string) => void
  setTypePair: (v: TypePair) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  accent: '#c8553d',
  typePair: 'mono-serif',
  setTheme: () => {},
  setAccent: () => {},
  setTypePair: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [accent, setAccentState] = useState('#c8553d')
  const [typePair, setTypePairState] = useState<TypePair>('mono-serif')

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.dataset.accent = ACCENT_MAP[accent.toLowerCase()] ?? 'terracotta'
    root.dataset.type = typePair
  }, [theme, accent, typePair])

  const setTheme = (v: Theme) => setThemeState(v)
  const setAccent = (v: string) => setAccentState(v)
  const setTypePair = (v: TypePair) => setTypePairState(v)

  return (
    <ThemeContext.Provider value={{ theme, accent, typePair, setTheme, setAccent, setTypePair }}>
      {children}
    </ThemeContext.Provider>
  )
}
