"use client";

import { useState } from "react";
import { appProjects, longstarTopology, type AppProject } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";

const TYPE_LABEL: Record<AppProject["type"], string> = {
  network: "Réseau",
  ai: "IA & Vision",
  desktop: "Desktop Java",
  other: "Full-Stack / Web",
};

export function Applications() {
  const [activeZone, setActiveZone] = useState(longstarTopology.zones[0]);

  return (
    <section id="applications" className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          index="03 / SYSTÈMES, RÉSEAUX & IA"
          title="Architecture & Applications"
          subtitle="Infrastructures réseau sécurisées sous Cisco Packet Tracer, vision par ordinateur et logiciels métier."
        />

        <Reveal>
          <Spotlight className="overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr,0.95fr]">
              <div className="flex flex-col justify-between border-b border-line bg-bg-elevated/60 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs tracking-wider text-accent">
                    TOPOLOGIE INTERACTIVE · CISCO PACKET TRACER
                  </span>
                  <span className="rounded-full border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    longstar.pkt
                  </span>
                </div>

                <div className="my-6 rounded-2xl border border-line bg-bg p-4 sm:p-6">
                  <svg
                    viewBox="0 0 520 220"
                    className="w-full"
                    role="img"
                    aria-label="Schéma d'architecture réseau Longstar"
                  >
                    <line x1="85" y1="110" x2="210" y2="110" stroke="var(--line-strong)" strokeWidth="2" strokeDasharray="5 4" />
                    <line x1="210" y1="110" x2="320" y2="55" stroke="var(--line-strong)" strokeWidth="2" />
                    <line x1="210" y1="110" x2="320" y2="165" stroke="var(--line-strong)" strokeWidth="2" />
                    <line x1="320" y1="165" x2="435" y2="165" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 4" />

                    {[
                      { id: "lan", x: 85, y: 110, title: "LAN VLANs", sub: "4 segments" },
                      { id: "asa", x: 210, y: 110, title: "Cisco ASA", sub: "Pare-feu" },
                      { id: "dmz", x: 320, y: 55, title: "Zone DMZ", sub: "Web / DNS" },
                      { id: "vpn", x: 435, y: 165, title: "Succursale", sub: "VPN IPSec" },
                    ].map((node) => {
                      const zone = longstarTopology.zones.find((z) => z.id === node.id)!;
                      const isActive = activeZone.id === node.id;
                      return (
                        <g
                          key={node.id}
                          onClick={() => setActiveZone(zone)}
                          className="cursor-pointer"
                        >
                          <rect
                            x={node.x - 58}
                            y={node.y - 26}
                            width="116"
                            height="52"
                            rx="12"
                            fill={isActive ? "var(--accent-soft)" : "var(--bg-soft)"}
                            stroke={isActive ? "var(--accent)" : "var(--line-strong)"}
                            strokeWidth={isActive ? "2" : "1.2"}
                          />
                          <text
                            x={node.x}
                            y={node.y - 3}
                            textAnchor="middle"
                            fill="var(--fg)"
                            fontSize="11.5"
                            fontWeight="600"
                            fontFamily="var(--font-sans)"
                          >
                            {node.title}
                          </text>
                          <text
                            x={node.x}
                            y={node.y + 14}
                            textAnchor="middle"
                            fill="var(--muted)"
                            fontSize="9.5"
                            fontFamily="var(--font-mono)"
                          >
                            {node.sub}
                          </text>
                        </g>
                      );
                    })}

                    <g>
                      <rect
                        x="268"
                        y="142"
                        width="104"
                        height="46"
                        rx="10"
                        fill="var(--bg-soft)"
                        stroke="var(--line)"
                      />
                      <text
                        x="320"
                        y="163"
                        textAnchor="middle"
                        fill="var(--fg)"
                        fontSize="10.5"
                        fontFamily="var(--font-sans)"
                      >
                        Routeur Bordure
                      </text>
                      <text
                        x="320"
                        y="177"
                        textAnchor="middle"
                        fill="var(--accent)"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                      >
                        IPSec Tunnel
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="rounded-xl border border-line bg-bg/80 p-4">
                  <p className="font-mono text-xs text-accent">{activeZone.label}</p>
                  <p className="mt-1 text-sm text-muted">{activeZone.detail}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                    {longstarTopology.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                    {longstarTopology.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {longstarTopology.zones.map((zone) => (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setActiveZone(zone)}
                        className={`rounded-xl border p-3 text-left transition-colors ${
                          activeZone.id === zone.id
                            ? "border-accent bg-accent-soft"
                            : "border-line bg-bg hover:border-line-strong"
                        }`}
                      >
                        <p className="font-mono text-xs font-medium text-fg">{zone.label}</p>
                      </button>
                    ))}
                  </div>

                  <ul className="flex flex-wrap gap-2 pt-3">
                    {longstarTopology.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-line pt-5">
                  <a
                    href={longstarTopology.downloadUrl}
                    download
                    className="btn-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {longstarTopology.downloadLabel}
                  </a>
                </div>
              </div>
            </div>
          </Spotlight>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {appProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80}>
              <Spotlight className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-wider text-accent">
                      {TYPE_LABEL[project.type].toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-faint">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-bold text-fg">
                    {project.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
