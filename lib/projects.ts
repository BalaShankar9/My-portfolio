export type Project = {
  slug: string;
  name: string;
  pitch: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  whatISolved: string;
  links: { live?: string; source: string };
  featured: boolean;
  // Case study fields
  problem: string;
  solution: string;
  role: string;
  timeline: string;
  features: string[];
  techDecisions: string;
  whatILearned: string;
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
    problem:
      "Job seekers spend hours manually tailoring CVs and cover letters for each application. Most get rejected by ATS systems before a human ever reads them. I experienced this myself — applying to dozens of roles with generic documents that went nowhere.",
    solution:
      "A multi-agent AI system where 6 specialized agents collaborate to produce a complete, ATS-optimized application package. You paste a job description, upload your CV, and watch agents work in real-time through a mission-control streaming interface. The platform also includes an ATS scanner, interview prep simulator, salary negotiation coach, and enterprise multi-tenant workspaces.",
    role: "Solo developer — designed, built, and deployed everything",
    timeline: "Jan 2026 – Present",
    features: [
      "6-agent streaming pipeline with real-time progress UI",
      "Company intelligence gathering (culture, tech stack, hiring patterns)",
      "ATS scanner with keyword matching and readability scoring",
      "AI interview simulator with STAR scoring",
      "Salary coach with regional benchmarks",
      "Enterprise multi-tenant workspaces with role-based access",
    ],
    techDecisions:
      "Chose FastAPI over Node.js for the agent pipeline because Python has better AI/ML library support and async streaming. Used Supabase for auth and database to move fast without managing infrastructure. The streaming UI uses Server-Sent Events from FastAPI to the Next.js frontend — WebSockets would have been overkill for one-directional agent updates.",
    whatILearned:
      "Agent orchestration is harder than building individual agents. The failure modes multiply — what happens when agent 3 of 6 times out? I learned to build circuit breakers and graceful degradation so partial results still deliver value. If I rebuilt it, I would add persistent workflow state so interrupted pipelines can resume.",
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
    problem:
      "As an immigrant in the UK, I needed to find employers who could sponsor my visa. The government publishes a raw CSV of 140K+ sponsors — no search, no filtering, no intelligence. Existing tools were outdated directories with no job matching or real-time updates. Lawyers and HR teams had no way to track sponsor compliance or policy changes.",
    solution:
      "A full-stack intelligence platform that indexes 140K+ UK sponsors, scrapes 23+ job boards for sponsorship-likely roles, tracks immigration policy changes in real-time, and scores companies with a 7-factor algorithm. Built for three audiences: skilled workers searching for sponsors, immigration lawyers tracking compliance, and HR teams benchmarking against competitors.",
    role: "Solo developer — designed, built, and deployed everything",
    timeline: "Dec 2025 – Present",
    features: [
      "140K+ sponsor search with fuzzy matching (pg_trgm)",
      "17 web scrapers with anti-detection and rate limiting",
      "7-factor company scoring engine",
      "Real-time immigration policy tracking (GOV.UK, Hansard, BBC)",
      "Interactive UK choropleth map by postcode district",
      "Job intelligence with sponsorship likelihood NLP",
      "Custom alert engine with <2 min latency",
    ],
    techDecisions:
      "PostgreSQL with pg_trgm for fuzzy sponsor search — tried Elasticsearch first but it was overkill for the query patterns. Celery + Redis for background scraping because the 17 scrapers need to run on different schedules with retries. Playwright for JavaScript-heavy job boards that couldn't be scraped with simple HTTP requests. FastAPI for the API layer because the scraping pipeline is Python-native.",
    whatILearned:
      "Web scraping at scale is an arms race. I learned to rotate user agents, respect rate limits, implement exponential backoff, and diff results to detect actual changes versus page layout shifts. The hardest part was handling the 5% of sponsors whose data was inconsistent across government sources. If I rebuilt it, I would invest more in data validation pipelines upfront.",
  },
  {
    slug: "carpoolnetwork",
    name: "CarpoolNetwork",
    pitch: "Ride-sharing platform with real-time messaging and geo intelligence",
    tech: ["React", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { value: "Real-time", label: "Chat System" },
      { value: "Secure", label: "RPC Analytics" },
      { value: "2", label: "Active UK Cities" },
    ],
    whatISolved:
      "Implemented secure server-side analytics with PostgreSQL RPC functions — admin queries return only aggregates, never exposing user PII.",
    links: {
      live: "https://carpoolnetwork.co.uk",
      source: "https://github.com/BalaShankar9/CarpoolNetwork",
    },
    featured: true,
    problem:
      "Commuters in UK cities like Cardiff and Sheffield waste money and increase emissions driving alone. Existing ride-sharing apps focus on intercity travel, not daily commutes. There was no trusted platform for local carpooling with verified users and real-time communication.",
    solution:
      "A full-stack ride-sharing platform with user verification, real-time messaging (Supabase Realtime), admin analytics dashboard, and community-based trust (ratings, reviews). Active in Cardiff and Sheffield with expansion planned. Includes OTP auth, booking management, ride matching, and a full admin panel with KPI tracking.",
    role: "Solo developer — designed, built, and deployed everything",
    timeline: "Oct 2025 – Present",
    features: [
      "Real-time chat via Supabase Realtime (no phone number sharing)",
      "OTP authentication with phone and email",
      "Admin analytics with secure PostgreSQL RPC (SECURITY DEFINER)",
      "Community system with city-based groups",
      "Ride booking with cost-sharing calculator",
      "User ratings, reviews, and verification",
    ],
    techDecisions:
      "Chose Supabase over Firebase because I needed PostgreSQL's relational capabilities for ride matching and analytics. The admin analytics use SECURITY DEFINER RPC functions so the client never sees raw user data — only aggregated counts. Built as a Vite SPA rather than Next.js because the app is heavily interactive and doesn't need SSR/SEO beyond the landing page.",
    whatILearned:
      "Building a two-sided marketplace is fundamentally a trust problem, not a tech problem. The verification system, ratings, and in-app messaging all exist to lower the barrier to sharing a car with a stranger. I learned that the admin analytics needed to be privacy-first from day one — not bolted on later. If I rebuilt it, I would add real-time location sharing during rides for safety.",
  },
  {
    slug: "secprobe",
    name: "SecProbe",
    pitch: "10-module security testing toolkit for web apps and networks",
    tech: ["Python", "CLI", "Networking"],
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
    problem:
      "Security testing tools are either enterprise-expensive or require chaining together multiple CLI tools manually. Developers doing basic security audits need a single tool that covers the OWASP top 10 without the complexity of Burp Suite or the cost of commercial scanners.",
    solution:
      "A modular Python CLI that runs 10 security scanners (port scanning, SSL/TLS, headers, SQLi, XSS, directory brute-force, DNS enumeration, cookies, CORS, tech fingerprinting) with a unified severity-scored report in console, HTML, or JSON format. Each module runs independently with its own threading and rate limiting.",
    role: "Solo developer",
    timeline: "Mar 2026",
    features: [
      "10 independent scanner modules (ports, SSL, headers, SQLi, XSS, dirs, DNS, cookies, CORS, tech)",
      "Color-coded console output with severity icons",
      "Dark-themed HTML reports with charts",
      "Machine-readable JSON output",
      "Configurable rate limiting and threading",
      "Custom user agent and wordlist support",
    ],
    techDecisions:
      "Python was the natural choice — most security libraries (socket, ssl, requests, BeautifulSoup) are Python-native. Each scanner is a separate class inheriting from a BaseScanner — this makes it easy to add new modules without touching existing code. The report aggregation normalizes all findings to a common severity model (Critical/High/Medium/Low/Info) regardless of which scanner found them.",
    whatILearned:
      "Security testing is about minimizing false positives as much as finding real vulnerabilities. I learned to validate findings with multiple techniques — a suspected SQLi isn't reported unless confirmed with at least two detection methods (error-based and time-based). The modular architecture paid off when I needed to add the CORS scanner late — it took 2 hours instead of a day.",
  },
  {
    slug: "toolforge",
    name: "ToolForge",
    pitch: "Local-first tool factory that generates native macOS CLI executables",
    tech: ["Go"],
    metrics: [
      { value: "Go", label: "Native Binaries" },
      { value: "TUI", label: "Terminal UI" },
      { value: "1-cmd", label: "Build & Run" },
    ],
    whatISolved: "Created a generator that scaffolds, builds, and distributes single-binary macOS TUI tools — from idea to executable in one command.",
    links: {
      source: "https://github.com/BalaShankar9/toolforge",
    },
    featured: false,
    problem: "I wanted to build small macOS utility tools but setting up a Go TUI project from scratch every time was repetitive.",
    solution: "A CLI tool-factory that generates complete Go TUI projects as single native executables. Run toolforge new, toolforge build, and you have a distributable binary.",
    role: "Solo developer",
    timeline: "Feb 2026",
    features: ["Project scaffolding with templates", "Single-binary compilation", "macOS-native TUI output", "Defensive security focus"],
    techDecisions: "Go for single-binary distribution — no runtime dependencies needed on the target machine.",
    whatILearned: "Go's compilation model is perfect for distributable CLI tools. The entire tool plus its dependencies compile to one binary.",
  },
  {
    slug: "edge-abyss",
    name: "EdgeAbyss",
    pitch: "Precision edge-riding game with physics, wind, and gamepad support",
    tech: ["C#", "Unity", "URP"],
    metrics: [
      { value: "2", label: "Rider Types" },
      { value: "URP", label: "Rendering" },
      { value: "Gamepad", label: "Support" },
    ],
    whatISolved: "Balanced the tension between speed (scoring) and stability (survival) with a dynamic wind system that creates fair but challenging conditions.",
    links: {
      source: "https://github.com/BalaShankar9/edge-abyss",
    },
    featured: false,
    problem: "Wanted to explore game development and learn Unity by building something with real physics and game feel.",
    solution: "A precision-control riding game where you navigate narrow ridge tracks. Choose between Bike (fast, twitchy) or Horse (stable, momentum-based). Dynamic wind, streak bonuses, and edge proximity rewards.",
    role: "Solo developer",
    timeline: "Jan 2026",
    features: ["Multiple rider types with different physics", "Dynamic wind system", "Keyboard + gamepad controls", "ScriptableObject-driven tuning", "Camera shake and Cinemachine"],
    techDecisions: "Unity 6 with URP for modern rendering. ScriptableObjects for all tuning parameters so game feel can be adjusted without code changes.",
    whatILearned: "Game feel is 90% tuning, 10% code. The ScriptableObject pattern for bike/horse/camera/wind parameters made iteration fast.",
  },
  {
    slug: "ai-life-ops",
    name: "AI-Life-Ops",
    pitch: "SOC2/GDPR-compliant monorepo scaffold with CI/CD and weekly AI reviews",
    tech: ["TypeScript", "Next.js", "Prisma", "Python", "Docker"],
    metrics: [
      { value: "SOC2", label: "Controls" },
      { value: "GDPR", label: "Compliant" },
      { value: "Full", label: "CI/CD" },
    ],
    whatISolved: "Built a production-ready monorepo template with compliance baked in from day one — not bolted on after.",
    links: {
      source: "https://github.com/BalaShankar9/AI-Life-Ops",
    },
    featured: false,
    problem: "Starting a new compliant project means weeks of boilerplate — auth, database, CI/CD, secret scanning, GDPR data handling. I wanted a reusable starting point.",
    solution: "An investor-grade monorepo scaffold with Next.js web, Express API, Python AI engine, PostgreSQL, Redis, HttpOnly cookie auth, secret scanning, and full CI/CD. Includes weekly AI-powered review generation with PDF export.",
    role: "Solo developer",
    timeline: "Jan 2026",
    features: ["Monorepo with apps/web, apps/api, packages/engine", "SOC2 control documentation", "GDPR data export/deletion APIs", "Secret scanning in CI/CD", "Weekly AI review generation", "Docker Compose for local dev"],
    techDecisions: "Separated the Python AI engine from the Node.js API — they communicate via JSON stdin/stdout. This keeps the AI logic isolated and testable independently.",
    whatILearned: "Compliance is a design decision, not a checkbox. Building GDPR data deletion into the API from the start is 10x easier than retrofitting it.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
