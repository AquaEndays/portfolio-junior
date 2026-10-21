"use client";

import { useState } from "react";
import { profile, marquee } from "@/lib/data";
import { Typewriter } from "./Typewriter";

export function Hero() {
  const loop = [...marquee, ...marquee];
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="accueil" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <div className="bg-grid absolute inset-0" />
        <div
          className="orb"
          style={{
            width: 120,
            height: 120,
            top: "20%",
            right: "12%",
            background: "radial-gradient(circle, rgba(124,92,255,0.35), transparent 70%)",
            animationDelay: "0s",
          }}
        />
        <div
          className="orb"
          style={{
            width: 80,
            height: 80,
            bottom: "30%",
            left: "8%",
            background: "radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)",
            animationDelay: "-4s",
          }}
        />
      </div>

      <div className="container-wide grid min-h-[100svh] items-center gap-10 pb-24 pt-32 lg:grid-cols-[1.4fr,0.6fr] lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/5 px-4 py-1.5 text-[13px] text-muted backdrop-blur">
            <span className="pulse-dot" />
            {profile.level} · {profile.school}
          </span>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-[4rem] xl:text-[4.4rem]">
            Salut, je suis
            <br />
            <Typewriter text={profile.name} className="gradient-text" />
          </h1>
          <p className="mt-4 text-xl font-medium text-fg/90 sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projets-web" className="btn-primary">
              Voir mes projets
              <span aria-hidden>↓</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Me contacter
            </a>
          </div>
        </div>

        {/* Zone photo moyenne — placez votre image dans /public/photo.jpg */}
        <div className="float relative mx-auto w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent-2/15 to-accent-3/20 blur-2xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-bg-soft/80 shadow-xl backdrop-blur-xl">
            {photoOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.photoUrl}
                alt={`Photo de ${profile.name}`}
                className="h-full w-full object-cover"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/20 via-bg-soft to-accent-2/15 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-line text-2xl text-faint">
                  📷
                </div>
                <p className="text-xs text-muted">
                  Placez votre photo dans
                  <br />
                  <code className="mt-1 inline-block rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] text-fg">
                    public/photo.jpg
                  </code>
                </p>
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-medium text-fg/90">{profile.location}</p>
              <p className="text-xs text-muted">{profile.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-white/[0.02] py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee" aria-hidden>
          {loop.map((t, i) => (
            <span key={i} className="mx-7 whitespace-nowrap text-sm font-medium text-faint">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
