import { ArrowUp, Github, Linkedin, Globe } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-[1.2fr_2fr_auto] gap-8 items-start">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.6)] font-display font-bold text-white">
              SR
            </span>
            <div>
              <div className="font-display font-semibold text-sm uppercase tracking-wider">Sreenivasa Reddy</div>
              <div className="text-[11px] text-muted-foreground">AI Engineer | LLM Systems Architect</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.filter((l) => l.label !== "Home").map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { Icon: Github, href: profile.github, label: "GitHub" },
              { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { Icon: Globe, href: profile.portfolio, label: "Portfolio" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-9 inline-flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="size-9 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#00d4ff] text-white hover:-translate-y-0.5 transition-transform"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground">Built with TanStack Start · Deployed on Lovable</p>
        </div>
      </div>
    </footer>
  );
}
