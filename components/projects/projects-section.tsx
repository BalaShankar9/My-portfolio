"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { MetricCallout } from "@/components/ui/metric-callout";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        {/* Featured projects — large stacked cards */}
        <div className="space-y-32">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            >
              <Link href={`/projects/${project.slug}`} className="block group">
                {/* Number + title row */}
                <div className="flex items-end gap-5 mb-6">
                  <span className="text-7xl md:text-9xl font-bold text-zinc-800/40 font-mono leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pb-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-base text-zinc-500 mt-1 max-w-lg">
                      {project.pitch}
                    </p>
                  </div>
                </div>

                {/* Browser mockup */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/40 transition-all duration-500 group-hover:border-indigo-500/20 group-hover:shadow-[0_0_80px_rgba(99,102,241,0.06)]">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-red-500/60 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-yellow-500/60 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-green-500/60 transition-colors" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded-md bg-zinc-800 max-w-sm mx-auto flex items-center justify-center">
                        <span className="text-xs font-mono text-zinc-500">
                          {project.links.live
                            ? new URL(project.links.live).hostname
                            : project.slug}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="transition-transform duration-700 group-hover:scale-[1.01]">
                    <ProjectPreview slug={project.slug} />
                  </div>
                </div>
              </Link>

              {/* Info below the mockup */}
              <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex flex-col gap-4">
                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                  {/* Metrics */}
                  {project.metrics.length > 0 && (
                    <div className="flex gap-8">
                      {project.metrics.map((m) => (
                        <MetricCallout
                          key={m.label}
                          value={m.value}
                          label={m.label}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} /> Live Site
                    </a>
                  )}
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHubIcon size={14} /> Source
                  </a>
                </div>
              </div>

              {/* What I Solved */}
              {project.whatISolved && (
                <p className="mt-4 text-sm text-zinc-500 italic leading-relaxed max-w-2xl">
                  &quot;{project.whatISolved}&quot;
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Secondary projects */}
        <div className="mt-32">
          <SectionHeading>More Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
