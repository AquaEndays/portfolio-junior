"use client";

import { education, experience, type TimelineItem } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Timeline({ items, accent = false }: { items: TimelineItem[]; accent?: boolean }) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-8">
      {items.map((it, i) => (
        <li key={`${it.title}-${i}`} className="relative">
          <span
            aria-hidden
            className={`absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-bg ${
              accent && i === 0
                ? "bg-accent-3 shadow-[0_0_16px_3px_rgba(52,211,153,0.55)]"
                : "bg-accent"
            }`}
          />
          <p className="text-xs font-medium tracking-wide text-faint uppercase">
            {it.period}
          </p>
          <h4 className="mt-1.5 text-base font-semibold text-fg sm:text-[17px]">
            {it.title}
          </h4>
          <p className="text-sm text-muted">{it.org}</p>
          {it.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted">{it.description}</p>
          )}
          {it.tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {it.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Journey() {
  return (
    <section id="experience" className="py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Expérience"
            subtitle="Mon parcours professionnel et ma formation actuelle."
          />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-fg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-sm text-accent">
                ①
              </span>
              Expérience professionnelle
            </h3>
            <Timeline items={experience} />
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-fg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-3/15 text-sm text-accent-3">
                ②
              </span>
              Formation
            </h3>
            <Timeline items={[education.current]} accent />
            <p className="mt-8 text-sm text-muted">
              Actuellement en Licence Informatique &amp; IA à Keyce. Je continue
              d&apos;approfondir le full-stack, les réseaux et l&apos;IA au fil des
              projets et du stage.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
