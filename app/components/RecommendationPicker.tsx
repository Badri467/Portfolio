"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { Close } from "./icons";

type RecommendationPickerProps = {
  label: string;
  items: string[];
  prompt: string;
  title: string;
};

export default function RecommendationPicker({
  label,
  items,
  prompt,
  title,
}: RecommendationPickerProps) {
  const [index, setIndex] = useState<number | null>(null);
  const [spin, setSpin] = useState(0);
  const reduce = useReducedMotionSafe();

  const pick = () => {
    setIndex((current) => {
      if (items.length <= 1) return items.length - 1;
      let next = Math.floor(Math.random() * items.length);
      while (next === current) next = Math.floor(Math.random() * items.length);
      return next;
    });
    setSpin((n) => n + 1);
  };

  const active = index === null ? null : items[index];

  return (
    <div className="card rec">
      <span className="rec__label">{label}</span>
      <button type="button" className="btn rec__trigger" onClick={pick}>
        {prompt}
      </button>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={`${active}-${spin}`}
            className="rec__result"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <strong>{active}</strong>
            <button
              type="button"
              className="rec__close"
              onClick={() => setIndex(null)}
              aria-label={`Dismiss ${title} recommendation`}
            >
              <Close />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
