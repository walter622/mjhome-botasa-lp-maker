import { Compass, HandHeart, PackageCheck, Ruler } from "lucide-react";

const ITENS = [
  { icon: Compass, title: "Design contemporâneo", text: "Estética atual com funcionalidade real para o dia a dia." },
  { icon: HandHeart, title: "Atendimento personalizado", text: "Consultoria especializada no local, com ou sem arquiteto." },
  { icon: PackageCheck, title: "Pronta-entrega", text: "Peças exclusivas disponíveis para retirar agora mesmo." },
  { icon: Ruler, title: "Sob encomenda", text: "Móveis com acabamentos sob medida para o seu espaço." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl space-y-5">
          
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            O que torna a MJ Home <span className="font-bold text-foreground">única</span>
          </h2>
          <div className="gold-divider w-24" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITENS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-7 rounded-2xl border border-border bg-card/60 hover:bg-card transition-colors min-h-52"
            >
              <Icon className="size-8 text-gold" strokeWidth={1.3} />
              <h3 className="mt-5 font-display text-xl leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
