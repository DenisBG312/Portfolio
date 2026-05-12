'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import { LangProvider } from '@/components/LangProvider'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Contact, Footer } from '@/components/Contact'
import { TweaksPanel } from '@/components/TweaksPanel'

function scrollToSection(id: string) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' })
}

export default function Page() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Nav onJump={scrollToSection} />
        <Hero onJump={scrollToSection} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        <TweaksPanel />
      </LangProvider>
    </ThemeProvider>
  )
}
