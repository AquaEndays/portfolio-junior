"use client";

import { webProjects, webInProgress, type WebProject } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

function domaine(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function WebCard({ p }: { p: WebProject }) {
  const soon = p.status === "soon";
  return (
    <Spotlight className="group h-full !rounded-2xl !p-0 overflow-hidden">
      <article className="relative flex h-full flex-col">
        {/* Page de garde / cover */}
        <div
          className="project-cover"
          style={{
            background: `linear-gradient(145deg, hsl(${p.hue} 80% 55% / 0.95), hsl(${(p.hue + 55) % 360} 75% 45% / 0.9))`,
          }}
        >
          <div
            className="project-cover-glow"
            style={{
              top: "10%",
              left: "15%",
              background: `hsl(${p.hue} 90% 70%)`,
            }}
          />
          <div
            className="project-cover-glow"
            style={{
              bottom: "5%",
              right: "10%",
              background: `hsl(${(p.hue + 60) % 360} 90% 65%)`,
              animationDelay: "-2s",
            }}
          />
          <span
            aria-hidden
            className="absolute -right-2 top-2 text-[7rem] font-bold leading-none text-white/15 select-none"
          >
            {p.title.charAt(0)}
          </span>
          <div className="absolute inset-0 z-[1] flex flex-col justify-between p-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {p.coverLabel ?? (soon ? "En cours" : "Live")}
              </span>
              {!soon && (
                <span className="flex items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  En ligne
                </span>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">{p.title}</h3>
              {!soon && (
                <p className="mt-1 text-xs text-white/70">{domaine(p.url)}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
          {!soon ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ouvrir ${p.title} dans un nouvel onglet`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fg after:absolute after:inset-0 after:content-['']"
            >
              Voir le projet
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          ) : (
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-faint">
              Bientôt disponible
            </span>
          )}
        </div>
      </article>
    </Spotlight>
  );
}

export function Projects() {
  return (
    <section id="projets-web" className="py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Projets Web"
            subtitle="Applications web en production et projets en cours de finalisation."
          />
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2">
          {webProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <WebCard p={p} />
            </Reveal>
          ))}
        </div>

        {webInProgress.length > 0 && (
          <>
            <Reveal className="mt-16">
              <h3 className="mb-2 text-lg font-semibold text-fg">En cours</h3>
              <p className="mb-6 text-sm text-muted">
                Projets en développement actif — bientôt en ligne.
              </p>
            </Reveal>
            <div className="grid gap-7 sm:grid-cols-2">
              {webInProgress.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <WebCard p={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
