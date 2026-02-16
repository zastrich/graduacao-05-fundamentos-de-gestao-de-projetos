# Plano de Execução do Trabalho: Do Problema ao Produto

## 1. Visão Geral do Projeto
**Objetivo:** Desenvolver uma proposta completa de produto digital com IA para análise de insights de atendimento ao cliente.
**Entrega:** Documentação teórica, artefatos práticos (Canvas, Roadmap, Matriz de Risco) e Pitch em vídeo.
**Ferramentas Escolhidas:**
*   **Documentação:** Markdown (VS Code) e PDF.
*   **Gestão Visual (Roadmap/Kanban):** Trello (via Playwright).
*   **Modelagem (Canvas):** Mermaid.js (via Markdown) ou Miro (opcional via Playwright se houver login). *Decisão: Focar em Trello para Roadmap e Markdown/Mermaid para Canvas para garantir autonomia imediata, com opção de Miro se o usuário logar.*
*   **Vídeo:** Roteiro em Markdown; Gravação pelo usuário (fora do escopo do agente).

## 2. Estrutura de Diretórios
```
/src
  /trabalho-final
    /teorico
      1-visao-produto.md
      2-mvp-definicao.md
      3-roadmap-descritivo.md
      4-ciclo-de-vida.md
      5-gestao-riscos.md
      6-gestao-ia.md
    /pratico
      canvas-visao.md        (Mermaid/Table)
      mvp-backlog.md         (Lista priorizada)
      matriz-riscos.md       (Tabela MD)
      roadmap-visual.png     (Screenshot do Trello)
      readme-artefatos.md
    /apresentacao
      roteiro-pitch.md
```

## 3. Detalhamento das Etapas e Automação

### Fase 1: Fundamentação Teórica (1.5 pontos)
**Ação:** Criar documentos detalhados com base na pesquisa realizada (PMBOK, Scrum, Materiais).
**Processo:**
1.  Escrever `1-visao-produto.md`: Definir 'AI'nsights' (nome fictício do produto). Público: Gerentes de CS. Valor: Redução de tempo de análise em 80%.
2.  Escrever `2-mvp-definicao.md`: Focar na funcionalidade "Análise de Sentimento Automática" e "Agrupamento de Tópicos". Priorização via Matriz de Impacto x Esforço.
3.  Escrever `5-gestao-riscos.md`: Identificar 5 riscos (ex: Alucinação da IA, LGPD, Integração com CRM legado). Mitigação com "Human in the Loop".

### Fase 2: Artefatos Práticos (3.5 pontos)
**Ação:** Criar representações visuais e listas organizadas.

#### 2.1. Canvas de Visão de Produto
*   **Ferramenta:** Markdown com Mermaid Class Diagram ou Tabela.
*   **Automação:** Gerar arquivo `.md` estruturado.

#### 2.2. Roadmap Visual (Trello)
*   **Ferramenta:** Trello.
*   **Abordagem:** Kanban Priorizado com Etiquetas de Fase.
*   **Ação de Refatoração:**
    1.  Renomear etiquetas: "Fase 1: MVP" (Verde), "Fase 2: Expansão" (Amarelo), "Fase 3: Escala" (Laranja).
    2.  Remover cartões muito granulares (ex: "Botão Enviar para Jira") para manter visão estratégica.
    3.  Ordenar a lista "Backlog" por fases (Fase 1 -> Fase 2 -> Fase 3).
    4.  Manter itens de "Fase 1" já iniciados nas listas "Desenvolvimento" e "Pronto" para demonstrar tração.
    5.  Tirar screenshot da tela (`mcp_playwright_browser_take_screenshot`).
    6.  Salvar em `/src/trabalho-final/pratico/roadmap-visual.png`.

#### 2.3. Matriz de Riscos
*   **Ferramenta:** Markdown (Tabela).
*   **Conteúdo:** Risco | Probabilidade | Impacto | Ação | Owner.

### Fase 3: Pitch de Vídeo (2.0 pontos)
**Ação:** Criar roteiro persuasivo.
**Processo:**
1.  Escrever `roteiro-pitch.md` seguindo a estrutura: Gancho (Problema) -> Solução (Visão) -> Como (MVP/Roadmap) -> Confiança (Riscos Mitigados) -> Call to Action.

## 4. Cronograma de Execução (Sugerido para o Agente)
1.  **Dia 1:** Criação da estrutura de pastas e documentos teóricos.
2.  **Dia 1:** Definição do conteúdo do MVP e Riscos.
3.  **Dia 2:** Execução do script Playwright para criar o Roadmap no Trello e capturar a evidência.
4.  **Dia 2:** Consolidação do `README.md` final e revisão dos entregáveis.

## 5. Próximos Passos
Para iniciar, o usuário deve aprovar este plano. O agente está pronto para começar a criar a estrutura de pastas e os documentos teóricos imediatamente.
