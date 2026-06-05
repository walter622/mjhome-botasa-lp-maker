import { MapPin, Instagram } from "lucide-react";
import iguatemi from "@/assets/loja-iguatemi.png.asset.json";
import novaCampinas from "@/assets/loja-nova-campinas.png.asset.json";
import galleria from "@/assets/loja-galleria.png.asset.json";
import moema from "@/assets/loja-moema.png.asset.json";
import paulinia from "@/assets/loja-paulinia.png.asset.json";

const LOJAS = [
  {
    nome: "Shopping Iguatemi Campinas",
    end: "Av. Iguatemi, 777 — 2º piso · Campinas/SP",
    ig: "@mjhomeiguatemicampinas",
    img: iguatemi.url,
  },
  {
    nome: "Nova Campinas",
    end: "Av. Dr. Hermas Braga, 717 · Campinas/SP",
    ig: "@mjhomeoficial",
    img: novaCampinas.url,
  },
  {
    nome: "Shopping Galleria Campinas",
    end: "Av. Bailarina Selma Prada, s/n — 1º piso · Jardim Nilópolis · Campinas/SP",
    ig: "@mjhomeoficial",
    img: galleria.url,
  },
  {
    nome: "Loja Moema",
    end: "Av. Jurucê, 488 — Moema · São Paulo/SP",
    ig: "@mjhomemoema",
    img: moema.url,
  },
  {
    nome: "Loja Paulínia",
    end: "Rua José Dresdi, 35 — Nova Paulínia · Paulínia/SP",
    ig: "@mjhomepaulinia",
    img: paulinia.url,
  },
];

export function Lojas() {
  return (
    <section id="lojas" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center space-y-5 mb-14">
          
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Endereços das lojas <span className="italic text-gold">MJ Home</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOJAS.map((l) => (
            <a
              key={l.nome}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("MJ Home " + l.end)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card/60 hover:border-gold/50 hover:bg-card transition-colors overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={l.img}
                  alt={`Fachada ${l.nome}`}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-2">
                  <MapPin className="size-5 text-gold mt-0.5 shrink-0" strokeWidth={1.4} />
                  <h3 className="font-display text-xl leading-tight">{l.nome}</h3>
                </div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed flex-1">{l.end}</p>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs tracking-wider text-foreground/60 group-hover:text-gold transition-colors">
                  <Instagram className="size-3.5" />
                  <span>{l.ig}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
