"use client";

import { motion } from "framer-motion";

const cards = [
  { num: "01", title: "Problem first, tech second", desc: "I don't pick a stack and look for a problem. I find a broken system, understand why it's broken, then choose the simplest tech that solves it." },
  { num: "02", title: "Ship, then polish", desc: "A deployed MVP with real users teaches more than a perfect prototype. I get to production fast, then iterate based on real usage." },
  { num: "03", title: "AI as a force multiplier", desc: "I use AI the way a carpenter uses a power tool — it makes me faster, but the architecture and debugging are mine. AI lets a solo builder ship what would take a team." },
  { num: "04", title: "Own the full stack", desc: "From database schema to deployment pipeline. The best debugging happens when you can trace from the UI to the SQL query." },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-[clamp(24px,5vw,80px)] py-28 border-t border-[#2a2d35]">
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">How I work</div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] mb-12">My approach to building software</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-7 border border-[#2a2d35] rounded-[10px] bg-[#16181d] hover:bg-[#1c1e24] transition-all duration-300 hover:border-t-[#6366f1]/30"
          >
            <div className="font-mono text-[32px] font-bold text-[#6366f1] opacity-30 mb-4">{card.num}</div>
            <h3 className="text-[17px] font-semibold mb-3">{card.title}</h3>
            <p className="text-sm text-[#52525b] leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
