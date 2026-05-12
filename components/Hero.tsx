'use client'

import { useState, useEffect, useRef } from 'react'
import { Reveal } from './Reveal'

interface HeroProps {
  onJump: (id: string) => void
}

const BOOT_LINES = [
  { t: 'cmt',    text: '# initializing denis.dev — junior full-stack c# developer · react, ruse, bulgaria' },
  { t: 'prompt', text: 'whoami' },
  { t: 'out',    text: 'denis tsranski' },
  { t: 'prompt', text: 'cat /etc/profile' },
  { t: 'kv',     k: 'role',     v: 'junior full-stack c# developer · react' },
  { t: 'kv',     k: 'years',    v: '1 in production · 3 building things' },
  { t: 'kv',     k: 'stack',    v: 'c# · asp.net core · ms sql · react · tailwind · supabase' },
  { t: 'kv',     k: 'location', v: 'ruse, bulgaria  (utc+2)' },
  { t: 'kv',     k: 'status',   v: 'open to work →' },
  { t: 'prompt', text: 'ls ./projects' },
  { t: 'ls',     items: ['fashionshop/', 'joblyze/', 'README.md'] },
  { t: 'prompt', text: '' },
]

function BootLine({ line }: { line: typeof BOOT_LINES[number] }) {
  if (line.t === 'cmt')
    return <div className="t-cmt">{line.text}</div>
  if (line.t === 'prompt')
    return (
      <div>
        <span className="t-prompt">denis@tsranski</span>{' '}
        <span className="t-cmt">~/portfolio</span>{' '}
        <span style={{ color: '#e9dcc1' }}>$</span>{' '}
        {line.text}
      </div>
    )
  if (line.t === 'out')
    return <div style={{ color: '#e9dcc1' }}>{line.text}</div>
  if (line.t === 'kv')
    return (
      <div>
        <span className="t-key">{(line.k ?? '').padEnd(10, ' ')}</span>
        <span className="t-cmt">: </span>
        <span style={{ color: '#cfc4a8' }}>{line.v}</span>
      </div>
    )
  if (line.t === 'ls')
    return (
      <div style={{ display: 'flex', gap: 18, color: '#e9dcc1' }}>
        {(line.items ?? []).map((it, i) => (
          <span key={i} style={{ color: it.endsWith('/') ? 'var(--ochre)' : '#cfc4a8' }}>{it}</span>
        ))}
      </div>
    )
  return null
}

const MARQUEE_ITEMS = ['C#', 'ASP.NET CORE', 'ENTITY FRAMEWORK', 'MS SQL', 'REACT', 'TYPESCRIPT', 'TAILWIND', 'SUPABASE', 'GEMINI', 'GIT', 'STRIPE', 'IDENTITY', 'RAZOR', 'SQLITE', 'JS']

export function Hero({ onJump }: HeroProps) {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<{ cmd: string; out: string[] | null }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (step >= BOOT_LINES.length) { setDone(true); return }
    const line  = BOOT_LINES[step]
    const delay = line.t === 'cmt' ? 220 : line.t === 'prompt' ? 380 : 110
    const id    = setTimeout(() => setStep((s) => s + 1), delay)
    return () => clearTimeout(id)
  }, [step])

  useEffect(() => {
    if (done) inputRef.current?.focus()
  }, [done])

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [step, history])

  const runCommand = (raw: string) => {
    const cmd = raw.trim()
    const c   = cmd.toLowerCase()
    let out: string[] | null = null

    if (!cmd)               out = null
    else if (c === 'help' || c === '?') out = ['available:', '  about   skills   projects   contact   resume', '  clear   theme   joke']
    else if (c === 'about')    { onJump('about');    out = ['→ jumping to about…'] }
    else if (c === 'projects') { onJump('projects'); out = ['→ jumping to projects…'] }
    else if (c === 'skills')   { onJump('skills');   out = ['→ jumping to skills…'] }
    else if (c === 'contact')  { onJump('contact');  out = ['→ jumping to contact…'] }
    else if (c === 'resume')   { onJump('contact');  out = ['resume.pdf — download from /contact'] }
    else if (c === 'clear')    { setHistory([]); setInput(''); return }
    else if (c === 'theme')    {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      out = [`theme → ${next}`]
    }
    else if (c === 'joke')           out = ['why do c# devs hate nature?  too many bugs without a debugger.']
    else if (c === 'sudo rm -rf /') out = ['nice try.']
    else if (c.startsWith('cd '))   out = [`bash: cd: ${cmd.slice(3)}: nope, just scroll`]
    else                             out = [`command not found: ${cmd}    (try 'help')`]

    setHistory((h) => [...h, { cmd, out }])
    setInput('')
  }

  return (
    <section id="top" style={{ position: 'relative' }}>
      <div
        className="paper-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 70%)' }}
      />

      <div
        className="hero-grid"
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '60px 28px 80px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)',
          gap: 48,
          alignItems: 'center',
        }}
      >
        {/* Left: headline */}
        <div style={{ minWidth: 0 }}>
          <Reveal>
            <div className="sect-label">/ portfolio · v2026.05</div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="display"
              style={{ fontSize: 'clamp(40px, 6.4vw, 88px)', margin: '18px 0 8px', lineHeight: 1 }}
            >
              Denis<br />Tsranski<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 480, marginTop: 14 }}>
              Junior <strong>full-stack C# / .NET</strong> developer from Ruse, Bulgaria. I build server-rendered web apps with ASP.NET Core and pair them with React frontends — comfortable on either side of the wire.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
              <a
                className="btn btn-accent"
                href="#projects"
                onClick={(e) => { e.preventDefault(); onJump('projects') }}
              >
                <span>see my work</span>
                <span aria-hidden>→</span>
              </a>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => { e.preventDefault(); onJump('contact') }}
              >
                <span>get in touch</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div
              className="mono"
              style={{ marginTop: 36, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', fontSize: 12, color: 'var(--muted)' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#6e9d4a',
                  boxShadow: '0 0 0 4px color-mix(in oklab, #6e9d4a 25%, transparent)',
                }} />
                available · jun 2026
              </span>
              <span>·</span>
              <span>tip: type <span className="kbd">help</span> in the terminal →</span>
            </div>
          </Reveal>
        </div>

        {/* Right: terminal */}
        <Reveal delay={120}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div className="term" onClick={() => inputRef.current?.focus()}>
            <div className="term-bar">
              <span className="term-dot" style={{ background: '#e06c5b' }} />
              <span className="term-dot" style={{ background: '#d4a04a' }} />
              <span className="term-dot" style={{ background: '#8aa56a' }} />
              <span style={{ marginLeft: 10 }}>— denis@tsranski: ~/portfolio — zsh</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.7 }}>78×24</span>
            </div>

            <div
              ref={bodyRef}
              className="term-body"
              style={{ fontSize: 13.5, lineHeight: 1.7, maxHeight: 380, overflow: 'auto' }}
            >
              {BOOT_LINES.slice(0, step).map((line, i) => (
                <BootLine key={i} line={line} />
              ))}

              {history.map((h, i) => (
                <div key={`h${i}`}>
                  <div>
                    <span className="t-prompt">denis@tsranski</span>{' '}
                    <span className="t-cmt">~/portfolio</span>{' '}
                    <span style={{ color: '#e9dcc1' }}>$</span>{' '}
                    {h.cmd}
                  </div>
                  {h.out?.map((o, j) => (
                    <div key={j} style={{ color: '#cfc4a8' }}>{o}</div>
                  ))}
                </div>
              ))}

              {done && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="t-prompt">denis@tsranski</span>{' '}
                  <span className="t-cmt">~/portfolio</span>{' '}
                  <span style={{ color: '#e9dcc1' }}>$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runCommand(input) }}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#e9dcc1',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13.5,
                      caretColor: 'var(--accent)',
                    }}
                    spellCheck={false}
                    autoCapitalize="off"
                    aria-label="terminal input"
                  />
                </div>
              )}
              {!done && BOOT_LINES[step]?.t === 'prompt' && <span className="caret" />}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Marquee strip */}
      <Reveal>
        <div
          className="mono"
          style={{
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
            background: 'var(--bg-2)',
            padding: '10px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 12,
            color: 'var(--ink-2)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              gap: 36,
              paddingLeft: '100%',
              animation: 'marquee 38s linear infinite',
            }}
          >
            {Array(2).fill(MARQUEE_ITEMS).flat().map((t, i) => (
              <span key={i}>★ {t}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
