"use client";

import { useState } from "react";
import { about } from "@/lib/data";
import { MaskedLine, WordStream } from "./KineticText";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

export function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="a-propos" className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading index="01 / IDENTITÉ" title="À propos" />

        <div className="grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:gap-16">
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold leading-[1.25] tracking-tight text-fg sm:text-3xl">
              <MaskedLine delay={40}>{about.lead}</MaskedLine>
            </h3>

            <Reveal delay={120}>
              <Spotlight className="overflow-hidden">
                <dl className="divide-y divide-line">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col justify-between gap-1 px-5 py-4 sm:flex-row sm:items-center"
                    >
                      <dt className="font-mono text-xs tracking-wider text-faint">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-medium text-fg">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Spotlight>
            </Reveal>

            <Reveal delay={180}>
              <p className="mb-3 font-mono text-xs tracking-wider text-faint">
                CENTRES D&apos;INTÉRÊT
              </p>
              <ul className="flex flex-wrap gap-2">
                {about.passions.map((passion) => (
                  <li
                    key={passion}
                    className="rounded-full border border-line bg-bg-soft px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    {passion}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="max-w-[62ch] text-base leading-[1.85] text-muted sm:text-[17px]"
                >
                  <WordStream text={paragraph} baseDelay={i * 180} stepMs={16} />
                </p>
              ))}
            </div>

            <Reveal delay={140} className="pt-2">
              <p className="mb-4 font-mono text-xs tracking-wider text-faint">
                APPROCHE D&apos;INGÉNIERIE
              </p>
              <div className="divide-y divide-line border-y border-line">
                {about.pillars.map((pillar, idx) => {
                  const open = activePillar === idx;
                  return (
                    <div key={pillar.index}>
                      <button
                        type="button"
                        onClick={() => setActivePillar(idx)}
                        aria-expanded={open}
                        className="flex w-full min-h-[52px] items-center justify-between gap-4 py-4 text-left transition-colors hover:text-accent"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-accent">
                            {pillar.index}
                          </span>
                          <span className="font-display text-base font-semibold text-fg sm:text-lg">
                            {pillar.title}
                          </span>
                        </div>
                        <span
                          aria-hidden
                          className={`font-mono text-sm text-muted transition-transform duration-300 ${
                            open ? "rotate-45 text-accent" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-4 pl-9 text-sm leading-relaxed text-muted">
                            {pillar.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
