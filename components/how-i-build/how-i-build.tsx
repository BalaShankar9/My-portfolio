import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  {
    title: "Ship Fast",
    description:
      "7 products in under a year. I don't overthink — I build, ship, learn, iterate.",
  },
  {
    title: "Use AI Honestly",
    description:
      "AI is my pair programmer, not my ghost writer. I understand every line that ships.",
  },
  {
    title: "Solve Real Problems",
    description:
      "Every project started from a problem I or someone I know actually faced. No toy demos.",
  },
];

export function HowIBuild() {
  return (
    <section className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <h3 className="text-xl font-bold text-zinc-100">
                {pillar.title}
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
