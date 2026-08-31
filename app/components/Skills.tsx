import { skillGroups } from "../content";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        eyebrow="Technical range"
        title="Comfortable across APIs, data, deployment, and UI."
      />
      <RevealGroup className="skills">
        {skillGroups.map((group) => (
          <RevealItem as="article" className="card skill" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill__list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
