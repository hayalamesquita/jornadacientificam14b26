# Vetores Mecânicos — Grupo 3

Página interativa oficial do projeto **Grupo 3 — Vetores Mecânicos**, desenvolvida para a Jornada Científica do 4º ano.

**Autores:** João Gabriel • Marcel • João Antônio • Enzo • Estevão • Lorenzo

## O produto

Este repositório contém a página que será acessada pelo público da feira. O visitante pode explorar animais, compreender como microrganismos podem ser transportados, conhecer doenças e agentes relacionados, visualizar formas de transmissão e aprender medidas de prevenção.

A lógica principal é:

**ANIMAL → MICRÓBIO → DOENÇA → TRANSMISSÃO → PREVENÇÃO**

Também existe o caminho inverso, começando por uma doença/agente e destacando os animais relacionados.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- sem framework
- sem banco de dados
- sem dependências obrigatórias
- publicação estática no GitHub Pages

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── assets/img/
├── docs/
├── scripts/validate_project.py
├── .github/workflows/pages.yml
├── .vscode/
├── .nojekyll
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
```

## Testar no VS Code

1. Clone ou baixe o repositório.
2. Abra a pasta no VS Code.
3. Abra `index.html` com a extensão **Live Server**.
4. No terminal, rode:

```bash
python scripts/validate_project.py
```

Se Node.js estiver instalado:

```bash
node --check script.js
```

O roteiro completo está em [`docs/GUIA_TESTES.md`](docs/GUIA_TESTES.md).

## GitHub Pages

O repositório inclui o workflow `.github/workflows/pages.yml`.

Depois de integrar a versão em `main`:

1. acesse **Settings → Pages**;
2. em **Build and deployment**, escolha **GitHub Actions**;
3. abra a aba **Actions** e acompanhe o workflow **Publicar no GitHub Pages**;
4. quando o job ficar verde, a URL pública será exibida pelo GitHub.

A URL esperada para este repositório é:

```text
https://hayalamesquita.github.io/jornadacientificam14b26/
```

## Onde editar

- estrutura/textos fixos: `index.html`
- animais, agentes, doenças e interações: `script.js`
- cores/layout/responsividade: `style.css`
- ilustrações: `assets/img/`

Antes de alterar conteúdo científico, consulte [`docs/GUIA_EDICAO_CONTEUDO.md`](docs/GUIA_EDICAO_CONTEUDO.md).

Toda a documentação está indexada em [`docs/README.md`](docs/README.md).

## Regra científica importante

Encontrar um microrganismo em um animal **não significa automaticamente que o animal transmite clinicamente a doença**. A página diferencia relação bem estabelecida, transporte documentado, carreador potencial e caso especial.

Na leptospirose, o rato é apresentado principalmente como **reservatório e fonte de contaminação ambiental**, e não como vetor mecânico clássico equivalente à mosca.

## Privacidade

O site não tem login, banco de dados, analytics ou armazenamento de respostas do quiz. Antes da publicação pública definitiva, revise [`docs/PRIVACIDADE_E_PUBLICACAO.md`](docs/PRIVACIDADE_E_PUBLICACAO.md), especialmente quanto à forma de autoria dos estudantes.

## Feira

Use [`docs/CHECKLIST_FEIRA.md`](docs/CHECKLIST_FEIRA.md) e mantenha uma cópia local do projeto como contingência.
