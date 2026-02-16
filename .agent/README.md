# Agente Autônomo: Estudante de Graduação em IA e Automação Digital

Este repositório implementa um agente autônomo que simula o comportamento de um estudante universitário organizado e técnico.

## 🎓 Sobre o Agente

O agente segue um perfil de estudante exemplar, com capacidades de:
*   Estudar materiais (PDF, MD, TXT).
*   Gerar resumos estruturados.
*   Planejar projetos finais.
*   Organizar entregas acadêmicas.

## 📂 Estrutura do Projeto

```
/
├── /src/                   # Entregas principais (Resumos gerados aqui)
├── /assets/                # Materiais de estudo (Entradas)
├── /.agent/
│   ├── agent.yaml          # Configuração do agente
│   ├── skills/             # Habilidades definidas
│   ├── workflows/          # Fluxos de trabalho automatizados
│   ├── memory/             # Registros persistentes
│   ├── config/             # Configurações de estilo
│   └── logs/               # Logs de execução
```

## 🤖 Como Usar

1.  **Adicione Conteúdo:** Coloque arquivos de aula ou leitura na pasta `/assets`.
2.  **Execute o Workflow:** Utilize o workflow de estudo para processar o material.
3.  **Verifique o Resultado:** O resumo estruturado será gerado na pasta `/src`.

## 🛠 Skills Disponíveis

*   **Estudo de Conteúdo:** Análise profunda de textos técnicos.
*   **Geração de Resumos:** Criação de documentos Markdown padronizados.
*   **Planejamento de Projetos:** Definição de escopo e cronograma.

## 📝 Exemplo de Uso

Para testar o agente, verifique o arquivo `src/introducao-ia-summary.md` gerado a partir do material de exemplo em `assets/introducao-ia.md`.
