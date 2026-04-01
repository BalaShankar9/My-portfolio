"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/experience";

const catColors = ["text-[#6366f1]", "text-[#22c55e]", "text-[#06b6d4]", "text-[#eab308]", "text-[#ec4899]", "text-[#f97316]"];

export function StackSection() {
  return (
    <section id="stack" className="px-[clamp(24px,5vw,80px)] py-28 border-t border-[#2a2d35]">
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">Tech Stack</div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] mb-12">What I build with</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <h3 className={`font-mono text-[11px] tracking-[0.15em] uppercase ${catColors[i % catColors.length]} mb-3`}>{cat.name}</h3>
            <div className="flex flex-wrap gap-[6px]">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[13px] text-[#52525b] px-3 py-1.5 bg-[#16181d] border border-[#2a2d35] rounded-md hover:border-[#6366f1] hover:text-[#e4e4e7] hover:scale-[1.03] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
