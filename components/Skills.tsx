"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

export function Skills() {
  const [activeId, setActiveId] = useState<string>("all");

  const visible =
    activeId === "all" ? skills : skills.filter((group) => group.id === activeId);

  return (
    <section
      id="competences"
      className="border-t border-line bg-bg-soft/35 py-24 sm:py-32"
    >
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="04 / STACK TECHNIQUE"
            title="Compétences"
            subtitle="Technologies maîtrisées et domaines d'intervention, du frontend réactif aux infrastructures réseau."
          />

          <div
            className="mb-12 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrer par domaine technique"
          >
            <button
              type="button"
              onClick={() => setActiveId("all")}
              className={`min-h-[40px] rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                activeId === "all"
                  ? "border-accent bg-accent text-[#061017] font-semibold"
                  : "border-line bg-bg-soft text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              Tous les domaines
            </button>
            {skills.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveId(group.id)}
                className={`min-h-[40px] rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  activeId === group.id
                    ? "border-accent bg-accent text-[#061017] font-semibold"
                    : "border-line bg-bg-soft text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((group, idx) => (
            <Reveal key={group.id} delay={idx * 70}>
              <Spotlight className="flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-accent">
                        {group.code} · {group.hint.toUpperCase()}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-fg">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {group.summary}
                  </p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-bg px-3 py-1.5 font-mono text-xs text-fg/90 transition-colors hover:border-accent"
                    >
                      {item}
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
