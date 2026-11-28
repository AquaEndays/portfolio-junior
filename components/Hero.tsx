"use client";

import { useRef, useState, type MouseEvent } from "react";
import { marquee, profile } from "@/lib/data";
import { MaskedLine, RoleCycler, WordStream } from "./KineticText";

export function Hero({ ready }: { ready: boolean }) {
  const loop = [...marquee, ...marquee];
  const [photoOk, setPhotoOk] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);

  function handleTilt(e: MouseEvent<HTMLDivElement>) {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  }

  function resetTilt() {
    if (frameRef.current) {
      frameRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  }

  return (
    <section id="accueil" className="relative isolate overflow-hidden pt-20">
      <div aria-hidden className="arch-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="container-wide flex min-h-[calc(100dvh-5rem)] flex-col justify-between pb-10 pt-10 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-soft/80 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur transition-all duration-700 ${
                ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <span className="status-pulse" />
              <span>{profile.availability}</span>
            </div>

            <h1 className="mt-7 font-display text-[3.1rem] font-extrabold leading-[0.94] tracking-[-0.03em] text-fg sm:text-[4.6rem] lg:text-[5.5rem] xl:text-[6.2rem]">
              <MaskedLine immediate={ready} delay={60}>
                {profile.lastName}
              </MaskedLine>
              <MaskedLine immediate={ready} delay={170} className="text-accent">
                {profile.firstName.toUpperCase()}
              </MaskedLine>
            </h1>

            <div
              className={`mt-5 flex flex-wrap items-center gap-3 font-mono text-sm sm:text-base transition-all duration-700 delay-200 ${
                ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <span className="rounded-md border border-line bg-bg-soft px-2.5 py-1 text-xs text-accent">
                ROLE
              </span>
              <RoleCycler roles={profile.roles} className="font-medium text-fg" />
            </div>

            <p className="mt-6 max-w-[60ch] text-base leading-[1.75] text-muted sm:text-[17px]">
              <WordStream text={profile.tagline} immediate={ready} baseDelay={280} stepMs={22} />
            </p>

            <div
              className={`mt-9 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-500 ${
                ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <a href="#projets-web" className="btn-primary">
                <span>Découvrir mes projets</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Prendre contact
              </a>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.95c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`relative mx-auto flex w-full max-w-[300px] flex-col items-center sm:max-w-[350px] lg:justify-self-end transition-all duration-700 delay-300 ${
              ready ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-accent/20 blur-3xl"
            />

            <div
              ref={frameRef}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="relative aspect-square w-full p-3 transition-transform duration-300 ease-out"
            >
              {/* Anneau orbital extérieur */}
              <svg
                viewBox="0 0 360 360"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full text-accent/40 animate-[spin_45s_linear_infinite]"
              >
                <circle
                  cx="180"
                  cy="180"
                  r="174"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="6 10"
                />
                <circle cx="180" cy="6" r="3" fill="currentColor" />
                <circle cx="180" cy="354" r="3" fill="currentColor" />
              </svg>

              {/* Cadran circulaire principal */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-line-strong bg-bg-soft p-1.5 shadow-[var(--shadow)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-bg-elevated">
                  {photoOk ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.photoUrl}
                      alt={`Portrait de ${profile.fullName}`}
                      className="h-full w-full scale-[1.06] object-cover object-[50%_20%] contrast-[1.04] transition-transform duration-700 hover:scale-[1.1]"
                      onError={() => setPhotoOk(false)}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs text-faint">
                      public/photo.jpg
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_48px_rgba(9,12,18,0.68)]" />
                </div>
              </div>

              {/* Pastille coordonnées ancrée proprement sous le cadran */}
              <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-line-strong bg-bg-soft/95 px-4 py-1.5 font-mono text-[11px] text-fg shadow-lg backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{profile.location}</span>
                <span className="text-faint">·</span>
                <span className="text-accent">@{profile.handle}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] text-faint">FORMATION</p>
            <p className="mt-1 text-sm font-medium text-fg">Licence Informatique &amp; IA · Keyce</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-faint">STACK CŒUR</p>
            <p className="mt-1 text-sm font-medium text-fg">Next.js · Spring Boot · PostgreSQL</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-faint">EXPÉRIENCE ENTREPRISE</p>
            <p className="mt-1 text-sm font-medium text-fg">Stage Full-Stack · OVA-CONSULTING</p>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-bg-soft/50 py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee" aria-hidden>
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 inline-flex items-center gap-3 whitespace-nowrap font-mono text-xs tracking-wide text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
