const DEPOIMENTOS = [
  {
    quote:
      "Amei a experiência com a MJ Home! O atendimento dos designers nos ajudou muito com as medidas da mesa e das cadeiras.",
    name: "Camila S.",
    city: "Campinas",
  },
  {
    quote:
      "Comprei durante uma promoção da MJ Home e não poderia estar mais satisfeita. Atendimento excelente e entrega perfeita!",
    name: "Juliana T.",
    city: "São Paulo",
  },
  {
    quote:
      "A MJ Home consegue unir beleza, conforto e atendimento de alto nível como poucas marcas.",
    name: "Fernanda",
    city: "Paulínia",
  },
];

export function Depoimentos() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center space-y-5">
          
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Depoimentos de <span className="italic text-gold">clientes</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.name}
              className="p-8 rounded-2xl border border-border bg-card/60 flex flex-col justify-between min-h-72"
            >
              <span className="font-display text-6xl text-foreground/25 leading-none">"</span>
              <blockquote className="-mt-4 text-base md:text-lg text-foreground/85 leading-relaxed font-display italic">
                {d.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <div className="font-semibold text-sm">{d.name}</div>
                <div className="text-xs text-foreground/60 tracking-wider uppercase mt-1">{d.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
