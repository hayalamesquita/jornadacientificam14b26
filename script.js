const animals = [
  {
    id:'mosca', name:'Mosca doméstica', scientific:'Musca domestica e outras moscas sinantrópicas', image:'assets/img/mosca.svg', level:'strong', levelText:'relação bem estudada',
    summary:'A mosca visita lixo, fezes, restos de alimentos e depois pode pousar na nossa comida. Microrganismos podem ser transportados nas patas, no corpo e também por regurgitação ou fezes da própria mosca.',
    flow:'lixo ou fezes → mosca → alimento/superfície → pessoa',
    agents:['Salmonella spp.','Shigella spp.','Escherichia coli patogênica','Vibrio cholerae','Giardia spp.','Entamoeba spp.','Cryptosporidium spp.','ovos de alguns helmintos'],
    diseases:['Salmonelose','Shigelose','Cólera','Giardíase','Amebíase','Criptosporidiose'],
    prevention:['Manter alimentos cobertos','Fechar e retirar o lixo corretamente','Cuidar do saneamento e da limpeza','Usar telas ou outras medidas de controle quando necessário'],
    evidence:'Moscas sinantrópicas são importantes carreadoras mecânicas de diversos agentes. Para alguns agentes e contextos, a transmissão mecânica é bem sustentada; em outros, a evidência demonstra principalmente o transporte.',
    more:'A mosca doméstica pode adquirir microrganismos em matéria orgânica contaminada e levá-los a alimentos e superfícies. Outra espécie, Musca sorbens, é especialmente importante na epidemiologia do tracoma em alguns locais.',
    say:'“A mosca pode transportar micróbios de locais contaminados para alimentos ou superfícies.”',
    avoid:'“A mosca sempre transmite essas doenças.”'
  },
  {
    id:'barata', name:'Barata', scientific:'Periplaneta americana, Blattella germanica e outras', image:'assets/img/barata.svg', level:'doc', levelText:'transporte documentado',
    summary:'Baratas circulam por esgotos, lixo, ralos e cozinhas. Elas podem carregar microrganismos no corpo e no trato digestivo e levá-los para superfícies e alimentos.',
    flow:'ralo/lixo/esgoto → barata → bancada ou alimento → pessoa',
    agents:['Salmonella spp.','Shigella spp.','Escherichia coli','Pseudomonas aeruginosa','Klebsiella spp.','Giardia spp.','Entamoeba spp.','ovos de helmintos','bactérias resistentes a antimicrobianos'],
    diseases:['Salmonelose','Shigelose','Infecções por E. coli'],
    prevention:['Eliminar restos de alimentos','Manter o lixo fechado','Vedar frestas e ralos quando possível','Controlar infestações de modo seguro'],
    evidence:'O transporte de microrganismos por baratas é bem documentado. A participação delas na transmissão de um caso clínico específico, porém, é mais difícil de provar e varia conforme o ambiente.',
    more:'Estudos em residências, serviços de alimentação e hospitais encontraram microrganismos de importância médica em baratas, inclusive bactérias resistentes a antimicrobianos.',
    say:'“Baratas podem carregar microrganismos e contaminar superfícies ou alimentos.”',
    avoid:'“Toda barata que aparece transmite salmonelose.”'
  },
  {
    id:'formiga', name:'Formiga urbana', scientific:'Formicidae — espécies urbanas', image:'assets/img/formiga.svg', level:'potential', levelText:'carreador potencial',
    summary:'Formigas passam por frestas, pisos, lixo, alimentos e equipamentos. Em hospitais, já foram encontradas carregando bactérias importantes.',
    flow:'superfície contaminada → formiga → outra superfície/alimento',
    agents:['Pseudomonas aeruginosa','Staphylococcus aureus','Klebsiella spp.','Escherichia coli','Enterococcus spp.','Acinetobacter spp.'],
    diseases:['Infecções por E. coli','Infecções hospitalares — associação potencial'],
    prevention:['Guardar alimentos corretamente','Manter superfícies limpas','Vedar entradas e frestas','Controlar infestações especialmente em áreas sensíveis'],
    evidence:'Há evidências de carreamento mecânico de bactérias por formigas urbanas, especialmente em ambientes hospitalares. Isso não significa que uma infecção específica possa ser atribuída automaticamente às formigas.',
    more:'Como são pequenas e circulam por muitos pontos, formigas conseguem conectar áreas que normalmente ficam separadas. Por isso são estudadas como carreadoras mecânicas potenciais.',
    say:'“Formigas urbanas podem atuar como carreadoras mecânicas de bactérias.”',
    avoid:'“Formigas são a causa das infecções hospitalares.”'
  },
  {
    id:'mutuca', name:'Mutuca', scientific:'Chrysops, Tabanus e outros Tabanidae', image:'assets/img/mutuca.svg', level:'strong', levelText:'mecanismo reconhecido',
    summary:'As fêmeas de muitas mutucas se alimentam de sangue. Se uma picada é interrompida e o inseto vai rapidamente para outro hospedeiro, material de sangue pode permanecer nas peças bucais.',
    flow:'hospedeiro infectado → mutuca → picada interrompida → outro hospedeiro',
    agents:['Francisella tularensis','outros agentes humanos ou veterinários transmitidos mecanicamente pelo sangue'],
    diseases:['Tularemia','Doenças veterinárias selecionadas'],
    prevention:['Usar roupas que reduzam picadas','Usar repelentes quando indicados','Reduzir exposição em áreas com grande presença de mutucas','Adotar controle e vigilância veterinária quando necessário'],
    evidence:'A transmissão mecânica por tabanídeos é reconhecida para agentes e situações específicos. O mecanismo está ligado à troca rápida de hospedeiro com sangue residual nas peças bucais.',
    more:'Diferente de uma mosca que contamina alimento, a mutuca pode transferir agentes durante a alimentação com sangue. O agente não precisa se desenvolver obrigatoriamente dentro do inseto.',
    say:'“A mutuca pode transferir alguns agentes mecanicamente quando muda de hospedeiro.”',
    avoid:'“Mutuca é igual ao mosquito da dengue.”'
  },
  {
    id:'mosca-estabulos', name:'Mosca-dos-estábulos', scientific:'Stomoxys calcitrans', image:'assets/img/mosca-estabulos.svg', level:'doc', levelText:'evidência experimental',
    summary:'Ela se parece com uma mosca doméstica, mas pica e se alimenta de sangue. Seu papel é estudado principalmente na saúde animal.',
    flow:'animal infectado → mosca pica → alimentação interrompida → outro animal',
    agents:['Bacillus anthracis — evidência experimental','outros agentes de importância veterinária'],
    diseases:['Antraz — evidência experimental','Doenças veterinárias selecionadas'],
    prevention:['Manejar esterco e matéria orgânica','Usar controle integrado de moscas','Manter vigilância sanitária dos animais'],
    evidence:'Há evidências experimentais de transmissão mecânica de agentes específicos por Stomoxys calcitrans. A maior importância desse vetor é veterinária.',
    more:'Experimentos demonstraram capacidade de transmissão mecânica de determinados agentes. É importante não transformar um resultado experimental em uma regra para qualquer doença ou situação.',
    say:'“A mosca-dos-estábulos pode transmitir mecanicamente alguns agentes, principalmente em contextos veterinários.”',
    avoid:'“Ela transmite qualquer doença pelo sangue.”'
  },
  {
    id:'besouro', name:'Besouros associados a fezes', scientific:'Coleoptera — besouros coprófagos e grupos relacionados', image:'assets/img/besouro.svg', level:'potential', levelText:'transporte estudado',
    summary:'Alguns besouros entram em contato direto com fezes. Por isso podem transportar ovos, cistos ou oocistos de parasitas para outros locais.',
    flow:'fezes contaminadas → besouro → deslocamento → outro local',
    agents:['ovos de helmintos','cistos e oocistos de protozoários','Cryptosporidium spp. em estudos específicos'],
    diseases:['Parasitoses intestinais — relação variável','Criptosporidiose — em estudos específicos'],
    prevention:['Saneamento adequado','Manejo correto de fezes humanas e animais','Higiene de alimentos e ambientes'],
    evidence:'Há estudos sobre transporte de estágios de parasitas por besouros associados a fezes. Não é correto atribuir automaticamente uma doença específica a todo besouro coprófago.',
    more:'Esses besouros também podem exercer funções ecológicas importantes, como remover e enterrar fezes. Por isso, o objetivo não é tratá-los simplesmente como “vilões”.',
    say:'“Alguns besouros associados a fezes podem transportar estágios de parasitas.”',
    avoid:'“Besouros coprófagos sempre transmitem parasitoses.”'
  },
  {
    id:'rato', name:'Rato', scientific:'Rattus spp. e outros roedores', image:'assets/img/rato.svg', level:'special', levelText:'reservatório — caso diferente',
    summary:'O rato aparece para mostrar que nem todo animal participa da transmissão do mesmo jeito. Na leptospirose, ele funciona principalmente como reservatório e fonte de contaminação ambiental.',
    flow:'rato infectado → urina → água/lama/solo → pessoa',
    agents:['Leptospira spp.'],
    diseases:['Leptospirose'],
    prevention:['Controlar roedores','Proteger alimentos e lixo','Evitar contato com água de enchente quando possível','Usar proteção adequada em áreas contaminadas'],
    evidence:'O papel de roedores como reservatórios importantes de Leptospira e fontes de contaminação ambiental é bem estabelecido. Esse é um mecanismo diferente do vetor mecânico clássico.',
    more:'A bactéria pode permanecer nos rins do roedor e ser eliminada na urina. A pessoa se infecta principalmente por contato com água, lama ou solo contaminados, especialmente através da pele lesionada ou mucosas.',
    say:'“Na leptospirose, o rato é principalmente reservatório e contamina o ambiente pela urina.”',
    avoid:'“Leptospirose é uma bactéria.” — a bactéria é Leptospira; leptospirose é a doença.'
  }
];

const diseaseOptions = [
  ['Salmonelose','Salmonelose'],['Shigelose','Shigelose'],['Cólera','Cólera'],['Giardíase','Giardíase'],['Criptosporidiose','Criptosporidiose'],['Tularemia','Tularemia'],['Leptospirose','Leptospirose'],['E. coli','E. coli']
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const grid = $('#animalGrid');
const dialog = $('#animalDialog');
const levelClass = {strong:'evidence-strong',doc:'evidence-doc',potential:'evidence-potential',special:'evidence-special'};
const dotClass = {strong:'dot-strong',doc:'dot-doc',potential:'dot-potential',special:'dot-special'};

function renderAnimals(){
  grid.innerHTML='';
  animals.forEach(a=>{
    const b=document.createElement('button');
    b.type='button'; b.className='animal-card'; b.dataset.id=a.id;
    b.innerHTML=`<img src="${a.image}" alt="Ilustração de ${a.name}"><div class="animal-card-body"><div class="animal-card-top"><div><h3>${a.name}</h3><p>${a.scientific}</p></div><i class="evidence-mini ${dotClass[a.level]}" aria-label="${a.levelText}"></i></div><span class="explore-link">Explorar este animal →</span></div>`;
    b.addEventListener('click',()=>openAnimal(a));
    grid.appendChild(b);
  });
}
function fillList(sel,items){const ul=$(sel);ul.innerHTML='';items.forEach(x=>{const li=document.createElement('li');li.textContent=x;ul.appendChild(li)})}
function openAnimal(a){
  $('#dialogImage').src=a.image; $('#dialogImage').alt=`Ilustração de ${a.name}`;
  $('#dialogScientific').textContent=a.scientific; $('#dialogTitle').textContent=a.name; $('#dialogSummary').textContent=a.summary;
  $('#dialogFlow').textContent=a.flow; $('#dialogEvidence').textContent=a.evidence; $('#dialogMore').textContent=a.more; $('#dialogSay').textContent=a.say; $('#dialogAvoid').textContent=a.avoid;
  fillList('#dialogAgents',a.agents); fillList('#dialogDiseases',a.diseases); fillList('#dialogPrevention',a.prevention);
  const pill=$('#dialogEvidencePill'); pill.className=`evidence-pill ${levelClass[a.level]}`; pill.textContent=a.levelText;
  setActiveTab('relations'); dialog.showModal();
}
function setActiveTab(name){
  $$('.tab').forEach(t=>{const active=t.dataset.tab===name;t.classList.toggle('active',active);t.setAttribute('aria-selected',active?'true':'false')});
  $$('.tab-panel').forEach(p=>{const active=p.id===`tab-${name}`;p.classList.toggle('active',active);p.hidden=!active});
}
$$('.tab').forEach(t=>t.addEventListener('click',()=>setActiveTab(t.dataset.tab)));
$('#dialogClose').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

function renderFilters(){
  const holder=$('#diseaseFilters');
  diseaseOptions.forEach(([label,term])=>{
    const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.term=term;
    b.addEventListener('click',()=>filterBy(term,b)); holder.appendChild(b);
  });
}
function filterBy(term,button){
  $$('#diseaseFilters button').forEach(b=>b.classList.toggle('active',b===button));
  let matches=0;
  $$('.animal-card').forEach(card=>{
    const a=animals.find(x=>x.id===card.dataset.id);
    const bag=[...a.diseases,...a.agents].join(' ').toLowerCase();
    const match=bag.includes(term.toLowerCase());
    card.classList.toggle('is-match',match);card.classList.toggle('is-dimmed',!match);if(match)matches++;
  });
  $('#clearFilter').hidden=false;
  $('#filterMessage').textContent=`${matches} ${matches===1?'card relacionado':'cards relacionados'} a “${term}”. Clique no animal para entender o tipo de relação.`;
  $('#animais').scrollIntoView({behavior:'smooth',block:'start'});
}
$('#clearFilter').addEventListener('click',()=>{
  $$('#diseaseFilters button').forEach(b=>b.classList.remove('active'));
  $$('.animal-card').forEach(c=>c.classList.remove('is-match','is-dimmed'));
  $('#clearFilter').hidden=true; $('#filterMessage').textContent='';
});

const answers={q1:'a',q2:'b',q3:'a',q4:'b'};
$('#quizForm').addEventListener('submit',e=>{
  e.preventDefault();let score=0,answered=0;
  Object.entries(answers).forEach(([q,a])=>{const picked=$(`input[name="${q}"]:checked`);if(picked){answered++;if(picked.value===a)score++}});
  const out=$('#quizResult');out.className='quiz-result';
  if(answered<4){out.textContent=`Você respondeu ${answered} de 4. Complete as outras!`;out.classList.add('try');$('#scoreNumber').textContent='?';return}
  $('#scoreNumber').textContent=score;
  if(score===4){out.textContent='🌟 Excelente! Você entendeu a lógica do projeto.';out.classList.add('good')}
  else if(score>=2){out.textContent=`Você acertou ${score} de 4. Está quase — explore os cards e tente de novo.`;out.classList.add('try')}
  else{out.textContent=`Você acertou ${score} de 4. Volte ao começo e siga a viagem do micróbio mais uma vez.`;out.classList.add('try')}
});
$('#quizForm').addEventListener('reset',()=>{setTimeout(()=>{$('#scoreNumber').textContent='?';$('#quizResult').textContent='';$('#quizResult').className='quiz-result'},0)});

$('#fullscreenBtn').addEventListener('click',async()=>{
  try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen()}catch(e){}
});
document.addEventListener('fullscreenchange',()=>{$('#fullscreenBtn').textContent=document.fullscreenElement?'✕ Sair da tela cheia':'⛶ Tela cheia'});

renderAnimals();renderFilters();
