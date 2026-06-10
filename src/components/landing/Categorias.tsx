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
    <section className="py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-[2.5rem] bg-[#e1e1e1] px-6 py-16 md:px-14 md:py-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] text-center space-y-6">
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a1a1a]">
            Variedade de móveis <br className="hidden md:block" />e <span className="font-bold text-[#1a1a1a]">decoração</span>
          </h2>
          <div className="gold-divider w-24 mx-auto !bg-gradient-to-r !from-transparent !via-[#74282d] !to-transparent" />
          <p className="mx-auto max-w-2xl text-base md:text-lg text-[#555555] leading-relaxed">
            Todas as categorias com opção de pronta-entrega e também sob encomenda.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {CATS.map((c) => (
              <div
                key={c}
                className="px-6 py-3 rounded-full border border-[#c0c0c0] bg-white/70 text-sm tracking-wide uppercase text-[#333333] hover:bg-white hover:border-[#999999] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
