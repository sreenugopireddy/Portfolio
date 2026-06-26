import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Database,
  Cloud,
  LineChart,
  Terminal,
  Boxes,
  ChevronDown,
  User,
  type LucideIcon,
} from "lucide-react";
import { heroCards, heroStats, profile } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";
import { Counter } from "./ui/Counter";

const iconMap: Record<string, LucideIcon> = {
  Database, Cloud, LineChart, Terminal, Boxes,
};

const cardPositions = [
  { top: "6%", left: "-8%" },
  { top: "12%", right: "-10%" },
  { top: "48%", left: "-14%" },
  { bottom: "10%", right: "-6%" },
  { bottom: "-2%", left: "8%" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left */}
          <div className="flex flex-col gap-7 max-w-2xl">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-accent"
            >
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(39,211,255,0.9)]" />
              {profile.role}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight"
            >
              Building AI systems that{" "}
              <span className="text-gradient">retrieve, reason</span> and{" "}
              <span className="text-gradient">automate.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-foreground text-base md:text-lg max-w-xl">
              I design and ship production LLM platforms — hybrid RAG, agentic workflows,
              and evaluation pipelines — engineered on Azure with the rigor of a real SaaS product.
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
              className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2"
            >
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl px-4 py-3 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-muted-foreground tracking-wider uppercase mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - portrait */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[520px] aspect-square"
          >
            {/* Holographic platform */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[78%] h-[40%]">
              <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(39,211,255,0.55)_0%,rgba(109,74,255,0.25)_40%,transparent_70%)] blur-2xl" />
              <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="ring" x1="0" x2="1">
                    <stop offset="0" stopColor="#27d3ff" stopOpacity="0.1" />
                    <stop offset="0.5" stopColor="#27d3ff" stopOpacity="1" />
                    <stop offset="1" stopColor="#27d3ff" stopOpacity="0.1" />
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
                    strokeWidth={i === 0 ? 1.5 : 0.8}
                    opacity={1 - i * 0.18}
                  />
                ))}
              </svg>
            </div>

            {/* Portrait disc */}
            <div className="relative h-full w-full flex items-end justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[88%] w-[70%]"
              >
                <div className="absolute inset-0 rounded-[40%_40%_45%_45%] bg-gradient-to-b from-[#6d4aff]/30 via-[#27d3ff]/10 to-transparent blur-2xl" />
                <div className="relative h-full w-full rounded-[42%_42%_46%_46%] overflow-hidden glass-strong neon-border">
                  {profile.heroImage ? (
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center gap-3 text-muted-foreground/70 px-6 text-center">
                      <div className="size-20 rounded-full glass flex items-center justify-center">
                        <User className="size-9" />
                      </div>
                      <p className="text-xs tracking-wider uppercase">Portrait Slot</p>
                      <p className="text-[11px] leading-relaxed">
                        Upload your photo and it will land here, background removed,
                        on the holographic platform.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Floating cards */}
            {heroCards.map((c, i) => {
              const Icon = iconMap[c.icon] ?? Database;
              const pos = cardPositions[i] ?? cardPositions[0];
              const color =
                c.accent === "primary"
                  ? "from-[#6d4aff] to-[#8a5cff]"
                  : c.accent === "accent"
                    ? "from-[#27d3ff] to-[#5cdcff]"
                    : "from-[#a855f7] to-[#c084fc]";
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.3 + i * 0.12 },
                    scale: { duration: 0.6, delay: 0.3 + i * 0.12 },
                    y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                  }}
                  className="absolute glass-strong rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_10px_40px_-10px_rgba(109,74,255,0.5)] min-w-[170px]"
                  style={pos as React.CSSProperties}
                >
                  <span
                    className={`inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-[0_0_18px_rgba(109,74,255,0.5)]`}
                  >
                    <Icon className="size-4 text-white" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12px] font-semibold">{c.title}</div>
                    <div className="text-[10px] text-muted-foreground">{c.subtitle}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden md:flex flex-col items-center gap-2 mt-16 text-muted-foreground"
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
      />
    </section>
  );
}
