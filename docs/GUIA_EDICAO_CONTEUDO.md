# Guia de edição do conteúdo

## Regra número 1

Antes de alterar uma afirmação científica, confira o guia científico que serviu de base ao projeto. Não transforme “microrganismo encontrado no animal” em “doença comprovadamente transmitida pelo animal”.

## 1. Editar um animal

Abra `script.js` e procure o objeto correspondente dentro de `animals`.

Campos principais:

- `name`: nome exibido no card;
- `scientific`: nome científico ou grupo;
- `image`: caminho da imagem;
- `level`: categoria de evidência;
- `levelText`: texto curto do selo;
- `summary`: “Entenda rápido”;
- `flow`: sequência de transmissão;
- `agents`: agentes infecciosos;
- `diseases`: doenças relacionadas;
- `prevention`: medidas de prevenção;
- `evidence`: explicação científica do nível de evidência;
- `more`: aprofundamento;
- `say`: formulação segura para a apresentação;
- `avoid`: formulação incorreta ou exagerada que deve ser evitada.

## 2. Adicionar uma doença ao filtro

Procure `diseaseOptions` em `script.js` e acrescente:

```js
['Nome visível', 'Termo que será procurado']
```

O termo precisa aparecer em `agents` ou `diseases` de pelo menos um animal para gerar correspondência.

## 3. Trocar uma imagem

1. Salve a nova imagem em `assets/img/`.
2. Prefira SVG, PNG, JPG ou WebP leve.
3. Mantenha nomes sem espaço e sem acentos, por exemplo `mosca.svg`.
4. Se o nome mudar, atualize o campo `image` em `script.js`.
5. Rode `python scripts/validate_project.py`.

## 4. Alterar cores ou tamanhos

Use `style.css`.

Antes da feira, evite mudanças visuais grandes sem testar nas quatro larguras recomendadas em `GUIA_TESTES.md`.

## 5. Alterar a estrutura da página

Use `index.html`. IDs como `animalGrid`, `diseaseFilters`, `quizForm` e `fullscreenBtn` são usados pelo JavaScript. Renomeá-los exige alterar também o código.

## 6. Como escrever para o público

Na parte principal da interface:

- frases curtas;
- uma ideia por bloco;
- palavras científicas podem aparecer, mas precisam de contexto;
- evite “sempre”, “causa” e “transmite” quando a evidência não sustenta essa força.

No “Saiba mais”, é possível usar linguagem um pouco mais técnica.

## 7. Caso especial do rato

Não substituir a explicação por “o rato é vetor mecânico da leptospirose”. O projeto usa o rato justamente para mostrar a diferença entre mecanismos epidemiológicos. Na leptospirose ele é apresentado principalmente como reservatório e fonte de contaminação ambiental.

## 8. Antes de salvar uma alteração

- [ ] releia o texto;
- [ ] confirme o nível de evidência;
- [ ] abra a página localmente;
- [ ] clique no item alterado;
- [ ] rode o validador;
- [ ] faça commit com mensagem clara.
