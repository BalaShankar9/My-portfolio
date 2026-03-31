# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark, cinematic single-page portfolio for Bala Sankar Bollineni showcasing 7 shipped products, with Three.js particle hero, Framer Motion scroll animations, and Vercel deploy.

**Architecture:** Next.js 16 App Router with full SSG. Single page (`app/page.tsx`) imports section components. Three.js lazy-loaded for hero background. Framer Motion handles all scroll/hover animations. Project data centralized in `lib/projects.ts`. No backend, no API routes.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Three.js (React Three Fiber), Geist font, @vercel/og

---

## File Structure

```
app/
  layout.tsx              — Root layout: fonts, metadata, body classes
  page.tsx                — Single page composing all sections
  globals.css             — Tailwind imports + custom CSS vars
  opengraph-image.tsx     — Dynamic OG image generation
  sitemap.ts              — Auto sitemap
  robots.ts               — Crawler rules

components/
  hero/
    hero.tsx              — Hero section with name, tagline, CTAs
    particle-field.tsx    — Three.js R3F scene (lazy loaded via dynamic import)
  nav/
    navbar.tsx            — Floating glass navbar, appears after hero scroll
  projects/
    project-showcase.tsx  — Single flagship project (alternating layout)
    project-card.tsx      — Compact secondary project card
    projects-section.tsx  — Full projects section orchestrator
  how-i-build/
    how-i-build.tsx       — Three-column philosophy section
  about/
    about.tsx             — Bio + photo placeholder
  contact/
    contact.tsx           — Contact links + availability status
  footer/
    footer.tsx            — Minimal footer
  ui/
    tech-pill.tsx         — Tech stack pill badge
    metric-callout.tsx    — Large number + label metric
    section-heading.tsx   — Reusable section heading with accent line
    scroll-reveal.tsx     — Framer Motion whileInView wrapper

lib/
  projects.ts             — Typed project data array
  constants.ts            — Site metadata, social links, contact info

public/
  resume.pdf              — Downloadable CV (placeholder initially)
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/balabollineni/My portfolio"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Select defaults when prompted. This creates the Next.js 16 scaffold with Tailwind v4 and App Router.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion three @react-three/fiber @react-three/drei @vercel/og lucide-react
npm install -D @types/three
```

- `framer-motion` — scroll animations, hover states, staggered reveals
- `three` + `@react-three/fiber` + `@react-three/drei` — 3D particle hero
- `@vercel/og` — dynamic OpenGraph image generation
- `lucide-react` — minimal icons (GitHub, Mail, MapPin, ExternalLink)

- [ ] **Step 3: Configure Geist fonts in layout**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bala Sankar Bollineni — Builder",
  description:
    "Self-taught builder. 7 products shipped. TypeScript, Python, AI agents, and more.",
  keywords: [
    "Bala Sankar Bollineni",
    "portfolio",
    "full stack developer",
    "TypeScript",
    "Next.js",
    "Python",
    "AI agents",
    "Cardiff",
  ],
  authors: [{ name: "Bala Sankar Bollineni" }],
  openGraph: {
    title: "Bala Sankar Bollineni — Builder",
    description:
      "I taught myself to code, then shipped 7 products nobody asked me to build.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Set up globals.css**

Replace `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --accent: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.2);
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #09090b;
}
::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}
```

- [ ] **Step 5: Create placeholder page**

Replace `app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold font-mono text-zinc-400">
        Building...
      </h1>
    </main>
  );
}
```

- [ ] **Step 6: Verify dev server starts**

```bash
npm run dev
```

Open http://localhost:3000 — should see "Building..." centered on a dark background with Geist Mono font.

- [ ] **Step 7: Initialize git and commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 16 portfolio with Tailwind, Framer Motion, Three.js deps"
```

---

### Task 2: Data Layer — Projects & Constants

**Files:**
- Create: `lib/projects.ts`, `lib/constants.ts`

- [ ] **Step 1: Create constants file**

Create `lib/constants.ts`:

```tsx
export const SITE = {
  name: "Bala Sankar Bollineni",
  title: "Bala Sankar Bollineni — Builder",
  description:
    "I taught myself to code, then shipped 7 products nobody asked me to build.",
  url: "https://balabollineni.dev", // Update when domain is set
} as const;

export const SOCIAL = {
  github: "https://github.com/BalaShankar9",
  email: "balashankarbollineni4@gmail.com",
  linkedin: "", // Add when available
} as const;

export const CONTACT = {
  location: "Cardiff, UK",
  availability: "Currently open to opportunities",
} as const;
```

- [ ] **Step 2: Create typed project data**

Create `lib/projects.ts`:

```tsx
export type Project = {
  slug: string;
  name: string;
  pitch: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  whatISolved: string;
  links: { live?: string; source: string };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "hirestack-ai",
    name: "HireStack AI",
    pitch: "6 AI agents build your entire job application in real-time",
    tech: ["Next.js", "FastAPI", "Supabase", "Python", "TypeScript"],
    metrics: [
      { value: "6", label: "AI Agents" },
      { value: "Multi", label: "Tenant Enterprise" },
      { value: "Live", label: "hirestack.tech" },
    ],
    whatISolved:
      "Built a streaming pipeline where 6 AI agents hand off context sequentially — the hardest part was orchestrating graceful failures when one agent times out mid-chain.",
    links: {
      live: "https://hirestack.tech",
      source: "https://github.com/BalaShankar9/hirestack-ai",
    },
    featured: true,
  },
  {
    slug: "sponsorintel",
    name: "SponsorIntel",
    pitch:
      "The Bloomberg Terminal of UK immigration sponsor intelligence",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "Playwright"],
    metrics: [
      { value: "140K+", label: "Companies" },
      { value: "17", label: "Web Scrapers" },
      { value: "Real-time", label: "Alerts" },
    ],
    whatISolved:
      "Scraped 140K+ UK sponsors from government data without API access — built 17 custom scrapers with anti-detection, rate limiting, and change-detection diffing.",
    links: {
      live: "https://sponsorintel.london",
      source: "https://github.com/BalaShankar9/SponsorIntel",
    },
    featured: true,
  },
  {
    slug: "carpoolnetwork",
    name: "CarpoolNetwork",
    pitch:
      "Ride-sharing platform with real-time messaging and geo intelligence",
    tech: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
    metrics: [
      { value: "Real-time", label: "Chat" },
      { value: "Admin", label: "Dashboard" },
      { value: "Secure", label: "RPC Analytics" },
    ],
    whatISolved:
      "Implemented secure server-side analytics with PostgreSQL RPC functions — admin queries return only aggregates, never exposing user PII.",
    links: {
      live: "https://carpoolnetwork.co.uk",
      source: "https://github.com/BalaShankar9/CarpoolNetwork",
    },
    featured: true,
  },
  {
    slug: "secprobe",
    name: "SecProbe",
    pitch: "10-module security testing toolkit for web apps and networks",
    tech: ["Python", "CLI"],
    metrics: [
      { value: "10", label: "Scanners" },
      { value: "3", label: "Report Formats" },
      { value: "CLI", label: "Native" },
    ],
    whatISolved:
      "Designed a modular scanner architecture where each of the 10 modules runs independently with its own rate limiting, yet all feed into a unified severity-scored report.",
    links: {
      source: "https://github.com/BalaShankar9/SecProbe",
    },
    featured: true,
  },
  {
    slug: "toolforge",
    name: "ToolForge",
    pitch:
      "Local-first tool factory that generates native macOS CLI executables",
    tech: ["Go"],
    metrics: [],
    whatISolved: "",
    links: {
      source: "https://github.com/BalaShankar9/toolforge",
    },
    featured: false,
  },
  {
    slug: "edge-abyss",
    name: "EdgeAbyss",
    pitch: "Precision edge-riding game with physics and gamepad support",
    tech: ["C#", "Unity"],
    metrics: [],
    whatISolved: "",
    links: {
      source: "https://github.com/BalaShankar9/edge-abyss",
    },
    featured: false,
  },
  {
    slug: "ai-life-ops",
    name: "AI-Life-Ops",
    pitch: "SOC2/GDPR-compliant monorepo scaffold with CI/CD",
    tech: ["TypeScript", "Prisma"],
    metrics: [],
    whatISolved: "",
    links: {
      source: "https://github.com/BalaShankar9/AI-Life-Ops",
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
```

- [ ] **Step 3: Commit**

```bash
git add lib/
git commit -m "feat: add project data and site constants"
```

---

### Task 3: UI Primitives

**Files:**
- Create: `components/ui/tech-pill.tsx`, `components/ui/metric-callout.tsx`, `components/ui/section-heading.tsx`, `components/ui/scroll-reveal.tsx`

- [ ] **Step 1: Create TechPill component**

Create `components/ui/tech-pill.tsx`:

```tsx
export function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-mono font-medium text-zinc-300 bg-zinc-800 rounded-full">
      {label}
    </span>
  );
}
```

- [ ] **Step 2: Create MetricCallout component**

Create `components/ui/metric-callout.tsx`:

```tsx
export function MetricCallout({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-mono font-bold text-zinc-100">
        {value}
      </span>
      <span className="text-sm font-mono text-zinc-500">{label}</span>
    </div>
  );
}
```

- [ ] **Step 3: Create SectionHeading component**

Create `components/ui/section-heading.tsx`:

```tsx
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
        {children}
      </h2>
      <div className="mt-4 h-px w-16 bg-indigo-500" />
    </div>
  );
}
```

- [ ] **Step 4: Create ScrollReveal wrapper**

Create `components/ui/scroll-reveal.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add UI primitives — TechPill, MetricCallout, SectionHeading, ScrollReveal"
```

---

### Task 4: Navbar

**Files:**
- Create: `components/nav/navbar.tsx`

- [ ] **Step 1: Create floating navbar**

Create `components/nav/navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50"
        >
          <div className="bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <a
                href="#"
                className="font-mono text-sm font-bold text-zinc-100 tracking-wider"
              >
                BSB
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-px w-5 bg-zinc-100 transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-zinc-100 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-zinc-100 transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile overlay */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 top-[57px] bg-zinc-950/95 backdrop-blur-xl z-40"
              >
                <div className="flex flex-col items-center justify-center gap-8 pt-24">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-medium text-zinc-100"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Add Navbar to page.tsx**

Update `app/page.tsx`:

```tsx
import { Navbar } from "@/components/nav/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="h-[200vh]" /> {/* Temporary spacer to test scroll */}
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify navbar appears on scroll**

Run `npm run dev`, scroll down — navbar should slide in with glass blur effect. Test hamburger on mobile viewport.

- [ ] **Step 4: Commit**

```bash
git add components/nav/ app/page.tsx
git commit -m "feat: add floating glass navbar with mobile hamburger menu"
```

---

### Task 5: Hero Section (without Three.js)

**Files:**
- Create: `components/hero/hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `components/hero/hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const name = "BALA SANKAR BOLLINENI";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Particle field will be inserted here later */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950" />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Staggered name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: name.length * 0.04 + 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl"
        >
          {SITE.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: name.length * 0.04 + 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-zinc-100 text-zinc-100 transition-all hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            See What I've Built
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Wire Hero into page**

Update `app/page.tsx`:

```tsx
import { Navbar } from "@/components/nav/navbar";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-screen" /> {/* Temporary spacer */}
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify hero renders**

Run `npm run dev` — should see the staggered name animation, tagline fade-in, buttons appearing, and pulsing scroll indicator. Scrolling down should trigger navbar.

- [ ] **Step 4: Commit**

```bash
git add components/hero/hero.tsx app/page.tsx
git commit -m "feat: add hero section with staggered name animation and CTAs"
```

---

### Task 6: Three.js Particle Field

**Files:**
- Create: `components/hero/particle-field.tsx`
- Modify: `components/hero/hero.tsx`

- [ ] **Step 1: Create particle field component**

Create `components/hero/particle-field.tsx`:

```tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;
const WAVE_SPEED = 0.3;
const WAVE_HEIGHT = 1.5;
const SPREAD = 20;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, basePositions] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * SPREAD;
      const z = (Math.random() - 0.5) * SPREAD;
      const y = 0;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
    }
    return [pos, base];
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isAccent = Math.random() < 0.15;
      if (isAccent) {
        // Indigo-ish
        cols[i * 3] = 0.39;
        cols[i * 3 + 1] = 0.4;
        cols[i * 3 + 2] = 0.95;
      } else {
        // White-ish with slight variation
        const brightness = 0.6 + Math.random() * 0.4;
        cols[i * 3] = brightness;
        cols[i * 3 + 1] = brightness;
        cols[i * 3 + 2] = brightness;
      }
    }
    return cols;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * WAVE_SPEED;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    // Map pointer to world coordinates
    mouseRef.current.x = pointer.x * viewport.width * 0.5;
    mouseRef.current.y = pointer.y * viewport.height * 0.5;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const bz = basePositions[i * 3 + 2];

      // Wave displacement
      const wave =
        Math.sin(bx * 0.4 + time) * Math.cos(bz * 0.3 + time * 0.7) *
        WAVE_HEIGHT;

      // Mouse repulsion
      const dx = bx - mouseRef.current.x;
      const dz = bz - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const influence = Math.max(0, 1 - dist / 4);
      const push = influence * influence * 2;

      arr[i * 3 + 1] = wave + push;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 2: Integrate particle field into Hero with lazy loading**

Update `components/hero/hero.tsx` — add the dynamic import and insert it:

Add at the top of the file, after the other imports:

```tsx
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/hero/particle-field").then((m) => ({
      default: m.ParticleField,
    })),
  { ssr: false }
);
```

Replace the gradient placeholder div:

```tsx
{/* Old: */}
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950" />

{/* New: */}
<div className="absolute inset-0">
  <ParticleField />
</div>
```

- [ ] **Step 3: Verify particle field renders**

Run `npm run dev` — should see animated particle wave behind the hero text. Move mouse to see gravitational displacement effect. Particles should include subtle indigo dots.

- [ ] **Step 4: Commit**

```bash
git add components/hero/
git commit -m "feat: add Three.js particle field with wave animation and mouse interaction"
```

---

### Task 7: Projects Section — Flagship Showcases

**Files:**
- Create: `components/projects/project-showcase.tsx`, `components/projects/projects-section.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create ProjectShowcase component**

Create `components/projects/project-showcase.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";
import { MetricCallout } from "@/components/ui/metric-callout";

export function ProjectShowcase({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16 py-24`}
    >
      {/* Screenshot mockup */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full lg:w-1/2"
      >
        <div className="relative">
          {/* Browser chrome mockup */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transform perspective-[1200px] rotate-y-1 rotate-x-1">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-5 rounded bg-zinc-800 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-[10px] font-mono text-zinc-500">
                    {project.links.live
                      ? new URL(project.links.live).hostname
                      : project.slug}
                  </span>
                </div>
              </div>
            </div>
            {/* Screenshot placeholder */}
            <div className="aspect-video bg-zinc-900 flex items-center justify-center">
              <span className="text-6xl font-bold text-zinc-800 font-mono">
                {project.name[0]}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="w-full lg:w-1/2"
      >
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 text-lg text-zinc-400">{project.pitch}</p>

        {/* Tech pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="mt-8 flex gap-8">
            {project.metrics.map((m) => (
              <MetricCallout key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        )}

        {/* What I Solved */}
        {project.whatISolved && (
          <p className="mt-8 text-sm text-zinc-500 italic leading-relaxed">
            &quot;{project.whatISolved}&quot;
          </p>
        )}

        {/* Links */}
        <div className="mt-8 flex gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
          >
            <Github size={14} />
            Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Create ProjectsSection orchestrator**

Create `components/projects/projects-section.tsx`:

```tsx
import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        {/* Flagship projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

        {/* Secondary projects */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to page.tsx**

Update `app/page.tsx`:

```tsx
import { Navbar } from "@/components/nav/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify projects render with scroll animations**

Run `npm run dev` — scroll past hero, should see alternating project showcases with slide-in animations. Browser mockups should show on left/right alternating.

- [ ] **Step 5: Commit**

```bash
git add components/projects/project-showcase.tsx components/projects/projects-section.tsx app/page.tsx
git commit -m "feat: add flagship project showcases with parallax scroll animations"
```

---

### Task 8: Projects Section — Secondary Cards

**Files:**
- Create: `components/projects/project-card.tsx`

- [ ] **Step 1: Create ProjectCard component**

Create `components/projects/project-card.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.links.source}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group block rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
          {project.name}
        </h3>
        <Github
          size={18}
          className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-1"
        />
      </div>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
        {project.pitch}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.a>
  );
}
```

- [ ] **Step 2: Verify secondary cards render**

Run `npm run dev` — scroll to bottom of projects section, should see 3 compact cards for ToolForge, EdgeAbyss, AI-Life-Ops with hover glow effect.

- [ ] **Step 3: Commit**

```bash
git add components/projects/project-card.tsx
git commit -m "feat: add secondary project cards with hover glow effect"
```

---

### Task 9: How I Build Section

**Files:**
- Create: `components/how-i-build/how-i-build.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create HowIBuild component**

Create `components/how-i-build/how-i-build.tsx`:

```tsx
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  {
    title: "Ship Fast",
    description:
      "7 products in under a year. I don't overthink — I build, ship, learn, iterate.",
  },
  {
    title: "Use AI Honestly",
    description:
      "AI is my pair programmer, not my ghost writer. I understand every line that ships.",
  },
  {
    title: "Solve Real Problems",
    description:
      "Every project started from a problem I or someone I know actually faced. No toy demos.",
  },
];

export function HowIBuild() {
  return (
    <section className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <h3 className="text-xl font-bold text-zinc-100">
                {pillar.title}
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

Import `HowIBuild` and add after `<ProjectsSection />`:

```tsx
import { HowIBuild } from "@/components/how-i-build/how-i-build";
```

```tsx
<Hero />
<ProjectsSection />
<HowIBuild />
```

- [ ] **Step 3: Commit**

```bash
git add components/how-i-build/ app/page.tsx
git commit -m "feat: add 'How I Build' three-column philosophy section"
```

---

### Task 10: About Section

**Files:**
- Create: `components/about/about.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create About component**

Create `components/about/about.tsx`:

```tsx
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>About</SectionHeading>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Photo / initial placeholder */}
          <ScrollReveal className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-2 border-indigo-500/30 bg-zinc-900 flex items-center justify-center">
              <span className="text-5xl font-bold text-indigo-500/60 font-mono">
                B
              </span>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.1} className="flex-1">
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
              <p>
                I don&apos;t have a CS degree or a job title to point to. What I
                have is 7 shipped products — real systems with real users, real
                databases, real AI agents.
              </p>
              <p>
                I taught myself to code by building things that solve problems I
                actually had: finding UK visa sponsors, automating job
                applications, pooling rides with strangers.
              </p>
              <p>
                I use AI as a tool, not a crutch. Every project on this page is
                something I conceived, designed, built, and deployed myself.
              </p>
              <p>
                I&apos;m looking for a team where output matters more than
                credentials.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={14} />
              <span>{CONTACT.location}</span>
            </div>

            <p className="mt-2 text-sm text-zinc-600">
              MA Digital Media Management — Sheffield Hallam University, 2023
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

Import and add after `<HowIBuild />`:

```tsx
import { About } from "@/components/about/about";
```

```tsx
<HowIBuild />
<About />
```

- [ ] **Step 3: Commit**

```bash
git add components/about/ app/page.tsx
git commit -m "feat: add About section with honest bio and education"
```

---

### Task 11: Contact Section

**Files:**
- Create: `components/contact/contact.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Contact component**

Create `components/contact/contact.tsx`:

```tsx
import { Mail, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SOCIAL, CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-zinc-800/50">
      <div className="mx-auto max-w-3xl text-center">
        {/* Availability */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {CONTACT.availability}
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something together.
          </h2>
        </ScrollReveal>

        {/* Links */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${SOCIAL.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-zinc-800 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
            >
              <Mail size={16} />
              {SOCIAL.email}
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-zinc-800 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
            >
              <Github size={16} />
              GitHub
            </a>
            {SOCIAL.linkedin && (
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-zinc-800 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* CV Download */}
        <ScrollReveal delay={0.3}>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Download CV
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

Import and add after `<About />`:

```tsx
import { Contact } from "@/components/contact/contact";
```

```tsx
<About />
<Contact />
```

- [ ] **Step 3: Commit**

```bash
git add components/contact/ app/page.tsx
git commit -m "feat: add Contact section with availability status and direct links"
```

---

### Task 12: Footer

**Files:**
- Create: `components/footer/footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Footer component**

Create `components/footer/footer.tsx`:

```tsx
import { Github, Mail, Linkedin } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          Bala Sankar Bollineni &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm text-zinc-700">Built with Next.js</p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          {SOCIAL.linkedin && (
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add to page.tsx (final page assembly)**

Final `app/page.tsx`:

```tsx
import { Navbar } from "@/components/nav/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { HowIBuild } from "@/components/how-i-build/how-i-build";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <HowIBuild />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/footer/ app/page.tsx
git commit -m "feat: add footer and assemble complete single-page layout"
```

---

### Task 13: SEO — OG Image, Sitemap, Robots

**Files:**
- Create: `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`

- [ ] **Step 1: Create dynamic OG image**

Create `app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt = "Bala Sankar Bollineni — Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: "-0.02em",
          }}
        >
          BALA SANKAR BOLLINENI
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            marginTop: "16px",
          }}
        >
          I taught myself to code, then shipped 7 products nobody asked me to
          build.
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["TypeScript", "Python", "Next.js", "FastAPI", "AI Agents"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  background: "#27272a",
                  borderRadius: "9999px",
                  fontSize: "16px",
                  color: "#a1a1aa",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 2: Create sitemap**

Create `app/sitemap.ts`:

```tsx
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://balabollineni.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

- [ ] **Step 3: Create robots.txt**

Create `app/robots.ts`:

```tsx
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://balabollineni.dev/sitemap.xml",
  };
}
```

- [ ] **Step 4: Commit**

```bash
git add app/opengraph-image.tsx app/sitemap.ts app/robots.ts
git commit -m "feat: add OG image, sitemap, and robots.txt for SEO"
```

---

### Task 14: Add Resume PDF placeholder

**Files:**
- Create: `public/resume.pdf`

- [ ] **Step 1: Copy latest CV to public folder**

```bash
cp "/Users/balabollineni/Downloads/Bala_Bollineni_CV.pdf" "/Users/balabollineni/My portfolio/public/resume.pdf"
```

- [ ] **Step 2: Commit**

```bash
git add public/resume.pdf
git commit -m "feat: add downloadable resume PDF"
```

---

### Task 15: Full Visual Verification & Polish

- [ ] **Step 1: Run dev server and verify all sections**

```bash
npm run dev
```

Walk through the full page:
1. Hero: particle field animates, name staggers in, buttons work, scroll indicator pulses
2. Navbar: appears on scroll past hero, glass blur effect, mobile hamburger works
3. Projects: 4 flagship showcases alternate layout, scroll animations trigger, links work
4. Secondary cards: 3 cards render in grid, hover glow works
5. How I Build: 3 columns fade in on scroll
6. About: initial "B" placeholder + bio text + location
7. Contact: green availability dot pulses, email/GitHub links work, CV download works
8. Footer: renders with correct year and social icons

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Verify: no build errors, all pages statically generated.

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: polish and verify full page layout"
```

---

### Task 16: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

```bash
gh repo create My-portfolio --public --source=. --remote=origin --push
```

- [ ] **Step 2: Deploy via Vercel CLI**

```bash
npx vercel --prod
```

Or link via Vercel dashboard for automatic deploys on push.

- [ ] **Step 3: Verify live site**

Open the deployed URL and verify all sections render correctly.

- [ ] **Step 4: Final commit with deploy URL**

Update `lib/constants.ts` with actual deployed URL if different from placeholder.

```bash
git add lib/constants.ts
git commit -m "chore: update site URL to deployed domain"
git push
```
