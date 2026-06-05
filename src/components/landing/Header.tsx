import { CTAButton } from "./CTAButton";
import mjLogo from "@/assets/mj-home-logo.webp.asset.json";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={mjLogo.url} alt="MJ Home" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:inline text-[10px] tracking-[0.35em] text-foreground/70 uppercase border-l border-border pl-3">
            Bota Fora
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-xs tracking-[0.2em] uppercase text-foreground/70">
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a>
          <a href="#ofertas" className="hover:text-foreground transition-colors">Ofertas</a>
          <a href="#lojas" className="hover:text-foreground transition-colors">Lojas</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        <CTAButton label="Grupo VIP" size="sm" className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
