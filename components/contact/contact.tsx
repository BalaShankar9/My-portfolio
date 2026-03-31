import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SOCIAL, CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-zinc-800/50">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {CONTACT.availability}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something together.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${SOCIAL.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-zinc-800 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
            >
              <Mail size={16} />
              {SOCIAL.email}
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 rounded-lg border border-zinc-800 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Download CV
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
