'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { useLang } from './LangProvider'

function ContactRow({ k, v, href, copyText, copied, onCopy }: {
  k: string; v: string; href?: string
  copyText?: string; copied?: boolean; onCopy?: () => void
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '90px minmax(0, 1fr) auto', gap: 12, padding: '10px 0', borderBottom: '1px dashed var(--line)', alignItems: 'center' }}>
      <span className="mono" style={{ fontSize: 12, color: 'var(--accent)' }}>{k}</span>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
          className="mono" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {v}
        </a>
      ) : (
        <span className="mono" style={{ fontSize: 13, color: 'var(--ink-2)' }}>{v}</span>
      )}
      {onCopy && (
        <button onClick={onCopy} className="mono"
          style={{ border: '1px solid var(--line)', background: 'transparent', borderRadius: 4, padding: '2px 8px', fontSize: 10, color: 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          {copied ? '✓ copied' : 'copy'}
        </button>
      )}
    </div>
  )
}

export function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const copy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1400)
  }

  return (
    <Section id="contact" label={t('contact_label')} title={t('contact_title')} kicker={t('contact_kicker')}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 28 }}>
        <Reveal>
          <div className="card" style={{ padding: 28 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>{t('contact_dir_label')}</div>
            <ContactRow k="email"    v="denis.tsranski@gmail.com" href="mailto:denis.tsranski@gmail.com" copied={copied === 'email'} onCopy={() => copy('denis.tsranski@gmail.com', 'email')} />
            <ContactRow k="phone"    v="+359 88 538 4191"         href="tel:+359885384191"               copied={copied === 'phone'} onCopy={() => copy('+359885384191', 'phone')} />
            <ContactRow k="github"   v="github.com/DenisBG312"    href="https://github.com/DenisBG312" />
            <ContactRow k="linkedin" v="linkedin.com/in/denis-tsranski" href="https://www.linkedin.com/in/denis-tsranski/" />
            <ContactRow k="location" v={t('contact_loc')} />
            <hr className="rule" style={{ margin: '22px 0 18px' }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="btn btn-accent" href="mailto:denis.tsranski@gmail.com">
                <span aria-hidden>✉</span><span>{t('btn_email')}</span>
              </a>
              <a className="btn" href="#" onClick={(e) => { e.preventDefault(); alert('Drop a real CV at denis.tsranski@gmail.com') }}>
                <span aria-hidden>↓</span><span>{t('btn_resume')}</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="card" style={{ padding: 28 }} onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000) }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14 }}>{t('contact_form_label')}</div>
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', display: 'block' }}>{t('form_name')}</label>
            <input className="input" placeholder={t('form_name_ph')} style={{ marginTop: 4, marginBottom: 12 }} />
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', display: 'block' }}>{t('form_email')}</label>
            <input className="input" placeholder={t('form_email_ph')} type="email" style={{ marginTop: 4, marginBottom: 12 }} />
            <label className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', display: 'block' }}>{t('form_message')}</label>
            <textarea className="input" rows={5} placeholder={t('form_message_ph')} style={{ marginTop: 4, resize: 'vertical' }} />
            <button className="btn btn-accent" type="submit" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
              {sent ? t('form_sent') : t('form_send')}
            </button>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 8, textAlign: 'center' }}>{t('form_note')}</div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 60, padding: '36px 28px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{t('footer_copy')}</div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
          <span style={{ color: 'var(--accent)' }}>$</span> echo &quot;{t('footer_echo')}&quot;
        </div>
      </div>
    </footer>
  )
}
