---
description: Workflow para estudar um conteúdo e gerar um resumo estruturado.
---

# Workflow: Estudo e Resumo

1.  **Receber Entrada:**
    *   Identifique o arquivo de material de estudo (ex: `assets/<arquivo>.md`).

2.  **Executar Skill de Estudo:**
    *   Utilize a skill `study_material` para analisar o conteúdo.
    *   Extraia: Conceitos, Definições, Exemplos, Aplicações.

3.  **Executar Skill de Resumo:**
    *   Utilize a skill `summarize_content` (ou siga a estrutura abaixo):
    *   Estruture o conteúdo no formato padrão:
        *   `# Nome da Disciplina`
        *   `## Conceitos Principais`
        *   `## Definições Importantes`
        *   `## Exemplos`
        *   `## Aplicações Práticas`
        *   `## Pontos para Revisão`

4.  **Salvar Saída:**
    *   Gere o arquivo em `/src/<nome-da-disciplina>-summary.md` (use kebab-case para o nome do arquivo).
    *   Confirme a criação do arquivo.

5.  **Atualizar Memória:**
    *   Adicione o nome da disciplina e o caminho do resumo ao `/.agent/memory/disciplinas_estudadas.json`.
