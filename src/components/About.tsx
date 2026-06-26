import { motion } from "motion/react";
import { ArrowRight, Check, Cpu, BarChart3, Code2, Sparkles } from "lucide-react";
import { aboutBullets } from "@/data/portfolio";
import { fadeUp, slideInLeft, slideInRight, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: AI workstation */}
          <motion.div variants={slideInLeft} className="relative aspect-[5/4] w-full max-w-xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#6d4aff]/30 via-[#27d3ff]/10 to-transparent blur-2xl" />

            {/* Monitor */}
            <div className="absolute inset-0 glass-strong rounded-[28px] p-5 overflow-hidden neon-border">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/70" />
                  <span className="size-2.5 rounded-full bg-yellow-400/70" />
                  <span className="size-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">rag_pipeline.py</div>
                <Sparkles className="size-3.5 text-accent" />
              </div>

              {/* Two-pane layout */}
              <div className="grid grid-cols-5 gap-3 h-[calc(100%-2rem)]">
                <div className="col-span-3 rounded-xl bg-[#070a1a] p-4 font-mono text-[11px] leading-relaxed overflow-hidden">
                  {[
                    { c: "text-[#6d4aff]", t: "from" },
                    { c: "text-foreground/80", t: " langchain import" },
                    { c: "text-[#27d3ff]", t: " RAG" },
                  ].map((s, i) => (
                    <span key={i} className={s.c}>{s.t}</span>
                  ))}
                  <div className="mt-2 text-muted-foreground">async def <span className="text-[#27d3ff]">retrieve</span>(q):</div>
                  <div className="pl-4 text-foreground/70">docs = await store.<span className="text-[#a855f7]">hybrid</span>(q, k=8)</div>
                  <div className="pl-4 text-foreground/70">ranked = reranker(docs)</div>
                  <div className="pl-4 text-foreground/70">return ranked[:5]</div>
                  <div className="mt-3 text-muted-foreground"># groundedness: 0.94</div>
                  <div className="text-muted-foreground"># latency p95: 1.18s</div>
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="inline-block w-1.5 h-3 bg-accent ml-0.5 align-middle"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="glass rounded-xl p-3 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="size-3.5 text-accent" />
                      <span className="text-[10px] tracking-wider uppercase text-muted-foreground">Evals</span>
                    </div>
                    <div className="flex items-end gap-1 h-[60%]">
                      {[40, 65, 55, 80, 70, 92, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={viewportOnce}
                          transition={{ delay: i * 0.06, duration: 0.6 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-[#6d4aff] to-[#27d3ff]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="glass rounded-xl p-3 flex items-center gap-2.5">
                    <Cpu className="size-4 text-accent" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-semibold">AKS Cluster</div>
                      <div className="text-[10px] text-muted-foreground">12 nodes · healthy</div>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-3 flex items-center gap-2.5">
                    <Code2 className="size-4 text-[#a855f7]" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-semibold">CI Passing</div>
                      <div className="text-[10px] text-muted-foreground">98 tests · 2m 14s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={slideInRight} className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(39,211,255,0.9)]" />
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              An engineer obsessed with <span className="text-gradient">making AI reliable.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              I sit at the intersection of LLM research and product engineering. My focus is
              shipping AI systems that earn trust — through retrieval that actually grounds,
              evaluation that actually measures, and infrastructure that actually scales.
            </p>
            <motion.ul variants={stagger(0.08)} className="grid gap-3">
              {aboutBullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3 glass rounded-xl px-4 py-3"
                >
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff]">
                    <Check className="size-3 text-white" />
                  </span>
                  <span className="text-sm">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
            <div>
              <GlowLink href="#projects">
                See selected work <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </GlowLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
