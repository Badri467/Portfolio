"use client";

import { useEffect } from "react";

const TEXT_TARGET_SELECTOR = [
  ".section-heading h2",
  ".project-card h3",
  ".project-card p",
  ".timeline-card h3",
  ".proof-section h2",
  ".metric-card strong",
  ".metric-card span",
  ".skill-card h3",
  ".skill-cloud span",
  ".hero-status span:last-child",
  ".contact-section h2",
  ".contact-section p",
].join(",");

export default function TextShimmerFollow() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !finePointer) {
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>(TEXT_TARGET_SELECTOR));
    let activeTarget: HTMLElement | null = null;

    targets.forEach((target) => target.classList.add("text-shimmer-target"));

    const clearActiveTarget = () => {
      activeTarget?.classList.remove("is-shimmering");
      activeTarget = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(TEXT_TARGET_SELECTOR)
        : null;

      if (!target) {
        clearActiveTarget();
        return;
      }

      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      if (activeTarget && activeTarget !== target) {
        activeTarget.classList.remove("is-shimmering");
      }

      activeTarget = target;
      target.style.setProperty("--shimmer-x", `${Math.max(0, Math.min(100, x))}%`);
      target.style.setProperty("--shimmer-y", `${Math.max(0, Math.min(100, y))}%`);
      target.classList.add("is-shimmering");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", clearActiveTarget);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", clearActiveTarget);
      clearActiveTarget();
      targets.forEach((target) => {
        target.classList.remove("text-shimmer-target", "is-shimmering");
        target.style.removeProperty("--shimmer-x");
        target.style.removeProperty("--shimmer-y");
      });
    };
  }, []);

  return null;
}
