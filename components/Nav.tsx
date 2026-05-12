'use client'

interface NavProps {
  onJump: (id: string) => void
}

const NAV_ITEMS = [
  { id: 'about',      n: '01', label: 'about'      },
  { id: 'projects',   n: '02', label: 'projects'   },
  { id: 'skills',     n: '03', label: 'skills'     },
  { id: 'experience', n: '04', label: 'experience' },
  { id: 'contact',    n: '05', label: 'contact'    },
]

export function Nav({ onJump }: NavProps) {
  return (
    <nav className="nav">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); onJump('top') }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <span style={{ display: 'inline-block', width: 22, height: 22, background: 'var(--accent)', borderRadius: 5, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 4, border: '1.5px solid var(--paper)', borderRadius: 2 }} />
          </span>
          <span className="mono" style={{ fontWeight: 600, fontSize: 13 }}>denis@tsranski:~$</span>
        </a>

        <div style={{ flex: 1 }} />

        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: 4, margin: 0, padding: 0 }}>
          {NAV_ITEMS.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => { e.preventDefault(); onJump(it.id) }}
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
                  transition: 'color .15s',
                }}
              >
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>{it.n}</span>
                <span>{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
