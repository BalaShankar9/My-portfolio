"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-[clamp(24px,5vw,80px)]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-[clamp(36px,6vw,56px)] font-bold tracking-[-0.03em]">All Projects</h1>
          <p className="mt-4 text-lg text-[#a1a1aa] max-w-xl">7 products shipped across AI, web scraping, ride-sharing, security, game dev, and CLI tooling.</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block p-6 border border-[#2a2d35] rounded-xl bg-[#16181d] hover:border-[rgba(99,102,241,0.2)] transition-all group"
              >
                {project.links.live && (
                  <span className="inline-flex items-center gap-[5px] font-mono text-[10px] font-bold text-[#22c55e] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] px-2 py-[2px] rounded mb-3">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" /> LIVE
                  </span>
                )}
                <h2 className="text-xl font-semibold text-[#e4e4e7] group-hover:text-[#6366f1] transition-colors">{project.name}</h2>
                <p className="mt-1 text-sm text-[#71717a] leading-relaxed">{project.pitch}</p>
                <div className="mt-3 flex flex-wrap gap-[5px]">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-[#52525b] bg-[#1c1e24] border border-[#2a2d35] px-2 py-[2px] rounded">{t}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
