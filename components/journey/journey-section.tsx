"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2022", text: "Moved to the UK. Started MA in Digital Media Management at Sheffield Hallam. First internship at SA Cakes — built internal tools." },
  { year: "2023", text: "Graduated MA. Joined OYO Hotels (project-based) — production websites, analytics pipelines, performance monitoring. Realized I wanted to build products, not maintain them." },
  { year: "2024", text: "Started teaching myself to code. TypeScript first, then Python, Go, C#. AI was my pair programmer. First real projects shipped." },
  { year: "2025", text: "Shipped 5 products across 5 tech stacks. SponsorIntel, CarpoolNetwork, SecProbe, ToolForge, EdgeAbyss." },
  { year: "2026", text: "Built HireStack AI — 6-agent career platform. 7 products shipped total, 3 live with custom domains. Looking for a team that values builders." },
];

export function JourneySection() {
  return (
    <section id="journey" className="px-[clamp(24px,5vw,80px)] py-28 border-t border-[#2a2d35]">
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">Timeline</div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] mb-12">How I got here</h2>

      <div className="max-w-[700px] space-y-0">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex gap-6 py-7 border-b border-[#2a2d35] last:border-b-0"
          >
            <span className="font-mono text-sm font-bold text-[#6366f1] min-w-[48px] pt-[2px]">{item.year}</span>
            <span className="text-[15px] text-[#a1a1aa] leading-relaxed">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
