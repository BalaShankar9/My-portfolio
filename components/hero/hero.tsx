"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const name = "BALA SANKAR BOLLINENI";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950" />

      <div className="relative z-10 max-w-5xl w-full">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: name.length * 0.04 + 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: name.length * 0.04 + 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-zinc-100 text-zinc-100 transition-all hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            See What I've Built
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
