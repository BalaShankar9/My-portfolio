"use client";

import { motion } from "framer-motion";

type Tool = {
  name: string;
  description: string;
  url?: string;
};

type Category = {
  title: string;
  items: Tool[];
};

const categories: Category[] = [
  {
    title: "Editor & Terminal",
    items: [
      {
        name: "VS Code",
        description: "Primary editor. GitHub Copilot and Claude extensions for AI-assisted development.",
      },
      {
        name: "Claude Code",
        description: "My main AI pair programmer. I use it for architecture decisions, debugging, and code review — not just generation.",
      },
      {
        name: "iTerm2 + Zsh",
        description: "Terminal with Oh My Zsh. Custom aliases for git workflows and project navigation.",
      },
      {
        name: "Warp",
        description: "AI-powered terminal for when I need to look up CLI commands quickly.",
      },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      {
        name: "TypeScript",
        description: "My primary language. Used in every web project — both frontend and backend.",
      },
      {
        name: "Python",
        description: "For AI agents, web scraping, security tools, and data pipelines. FastAPI for APIs.",
      },
      {
        name: "Go",
        description: "For CLI tools that need to compile to single native binaries. ToolForge is built in Go.",
      },
      {
        name: "C# + Unity",
        description: "For game development. EdgeAbyss is built with Unity 6 and URP.",
      },
      {
        name: "Next.js",
        description: "My default for any web project that needs SEO, SSR, or a polished frontend.",
      },
      {
        name: "React",
        description: "When I need a SPA without SSR overhead. CarpoolNetwork uses Vite + React.",
      },
      {
        name: "FastAPI",
        description: "Python API framework. Async, fast, great for AI agent pipelines and scraping backends.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS. I can't go back to writing regular CSS after this.",
      },
    ],
  },
  {
    title: "Infrastructure & Data",
    items: [
      {
        name: "Supabase",
        description: "Postgres database + auth + real-time subscriptions. My go-to for moving fast.",
      },
      {
        name: "PostgreSQL",
        description: "When I need full control over the database. pg_trgm for fuzzy search in SponsorIntel.",
      },
      {
        name: "Redis",
        description: "Caching and message broker for Celery workers in SponsorIntel.",
      },
      {
        name: "Docker",
        description: "For local dev environments and consistent deployment. Docker Compose for multi-service stacks.",
      },
      {
        name: "Vercel",
        description: "Deployment platform. Zero-config Next.js deploys. This portfolio runs on Vercel.",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD for automated testing, linting, and deployment pipelines.",
      },
    ],
  },
  {
    title: "AI & Scraping",
    items: [
      {
        name: "Claude (Anthropic)",
        description: "Primary LLM for HireStack AI agents. Best at following complex multi-step instructions.",
      },
      {
        name: "Playwright",
        description: "Browser automation for scraping JavaScript-heavy sites that resist simple HTTP requests.",
      },
      {
        name: "Celery",
        description: "Distributed task queue for running scrapers on schedules with retries and rate limiting.",
      },
    ],
  },
  {
    title: "Design & Productivity",
    items: [
      {
        name: "Figma",
        description: "For wireframes and UI design when I need to think visually before coding.",
      },
      {
        name: "Linear",
        description: "Project management. Clean, fast, keyboard-driven — perfect for solo development.",
      },
      {
        name: "Notion",
        description: "Documentation, notes, and project planning. Where ideas go before they become code.",
      },
      {
        name: "Arc Browser",
        description: "Primary browser. Spaces and split views are essential for multi-project development.",
      },
    ],
  },
  {
    title: "Hardware",
    items: [
      {
        name: "MacBook Air M2",
        description: "Primary machine. The M2 chip handles Docker, Unity, and multiple dev servers without breaking a sweat.",
      },
    ],
  },
];

export function UsesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Uses
          </h1>
          <p className="mt-4 text-xl text-zinc-400 leading-relaxed">
            The tools, software, and hardware I use to build products.
            Inspired by{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              uses.tech
            </a>
            .
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-16 space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-6">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <h3 className="text-lg font-bold text-zinc-100">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-indigo-400 transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className="mt-1 text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
