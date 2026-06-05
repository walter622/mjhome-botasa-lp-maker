import { MapPin } from "lucide-react";
import moema from "@/assets/loja-moema.jpg";
import iguatemi from "@/assets/loja-iguatemi.jpg";
import novaCampinas from "@/assets/loja-nova-campinas.jpg";
import galleria from "@/assets/loja-galleria.jpg";
import paulinia from "@/assets/loja-paulinia.jpg";

const LOJAS = [
  {
    nome: "São Paulo — Moema",
    end: "Av. Jurucê, 488 — Moema · São Paulo / SP",
    img: moema,
  },
  {
    nome: "Campinas — Shopping Iguatemi",
    end: "Av. Iguatemi, 777 — Vila Brandina · Campinas / SP",
    img: iguatemi,
  },
  {
    nome: "Campinas — Nova Campinas",
    end: "Av. Dr. Hermas Braga, 717 — Nova Campinas · Campinas / SP",
    img: novaCampinas,
  },
  {
    nome: "Campinas — Galleria Shopping",
    end: "Rodovia D. Pedro I, km 131,5 — Jardim Nilópolis · Campinas / SP",
    img: galleria,
  },
  {
    nome: "Paulínia — SP",
    end: "Rua José Dresdi, 35 — Paulínia / SP",
    img: paulinia,
  },
];

export function Lojas() {
  return (
    <section id="lojas" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center space-y-5 mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/60">5 unidades</span>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Nossas <span className="italic">lojas</span>.
          </h2>
          <div className="mx-auto h-px w-24 bg-foreground/40" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {LOJAS.map((l) => (
            <a
              key={l.nome}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("MJ Home " + l.end)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
                <img
                  src={l.img}
                  alt={`MJ Home ${l.nome}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {l.nome}
                </h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 shrink-0 text-foreground/50" strokeWidth={1.5} />
                  <span>
                    <span className="text-foreground/50 italic">Endereço: </span>
                    {l.end}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
