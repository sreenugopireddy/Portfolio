import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  asChild?: false;
  children: ReactNode;
}

export function GlowButton({ className, variant = "primary", children, ...props }: GlowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#6d4aff] via-[#8a5cff] to-[#27d3ff] text-white shadow-[0_8px_30px_-8px_rgba(109,74,255,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(109,74,255,0.9)] hover:-translate-y-0.5"
          : "glass text-foreground hover:bg-white/10 hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function GlowLink({
  href,
  variant = "primary",
  children,
  className,
  target,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#6d4aff] via-[#8a5cff] to-[#27d3ff] text-white shadow-[0_8px_30px_-8px_rgba(109,74,255,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(109,74,255,0.9)] hover:-translate-y-0.5"
          : "glass text-foreground hover:bg-white/10 hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </a>
  );
}
