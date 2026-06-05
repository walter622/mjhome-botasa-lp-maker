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
    <section id="faq" className="py-20 md:py-28 bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="text-center space-y-5 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">FAQ</span>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Perguntas <span className="italic text-gold">frequentes</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {ITENS.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl bg-background/60 px-5"
            >
              <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline py-5">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed text-[15px]">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
