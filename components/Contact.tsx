"use client";

import { profile } from "@/lib/data";
import { CopyEmail } from "./CopyEmail";
import { MaskedLine, WordStream } from "./KineticText";
import { Reveal } from "./Reveal";
import { Spotlight } from "./Spotlight";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-bg-soft/35 py-24 sm:py-32">
      <div className="container-wide">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
              06 / CONTACT
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-fg sm:text-6xl">
              <MaskedLine>Construisons</MaskedLine>
              <MaskedLine delay={100} className="text-accent">
                votre prochain projet.
              </MaskedLine>
            </h2>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted sm:text-[17px]">
              <WordStream
                text="Un poste junior, un stage, une mission full-stack ou une collaboration technique ? Discutons-en directement."
                stepMs={20}
              />
            </p>
          </div>

          <Reveal delay={120}>
            <Spotlight className="p-6 sm:p-8">
              <p className="font-mono text-xs tracking-wider text-faint">
                CONTACT DIRECT
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block break-all font-display text-xl font-bold text-fg transition-colors hover:text-accent sm:text-2xl"
              >
                {profile.email}
              </a>
              <p className="mt-2 font-mono text-xs text-muted">
                {profile.location} · Réponse rapide
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  Envoyer un message ↗
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-6 flex items-center gap-6 border-t border-line pt-5 text-sm font-medium">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  GitHub (@{profile.handle}) ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
