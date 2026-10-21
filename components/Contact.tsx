"use client";

import { profile } from "@/lib/data";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-a"
          style={{ left: "-20vmax", top: "auto", bottom: "-24vmax", opacity: 0.35 }}
        />
        <div
          className="blob blob-b"
          style={{ right: "-18vmax", top: "auto", bottom: "-20vmax", opacity: 0.3 }}
        />
      </div>
      <div className="container-wide py-32 text-center">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Un projet, un stage, une question ? Écrivez-moi, je réponds avec plaisir.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </Reveal>

        <Reveal delay={200} className="mt-8 flex items-center justify-center gap-8 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
          >
            LinkedIn ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
