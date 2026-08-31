"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Pixel-art developer avatar for the hero. The eyes track the pointer and it
 * blinks on an idle timer. Purely decorative.
 */
export default function Avatar() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const [blink, setBlink] = useState(false);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const eyeX = useSpring(px, { stiffness: 140, damping: 16, mass: 0.3 });
  const eyeY = useSpring(py, { stiffness: 140, damping: 16, mass: 0.3 });

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        px.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2))) * 2.4);
        py.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2))) * 2.2);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduce, px, py]);

  useEffect(() => {
    if (reduce) return;
    let timeout: number;
    const loop = () => {
      timeout = window.setTimeout(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 130);
        loop();
      }, 2600 + Math.random() * 3200);
    };
    loop();
    return () => window.clearTimeout(timeout);
  }, [reduce]);

  // palette
  const skin = "#e6b58f";
  const skinShade = "#cf9d78";
  const hair = "#2b2f3a";
  const hood = "#1f2a44";
  const hoodShade = "#18213a";
  const lens = "#0b0b0c";
  const frame = "#60a5fa";

  return (
    <div ref={wrapRef} className="avatar" aria-hidden="true">
      <svg
        viewBox="0 0 128 128"
        shapeRendering="crispEdges"
        className="avatar__svg"
      >
        {/* hood / shoulders */}
        <rect x="24" y="96" width="80" height="32" fill={hood} />
        <rect x="24" y="96" width="80" height="6" fill={hoodShade} />
        <rect x="52" y="92" width="24" height="8" fill={skinShade} />
        <rect x="44" y="96" width="8" height="16" fill={hoodShade} />
        <rect x="76" y="96" width="8" height="16" fill={hoodShade} />

        {/* neck */}
        <rect x="56" y="84" width="16" height="12" fill={skinShade} />

        {/* head */}
        <rect x="36" y="28" width="56" height="56" fill={skin} />
        <rect x="36" y="28" width="56" height="6" fill={skinShade} />
        <rect x="36" y="60" width="6" height="14" fill={skinShade} />
        <rect x="86" y="60" width="6" height="14" fill={skinShade} />

        {/* ears */}
        <rect x="30" y="52" width="8" height="14" fill={skin} />
        <rect x="90" y="52" width="8" height="14" fill={skin} />

        {/* hair */}
        <rect x="32" y="18" width="64" height="16" fill={hair} />
        <rect x="32" y="18" width="8" height="30" fill={hair} />
        <rect x="88" y="18" width="8" height="26" fill={hair} />
        <rect x="40" y="34" width="12" height="6" fill={hair} />
        <rect x="60" y="12" width="20" height="8" fill={hair} />

        {/* glasses */}
        <rect x="40" y="50" width="24" height="18" fill={lens} />
        <rect x="66" y="50" width="24" height="18" fill={lens} />
        <rect x="40" y="48" width="24" height="3" fill={frame} />
        <rect x="66" y="48" width="24" height="3" fill={frame} />
        <rect x="40" y="67" width="24" height="3" fill={frame} />
        <rect x="66" y="67" width="24" height="3" fill={frame} />
        <rect x="38" y="48" width="3" height="22" fill={frame} />
        <rect x="63" y="48" width="3" height="22" fill={frame} />
        <rect x="66" y="48" width="3" height="22" fill={frame} />
        <rect x="90" y="48" width="3" height="22" fill={frame} />
        <rect x="64" y="55" width="4" height="3" fill={frame} />
        {/* lens glint */}
        <rect x="44" y="53" width="4" height="4" fill="#1f3a63" />
        <rect x="70" y="53" width="4" height="4" fill="#1f3a63" />

        {/* eyes (tracking) */}
        <motion.g style={{ x: eyeX, y: eyeY }}>
          <rect x="49" y="56" width="6" height="7" fill="#0b0b0c" />
          <rect x="75" y="56" width="6" height="7" fill="#0b0b0c" />
          <rect x="50" y="57" width="2" height="2" fill="#dfe8ff" />
          <rect x="76" y="57" width="2" height="2" fill="#dfe8ff" />
        </motion.g>
        {/* eyelids */}
        {blink ? (
          <>
            <rect x="49" y="55" width="6" height="8" fill={skin} />
            <rect x="75" y="55" width="6" height="8" fill={skin} />
          </>
        ) : null}

        {/* mouth */}
        <rect x="56" y="76" width="16" height="3" fill={skinShade} />

        {/* static code bits */}
        <rect x="14" y="38" width="6" height="6" fill={frame} opacity="0.6" />
        <rect x="108" y="74" width="6" height="6" fill="#3b82f6" opacity="0.5" />
        <rect x="12" y="86" width="6" height="6" fill="#3b82f6" opacity="0.35" />
      </svg>
      <span className="avatar__tag mono">~/badri —— online</span>
    </div>
  );
}
