"use client";

import { useCallback, useState } from "react";
import { profile } from "@/lib/data";
import { AmbientField } from "./AmbientField";
import { IntroCurtain } from "./IntroCurtain";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export function PortfolioTop() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      <AmbientField />
      <IntroCurtain onReady={handleReady} />
      <Navbar name={profile.fullName} cvUrl={profile.cvUrl} />
      <Hero ready={ready} />
    </>
  );
}
