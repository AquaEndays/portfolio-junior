"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let scrollBoost = 0;
    let lastScroll = window.scrollY;
    const pointer = { x: -9999, y: -9999 };

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      len: 18 + Math.random() * 44,
      speed: 0.00025 + Math.random() * 0.00055,
      alpha: 0.08 + Math.random() * 0.22,
      width: 0.8 + Math.random() * 1.1,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScroll);
      lastScroll = window.scrollY;
      scrollBoost = Math.min(4.5, scrollBoost + delta * 0.015);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      scrollBoost *= 0.94;
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const rgb = isDark ? "56, 198, 217" : "11, 122, 140";

      for (const p of particles) {
        p.x += p.speed * (1 + scrollBoost * 2.4);
        if (p.x > 1.08) {
          p.x = -0.08;
          p.y = Math.random();
        }

        const px = p.x * width;
        const py = p.y * height;
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const dist = Math.hypot(dx, dy);
        const proximity = dist < 180 ? (1 - dist / 180) * 0.25 : 0;

        ctx.strokeStyle = `rgba(${rgb}, ${Math.min(0.55, p.alpha + proximity)})`;
        ctx.lineWidth = p.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + p.len * (1 + scrollBoost * 0.45), py - 2);
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      />
      <div aria-hidden className="grain-overlay" />
    </>
  );
}
