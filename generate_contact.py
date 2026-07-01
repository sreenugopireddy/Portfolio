"""
Run this script to generate the clean Contact.tsx file.
Usage: python generate_contact.py
It will create Contact.tsx in the current directory.
"""

content = r'''import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail, ArrowUpRight, Download, MapPin, Phone,
  Github, Linkedin, Globe, Bot, Send, Loader2
} from "lucide-react";
import { profile, chatSuggestions } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { GlowLink } from "./ui/GlowButton";

const SYSTEM_PROMPT = `You are an AI assistant on Sreenivasa Reddy Gopireddy\'s portfolio website.
He is a B.Tech Data Science student (2023-2027) at Santhiram Engineering College, Nandyal, Andhra Pradesh.

KEY FACTS:
- Email: sreenugopireddy24@gmail.com | Phone: +91-6302390641
- GitHub: github.com/sreenugopireddy | LinkedIn: linkedin.com/in/sreenugopireddy

PROJECTS:
1. Healthcare RAG Assistant - LangChain+FAISS+RAGAS, perfect faithfulness 1.0, 0.52s latency, published research on ReadyTensor
2. LLM Platform (Azure) - 4 microservices (API Gateway, Inference Service, Prompt Registry, Eval Harness), RAGAS CI gates blocking below 0.85, A/B routing, PTU to PAYG fallback reducing cost 50%
3. Axon ML Pipeline Platform - React+TypeScript+FastAPI+Groq (Llama 3.3-70b), live at axon-pi-two.vercel.app
4. Real Estate Voice AI Agent - Twilio+Deepgram+ElevenLabs+Groq, under 800ms latency, Redis memory, Supabase RLS, Cal.com booking
5. 3D Portfolio - Next.js 14+Three.js+GSAP, live at 3d-portfolio-psi-five.vercel.app

EXPERIENCE:
- AI & Data Analytics Intern at Edunet Foundation (Oct-Nov 2025)
- Power BI Intern at Microsoft Elevate / AICTE (Feb-Mar 2026)

RESEARCH: RAG Architecture Design and LLM Evaluation Strategies - ReadyTensor 2026, Published

CERTIFICATIONS: AWS ML Engineer Associate, RAG Systems Expert (ReadyTensor 2026), Oracle OCI AI Foundations 2025, SQL for Data Science (UC Davis/Coursera), Power BI (Microsoft), Zscaler Zero Trust Associate (ZTCA)

TECH STACK: Python, LangChain, FastAPI, FAISS, Chroma, Milvus, Azure, Docker, GitHub Actions, RAGAS, MLflow, Groq, Redis, Supabase, Twilio, Deepgram, ElevenLabs, React, TypeScript

EDUCATION: B.Tech Data Science, Santhiram Engineering College (2023-2027), CGPA 7.23/10

Answer helpfully and concisely about Sreenu\'s portfolio only. Keep answers under 80 words. Be friendly and professional. If asked something unrelated to Sreenu\'s portfolio, politely redirect.`;

type Message = { role: "user" | "assistant"; content: string };

export function Contact() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    setSuggestionsVisible(false);
    setInput("");

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            max_tokens: 200,
            temperature: 0.7,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...newMessages,
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data.choices?.[0]?.message?.content ??
        "Sorry, I could not get a response right now. Please email Sreenu directly!";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Connection error. You can reach Sreenu directly at sreenugopireddy24@gmail.com",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

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
          {/* LEFT — Contact Info */}
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

              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl md:text-5xl font-bold leading-[1.05]"
              >
                Let&apos;s build something{" "}
                <span className="text-gradient">amazing together!</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-muted-foreground">
                Open to internships, full-time opportunities and freelance projects.
              </motion.p>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3">
                <InfoRow
                  icon={MapPin}
                  label="Location"
                  value={profile.location}
                />
                <InfoRow
                  icon={Phone}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone}`}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                  className="sm:col-span-2"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <GlowLink href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> Let&apos;s Connect{" "}
                  <ArrowUpRight className="size-4" />
                </GlowLink>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all"
                >
                  <Download className="size-4" /> Download Resume
                </a>
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

          {/* RIGHT — AI Chatbot */}
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-[32px] p-6 flex flex-col gap-4 neon-border"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/10 shrink-0">
              <div className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <Bot className="size-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-[#00ff88] border-2 border-background" />
              </div>
              <div>
                <div className="font-semibold text-sm">AI Assistant</div>
                <div className="text-[11px] text-muted-foreground">
                  Powered by Groq · Ask me anything
                </div>
              </div>
              <span className="ml-auto text-[9px] uppercase tracking-widest text-[#00ff88] border border-[#00ff88]/30 rounded-full px-2 py-0.5">
                Groq
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 min-h-[240px] max-h-[340px] overflow-y-auto flex flex-col gap-3 pr-1">
              {/* Welcome */}
              <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground/90 max-w-[90%]">
                Hi! I&apos;m Sreenu&apos;s AI assistant powered by Groq ⚡ Ask me about
                his projects, skills, or research!
              </div>

              {/* Suggestions */}
              {suggestionsVisible && (
                <div className="flex flex-col gap-2 mt-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Try asking
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {chatSuggestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs glass rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-[#00d4ff]/50 transition-all text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat messages */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm max-w-[88%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] text-white rounded-tr-sm"
                        : "glass text-foreground/90 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="glass px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="size-3.5 animate-spin text-accent" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 glass rounded-2xl pl-4 pr-1.5 py-1.5 shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                disabled={loading}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60 disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] text-white disabled:opacity-40 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
                aria-label="Send"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  className,
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
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </>
  );

  const cls = `glass rounded-2xl p-3 flex items-center gap-3 ${
    href ? "hover:bg-white/8 transition-colors" : ""
  } ${className ?? ""}`;

  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
'''

output_path = "Contact.tsx"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"✅ Successfully created: {output_path}")
print(f"📁 File size: {len(content)} characters")
print()
print("Next steps:")
print("1. Copy Contact.tsx to: src/components/Contact.tsx")
print("2. Create .env file in project root with:")
print("   VITE_GROQ_API_KEY=gsk_your_actual_groq_key_here")
print("3. Update resumeUrl in src/data/portfolio.ts with your Google Drive link")
print("4. Get free Groq API key at: console.groq.com")
