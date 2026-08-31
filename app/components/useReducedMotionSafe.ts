"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Hydration-safe reduced-motion check.
 *
 * Returns `false` on the server and on the first client render so the SSR
 * markup and the hydration render always agree, then resolves to the user's
 * real preference on the next tick. This one-time post-mount state update is
 * the intended pattern here, not a synchronisation bug.
 */
export function useReducedMotionSafe(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const sync = () => setReduced(mq.matches);
     
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}
