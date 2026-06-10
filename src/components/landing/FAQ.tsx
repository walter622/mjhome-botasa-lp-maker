import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ITENS = [
  {
    q: "O que é o BOTA FORA?",
    a: "Evento especial da MJ Home com descontos de até 60% OFF em toda a loja para peças de showroom, estoque e sob encomenda, válido para todas as nossas unidades.",
  },
  { q: "Posso levar na hora?", a: "Sim! Temos diversas opções de pronta-entrega." },
  { q: "Posso personalizar minha compra?", a: "Sim. Também oferecemos opções sob encomenda." },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Cartão de crédito, boleto (após análise) e pagamento à vista.",
  },
  {
    q: "A entrega é garantida?",
    a: "Sim. Temos imensa credibilidade no mercado nacional e trabalhamos em parceria com grandes arquitetos e designers. Nossa equipe é própria e altamente treinada.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[#e5e5e5]">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="text-center space-y-5 mb-12">
          
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-black">
            Perguntas <span className="italic font-bold">frequentes</span>
          </h2>
          <div className="w-24 h-px bg-black/30 mx-auto" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {ITENS.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-black/10 rounded-xl bg-white/60 px-5"
            >
              <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline py-5 text-black">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-black/75 leading-relaxed text-[15px]">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
