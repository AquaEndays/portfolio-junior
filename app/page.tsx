import { PortfolioTop } from "@/components/PortfolioTop";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Applications } from "@/components/Applications";
import { Skills } from "@/components/Skills";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="relative z-10">
      <main id="contenu">
        <PortfolioTop />
        <About />
        <Projects />
        <Applications />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
