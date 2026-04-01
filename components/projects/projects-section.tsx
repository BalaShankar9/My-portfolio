import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { HorizontalGallery } from "@/components/projects/horizontal-gallery";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <>
      <div id="projects">
        <HorizontalGallery projects={featuredProjects} />
      </div>

      {/* Secondary projects below */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>More Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
