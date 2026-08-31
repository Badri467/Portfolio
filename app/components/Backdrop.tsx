"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Cinematic ambient background: drifting aurora blobs (CSS) plus a slow
 * constellation network on a canvas — a nod to distributed systems and
 * retrieval graphs. Pauses when the tab is hidden and switches off entirely
 * under prefers-reduced-motion.
 */
export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const LINK_DIST = 150;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(Math.min(38, Math.max(14, (width * height) / 52000)));
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };
    resize();

    let raf = 0;
    let tick = 0;
    let running = true;

    const render = () => {
      // Redraw every 3rd frame (~20fps) — the field drifts slowly, so this is
      // imperceptible and keeps the main thread free under CPU throttling.
      tick += 1;
      if (tick % 3 === 0) {
        ctx.clearRect(0, 0, width, height);

        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }

        // links — one batched path per alpha bucket is overkill; a single
        // path with a mid alpha reads fine and costs one stroke call.
        ctx.strokeStyle = "rgba(96, 165, 250, 0.14)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            if (dx * dx + dy * dy < LINK_DIST * LINK_DIST) {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
            }
          }
        }
        ctx.stroke();

        ctx.fillStyle = "rgba(120, 175, 255, 0.7)";
        for (const n of nodes) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (running) raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(render);
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__aurora backdrop__aurora--1" />
      <div className="backdrop__aurora backdrop__aurora--2" />
      <div className="backdrop__aurora backdrop__aurora--3" />
      <canvas ref={canvasRef} className="backdrop__net" />
      <div className="backdrop__vignette" />
    </div>
  );
}
