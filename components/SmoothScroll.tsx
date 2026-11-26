"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let raf = 0;
    let running = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const step = () => {
      const diff = target - current;
      current += diff * 0.11;

      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }

      window.scrollTo(0, current);
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || document.querySelector('[role="dialog"]')) return;
      e.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY * 1.05));
      start();
    };

    const onScroll = () => {
      if (!running) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const top =
        el.getBoundingClientRect().top + window.scrollY - (href === "#accueil" ? 0 : 72);
      target = Math.max(0, Math.min(maxScroll(), top));
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
