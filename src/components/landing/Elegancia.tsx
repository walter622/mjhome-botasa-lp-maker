import { CTAButton } from "./CTAButton";
import img from "@/assets/sala-elegancia.jpg";

export function Elegancia() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[7/5] rounded-2xl overflow-hidden border border-border">
            <img src={img} alt="Sala de jantar elegante MJ Home" className="size-full object-cover" loading="lazy" />
          </div>
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-2xl border border-white/20" />
        </div>

        <div className="order-1 lg:order-2 space-y-7">
          <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/55">MJ Home · Bota Fora</span>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Sua casa com a <span className="italic text-gold">elegância</span> que você merece
          </h2>
          <div className="gold-divider w-24" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
            Com móveis de alto padrão, a pronta-entrega ou personalizados sob encomenda.
            Somente durante o <strong className="text-foreground">Bota Fora MJ Home</strong> com
            até 60% OFF em toda a loja, nos dias <strong className="text-foreground">26, 27 e 28 de Junho</strong>.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
