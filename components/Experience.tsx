'use client'

import { Reveal } from './Reveal'
import { Section } from './Section'
import { useLang } from './LangProvider'

export function Experience() {
  const { t } = useLang()

  const EXPERIENCE = [
    { year: '2025 — now', co: t('exp_e1_co'), role: t('exp_e1_role'), desc: t('exp_e1_desc'), tags: ['C#', 'JavaScript', 'SQL', 'MS SQL', 'Git'] },
    { year: '2024',       co: t('exp_e2_co'), role: t('exp_e2_role'), desc: t('exp_e2_desc'), tags: ['React', 'Supabase', 'Gemini', 'Tailwind'] },
    { year: '2023',       co: t('exp_e3_co'), role: t('exp_e3_role'), desc: t('exp_e3_desc'), tags: ['ASP.NET Core', 'Stripe', 'Identity', 'Razor'] },
    { year: '2022',       co: t('exp_e4_co'), role: t('exp_e4_role'), desc: t('exp_e4_desc'), tags: ['Console apps', 'OOP', 'LINQ'] },
  ]

  return (
    <Section id="experience" label={t('exp_label')} title={t('exp_title')} kicker={t('exp_kicker')}>
      <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 32 }}>
        <Reveal>
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>{t('exp_git_label')}</div>
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
              {t('exp_closing')}
            </div>
          </div>
        </Reveal>

        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="timeline-row" style={{ display: 'grid', gridTemplateColumns: '90px 24px 1fr', gap: 16, paddingBottom: 28 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', paddingTop: 4 }}>{e.year}</div>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 6, left: 8, width: 9, height: 9, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent)' }} />
                  {i < EXPERIENCE.length - 1 && <span style={{ position: 'absolute', top: 22, bottom: -28, left: 12, width: 1, background: 'var(--line-strong)' }} />}
                </div>
                <div className="card" style={{ padding: 18 }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>{e.co}</div>
                  <div className="display" style={{ fontSize: 20, marginBottom: 6 }}>{e.role}</div>
                  <p style={{ margin: '0 0 10px', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{e.desc}</p>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {e.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
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
