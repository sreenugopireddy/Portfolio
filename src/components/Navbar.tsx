import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks } from "@/data/portfolio";
import { GlowLink } from "./ui/GlowButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4")}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 md:px-6 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,212,255,0.4)]" : "glass",
          )}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.6)] font-display font-bold text-white text-sm">
              SR
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <GlowLink href="#contact" className="hidden sm:inline-flex px-5 py-2 text-sm">
              Let's Connect
            </GlowLink>
            <button
              aria-label="Menu"
              className="lg:hidden inline-flex size-9 items-center justify-center rounded-full glass"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-3 grid gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
