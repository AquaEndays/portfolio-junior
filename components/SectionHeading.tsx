export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-accent to-accent-2" />
      {subtitle && <p className="mt-5 text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
