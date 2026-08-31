"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { profile } from "../content";
import MagneticButton from "./MagneticButton";
import Avatar from "./Avatar";
import { ArrowRight } from "./icons";

const headlineLines = ["Badri Narayana", "Kancharla"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const slabY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse-reactive slab rotation
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 60, damping: 18 });
  const sry = useSpring(ry, { stiffness: 60, damping: 18 });

  const handleMove = (event: React.MouseEvent) => {
    if (reduce) return;
    const { innerWidth, innerHeight } = window;
    ry.set((event.clientX / innerWidth - 0.5) * 18);
    rx.set((0.5 - event.clientY / innerHeight) * 18);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="hero container"
      onMouseMove={handleMove}
    >
      <div className="hero__grid">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI · Backend · Production systems
          </motion.p>

          <h1>
            {headlineLines.map((line, i) => (
              <span className="line" key={line}>
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.32 + i * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
          >
            <MagneticButton href="#projects" className="btn btn--primary">
              Explore projects
              <ArrowRight />
            </MagneticButton>
            <MagneticButton href="#contact" className="btn">
              Contact
            </MagneticButton>
            <MagneticButton href={profile.resume} className="btn" download>
              Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero__status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {profile.status.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="slab"
          aria-hidden="true"
          style={{ y: slabY, opacity: fade }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="slab__stage" style={{ rotateX: srx, rotateY: sry }}>
            <div className="slab__plane slab__plane--back" style={{ transform: "translateZ(-50px)" }} />
            <div
              className="slab__plane slab__plane--screen"
              style={{ transform: "translateZ(0px)" }}
            >
              <div className="slab__grid" />
              <div className="slab__avatar" style={{ transform: "translateZ(48px)" }}>
                <Avatar />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
