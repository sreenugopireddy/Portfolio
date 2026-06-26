import { motion } from "motion/react";
import {
  MessagesSquare, Database, Bot, Server, Cloud, Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlassCard } from "./ui/GlassCard";

const iconMap: Record<string, LucideIcon> = {
  MessagesSquare, Database, Bot, Server, Cloud, Workflow,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title={<>How I can help <span className="text-gradient">your team ship AI.</span></>}
          description="Six engagements I run end-to-end — from scoping to production handoff."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Bot;
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <GlassCard
                  variant="strong"
                  className="p-6 h-full group hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(109,74,255,0.6)] transition-all duration-500"
                >
                  <div className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6d4aff] to-[#27d3ff] shadow-[0_0_24px_-4px_rgba(109,74,255,0.7)]">
                    <Icon className="size-5 text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="mt-3 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Start a conversation →
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
