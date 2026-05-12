'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { Section } from './Section'

/* ============================================================
   SHARED UTILITIES
============================================================ */

function FeatureLine({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 8, padding: '10px 0', borderBottom: '1px dashed var(--line)' }}>
      <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{n}</span>
      <div>
        <div style={{ fontWeight: 600, fontSize: 13.5 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>{desc}</div>
      </div>
    </div>
  )
}

const miniBtn: React.CSSProperties = {
  border: '1px solid var(--line-strong)',
  background: 'var(--bg-2)',
  color: 'var(--ink)',
  fontSize: 11,
  padding: '3px 8px',
  borderRadius: 4,
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
}

function tabBtn(active: boolean): React.CSSProperties {
  return {
    border: '1px solid ' + (active ? 'var(--ink-2)' : 'var(--line)'),
    background: active ? 'var(--ink)' : 'transparent',
    color: active ? 'var(--paper)' : 'var(--ink-2)',
    fontSize: 11,
    padding: '4px 10px',
    borderRadius: 4,
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
  }
}

/* ============================================================
   FASHIONSHOP
============================================================ */

const FS_PRODUCTS = [
  { id: 1, name: 'Linen Field Shirt',      price: 64,  tag: 'New',      tone: '#d4a04a' },
  { id: 2, name: 'Heavy Knit Cardigan',    price: 128, tag: 'Hot',      tone: '#c8553d' },
  { id: 3, name: 'Wide-leg Wool Trousers', price: 96,  tag: null,       tone: '#8a6f5c' },
  { id: 4, name: 'Suede Derby Boots',      price: 184, tag: 'Low stock',tone: '#6e7d52' },
  { id: 5, name: 'Cashmere Crew Sweater',  price: 142, tag: null,       tone: '#a8723b' },
  { id: 6, name: 'Selvedge Denim 14oz',    price: 112, tag: 'Restock',  tone: '#3a4a6b' },
]

function ProductGlyph({ tone, idx }: { tone: string; idx: number }) {
  return (
    <svg viewBox="0 0 80 100" width="60%" height="60%" style={{ opacity: 0.7 }}>
      <defs>
        <pattern id={`stripes-${idx}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="3" height="6" fill={tone} opacity="0.5" />
        </pattern>
      </defs>
      {idx % 3 === 0 && <path d="M20 20 L40 8 L60 20 L60 90 L20 90 Z" fill={`url(#stripes-${idx})`} stroke={tone} strokeWidth="1.5" />}
      {idx % 3 === 1 && <rect x="18" y="14" width="44" height="76" rx="4" fill={`url(#stripes-${idx})`} stroke={tone} strokeWidth="1.5" />}
      {idx % 3 === 2 && <path d="M14 24 L30 14 L50 14 L66 24 L60 90 L20 90 Z" fill={`url(#stripes-${idx})`} stroke={tone} strokeWidth="1.5" />}
    </svg>
  )
}

function FashionShopCard() {
  const [cart, setCart] = useState<typeof FS_PRODUCTS>([])
  const [view, setView] = useState<'shop' | 'checkout' | 'done'>('shop')
  const [filter, setFilter] = useState<'all' | 'sale'>('all')

  const total = cart.reduce((s, it) => s + it.price, 0)
  const shown = FS_PRODUCTS.filter((p) => filter === 'all' || (filter === 'sale' && p.tag))

  return (
    <article className="card" style={{ overflow: 'hidden' }}>
      <header style={{ padding: '18px 20px', borderBottom: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)' }}>
            <span style={{ fontSize: 12 }}>project_01</span>
            <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }} />
            <span style={{ fontSize: 12 }}>shipped</span>
          </div>
          <h3 className="display" style={{ fontSize: 32, margin: '6px 0 8px' }}>
            FashionShop<span style={{ color: 'var(--accent)' }}>.</span>
          </h3>
          <p style={{ margin: 0, color: 'var(--ink-2)', maxWidth: 560 }}>
            A clean fashion storefront built with <strong>ASP.NET Core MVC</strong>. Product browsing, detail pages,
            cart, and a working Stripe checkout — modeled after the parts of an e-commerce flow I actually use.
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
            {['ASP.NET Core MVC', 'C#', 'Entity Framework', 'MS SQL', 'Identity', 'Stripe', 'Razor', 'Bootstrap'].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0, alignItems: 'center' }}>
          <a className="btn btn-accent" href="http://fashionshop.runasp.net/" target="_blank" rel="noreferrer">
            <span aria-hidden>↗</span><span>live</span>
          </a>
          <a className="btn" href="https://github.com/DenisBG312" target="_blank" rel="noreferrer">
            <span aria-hidden>↗</span><span>github</span>
          </a>
        </div>
      </header>

      <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)' }}>
        {/* Mini browser demo */}
        <div className="proj-demo" style={{ padding: 22, borderRight: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="mini-browser">
            <div className="mini-browser-bar">
              <span style={{ display: 'flex', gap: 4 }}>
                <span style={{ width: 8, height: 8, background: '#e06c5b', borderRadius: '50%' }} />
                <span style={{ width: 8, height: 8, background: '#d4a04a', borderRadius: '50%' }} />
                <span style={{ width: 8, height: 8, background: '#8aa56a', borderRadius: '50%' }} />
              </span>
              <span className="url">
                {`http://fashionshop.runasp.net/${view === 'shop' ? 'shop' : view === 'checkout' ? 'checkout' : 'order/3982'}`}
              </span>
              <span style={{ color: 'var(--muted)' }}>{cart.length} ★</span>
            </div>

            <div style={{ padding: 16, minHeight: 380 }}>
              {view === 'shop' && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button onClick={() => setFilter('all')}  style={tabBtn(filter === 'all')}>all</button>
                      <button onClick={() => setFilter('sale')} style={tabBtn(filter === 'sale')}>tagged</button>
                    </div>
                    {cart.length > 0 && (
                      <button className="btn btn-accent" style={{ padding: '6px 10px', fontSize: 12 }} onClick={() => setView('checkout')}>
                        checkout · ${total}
                      </button>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 10 }}>
                    {shown.map((p) => {
                      const inCart = cart.some((c) => c.id === p.id)
                      return (
                        <div key={p.id} style={{ border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', background: 'var(--paper)' }}>
                          <div style={{
                            aspectRatio: '4/5',
                            background: `linear-gradient(135deg, ${p.tone}33, ${p.tone}11)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative', borderBottom: '1px solid var(--line)',
                          }}>
                            <ProductGlyph tone={p.tone} idx={p.id} />
                            {p.tag && (
                              <span className="mono" style={{ position: 'absolute', top: 6, left: 6, fontSize: 9, padding: '2px 6px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: 3 }}>
                                {p.tag.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div style={{ padding: 8 }}>
                            <div style={{ fontSize: 11, lineHeight: 1.3, marginBottom: 4, fontWeight: 500 }}>{p.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>${p.price}</span>
                              <button
                                onClick={() => setCart((c) => inCart ? c.filter((x) => x.id !== p.id) : [...c, p])}
                                style={{
                                  ...miniBtn,
                                  background: inCart ? 'var(--accent)' : 'var(--bg-2)',
                                  color: inCart ? 'var(--paper)' : 'var(--ink)',
                                  borderColor: inCart ? 'var(--accent-2)' : 'var(--line-strong)',
                                }}
                              >
                                {inCart ? '✓' : '+ add'}
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </>
              )}

              {view === 'checkout' && (
                <div>
                  <button onClick={() => setView('shop')} style={{ ...miniBtn, marginBottom: 12 }}>← back</button>
                  <h4 className="display" style={{ fontSize: 18, margin: '0 0 10px' }}>Checkout</h4>
                  {cart.map((c) => (
                    <div key={c.id} className="mono" style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed var(--line)', fontSize: 12 }}>
                      <span>{c.name}</span><span>${c.price}</span>
                    </div>
                  ))}
                  <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontWeight: 600 }}>
                    <span>total</span><span>${total}</span>
                  </div>
                  <div className="mono" style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 6, padding: 10, marginTop: 8, fontSize: 11 }}>
                    <div style={{ color: 'var(--muted)', marginBottom: 4 }}>stripe payment</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <span style={{ flex: 1, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 3, padding: '4px 6px' }}>4242 4242 4242 4242</span>
                      <span style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 3, padding: '4px 6px' }}>05/30</span>
                    </div>
                  </div>
                  <button className="btn btn-accent" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }} onClick={() => setView('done')}>
                    pay ${total} →
                  </button>
                </div>
              )}

              {view === 'done' && (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
                  <div className="display" style={{ fontSize: 22, marginBottom: 6 }}>Order placed</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>confirmation #fs-3982 sent to your inbox</div>
                  <button className="btn" style={{ marginTop: 18 }} onClick={() => { setView('shop'); setCart([]) }}>← back to shop</button>
                </div>
              )}
            </div>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, textAlign: 'center' }}>
            ↑ a working demo of the flow — add items, check out, done.
          </div>
        </div>

        {/* Feature notes */}
        <aside className="proj-side" style={{ padding: 22, background: 'var(--paper)' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>// what i built</div>
          <FeatureLine n="01" title="Product catalog"  desc="EF Core models for products, variants, categories. Razor pages for browse + detail." />
          <FeatureLine n="02" title="Identity & auth"  desc="ASP.NET Identity with role-based admin area for managing inventory." />
          <FeatureLine n="03" title="Cart & sessions"  desc="Server-side cart tied to user — falls back to session for anonymous." />
          <FeatureLine n="04" title="Stripe checkout"  desc="Live payment intents, webhook order confirmation, receipt emails." />
          <FeatureLine n="05" title="Admin dashboard"  desc="CRUD for products, image uploads, order management." />

          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', margin: '18px 0 8px' }}>// what i learned</div>
          <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
            Modeling a real domain — products with variants, inventory, orders — is more honest than building a todo
            app twelve times. Stripe webhooks taught me to think about <em>eventual</em> consistency.
          </p>
        </aside>
      </div>
    </article>
  )
}

/* ============================================================
   JOBLYZE
============================================================ */

const JOB_MATCHES = [
  { co: 'Northwind Labs', role: 'Junior Backend (.NET)',  loc: 'Sofia · Hybrid',    match: 94, tags: ['C#', '.NET 8', 'Azure'] },
  { co: 'Riverstone',     role: 'Full-stack Developer',   loc: 'Remote · EU',       match: 88, tags: ['React', 'C#', 'EF'] },
  { co: 'Modular GmbH',   role: 'Software Engineer I',    loc: 'Berlin · Hybrid',   match: 81, tags: ['C#', 'gRPC', 'Postgres'] },
  { co: 'Cobalt Studio',  role: 'Junior Web Developer',   loc: 'Plovdiv · On-site', match: 76, tags: ['React', 'Tailwind', 'Supabase'] },
]

function MatchBadge({ score }: { score: number }) {
  const color = score >= 90 ? 'var(--accent)' : score >= 80 ? 'var(--ochre)' : 'var(--muted)'
  return (
    <div style={{ textAlign: 'right', flexShrink: 0 }}>
      <div className="mono" style={{ fontSize: 18, fontWeight: 700, color }}>{score}%</div>
      <div className="mono" style={{ fontSize: 9, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>match</div>
    </div>
  )
}

function ScoreDial({ score }: { score: number }) {
  const c   = 2 * Math.PI * 40
  const off = c * (1 - score / 100)
  return (
    <div style={{ position: 'relative', width: 100, height: 100, flexShrink: 0 }}>
      <svg viewBox="0 0 100 100" width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--line)" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" strokeWidth="6"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ transition: 'stroke-dashoffset .8s ease' }} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }} className="mono">
        <div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{score}</div>
          <div style={{ fontSize: 9, color: 'var(--muted)', textTransform: 'uppercase' }}>score</div>
        </div>
      </div>
    </div>
  )
}

function Spinner() {
  return (
    <span style={{
      display: 'inline-block', width: 10, height: 10,
      border: '2px solid currentColor', borderTopColor: 'transparent',
      borderRadius: '50%', animation: 'spin .8s linear infinite',
      marginRight: 6,
    }} />
  )
}

function ArchDiagram() {
  const node = (label: string, sub: string) => (
    <div style={{ border: '1px solid var(--line-strong)', borderRadius: 6, padding: '8px 10px', background: 'var(--bg-2)', textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: 11, fontWeight: 600 }}>{label}</div>
      <div className="mono" style={{ fontSize: 9, color: 'var(--muted)' }}>{sub}</div>
    </div>
  )
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, alignItems: 'center' }}>
        {node('React', 'client')}
        <div style={{ height: 1, background: 'var(--line-strong)', position: 'relative' }}>
          <span style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', background: 'var(--paper)', padding: '0 4px', fontSize: 9, color: 'var(--muted)' }} className="mono">https</span>
        </div>
        {node('Edge fn', 'supabase')}
      </div>
      <div style={{ height: 24, width: 1, background: 'var(--line-strong)', margin: '0 auto', position: 'relative' }}>
        <span style={{ position: 'absolute', top: '40%', left: 6, fontSize: 9, color: 'var(--muted)' }} className="mono">postgres</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, alignItems: 'center' }}>
        {node('Gemini', 'api')}
        <div style={{ height: 1, background: 'var(--line-strong)' }} />
        {node('Postgres', 'rls + auth')}
      </div>
    </div>
  )
}

type FeedbackData = { score: number; strengths: string[]; improvements: string[] }

function JoblyzeCard() {
  const [tab, setTab] = useState<'match' | 'resume' | 'cover'>('match')
  const [resume, setResume] = useState(
    'Junior C# / .NET developer, 1 yr experience. Built ASP.NET Core MVC e-commerce with Stripe; React + Supabase AI job tool. EF Core, SQL, identity. Based in Ruse, BG.'
  )
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [loading, setLoading] = useState(false)
  const [coverFor, setCoverFor] = useState(JOB_MATCHES[0])
  const [cover, setCover] = useState('')
  const [coverLoading, setCoverLoading] = useState(false)

  const FALLBACK_FEEDBACK: FeedbackData = {
    score: 78,
    strengths: ['Clear stack focus on .NET', 'Real shipped projects', 'Full-stack range'],
    improvements: ['Quantify project impact', 'Add a deployed URL', 'Tighten the opening line'],
  }

  const analyze = async () => {
    setLoading(true)
    setFeedback(null)
    await new Promise((r) => setTimeout(r, 1200))
    setFeedback(FALLBACK_FEEDBACK)
    setLoading(false)
  }

  const writeCover = async () => {
    setCoverLoading(true)
    setCover('')
    await new Promise((r) => setTimeout(r, 1400))
    setCover(
      `I'm writing to apply for the ${coverFor.role} position at ${coverFor.co}. With one year of professional .NET experience and projects spanning ASP.NET Core e-commerce and React + Supabase tools, I'm at the point where I'm looking for a team that builds things that ship — and ${coverFor.co} keeps showing up in conversations I trust. I'd bring careful, server-side instincts and a willingness to learn how your team actually works. I'd love to talk more.`
    )
    setCoverLoading(false)
  }

  return (
    <article className="card" style={{ overflow: 'hidden' }}>
      <header style={{ padding: '18px 20px', borderBottom: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)' }}>
            <span style={{ fontSize: 12 }}>project_02</span>
            <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }} />
            <span style={{ fontSize: 12 }}>in development</span>
          </div>
          <h3 className="display" style={{ fontSize: 32, margin: '6px 0 8px' }}>
            Joblyze<span style={{ color: 'var(--accent)' }}>.</span>
          </h3>
          <p style={{ margin: 0, color: 'var(--ink-2)', maxWidth: 560 }}>
            AI-powered job search &amp; career assistant. <strong>React + Supabase + Gemini.</strong> Resume scoring,
            cover letter generation, interview prep, smart matching — the tools I wished I&apos;d had when I started.
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
            {['React', 'Supabase', 'Gemini API', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Auth', 'Edge Functions'].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0, alignItems: 'center' }}>
          <a className="btn btn-accent" href="https://joblyze-ai.vercel.app/" target="_blank" rel="noreferrer">
            <span aria-hidden>↗</span><span>live</span>
          </a>
          <a className="btn" href="https://github.com/DenisBG312" target="_blank" rel="noreferrer">
            <span aria-hidden>↗</span><span>github</span>
          </a>
        </div>
      </header>

      <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)' }}>
        {/* Mini browser demo */}
        <div className="proj-demo" style={{ padding: 22, borderRight: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="mini-browser">
            <div className="mini-browser-bar">
              <span style={{ display: 'flex', gap: 4 }}>
                <span style={{ width: 8, height: 8, background: '#e06c5b', borderRadius: '50%' }} />
                <span style={{ width: 8, height: 8, background: '#d4a04a', borderRadius: '50%' }} />
                <span style={{ width: 8, height: 8, background: '#8aa56a', borderRadius: '50%' }} />
              </span>
              <span className="url">https://joblyze-ai.vercel.app/{tab}</span>
              <span className="mono" style={{ color: 'var(--muted)' }}>&gt; ai</span>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', background: 'var(--paper)' }}>
              {([
                { id: 'match',  label: 'smart match',  n: '01' },
                { id: 'resume', label: 'resume coach', n: '02' },
                { id: 'cover',  label: 'cover letter', n: '03' },
              ] as const).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="mono"
                  style={{
                    flex: 1, padding: '10px 12px',
                    border: 'none', background: 'transparent',
                    borderBottom: tab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
                    color: tab === t.id ? 'var(--ink)' : 'var(--muted)',
                    fontSize: 11.5, cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{t.n}</span> {t.label}
                </button>
              ))}
            </div>

            <div style={{ padding: 16, minHeight: 360, background: 'var(--paper)' }}>
              {/* Smart match tab */}
              {tab === 'match' && (
                <div style={{ display: 'grid', gap: 8 }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>
                    // 4 matches based on your profile
                  </div>
                  {JOB_MATCHES.map((j) => (
                    <div key={j.co} style={{ border: '1px solid var(--line)', borderRadius: 6, padding: 10, background: 'var(--bg-2)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600 }}>{j.role}</div>
                          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>{j.co} · {j.loc}</div>
                        </div>
                        <MatchBadge score={j.match} />
                      </div>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 }}>
                        {j.tags.map((t) => <span key={t} className="chip" style={{ fontSize: 10, padding: '2px 6px' }}>{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Resume coach tab */}
              {tab === 'resume' && (
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                    // paste your resume blurb · powered by ai
                  </div>
                  <textarea
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    className="input"
                    style={{ minHeight: 90, resize: 'vertical', fontSize: 12 }}
                  />
                  <button className="btn btn-accent" style={{ marginTop: 8 }} disabled={loading} onClick={analyze}>
                    {loading ? <><Spinner />analyzing…</> : <>analyze with AI →</>}
                  </button>
                  {feedback && (
                    <div style={{ marginTop: 12, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <ScoreDial score={feedback.score} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 4 }}>strengths</div>
                        {feedback.strengths.map((s, i) => <div key={i} style={{ fontSize: 12, marginBottom: 2 }}>✓ {s}</div>)}
                        <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', margin: '10px 0 4px' }}>improvements</div>
                        {feedback.improvements.map((s, i) => <div key={i} style={{ fontSize: 12, marginBottom: 2 }}>→ {s}</div>)}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Cover letter tab */}
              {tab === 'cover' && (
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                    // pick a match, generate an opener
                  </div>
                  <select
                    value={coverFor.co}
                    onChange={(e) => { const found = JOB_MATCHES.find((j) => j.co === e.target.value); if (found) setCoverFor(found) }}
                    className="input"
                    style={{ fontSize: 12 }}
                  >
                    {JOB_MATCHES.map((j) => (
                      <option key={j.co} value={j.co}>{j.role} — {j.co}</option>
                    ))}
                  </select>
                  <button className="btn btn-accent" style={{ marginTop: 8 }} disabled={coverLoading} onClick={writeCover}>
                    {coverLoading ? <><Spinner />writing…</> : <>generate opener →</>}
                  </button>
                  {cover && (
                    <div style={{ marginTop: 12, padding: 12, background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 6, fontSize: 12.5, lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink-2)' }}>
                      {cover}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, textAlign: 'center' }}>
            ↑ interactive demo — try the smart match, resume coach, and cover letter tabs
          </div>
        </div>

        {/* Architecture + features */}
        <aside className="proj-side" style={{ padding: 22, background: 'var(--paper)' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>// the architecture</div>
          <ArchDiagram />
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', margin: '18px 0 8px' }}>// what makes it interesting</div>
          <FeatureLine n="01" title="Prompt design as UX"   desc="Each tool has a system prompt tuned to return structured, parseable JSON." />
          <FeatureLine n="02" title="Supabase auth + RLS"   desc="Row-level security so users only see their own analyses & matches." />
          <FeatureLine n="03" title="Edge functions"        desc="Gemini calls run server-side to keep the API key off the client." />
          <FeatureLine n="04" title="Embeddings (wip)"      desc="Job matching prototype using vector similarity on job descriptions." />
        </aside>
      </div>
    </article>
  )
}

/* ============================================================
   PROJECTS SECTION
============================================================ */

export function Projects() {
  return (
    <Section
      id="projects"
      label="// 02 — projects"
      title="Things I've actually shipped."
      kicker="Two side-projects I keep returning to. Click around — the demos below are live, not screenshots."
    >
      <div style={{ display: 'grid', gap: 28 }}>
        <Reveal><FashionShopCard /></Reveal>
        <Reveal delay={80}><JoblyzeCard /></Reveal>
      </div>
    </Section>
  )
}
