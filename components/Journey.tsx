"use client";

import { education, experience, type TimelineItem } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

function TimelineColumn({
  heading,
  items,
  highlightFirst = false,
}: {
  heading: string;
  items: TimelineItem[];
  highlightFirst?: boolean;
}) {
  return (
    <div>
      <p className="mb-8 font-mono text-xs tracking-[0.2em] text-faint">
        {heading}
      </p>

      <div className="relative pl-10 sm:pl-12">
        <svg
          aria-hidden="true"
          className="absolute left-3 top-2 h-[calc(100%-1rem)] w-4 text-accent"
          preserveAspectRatio="none"
          viewBox="0 0 16 100"
        >
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="100"
            stroke="var(--line-strong)"
            strokeWidth="1.5"
          />
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="100"
            stroke="currentColor"
            strokeWidth="1.5"
            className="journey-dash"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="space-y-8">
          {items.map((item, idx) => (
            <li key={`${item.title}-${idx}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[34px] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg sm:-left-[42px] ${
                  highlightFirst && idx === 0
                    ? "bg-status shadow-[0_0_12px_var(--status)]"
                    : "bg-accent"
                }`}
              />
              <Spotlight className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-accent">{item.period}</span>
                  <span className="rounded-full border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    {item.org}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-fg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          index="05 / PARCOURS"
          title="Expérience & Formation"
          subtitle="Immersion en entreprise et montée en puissance académique en génie logiciel et intelligence artificielle."
        />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <TimelineColumn heading="EXPÉRIENCE PROFESSIONNELLE" items={experience} />
          </Reveal>
          <Reveal delay={120}>
            <TimelineColumn heading="FORMATION ACADÉMIQUE" items={education} highlightFirst />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
