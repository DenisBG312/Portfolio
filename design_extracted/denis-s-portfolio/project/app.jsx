/* global React, ReactDOM */
const { useState: useStateA, useEffect: useEffectA } = React;

const ACCENT_MAP = {
  '#c8553d': 'terracotta',
  '#c98a2c': 'ochre',
  '#6e7d52': 'sage',
  '#9e3d24': 'rust',
};

function applyTweaks(t) {
  document.documentElement.dataset.theme = t.theme;
  document.documentElement.dataset.type = t.typePair;
  document.documentElement.dataset.accent = ACCENT_MAP[String(t.accent).toLowerCase()] || 'terracotta';
}

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);

  useEffectA(() => { applyTweaks(t); }, [t]);

  const jump = (id) => {
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (!el) return;
    const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <Nav onJump={jump} />
      <Hero onJump={jump} />
      <About />
      <Projects onJump={jump} />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark',  label: 'Dark'  },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={['#c8553d', '#c98a2c', '#6e7d52', '#9e3d24']}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Pairing"
          value={t.typePair}
          options={[
            { value: 'mono-serif', label: 'Mono + Serif' },
            { value: 'all-mono',   label: 'All Mono'     },
            { value: 'plex',       label: 'Fraunces + Plex' },
            { value: 'space',      label: 'Space Mono'   },
          ]}
          onChange={(v) => setTweak('typePair', v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
