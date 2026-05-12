'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'
import { Section } from './Section'

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
  return (
    <Section
      id="about"
      label="// 01 — about"
      title="A developer, mid-sentence."
      kicker="One year in production. A handful of side-projects. Lots of curiosity about how things are actually wired up."
    >
      <div
        className="about-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 32 }}
      >
        {/* Left: manifesto */}
        <Reveal>
          <div className="card" style={{ padding: 28 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: 'var(--ink)' }}>
              I started writing C# because I wanted to understand the{' '}
              <em style={{ color: 'var(--accent)' }}>boring middle</em> of an application — the part between a
              clicked button and a row in a database. A year of doing that for real has only made me more curious.
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              I gravitate toward server-side:{' '}
              <span className="mono">ASP.NET Core</span>, Entity Framework, MS SQL, identity &amp; auth, payment
              flows. On the side I&apos;ve been getting comfortable with React, Tailwind and Supabase — enough to
              ship full-stack things on my own.
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              Two projects on this site: a Stripe-integrated fashion storefront and an AI-assisted job platform.
              Different stacks, same instinct — ship something I&apos;d actually use, then keep refactoring until
              it stops embarrassing me.
            </p>
          </div>
        </Reveal>

        {/* Right: photo + quick-facts */}
        <Reveal delay={120}>
          <div style={{ display: 'grid', gap: 18 }}>
            {/* portrait card */}
            <div className="card" style={{ padding: 14, position: 'relative' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, border: '1px solid var(--line)' }}>
                <Image
                  src="/assets/denis-face.jpg"
                  alt="Denis Tsranski"
                  width={400}
                  height={500}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    filter: 'saturate(0.92) contrast(1.02)',
                  }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--paper) 60%, transparent))',
                  pointerEvents: 'none',
                }} />
                <span
                  className="mono"
                  style={{
                    position: 'absolute', top: 10, left: 10,
                    fontSize: 10, color: 'var(--paper)',
                    background: 'rgba(20,16,13,0.55)',
                    padding: '3px 7px', borderRadius: 3,
                    letterSpacing: '.04em',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  ● REC · denis@ruse
                </span>
                <span
                  className="mono"
                  style={{
                    position: 'absolute', bottom: 10, right: 10,
                    fontSize: 10, color: 'var(--ink)',
                    background: 'color-mix(in oklab, var(--paper) 85%, transparent)',
                    padding: '3px 7px', borderRadius: 3,
                  }}
                >
                  f/1.8 · 1/250s
                </span>
              </div>
              <div
                className="mono"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, fontSize: 11, color: 'var(--muted)' }}
              >
                <span>~/me/portrait.jpg</span>
                <span>2400×3000</span>
              </div>
            </div>

            {/* quick-facts */}
            <div className="card" style={{ padding: 24 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>
                ~/about/quick-facts.json
              </div>
              <div style={{ display: 'grid', gap: 4 }}>
                <Fact k="name"      v="Denis Tsranski" />
                <Fact k="based_in"  v="Ruse, BG" />
                <Fact k="role"      v="Jr Full-stack C# · React" />
                <Fact k="exp"       v="1 yr professional" />
                <Fact k="languages" v="🇧🇬 BG · 🇬🇧 EN" />
                <Fact k="focus"     v=".NET + AI side-quests" />
                <Fact k="caffeine"  v="3–4 cups/day" />
                <Fact k="open_to"   v="full-time roles" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
