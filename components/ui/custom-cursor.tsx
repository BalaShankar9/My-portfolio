"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    // Hover detection — grow ring on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea");
      if (ringRef.current) {
        ringRef.current.style.width = isInteractive ? "60px" : "40px";
        ringRef.current.style.height = isInteractive ? "60px" : "40px";
        ringRef.current.style.borderColor = isInteractive
          ? "rgba(99, 102, 241, 0.5)"
          : "rgba(244, 244, 245, 0.15)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small dot — follows exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-400 pointer-events-none z-[9999] hidden lg:block"
        style={{ transition: "none" }}
      />
      {/* Larger ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-zinc-100/15 pointer-events-none z-[9998] hidden lg:block"
        style={{ transition: "width 0.3s, height 0.3s, border-color 0.3s" }}
      />
    </>
  );
}
