import { CursorGlow } from "@/components/ui/cursor-glow";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { HowIBuild } from "@/components/how-i-build/how-i-build";
import { About } from "@/components/about/about";
import { EducationSection } from "@/components/education/education-section";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <HowIBuild />
        <About />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
