"use client";

import { useEffect, useRef, useState } from "react";

const PHASES = [
  "INITIALISATION DE L'ATELIER",
  "CHARGEMENT DES PROJETS & SYSTÈMES",
  "PRÊT",
];

export function IntroLoader({ onReady }: { onReady: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [splitting, setSplitting] = useState(false);
  const [gone, setGone] = useState(false);
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      raf = requestAnimationFrame(() => {
        setGone(true);
        onReady();
      });
      return () => cancelAnimationFrame(raf);
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let burst = 0;
    let finished = false;

    const resize = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 110 }, (_, i) => {
      const angle = (i / 110) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 90 + Math.random() * Math.min(width, height) * 0.44;
      return {
        angle,
        radius,
        speed: (0.008 + Math.random() * 0.014) * (i % 2 === 0 ? 1 : -1),
        size: 1 + Math.random() * 2,
        alpha: 0.25 + Math.random() * 0.65,
        cyan: i % 3 !== 0,
      };
    });

    const start = performance.now();
    const duration = 1450;

    const triggerFinish = () => {
      if (finished) return;
      finished = true;
      burst = 1;
      setProgress(100);
      setSplitting(true);
      onReady();
      setTimeout(() => setGone(true), 720);
    };

    skipRef.current = triggerFinish;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);

      if (!finished) {
        setProgress(Math.round(eased * 100));
        if (t >= 1) triggerFinish();
      }

      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        const cx = width / 2;
        const cy = height / 2;

        const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 260 + eased * 120);
        glow.addColorStop(0, `rgba(56, 198, 217, ${0.18 * (1 - burst * 0.6)})`);
        glow.addColorStop(1, "rgba(56, 198, 217, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        if (burst > 0) burst = Math.min(4, burst * 1.09);

        for (const n of nodes) {
          n.angle += n.speed * (1 + eased * 1.8 + burst * 2);
          const pull = 1 - eased * 0.42 + burst * 0.85;
          const r = n.radius * pull;
          const x = cx + Math.cos(n.angle) * r;
          const y = cy + Math.sin(n.angle) * r * 0.72;
          const prevX = cx + Math.cos(n.angle - n.speed * 4) * (r + 8);
          const prevY = cy + Math.sin(n.angle - n.speed * 4) * (r + 8) * 0.72;

          ctx.strokeStyle = n.cyan
            ? `rgba(56, 198, 217, ${n.alpha * (1 - burst * 0.22)})`
            : `rgba(242, 244, 248, ${n.alpha * 0.65 * (1 - burst * 0.22)})`;
          ctx.lineWidth = n.size;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }

      if (!gone) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        triggerFinish();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKey);
    };
  }, [gone, onReady]);

  if (gone) return null;

  const phaseIndex = progress < 45 ? 0 : progress < 95 ? 1 : 2;

  return (
    <div
      onClick={() => skipRef.current()}
      aria-hidden="true"
      className="fixed inset-0 z-[110] cursor-pointer overflow-hidden select-none"
    >
      {/* Volets supérieur et inférieur */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#06080d] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          splitting ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#06080d] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          splitting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Champ cinétique */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
          splitting ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Interface centrale */}
      <div
        className={`relative z-10 flex h-full flex-col justify-between px-6 py-8 text-[#f2f4f8] transition-all duration-500 sm:px-12 sm:py-10 ${
          splitting ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em] text-white/50">
          <span>KENGNE JUNIOR</span>
          <span>DOUALA · CM</span>
        </div>

        <div className="mx-auto flex flex-col items-center text-center">
          <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 h-full w-full -rotate-90"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#38c6d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={339.29}
                strokeDashoffset={339.29 * (1 - progress / 100)}
              />
            </svg>
            <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              KJ<span className="text-[#38c6d9]">.</span>
            </span>
          </div>

          <p className="mt-6 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Développeur Full-Stack &amp; Systèmes
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.25em] text-[#38c6d9]">
            {PHASES[phaseIndex]}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="font-mono text-xs text-white/45">
            <span>Cliquer ou appuyer sur Entrée pour passer</span>
          </div>
          <div className="font-mono text-right">
            <span className="text-3xl font-bold tabular-nums text-white sm:text-5xl">
              {String(progress).padStart(2, "0")}
            </span>
            <span className="ml-1 text-sm text-[#38c6d9]">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
