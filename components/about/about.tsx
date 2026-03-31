import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>About</SectionHeading>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <ScrollReveal className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-2 border-indigo-500/30 bg-zinc-900 flex items-center justify-center">
              <span className="text-5xl font-bold text-indigo-500/60 font-mono">
                B
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex-1">
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
              <p>
                I don&apos;t have a CS degree or a job title to point to. What I
                have is 7 shipped products — real systems with real users, real
                databases, real AI agents.
              </p>
              <p>
                I taught myself to code by building things that solve problems I
                actually had: finding UK visa sponsors, automating job
                applications, pooling rides with strangers.
              </p>
              <p>
                I use AI as a tool, not a crutch. Every project on this page is
                something I conceived, designed, built, and deployed myself.
              </p>
              <p>
                I&apos;m looking for a team where output matters more than
                credentials.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={14} />
              <span>{CONTACT.location}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              MA Digital Media Management — Sheffield Hallam University, 2023
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
