"use client";

import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

export function About() {
  return (
    <section id="a-propos" className="py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading title="À propos" />
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.25fr,0.75fr] lg:gap-16">
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.85] text-muted sm:text-[17px]">
                {p}
              </p>
            ))}
            <div className="pt-4">
              <p className="mb-3 text-sm font-medium text-fg">Ce qui me passionne</p>
              <ul className="flex flex-wrap gap-2.5">
                {about.passions.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-fg/90 transition-transform hover:-translate-y-0.5"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Spotlight>
              <dl className="divide-y divide-line p-1">
                {about.facts.map((f) => (
                  <div key={f.label} className="px-5 py-5">
                    <dt className="text-xs uppercase tracking-wider text-faint">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 text-[15px] font-medium text-fg">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
