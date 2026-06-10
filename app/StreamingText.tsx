"use client";

import { useEffect, useMemo, useState } from "react";

type StreamingTextProps = {
  className?: string;
  speed?: number;
  startDelay?: number;
  text: string;
};

export default function StreamingText({
  className = "",
  speed = 18,
  startDelay = 650,
  text,
}: StreamingTextProps) {
  const letters = useMemo(() => Array.from(text), [text]);
  const [visibleCount, setVisibleCount] = useState(0);
  const isComplete = visibleCount >= letters.length;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const reduceMotionTimeout = window.setTimeout(() => {
        setVisibleCount(letters.length);
      }, 0);

      return () => window.clearTimeout(reduceMotionTimeout);
    }

    let index = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= letters.length && intervalId) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [letters.length, speed, startDelay]);

  return (
    <p className={`${className} streaming-text`} aria-label={text}>
      <span className="streaming-text__ghost" aria-hidden="true">
        {text}
      </span>
      <span className="streaming-text__live" aria-hidden="true">
        {letters.slice(0, visibleCount).join("")}
        <span className={`streaming-text__cursor${isComplete ? " complete" : ""}`} />
      </span>
    </p>
  );
}
