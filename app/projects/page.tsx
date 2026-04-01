import { projects } from "@/lib/projects";
import { ProjectsGallery } from "@/components/projects/projects-gallery";

export const metadata = {
  title: "Projects — Bala Sankar Bollineni",
  description: "7 shipped products across AI agents, web scraping, ride-sharing, security tools, and more.",
};

export default function ProjectsPage() {
  return <ProjectsGallery projects={projects} />;
}
