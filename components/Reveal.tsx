"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useInViewOnce } from "./KineticText";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useInViewOnce<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      className={`reveal ${shown ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
