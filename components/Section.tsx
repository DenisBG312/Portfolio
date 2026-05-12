'use client'

import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  label: string
  title: string
  kicker?: string
  children: ReactNode
}

export function Section({ id, label, title, kicker, children }: SectionProps) {
  return (
    <section id={id} style={{ position: 'relative', padding: '90px 28px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', minWidth: 0, width: '100%' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 30, flexWrap: 'wrap' }}>
            <div>
              <div className="sect-label mono">{label}</div>
              <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '10px 0 6px' }}>{title}</h2>
              {kicker && (
                <p className="mono" style={{ color: 'var(--muted)', maxWidth: 580, fontSize: 13, margin: 0 }}>{kicker}</p>
              )}
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
