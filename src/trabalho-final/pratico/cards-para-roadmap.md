# Cards para Roadmap do Trello

Este documento detalha os cartões que compõem o roadmap do produto AI'nsights, incluindo metadados para automação e rastreabilidade.

## Fase 1: MVP & Validação (02/03/2026 a 20/03/2026)
**Objetivo:** Validar a proposta de valor com dados históricos via upload manual.

| Título | Descrição | DoR (Definition of Ready) | DoD (Definition of Done) | Dependência | Data Início | Data Fim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Ingestão Manual (CSV/TXT)** | Implementar funcionalidade de upload de arquivos CSV/TXT. | - Schema de dados CSV definido.<br>- Infra bucket S3 disponível. | - Upload funcional via interface.<br>- Validação de arquivo implementada.<br>- Armazenamento no S3 confirmado. | - | 02/03/2026 | 06/03/2026 |
| **Pipeline IA (Core)** | Pipeline de processamento e extração de insights via LLM. | - Protótipo de prompt validado.<br>- API da OpenAI/Anthropic configurada. | - Dados brutos processados com sucesso.<br>- Insights salvos no banco de dados.<br>- LGPD: Anonimização funcional. | Ingestão Manual (CSV/TXT) | 09/03/2026 | 13/03/2026 |
| **Dashboard Beta** | Interface React para visualização dos insights. | - Wireframe de baixa fidelidade aprovado.<br>- API de leitura de insights pronta. | - Gráficos de volume e sentimento ativos.<br>- Filtro por data funcional.<br>- Nuvem de palavras gerada. | Pipeline IA (Core) | 16/03/2026 | 20/03/2026 |

---

## Fase 2: Integração & Automação (30/03/2026 a 24/04/2026)
**Objetivo:** Automatizar a coleta de dados e expandir para múltiplos canais.

| Título | Descrição | DoR (Definition of Ready) | DoD (Definition of Done) | Dependência | Data Início | Data Fim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Conectores (Zendesk/Email)** | Ingestão automática via API Zendesk e IMAP. | - Credenciais de sandbox disponíveis.<br>- Webhook endpoint configurado. | - Ingestão incremental funcional.<br>- Logs de sincronização ativos.<br>- Tratamento de erros de conexão. | Pipeline IA (Core) | 30/03/2026 | 10/04/2026 |
| **Relatórios Automáticos (Email)** | Job cron semanal para envio de PDF resumido. | - Template do relatório definido.<br>- Serviço de envio (SendGrid) pronto. | - PDF gerado corretamente.<br>- Disparo agendado funcionando.<br>- Tracking de abertura básico. | Dashboard Beta | 13/04/2026 | 17/04/2026 |
| **Integração Jira (Action Plans)** | Botão "Enviar para Jira" para cards de insights. | - API do Jira mapeada.<br>- Fluxo de mapeamento de campos pronto. | - Card criado no Jira via 1-click.<br>- Link de volta para AI'nsights no card. | Pipeline IA (Core) | 20/04/2026 | 24/04/2026 |

---

## Fase 3: Escala & Inteligência Preditiva (04/05/2026 a 29/05/2026)
**Objetivo:** Antecipar problemas e escalar a infraestrutura.

| Título | Descrição | DoR (Definition of Ready) | DoD (Definition of Done) | Dependência | Data Início | Data Fim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Detecção de Anomalias** | Alertas estatísticos para desvios de volume. | - Métrica base (2 sigma) definida.<br>- Serviço de notificação configurado. | - Gatilho de alerta funcionando.<br>- Notificação enviada para canais.<br>- Falsos positivos < 5%. | Conectores (Zendesk/Email) | 04/05/2026 | 15/05/2026 |
| **Trend Spotting** | Clustering para temas emergentes não categorizados. | - Massa de dados mínima para treino.<br>- Algoritmo de clustering selecionado. | - Identificação de temas "Outros".<br>- Interface de aprovação de nova trend.<br>- Agrupamento semântico validado. | Pipeline IA (Core) | 18/05/2026 | 22/05/2026 |
| **API Pública** | Endpoints REST para consumo externo de dados. | - Documentação Swagger pronta.<br>- Sistema de API Keys implementado. | - Rate limiting configurado.<br>- Endpoints GET /insights funcionais.<br>- Latência média < 200ms. | Detecção de Anomalias | 25/05/2026 | 29/05/2026 |
