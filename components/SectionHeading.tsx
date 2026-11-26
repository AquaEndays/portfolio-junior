"use client";

import { MaskedLine, WordStream } from "./KineticText";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {index && (
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
          {index}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
        <MaskedLine>{title}</MaskedLine>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted sm:text-base">
          <WordStream text={subtitle} stepMs={18} />
        </p>
      )}
    </div>
  );
}
