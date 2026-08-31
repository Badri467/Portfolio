"use client";

import { metrics } from "../content";
import { RevealGroup, RevealItem } from "./Reveal";
import CountUp from "./CountUp";

export default function Metrics() {
  return (
    <section className="section container" aria-label="Highlights">
      <RevealGroup className="metrics">
        {metrics.map((metric, i) => {
          const inner = (
            <>
              <div className="metric__value">
                <CountUp value={metric.value} delay={i * 140} />
              </div>
              <div className="metric__label">{metric.label}</div>
            </>
          );
          return metric.href ? (
            <RevealItem
              as="span"
              key={metric.label}
              className="metric"
            >
              <a href={metric.href} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                {inner}
              </a>
            </RevealItem>
          ) : (
            <RevealItem key={metric.label} className="metric">
              {inner}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
