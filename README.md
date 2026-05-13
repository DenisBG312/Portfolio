<div align="center">

# Denis Tsranski — Portfolio

**Junior Full-Stack Developer · C# / .NET · React**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A fully custom, interactive developer portfolio with a terminal aesthetic, dark/light theming, accent-color customization, and bilingual support (English / Bulgarian).

[Live Demo](https://denistsranski.vercel.app/) · [Contact](mailto:bgdenibg@gmail.com)

</div>

---

## Overview

This portfolio is a single-page application showcasing my work as a full-stack developer. It features an interactive terminal, scroll-reveal animations, a live theme/typography tweaks panel, and complete translations into English and Bulgarian.

```
$ cat /whoami
Denis Tsranski — Junior Full-Stack C# / .NET Developer, Sofia, Bulgaria
Open to work · 2 shipped projects · ∞ coffee consumed · 0 outages
```

---

## Features

| Feature | Details |
|---|---|
| **Interactive Terminal** | Boot animation on load; run `help`, `about`, `projects`, `skills`, `contact`, `theme`, `joke` |
| **Live Tweaks Panel** | Toggle light/dark mode, pick from 4 accent palettes, switch between 4 font pairs — no reload |
| **Bilingual i18n** | Full English / Bulgarian translations via a custom React context (`useLang`) |
| **Scroll Reveal** | `IntersectionObserver`-powered entrance animations on every section |
| **Project Showcases** | Embedded interactive demos for FashionShop and Joblyze |
| **Responsive** | Mobile-first layout with hamburger nav; fluid typography using CSS `clamp()` |
| **Design Token System** | CSS custom properties for colors, shadows, and font stacks — all driven by `data-*` attributes |

---

## Tech Stack

### Frontend
- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5** — strict mode throughout
- **Tailwind CSS 4** via PostCSS
- **Google Fonts** — JetBrains Mono, Instrument Serif, Fraunces, IBM Plex Mono, Space Mono

### Architecture
- Client-side components with React Context for theme and language state
- CSS variables for runtime theming (no JavaScript color interpolation needed)
- `IntersectionObserver` for performant scroll animations
- Clipboard API for one-click contact copying

---

## Project Highlights

### FashionShop — ASP.NET Core E-Commerce
> Full-stack online store built with C# / ASP.NET Core MVC

- Product catalog backed by Entity Framework Core + MS SQL
- Stripe checkout integration
- ASP.NET Identity authentication & authorization
- Admin dashboard with full CRUD

### Joblyze — AI Job Assistant
> React + Supabase + Google Gemini

- Resume scoring and gap analysis
- AI-generated cover letters tailored to job descriptions
- Smart job matching based on skills profile
- Real-time data via Supabase

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Clone
git clone https://github.com/DenisBG312/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build for production
npm run build

# Run production build
npm start

# Lint
npm run lint
```

---

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Entry point — assembles all sections
│   └── globals.css       # Design tokens, animations, base styles
├── components/
│   ├── Hero.tsx          # Terminal boot animation + interactive CLI
│   ├── Nav.tsx           # Sticky nav with language toggle
│   ├── About.tsx         # Bio, portrait, quick-facts file listing
│   ├── Projects.tsx      # FashionShop & Joblyze showcases
│   ├── Skills.tsx        # Animated skill bars by category
│   ├── Experience.tsx    # Timeline + git-log display
│   ├── Contact.tsx       # Contact links & form
│   ├── TweaksPanel.tsx   # Floating theme/accent/typography panel
│   ├── ThemeProvider.tsx # Dark/light + accent context
│   ├── LangProvider.tsx  # EN/BG language context
│   ├── Reveal.tsx        # Scroll-reveal wrapper component
│   └── Section.tsx       # Reusable section wrapper
└── lib/
    └── i18n.ts           # All translations (150+ keys, EN + BG)
```

---

## Theming

The tweaks panel (bottom-right corner) lets visitors customize their experience:

| Setting | Options |
|---|---|
| **Color scheme** | Light / Dark |
| **Accent** | Terracotta · Ochre · Sage · Rust |
| **Typography** | Mono + Serif · All Mono · Fraunces + Plex · Space Mono |

All theme state is managed via CSS `data-*` attributes on `<html>`, so switching is instant with zero JS-driven style recalculation.

---

## Internationalization

Language is toggled via the flag button in the navbar. Translations live in [lib/i18n.ts](lib/i18n.ts) and are accessed with the `useLang()` hook:

```ts
const { t, toggleLang } = useLang()
// t('hero.cta') → "View my work" | "Вижте работата ми"
```

Adding a new language requires only adding a new key block to the translations object and a flag entry in the navbar.

---

## Contact

| | |
|---|---|
| **Email** | denis.tsranski@gmail.com |
| **GitHub** | [github.com/DenisBG312](https://github.com/DenisBG312) |
| **Location** | Ruse, Bulgaria |
| **Status** | Open to work |

---

<div align="center">

Built with Next.js · Designed & coded by Denis Tsranski

</div>
