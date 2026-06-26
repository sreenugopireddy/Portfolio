import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong";
  glow?: boolean;
}

export function GlassCard({ className, variant = "default", glow, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        variant === "strong" ? "glass-strong" : "glass",
        "rounded-[var(--radius)] relative overflow-hidden",
        glow && "shadow-[0_0_40px_-10px_rgba(109,74,255,0.45)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
