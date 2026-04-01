"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="px-[clamp(24px,5vw,80px)] py-24 border-t border-[#2a2d35]">
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-[#6366f1] mb-3">About</div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] mb-8">Who I am</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[640px] space-y-5"
      >
        <p className="text-[17px] text-[#a1a1aa] leading-[1.7]">
          <strong className="text-[#e4e4e7] font-medium">I&apos;m a self-taught full-stack builder based in Cardiff, UK.</strong>{" "}
          I came to tech through Digital Media, not Computer Science. I don&apos;t have a traditional engineering background — what I have is 7 shipped products and the proof that I can figure anything out.
        </p>
        <p className="text-[17px] text-[#a1a1aa] leading-[1.7]">
          Every project on this page started from a real problem I encountered. I use AI as a building tool — it makes a solo developer as productive as a small team — but the design decisions, architecture, and debugging are mine.
        </p>
        <p className="text-[17px] text-[#a1a1aa] leading-[1.7]">
          I&apos;m looking for a team where <strong className="text-[#e4e4e7] font-medium">what you ship matters more than where you studied</strong>. I learn fast, I ship faster, and I don&apos;t stop until the thing works in production.
        </p>

        <div className="flex gap-8 mt-8 pt-6 border-t border-[#2a2d35] font-mono text-[13px] text-[#52525b] flex-wrap">
          <span>Cardiff, UK</span>
          <span>MA Digital Media — Sheffield Hallam, 2023</span>
          <span>Eligible to work in the UK</span>
        </div>
      </motion.div>
    </section>
  );
}
