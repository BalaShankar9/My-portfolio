"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  { at: 0, text: "Hey! I'm Bala. Scroll down to see what I've built. Each project has a live demo." },
  { at: 600, text: "These are real products with real domains. Click the page tabs to explore each one." },
  { at: 2500, text: "Every project started from a real problem. The engineering challenges show how I think." },
  { at: 4500, text: "This is how I approach building -- problem first, ship fast, own the full stack." },
  { at: 6000, text: "Self-taught after a Digital Media MA. 7 products in under a year." },
];

export function AvatarGuide() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(messages[0].text);
  const [lastIdx, setLastIdx] = useState(-1);

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    const t2 = setTimeout(() => setVisible(false), 10000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      let idx = -1;
      for (let i = messages.length - 1; i >= 0; i--) {
        if (y >= messages[i].at) { idx = i; break; }
      }
      if (idx !== -1 && idx !== lastIdx) {
        setLastIdx(idx);
        setText(messages[idx].text);
        setVisible(true);
        setTimeout(() => setVisible(false), 6000);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lastIdx]);

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex items-end gap-3">
      <div
        className={`max-w-[280px] bg-[#16181d] border border-[#2a2d35] rounded-xl rounded-br-sm px-4 py-3.5 text-[13px] text-[#a1a1aa] leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-400 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {text}
        <button
          onClick={dismiss}
          className="block mt-2 font-mono text-[10px] text-[#52525b] hover:text-[#71717a] cursor-pointer"
        >
          Got it x
        </button>
      </div>
      <button
        onClick={() => setVisible((v) => !v)}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg shadow-[0_4px_16px_rgba(99,102,241,0.15)] hover:scale-105 transition-transform flex-shrink-0"
        title="Chat with Bala"
      >
        B
      </button>
    </div>
  );
}
