import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-accent"
        >
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(39,211,255,0.9)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-muted-foreground text-base md:text-lg max-w-2xl">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
