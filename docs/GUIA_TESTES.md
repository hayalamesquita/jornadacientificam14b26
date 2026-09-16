# Guia de testes

Execute este roteiro antes de cada publicação importante e novamente no computador da feira.

## 1. Teste técnico automático

No terminal, dentro da pasta do projeto:

```bash
python scripts/validate_project.py
```

Resultado esperado:

```text
OK: estrutura, referências locais e arquivos principais validados.
```

Se Node.js estiver instalado:

```bash
node --check script.js
```

O comando não deve mostrar erro de sintaxe.

## 2. Teste de abertura

- [ ] Abrir a página por Live Server.
- [ ] Confirmar que não há tela em branco.
- [ ] Confirmar que título, autores e frase principal aparecem.
- [ ] Abrir o console do navegador (`F12 > Console`) e confirmar que não há erros vermelhos.

## 3. Teste dos sete animais

Clicar em cada card:

- [ ] Mosca
- [ ] Barata
- [ ] Formiga
- [ ] Mutuca
- [ ] Mosca-dos-estábulos
- [ ] Besouros associados a fezes
- [ ] Rato

Para cada um, verificar:

- [ ] imagem correta;
- [ ] nome e nome científico;
- [ ] resumo;
- [ ] caminho com setas;
- [ ] agentes e doenças;
- [ ] prevenção;
- [ ] nível de evidência;
- [ ] aba “Saiba mais”;
- [ ] janela fecha normalmente.

## 4. Teste do filtro por doença/agente

- [ ] Clicar em cada filtro.
- [ ] Confirmar que cards relacionados ficam destacados.
- [ ] Confirmar que os demais ficam atenuados.
- [ ] Confirmar que a mensagem informa a quantidade de cards relacionados.
- [ ] Usar “Limpar filtro” e verificar retorno ao estado normal.

## 5. Teste do rato

- [ ] Confirmar que a seção informa que o rato é um caso diferente.
- [ ] Confirmar a sequência `rato → urina → ambiente → pessoa`.
- [ ] Confirmar que `Leptospira` aparece como bactéria e leptospirose como doença.

## 6. Teste do quiz

- [ ] Enviar sem responder tudo: deve pedir para completar.
- [ ] Responder tudo corretamente: deve mostrar 4/4.
- [ ] Responder com erros: deve mostrar a pontuação adequada.
- [ ] Usar “Limpar/Recomeçar”, se disponível, e confirmar reset.

## 7. Teste de navegação

- [ ] Links do menu rolam até as seções corretas.
- [ ] “Escolher um animal” leva à galeria.
- [ ] “Entender em 1 minuto” leva ao conceito.
- [ ] Botão “Tela cheia” entra e sai do modo tela cheia.

## 8. Teste responsivo

No DevTools do navegador, testar pelo menos:

- [ ] 360 × 800 (celular)
- [ ] 768 × 1024 (tablet)
- [ ] 1366 × 768 (notebook)
- [ ] 1920 × 1080 (tela grande)

Verificar que não há:

- [ ] texto cortado;
- [ ] botões sobrepostos;
- [ ] rolagem horizontal involuntária;
- [ ] imagens deformadas;
- [ ] modal maior que a tela.

## 9. Teste de acessibilidade básica

- [ ] Navegar usando apenas `Tab`.
- [ ] Verificar foco visível em links e botões.
- [ ] Abrir um card usando teclado.
- [ ] Confirmar que imagens importantes têm `alt`.
- [ ] Confirmar contraste e legibilidade em tela cheia.

## 10. Teste publicado

Depois de publicar no GitHub Pages:

- [ ] Abrir a URL em janela anônima.
- [ ] Abrir em outro celular ou computador.
- [ ] Confirmar que todas as imagens carregam.
- [ ] Confirmar que os cards e o quiz funcionam.
- [ ] Testar a URL usando a rede que estará disponível na escola, se possível.

## Critério de aprovação

A versão está pronta para a feira quando **não há erros no console**, os sete animais abrem corretamente, o quiz funciona, a navegação é legível em tela grande e celular e a URL pública foi testada fora da conta do GitHub.
