## Plano — LP Bota Fora MJ Home

Vou criar uma nova landing page do **Bota Fora MJ Home (09–12 de Julho)** seguindo a estrutura/estética do modelo `mj-pre-winter-elegance` (fundo preto, dourado, serif elegante, botão verde WhatsApp), adaptada à campanha Bota Fora com selo preto/branco "BOTA FORA 60% OFF" do ano passado e com foco nas 4 lojas (Campinas, Moema, Paulínia, Iguatemi).

### Defaults que vou assumir (você pulou as perguntas)
- **Link do WhatsApp:** uso `#` como placeholder em todos os CTAs — me mande o link e troco em 1 edit.
- **Logo Bota Fora:** reutilizo o selo preto/branco "MJ HOME · BOTA FORA · 60% OFF" no estilo do ano passado (gero como imagem).
- **Paleta:** mantenho preto + dourado (modelo) + verde WhatsApp, com o selo Bota Fora preto/branco como acento de campanha.

### Estrutura das seções (na ordem)
1. **Header fixo** — logo MJ Home + nav (Sobre, Diferenciais, Lojas, FAQ) + botão verde "Entrar no Grupo VIP".
2. **Hero** — selo Bota Fora à esquerda + headline "Bota Fora MJ Home — Toda Loja com até 60% OFF", subheadline com datas (09–12 Jul), chips com as 4 cidades, CTA WhatsApp. Imagem de ambiente à direita (estilo do modelo).
3. **Sua casa com a elegância que você merece** — bloco texto + imagem, CTA.
4. **Nossa jornada — 15 anos** — texto + 3 bullets (equipe, entrega, exclusividade), CTA.
5. **Nossos Diferenciais** — grid de 4 cards (design, atendimento, pronta-entrega, sob encomenda).
6. **Entrega própria, rápida e segura** — bloco com imagem + CTA.
7. **Variedade de móveis e decoração** — grid com categorias (Sofás, Poltronas, Mesas, etc.) em cards/chips elegantes.
8. **Atendimento Personalizado** — bloco texto + imagem + CTA.
9. **Depoimentos** — 3 cards (Camila, Juliana, Fernanda) com aspas em serif dourada.
10. **Ofertas Exclusivas do Bota Fora** — bloco de destaque com datas, "até 60% OFF", parcelamento + CTA verde grande.
11. **FAQ** — accordion (shadcn) com as 5 perguntas.
12. **Endereços das 5 lojas** — grid de cards com nome + endereço + link Maps + Instagram da unidade.
13. **Footer** — Instagrams (@mjhomeoficial, @mjhomemoema, @mjhomepaulinia, @mjhomeiguatemicampinas), copyright, CTA final WhatsApp.
14. **Botão flutuante WhatsApp** (canto inferior direito, sempre visível).

### Identidade visual
- Fundo `#0a0a0a` / dourado `#c9a24c` / verde WhatsApp `#25D366` / off-white para textos.
- Tipografia: serif elegante (Cormorant/Playfair) para headlines + sans (Inter/Manrope) para corpo — mesmo registro do modelo.
- Detalhes: linhas finas douradas, cantos arredondados suaves nas imagens, selo Bota Fora preto/branco como acento de campanha.

### Detalhes técnicos
- Stack atual (TanStack Start + Tailwind v4 + shadcn). Tokens em `src/styles.css` (oklch).
- Rota única: substituir `src/routes/index.tsx` pela nova LP, com `<head>` SEO completo (title, description, OG).
- Componentes em `src/components/landing/` (Header, Hero, Sobre, Diferenciais, Entrega, Categorias, Atendimento, Depoimentos, Ofertas, FAQ, Lojas, Footer, WhatsAppFAB).
- Gerar imagens com `imagegen` (hero ambiente, entrega, atendimento) + selo Bota Fora.
- Todos os CTAs apontam para o mesmo link WhatsApp (placeholder `#` até você mandar).
- Animações sutis com Motion (fade/translate on scroll), nada exagerado.

Confirma que pode seguir assim? Quando aprovar, eu construo tudo de uma vez. Se já tiver o link do WhatsApp e o logo oficial em mãos, manda junto que eu já encaixo.