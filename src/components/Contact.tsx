import { motion } from "motion/react";
import { Mail, ArrowUpRight, Download, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative glass-strong rounded-[32px] p-8 md:p-14 overflow-hidden neon-border"
        >
          {/* Glow */}
          <div className="absolute -top-32 -right-32 size-[400px] rounded-full bg-[#6d4aff]/30 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 size-[400px] rounded-full bg-[#27d3ff]/25 blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div className="flex flex-col gap-6">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-accent"
              >
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(39,211,255,0.9)]" />
                Available for new work
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-semibold leading-[1.05]">
                Let's build the <span className="text-gradient">next AI system</span> together.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl">
                Whether it's a production RAG platform, an agentic workflow, or an evaluation
                pipeline — I'd love to hear what you're working on.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <GlowLink href={`mailto:${profile.email}`}>
                  <Mail className="size-4" />
                  Let's Connect
                  <ArrowUpRight className="size-4" />
                </GlowLink>
                <GlowLink href={profile.resumeUrl} variant="ghost">
                  <Download className="size-4" />
                  Download Resume
                </GlowLink>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <a href={`mailto:${profile.email}`} className="glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/8 transition-colors">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d4aff] to-[#27d3ff]">
                  <Mail className="size-4 text-white" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">{profile.email}</div>
                </div>
              </a>
              <div className="glass rounded-2xl p-4 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#a855f7] to-[#6d4aff]">
                  <MapPin className="size-4 text-white" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="text-sm font-medium">{profile.location}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { Icon: Github, href: profile.github, label: "GitHub" },
                  { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: profile.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass rounded-xl py-3 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
