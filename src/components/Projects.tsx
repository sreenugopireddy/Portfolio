import { motion } from "motion/react";
import { ExternalLink, Github, FileText, BookOpen, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlassCard } from "./ui/GlassCard";

const linkIconMap = {
  Demo: ExternalLink,
  GitHub: Github,
  Paper: FileText,
  Docs: BookOpen,
} as const;

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow="Projects"
            title={<>Featured <span className="text-gradient">Projects</span></>}
            description="Production AI systems built, evaluated, and deployed."
          />
          <a
            href="https://github.com/sreenugopireddy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-foreground transition-colors"
          >
            View All Projects <ArrowRight className="size-3.5" />
          </a>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid lg:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div variants={fadeUp}>
      <GlassCard variant="strong" glow className="p-6 md:p-7 h-full flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-500">
        <h3 className="text-xl md:text-2xl font-display font-semibold leading-tight">{p.title}</h3>

        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full glass px-2.5 py-0.5 text-[10px] text-muted-foreground">{t}</span>
          ))}
        </div>

        <div className="rounded-2xl bg-[#070a1a]/70 border border-white/5 p-4">
          <div className="text-[10px] text-muted-foreground tracking-wider uppercase mb-3">Architecture</div>
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {p.arch.map((node, i) => (
              <div key={node} className="flex items-center gap-1.5 shrink-0">
                <div className="glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium">{node}</div>
                {i < p.arch.length - 1 && (
                  <svg width="16" height="8" viewBox="0 0 16 8" className="text-accent/70">
                    <path d="M0 4 L14 4 M10 1 L14 4 L10 7" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {p.subTags && (
          <div className="flex flex-wrap gap-1.5">
            {p.subTags.map((t) => (
              <span key={t} className="rounded-md border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-2 py-0.5 text-[10px] text-accent">{t}</span>
            ))}
          </div>
        )}

        <ul className="space-y-2">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 size-1 rounded-full bg-accent shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {p.links.map((l) => {
            const Icon = linkIconMap[l.icon];
            const primary = l.icon === "Demo";
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={
                  primary
                    ? "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] px-4 py-2 text-xs font-medium text-white hover:-translate-y-0.5 transition-transform"
                    : "inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs hover:bg-white/10 transition-colors"
                }
              >
                <Icon className="size-3.5" /> {l.label}
              </a>
            );
          })}
        </div>
      </GlassCard>
    </motion.div>
  );
}
