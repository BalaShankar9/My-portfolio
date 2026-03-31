"use client";

import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import type { Project } from "@/lib/projects";
import { TechPill } from "@/components/ui/tech-pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.links.source}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group block rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
          {project.name}
        </h3>
        <CodeXml
          size={18}
          className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-1"
        />
      </div>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
        {project.pitch}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.a>
  );
}
