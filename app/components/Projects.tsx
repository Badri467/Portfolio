import { projects } from "../content";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        eyebrow="Selected projects"
        title="Systems that pair product thinking with backend depth."
      />
      <RevealGroup className="projects">
        {projects.map((project) => (
          <RevealItem key={project.name}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
