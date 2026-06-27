import { motion } from "motion/react";
import {
  ArrowRight, Download, ChevronDown, ArrowRight as Arrow,
  Sprout, Zap, CheckCircle2, Cloud, type LucideIcon,
} from "lucide-react";
import { heroBadges, heroStats, profile } from "@/data/portfolio";
import { fadeUp, stagger } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";
import { Counter } from "./ui/Counter";
import heroImage from "@/assets/hero-portrait.png";

const statIcons: Record<string, LucideIcon> = {
  Sprout, Zap, CheckCircle2, Cloud,
};

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center"
        >
          {/* Left */}
          <div className="flex flex-col gap-7 max-w-2xl">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-accent"
                >
                  <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,212,255,0.9)]" />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight"
            >
              Building AI systems
              <br />
              that <span style={{ color: "#00d4ff" }}>retrieve</span>,{" "}
              <span style={{ color: "#4f8ef7" }}>reason</span> and{" "}
              <span style={{ color: "#00ff88" }}>automate.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-foreground text-base md:text-lg max-w-xl">
              {profile.subDesc}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <GlowLink href="#projects">
                Explore My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </GlowLink>
              <GlowLink href={profile.resumeUrl} variant="ghost">
                <Download className="size-4" />
                Download Resume
              </GlowLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {heroStats.map((s) => {
                const Icon = statIcons[s.icon] ?? Zap;
                return (
                  <div key={s.label} className="glass rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-accent" />
                      <div className="font-display text-2xl font-bold text-gradient">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right - portrait + info panels */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[640px]"
          >
            <div className="relative aspect-square w-full">
              {/* Holographic platform rings */}
              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[90%] h-[36%] pointer-events-none">
                <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.55)_0%,rgba(168,85,247,0.25)_45%,transparent_75%)] blur-2xl" />
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="ring" x1="0" x2="1">
                      <stop offset="0" stopColor="#00d4ff" stopOpacity="0.1" />
                      <stop offset="0.5" stopColor="#00d4ff" stopOpacity="1" />
                      <stop offset="1" stopColor="#a855f7" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3].map((i) => (
                    <ellipse
                      key={i}
                      cx="200"
                      cy="120"
                      rx={180 - i * 28}
                      ry={36 - i * 6}
                      fill="none"
                      stroke="url(#ring)"
                      strokeWidth={i === 0 ? 1.6 : 0.8}
                      opacity={1 - i * 0.18}
                    />
                  ))}
                </svg>
              </div>

              {/* Portrait */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <img
                  src={heroImage}
                  alt={profile.name}
                  className="relative z-10 h-full w-full object-contain object-bottom"
                  style={{ filter: "drop-shadow(0 0 40px rgba(0,212,255,0.45))" }}
                />
              </motion.div>
            </div>

            {/* Floating panels */}
            <FloatingPanel pos={{ top: "2%", left: "-6%" }} delay={0.3}>
              <PanelTitle color="#00d4ff">RAG PIPELINE</PanelTitle>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground flex-wrap">
                {["User Query", "Retriever", "Vector DB", "LLM", "Answer"].map((n, i, a) => (
                  <span key={n} className="flex items-center gap-1">
                    <span className="rounded bg-white/5 px-1.5 py-0.5 text-foreground/90">{n}</span>
                    {i < a.length - 1 && <Arrow className="size-2.5 text-accent" />}
                  </span>
                ))}
              </div>
            </FloatingPanel>

            <FloatingPanel pos={{ top: "2%", right: "-6%" }} delay={0.45}>
              <PanelTitle color="#00d4ff">DEPLOYED ON AZURE</PanelTitle>
              <div className="mt-2 grid grid-cols-4 gap-1.5 text-center">
                {["Azure CA", "Azure OpenAI", "Cosmos DB", "CI/CD"].map((n) => (
                  <div key={n} className="rounded bg-white/5 px-1 py-1 text-[8px] text-muted-foreground leading-tight">
                    {n}
                  </div>
                ))}
              </div>
            </FloatingPanel>

            <FloatingPanel pos={{ bottom: "8%", left: "-8%" }} delay={0.6}>
              <PanelTitle color="#a855f7">LANGCHAIN + PYTHON</PanelTitle>
              <pre className="mt-2 text-[9px] leading-tight font-mono text-foreground/80 overflow-hidden">
{`from langchain import hub
from langchain_openai import ChatOpenAI
llm = ChatOpenAI(model="gpt-4o")
rag = FAISS.from_texts(texts, emb)
chain = create_retrieval_chain(rag, llm)`}
              </pre>
            </FloatingPanel>

            <FloatingPanel pos={{ bottom: "8%", right: "-6%" }} delay={0.75}>
              <PanelTitle color="#00ff88">EVALUATION (RAGAS)</PanelTitle>
              <div className="mt-2 grid grid-cols-2 gap-1.5 text-[9px]">
                <Metric label="Faithfulness" value="1.00" color="#00ff88" />
                <Metric label="Relevancy" value="0.98" color="#00d4ff" />
                <Metric label="Recall" value="0.97" color="#a855f7" />
                <Metric label="Latency" value="0.52s" color="#facc15" />
              </div>
            </FloatingPanel>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden md:flex flex-col items-center gap-2 mt-12 text-muted-foreground"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPanel({
  children,
  pos,
  delay,
}: {
  children: React.ReactNode;
  pos: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 },
      }}
      className="absolute hidden md:block glass-strong rounded-xl p-3 w-[180px] shadow-[0_10px_40px_-10px_rgba(0,212,255,0.45)] z-20"
      style={pos}
    >
      {children}
    </motion.div>
  );
}

function PanelTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="text-[9px] font-bold tracking-[0.2em]" style={{ color }}>
      {children}
    </div>
  );
}

function Metric({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded bg-white/5 px-1.5 py-1">
      <div className="font-bold" style={{ color }}>{value}</div>
      <div className="text-[8px] text-muted-foreground">{label}</div>
    </div>
  );
}
