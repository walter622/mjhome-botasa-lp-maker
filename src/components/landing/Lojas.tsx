import { MapPin, Instagram } from "lucide-react";

const LOJAS = [
  {
    nome: "Shopping Iguatemi Campinas",
    end: "Av. Iguatemi, 777 — 2º piso · Campinas/SP",
    ig: "@mjhomeiguatemicampinas",
  },
  {
    nome: "Nova Campinas",
    end: "Av. Dr. Hermas Braga, 717 · Campinas/SP",
    ig: "@mjhomeoficial",
  },
  {
    nome: "Shopping Galleria Campinas",
    end: "Av. Bailarina Selma Prada, s/n — 1º piso · Jardim Nilópolis · Campinas/SP",
    ig: "@mjhomeoficial",
  },
  {
    nome: "Loja Moema",
    end: "Av. Jurucê, 488 — Moema · São Paulo/SP",
    ig: "@mjhomemoema",
  },
  {
    nome: "Loja Paulínia",
    end: "Rua José Dresdi, 35 — Nova Paulínia · Paulínia/SP",
    ig: "@mjhomepaulinia",
  },
];

export function Lojas() {
  return (
    <section id="lojas" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center space-y-5 mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">5 unidades</span>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Endereços das lojas <span className="italic text-gold">MJ Home</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOJAS.map((l) => (
            <a
              key={l.nome}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("MJ Home " + l.end)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 rounded-2xl border border-border bg-card/60 hover:border-gold/50 hover:bg-card transition-colors flex flex-col"
            >
              <MapPin className="size-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-xl leading-tight">{l.nome}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">{l.end}</p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs tracking-wider text-foreground/60 group-hover:text-gold transition-colors">
                <Instagram className="size-3.5" />
                <span>{l.ig}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
