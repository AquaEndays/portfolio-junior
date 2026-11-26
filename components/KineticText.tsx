"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function useInViewOnce<T extends HTMLElement>(threshold = 0.14) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

export function MaskedLine({
  children,
  delay = 0,
  immediate,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  immediate?: boolean;
  className?: string;
}) {
  const { ref, shown } = useInViewOnce<HTMLSpanElement>(0.1);
  const active = immediate !== undefined ? immediate : shown;

  return (
    <span ref={ref} className={`reveal-line-wrap ${className}`}>
      <span
        style={{ "--d": `${delay}ms` } as CSSProperties}
        className={`reveal-line ${active ? "in" : ""}`}
      >
        {children}
      </span>
    </span>
  );
}

export function WordStream({
  text,
  baseDelay = 0,
  stepMs = 24,
  immediate,
  className = "",
}: {
  text: string;
  baseDelay?: number;
  stepMs?: number;
  immediate?: boolean;
  className?: string;
}) {
  const { ref, shown } = useInViewOnce<HTMLSpanElement>(0.12);
  const active = immediate !== undefined ? immediate : shown;
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`}>
          <span
            style={{ "--d": `${baseDelay + Math.min(idx * stepMs, 780)}ms` } as CSSProperties}
            className={`reveal-word ${active ? "in" : ""}`}
          >
            {word}
          </span>
          {idx < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function RoleCycler({
  roles,
  className = "",
}: {
  roles: string[];
  className?: string;
}) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [chars, setChars] = useState(roles[0]?.length ?? 0);
  const [phase, setPhase] = useState<"hold" | "delete" | "type">("hold");

  useEffect(() => {
    const current = roles[roleIdx] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "hold") {
      timer = setTimeout(() => setPhase("delete"), 2400);
    } else if (phase === "delete") {
      if (chars > 0) {
        timer = setTimeout(() => setChars((c) => c - 1), 24);
      } else {
        timer = setTimeout(() => {
          setRoleIdx((i) => (i + 1) % roles.length);
          setPhase("type");
        }, 120);
      }
    } else {
      if (chars < current.length) {
        timer = setTimeout(() => setChars((c) => c + 1), 42);
      } else {
        timer = setTimeout(() => setPhase("hold"), 80);
      }
    }

    return () => clearTimeout(timer);
  }, [chars, phase, roleIdx, roles]);

  const displayed = (roles[roleIdx] ?? "").slice(0, chars);

  return (
    <span className={className} aria-live="polite">
      {displayed}
      <span className="type-cursor" aria-hidden />
    </span>
  );
}
