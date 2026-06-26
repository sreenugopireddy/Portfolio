import { motion } from "motion/react";
import { techStack } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function TechStack() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Tech Stack"
          title={<>The <span className="text-gradient">toolkit</span> behind the systems.</>}
        />

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {techStack.map((t) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 hover:bg-white/8 transition-colors"
            >
              <div className="size-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center font-display font-semibold text-sm text-gradient">
                {t.slice(0, 2)}
              </div>
              <div className="text-xs text-muted-foreground">{t}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
