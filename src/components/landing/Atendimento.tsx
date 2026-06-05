import { CTAButton } from "./CTAButton";
import img from "@/assets/atendimento.jpg";

export function Atendimento() {
  return (
    <section className="py-20 md:py-28 bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[7/5] rounded-2xl overflow-hidden border border-border">
            <img src={img} alt="Atendimento personalizado MJ Home" className="size-full object-cover" loading="lazy" />
          </div>
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-2xl border border-white/20" />
        </div>

        <div className="order-1 lg:order-2 space-y-7">
          
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Atendimento <span className="italic text-gold">personalizado</span>.
          </h2>
          <div className="gold-divider w-24" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
            Nosso time de especialistas está pronto para ajudar você a fazer a melhor escolha. Seja
            com ou sem arquiteto, você recebe orientação sobre medidas, tecidos, cores e composições.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
