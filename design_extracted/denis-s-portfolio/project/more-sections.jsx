/* global React */
const { useState: useStateR, useEffect: useEffectR } = React;

/* ---------------- SKILLS ---------------- */

const SKILLS = [
  { group: 'backend', items: [
    { name: 'C#',                level: 88, note: 'daily driver' },
    { name: 'ASP.NET Core MVC',  level: 85, note: 'razor + identity' },
    { name: 'Entity Framework',  level: 78, note: 'code-first' },
    { name: 'MS SQL',            level: 72, note: 'joins, indexes' },
    { name: 'REST APIs',         level: 80, note: 'design + consume' },
  ]},
  { group: 'frontend', items: [
    { name: 'React',             level: 75, note: 'hooks · context' },
    { name: 'JavaScript / TS',   level: 72, note: 'modern es' },
    { name: 'Tailwind CSS',      level: 80, note: 'utility-first' },
    { name: 'HTML / CSS',        level: 86, note: 'fluent' },
  ]},
  { group: 'tooling', items: [
    { name: 'Supabase',          level: 70, note: 'auth + edge fns' },
    { name: 'Git',               level: 78, note: 'rebase pls' },
    { name: 'Stripe',            level: 65, note: 'checkout + webhooks' },
    { name: 'Gemini / AI APIs',  level: 68, note: 'prompt + parse' },
  ]},
];

function Skills() {
  return (
    <Section id="skills" label="// 03 — skills" title="What's in the toolbox." kicker="Honest self-ratings. The bars are vibes; the projects are the proof.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 80}>
            <div className="card" style={{ padding: 22 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>
                <span>// {g.group}</span>
                <span>0x0{i+1}</span>
              </div>
              <div style={{ display: 'grid', gap: 14 }}>
                {g.items.map(s => <SkillBar key={s.name} s={s} />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card" style={{ marginTop: 22, padding: 22, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 18 }}>
          <Stat n="2" label="shipped projects" />
          <Stat n="1 yr" label="professional" />
          <Stat n="∞" label="cups of coffee" />
          <Stat n="0" label="known prod outages" />
        </div>
      </Reveal>
    </Section>
  );
}

function SkillBar({ s }) {
  const [w, setW] = useStateR(0);
  useEffectR(() => {
    const t = setTimeout(() => setW(s.level), 80);
    return () => clearTimeout(t);
  }, [s.level]);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>{s.note}</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-3)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
        <div style={{ height: '100%', width: `${w}%`, background: 'linear-gradient(90deg, var(--accent), var(--ochre))', borderRadius: 3, transition: 'width 1.1s cubic-bezier(.2,.7,.2,1)' }} />
      </div>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="display" style={{ fontSize: 38, lineHeight: 1, color: 'var(--accent)' }}>{n}</div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{label}</div>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */

const EXPERIENCE = [
  {
    year: '2025 — now',
    co: 'Current company',
    role: 'Junior Full-stack C# Developer · React',
    desc: 'Building and maintaining production .NET applications. Daily work across C#, ASP.NET Core, SQL, and code review. Shipping features end-to-end — from database migration to UI.',
    tags: ['C#', 'ASP.NET Core', 'EF', 'MS SQL', 'Git'],
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
];

function Experience() {
  return (
    <Section id="experience" label="// 04 — experience" title="The short version." kicker="A timeline of the things that taught me the most.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 32 }} className="exp-grid">
        <Reveal>
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>~/git log --oneline</div>
            <div className="card" style={{ padding: 18 }}>
              <div className="mono" style={{ fontSize: 12, lineHeight: 1.8 }}>
                <div><span style={{ color: 'var(--accent)' }}>a3f291</span> <span style={{ color: 'var(--ink-2)' }}>HEAD</span> · jr full-stack c# · react</div>
                <div><span style={{ color: 'var(--accent)' }}>9c2d1b</span> ship joblyze beta</div>
                <div><span style={{ color: 'var(--accent)' }}>5e4f88</span> ship fashionshop v1</div>
                <div><span style={{ color: 'var(--accent)' }}>1a0c33</span> first deployable app</div>
                <div><span style={{ color: 'var(--accent)' }}>init</span>   <span style={{ color: 'var(--muted)' }}>hello world</span></div>
              </div>
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 16 }}>
              i&apos;m at the part of the timeline where each commit is finally worth more than the last.
            </div>
          </div>
        </Reveal>

        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ display: 'grid', gridTemplateColumns: '90px 24px 1fr', gap: 16, paddingBottom: 28 }}>
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
                    {e.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [copied, setCopied] = useStateR(null);
  const copy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1400);
  };

  return (
    <Section id="contact" label="// 05 — contact" title="Let's talk." kicker="Open to junior / mid roles, ideally on a .NET-leaning team. Hybrid in Bulgaria or remote across EU.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 28 }} className="contact-grid">
        <Reveal>
          <div className="card" style={{ padding: 28 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>~/contact</div>
            <ContactRow
              k="email"
              v="denis.tsranski@gmail.com"
              href="mailto:denis.tsranski@gmail.com"
              copyText="denis.tsranski@gmail.com"
              copied={copied === 'email'}
              onCopy={() => copy('denis.tsranski@gmail.com', 'email')}
            />
            <ContactRow
              k="phone"
              v="+359 88 538 4191"
              href="tel:+359885384191"
              copyText="+359 88 538 4191"
              copied={copied === 'phone'}
              onCopy={() => copy('+359885384191', 'phone')}
            />
            <ContactRow
              k="github"
              v="github.com/DenisBG312"
              href="https://github.com/DenisBG312"
            />
            <ContactRow
              k="linkedin"
              v="linkedin.com/in/denis-tsranski"
              href="https://www.linkedin.com/in/denis-tsranski/"
            />
            <ContactRow
              k="location"
              v="Ruse, Bulgaria · UTC+2"
            />

            <hr className="rule" style={{ margin: '22px 0 18px' }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="btn btn-accent" href="mailto:denis.tsranski@gmail.com">
                <span aria-hidden>✉</span><span>send email</span>
              </a>
              <a className="btn" href="#" onClick={(e) => { e.preventDefault(); alert('Drop a real CV at denis.tsranski@gmail.com — placeholder for the live build.'); }}>
                <span aria-hidden>↓</span><span>download resume.pdf</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="card" style={{ padding: 28 }} onSubmit={(e) => { e.preventDefault(); copy('thanks', 'sent'); }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>// or send a message</div>
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>name</label>
            <input className="input" placeholder="who&apos;s asking?" style={{ marginTop: 4, marginBottom: 12 }} />
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>email</label>
            <input className="input" placeholder="you@company.com" type="email" style={{ marginTop: 4, marginBottom: 12 }} />
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>message</label>
            <textarea className="input" rows="5" placeholder="hi denis — we&apos;re hiring a junior .net dev…" style={{ marginTop: 4, resize: 'vertical' }} />
            <button className="btn btn-accent" type="submit" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
              {copied === 'sent' ? '✓ message queued (demo)' : 'send →'}
            </button>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 8, textAlign: 'center' }}>
              this form is decorative — please email directly for now.
            </div>
          </form>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function ContactRow({ k, v, href, onCopy, copied }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 12, padding: '10px 0', borderBottom: '1px dashed var(--line)', alignItems: 'center' }}>
      <span className="mono" style={{ fontSize: 12, color: 'var(--accent)' }}>{k}</span>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mono" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v}</a>
      ) : (
        <span className="mono" style={{ fontSize: 13, color: 'var(--ink-2)' }}>{v}</span>
      )}
      {onCopy && (
        <button onClick={onCopy} className="mono" style={{ border: '1px solid var(--line)', background: 'transparent', borderRadius: 4, padding: '2px 8px', fontSize: 10, color: 'var(--muted)', cursor: 'pointer' }}>
          {copied ? '✓ copied' : 'copy'}
        </button>
      )}
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 60, padding: '36px 28px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
          © 2026 denis tsranski · ruse, bg · built with care &amp; coffee
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
          <span style={{ color: 'var(--accent)' }}>$</span> echo "thanks for scrolling"
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Skills, Experience, Contact, Footer });
