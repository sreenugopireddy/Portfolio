import { motion } from "motion/react";
import {
  ArrowRight, Brain, Search, Bot, Cloud, FileText, type LucideIcon,
} from "lucide-react";
import { aboutInterests } from "@/data/portfolio";
import { fadeUp, slideInLeft, slideInRight, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";
import aboutImage from "@/assets/about-workstation.png";

const iconMap: Record<string, LucideIcon> = {
  Brain, Search, Bot, Cloud, FileText,
};

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: text */}
          <motion.div variants={slideInLeft} className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,212,255,0.9)]" />
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Turning ideas into <span className="text-gradient">intelligent systems.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              B.Tech Data Science student (2023–2027) passionate about building intelligent
              systems using LLMs, RAG architectures and AI agents. I love turning complex
              ideas into scalable real-world products.
            </p>

            <motion.ul variants={stagger(0.08)} className="grid gap-3">
              {aboutInterests.map((b) => {
                const Icon = iconMap[b.icon] ?? Brain;
                return (
                  <motion.li
                    key={b.text}
                    variants={fadeUp}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f8ef7]/30 to-[#00d4ff]/20 border border-[#00d4ff]/30">
                      <Icon className="size-4 text-accent" />
                    </span>
                    <span className="text-sm">{b.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div>
              <GlowLink href="#contact">
                Know More About Me <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </GlowLink>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div variants={slideInRight} className="relative w-full">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,255,0.25)",
                boxShadow: "0 0 30px rgba(0,212,255,0.2)",
              }}
            >
              <img src={aboutImage} alt="AI workstation" className="w-full h-auto block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
