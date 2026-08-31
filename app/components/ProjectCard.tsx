"use client";

import type { Project } from "../content";
import TiltCard from "./TiltCard";
import { ArrowUpRight, Lock } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="card project">
      <span className="project__spot" aria-hidden="true" />

      <div className="project__top">
        <span>{project.date}</span>
        <span>{project.stack}</span>
      </div>

      <h3>{project.name}</h3>
      <p className="project__summary">{project.summary}</p>

      <ul className="project__points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.href ? (
        <a
          className="project__link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.linkLabel}
          <ArrowUpRight />
        </a>
      ) : (
        <span className="project__link" data-static="true">
          <Lock />
          {project.linkLabel}
        </span>
      )}
    </TiltCard>
  );
}
