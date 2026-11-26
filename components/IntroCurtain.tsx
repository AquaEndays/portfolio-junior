"use client";

import { useEffect, useState } from "react";

export function IntroCurtain({ onReady }: { onReady: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      frame = requestAnimationFrame(() => {
        setGone(true);
        onReady();
      });
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    const duration = 780;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        onReady();
        setTimeout(() => setGone(true), 550);
      }
    };

    frame = requestAnimationFrame(tick);

    const skip = () => {
      cancelAnimationFrame(frame);
      setProgress(100);
      setLeaving(true);
      onReady();
      setTimeout(() => setGone(true), 360);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
    };
    window.addEventListener("keydown", onKey, { once: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [onReady]);

  if (gone) return null;

  return (
    <div
      onClick={() => {
        setLeaving(true);
        onReady();
        setTimeout(() => setGone(true), 360);
      }}
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col justify-between bg-bg px-6 py-8 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:px-12 sm:py-10 ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between font-mono text-xs tracking-widest text-faint">
        <span>KENGNE JUNIOR · PORTFOLIO</span>
        <span>DOUALA, CM</span>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Full-Stack · IA · Réseaux
          </p>
          <p className="mt-2 font-display text-5xl font-bold tracking-tight text-fg sm:text-7xl">
            KJ<span className="text-accent">.</span>
          </p>
        </div>
        <div className="text-right font-mono">
          <span className="text-4xl font-semibold tabular-nums text-fg sm:text-6xl">
            {String(progress).padStart(2, "0")}
          </span>
          <span className="ml-1 text-sm text-accent">%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full bg-accent transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between font-mono text-[11px] text-faint">
          <span>CHARGEMENT DE L&apos;ATELIER NUMÉRIQUE</span>
          <span>CLIQUER POUR PASSER</span>
        </div>
      </div>
    </div>
  );
}
