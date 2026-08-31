import { achievements } from "../content";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { ArrowUpRight } from "./icons";

export default function Achievements() {
  return (
    <section id="achievements" className="section container">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition, contests, and consistent problem solving."
      />
      <RevealGroup className="achievements">
        {achievements.map((item) => (
          <RevealItem as="article" className="card achievement" key={item.name + item.date}>
            <div className="achievement__top">
              <span>{item.tag}</span>
              <span>{item.date}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer">
                Open certificate
                <ArrowUpRight />
              </a>
            ) : null}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
