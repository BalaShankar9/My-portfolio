"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-16">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8"
              >
                {/* Period */}
                <div className="md:w-[140px] flex-shrink-0 md:text-right">
                  <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                </div>

                {/* Dot on the line */}
                <div className="absolute left-0 md:left-[140px] top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-900 border-2 border-indigo-500 z-10" />

                {/* Content */}
                <div className="pl-6 md:pl-8 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-zinc-100">{exp.role}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-400">{exp.company}</p>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{exp.description}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-zinc-500 flex items-start gap-2">
                        <span className="text-indigo-500 mt-1.5 flex-shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
