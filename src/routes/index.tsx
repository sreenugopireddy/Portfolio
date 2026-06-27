import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreenivasa Reddy — AI Engineer | LLM Systems Architect" },
      {
        name: "description",
        content:
          "B.Tech Data Science student building production-grade LLM applications, RAG pipelines, and AI agents. Azure-deployed. Published researcher. Open to internships.",
      },
      { property: "og:title", content: "Sreenivasa Reddy — AI Engineer | LLM Systems Architect" },
      {
        property: "og:description",
        content:
          "Production-grade LLM applications, RAG pipelines, and AI agents — Azure-deployed. Published researcher.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Services />
        <TechStack />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
