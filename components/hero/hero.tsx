"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/constants";

const ParticleField = dynamic(
  () =>
    import("@/components/hero/particle-field").then((m) => ({
      default: m.ParticleField,
    })),
  { ssr: false }
);

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Gradient mesh overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/[0.05] blur-[100px]" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-[5]" />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Small pre-title */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-sm font-mono text-indigo-400/80 tracking-widest uppercase">
            Self-taught builder &middot; Cardiff, UK
          </span>
        </motion.div>

        {/* Main name — massive, dramatic */}
        <div className="overflow-hidden">
          <motion.h1
            initial={prefersReducedMotion ? {} : { y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter"
          >
            BALA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={prefersReducedMotion ? {} : { y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter"
          >
            <span className="bg-gradient-to-r from-zinc-100 via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              SANKAR
            </span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={prefersReducedMotion ? {} : { y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter text-zinc-100"
          >
            BOLLINENI
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed"
        >
          {SITE.description}
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 flex gap-8 items-center"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-mono font-bold text-zinc-100">7</span>
            <span className="text-xs text-zinc-500">Products Shipped</span>
          </div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="flex flex-col">
            <span className="text-3xl font-mono font-bold text-zinc-100">5</span>
            <span className="text-xs text-zinc-500">Languages</span>
          </div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="flex flex-col">
            <span className="text-3xl font-mono font-bold text-zinc-100">3</span>
            <span className="text-xs text-zinc-500">Live Products</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full border border-zinc-100 text-zinc-100 transition-all duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            See What I've Built
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-full bg-indigo-500 text-white transition-all duration-300 hover:bg-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
