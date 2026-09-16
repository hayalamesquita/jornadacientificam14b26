# Operação e manutenção

## 1. Versão usada na feira

Antes da Jornada, escolha um commit específico como versão oficial e, de preferência, crie uma tag:

```bash
git tag -a feira-v1.0 -m "Versão oficial da Jornada Científica"
git push origin feira-v1.0
```

Isso permite recuperar exatamente a versão apresentada.

## 2. Rotina para qualquer alteração

1. Editar localmente.
2. Testar com Live Server.
3. Rodar `python scripts/validate_project.py`.
4. Se disponível, rodar `node --check script.js`.
5. Fazer os testes manuais afetados.
6. Criar commit.
7. Fazer `git push`.
8. Conferir GitHub Actions.
9. Conferir a URL pública em janela anônima.

## 3. Backup

Manter pelo menos:

- repositório no GitHub;
- pasta completa no notebook da feira;
- ZIP da versão oficial em outro local.

## 4. Alterações de última hora

Na véspera e no dia da feira, prefira apenas correções essenciais. Evite trocar estrutura visual, nomes de arquivos ou lógica de navegação sem tempo para refazer o roteiro de testes completo.

## 5. QR Code

O QR Code deve apontar para a URL pública final do GitHub Pages. Sempre testar depois de qualquer mudança de nome do repositório ou configuração do Pages.

## 6. Incidentes comuns

### Site público fora do ar
Usar a cópia local no notebook e continuar a apresentação.

### Wi‑Fi indisponível
A demonstração local continua funcionando. Visitantes não conseguirão usar o QR Code até a internet voltar.

### Um conteúdo científico precisa ser corrigido
Corrigir em `script.js`, validar, publicar e confirmar a nova versão. Registrar a alteração em commit claro.

### Uma imagem falha no GitHub Pages
Conferir nome, extensão e letras maiúsculas/minúsculas. O ambiente do GitHub é sensível a essas diferenças.

## 7. Responsável pela versão

É recomendável que apenas uma ou duas pessoas façam o `push` da versão oficial na semana da feira. As crianças podem trabalhar e testar localmente, mas a publicação final deve ser controlada para evitar sobrescrever uma versão estável.
