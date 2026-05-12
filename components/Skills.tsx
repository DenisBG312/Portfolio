'use client'

import { useState, useEffect } from 'react'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { useLang } from './LangProvider'

const SKILLS_DATA = [
  {
    groupKey: 'skills_backend' as const,
    items: [
      { name: 'C#',               level: 88, note: 'daily driver' },
      { name: 'ASP.NET Core MVC', level: 85, note: 'razor + identity' },
      { name: 'Entity Framework', level: 78, note: 'code-first' },
      { name: 'MS SQL',           level: 72, note: 'joins, indexes' },
      { name: 'REST APIs',        level: 80, note: 'design + consume' },
    ],
  },
  {
    groupKey: 'skills_frontend' as const,
    items: [
      { name: 'React',           level: 75, note: 'hooks · context' },
      { name: 'JavaScript / TS', level: 72, note: 'modern es' },
      { name: 'Tailwind CSS',    level: 80, note: 'utility-first' },
      { name: 'HTML / CSS',      level: 86, note: 'fluent' },
    ],
  },
  {
    groupKey: 'skills_tooling' as const,
    items: [
      { name: 'Supabase',         level: 70, note: 'auth + edge fns' },
      { name: 'Git',              level: 78, note: 'rebase pls' },
      { name: 'Stripe',           level: 65, note: 'checkout + webhooks' },
      { name: 'Gemini / AI APIs', level: 68, note: 'prompt + parse' },
    ],
  },
]

function SkillBar({ s }: { s: { name: string; level: number; note: string } }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(s.level), 80); return () => clearTimeout(t) }, [s.level])
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>{s.note}</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-3)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${w}%`, background: 'linear-gradient(90deg, var(--accent), var(--ochre))', borderRadius: 3, transition: 'width 1.1s cubic-bezier(.2,.7,.2,1)' }} />
      </div>
    </div>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display" style={{ fontSize: 38, lineHeight: 1, color: 'var(--accent)' }}>{n}</div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

export function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" label={t('skills_label')} title={t('skills_title')} kicker={t('skills_kicker')}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 22 }}>
        {SKILLS_DATA.map((g, i) => (
          <Reveal key={g.groupKey} delay={i * 80}>
            <div className="card" style={{ padding: 22 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>
                <span>// {t(g.groupKey)}</span>
                <span>0x0{i + 1}</span>
              </div>
              <div style={{ display: 'grid', gap: 14 }}>
                {g.items.map((s) => <SkillBar key={s.name} s={s} />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="card stats-grid" style={{ marginTop: 22, padding: 22, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 18 }}>
          <Stat n="2"    label={t('stat_projects')} />
          <Stat n="1 yr" label={t('stat_pro')} />
          <Stat n="∞"    label={t('stat_coffee')} />
          <Stat n="0"    label={t('stat_outages')} />
        </div>
      </Reveal>
    </Section>
  )
}
