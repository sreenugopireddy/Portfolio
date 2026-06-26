import { motion } from "motion/react";
import { FileText, ExternalLink } from "lucide-react";
import { research } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, slideInLeft, slideInRight, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

export function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Research"
          title={<>Bridging <span className="text-gradient">papers and production.</span></>}
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center"
        >
          {/* Paper preview */}
          <motion.div variants={slideInLeft} className="relative mx-auto w-full max-w-md aspect-[3/4]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6d4aff]/40 to-[#27d3ff]/20 blur-2xl" />
            <div className="relative h-full w-full glass-strong rounded-2xl p-8 neon-border flex flex-col gap-3 overflow-hidden">
              <div className="text-[10px] text-accent tracking-[0.3em] uppercase">{research.venue}</div>
              <div className="font-display font-semibold text-lg leading-snug">{research.title}</div>
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full bg-white/8"
                    style={{ width: `${70 + Math.sin(i) * 25}%` }}
                  />
                ))}
              </div>
              <div className="mt-auto grid grid-cols-3 gap-2">
                {[0.94, 1.18, 8].map((v, i) => (
                  <div key={i} className="glass rounded-lg p-2 text-center">
                    <div className="font-display font-semibold text-sm text-gradient">
                      {v}
                    </div>
                    <div className="text-[9px] text-muted-foreground uppercase">
                      {["Ground", "p95 s", "Top K"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={slideInRight} className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start rounded-full glass px-3 py-1.5 text-[11px] tracking-widest uppercase text-accent">
              <FileText className="size-3.5" /> Preprint
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{research.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{research.abstract}</p>
            <motion.ul variants={stagger(0.06)} className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                "Hybrid lexical + dense retrieval",
                "Self-critique faithfulness loop",
                "Domain benchmark · 12K Q/A",
                "Reproducible eval harness",
              ].map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="glass rounded-lg px-3 py-2 text-xs text-muted-foreground"
                >
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <div>
              <GlowLink href={research.link}>
                View Publication <ExternalLink className="size-4" />
              </GlowLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
