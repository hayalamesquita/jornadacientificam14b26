# Arquitetura da página

## 1. Objetivo

A aplicação é um site estático educacional para uso público na Jornada Científica. Não coleta dados pessoais, não exige login e não depende de servidor de aplicação.

## 2. Fluxo de navegação

A experiência principal foi organizada em cinco etapas:

1. **Conceito:** apresenta vetor mecânico em linguagem curta.
2. **Exploração por animal:** o visitante escolhe um dos sete animais.
3. **Detalhe em modal:** mostra resumo, caminho da transmissão, agentes/doenças, prevenção e aprofundamento.
4. **Caminho inverso:** o visitante escolhe uma doença/agente e vê quais cards têm relação com ela.
5. **Quiz:** reforça os conceitos principais.

Há ainda uma seção específica para o **rato e a leptospirose**, justamente para ensinar que diferentes animais podem participar da epidemiologia por mecanismos diferentes.

## 3. Componentes técnicos

### `index.html`
Responsável pela estrutura semântica da página: cabeçalho, navegação, seções, modal, formulário do quiz e rodapé.

### `style.css`
Responsável pelo sistema visual: paleta, tipografia, grids, cards, modal, responsividade e estados de interação.

### `script.js`
Possui duas funções principais:

- armazenar os dados dos sete animais;
- controlar as interações da página.

As interações incluem:

- gerar dinamicamente os cards;
- abrir o modal de cada animal;
- alternar abas;
- filtrar por doença/agente;
- corrigir o quiz;
- alternar tela cheia.

### `assets/img/`
Contém as imagens locais dos animais. Não há dependência de imagens remotas para o funcionamento principal.

## 4. Modelo de dados de um animal

Cada animal em `script.js` segue aproximadamente este formato:

```js
{
  id: 'mosca',
  name: 'Mosca',
  scientific: 'Musca domestica ...',
  image: 'assets/img/mosca.svg',
  level: 'strong',
  levelText: 'relação mais bem estabelecida',
  summary: '...',
  flow: '...',
  agents: ['...'],
  diseases: ['...'],
  prevention: ['...'],
  evidence: '...',
  more: '...',
  say: '...',
  avoid: '...'
}
```

## 5. Níveis de evidência usados na interface

- `strong`: relação mais bem estabelecida
- `doc`: transporte documentado / evidência experimental
- `potential`: carreador potencial / relação variável
- `special`: caso de comparação epidemiológica

Essas categorias são parte do conteúdo científico da página. Não devem ser alteradas apenas por estética.

## 6. Compatibilidade

Público-alvo técnico:

- Chrome atual
- Edge atual
- Firefox atual
- Safari atual
- tablets e celulares recentes

A página usa `<dialog>` e Fullscreen API. Em navegadores antigos, o modo tela cheia pode não funcionar, mas o conteúdo principal continua acessível.

## 7. Privacidade e rede

A versão de produção não precisa enviar informações para nenhum servidor. O quiz é corrigido apenas no navegador. Não há armazenamento de respostas.

## 8. Estratégia de publicação

O site é publicado como conteúdo estático no GitHub Pages. A automação em `.github/workflows/pages.yml` valida o projeto e envia a raiz do repositório para o Pages.
