import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-wide flex flex-col items-center justify-between gap-4 py-8 text-xs text-faint sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.fullName} · {profile.role}
        </p>
        <a
          href="#accueil"
          className="font-mono text-muted transition-colors hover:text-accent"
        >
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
