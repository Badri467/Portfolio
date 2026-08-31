"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { navSections } from "../content";

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string>("");
  const lastY = useRef(0);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Move the pill under the active link
  useEffect(() => {
    const el = linkRefs.current[active];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <motion.nav
      className="nav"
      aria-label="Primary"
      data-hidden={hidden}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <a className="nav__brand" href="#top" aria-label="Back to top">
        <span>BK</span>
        Badri Narayana
      </a>
      <div className="nav__links">
        {pill ? (
          <motion.span
            className="nav__pill"
            aria-hidden="true"
            initial={{ left: pill.left, width: pill.width, opacity: 0 }}
            animate={{ left: pill.left, width: pill.width, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          />
        ) : null}
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            ref={(node) => {
              linkRefs.current[id] = node;
            }}
            className="nav__link"
            href={`#${id}`}
            data-active={active === id}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
