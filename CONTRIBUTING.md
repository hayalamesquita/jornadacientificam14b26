# Como colaborar com o projeto

Este é um projeto escolar. A prioridade é manter o conteúdo correto, simples de entender e estável para a Jornada Científica.

## Antes de editar

1. Faça uma cópia ou crie uma branch.
2. Leia `docs/GUIA_EDICAO_CONTEUDO.md`.
3. Não altere o nível de evidência científica sem revisar a fonte de base.

## Antes de enviar uma mudança

```bash
python scripts/validate_project.py
```

Se houver Node.js:

```bash
node --check script.js
```

Depois faça os testes manuais relevantes.

## Mensagens de commit sugeridas

```text
Corrige texto da seção de moscas
Atualiza imagem da barata
Ajusta layout em celular
Adiciona filtro de doença
Corrige quiz
```

Evite commits genéricos como `mudanças`, `teste` ou `coisas`.
