"use client";

import { useEffect, useState } from "react";

/**
 * Écrit le nom lettre par lettre, puis l'efface, puis recommence en boucle.
 */
export function Typewriter({ text, className = "" }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, 90 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, 45);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 600);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, text]);

  return (
    <span className={className}>
      {displayed}
      <span className="type-cursor" aria-hidden />
    </span>
  );
}
