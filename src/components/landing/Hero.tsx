import { MapPin } from "lucide-react";
import { CTAButton } from "./CTAButton";
import heroImg from "@/assets/hero-ambiente.jpg";
import botaForaLogo from "@/assets/bota-fora-logo.webp.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-foreground/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-72 top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-foreground/5"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <img
            src={botaForaLogo.url}
            alt="MJ Home Bota Fora — com até 60% OFF"
            className="w-full max-w-md md:max-w-lg"
          />

          <h1 className="font-display text-balance text-[2.4rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Toda a loja com até{" "}
            <span className="italic">60% OFF</span>.
          </h1>

          <p className="max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Condição inédita, válida somente para quem estiver no Grupo VIP do WhatsApp.
            Móveis de alto padrão a pronta-entrega ou personalizados sob encomenda.
          </p>

          {/* Datas do evento — em destaque */}
          <div className="rounded-2xl border border-foreground/30 bg-card/60 p-6 md:p-8">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-foreground/60 mb-3">
              Datas do evento
            </p>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-display leading-none">
              <span className="text-5xl md:text-7xl lg:text-8xl">09</span>
              <span className="text-3xl md:text-5xl text-foreground/40">·</span>
              <span className="text-5xl md:text-7xl lg:text-8xl">10</span>
              <span className="text-3xl md:text-5xl text-foreground/40">·</span>
              <span className="text-5xl md:text-7xl lg:text-8xl">11</span>
              <span className="text-3xl md:text-5xl text-foreground/40">·</span>
              <span className="text-5xl md:text-7xl lg:text-8xl">12</span>
              <span className="text-xl md:text-3xl tracking-wider uppercase ml-2 text-foreground/80">
                de Julho
              </span>
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-start gap-3">
              <MapPin className="size-5 text-foreground/80 mt-0.5 shrink-0" strokeWidth={1.6} />
              <div className="text-sm md:text-base text-foreground/80 leading-relaxed">
                <span className="block font-semibold text-foreground uppercase tracking-wider text-xs md:text-sm mb-1">
                  Loja Moema
                </span>
                Av. Jurucê, 488 — Moema · São Paulo / SP
              </div>
            </div>
          </div>

          <div className="pt-2">
            <CTAButton size="lg" />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-foreground/20">
            <img
              src={heroImg}
              alt="Showroom MJ Home com móveis de alto padrão"
              className="size-full object-cover"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
