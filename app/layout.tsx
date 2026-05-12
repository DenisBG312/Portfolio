import type { Metadata } from 'next'
import { JetBrains_Mono, Instrument_Serif, Fraunces, IBM_Plex_Mono, Space_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--jb-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--inst-serif',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--fraunces',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--ibm-plex',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Denis Tsranski — Junior Full-stack C# Developer',
  description: 'Portfolio of Denis Tsranski, Junior Full-stack C# / .NET developer from Ruse, Bulgaria.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-accent="terracotta"
      data-type="mono-serif"
      className={[
        jetbrainsMono.variable,
        instrumentSerif.variable,
        fraunces.variable,
        ibmPlexMono.variable,
        spaceMono.variable,
      ].join(' ')}
    >
      <head>
        <style>{`
          :root {
            --font-mono: var(--jb-mono, 'JetBrains Mono'), ui-monospace, monospace;
            --font-display: var(--inst-serif, 'Instrument Serif'), Georgia, serif;
            --font-body: var(--jb-mono, 'JetBrains Mono'), ui-monospace, monospace;
          }
          [data-type="mono-serif"] {
            --font-display: var(--inst-serif, 'Instrument Serif'), Georgia, serif;
            --font-body: var(--jb-mono, 'JetBrains Mono'), ui-monospace, monospace;
          }
          [data-type="all-mono"] {
            --font-display: var(--jb-mono, 'JetBrains Mono'), ui-monospace, monospace;
            --font-body: var(--jb-mono, 'JetBrains Mono'), ui-monospace, monospace;
          }
          [data-type="plex"] {
            --font-display: var(--fraunces, 'Fraunces'), Georgia, serif;
            --font-body: var(--ibm-plex, 'IBM Plex Mono'), ui-monospace, monospace;
          }
          [data-type="space"] {
            --font-display: var(--space-mono, 'Space Mono'), monospace;
            --font-body: var(--space-mono, 'Space Mono'), monospace;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
