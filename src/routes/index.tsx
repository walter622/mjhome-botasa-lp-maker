import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Elegancia } from "@/components/landing/Elegancia";
import { Jornada } from "@/components/landing/Jornada";
import { Diferenciais } from "@/components/landing/Diferenciais";
import { Entrega } from "@/components/landing/Entrega";
import { Categorias } from "@/components/landing/Categorias";
import { Atendimento } from "@/components/landing/Atendimento";
import { Depoimentos } from "@/components/landing/Depoimentos";
import { Ofertas } from "@/components/landing/Ofertas";
import { FAQ } from "@/components/landing/FAQ";
import { Lojas } from "@/components/landing/Lojas";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bota Fora MJ Home — Até 60% OFF | 26, 27 e 28 de Junho" },
      {
        name: "description",
        content:
          "Bota Fora MJ Home: até 60% OFF em toda a loja nos dias 26, 27 e 28 de Junho. Móveis de alto padrão em Campinas, Moema, Paulínia e Iguatemi.",
      },
      { property: "og:title", content: "Bota Fora MJ Home — Até 60% OFF" },
      {
        property: "og:description",
        content:
          "26, 27 e 28 de Junho. Móveis de alto padrão com até 60% OFF em todas as lojas MJ Home.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Elegancia />
      <Jornada />
      <Diferenciais />
      <Entrega />
      <Categorias />
      <Atendimento />
      <Depoimentos />
      <Ofertas />
      <FAQ />
      <Lojas />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
