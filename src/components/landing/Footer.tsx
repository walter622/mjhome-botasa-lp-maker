import { Instagram } from "lucide-react";
import { CTAButton } from "./CTAButton";
import botaForaLogo from "@/assets/bota-fora-logo.webp.asset.json";

const IGS = [
  "@mjhomeoficial",
  "@mjhomemoema",
  "@mjhomepaulinia",
  "@mjhomeiguatemicampinas",
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        <div className="text-center space-y-7">
          <div className="inline-flex items-center justify-center">
            <img src={botaForaLogo.url} alt="Bota Fora MJ Home" className="h-16 md:h-20 w-auto" />
          </div>
          <h3 className="font-display text-3xl md:text-5xl text-balance leading-tight max-w-2xl mx-auto">
            Garanta sua peça no <span className="italic text-gold">Bota Fora</span>.
          </h3>
          <CTAButton size="lg" />
        </div>

        <div className="mt-14 pt-10 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-wider text-foreground/60">
            {IGS.map((ig) => (
              <a
                key={ig}
                href={`https://instagram.com/${ig.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Instagram className="size-3.5" />
                <span>{ig}</span>
              </a>
            ))}
          </div>
          <p className="text-xs text-foreground/50 tracking-wider">
            © MJ Home® — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
