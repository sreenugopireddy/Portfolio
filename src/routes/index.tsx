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
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Engineer · LLM Systems · RAG Architect" },
      {
        name: "description",
        content:
          "Portfolio of an AI Engineer building production RAG, agentic workflows, and evaluation pipelines on Azure.",
      },
      { property: "og:title", content: "AI Engineer · LLM Systems · RAG Architect" },
      {
        property: "og:description",
        content:
          "Production LLM systems — hybrid retrieval, agents, and evaluation engineered on Azure.",
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
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
