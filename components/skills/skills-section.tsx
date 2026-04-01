"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/experience";

export function SkillsSection() {
  return (
    <section className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills & Tools</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-zinc-300 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
