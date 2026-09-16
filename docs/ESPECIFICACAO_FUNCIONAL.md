# Especificação funcional — página pública da Jornada Científica

## 1. Produto

**Nome:** Vetores Mecânicos — Grupo 3  
**Tipo:** página web interativa pública  
**Contexto:** Jornada Científica escolar  
**Público:** crianças, adolescentes, professores, familiares, profissionais da escola e demais visitantes.

## 2. Objetivo do produto

Permitir que qualquer visitante compreenda, em poucos minutos, o conceito de vetor mecânico e explore exemplos de animais, agentes infecciosos, doenças relacionadas, mecanismos de transmissão e formas de prevenção.

A página deve oferecer uma primeira camada simples e uma segunda camada de aprofundamento, sem transformar associação microbiológica em causalidade epidemiológica não comprovada.

## 3. Jornada principal do usuário

1. Usuário acessa a página.
2. Vê a frase-chave: **“No vetor mecânico, o micróbio pega uma carona.”**
3. Entende a diferença básica entre vetor mecânico e vetor biológico.
4. Escolhe um animal.
5. Abre o painel de detalhes.
6. Visualiza caminho da transmissão, agentes/doenças e prevenção.
7. Pode abrir “Saiba mais”.
8. Pode retornar e explorar outro animal.
9. Pode começar também pelo filtro de doença/agente.
10. Pode finalizar com o quiz.

## 4. Requisitos funcionais

### RF01 — Cabeçalho e autoria
A página deve exibir título do projeto, identificação da Jornada Científica e os seis autores.

### RF02 — Conceito central
A página deve explicar vetor mecânico em linguagem acessível e diferenciar esse mecanismo da transmissão biológica.

### RF03 — Galeria de animais
A página deve apresentar sete cards clicáveis:

1. Mosca
2. Barata
3. Formiga
4. Mutuca
5. Mosca-dos-estábulos
6. Besouros associados a fezes
7. Rato

### RF04 — Detalhes do animal
Ao clicar em um card, o usuário deve acessar:

- imagem;
- nome comum;
- nome científico/grupo;
- resumo;
- nível de evidência;
- fluxo de transmissão;
- agentes infecciosos;
- doenças relacionadas;
- prevenção;
- explicação técnica;
- formulação recomendada e formulação a evitar.

### RF05 — Níveis de evidência
A interface deve distinguir visualmente:

- relação mais bem estabelecida;
- transporte documentado/evidência experimental;
- carreador potencial/relação variável;
- caso especial de comparação.

### RF06 — Busca inversa
O usuário deve poder escolher uma doença/agente e visualizar quais animais possuem relação cadastrada com o termo.

### RF07 — Caso especial do rato
A página deve explicar que, na leptospirose, o rato é principalmente reservatório e fonte de contaminação ambiental, e não um vetor mecânico clássico equivalente à mosca.

### RF08 — Prevenção
A página deve apresentar medidas gerais de prevenção em linguagem simples e visual.

### RF09 — Quiz
O quiz deve conter quatro perguntas, exigir respostas completas e informar a pontuação final.

### RF10 — Tela cheia
A interface deve oferecer modo tela cheia quando suportado pelo navegador.

## 5. Requisitos não funcionais

### RNF01 — Responsividade
A página deve permanecer legível e operável em celular, tablet, notebook e tela grande.

### RNF02 — Desempenho
A aplicação deve funcionar como site estático, sem depender de frameworks, APIs ou banco de dados.

### RNF03 — Uso offline local
Os recursos essenciais devem estar armazenados localmente no projeto para permitir demonstração no notebook mesmo sem internet.

### RNF04 — Acessibilidade básica
A página deve possuir:

- estrutura semântica;
- texto alternativo em imagens importantes;
- navegação por teclado;
- foco visível;
- contraste legível;
- link para pular ao conteúdo principal.

### RNF05 — Privacidade
A página não deve coletar, enviar ou armazenar dados pessoais do visitante.

### RNF06 — Compatibilidade
Deve funcionar nas versões atuais dos principais navegadores modernos.

## 6. Critérios de aceite

A versão pode ser considerada pronta para publicação quando:

- [ ] a página abre sem erros de console;
- [ ] os sete cards são exibidos;
- [ ] os sete modais abrem e fecham;
- [ ] todas as imagens carregam;
- [ ] as três abas de conteúdo funcionam;
- [ ] os filtros por doença/agente destacam os cards corretos;
- [ ] “Limpar filtro” restaura a galeria;
- [ ] o quiz calcula corretamente a pontuação;
- [ ] o conteúdo especial do rato está presente;
- [ ] a navegação por menu funciona;
- [ ] a página foi testada em celular e tela grande;
- [ ] a validação automática termina com `OK`;
- [ ] a URL do GitHub Pages abre em janela anônima;
- [ ] existe cópia offline para contingência da feira.

## 7. Fora do escopo atual

Não fazem parte da versão atual:

- login de usuário;
- cadastro de visitantes;
- painel administrativo;
- banco de dados;
- coleta de respostas do quiz;
- analytics;
- comentários públicos;
- upload de arquivos pelo visitante.

Essas funções só devem ser adicionadas se houver uma necessidade pedagógica clara e revisão de privacidade/segurança.
