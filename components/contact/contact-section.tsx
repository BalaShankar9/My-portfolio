"use client";

import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="px-[clamp(24px,5vw,80px)] py-28 border-t border-[#2a2d35] bg-[#16181d] rounded-none md:rounded-2xl md:mx-6 lg:mx-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[640px]"
      >
        <div className="font-mono text-[13px] text-[#22c55e] mb-3">$ bala connect</div>
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.03em] mb-3">
          Let&apos;s build something together.
        </h2>
        <p className="text-base text-[#a1a1aa] mb-8 max-w-[480px]">
          I&apos;m actively looking for my next role. If you&apos;re building something interesting and need someone who ships, let&apos;s talk.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`mailto:${SOCIAL.email}`}
            className="font-mono text-[13px] px-6 py-3 rounded-md bg-[#6366f1] text-white border border-[#6366f1] hover:bg-[#818cf8] shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all"
          >
            {SOCIAL.email}
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] px-6 py-3 rounded-md text-[#a1a1aa] border border-[#2a2d35] hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            className="font-mono text-[13px] px-6 py-3 rounded-md text-[#a1a1aa] border border-[#2a2d35] hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
