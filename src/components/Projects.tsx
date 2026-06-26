import { motion } from "motion/react";
import { ExternalLink, Github, FileText } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlassCard } from "./ui/GlassCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="text-gradient">AI systems</span> in production.</>}
          description="From hybrid RAG to agentic workflows — each shipped with evaluation, observability, and CI."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid lg:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <GlassCard variant="strong" glow className="p-6 md:p-7 h-full flex flex-col gap-5 group hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">{p.title}</h3>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">v1.0</span>
                </div>

                {/* Architecture diagram */}
                <div className="rounded-2xl bg-[#070a1a]/70 border border-white/5 p-4">
                  <div className="text-[10px] text-muted-foreground tracking-wider uppercase mb-3">Architecture</div>
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    {p.arch.map((node, i) => (
                      <div key={node} className="flex items-center gap-1.5 shrink-0">
                        <div className="glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium">
                          {node}
                        </div>
                        {i < p.arch.length - 1 && (
                          <svg width="16" height="8" viewBox="0 0 16 8" className="text-accent/70">
                            <path d="M0 4 L14 4 M10 1 L14 4 L10 7" stroke="currentColor" strokeWidth="1" fill="none" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full glass px-2.5 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <a href={p.demo} className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#6d4aff] to-[#27d3ff] px-4 py-2 text-xs font-medium text-white hover:-translate-y-0.5 transition-transform">
                    <ExternalLink className="size-3.5" /> Live Demo
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs hover:bg-white/10 transition-colors">
                    <Github className="size-3.5" /> GitHub
                  </a>
                  <a href={p.paper} className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs hover:bg-white/10 transition-colors">
                    <FileText className="size-3.5" /> Research
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
