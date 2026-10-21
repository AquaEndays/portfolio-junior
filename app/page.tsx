import { profile } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Applications } from "@/components/Applications";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar name={profile.name} cvUrl={profile.cvUrl} />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Applications />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
