"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorEl = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a, button, [role='button'], input, select");

      if (cursorEl) {
        setLabel(cursorEl.dataset.cursor ?? "");
        setHovering(true);
      } else if (interactive) {
        setLabel("");
        setHovering(true);
      } else {
        setLabel("");
        setHovering(false);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[120] hidden transition-opacity duration-200 md:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border transition-[width,height,margin,background-color,border-color] duration-200 ease-out ${
          label
            ? "-ml-10 -mt-10 h-20 w-20 border-accent bg-accent/15 backdrop-blur-sm"
            : hovering
              ? "-ml-7 -mt-7 h-14 w-14 border-accent bg-accent/10"
              : "border-accent/60 bg-transparent"
        }`}
      >
        {label && (
          <span className="font-mono text-[10px] font-semibold tracking-wider text-fg">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent transition-transform duration-150 ${
          hovering ? "scale-0" : "scale-100"
        }`}
      />
    </div>
  );
}
