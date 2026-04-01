"use client";

import { motion } from "framer-motion";

const f = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,5vw,80px)] pt-24">
      {/* Gradient blobs */}
      <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none blur-[100px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none blur-[80px]" />

      <motion.div {...f(0)} className="font-mono text-sm text-[#52525b] mb-4">
        <span className="text-[#22c55e]">$</span> bala --status
      </motion.div>

      <motion.h1
        {...f(0.2)}
        className="font-sans text-[clamp(44px,9vw,88px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#e4e4e7]"
      >
        <span className="font-mono bg-gradient-to-br from-[#6366f1] to-[#a78bfa] bg-clip-text text-transparent">7</span> products shipped.
        <br />
        All self-taught.
        <br />
        All in production.
      </motion.h1>

      <motion.div {...f(0.5)} className="font-mono text-[clamp(14px,2vw,18px)] text-[#52525b] mt-5">
        <span className="text-[#6366f1]">Bala Sankar Bollineni</span> — Full Stack Builder
      </motion.div>

      <motion.p {...f(0.7)} className="text-[clamp(16px,2vw,20px)] text-[#a1a1aa] max-w-[560px] mt-8 leading-relaxed">
        I solve real problems by building real products. AI career tools, immigration intelligence, ride-sharing networks, security scanners — each started from a frustration and ended with a deployed URL.
      </motion.p>

      {/* 6-second scan facts */}
      <motion.div
        {...f(0.9)}
        className="flex gap-10 mt-10 py-6 border-t border-b border-[#2a2d35]"
      >
        {[
          { value: "7", label: "Products shipped" },
          { value: "3", label: "Live with users" },
          { value: "5", label: "Languages" },
          { value: "140K+", label: "Data points indexed" },
        ].map((fact) => (
          <div key={fact.label} className="flex flex-col">
            <span className="font-mono text-[32px] font-bold text-[#e4e4e7]">{fact.value}</span>
            <span className="font-mono text-[11px] text-[#52525b]">{fact.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div {...f(1.1)} className="flex gap-4 mt-10">
        <a
          href="#products"
          className="font-mono text-[13px] px-6 py-3 rounded-md bg-[#6366f1] text-white border border-[#6366f1] hover:bg-[#818cf8] hover:shadow-[0_0_24px_rgba(99,102,241,0.15)] transition-all"
        >
          See what I built →
        </a>
        <a
          href="/resume.pdf"
          className="font-mono text-[13px] px-6 py-3 rounded-md text-[#a1a1aa] border border-[#2a2d35] hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
        >
          Download CV
        </a>
        <a
          href="https://github.com/BalaShankar9"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] px-6 py-3 rounded-md text-[#a1a1aa] border border-[#2a2d35] hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
        >
          GitHub
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#52525b]">Scroll</span>
        <div className="w-px h-5 bg-gradient-to-b from-[#52525b] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
