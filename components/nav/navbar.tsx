"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Journey", href: "/#journey" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0f1115]/85 backdrop-blur-xl transition-[border-color] duration-300 ${
        scrolled ? "border-b border-[#2a2d35]" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-14 px-[clamp(24px,5vw,80px)]">
        <Link href="/" className="font-mono text-sm font-bold tracking-wider text-[#e4e4e7]">
          BSB
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[#52525b] hover:text-[#e4e4e7] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
