import { CalendarDays, Store, Tag, CreditCard } from "lucide-react";
import { CTAButton } from "./CTAButton";

const HIGHLIGHTS = [
  { icon: CalendarDays, label: "09, 10, 11 e 12 de Julho" },
  { icon: Store, label: "Em todas as nossas unidades" },
  { icon: Tag, label: "Móveis com até 60% OFF em toda a loja" },
  { icon: CreditCard, label: "Pronta-entrega + parcelamento especial" },
];

export function Ofertas() {
  return (
    <section id="ofertas" className="py-20 md:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.06]" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-10">
        <div className="rounded-3xl border border-gold/40 bg-background/70 backdrop-blur p-8 md:p-14 text-center space-y-7">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Condição inédita</span>
          <h2 className="font-display text-balance text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            Ofertas exclusivas do <br className="hidden md:block" />
            <span className="italic text-gold">Bota Fora</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />

          <ul className="mx-auto max-w-2xl grid sm:grid-cols-2 gap-3 pt-4 text-left">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/60"
              >
                <Icon className="size-5 text-gold shrink-0 mt-0.5" strokeWidth={1.6} />
                <span className="text-sm md:text-[15px] text-foreground/85">{label}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <CTAButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
