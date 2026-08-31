"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type Tag = "div" | "article" | "section" | "ul" | "li" | "span";

const MOTION_TAGS = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
} as const;

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Single element that fades + rises into view on scroll. */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 18,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotionSafe();
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </MotionTag>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const itemVariantsReduced: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
};

/** Wrapper that staggers its <RevealItem> children as the group scrolls in. */
export function RevealGroup({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag className={className} variants={reduce ? itemVariantsReduced : itemVariants}>
      {children}
    </MotionTag>
  );
}
