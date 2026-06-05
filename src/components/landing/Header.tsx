import { HeaderCTA } from "./CTAButton";
import mjLogo from "@/assets/mj-home-logo.webp.asset.json";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={mjLogo.url} alt="MJ Home" className="size-10 md:size-12 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[10px] tracking-[0.3em] text-foreground/60 uppercase">MJ Home</span>
            <span className="text-xs tracking-[0.2em] text-foreground/70 uppercase">Bota Fora</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-xs tracking-[0.2em] uppercase text-foreground/70">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
          <a href="#ofertas" className="hover:text-white transition-colors">Ofertas</a>
          <a href="#lojas" className="hover:text-white transition-colors">Lojas</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <HeaderCTA className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
