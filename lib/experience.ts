export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  detail: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Contract",
    type: "Contract",
    period: "2024 — Present",
    description:
      "Building modern web applications for clients using Next.js, React, and TypeScript with a focus on performance and user experience.",
    highlights: [
      "Developed and deployed multiple full-stack applications with Next.js App Router",
      "Implemented responsive, accessible UIs with Tailwind CSS and Framer Motion",
      "Integrated third-party APIs and managed cloud deployments on Vercel",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    type: "Personal",
    period: "2023 — 2024",
    description:
      "Built a portfolio of projects exploring modern frontend frameworks, state management, and design systems.",
    highlights: [
      "Created reusable component libraries with TypeScript and Storybook",
      "Explored server-side rendering and static generation patterns",
      "Practiced CI/CD workflows with GitHub Actions and Vercel",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University",
    year: "2024",
    detail: "Focused on web technologies, data structures, and software engineering.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    name: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    name: "Concepts",
    skills: ["REST APIs", "SSR / SSG", "Responsive Design", "CI/CD", "Testing"],
  },
  {
    name: "Currently Learning",
    skills: ["AI/ML", "Rust", "System Design", "AWS"],
  },
];
