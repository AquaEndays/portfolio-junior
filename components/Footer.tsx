import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-wide flex flex-col items-center justify-between gap-3 py-8 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#accueil" className="transition-colors hover:text-fg">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
