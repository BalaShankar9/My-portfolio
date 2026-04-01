"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Page = { label: string; url: string };

export function LiveShowcase({
  pages,
  domain,
}: {
  pages: Page[];
  domain: string;
}) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 300);
    },
    []
  );

  // Auto-cycle when visible
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timerRef.current = setInterval(() => {
              setCurrent((prev) => {
                const next = (prev + 1) % pages.length;
                setFading(true);
                setTimeout(() => setFading(false), 300);
                return next;
              });
            }, 5000);
          } else {
            if (timerRef.current) clearInterval(timerRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pages.length]);

  return (
    <div ref={containerRef} className="my-5 rounded-[10px] overflow-hidden border border-[#2a2d35] bg-[#1c1e24]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3.5 py-2 bg-[#1c1e24] border-b border-[#2a2d35]">
        <div className="flex gap-[5px]">
          <span className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
          <span className="w-2 h-2 rounded-full bg-[#eab308]/60" />
          <span className="w-2 h-2 rounded-full bg-[#22c55e]/60" />
        </div>
        <div className="flex-1 text-center font-mono text-[10px] text-[#52525b] bg-[#0f1115] py-[3px] px-3 rounded mx-2">
          {pages[current].url.replace("https://", "")}
        </div>
        <div className="flex gap-1">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-[6px] h-[6px] rounded-full border transition-all ${
                i === current
                  ? "bg-[#6366f1] border-[#6366f1]"
                  : "bg-transparent border-[#52525b]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Iframe */}
      <div className="relative w-full h-[280px]">
        <iframe
          src={pages[current].url}
          className={`w-full h-full border-0 bg-white transition-opacity duration-300 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          title={domain}
        />
        <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#52525b] bg-[#0f1115]/85 backdrop-blur-sm px-2 py-[3px] rounded border border-[#2a2d35] pointer-events-none">
          Live preview — {domain}
        </span>
      </div>

      {/* Page tabs */}
      <div className="flex gap-[6px] px-3.5 py-2 bg-[#1c1e24] border-t border-[#2a2d35] overflow-x-auto">
        {pages.map((page, i) => (
          <button
            key={page.label}
            onClick={() => goTo(i)}
            className={`font-mono text-[10px] px-2.5 py-[3px] rounded border whitespace-nowrap transition-all ${
              i === current
                ? "text-[#6366f1] border-[#6366f1] bg-[rgba(99,102,241,0.08)]"
                : "text-[#52525b] border-[#2a2d35] bg-[#0f1115] hover:text-[#a1a1aa] hover:border-[#52525b]"
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>
    </div>
  );
}
