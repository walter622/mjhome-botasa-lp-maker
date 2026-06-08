import { Users, Truck, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";

const ITENS = [
  {
    icon: Users,
    title: "Arquitetos & Designers",
    text: "Equipe especializada para orientar cada escolha com sensibilidade e técnica.",
  },
  {
    icon: Truck,
    title: "Entrega própria",
    text: "Frota e equipe treinada para uma entrega cuidadosa e pontual.",
  },
  {
    icon: Sparkles,
    title: "Exclusividade",
    text: "Produtos exclusivos e opções sob encomenda com alto padrão de acabamento.",
  },
];

export function Jornada() {
  return (
    <section className="py-20 md:py-28 bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-5 md:px-10 text-center space-y-6">
        <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/55">Desde 2009</span>
        <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Nossa jornada: <span className="font-sans font-bold text-foreground">15 anos</span> de história e confiança
        </h2>
        <div className="gold-divider w-24 mx-auto" />
        <p className="mx-auto max-w-3xl text-base md:text-lg text-foreground/75 leading-relaxed">
          A MJ Home transforma sonhos em realidade com design, conforto e sofisticação. Com lojas em
          Campinas (Nova Campinas, Shopping Iguatemi e Galleria Shopping), Moema (SP) e Paulínia, somos
          referência nacional em móveis soltos de alto padrão e atendimento personalizado.
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-6xl px-5 md:px-10 grid md:grid-cols-3 gap-6">
        {ITENS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group p-7 rounded-2xl border border-border bg-background/60 hover:border-white/50 transition-colors"
          >
            <Icon className="size-7 text-gold" strokeWidth={1.4} />
            <h3 className="mt-5 font-display text-2xl">{title}</h3>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <CTAButton />
      </div>
    </section>
  );
}
