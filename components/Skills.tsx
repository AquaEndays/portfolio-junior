"use client";

import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

export function Skills() {
  return (
    <section id="competences" className="section-band py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Compétences"
            subtitle="Technologies et domaines que je pratique, avec une indication de niveau relative."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 100}>
              <Spotlight className="h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/15 text-lg text-accent"
                      aria-hidden
                    >
                      {g.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{g.title}</h3>
                      <p className="text-xs text-faint">{g.hint}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {g.items.map((it) => (
                      <li key={it.name}>
                        <div className="mb-1.5 flex items-center justify-between text-[13px]">
                          <span className="font-medium text-fg/90">{it.name}</span>
                          <span className="text-faint">{it.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            style={{ ["--w" as string]: `${it.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
