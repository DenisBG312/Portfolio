'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from './LangProvider'

interface NavProps {
  onJump: (id: string) => void
}

export function Nav({ onJump }: NavProps) {
  const [open, setOpen] = useState(false)
  const { lang, t, toggleLang } = useLang()

  const NAV_ITEMS = [
    { id: 'about',      n: '01', label: t('nav_about')      },
    { id: 'projects',   n: '02', label: t('nav_projects')   },
    { id: 'skills',     n: '03', label: t('nav_skills')     },
    { id: 'experience', n: '04', label: t('nav_experience') },
    { id: 'contact',    n: '05', label: t('nav_contact')    },
  ]

  const jump = (id: string) => {
    onJump(id)
    setOpen(false)
  }

  return (
    <nav className="nav">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); jump('top') }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <span style={{ display: 'inline-block', width: 22, height: 22, background: 'var(--accent)', borderRadius: 5, position: 'relative', flexShrink: 0 }}>
            <span style={{ position: 'absolute', inset: 4, border: '1.5px solid var(--paper)', borderRadius: 2 }} />
          </span>
          <span className="mono" style={{ fontWeight: 600, fontSize: 13 }}>denis@tsranski:~$</span>
        </a>

        <div style={{ flex: 1 }} />

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: 4, margin: 0, padding: 0 }}>
          {NAV_ITEMS.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => { e.preventDefault(); jump(it.id) }}
                className="mono"
                style={{
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: 6,
                  fontSize: 13,
                  color: 'var(--ink-2)',
                  display: 'inline-flex',
                  gap: 8,
                  alignItems: 'baseline',
                }}
              >
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>{it.n}</span>
                <span>{it.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="mono"
          title={lang === 'en' ? 'Switch to Bulgarian' : 'Превключи на английски'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 10px',
            border: '1px solid var(--line-strong)',
            borderRadius: 6,
            background: 'var(--bg-2)',
            color: 'var(--ink-2)',
            fontSize: 12,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            flexShrink: 0,
            transition: 'background .15s, border-color .15s',
          }}
        >
          <Image
            src={lang === 'en' ? '/assets/Flag_of_Bulgaria.png' : '/assets/Flag_of_Great_Britain_(1707–1800).svg.png'}
            alt={lang === 'en' ? 'Bulgarian flag' : 'British flag'}
            width={20}
            height={14}
            style={{ borderRadius: 2, objectFit: 'cover', display: 'block' }}
          />
          <span>{lang === 'en' ? 'BG' : 'EN'}</span>
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            width: 38,
            height: 38,
            background: 'transparent',
            border: '1px solid var(--line-strong)',
            borderRadius: 6,
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
          }}
        >
          <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)', transition: 'transform .2s, opacity .2s', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)', opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)', transition: 'transform .2s, opacity .2s', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mono" style={{ borderTop: '1px solid var(--line)', background: 'color-mix(in oklab, var(--bg) 95%, transparent)', backdropFilter: 'blur(10px)' }}>
          {NAV_ITEMS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => { e.preventDefault(); jump(it.id) }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', textDecoration: 'none', color: 'var(--ink)', borderBottom: '1px solid var(--line)', fontSize: 14 }}
            >
              <span style={{ color: 'var(--accent)', fontSize: 11, minWidth: 24 }}>{it.n}</span>
              <span>{it.label}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: 12 }}>→</span>
            </a>
          ))}
          {/* Language toggle in mobile menu */}
          <button
            onClick={toggleLang}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', width: '100%', textAlign: 'left', background: 'transparent', border: 'none', color: 'var(--ink-2)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
          >
            <Image
              src={lang === 'en' ? '/assets/Flag_of_Bulgaria.png' : '/assets/Flag_of_Great_Britain_(1707–1800).svg.png'}
              alt={lang === 'en' ? 'Bulgarian flag' : 'British flag'}
              width={22}
              height={15}
              style={{ borderRadius: 2, objectFit: 'cover', display: 'block' }}
            />
            <span>{lang === 'en' ? 'Превключи на Български' : 'Switch to English'}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
