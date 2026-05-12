'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { useLang } from './LangProvider'

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <span className="mono" style={{ color: 'var(--accent)', minWidth: 96, fontSize: 13 }}>{k}</span>
      <span className="mono" style={{ color: 'var(--muted)', fontSize: 13 }}>=</span>
      <span className="mono" style={{ color: 'var(--ink-2)', fontSize: 13 }}>{v}</span>
    </div>
  )
}

export function About() {
  const { t } = useLang()

  return (
    <Section id="about" label={t('about_label')} title={t('about_title')} kicker={t('about_kicker')}>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 32 }}>
        <Reveal>
          <div className="card" style={{ padding: 28 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: 'var(--ink)' }}>
              {t('about_p1').split(t('about_p1_em'))[0]}
              <em style={{ color: 'var(--accent)' }}>{t('about_p1_em')}</em>
              {t('about_p1').split(t('about_p1_em'))[1]}
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              {t('about_p2')}
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              {t('about_p3')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ display: 'grid', gap: 18 }}>
            <div className="card" style={{ padding: 14 }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, border: '1px solid var(--line)' }}>
                <Image
                  src="/assets/denis-face.jpg"
                  alt="Denis Tsranski"
                  width={400}
                  height={500}
                  style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover', filter: 'saturate(0.92) contrast(1.02)' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--paper) 60%, transparent))', pointerEvents: 'none' }} />
                <span className="mono" style={{ position: 'absolute', top: 10, left: 10, fontSize: 10, color: 'var(--paper)', background: 'rgba(20,16,13,0.55)', padding: '3px 7px', borderRadius: 3, letterSpacing: '.04em', backdropFilter: 'blur(4px)' }}>
                  ● REC · denis@ruse
                </span>
                <span className="mono" style={{ position: 'absolute', bottom: 10, right: 10, fontSize: 10, color: 'var(--ink)', background: 'color-mix(in oklab, var(--paper) 85%, transparent)', padding: '3px 7px', borderRadius: 3 }}>
                  f/1.8 · 1/250s
                </span>
              </div>
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, fontSize: 11, color: 'var(--muted)' }}>
                <span>~/me/portrait.jpg</span>
                <span>2400×3000</span>
              </div>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>~/about/quick-facts.json</div>
              <div style={{ display: 'grid', gap: 4 }}>
                <Fact k="name"      v="Denis Tsranski" />
                <Fact k="based_in"  v="Ruse, BG" />
                <Fact k="role"      v={t('about_fact_role')} />
                <Fact k="exp"       v={t('about_fact_exp')} />
                <Fact k="languages" v="🇧🇬 BG · 🇬🇧 EN" />
                <Fact k="focus"     v={t('about_fact_focus')} />
                <Fact k="caffeine"  v={t('about_fact_caffeine')} />
                <Fact k="open_to"   v={t('about_fact_open_to')} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
