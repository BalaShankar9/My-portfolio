# Portfolio Design Spec — Bala Sankar Bollineni

**Date:** 2026-03-31
**Status:** Approved
**Stack:** Next.js 16, Tailwind CSS, Framer Motion, Three.js (React Three Fiber), Geist font, Vercel deploy

---

## Overview

A dark, cinematic single-page portfolio that showcases 7 shipped products. No fake titles, no padding. The work speaks. Target audience: tech recruiters and hiring managers in the UK.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework, SSG, SEO |
| Tailwind CSS | Styling |
| Geist Sans + Geist Mono | Typography |
| Framer Motion | Scroll animations, hover states, page transitions |
| Three.js (React Three Fiber) | 3D particle hero background |
| next/image | Optimized images |
| @vercel/og | Dynamic OpenGraph images |
| Vercel | Hosting, zero-config deploy |

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | zinc-950 (#09090b) | Page background |
| Surface | zinc-900 (#18181b) | Cards, nav |
| Border | zinc-800 (#27272a) | Dividers, card borders |
| Text primary | zinc-100 (#f4f4f5) | Headings, body |
| Text muted | zinc-400 (#a1a1aa) | Secondary text, descriptions |
| Accent | indigo-500 (#6366f1) | CTAs, highlights, hover states |
| Accent glow | indigo-500/20 | Button glow, focus rings |

---

## Typography

| Element | Font | Size (desktop) | Weight |
|---------|------|-----------------|--------|
| Hero name | Geist Sans | 6-8rem | 700 |
| Section headings | Geist Sans | 3rem | 600 |
| Body text | Geist Sans | 1.125rem | 400 |
| Tech pills / metrics | Geist Mono | 0.875rem | 500 |
| Nav links | Geist Sans | 0.875rem | 500 |

---

## Sections

### 1. Hero (100vh)

**Background:** Three.js particle field — thousands of small white/indigo dots arranged in a topographic wave pattern. Particles are connected by faint lines when close. The field slowly undulates. Mouse movement creates a gravitational displacement ripple. Mobile fallback: CSS animated gradient mesh.

**Content (centered, left-aligned on desktop):**
- Name: `BALA SANKAR BOLLINENI` — staggered letter fade-in on load (Framer Motion, 50ms per letter)
- Tagline: `I taught myself to code, then shipped 7 products nobody asked me to build.` — zinc-400, fades in 200ms after name completes
- Two buttons (appear 400ms after tagline):
  - `See What I've Built` — ghost outline, zinc-100 border, hover: indigo fill
  - `Download CV` — solid indigo-500, hover: indigo-400

**Scroll behavior:** Particle field parallaxes upward at 0.5x scroll speed and fades to black over 200px. Name stays pinned for 50px of scroll then fades out.

**Bottom:** Single thin line (1px, zinc-600) pulses downward slowly — scroll indicator, no text.

---

### 2. Navigation (floating, appears after hero)

- Fixed top bar, zinc-950/80 background with backdrop-blur-xl
- Left: "BSB" monogram in Geist Mono
- Right: Projects / About / Contact — smooth scroll links
- Appears with a slide-down animation when user scrolls past hero
- Mobile: hamburger menu, full-screen overlay

---

### 3. Projects

**Heading:** `What I've Built` — section heading, left-aligned with a thin indigo accent line beneath.

#### Flagship Projects (4 total, alternating layout)

Each takes ~80vh, full-width. Alternates image-left/text-right and image-right/text-left.

**Per project:**
- Large screenshot in a dark browser chrome mockup, tilted ~2deg in 3D perspective, soft shadow
- Project name (large, Geist Sans 2.5rem bold)
- One-line pitch (zinc-400)
- Tech pills row (Geist Mono, zinc-800 bg, zinc-300 text, rounded)
- 3 metric callouts (Geist Mono, large number + label)
- "What I Solved" — one honest sentence about the hardest technical challenge (zinc-500 italic)
- Two links: `Live Demo` (if available) / `Source Code` (GitHub)

**Scroll animation:** Screenshot slides in from its side with a parallax offset (Framer Motion whileInView, spring physics). Text fades up with a 100ms delay.

**Project data:**

1. **HireStack AI**
   - Pitch: "6 AI agents build your entire job application in real-time"
   - Tech: Next.js, FastAPI, Supabase, Python, TypeScript
   - Metrics: 6 AI Agents / Enterprise Multi-tenant / Live at hirestack.tech
   - Links: hirestack.tech, github.com/BalaShankar9/hirestack-ai

2. **SponsorIntel**
   - Pitch: "The Bloomberg Terminal of UK immigration sponsor intelligence"
   - Tech: Next.js, FastAPI, PostgreSQL, Redis, Celery, Playwright
   - Metrics: 140K+ Companies / 17 Web Scrapers / Real-time Alerts
   - Links: sponsorintel.london, github.com/BalaShankar9/SponsorIntel

3. **CarpoolNetwork**
   - Pitch: "Ride-sharing platform with real-time messaging and geo intelligence"
   - Tech: React, Supabase, TypeScript, Tailwind CSS
   - Metrics: Real-time Chat / Admin Dashboard / Secure RPC Analytics
   - Links: carpoolnetwork.co.uk, github.com/BalaShankar9/CarpoolNetwork

4. **SecProbe**
   - Pitch: "10-module security testing toolkit for web apps and networks"
   - Tech: Python, CLI
   - Metrics: 10 Scanners / 3 Report Formats / CLI Native
   - Links: github.com/BalaShankar9/SecProbe

#### Secondary Projects (3 compact cards in a row)

Smaller cards (zinc-900 bg, zinc-800 border, rounded-xl). Each card:
- Name (Geist Sans 1.25rem bold)
- One-line description (zinc-400)
- Tech pills
- GitHub link icon

Projects:
- **ToolForge** — "Local-first tool factory that generates native macOS CLI executables" — Go
- **EdgeAbyss** — "Precision edge-riding game with physics and gamepad support" — C#, Unity
- **AI-Life-Ops** — "SOC2/GDPR-compliant monorepo scaffold with CI/CD" — TypeScript, Prisma

Cards have a subtle border-glow on hover (indigo-500/10).

---

### 4. How I Build

Three columns on desktop, stacked on mobile. Each column:
- Bold headline (Geist Sans, zinc-100)
- 2-sentence explanation (zinc-400)

| Ship Fast | Use AI Honestly | Solve Real Problems |
|-----------|----------------|-------------------|
| 7 products in under a year. I don't overthink — I build, ship, learn, iterate. | AI is my pair programmer, not my ghost writer. I understand every line that ships. | Every project started from a problem I or someone I know actually faced. No toy demos. |

Fade-in on scroll. No icons, no decorations — the words carry it.

---

### 5. About

**Split layout.** Left (40%): placeholder for photo or large stylized initial "B" in a zinc-900 circle with indigo border. Right (60%):

> I don't have a CS degree or a job title to point to. What I have is 7 shipped products — real systems with real users, real databases, real AI agents.
>
> I taught myself to code by building things that solve problems I actually had: finding UK visa sponsors, automating job applications, pooling rides with strangers.
>
> I use AI as a tool, not a crutch. Every project on this page is something I conceived, designed, built, and deployed myself.
>
> I'm looking for a team where output matters more than credentials.

**Location line below bio:** Cardiff, UK (with a subtle map pin icon)

---

### 6. Contact

**Full-width section**, zinc-950 bg.

**Status line:** `Currently open to opportunities` — small green dot + zinc-400 text

**Heading:** `Let's build something together.` — large, centered

**Links row (centered, horizontal on desktop):**
- Email (icon + address)
- GitHub (icon + username)
- LinkedIn (icon + profile, if available)
- `Download CV` button (solid indigo)

No contact form — forms on portfolio sites have near-zero conversion. Direct links are faster and more honest.

---

### 7. Footer

Minimal bar. Left: `Bala Sankar Bollineni 2026`. Right: small social icons (GitHub, LinkedIn, Email). Center: `Built with Next.js` in zinc-600.

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| < 768px (mobile) | Hero text scales to 3rem. Projects stack vertically (image on top, text below). Secondary cards stack. Nav becomes hamburger. Three.js replaced with CSS gradient. |
| 768-1024px (tablet) | Hero text scales to 4.5rem. Projects 60/40 split. Secondary cards 2+1 grid. |
| > 1024px (desktop) | Full layout as described. Max content width 1280px centered. |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1s |
| Largest Contentful Paint | < 2s |
| Total Bundle (JS) | < 150KB gzipped (Three.js lazy-loaded) |
| CLS | 0 |

---

## SEO

- `generateMetadata` on the page with title, description, keywords
- Dynamic OG image via `@vercel/og` — dark card with name + tagline
- `sitemap.ts` auto-generated
- `robots.ts` allowing all crawlers
- Semantic HTML (main, section, header, footer, nav, h1-h3)

---

## Profile Data (from CV and documents)

| Field | Value |
|-------|-------|
| Full Name | Bala Sankar Bollineni |
| Location | Cardiff, UK |
| Email | balashankarbollineni4@gmail.com |
| GitHub | github.com/BalaShankar9 |
| Website | carpoolnetwork.co.uk |
| Education | MA Digital Media Management — Sheffield Hallam University (2023) |

### Work History (honest framing)

- **OYO Hotels (UK), 2023-2024** — Project-based: maintained production websites, performance monitoring, analytics pipelines (GA4, GTM), technical SEO
- **SA Cakes Ltd, 2022-2023** — Internship: internal content/campaign systems, backend integrations
- **Independent Builder, 2022-Present** — Self-taught, shipped 7 products across AI agents, web scraping, ride-sharing, security tools, game dev, and Go CLI tools

### Portfolio positioning

The portfolio does NOT claim titles like "Senior Engineer" or list consultancy roles. It leads with shipped products and honest self-taught narrative. The work is the credential.

### Skills (derived from actual projects)

**Languages:** TypeScript, Python, Go, C#, JavaScript
**Frontend:** React, Next.js, Tailwind CSS
**Backend:** FastAPI, Node.js, NestJS, REST APIs
**Databases:** PostgreSQL, Supabase, Redis, Prisma
**Infrastructure:** Docker, Celery, GitHub Actions, Playwright, Nginx
**AI/ML:** Multi-agent systems, LLM integration, streaming pipelines
**Other:** CLI tooling, game development (Unity), web scraping

---

## File Structure (planned)

```
app/
  layout.tsx          — root layout, fonts, metadata
  page.tsx            — single page, imports all sections
  opengraph-image.tsx — dynamic OG image
  sitemap.ts
  robots.ts

components/
  hero/
    Hero.tsx
    ParticleField.tsx  — Three.js scene (lazy loaded)
  nav/
    Navbar.tsx
  projects/
    ProjectShowcase.tsx  — flagship project layout
    ProjectCard.tsx      — secondary project card
  about/
    About.tsx
    HowIBuild.tsx
  contact/
    Contact.tsx
  footer/
    Footer.tsx
  ui/
    TechPill.tsx
    MetricCallout.tsx
    Button.tsx
    SectionHeading.tsx

lib/
  projects.ts         — project data (typed, centralized)
  constants.ts        — site metadata, social links

public/
  resume.pdf
  projects/           — project screenshots
```
