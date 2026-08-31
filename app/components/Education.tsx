import { education } from "../content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading eyebrow="Education" title="Academic foundation." />
      <Reveal>
        <article className="card edu">
          <p className="eyebrow">2022 — 2026</p>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <span className="tag tag--accent edu__gpa">{education.gpa}</span>
        </article>
      </Reveal>
    </section>
  );
}
