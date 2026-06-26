import { ArrowUp, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-[1.2fr_2fr_auto] gap-8 items-start">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff] shadow-[0_0_20px_rgba(109,74,255,0.6)]">
              <Sparkles className="size-4 text-white" />
            </span>
            <div>
              <div className="font-display font-semibold">AI.Engineer</div>
              <div className="text-[11px] text-muted-foreground">Production LLM systems.</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
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
              { Icon: Twitter, href: profile.twitter, label: "Twitter" },
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
              className="size-9 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#6d4aff] to-[#27d3ff] text-white hover:-translate-y-0.5 transition-transform"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Crafted with rigor and a lot of caffeine.
          </p>
          <p className="text-[11px] text-muted-foreground">Built on AI · Designed for production.</p>
        </div>
      </div>
    </footer>
  );
}
