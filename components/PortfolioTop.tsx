"use client";

import { useCallback, useState } from "react";
import { profile } from "@/lib/data";
import { AmbientField } from "./AmbientField";
import { IntroLoader } from "./IntroLoader";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export function PortfolioTop() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      <AmbientField />
      <IntroLoader onReady={handleReady} />
      <Navbar name={profile.fullName} cvUrl={profile.cvUrl} />
      <Hero ready={ready} />
    </>
  );
}
