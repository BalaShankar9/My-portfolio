"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";
import { ProjectPreview } from "@/components/projects/project-preview";

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            All Projects
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            7 products shipped across AI, web scraping, ride-sharing, security, game dev, and CLI tooling. Every project started from a real problem.
          </p>
          <div className="mt-6 flex gap-4 text-sm font-mono text-zinc-500">
            <span><span className="text-zinc-100 font-bold">5</span> Languages</span>
            <span className="text-zinc-800">|</span>
            <span><span className="text-zinc-100 font-bold">3</span> Live Products</span>
            <span className="text-zinc-800">|</span>
            <span><span className="text-zinc-100 font-bold">7</span> Total Shipped</span>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group">
                {/* Browser mockup */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-xl transition-all duration-500 group-hover:border-indigo-500/20 group-hover:shadow-[0_0_60px_rgba(99,102,241,0.06)]">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500/60 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-yellow-500/60 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-green-500/60 transition-colors" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="h-5 rounded bg-zinc-800 max-w-[200px] mx-auto flex items-center justify-center">
                        <span className="text-[10px] font-mono text-zinc-500">
                          {project.links.live ? new URL(project.links.live).hostname : project.slug}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video overflow-hidden">
                    {project.links.live ? (
                      <iframe
                        src={project.links.live}
                        className="w-full h-full border-0 pointer-events-none scale-100"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        title={project.name}
                      />
                    ) : (
                      <ProjectPreview slug={project.slug} />
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h2>
                    <div className="flex gap-2">
                      {project.links.live && (
                        <span className="text-xs text-zinc-600"><ExternalLink size={12} /></span>
                      )}
                      <span className="text-xs text-zinc-600"><GitHubIcon size={12} /></span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{project.pitch}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
