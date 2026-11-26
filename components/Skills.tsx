"use client";

import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

export function Skills() {
  return (
    <section
      id="competences"
      className="border-t border-line bg-bg-soft/35 py-24 sm:py-32"
    >
      <div className="container-wide">
        <SectionHeading
          index="04 / STACK TECHNIQUE"
          title="Compétences"
          subtitle="Technologies maîtrisées et domaines d'intervention, du frontend réactif aux infrastructures réseau."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <Reveal key={group.id} delay={(idx % 3) * 80}>
              <Spotlight className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-accent">
                      {group.code}
                    </span>
                    <span className="font-mono text-[11px] text-faint">
                      {group.hint}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-fg">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {group.summary}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-fg/90 transition-colors hover:border-accent"
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
