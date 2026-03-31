import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
