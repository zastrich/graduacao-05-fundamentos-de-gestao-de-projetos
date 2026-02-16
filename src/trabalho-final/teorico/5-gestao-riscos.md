# 5. Gerenciamento de Riscos: AI'nsights

Identificação e mitigação dos 5 principais riscos do projeto, classificados por impacto e probabilidade.

## 1. Alucinação da IA (Técnico)
*   **Descrição:** O modelo de linguagem pode inventar fatos ou categorizar tickets incorretamente, gerando insights falsos.
*   **Probabilidade:** Média | **Impacto:** Alto
*   **Mitigação:** Implementar camada de verificação (Self-Correction) e permitir feedback humano ("Isso não é um bug") para re-treinar o classificador (Human-in-the-loop).

## 2. Violação de Privacidade/LGPD (Legal)
*   **Descrição:** Vazamento de dados sensíveis (PII) presentes nos tickets de suporte dos clientes.
*   **Probabilidade:** Baixa | **Impacto:** Crítico
*   **Mitigação:** Sanitização automática de dados (remoção de CPFs, Emails, Nomes) *antes* de enviar para a API da LLM. Contratos robustos de processamento de dados (DPA).

## 3. Custo Elevado de API (Financeiro)
*   **Descrição:** O volume de tickets pode ser maior que o previsto, tornando o custo da API da OpenAI inviável para o modelo de precificação.
*   **Probabilidade:** Alta | **Impacto:** Alto
*   **Mitigação:** Uso de modelos menores e mais baratos para triagem inicial (ex: GPT-4o-mini ou Llama 3) e caching de respostas similares.

## 4. Dependência da Plataforma Zendesk (Estratégico)
*   **Descrição:** Zendesk pode alterar sua API ou limitar o acesso a dados de terceiros.
*   **Probabilidade:** Baixa | **Impacto:** Alto
*   **Mitigação:** Arquitetura agnóstica de fonte de dados (Adapter Pattern) para facilitar a integração rápida com outros players (Intercom, Freshdesk).

## 5. Baixa Adoção pelos Gestores (Mercado)
*   **Descrição:** Gestores podem não confiar na "caixa preta" da IA e continuar usando planilhas.
*   **Probabilidade:** Média | **Impacto:** Alto
*   **Mitigação:** Foco total em UX/UI explicavél (Explainable AI) - mostrar *o porquê* da categorização com trechos do ticket original. Oferecer onboarding consultivo.
