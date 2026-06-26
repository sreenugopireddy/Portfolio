import { motion } from "motion/react";
import { Brain } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Skills() {
  const ring0 = skills.filter((s) => s.ring === 0);
  const ring1 = skills.filter((s) => s.ring === 1);

  const place = (count: number, radius: number, offset = 0) =>
    Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + offset;
      return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
    });

  const pos0 = place(ring0.length, 38);
  const pos1 = place(ring1.length, 62, Math.PI / ring1.length);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title={<>An <span className="text-gradient">AI Galaxy</span> of tools I ship with.</>}
          description="Every node is a system I've taken from notebook to production."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 aspect-square w-full max-w-[640px]"
        >
          {/* Orbits */}
          <svg className="absolute inset-0 w-full h-full" viewBox="-100 -100 200 200">
            <defs>
              <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6d4aff" stopOpacity="0.5" />
                <stop offset="1" stopColor="#27d3ff" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <circle cx="0" cy="0" r="38" fill="none" stroke="url(#orbit)" strokeWidth="0.4" strokeDasharray="1 2" />
            <circle cx="0" cy="0" r="62" fill="none" stroke="url(#orbit)" strokeWidth="0.4" strokeDasharray="1 2" />
            {/* Connecting lines */}
            {pos0.map((p, i) => (
              <line key={`l0-${i}`} x1="0" y1="0" x2={p.x} y2={p.y} stroke="url(#orbit)" strokeWidth="0.3" opacity="0.6" />
            ))}
            {pos1.map((p, i) => (
              <line key={`l1-${i}`} x1="0" y1="0" x2={p.x} y2={p.y} stroke="url(#orbit)" strokeWidth="0.25" opacity="0.35" />
            ))}
          </svg>

          {/* Center */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff] blur-2xl opacity-70" />
              <div className="relative glass-strong rounded-full px-6 py-5 flex flex-col items-center gap-1.5 min-w-[160px]">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff]">
                  <Brain className="size-5 text-white" />
                </span>
                <div className="text-sm font-semibold">AI Engineering</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Core</div>
              </div>
            </div>
          </motion.div>

          {/* Ring 0 */}
          {ring0.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${pos0[i].x}%), calc(-50% + ${pos0[i].y}%))`,
              }}
            >
              <div className="glass-strong rounded-full px-3.5 py-2 text-xs font-medium whitespace-nowrap shadow-[0_0_20px_-6px_rgba(109,74,255,0.6)] hover:shadow-[0_0_30px_-4px_rgba(39,211,255,0.7)] transition-shadow">
                {s.name}
              </div>
            </motion.div>
          ))}

          {/* Ring 1 */}
          {ring1.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${pos1[i].x}%), calc(-50% + ${pos1[i].y}%))`,
              }}
            >
              <div className="glass rounded-full px-3 py-1.5 text-[11px] font-medium whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">
                {s.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
