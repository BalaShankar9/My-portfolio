"use client";

import { TextReveal } from "@/components/ui/text-reveal";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <TextReveal as="h2" className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
        {children}
      </TextReveal>
      <div className="mt-4 h-px w-16 bg-indigo-500" />
    </div>
  );
}
