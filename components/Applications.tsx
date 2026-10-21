"use client";

import { appProjects, type AppProject } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

const typeMeta: Record<
  AppProject["type"],
  { label: string; icon: string }
> = {
  network: { label: "Réseau", icon: "◎" },
  desktop: { label: "Desktop", icon: "▢" },
  ai: { label: "IA", icon: "◉" },
  other: { label: "Autre", icon: "◇" },
};

function AppCard({ p, featured }: { p: AppProject; featured?: boolean }) {
  const meta = typeMeta[p.type];

  if (featured && p.longDescription) {
    return (
      <Spotlight className="!rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr]">
          {/* Cover latérale */}
          <div
            className="relative flex min-h-[220px] flex-col justify-between p-8 lg:min-h-full"
            style={{
              background: `linear-gradient(160deg, hsl(${p.hue} 75% 50% / 0.9), hsl(${(p.hue + 40) % 360} 70% 40% / 0.85))`,
            }}
          >
            <div
              className="project-cover-glow"
              style={{
                top: "15%",
                left: "20%",
                width: "70%",
                height: "50%",
                background: `hsl(${p.hue} 90% 70%)`,
              }}
            />
            <span className="relative z-[1] rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm w-fit">
              {meta.icon} {meta.label}
            </span>
            <div className="relative z-[1]">
              <h3 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex-1 space-y-3 text-sm leading-relaxed text-muted whitespace-pre-line">
              {p.longDescription.split("\n\n").map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
            {p.downloadUrl && (
              <a
                href={p.downloadUrl}
                download
                className="download-btn mt-6 w-fit"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {p.downloadLabel ?? "Télécharger"}
              </a>
            )}
          </div>
        </div>
      </Spotlight>
    );
  }

  return (
    <Spotlight className="group h-full !rounded-2xl overflow-hidden">
      <div className="flex h-full flex-col">
        <div
          className="relative flex h-36 items-end p-5"
          style={{
            background: `linear-gradient(135deg, hsl(${p.hue} 75% 55% / 0.85), hsl(${(p.hue + 50) % 360} 70% 45% / 0.8))`,
          }}
        >
          <div
            className="project-cover-glow"
            style={{
              top: "-20%",
              right: "10%",
              width: "50%",
              height: "80%",
              background: `hsl(${p.hue} 90% 70%)`,
            }}
          />
          <span className="relative z-[1] rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
            {meta.icon} {meta.label}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h4 className="text-base font-semibold text-fg">{p.title}</h4>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {p.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
          {p.downloadUrl && (
            <a href={p.downloadUrl} download className="download-btn mt-4 w-fit">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {p.downloadLabel ?? "Télécharger"}
            </a>
          )}
        </div>
      </div>
    </Spotlight>
  );
}

export function Applications() {
  // Featured = Longstar (network with longDescription)
  const featuredApp =
    appProjects.find((p) => p.longDescription) ?? appProjects[0];
  const others = appProjects.filter((p) => p !== featuredApp);

  return (
    <section id="applications" className="section-band py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Applications"
            subtitle="Projets desktop (JavaSE, JavaFX), infrastructure réseau et autres réalisations. Pour le Packet Tracer, téléchargez le fichier .pkt et ouvrez-le dans Cisco Packet Tracer."
          />
        </Reveal>

        {/* Infrastructure réseau — section entière */}
        <Reveal>
          <AppCard p={featuredApp} featured />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <AppCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
