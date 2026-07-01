import { motion } from "motion/react";
import {
  Cloud, Search, Database, Code2, BarChart3, Shield,
  ExternalLink, type LucideIcon,
} from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlassCard } from "./ui/GlassCard";

const iconMap: Record<string, LucideIcon> = {
  Cloud, Search, Database, Code2, BarChart3, Shield,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Industry-recognized <span className="text-gradient">credentials.</span></>}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((c) => {
            const Icon = iconMap[c.icon] ?? Cloud;
            return (
              <motion.div key={c.title} variants={fadeUp}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full group"
                >
                  <GlassCard
                    variant="strong"
                    className="p-6 h-full flex items-start gap-4 group-hover:-translate-y-1 group-hover:border-[#00d4ff]/50 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.25)] transition-all duration-500"
                  >
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shadow-[0_0_20px_-4px_rgba(0,212,255,0.6)] shrink-0">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm leading-snug">
                        {c.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {c.org}
                      </div>
                      <div className="inline-flex items-center gap-1 mt-3 text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="size-3" />
                        View Certificate
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}