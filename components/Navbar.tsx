"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

export const NAV_LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets-web", label: "Projets" },
  { id: "applications", label: "Systèmes" },
  { id: "competences", label: "Compétences" },
  { id: "experience", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ name, cvUrl }: { name: string; cvUrl: string }) {
  const [active, setActive] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const reticle = useRef<SVGSVGElement>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight || 1;
        const ratio = Math.min(h.scrollTop / max, 1);
        if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
        if (reticle.current) reticle.current.style.transform = `rotate(${ratio * 240}deg)`;
        setScrolled(h.scrollTop > 20);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        ref={bar}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent"
      />
      <nav
        aria-label="Navigation principale"
        className="container-wide flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#accueil"
          onClick={() => setOpen(false)}
          className="group inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-fg"
        >
          <svg
            ref={reticle}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-accent transition-transform duration-150"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            <path d="M12 1v3M12 20v3M1 12h3M20 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-display text-base font-bold tracking-tight">
            {name}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  active === l.id
                    ? "bg-accent-soft text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-soft/70 text-fg transition-colors hover:border-accent hover:text-accent"
            aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {theme === "dark" ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {cvUrl ? (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hidden !min-h-[40px] !py-1.5 !text-[13px] sm:inline-flex"
            >
              Mon CV
            </a>
          ) : (
            <a
              href="#contact"
              className="btn-secondary hidden !min-h-[40px] !py-1.5 !text-[13px] sm:inline-flex"
            >
              Me contacter
            </a>
          )}

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-soft/70 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-fg transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-5 bg-fg transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-fg transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <ul className="container-wide space-y-1 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-xl px-4 py-2.5 text-[15px] font-medium ${
                    active === l.id ? "bg-accent-soft text-fg" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
