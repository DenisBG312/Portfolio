'use client'

import { Reveal } from './Reveal'
import { Section } from './Section'

const EXPERIENCE = [
  {
    year: '2025 — now',
    co: 'Current company',
    role: 'Junior C# Developer',
    desc: 'Building and maintaining scripts that automate web data. Daily work across C#.',
    tags: ['C#', 'JavaScript', 'SQL', 'MS SQL', 'Git'],
  },
  {
    year: '2024',
    co: 'Self-directed',
    role: 'Built Joblyze',
    desc: 'React + Supabase + Gemini. AI resume coach, cover letter generation, and job matching. Designed the prompts, the schema, and the UX.',
    tags: ['React', 'Supabase', 'Gemini', 'Tailwind'],
  },
  {
    year: '2023',
    co: 'Self-directed',
    role: 'Built FashionShop',
    desc: 'Full-stack ASP.NET Core MVC e-commerce. Stripe checkout, identity, admin area, product catalog. My first real, full feature-set product.',
    tags: ['ASP.NET Core', 'Stripe', 'Identity', 'Razor'],
  },
  {
    year: '2022',
    co: 'Learning',
    role: 'First lines of C#',
    desc: 'Console apps, OOP fundamentals, then onto MVC and EF. The point at which it stopped feeling like school and started feeling like a craft.',
    tags: ['Console apps', 'OOP', 'LINQ'],
  },
]

export function Experience() {
  return (
    <Section
      id="experience"
      label="// 04 — experience"
      title="The short version."
      kicker="A timeline of the things that taught me the most."
    >
      <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 32 }}>
        {/* Left: sticky git log */}
        <Reveal>
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>
              ~/git log --oneline
            </div>
            <div className="card" style={{ padding: 18 }}>
              <div className="mono" style={{ fontSize: 12, lineHeight: 1.8 }}>
                <div><span style={{ color: 'var(--accent)' }}>a3f291</span> <span style={{ color: 'var(--ink-2)' }}>HEAD</span> · jr full-stack c# · react</div>
                <div><span style={{ color: 'var(--accent)' }}>9c2d1b</span> ship joblyze beta</div>
                <div><span style={{ color: 'var(--accent)' }}>5e4f88</span> ship fashionshop v1</div>
                <div><span style={{ color: 'var(--accent)' }}>1a0c33</span> first deployable app</div>
                <div><span style={{ color: 'var(--accent)' }}>init</span>{'   '}<span style={{ color: 'var(--muted)' }}>hello world</span></div>
              </div>
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 16 }}>
              i&apos;m at the part of the timeline where each commit is finally worth more than the last.
            </div>
          </div>
        </Reveal>

        {/* Right: timeline */}
        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ display: 'grid', gridTemplateColumns: '90px 24px 1fr', gap: 16, paddingBottom: 28 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', paddingTop: 4 }}>{e.year}</div>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute', top: 6, left: 8,
                    width: 9, height: 9,
                    background: 'var(--accent)', borderRadius: '50%',
                    boxShadow: '0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent)',
                  }} />
                  {i < EXPERIENCE.length - 1 && (
                    <span style={{
                      position: 'absolute', top: 22, bottom: -28, left: 12,
                      width: 1, background: 'var(--line-strong)',
                    }} />
                  )}
                </div>
                <div className="card" style={{ padding: 18 }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>{e.co}</div>
                  <div className="display" style={{ fontSize: 20, marginBottom: 6 }}>{e.role}</div>
                  <p style={{ margin: '0 0 10px', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{e.desc}</p>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {e.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
