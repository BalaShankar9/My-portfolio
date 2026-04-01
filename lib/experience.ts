export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Independent Full Stack Engineer",
    company: "Self-employed",
    type: "Self-taught Builder",
    period: "2022 – Present",
    description:
      "Shipped 7 production products across AI agents, web scraping, ride-sharing, security tools, game dev, and CLI tooling. Full lifecycle: architecture → build → test → deploy → iterate.",
    highlights: [
      "Built HireStack AI — 6-agent career platform with streaming UI",
      "Built SponsorIntel — 140K+ sponsor intelligence platform",
      "Built CarpoolNetwork — ride-sharing with real-time chat",
      "Built SecProbe — 10-module security scanner",
      "Built ToolForge (Go), EdgeAbyss (Unity), AI-Life-Ops (monorepo)",
    ],
  },
  {
    role: "Digital Marketing & Web Experience Engineer",
    company: "OYO Hotels (UK)",
    type: "Project-Based",
    period: "2023 – 2024",
    description:
      "Maintained production websites and internal tools for a global hospitality platform.",
    highlights: [
      "Performance monitoring and analytics pipelines (GA4, GTM)",
      "Technical SEO improvements across multi-region platforms",
      "Release management and QA testing",
    ],
  },
  {
    role: "Brand & Digital Systems Assistant",
    company: "SA Cakes Ltd",
    type: "Internship",
    period: "2022 – 2023",
    description:
      "Built internal content management systems and campaign tools.",
    highlights: [
      "Backend integrations and analytics-driven optimisation",
      "Responsive, conversion-focused digital platforms",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  year: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "MA Digital Media Management",
    institution: "Sheffield Hallam University",
    year: "2023",
    detail: "Focused on digital product strategy, web technologies, and data-driven decision making",
  },
];

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "Python", "Go", "C#", "JavaScript", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Node.js", "NestJS", "Express", "REST APIs", "Celery"],
  },
  {
    name: "Data & Infrastructure",
    skills: ["PostgreSQL", "Supabase", "Redis", "Prisma", "Docker", "GitHub Actions"],
  },
  {
    name: "AI & Scraping",
    skills: ["Multi-agent systems", "LLM integration", "Playwright", "Web scraping", "NLP"],
  },
  {
    name: "Other",
    skills: ["Unity", "CLI tooling", "Technical SEO", "GA4/GTM", "CI/CD"],
  },
];
