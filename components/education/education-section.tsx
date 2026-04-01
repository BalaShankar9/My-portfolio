"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/experience";

export function EducationSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100">{edu.degree}</h3>
                <p className="text-sm text-zinc-400">{edu.institution} · {edu.year}</p>
                <p className="text-sm text-zinc-500 mt-1">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
