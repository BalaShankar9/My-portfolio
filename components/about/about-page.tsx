"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { SOCIAL, CONTACT } from "@/lib/constants";

const chapters = [
  {
    title: "The Beginning",
    content: `I didn't start in tech. I came to the UK to study Digital Media Management at Sheffield Hallam University. I graduated in 2023 with an MA and a vague sense that I wanted to build things — but no idea how to write a single line of code.`,
  },
  {
    title: "Teaching Myself",
    content: `Instead of waiting for someone to hire me or teach me, I opened a code editor and started building. Not tutorials. Not courses. Real products that solved problems I actually had. AI was my pair programmer — not writing code for me, but helping me understand what I was writing. Every error message was a lesson. Every stack trace was a puzzle. I learned TypeScript, then Python, then Go, then C# — not because a curriculum told me to, but because each new project demanded a new tool.`,
  },
  {
    title: "The Visa Problem",
    content: `As an immigrant in the UK, I needed to find employers who could sponsor my visa. The government publishes a raw CSV of 140,000+ sponsors — no search, no filtering, no intelligence. So I built SponsorIntel. 17 web scrapers. A 7-factor company scoring engine. Real-time policy tracking. What started as a personal tool became a full intelligence platform. That's how I build: I find a problem that frustrates me, and I don't stop until I've built something that makes it disappear.`,
  },
  {
    title: "The Job Application Problem",
    content: `Applying for jobs was another broken process. Hours spent tailoring CVs that get rejected by ATS systems before a human reads them. So I built HireStack AI — 6 AI agents that collaborate to produce a complete application package in under 3 minutes. The agents gather company intelligence, analyse your profile, detect skill gaps, and generate tailored documents. It's live at hirestack.tech.`,
  },
  {
    title: "The Commute Problem",
    content: `Cardiff commuters driving alone, wasting money and polluting the air. No trusted local carpooling platform existed. So I built CarpoolNetwork — real-time messaging, verified users, admin analytics with privacy-first RPC functions. Active in Cardiff and Sheffield. It's live at carpoolnetwork.co.uk.`,
  },
  {
    title: "Beyond Web Apps",
    content: `I don't just build web apps. SecProbe is a 10-module security testing toolkit in Python. ToolForge generates native macOS CLI executables in Go. EdgeAbyss is a precision riding game built in Unity with C#. AI-Life-Ops is a SOC2/GDPR-compliant monorepo scaffold. I build whatever the problem demands — the language is a tool, not an identity.`,
  },
  {
    title: "What I'm Looking For",
    content: `A team where output matters more than credentials. Where I can ship real things, learn from people better than me, and grow into the engineer my projects suggest I could be. I don't have 5 years of experience at a FAANG company. What I have is 7 shipped products, a willingness to figure anything out, and the proof that I do it.`,
  },
];

const journey = [
  { year: "2022", event: "Started MA at Sheffield Hallam · First internship at SA Cakes" },
  { year: "2023", event: "Graduated MA Digital Media Management · OYO Hotels (project-based)" },
  { year: "2024", event: "Started teaching myself to code · First projects shipped" },
  { year: "2025", event: "Built SponsorIntel, CarpoolNetwork, SecProbe, ToolForge, EdgeAbyss" },
  { year: "2026", event: "Built HireStack AI · 7 products shipped · Looking for my first team" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              I didn&apos;t start
              <br />
              <span className="bg-gradient-to-r from-zinc-100 via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                in tech.
              </span>
            </h1>
            <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
              <MapPin size={14} />
              <span>{CONTACT.location}</span>
              <span className="text-zinc-800">·</span>
              <span>MA Digital Media Management, Sheffield Hallam 2023</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story chapters */}
      <section className="px-6">
        <div className="mx-auto max-w-3xl space-y-20">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
                {String(i + 1).padStart(2, "0")} — {chapter.title}
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {chapter.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey timeline */}
      <section className="px-6 mt-24 py-16 border-t border-zinc-800/50">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-8"
          >
            Timeline
          </motion.h2>
          <div className="space-y-6">
            {journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-baseline"
              >
                <span className="text-2xl font-mono font-bold text-zinc-700 flex-shrink-0 w-16">
                  {item.year}
                </span>
                <span className="text-zinc-400">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 mt-16 py-16 border-t border-zinc-800/50">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Want to work together?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
              >
                <Mail size={14} />
                {SOCIAL.email}
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-indigo-400 transition-all"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
