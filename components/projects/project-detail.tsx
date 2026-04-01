"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
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
      {/* Hero area with large preview */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to all projects
            </Link>
          </motion.div>

          {/* Project title + meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {project.name}
            </h1>
            <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
              {project.pitch}
            </p>

            {/* Tech + links row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
              <span className="text-zinc-700">|</span>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  {new URL(project.links.live).hostname}
                </a>
              )}
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <GitHubIcon size={14} />
                Source Code
              </a>
            </div>
          </motion.div>

          {/* Large preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="flex-1 mx-6">
                  <div className="h-6 rounded-md bg-zinc-800 max-w-md mx-auto flex items-center justify-center">
                    <span className="text-xs font-mono text-zinc-500">
                      {project.links.live
                        ? new URL(project.links.live).hostname
                        : project.slug + ".dev"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Live site iframe for projects with live URLs, preview for others */}
              {project.links.live ? (
                <div className="relative">
                  <iframe
                    src={project.links.live}
                    className="w-full border-0"
                    style={{ height: "500px" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    title={`${project.name} live preview`}
                  />
                  {/* Overlay to prevent interaction -- click goes to real site */}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-sm text-white border border-white/20">
                      <ExternalLink size={14} />
                      Open {new URL(project.links.live).hostname}
                    </span>
                  </a>
                </div>
              ) : (
                <ProjectPreview slug={project.slug} />
              )}
            </div>
          </motion.div>

          {/* Metrics + What I Solved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Metrics */}
            {project.metrics.length > 0 && (
              <div>
                <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                  Key Metrics
                </h2>
                <div className="flex gap-10">
                  {project.metrics.map((m) => (
                    <MetricCallout key={m.label} value={m.value} label={m.label} />
                  ))}
                </div>
              </div>
            )}

            {/* What I Solved */}
            {project.whatISolved && (
              <div>
                <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                  Hardest Problem I Solved
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  {project.whatISolved}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="border-t border-zinc-800/50 px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-6">
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
