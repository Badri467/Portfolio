"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { certifications } from "../content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useMounted } from "./useMounted";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "./icons";

export type CertificateItem = {
  date: string;
  href?: string;
  issuer: string;
  name: string;
  tag: string;
};

const VISIBLE = 3;

function CardBody({ cert }: { cert: CertificateItem }) {
  return (
    <>
      <div>
        <span className="tag tag--accent">{cert.tag}</span>
        <h3 style={{ marginTop: 16 }}>{cert.name}</h3>
        <p className="deck__issuer">{cert.issuer}</p>
      </div>
      <div className="deck__meta">
        <span>{cert.date}</span>
        {cert.href ? (
          <a className="deck__link" href={cert.href} target="_blank" rel="noreferrer">
            View certificate
            <ArrowUpRight />
          </a>
        ) : (
          <span>Credential</span>
        )}
      </div>
    </>
  );
}

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const mounted = useMounted();
  const reduce = useReducedMotionSafe();
  const total = certifications.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="certifications" className="section container">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials across AI, cloud, databases, and networking."
      />

      <Reveal>
        <div className="deck">
          <div className="deck__stage">
            {!mounted ? (
              <article className="deck__card" style={{ zIndex: total }}>
                <CardBody cert={certifications[0]} />
              </article>
            ) : (
              certifications.map((cert, i) => {
                const offset = (i - index + total) % total;
                if (offset >= VISIBLE) return null;

                return (
                  <motion.article
                    key={cert.name + cert.date}
                    className="deck__card"
                    initial={false}
                    animate={
                      reduce
                        ? { opacity: offset === 0 ? 1 : 0, y: 0, x: 0, scale: 1 }
                        : {
                            y: offset * 28,
                            x: offset * 14,
                            scale: 1 - offset * 0.05,
                            opacity: offset === 0 ? 1 : 0.62 - (offset - 1) * 0.28,
                          }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    style={{
                      zIndex: total - offset,
                      pointerEvents: offset === 0 ? "auto" : "none",
                    }}
                    drag={offset === 0 && !reduce ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) go(1);
                      else if (info.offset.x > 60) go(-1);
                    }}
                  >
                    <CardBody cert={cert} />
                  </motion.article>
                );
              })
            )}
          </div>

          <div className="deck__controls">
            <button
              type="button"
              className="deck__nav"
              onClick={() => go(-1)}
              aria-label="Previous certificate"
            >
              <ChevronLeft />
            </button>
            <span className="deck__count">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="deck__nav"
              onClick={() => go(1)}
              aria-label="Next certificate"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
