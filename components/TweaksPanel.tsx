'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const ACCENT_OPTIONS = [
  { value: '#c8553d', label: 'Terracotta' },
  { value: '#c98a2c', label: 'Ochre'      },
  { value: '#6e7d52', label: 'Sage'       },
  { value: '#9e3d24', label: 'Rust'       },
]

const TYPE_OPTIONS = [
  { value: 'mono-serif', label: 'Mono + Serif'      },
  { value: 'all-mono',   label: 'All Mono'          },
  { value: 'plex',       label: 'Fraunces + Plex'   },
  { value: 'space',      label: 'Space Mono'        },
] as const

export function TweaksPanel() {
  const { theme, accent, typePair, setTheme, setAccent, setTypePair } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div
      className="mono"
      style={{
        position: 'fixed', bottom: 22, right: 22, zIndex: 100,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
      }}
    >
      {open && (
        <div
          className="card"
          style={{
            padding: 18, width: 240,
            boxShadow: '0 20px 50px -12px rgba(0,0,0,0.35)',
          }}
        >
          {/* Header */}
          <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>
            <span>// tweaks</span>
            <span style={{ color: 'var(--accent)' }}>v2026</span>
          </div>

          {/* Theme toggle */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>mode</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['light', 'dark'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setTheme(v)}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: 5,
                    border: '1px solid ' + (theme === v ? 'var(--accent)' : 'var(--line)'),
                    background: theme === v ? 'var(--accent)' : 'transparent',
                    color: theme === v ? 'var(--paper)' : 'var(--ink-2)',
                    fontSize: 12,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    transition: 'all .15s',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Accent colors */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>accent</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {ACCENT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAccent(opt.value)}
                  title={opt.label}
                  style={{
                    width: 28, height: 28,
                    borderRadius: '50%',
                    background: opt.value,
                    border: accent === opt.value ? `3px solid var(--ink)` : '2px solid transparent',
                    outline: accent === opt.value ? `2px solid ${opt.value}` : 'none',
                    outlineOffset: 2,
                    cursor: 'pointer',
                    transition: 'transform .12s',
                    transform: accent === opt.value ? 'scale(1.15)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>typography</div>
            <div style={{ display: 'grid', gap: 4 }}>
              {TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTypePair(opt.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: 5,
                    border: '1px solid ' + (typePair === opt.value ? 'var(--accent)' : 'var(--line)'),
                    background: typePair === opt.value ? 'color-mix(in oklab, var(--accent) 12%, transparent)' : 'transparent',
                    color: typePair === opt.value ? 'var(--ink)' : 'var(--ink-2)',
                    fontSize: 12,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    textAlign: 'left',
                    transition: 'all .15s',
                  }}
                >
                  {typePair === opt.value && <span style={{ color: 'var(--accent)', marginRight: 6 }}>✓</span>}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: 42, height: 42,
          borderRadius: '50%',
          background: 'var(--accent)',
          border: '2px solid var(--accent-2)',
          color: 'var(--paper)',
          fontSize: 18,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px -4px rgba(0,0,0,0.4)',
          transition: 'transform .2s, background .15s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
        aria-label="Toggle tweaks panel"
        title="Tweaks"
      >
        {open ? '✕' : '⚙'}
      </button>
    </div>
  )
}
