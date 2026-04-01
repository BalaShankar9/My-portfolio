"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";
import { ProjectPreview } from "@/components/projects/project-preview";

function GalleryCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[55vw] px-4">
      <Link href={`/projects/${project.slug}`} className="block group">
        {/* Number */}
        <div className="flex items-end gap-4 mb-4">
          <span className="text-7xl md:text-8xl font-bold text-zinc-800/50 font-mono leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-sm text-zinc-500 mt-1">{project.pitch}</p>
          </div>
        </div>

        {/* Browser mockup with preview */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/40 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_60px_rgba(99,102,241,0.08)]">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500/60 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-yellow-500/60 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-green-500/60 transition-colors" />
            </div>
            <div className="flex-1 mx-3">
              <div className="h-5 rounded bg-zinc-800 max-w-xs mx-auto flex items-center justify-center">
                <span className="text-[10px] font-mono text-zinc-500">
                  {project.links.live
                    ? new URL(project.links.live).hostname
                    : project.slug}
                </span>
              </div>
            </div>
          </div>
          <div className="transition-transform duration-700 group-hover:scale-[1.02]">
            <ProjectPreview slug={project.slug} />
          </div>
        </div>

        {/* Tech + links below */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
          <div className="flex gap-3">
            {project.links.live && (
              <span className="text-xs text-zinc-500 flex items-center gap-1">
                <ExternalLink size={12} /> Live
              </span>
            )}
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <GitHubIcon size={12} /> Code
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function HorizontalGallery({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll (0->1) to horizontal translate
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((projects.length - 1) * 100) / projects.length}%`]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section heading */}
        <div className="px-6 mb-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-sm font-mono text-indigo-400/80 tracking-widest uppercase">
              Selected Work
            </span>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <motion.div style={{ x }} className="flex">
          {projects.map((project, i) => (
            <GalleryCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="px-6 mt-8">
          <div className="mx-auto max-w-7xl">
            <div className="h-px bg-zinc-800 relative">
              <motion.div
                className="absolute top-0 left-0 h-px bg-indigo-500"
                style={{ width: progressWidth }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs font-mono text-zinc-600">
              <span>01</span>
              <span>Scroll to explore</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
