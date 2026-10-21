"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible : le lien mailto reste utilisable */
    }
  }

  return (
    <button type="button" onClick={copy} className="btn-ghost" aria-live="polite">
      {copied ? "Adresse copiée ✓" : "Copier l'adresse"}
    </button>
  );
}
