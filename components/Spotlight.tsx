"use client";

import type { MouseEvent, ReactNode } from "react";

/** Carte dont le halo lumineux suit le curseur. */
export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }
  return (
    <div onMouseMove={onMove} className={`spot ${className}`}>
      {children}
    </div>
  );
}
