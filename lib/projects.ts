export type Project = {
  slug: string;
  name: string;
  pitch: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  whatISolved: string;
  links: { live?: string; source: string };
  featured: boolean;
  problem?: string;
  solution?: string;
  role?: string;
  timeline?: string;
  features?: string[];
  techDecisions?: string;
  whatILearned?: string;
};

export const projects: Project[] = [
  {
    slug: "hirestack-ai",
    name: "HireStack AI",
    pitch: "6 AI agents build your entire job application in real-time",
    tech: ["Next.js", "FastAPI", "Supabase", "Python", "TypeScript"],
    metrics: [
      { value: "6", label: "AI Agents" },
      { value: "94%", label: "ATS Pass Rate" },
      { value: "35+", label: "Document Types" },
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
    pitch: "The Bloomberg Terminal of UK immigration sponsor intelligence",
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
    pitch: "Ride-sharing platform with real-time messaging and geo intelligence",
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
    pitch: "Local-first tool factory that generates native macOS CLI executables",
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
