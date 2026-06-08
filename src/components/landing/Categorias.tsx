const CATS = [
  "Sofás",
  "Poltronas",
  "Mesas de Jantar",
  "Cadeiras",
  "Mesas de Centro",
  "Aparadores",
  "Peças Decorativas",
];

export function Categorias() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10 text-center space-y-6">
        
        <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Variedade de móveis <br className="hidden md:block" />e <span className="highlight-accent">decoração</span>
        </h2>
        <div className="gold-divider w-24 mx-auto" />
        <p className="mx-auto max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
          Todas as categorias com opção de pronta-entrega e também sob encomenda.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATS.map((c) => (
            <div
              key={c}
              className="px-6 py-3 rounded-full border border-white/40 bg-white/5 text-sm tracking-wide uppercase text-foreground/90 hover:bg-white/15 transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
