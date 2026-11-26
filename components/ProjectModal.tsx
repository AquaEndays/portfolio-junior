"use client";

import { useEffect, useState } from "react";
import type { FlagshipProject } from "@/lib/data";

export function ProjectMockup({ kind }: { kind: FlagshipProject["mockupKind"] }) {
  if (kind === "aurora") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0c1624] p-5 text-white">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#f97316] text-[10px] font-bold">
              A
            </span>
            <span className="font-display text-xs font-bold tracking-wide">AURORA.</span>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-[#f97316] px-2 py-0.5 text-[9px] font-semibold">
              Tous
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/70">
              Planches
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/70">
              Maillots
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-display text-lg font-bold italic tracking-tight">
            L&apos;Esprit Aurora
          </p>
          <p className="text-[11px] text-white/60">
            L&apos;élégance du surf, la chaleur des tropiques.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { name: "Aurora Longboard", price: "850€", bg: "from-sky-400/30 to-amber-300/30" },
            { name: "Deep Blue Shorts", price: "39€", bg: "from-indigo-400/30 to-cyan-300/20" },
            { name: "Rio Sunset", price: "45€", bg: "from-orange-400/35 to-rose-400/25" },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-2">
              <div className={`h-14 rounded-lg bg-gradient-to-br ${item.bg}`} />
              <p className="mt-2 truncate text-[10px] font-medium">{item.name}</p>
              <p className="font-mono text-[9px] text-orange-300">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "alibell") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#101827] p-5 text-white">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="font-display text-xs font-bold text-amber-300">AliBell</span>
          <div className="flex gap-2 font-mono text-[9px] text-white/60">
            <span>Boutique</span>
            <span>Nouveautés</span>
            <span>Promotions</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="font-display text-base font-extrabold tracking-wide">
            ALIBELL HUB MARKET
          </p>
          <div className="mx-auto mt-2.5 flex max-w-[230px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] text-white/50">
            <span>Rechercher une référence...</span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {["Tous", "Vêtements", "Électronique", "Accessoires"].map((cat, idx) => (
              <span
                key={cat}
                className={`rounded-full px-2.5 py-0.5 text-[9px] ${
                  idx === 0 ? "bg-sky-500 text-white" : "bg-white/10 text-white/70"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
            <div className="h-2 w-14 rounded bg-sky-400/50" />
            <div className="mt-2 h-2 w-24 rounded bg-white/20" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
            <div className="h-2 w-12 rounded bg-amber-400/50" />
            <div className="mt-2 h-2 w-20 rounded bg-white/20" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "pavillon") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#12131a] p-5 text-white">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-[10px] text-white/60">
              PavillonGourmet.jar · JavaFX
            </span>
          </div>
          <span className="rounded bg-amber-400/15 px-2 py-0.5 font-mono text-[9px] text-amber-300">
            MVC · MySQL
          </span>
        </div>
        <div className="mt-4 grid grid-cols-[0.36fr,0.64fr] gap-3">
          <div className="space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5 font-mono text-[9px] text-white/70">
            <div className="rounded bg-accent/20 px-2 py-1 text-accent">Dashboard</div>
            <div className="px-2 py-1">Réservations</div>
            <div className="px-2 py-1">Menu &amp; Plats</div>
            <div className="px-2 py-1">Tables</div>
          </div>
          <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold">Console Restaurant</span>
              <span className="font-mono text-[9px] text-emerald-400">DAO JDBC OK</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {["Table 04", "Table 07", "Table 11"].map((t) => (
                <div
                  key={t}
                  className="rounded border border-white/10 bg-white/5 px-2 py-2 text-center font-mono text-[9px] text-white/80"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c1518] p-5 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[10px] text-white/70">
        <span>*.endecommerce.app</span>
        <span className="rounded bg-emerald-400/15 px-2 py-0.5 text-[9px] text-emerald-300">
          Multi-Tenant
        </span>
      </div>
      <div className="mt-4 space-y-2.5 font-mono text-[10px]">
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <span className="text-sky-300">shop-a.endecommerce</span>
          <span className="text-white/50">Vitrine Next.js</span>
        </div>
        <div className="flex items-center justify-center text-white/40">↓ JWT · Tenant ID</div>
        <div className="flex items-center justify-between rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-3 py-2">
          <span className="text-emerald-300">API Spring Boot</span>
          <span className="text-white/70">PostgreSQL</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: FlagshipProject;
  onClose: () => void;
}) {
  const [viewMode, setViewMode] = useState<"live" | "arch">(
    project.embeddable && project.liveUrl ? "live" : "arch"
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90dvh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-line-strong bg-bg-soft shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-accent">
              {project.category}
            </span>
            <h3 id="modal-title" className="font-display text-xl font-bold text-fg">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.embeddable && project.liveUrl && (
              <div className="flex rounded-full border border-line bg-bg p-1 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("live")}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    viewMode === "live" ? "bg-accent text-[#061017] font-semibold" : "text-muted"
                  }`}
                >
                  Aperçu live
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("arch")}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    viewMode === "arch" ? "bg-accent text-[#061017] font-semibold" : "text-muted"
                  }`}
                >
                  Architecture
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer l'aperçu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-fg"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid flex-1 overflow-y-auto lg:grid-cols-[1.2fr,0.8fr]">
          <div className="relative min-h-[300px] border-b border-line bg-bg lg:min-h-[440px] lg:border-b-0 lg:border-r">
            {viewMode === "live" && project.embeddable && project.liveUrl ? (
              <iframe
                src={project.liveUrl}
                title={`Aperçu en direct de ${project.title}`}
                className="h-full min-h-[340px] w-full border-0 bg-white lg:min-h-[460px]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-line-strong shadow-xl">
                  <ProjectMockup kind={project.mockupKind} />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs tracking-wider text-accent">
                  {project.status.toUpperCase()}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <p className="mb-2.5 font-mono text-xs tracking-wider text-faint">
                  POINTS CLÉS TECHNIQUES
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2.5 font-mono text-xs tracking-wider text-faint">
                  STACK UTILISÉE
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Ouvrir en production ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Code source GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
