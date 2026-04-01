"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { GitHubIcon } from "@/components/ui/icons";
import { TechPill } from "@/components/ui/tech-pill";
import { MetricCallout } from "@/components/ui/metric-callout";
import { ProjectPreview } from "@/components/projects/project-preview";

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
    <div className="min-h-screen pt-20">
      <article className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to all projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {project.name}
            </h1>
            <p className="mt-4 text-xl text-zinc-400 max-w-2xl leading-relaxed">
              {project.pitch}
            </p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              {project.role && (
                <span className="inline-flex items-center gap-1.5">
                  <User size={14} />
                  {project.role}
                </span>
              )}
              {project.timeline && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} />
                  {project.timeline}
                </span>
              )}
            </div>

            {/* Tech + links */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  Visit {new URL(project.links.live).hostname}
                </a>
              )}
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-indigo-400 transition-all"
              >
                <GitHubIcon size={14} />
                View Source
              </a>
            </div>
          </motion.div>

          {/* Preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 rounded-md bg-zinc-800 max-w-sm mx-auto flex items-center justify-center">
                    <span className="text-xs font-mono text-zinc-500">
                      {project.links.live ? new URL(project.links.live).hostname : project.slug}
                    </span>
                  </div>
                </div>
              </div>
              {project.links.live ? (
                <iframe
                  src={project.links.live}
                  className="w-full border-0"
                  style={{ height: "480px" }}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  title={`${project.name} live preview`}
                />
              ) : (
                <ProjectPreview slug={project.slug} />
              )}
            </div>
          </motion.div>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-12 flex gap-10 py-6 border-y border-zinc-800/50"
            >
              {project.metrics.map((m) => (
                <MetricCallout key={m.label} value={m.value} label={m.label} />
              ))}
            </motion.div>
          )}

          {/* Case Study Content */}
          <div className="mt-12 space-y-12">
            {/* The Problem */}
            {project.problem && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  The Problem
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </motion.section>
            )}

            {/* The Solution */}
            {project.solution && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  The Solution
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </motion.section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400">
                      <span className="text-indigo-500 mt-0.5 flex-shrink-0">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Technical Decisions */}
            {project.techDecisions && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  Technical Decisions
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {project.techDecisions}
                </p>
              </motion.section>
            )}

            {/* What I Learned */}
            {project.whatILearned && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  What I Learned
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {project.whatILearned}
                </p>
              </motion.section>
            )}
          </div>
        </div>
      </article>

      {/* Nav between projects */}
      <section className="border-t border-zinc-800/50 px-6 py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6">
          <Link
            href={`/projects/${prev.slug}`}
            className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
              <ArrowLeft size={14} />
              Previous
            </div>
            <div className="text-lg font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
              {prev.name}
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-indigo-500/30 transition-all text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-zinc-500 mb-2">
              Next
              <ArrowRight size={14} />
            </div>
            <div className="text-lg font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
              {next.name}
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
