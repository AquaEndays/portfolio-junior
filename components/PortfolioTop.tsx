"use client";

import { profile } from "@/lib/data";
import { AmbientField } from "./AmbientField";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export function PortfolioTop() {
  return (
    <>
      <AmbientField />
      <Navbar name={profile.fullName} cvUrl={profile.cvUrl} />
      <Hero ready />
    </>
  );
}
