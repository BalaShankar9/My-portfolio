"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showNav = alwaysVisible || !isHome || visible;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50"
        >
          <div className="bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              {!isHome ? (
                <Link href="/" className="font-mono text-sm font-bold text-zinc-100 tracking-wider flex items-center gap-2">
                  <span className="text-zinc-500">&larr;</span> BSB
                </Link>
              ) : (
                <a href="#" className="font-mono text-sm font-bold text-zinc-100 tracking-wider">
                  BSB
                </a>
              )}
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === `#${active}`;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors relative ${
                        isActive
                          ? "text-zinc-100 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-indigo-500"
                          : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
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
