"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectDetail({
  project,
  next,
  prev,
}: {
  project: Project;
  next: Project;
  prev: Project;
}) {
  return (
    <div className="min-h-screen pt-24">
      <article className="px-[clamp(24px,5vw,80px)] pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/#products" className="inline-flex items-center gap-2 text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors mb-10">
              <ArrowLeft size={14} /> Back to all projects
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-[clamp(36px,6vw,56px)] font-bold tracking-[-0.03em]">{project.name}</h1>
            <p className="mt-4 text-xl text-[#a1a1aa] leading-relaxed max-w-xl">{project.pitch}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm text-[#52525b]">
              <span>{project.role}</span>
              <span className="text-[#2a2d35]">·</span>
              <span>{project.timeline}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-[5px]">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] text-[#52525b] bg-[#1c1e24] border border-[#2a2d35] px-2.5 py-[3px] rounded">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[13px] px-4 py-2 rounded-md bg-[#6366f1] text-white hover:bg-[#818cf8] transition-all">
                  Visit {new URL(project.links.live).hostname} ↗
                </a>
              )}
              <a href={project.links.source} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[13px] px-4 py-2 rounded-md text-[#a1a1aa] border border-[#2a2d35] hover:border-[#6366f1] hover:text-[#6366f1] transition-all">
                View Source ↗
              </a>
            </div>
          </motion.div>

          {/* Live embed */}
          {project.links.live && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-10">
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2a2d35]">
                  <div className="flex gap-[5px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                  </div>
                  <div className="flex-1 text-center font-mono text-xs text-[#52525b] bg-[#0f1115] py-[3px] rounded mx-3">
                    {new URL(project.links.live).hostname}
                  </div>
                </div>
                <iframe src={project.links.live} className="w-full border-0" style={{ height: "480px" }} loading="lazy" sandbox="allow-scripts allow-same-origin" title={project.name} />
              </div>
            </motion.div>
          )}

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="mt-10 flex gap-8 py-5 border-y border-[#2a2d35]">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-2xl font-bold">{m.value}</span>
                  <span className="font-mono text-[11px] text-[#52525b]">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Case study sections */}
          <div className="mt-12 space-y-10">
            {[
              { label: "The Problem", content: project.problem },
              { label: "The Solution", content: project.solution },
              { label: "Technical Decisions", content: project.techDecisions },
              { label: "What I Learned", content: project.whatILearned },
            ].map((section) => section.content && (
              <motion.section key={section.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">{section.label}</h2>
                <p className="text-[17px] text-[#a1a1aa] leading-relaxed">{section.content}</p>
              </motion.section>
            ))}

            {project.features && project.features.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#a1a1aa] text-[15px]">
                      <span className="text-[#6366f1] mt-0.5 flex-shrink-0">›</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        </div>
      </article>

      {/* Prev/Next */}
      <section className="border-t border-[#2a2d35] px-[clamp(24px,5vw,80px)] py-16">
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6">
          <Link href={`/projects/${prev.slug}`} className="group p-5 rounded-xl border border-[#2a2d35] bg-[#16181d]/50 hover:border-[rgba(99,102,241,0.2)] transition-all">
            <div className="flex items-center gap-2 text-sm text-[#52525b] mb-1"><ArrowLeft size={14} /> Previous</div>
            <div className="text-lg font-semibold group-hover:text-[#6366f1] transition-colors">{prev.name}</div>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group p-5 rounded-xl border border-[#2a2d35] bg-[#16181d]/50 hover:border-[rgba(99,102,241,0.2)] transition-all text-right">
            <div className="flex items-center justify-end gap-2 text-sm text-[#52525b] mb-1">Next <ArrowRight size={14} /></div>
            <div className="text-lg font-semibold group-hover:text-[#6366f1] transition-colors">{next.name}</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
