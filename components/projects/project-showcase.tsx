"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";
import { MetricCallout } from "@/components/ui/metric-callout";

export function ProjectShowcase({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16 py-24`}
    >
      {/* Screenshot mockup */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full lg:w-1/2"
      >
        <div className="relative">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transform perspective-[1200px] rotate-y-1 rotate-x-1">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-5 rounded bg-zinc-800 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-[10px] font-mono text-zinc-500">
                    {project.links.live
                      ? new URL(project.links.live).hostname
                      : project.slug}
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-zinc-900 flex items-center justify-center">
              <span className="text-6xl font-bold text-zinc-800 font-mono">
                {project.name[0]}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="w-full lg:w-1/2"
      >
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 text-lg text-zinc-400">{project.pitch}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        {project.metrics.length > 0 && (
          <div className="mt-8 flex gap-8">
            {project.metrics.map((m) => (
              <MetricCallout key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        )}

        {project.whatISolved && (
          <p className="mt-8 text-sm text-zinc-500 italic leading-relaxed">
            &quot;{project.whatISolved}&quot;
          </p>
        )}

        <div className="mt-8 flex gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
          >
            <GitHubIcon size={14} /> Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
}
