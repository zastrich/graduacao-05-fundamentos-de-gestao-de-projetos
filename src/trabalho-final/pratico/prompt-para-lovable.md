# Prompt Assertivo para Lovable: Protótipo AI'nsights

Este documento contém o prompt detalhado para ser utilizado no **Lovable.dev** para o desenvolvimento do protótipo funcional do **AI'nsights**.

---

## Estrutura do Prompt

**Instrução Principal:**
"Atue como um Engenheiro de Software Senior e Especialista em UX/UI SaaS. Desenvolva um protótipo funcional em React para a plataforma **AI'nsights**, um SaaS B2B que transforma feedbacks de clientes em insights estratégicos. O protótipo deve focar no MVP de importação manual e visualização de dados."

### 1. Visão Geral e Contexto
*   **Nome do Produto:** AI'nsights.
*   **Público:** Gerentes de Produto (PMs) e Líderes de Customer Success (CS).
*   **Objetivo:** Permitir que o usuário faça upload de histórico de tickets (CSV), processe-os (simulação via frontend) e visualize sentimentos, tópicos e problemas prioritários.

### 2. Estudo Visual (Design System)
*   **Estilo:** **Moderno Premium com Glassmorphism**.
*   **Paleta de Cores:** Fundo escuro (Dark Mode por padrão) com acentos em Roxo Elétrico (#8B5CF6) e Azul Ciano (#06B6D4).
*   **Componentes:** Use **Shadcn UI** e **Lucide Icons**. Assegure bordas arredondadas, sombras suaves e efeitos de vidro (Backdrop Blur).
*   **Tipografia:** Fonte Sans-serif moderna (ex: Inter ou Geist).
*   **Charts:** Use **Recharts** para visualização de dados (Gráficos de Linha para volume e Radar/Barra para sentimentos).

### 3. Fluxo e Funcionalidades
1.  **Página Inicial (Dashboard Hub):**
    *   Cards de resumo (Total de Tickets Analisados, Sentimento Médio, Churn Risk Score).
    *   Gráfico de "Trends de Sentimento" ao longo do tempo.
    *   Lista de "Top 5 Recurring Issues" (ex: "Problema com Checkout", "Lentidão no Login").
2.  **Módulo de Upload de Dados:**
    *   Área de Drag & Drop para CSV.
    *   Processador Visual: Quando o arquivo for subido, mostre uma barra de progresso com steps de IA (ex: "Tokenizing texts...", "Analyzing Sentiments...", "Clustering Topics...").
    *   **Mocks de Processamento:** Crie uma lógica em JS que, após o upload, gere dados randômicos mas coerentes baseados no CSV mockado.
3.  **Visualização Detalhada:**
    *   Uma tabela ou grid de "Insights Individuais" onde cada ticket processado mostra o texto original, a categoria atribuída e o score de sentimento.

### 4. Especificação de Mocks (CSV Exemplos)
Indique para o Lovable que o app deve aceitar e processar arquivos CSV com o seguinte cabeçalho:
`date, channel, customer_id, interaction_text, priority`

**Exemplo de conteúdo para o mock interno:**
- `2024-02-01, Email, CUST-01, "A plataforma está lenta para carregar o dashboard de vendas", High`
- `2024-02-01, Chat, CUST-02, "Não consigo resetar minha senha", Medium`
- `2024-02-02, Ticket, CUST-03, "Adorei a nova funcionalidade de busca!", Low`

### 5. Regras de Negócio para o App
*   **Simulação de IA:** Não precisa de backend real. Use um timer de 3-5 segundos para simular o processamento e então exiba os dados pré-definidos no Dashboard.
*   **Responsividade:** O app deve ser Desktop-first, mas totalmente responsivo.
*   **Interatividade:** Hover effects nos gráficos e transições suaves entre as abas.

---

### Prompt Final para Copiar e Colar no Lovable:

```text
Act as a Senior Full-Stack Engineer and UX Specialist. Build a high-end B2B SaaS prototype called "AI'nsights" using React, Tailwind, Lucide Icons, and Shadcn UI components. 

### LANGUAGE REQUIREMENT (CRITICAL)
- **Language:** Every piece of text, button label, dashboard metric, chart title, and internal feedback message MUST BE in **Brazilian Portuguese (pt-BR)**.
- Even though this prompt is in English, the final application MUST be 100% in Portuguese.

### Core Product Vision
AI'nsights é uma plataforma de análise orientada por IA que transforma registros de suporte (CSV) em itens acionáveis para o roadmap do produto.

### Design System & Layout
- Theme: Premium Dark Mode (#020617 background). 
- Aesthetics: Modern Glassmorphism. Use 'backdrop-blur-md', 'bg-white/5', and 'border-white/10'. 
- Accents: Gradient colors using Electric Purple (#8B5CF6) and Cyan (#06B6D4).
- Typography: Use "Inter" or "Geist Sans".
- Navigation (In PT-BR): A sleek sidebar with navigation links: "Dashboard" (Início), "Upload Inteligente" (Importar), "Biblioteca de Insights" (Registros), and "Sugestões de Roadmap".

### Feature Details
1. Dashboard (Central de Insights):
   - Hero Cards (In PT-BR): "Interações Analisadas", "Índice de Sentimento (NPS)", "Problemas Críticos", and "Tempo Economizado".
   - Charts (In PT-BR): 
     - "Tendência de Sentimento" (Recharts AreaChart) showing Daily Sentiment over the last 30 days.
     - "Distribuição por Canal" (Recharts PieChart) comparing E-mail vs. Chat vs. Tickets.
     - "Principais Tópicos" (Recharts BarChart) showing frequency of top 5 issues.

2. Smart Upload (Upload Inteligente):
   - Design: A large, interactive Drag & Drop zone with a subtle glowing border when hovering.
   - Process Simulation (In PT-BR): Upon file drop, trigger a multi-step animation:
     1. "Mapeando estrutura do CSV..."
     2. "Limpando ruídos com IA..."
     3. "Analisando Sentimento e Intenção..."
     4. "Agrupando categorias de Roadmap..."

3. CSV Mock Data (In PT-BR):
The app should handle a CSV with headers: `data, canal, id_cliente, texto_interacao, prioridade`.
Include these 10 examples in your mock processing logic:
- 2024-02-10, E-mail, CUST-101, "O dashboard de cobrança trava indefinidamente no navegador Safari.", Alta
- 2024-02-10, Chat, CUST-102, "Adorei o novo modo escuro, ficou incrível!", Baixa
- 2024-02-11, Ticket, CUST-103, "Não consigo encontrar o botão de exportar na seção de relatórios.", Média
- 2024-02-11, E-mail, CUST-104, "Erro crítico: Perda de dados ao salvar as configurações do perfil.", Urgente
- 2024-02-12, Chat, CUST-105, "Existe alguma forma de integrar com o Slack? Precisamos muito disso.", Média
- 2024-02-12, Ticket, CUST-106, "A renovação da assinatura falhou, mas o valor foi descontado.", Urgente
- 2024-02-13, E-mail, CUST-107, "O tempo médio de carregamento da página principal está muito lento ultimamente.", Média
- 2024-02-13, Chat, CUST-108, "Como faço para alterar o nome do meu workspace?", Baixa
- 2024-02-14, Ticket, CUST-109, "O filtro por intervalo de datas está trazendo resultados incorretos na exportação CSV.", Alta
- 2024-02-14, E-mail, CUST-110, "Equipe de suporte excelente, obrigado pela ajuda rápida!", Baixa

4. Sugestões de Roadmap (Valor da IA):
   - Display a list of "Recomendações Geradas por IA" based on the clusters.
   - Example item: "Otimização de Performance (Problema: Lentidão relatada por 15% dos usuários) -> Prioridade: Alta".

### Technical Guardrails
- Use Shadcn `Data-Table` for the history logs with filtering capabilities.
- Ensure all components are responsive (Mobile-friendly).
- Use Framer Motion for smooth page transitions and entry animations.
- Implementation: Everything must be in a single request flow, ensuring logic between Upload -> Dashboard is seamless.
```
