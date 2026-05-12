/* global React */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------------- helpers ---------------- */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = '', as: As = 'div', style }) {
  const ref = useReveal();
  return (
    <As ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </As>
  );
}

/* ---------------- NAV ---------------- */

function Nav({ onJump }) {
  const items = [
    { id: 'about', n: '01', label: 'about' },
    { id: 'projects', n: '02', label: 'projects' },
    { id: 'skills', n: '03', label: 'skills' },
    { id: 'experience', n: '04', label: 'experience' },
    { id: 'contact', n: '05', label: 'contact' },
  ];
  return (
    <nav className="nav">
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onJump('top'); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 22, height: 22, background: 'var(--accent)', borderRadius: 5, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 4, border: '1.5px solid var(--paper)', borderRadius: 2 }} />
          </span>
          <span className="mono" style={{ fontWeight: 600, fontSize: 13 }}>denis@tsranski:~$</span>
        </a>
        <div style={{ flex: 1 }} />
        <ul style={{ display: 'flex', listStyle: 'none', gap: 4, margin: 0, padding: 0 }} className="nav-links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => { e.preventDefault(); onJump(it.id); }}
                className="mono"
                style={{ textDecoration: 'none', padding: '8px 12px', borderRadius: 6, fontSize: 13, color: 'var(--ink-2)', display: 'inline-flex', gap: 8, alignItems: 'baseline' }}
              >
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>{it.n}</span>
                <span>{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */

const BOOT_LINES = [
  { t: 'cmt', text: '# initializing denis.dev — junior full-stack c# developer · react, ruse, bulgaria' },
  { t: 'prompt', text: 'whoami' },
  { t: 'out', text: 'denis tsranski' },
  { t: 'prompt', text: 'cat /etc/profile' },
  { t: 'kv', k: 'role',      v: 'junior full-stack c# developer · react' },
  { t: 'kv', k: 'years',     v: '1 in production · 3 building things' },
  { t: 'kv', k: 'stack',     v: 'c# · asp.net core · ms sql · react · tailwind · supabase' },
  { t: 'kv', k: 'location',  v: 'ruse, bulgaria  (utc+2)' },
  { t: 'kv', k: 'status',    v: 'open to work →' },
  { t: 'prompt', text: 'ls ./projects' },
  { t: 'ls', items: ['fashionshop/', 'joblyze/', 'README.md'] },
  { t: 'prompt', text: '' },
];

function Hero({ onJump }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (step >= BOOT_LINES.length) { setDone(true); return; }
    const line = BOOT_LINES[step];
    const delay = line.t === 'cmt' ? 220 : line.t === 'prompt' ? 380 : 110;
    const id = setTimeout(() => setStep(step + 1), delay);
    return () => clearTimeout(id);
  }, [step]);

  useEffect(() => {
    if (done) inputRef.current?.focus();
  }, [done]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [step, history]);

  const runCommand = (raw) => {
    const cmd = raw.trim();
    let out;
    const c = cmd.toLowerCase();
    if (!cmd) out = null;
    else if (c === 'help' || c === '?') out = ['available:', '  about   skills   projects   contact   resume', '  clear   theme   joke'];
    else if (c === 'about')    { onJump('about'); out = ['→ jumping to about…']; }
    else if (c === 'projects') { onJump('projects'); out = ['→ jumping to projects…']; }
    else if (c === 'skills')   { onJump('skills'); out = ['→ jumping to skills…']; }
    else if (c === 'contact')  { onJump('contact'); out = ['→ jumping to contact…']; }
    else if (c === 'resume')   { out = ['resume.pdf — download from /contact'] ; onJump('contact'); }
    else if (c === 'clear')    { setHistory([]); return; }
    else if (c === 'theme')    { document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; out = [`theme → ${document.documentElement.dataset.theme}`]; }
    else if (c === 'joke')     out = ['why do c# devs hate nature?  too many bugs without a debugger.'];
    else if (c === 'sudo rm -rf /') out = ['nice try.'];
    else if (c.startsWith('cd ')) out = [`bash: cd: ${cmd.slice(3)}: nope, just scroll`];
    else out = [`command not found: ${cmd}    (try 'help')`];

    setHistory(h => [...h, { cmd, out }]);
    setInput('');
  };

  return (
    <section id="top" style={{ position: 'relative' }}>
      <div className="paper-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 70%)' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '60px 28px 80px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 48, alignItems: 'center' }}>
        <div style={{ minWidth: 0 }}>
          <Reveal>
            <div className="sect-label">/ portfolio · v2026.05</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ fontSize: 'clamp(40px, 6.4vw, 88px)', margin: '18px 0 8px' }}>
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
              <a className="btn btn-accent" href="#projects" onClick={(e) => { e.preventDefault(); onJump('projects'); }}>
                <span>see my work</span>
                <span aria-hidden>→</span>
              </a>
              <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); onJump('contact'); }}>
                <span>get in touch</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ marginTop: 36, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', fontSize: 12, color: 'var(--muted)' }} className="mono">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6e9d4a', boxShadow: '0 0 0 4px color-mix(in oklab, #6e9d4a 25%, transparent)' }} />
                available · jun 2026
              </span>
              <span>·</span>
              <span>tip: type <span className="kbd">help</span> in the terminal →</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="term" onClick={() => inputRef.current?.focus()}>
            <div className="term-bar">
              <span className="term-dot" style={{ background: '#e06c5b' }} />
              <span className="term-dot" style={{ background: '#d4a04a' }} />
              <span className="term-dot" style={{ background: '#8aa56a' }} />
              <span style={{ marginLeft: 10 }}>— denis@tsranski: ~/portfolio — zsh</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.7 }}>78×24</span>
            </div>
            <div ref={bodyRef} className="term-body" style={{ fontSize: 13.5, lineHeight: 1.7, maxHeight: 380, overflow: 'auto' }}>
              {BOOT_LINES.slice(0, step).map((line, i) => <BootLine key={i} line={line} />)}

              {history.map((h, i) => (
                <div key={`h${i}`}>
                  <div><span className="prompt">denis@tsranski</span> <span className="cmt">~/portfolio</span> <span style={{ color: '#e9dcc1' }}>$</span> {h.cmd}</div>
                  {h.out && h.out.map((o, j) => <div key={j} style={{ color: '#cfc4a8' }}>{o}</div>)}
                </div>
              ))}

              {done && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="prompt">denis@tsranski</span> <span className="cmt">~/portfolio</span> <span style={{ color: '#e9dcc1' }}>$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runCommand(input); }}
                    style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#e9dcc1', fontFamily: 'var(--font-mono)', fontSize: 13.5, caretColor: 'var(--accent)' }}
                    spellCheck={false}
                    autoCapitalize="off"
                  />
                </div>
              )}
              {!done && BOOT_LINES[step]?.t === 'prompt' && <span className="caret" />}
            </div>
          </div>
        </Reveal>
      </div>

      {/* hero bottom strip */}
      <Reveal>
        <div className="mono" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--bg-2)', padding: '10px 0', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: 12, color: 'var(--ink-2)' }}>
          <div style={{ display: 'inline-flex', gap: 36, paddingLeft: '100%', animation: 'marquee 38s linear infinite' }}>
            {Array(2).fill(['C#', 'ASP.NET CORE', 'ENTITY FRAMEWORK', 'MS SQL', 'REACT', 'TYPESCRIPT', 'TAILWIND', 'SUPABASE', 'GEMINI', 'GIT', 'STRIPE', 'IDENTITY', 'RAZOR', 'SQLITE', 'JS']).flat().map((t, i) => (
              <span key={i}>★ {t}</span>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </Reveal>
    </section>
  );
}

function BootLine({ line }) {
  if (line.t === 'cmt')    return <div className="cmt">{line.text}</div>;
  if (line.t === 'prompt') return <div><span className="prompt">denis@tsranski</span> <span className="cmt">~/portfolio</span> <span style={{ color: '#e9dcc1' }}>$</span> {line.text}</div>;
  if (line.t === 'out')    return <div style={{ color: '#e9dcc1' }}>{line.text}</div>;
  if (line.t === 'kv')     return <div><span className="key">{line.k.padEnd(10, ' ')}</span><span className="cmt">: </span><span style={{ color: '#cfc4a8' }}>{line.v}</span></div>;
  if (line.t === 'ls')     return (
    <div style={{ display: 'flex', gap: 18, color: '#e9dcc1' }}>
      {line.items.map((it, i) => <span key={i} style={{ color: it.endsWith('/') ? 'var(--ochre)' : '#cfc4a8' }}>{it}</span>)}
    </div>
  );
  return null;
}

/* ---------------- SECTION CHROME ---------------- */

function Section({ id, label, title, kicker, children }) {
  return (
    <section id={id} style={{ position: 'relative', padding: '90px 28px 30px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 30, flexWrap: 'wrap' }}>
            <div>
              <div className="sect-label mono">{label}</div>
              <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '10px 0 6px' }}>{title}</h2>
              {kicker && <p className="mono" style={{ color: 'var(--muted)', maxWidth: 580, fontSize: 13 }}>{kicker}</p>}
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <Section id="about" label="// 01 — about" title="A developer, mid-sentence." kicker="One year in production. A handful of side-projects. Lots of curiosity about how things are actually wired up.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 32 }} className="about-grid">
        <Reveal>
          <div className="card" style={{ padding: 28 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, color: 'var(--ink)' }}>
              I started writing C# because I wanted to understand the <em style={{ color: 'var(--accent)' }}>boring middle</em> of an application — the part between a clicked button and a row in a database. A year of doing that for real has only made me more curious.
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              I gravitate toward server-side: <span className="mono">ASP.NET Core</span>, Entity Framework, MS SQL, identity & auth, payment flows. On the side I&apos;ve been getting comfortable with React, Tailwind and Supabase — enough to ship full-stack things on my own.
            </p>
            <hr className="rule" style={{ margin: '22px 0' }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, color: 'var(--ink-2)' }}>
              Two projects on this site: a Stripe-integrated fashion storefront and an AI-assisted job platform. Different stacks, same instinct — ship something I&apos;d actually use, then keep refactoring until it stops embarrassing me.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ display: 'grid', gap: 18 }}>
            <div className="card" style={{ padding: 14, position: 'relative' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, border: '1px solid var(--line)' }}>
                <img
                  src="assets/denis-face.jpg?v=2"
                  alt="Denis Tsranski"
                  style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover', filter: 'saturate(0.92) contrast(1.02)' }}
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
              <div className="mono" style={{ fontSize: 13, lineHeight: 1.9 }}>
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
      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function Fact({ k, v }) {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <span className="key" style={{ color: 'var(--accent)', minWidth: 96 }}>{k}</span>
      <span style={{ color: 'var(--muted)' }}>=</span>
      <span style={{ color: 'var(--ink-2)' }}>{v}</span>
    </div>
  );
}

Object.assign(window, { Nav, Hero, Section, About, Reveal });
