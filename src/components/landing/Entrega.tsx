import { CTAButton } from "./CTAButton";
import img from "@/assets/entrega.jpg";

export function Entrega() {
  return (
    <section className="py-20 md:py-28 bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-7">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Logística MJ Home</span>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Entrega própria, <span className="italic text-gold">rápida</span> e segura.
          </h2>
          <div className="gold-divider w-24" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
            Nossa equipe é treinada para garantir que cada peça chegue perfeita, com montagem
            profissional e sem surpresas.
          </p>
          <CTAButton />
        </div>

        <div className="relative">
          <div className="aspect-[7/5] rounded-2xl overflow-hidden border border-border">
            <img src={img} alt="Equipe MJ Home realizando entrega cuidadosa" className="size-full object-cover" loading="lazy" />
          </div>
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-2xl border border-gold/20" />
        </div>
      </div>
    </section>
  );
}
