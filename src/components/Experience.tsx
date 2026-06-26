import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title={<>A path through <span className="text-gradient">applied AI.</span></>}
          description="Four years building data, ML, and LLM systems at increasing scale."
        />

        <div className="mt-16 relative">
          {/* Rail */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#6d4aff] to-transparent" />
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#27d3ff]/40 to-transparent blur-md" />

          <motion.ol
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-4 gap-6 md:gap-4 relative"
          >
            {experience.map((e, i) => (
              <motion.li key={e.year} variants={fadeUp} className="relative flex flex-col items-center gap-4">
                {/* Card alternates above/below */}
                <div className={`order-${i % 2 === 0 ? 1 : 3} w-full`}>
                  <div className="glass-strong rounded-2xl p-5 text-center md:text-left">
                    <div className="text-xs text-accent tracking-widest uppercase">{e.year}</div>
                    <div className="mt-1 font-semibold">{e.role}</div>
                    <div className="text-xs text-muted-foreground">{e.org}</div>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{e.summary}</p>
                  </div>
                </div>

                {/* Milestone dot */}
                <div className="order-2 relative">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute inset-0 rounded-full bg-[#6d4aff] blur-md"
                  />
                  <div className="relative size-4 rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff] ring-4 ring-background flex items-center justify-center">
                    <Briefcase className="size-2 text-white" />
                  </div>
                </div>

                {/* Spacer for alternating side on md+ */}
                <div className={`order-${i % 2 === 0 ? 3 : 1} hidden md:block w-full h-0`} />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
