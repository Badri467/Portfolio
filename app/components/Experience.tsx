import { experience } from "../content";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

export default function Experience() {
  return (
    <section id="work" className="section container">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped."
        lede="Backend services, APIs, and AI agents in production settings."
      />
      <RevealGroup className="timeline">
        {experience.map((item) => (
          <RevealItem as="article" className="xp" key={item.title + item.period}>
            <div>
              <p className="xp__period">{item.period}</p>
              <h3 style={{ marginTop: 14 }}>{item.title}</h3>
              <p className="xp__company">{item.company}</p>
            </div>
            <ul className="xp__points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
