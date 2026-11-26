"use client";

import { useState } from "react";
import { flagshipProjects, type FlagshipProject } from "@/lib/data";
import { ProjectMockup, ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

const FILTERS = ["Tous", "En ligne", "Code source", "En cours"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const [selected, setSelected] = useState<FlagshipProject | null>(null);

  const visible =
    filter === "Tous"
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.status === filter);

  return (
    <section id="projets-web" className="border-t border-line bg-bg-soft/35 py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="02 / RÉALISATIONS"
            title="Projets Phares"
            subtitle="Applications web en production, outils desktop JavaFX et plateformes full-stack en développement."
          />

          <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`min-h-[40px] rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-[#061017] font-semibold"
                    : "border-line bg-bg-soft text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {visible.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 90}>
              <Spotlight className="group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
                    <ProjectMockup kind={project.mockupKind} />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[11px] text-white/90 backdrop-blur-md">
                      {project.status === "En ligne" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
                      {project.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-accent transition-colors hover:border-accent hover:bg-accent-soft"
                    >
                      Inspecter
                    </button>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.shortDescription}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4 text-sm font-medium">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                      >
                        Voir en ligne ↗
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {!project.liveUrl && !project.repoUrl && (
                      <span className="font-mono text-xs text-faint">
                        Déploiement prochainement
                      </span>
                    )}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          key={selected.id}
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
