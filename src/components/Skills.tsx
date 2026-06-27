import { motion } from "motion/react";
import { skillBadges } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import galaxyImage from "@/assets/skills-galaxy.png";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="flex flex-col items-center text-center gap-3"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground">SKILLS</span>{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#4f8ef7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              GALAXY
            </span>
          </h2>
          <div className="h-0.5 w-32 rounded-full bg-gradient-to-r from-[#ef4444] via-[#a855f7] to-[#4f8ef7]" />
          <p className="text-muted-foreground max-w-xl">
            An orbital constellation of the tools, frameworks and platforms I ship with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="mt-12 mx-auto w-full max-w-[900px]"
        >
          <img
            src={galaxyImage}
            alt="AI Engineering Skills Galaxy"
            className="w-full h-auto"
            style={{ filter: "drop-shadow(0 0 60px rgba(168,85,247,0.35))" }}
          />
        </motion.div>

        <motion.div
          variants={stagger(0.03)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap gap-2 justify-center max-w-4xl mx-auto"
        >
          {skillBadges.map((s) => (
            <motion.span
              key={s}
              variants={fadeUp}
              className="glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/90 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
