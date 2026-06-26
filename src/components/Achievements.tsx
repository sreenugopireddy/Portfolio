import { motion } from "motion/react";
import {
  FileText, Rocket, BookOpen, Award, GraduationCap, type LucideIcon,
} from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlassCard } from "./ui/GlassCard";

const iconMap: Record<string, LucideIcon> = {
  FileText, Rocket, BookOpen, Award, GraduationCap,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Milestones that <span className="text-gradient">define the journey.</span></>}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {achievements.map((a) => {
            const Icon = iconMap[a.icon] ?? Award;
            return (
              <motion.div key={a.title} variants={fadeUp}>
                <GlassCard className="p-5 h-full hover:-translate-y-1 transition-transform duration-500">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#a855f7]/30 to-[#27d3ff]/20 border border-white/10">
                    <Icon className="size-4 text-accent" />
                  </div>
                  <div className="mt-4 font-semibold text-sm">{a.title}</div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
