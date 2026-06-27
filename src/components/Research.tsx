import { motion } from "motion/react";
import { FileText, ExternalLink, BadgeCheck } from "lucide-react";
import { research } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

export function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Research & Publications"
          title={<>Bridging <span className="text-gradient">papers and production.</span></>}
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 max-w-5xl mx-auto glass-strong rounded-[28px] p-8 md:p-10 neon-border"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/40 px-3 py-1 text-[10px] uppercase tracking-widest text-[#00ff88]">
              <BadgeCheck className="size-3" /> {research.status}
            </span>
            <span className="text-[10px] text-accent tracking-[0.3em] uppercase">{research.venue} · {research.year}</span>
          </motion.div>

          <motion.h3 variants={fadeUp} className="mt-4 font-display text-2xl md:text-3xl font-bold leading-tight">
            {research.title}
          </motion.h3>

          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {research.metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold" style={{ color: m.color }}>{m.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-muted-foreground leading-relaxed">
            {research.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5">
            <div className="text-xs uppercase tracking-widest text-accent mb-3">Key Contributions</div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {research.contributions.map((c) => (
                <li key={c} className="glass rounded-lg px-3 py-2 text-xs text-muted-foreground flex gap-2">
                  <FileText className="size-3.5 text-accent shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <GlowLink href={research.link}>
              Read Publication <ExternalLink className="size-4" />
            </GlowLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
