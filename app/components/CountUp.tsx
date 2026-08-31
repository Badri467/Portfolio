"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

function parse(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return {
    target: parseFloat(match[1]),
    suffix: match[2],
    decimals: match[1].includes(".") ? match[1].split(".")[1].length : 0,
  };
}

/**
 * Counts a leading number up when scrolled into view.
 * Non-numeric values (e.g. "CodeChef 2★") render as-is.
 */
export default function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotionSafe();
  const parsed = parse(value);

  // SSR + first client render show the real value so hydration matches.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || reduce || !inView) return;

    const { target, suffix, decimals } = parsed;
    const duration = 1100;
    const startAt = performance.now() + delay;
    let raf = 0;

    const tick = (now: number) => {
      if (now >= startAt) {
        const t = Math.min(1, (now - startAt) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${(eased * target).toFixed(decimals)}${suffix}`);
        if (t >= 1) return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, delay]);

  return (
    <span ref={ref} className="mono">
      {display}
    </span>
  );
}
