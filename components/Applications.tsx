"use client";

import { appProjects, longstarTopology, type AppProject } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

const TYPE_LABEL: Record<AppProject["type"], string> = {
  network: "Réseau",
  ai: "IA & Vision",
  desktop: "Desktop Java",
  other: "Full-Stack / Web",
};

export function Applications() {
  return (
    <section id="applications" className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          index="03 / SYSTÈMES, RÉSEAUX & IA"
          title="Architecture & Applications"
          subtitle="Infrastructures réseau sécurisées sous Cisco Packet Tracer, vision par ordinateur et logiciels métier."
        />

        <Reveal>
          <Spotlight className="overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                    CISCO PACKET TRACER
                  </span>
                  <span className="font-mono text-xs text-faint">longstar.pkt</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                  {longstarTopology.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  {longstarTopology.summary}
                </p>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {longstarTopology.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={longstarTopology.downloadUrl}
                    download
                    className="btn-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {longstarTopology.downloadLabel}
                  </a>
                </div>
              </div>

              <div className="divide-y divide-line border-y border-line">
                {longstarTopology.zones.map((zone, idx) => (
                  <div key={zone.id} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-fg">
                        {zone.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {zone.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Spotlight>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {appProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80}>
              <Spotlight className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-wider text-accent">
                      {TYPE_LABEL[project.type].toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-faint">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-bold text-fg">
                    {project.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
