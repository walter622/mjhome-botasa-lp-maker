import { CalendarDays, MapPin } from "lucide-react";
import { CTAButton } from "./CTAButton";
import heroImg from "@/assets/hero-ambiente.jpg";
import seloAsset from "@/assets/bota-fora-logo.webp.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-72 top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-gold/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5">
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold">
              Edição 2026 · 09 a 12 de Julho
            </span>
          </div>

          <h1 className="font-display text-balance text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Bota Fora{" "}
            <span className="italic text-gold">MJ Home</span>
            <br />
            Toda a loja com até{" "}
            <span className="italic text-gold">60% OFF</span>.
          </h1>

          <p className="max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Condição inédita, válida somente nos dias <strong className="text-foreground">09, 10, 11 e 12 de Julho</strong>,
            para quem estiver no Grupo VIP do WhatsApp. Móveis de alto padrão a pronta-entrega
            ou personalizados sob encomenda.
          </p>

          <div className="flex flex-col gap-2.5 max-w-md">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-card/60 px-5 py-3 text-xs md:text-sm tracking-wider">
              <CalendarDays className="size-4 text-gold shrink-0" />
              <span className="uppercase">Loja Moema: <strong className="text-foreground">11, 12 e 13 de Julho</strong></span>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-card/60 px-5 py-3 text-xs md:text-sm tracking-wider">
              <MapPin className="size-4 text-gold shrink-0" />
              <span className="uppercase">Endereço: <strong className="text-foreground">Av. Jurucê, 488 – Moema</strong></span>
            </div>
          </div>

          <div className="pt-2">
            <CTAButton size="lg" />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30">
            <img
              src={heroImg}
              alt="Showroom MJ Home com móveis de alto padrão"
              className="size-full object-cover"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <img
            src={seloAsset.url}
            alt="Selo Bota Fora MJ Home com até 60% OFF"
            className="absolute -left-6 -bottom-8 md:-left-16 md:-bottom-10 w-44 md:w-72 drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
