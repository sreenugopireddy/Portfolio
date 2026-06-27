import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowUpRight, Download, MapPin, Phone, Github, Linkedin, Globe, Bot, Send } from "lucide-react";
import { profile, chatSuggestions } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

export function Contact() {
  const [input, setInput] = useState("");

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-[1.1fr_1fr] gap-8"
        >
          {/* Left */}
          <div className="relative glass-strong rounded-[32px] p-8 md:p-10 overflow-hidden neon-border">
            <div className="absolute -top-32 -right-32 size-[400px] rounded-full bg-[#4f8ef7]/25 blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 size-[400px] rounded-full bg-[#00d4ff]/20 blur-[100px]" />

            <div className="relative flex flex-col gap-6">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-accent"
              >
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,212,255,0.9)]" />
                Get in touch
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
                Let's build something <span className="text-gradient">amazing together!</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                Open to internships, full-time opportunities and freelance projects.
              </motion.p>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3">
                <InfoRow icon={MapPin} label="Location" value={profile.location} />
                <InfoRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                <InfoRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} className="sm:col-span-2" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <GlowLink href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> Let's Connect <ArrowUpRight className="size-4" />
                </GlowLink>
                <GlowLink href={profile.resumeUrl} variant="ghost">
                  <Download className="size-4" /> Download Resume
                </GlowLink>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-2 pt-2">
                {[
                  { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                  { Icon: Github, href: profile.github, label: "GitHub" },
                  { Icon: Globe, href: profile.portfolio, label: "Portfolio" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="size-10 inline-flex items-center justify-center rounded-full glass hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: AI Assistant */}
          <motion.div variants={fadeUp} className="glass-strong rounded-[32px] p-6 flex flex-col gap-4 neon-border">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <Bot className="size-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-[#00ff88] border-2 border-background" />
              </div>
              <div>
                <div className="font-semibold text-sm">AI Assistant</div>
                <div className="text-[11px] text-muted-foreground">Ask me anything about my work</div>
              </div>
            </div>

            <div className="flex-1 min-h-[220px] flex flex-col gap-3">
              <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground/90 max-w-[90%]">
                Hi! I'm Sreenu's AI assistant. Ask me about his projects, skills, or research — I'll do my best to help.
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Try asking</div>
              <div className="flex flex-wrap gap-2">
                {chatSuggestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs glass rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-[#00d4ff]/50 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) {
                  window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry&body=${encodeURIComponent(input)}`;
                }
              }}
              className="flex items-center gap-2 glass rounded-2xl pl-4 pr-1.5 py-1.5"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] text-white"
                aria-label="Send"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon, label, value, href, className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shrink-0">
        <Icon className="size-4 text-white" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </>
  );
  const cls = `glass rounded-2xl p-3 flex items-center gap-3 ${href ? "hover:bg-white/8 transition-colors" : ""} ${className ?? ""}`;
  return href ? <a href={href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>;
}
