"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Cinematic image backdrop. A wide sunset sits over the hero; a tall vertical
 * scene pans from its sky down to its lantern-lit path as you scroll the page,
 * so the background travels with the site. The pan is a GPU transform on an
 * <img>, not a background-position repaint.
 */
export default function Backdrop() {
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();

  // How far the tall image can travel: its rendered height minus the viewport.
  const [travel, setTravel] = useState(0);
  useEffect(() => {
    const ratio = 1983 / 793; // source aspect of scene-vertical
    const measure = () => {
      const rendered = window.innerWidth * ratio;
      setTravel(Math.max(0, rendered - window.innerHeight));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -travel]);
  // The sunset lifts up and away as you enter the content, revealing the
  // vertical scene beneath. (Translate, not opacity — keeps it a GPU transform.)
  const heroY = useTransform(scrollYProgress, [0, 0.32], ["0%", reduce ? "0%" : "-118%"]);

  return (
    <div className="backdrop" aria-hidden="true">
      <motion.img
        src="/scene-vertical.webp"
        alt=""
        className="backdrop__scene"
        style={{ y: sceneY }}
        draggable={false}
      />
      <motion.div className="backdrop__hero" style={{ y: heroY }} />
      <div className="backdrop__wash" />
      <div className="backdrop__grain" />
    </div>
  );
}
