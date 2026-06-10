import { Compass, HandHeart, PackageCheck, Ruler } from "lucide-react";

const ITENS = [
  { icon: Compass, title: "Design contemporâneo", text: "Estética atual com funcionalidade real para o dia a dia." },
  { icon: HandHeart, title: "Atendimento personalizado", text: "Consultoria especializada no local, com ou sem arquiteto." },
  { icon: PackageCheck, title: "Pronta-entrega", text: "Peças exclusivas disponíveis para retirar agora mesmo." },
  { icon: Ruler, title: "Sob encomenda", text: "Móveis com acabamentos sob medida para o seu espaço." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="rounded-[2.5rem] bg-[#e1e1e1] px-6 py-16 md:px-14 md:py-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]">
          <div className="max-w-2xl space-y-5">
            <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a1a1a]">
              O que torna a MJ Home <span className="font-bold text-[#1a1a1a]">única</span>
            </h2>
            <div className="gold-divider w-24 !bg-gradient-to-r !from-transparent !via-[#74282d] !to-transparent" />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ITENS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group p-7 rounded-2xl border border-[#d0d0d0] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 min-h-52"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
                  <Icon className="size-6 text-[#74282d]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight text-[#1a1a1a]">{title}</h3>
                <p className="mt-2 text-sm text-[#555555] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
