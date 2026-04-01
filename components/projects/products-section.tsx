"use client";

import { motion } from "framer-motion";
import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { LiveShowcase } from "@/components/projects/live-showcase";
import Link from "next/link";

const showcasePages: Record<string, { label: string; url: string }[]> = {
  "hirestack-ai": [
    { label: "Home", url: "https://hirestack.tech" },
    { label: "Pricing", url: "https://hirestack.tech/pricing" },
    { label: "New App", url: "https://hirestack.tech/new" },
    { label: "Login", url: "https://hirestack.tech/login" },
  ],
  sponsorintel: [
    { label: "Home", url: "https://sponsorintel.london" },
    { label: "Search", url: "https://sponsorintel.london/search" },
    { label: "Jobs", url: "https://sponsorintel.london/jobs" },
    { label: "Pricing", url: "https://sponsorintel.london/pricing" },
  ],
  carpoolnetwork: [
    { label: "Home", url: "https://carpoolnetwork.co.uk" },
    { label: "Communities", url: "https://carpoolnetwork.co.uk/community" },
    { label: "Safety", url: "https://carpoolnetwork.co.uk/safety" },
    { label: "Sign In", url: "https://carpoolnetwork.co.uk/sign-in" },
  ],
};

export function ProductsSection() {
  return (
    <section id="products" className="px-[clamp(24px,5vw,80px)] py-24">
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">
        Shipped Products
      </div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] mb-4">
        Every project started with a real problem.
      </h2>
      <p className="text-base text-[#a1a1aa] max-w-[600px] mb-14">
        I don&apos;t build demo apps. I find broken systems, figure out what&apos;s missing, and ship something that works. Here&apos;s the build log.
      </p>

      {/* Featured projects */}
      {featuredProjects.map((project) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 border border-[#2a2d35] rounded-xl bg-[#16181d] relative overflow-hidden hover:border-[rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.04)] transition-all"
        >
          {/* Live badge */}
          {project.links.live && (
            <span className="absolute top-5 right-5 font-mono text-[10px] font-bold text-[#22c55e] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] px-2.5 py-[3px] rounded flex items-center gap-[5px]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" />
              LIVE
            </span>
          )}

          {/* Problem */}
          <div className="font-mono text-xs text-[#52525b] mb-3 px-3 py-2 bg-[rgba(239,68,68,0.04)] border-l-2 border-[#ef4444] rounded-r">
            <strong className="text-[#ef4444] font-semibold">Problem:</strong>{" "}
            {project.problem}
          </div>

          {/* Name + pitch */}
          <h3 className="text-[clamp(24px,3.5vw,36px)] font-semibold tracking-[-0.02em] mb-1.5">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[#e4e4e7] hover:text-[#6366f1] transition-colors"
            >
              {project.name} →
            </Link>
          </h3>
          <p className="text-[15px] text-[#a1a1aa] mb-4 max-w-[600px] leading-relaxed">
            {project.pitch}
          </p>

          {/* Engineering insight */}
          <div className="text-[13px] text-[#52525b] mb-4 px-3.5 py-2.5 bg-[#1c1e24] rounded-md border-l-2 border-[#6366f1] leading-relaxed">
            <strong className="text-[#6366f1] font-semibold">Engineering challenge:</strong>{" "}
            {project.whatISolved}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-[5px] mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-[#52525b] bg-[#1c1e24] border border-[#2a2d35] px-2.5 py-[3px] rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Live showcase */}
          {showcasePages[project.slug] && (
            <LiveShowcase
              pages={showcasePages[project.slug]}
              domain={
                project.links.live
                  ? new URL(project.links.live).hostname
                  : project.slug
              }
            />
          )}

          {/* Bottom: metrics + links */}
          <div className="flex justify-between items-end flex-wrap gap-4 mt-4 pt-4 border-t border-[#2a2d35]">
            <div className="flex gap-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-xl font-bold text-[#e4e4e7]">
                    {m.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#52525b]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#52525b] px-3 py-1.5 border border-[#2a2d35] rounded-md hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
                >
                  ↗ {new URL(project.links.live).hostname}
                </a>
              )}
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#52525b] px-3 py-1.5 border border-[#2a2d35] rounded-md hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
              >
                ↗ Source
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Secondary projects */}
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mt-14 mb-4">
        Also shipped
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {secondaryProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border border-[#2a2d35] rounded-[10px] p-5 bg-[#16181d] hover:border-[rgba(99,102,241,0.2)] transition-all"
          >
            <h4 className="text-[17px] font-semibold mb-1">{project.name}</h4>
            <p className="text-[13px] text-[#52525b] mb-2 leading-relaxed">
              {project.pitch}
            </p>
            <span className="font-mono text-[11px] text-[#52525b]">
              {project.tech.join(" · ")}
            </span>
          </Link>
        ))}
      </div>

      {/* Blinking cursor */}
      <div className="font-mono text-[13px] text-[#52525b] mt-12">
        <span className="text-[#22c55e]">$</span> bala build --next{" "}
        <span className="animate-pulse text-[#22c55e]">█</span>
      </div>
    </section>
  );
}
