import { CursorGlow } from "@/components/ui/cursor-glow";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { HowIBuild } from "@/components/how-i-build/how-i-build";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <main>
        <Hero />
        <ProjectsSection />
        <HowIBuild />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
