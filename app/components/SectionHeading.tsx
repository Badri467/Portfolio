"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export default function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  const reduce = useReducedMotionSafe();

  return (
    <div className="section-head">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 -10% 0)" }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {lede ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {lede}
        </motion.p>
      ) : null}
    </div>
  );
}
