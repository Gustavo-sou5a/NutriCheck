// Função para ler parâmetros da URL
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Obter respostas do Tally via URL
const var1_sono = getParam("var1_sono");
const var2_ativ = getParam("var2_ativ");
const var3_alcool = getParam("var3_alcool");
const var4_tabaco = getParam("var4_tabaco"); 
const var5_fruta = getParam("var5_fruta");   
const var6_refri = getParam("var6_refri");
const var7_upf = getParam("var7_upf");
const var8_horario = getParam("var8_horario");

const answers = [var1_sono, var2_ativ, var3_alcool, var4_tabaco, var5_fruta, var6_refri, var7_upf, var8_horario];

/**
 * Função para obter os fatores de risco mais importantes (máx. 5)
 */
function getMostRelevantRiskFactors() {
  const MAX_NUM_RECOMMENDATIONS = 5;
  const NUM_RISK_FACTORS = 8;
  const AT_RISK = "1";

  var riskFactors = [];
  var i = 0;

  while (riskFactors.length < MAX_NUM_RECOMMENDATIONS && i < NUM_RISK_FACTORS) {
    if (answers[i] === AT_RISK) {
      riskFactors.push(i+1);
    }
    i++;
  }
  return riskFactors;
}

const riskFactors = getMostRelevantRiskFactors();

// INFO DOS FATORES COM ICONES
const factorsInfo = {
  1: { title: "Sono", icon: "🛌", why: "Dormir pouco ou de forma irregular duplica o risco de desenvolver diabetes tipo 2, estando também associado a alterações metabólicas e pior controlo da glicemia.", todo: ["Tente deitar-se e acordar a horas semelhantes, mesmo nos dias livres.","Evite refeições pesadas, álcool e ecrãs luminosos na última hora antes de dormir.","Se trabalha por turnos, mantenha rotinas consistentes e um ambiente de sono adequado (escuro e silencioso)."] },
  2: { title: "Atividade Física e Sedentarismo", icon: "🏃", why: "A atividade física regular reduz o risco de doenças cardiovasculares, diabetes tipo 2 e mortalidade precoce em 30-50%, quando comparada com estilos de vida sedentários. Longos períodos sentado têm impacto negativo mesmo em pessoas fisicamente ativas.", todo: ["Sempre que possível, use as escadas e aproveite chamadas ou pausas para se mover (caminhar, alongar).","Interrompa períodos longos sentado(a): levante-se a cada 60–90 minutos, nem que seja por alguns minutos.","Fora do trabalho, caminhe cerca de 30 minutos por dia, 5 dias por semana."] },
  3: { title: "Consumo de Álcool", icon: "🍷", why: "Não existe um nível de consumo de álcool considerado totalmente seguro, estando mesmo consumos baixos associados a maior risco de doença hepática, metabólica e alguns cancros.", todo: ["Prefira bebidas sem álcool em contextos sociais (água com gás, água aromatizada, bebidas zero açúcar).","Se consumir álcool, reserve-o para ocasiões pontuais e preferencialmente durante as refeições.","Alterne sempre com água e evite consumo frequente durante a semana."] },
  4: { title: "Tabaco", icon: "🚭", why: "Fumar duplica ou triplica o risco de doença cardiovascular e leva à morte prematura de cerca de 1 em cada 2 fumadores a longo prazo.", todo: ["Reduzir já traz benefícios imediatos para a saúde.","Procure apoio médico ou programas de cessação tabágica.","Substitua a pausa para fumar por uma pequena caminhada."] },
  5: { title: "Consumo de Fruta e Vegetais", icon: "🥗", why: "Uma ingestão adequada de fruta e vegetais está associada a uma redução de cerca de 30% no risco de doença cardiovascular, melhor saúde intestinal e maior longevidade.", todo: ["Inclua legumes no prato principal (sopa, salada ou legumes cozinhados).","Consuma fruta em pelo menos dois momentos do dia, como lanche ou sobremesa.","Cozinhe legumes ou sopa para a semana e prepare marmitas que incluam fruta e legumes em todas as refeições principais."] },
  6: { title: "Bebidas Açucaradas", icon: "🥤", why: "O consumo diário de bebidas açucaradas aumenta o risco de diabetes tipo 2 em cerca de 25% por cada bebida ingerida por dia, contribuindo também para aumento de peso e alterações metabólicas.", todo: ["Substitua refrigerantes e sumos por água, água com gás ou chá sem açúcar.","Se o consumo for habitual, reduza de forma gradual.","Tenha sempre uma garrafa de água acessível durante o dia de trabalho."] },
  7: { title: "Alimentos Ultraprocessados", icon: "🍪", why: "O consumo frequente de alimentos ultraprocessados está associado a maior ingestão calórica espontânea, ganho de peso significativo em poucos dias e a um aumento relevante do risco de doença cardiovascular. Estes efeitos estão ligados à composição destes alimentos, ricos em açúcares, gorduras e aditivos e pobres em fibra e micronutrientes.", todo: ["Use as regras práticas: se não conseguir identificar os ingredientes principais, evite e quanto menos ingredientes e menor o  rótulo, melhor.","Em lanches no trabalho, troque bolachas, pastelaria ou snacks de pacote por fruta, iogurte natural ou um punhado pequeno de frutos secos.","Em refeições fora, escolha pratos com alimentos reconhecíveis (ex.: carne ou peixe grelhado, legumes, arroz ou batata) e evite molhos, fritos e combinações muito processadas."] },
  8: { title: "Horário de Trabalho", icon: "🕒", why: "Horários por turnos exigem uma maior atenção à gestão do sono, da alimentação e da energia ao longo do dia. A evidência mostra que, nestes contextos, estratégias adequadas de organização de rotinas ajudam a preservar o bem-estar metabólico e cardiovascular ao longo do tempo.", todo: ["Durante turnos noturnos ou horários irregulares, privilegie refeições mais leves e simples, evitando grandes quantidades de doces, fritos ou fast food.","Planeie refeições e lanches antes do turno para evitar escolhas impulsivas.","Sempre que possível, mantenha rotinas consistentes de descanso e um ambiente adequado ao sono (escuro e silencioso), ajustado ao seu horário."] }
};

// CONTAINER DOS CARDS
const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML = ''; // limpar mensagem "A carregar..."

if(riskFactors.length === 0){
  const card = document.createElement('div');
  card.classList.add('card-item');
  card.innerHTML = `<div class="card-title">Manutenção de Hábitos</div>
    <p>De acordo com as suas respostas, <b>os seus hábitos atuais estão bem alinhados com as recomendações para a saúde.</b></p>
    <p>O foco neste momento é <b>manter este estilo de vida saudável</b> ao longo do tempo, mesmo perante mudanças de rotina ou fases mais exigentes.</p>
    <p>Este <b>Ponto de Partida</b> serve para <b>reforçar o que já faz bem</b> e apoiar escolhas consistentes no dia a dia. <b>Consultas de nutrição</b>, <b>ações educativas</b> e <b>workshops práticos</b> podem ser úteis para aprofundar conhecimento, esclarecer dúvidas e apoiar a manutenção destes hábitos.</p>
    <p>Se considera importante continuar a <b>investir na sua saúde</b>, partilhe este interesse com a sua empresa.</p>`;
  cardsContainer.appendChild(card);
} else {
  riskFactors.forEach(index => {
    const info = factorsInfo[index];
    if(!info) return;

    const card = document.createElement('div');
    card.classList.add('card-item');
    card.dataset.index = index;

    card.innerHTML = `<div class="card-icon">${info.icon}</div>
                      <div class="card-title">${info.title}</div>`;

    card.addEventListener('click', ()=>{
      let accordionHTML = '';
      info.todo.forEach((item,i)=>{
        accordionHTML += `<div class="accordion-item">
                            <div class="accordion-header">Sugestão ${i+1}</div>
                            <div class="accordion-content"><p>${item}</p></div>
                          </div>`;
      });

      const modal = document.getElementById("modal");
      const modalBody = document.getElementById("modalBody");
      modalBody.innerHTML = `<h2>${info.title}</h2>
                             <h3>Porque é importante:</h3>
                             <p>${info.why}</p>
                             <h3>O que pode fazer:</h3>
                             ${accordionHTML}`;

      modal.classList.add('show');
      document.body.classList.add('modal-open');

      modalBody.querySelectorAll(".accordion-header").forEach(header=>{
        header.addEventListener("click",()=>{
          const item = header.parentElement;
          item.classList.toggle("active");
        });
      });
    });

    cardsContainer.appendChild(card);
  });
}

// ===== MODAL =====
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

function closeModalFunc(){
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

closeModal.addEventListener("click", closeModalFunc);

window.addEventListener("click", e=>{
  if(e.target === modal) closeModalFunc();
});

window.addEventListener("keydown", e=>{
  if(e.key === "Escape" && modal.classList.contains("show")) closeModalFunc();
});
