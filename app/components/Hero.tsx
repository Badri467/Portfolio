"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { profile } from "../content";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="hero container">
      <motion.div className="hero__inner" style={{ y: textY, opacity: fade }}>
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Code · Create · Solve
        </motion.p>

        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          Hi, I&apos;m
        </motion.p>

        <h1>
          <span className="line">
            <motion.span
              className="hero__name-1"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
            >
              Badri Narayana
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              className="hero__name-2"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
            >
              Kancharla
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.66 }}
        >
          {profile.intro}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.76 }}
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

      <motion.a
        href="#work"
        className="hero__scroll"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <span className="hero__scroll-mouse">
          <motion.span
            className="hero__scroll-dot"
            animate={reduce ? undefined : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Scroll
      </motion.a>
    </section>
  );
}
