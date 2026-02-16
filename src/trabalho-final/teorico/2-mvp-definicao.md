# 2. Definição do MVP: AI'nsights

## Estratégia de MVP (Mínimo Produto Viável)
O objetivo do MVP é validar se a IA consegue entregar insights acionáveis a partir de dados históricos, focando exclusivamente na **Importação Manual** (via CSV Upload) de tickets, chats e e-mails, sem a complexidade de integrações em tempo real nesta fase. centralizando a análise em um Dashboard de autoatendimento.

## Funcionalidades Essenciais (Must-Have)
1.  **Ingestão de Dados Manual:** Upload de arquivos CSV (exportações de Tickets, Chats e E-mails).
2.  **Pipeline de IA:** Classificação automática de tópicos e Análise de Sentimento (LLM).
3.  **Dashboard de Insights:** Visualização de volumes, principais reclamações e "Top 5 Problemas da Semana".

## Justificativa de Priorização (Matriz Valor x Esforço)

| Funcionalidade | Valor para o Cliente | Esforço Técnico | Decisão |
| :--- | :--- | :--- | :--- |
| **✅ Ingestão Manual (CSV)** | Alto (Viabilidade) | Baixo | **Sim (MVP)** |
| **✅ Pipeline de IA** | Alto (Core Value) | Alto | **Sim (MVP)** |
| **✅ Dashboard de Insights** | Alto (Visualização) | Médio | **Sim (MVP)** |
| *Conector Zendesk (API)* | Alto (Automação) | Médio | *Roadmap V2* |
| *Leitura de E-mails/Chats (Conectores)* | Médio | Alto | *Roadmap V2* |
| *Sugestão de Ações (IA)* | Alto | Alto | *Roadmap V2* |
| *Integração Slack* | Médio | Baixo | *Roadmap V2* |
| *Análise em Tempo Real* | Médio | Muito Alto | *Roadmap V3* |

### Hipótese a Validar
"Gerentes de CS conseguem reduzir o tempo de triagem de feedback em 50% usando o AI'nsights comparado ao processo manual em planilhas."
