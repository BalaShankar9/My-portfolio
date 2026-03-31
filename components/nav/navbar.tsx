"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50"
        >
          <div className="bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <a href="#" className="font-mono text-sm font-bold text-zinc-100 tracking-wider">
                BSB
              </a>
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100">
                    {link.label}
                  </a>
                ))}
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
                <span className={`block h-px w-5 bg-zinc-100 transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`block h-px w-5 bg-zinc-100 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-5 bg-zinc-100 transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 top-[57px] bg-zinc-950/95 backdrop-blur-xl z-40"
              >
                <div className="flex flex-col items-center justify-center gap-8 pt-24">
                  {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-zinc-100">
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
