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
 * This function gets, at most, the numbers corresponding to the 5 most important risk factors (e.g., 1 represents var1_sono).
 * @returns an array, that could be empty
 **/
function getMostRelevantRiskFactors() {
  const MAX_NUM_RECOMMENDATIONS = 5;
  const NUM_RISK_FACTORS = 8;
  const AT_RISK = "1"; // the answer given by the person suggests that it can be at risk on this parameter 

  var riskFactors = [];
  var i = 0;
  while (riskFactors.length < MAX_NUM_RECOMMENDATIONS && i < NUM_RISK_FACTORS) {
    if (answers[i] === AT_RISK) {
      riskFactors.push(i+1); // adds the index of the factor
    }
    i++;
  }
  return riskFactors;
}

const riskFactors = getMostRelevantRiskFactors();

// detailed recommendations for each factor
const factorsInfo = {
  1: {
    title: "Sono",
    why: "Dormir pouco ou de forma irregular duplica o risco de diabetes tipo 2.",
    todo: [
      "Deite-se e acorde a horas semelhantes.",
      "Evite ecrãs e refeições pesadas antes de dormir.",
      "Mantenha ambiente escuro e silencioso."
    ]
  },
  2: {
    title: "Atividade Física e Sedentarismo",
    why: "A atividade física reduz o risco cardiovascular e metabólico em 30-50%. Longos períodos sentado têm impacto negativo.",
    todo: [
      "Use escadas e mova-se nas pausas.",
      "Levante-se a cada 60–90 minutos.",
      "Caminhe 30 minutos por dia."
    ]
  },
  3: {
    title: "Consumo de Álcool",
    why: "Mesmo consumos baixos estão associados a maior risco metabólico e hepático.",
    todo: [
      "Prefira bebidas sem álcool.",
      "Reserve para ocasiões pontuais.",
      "Alterne sempre com água."
    ]
  },
  4: {
    title: "Tabaco",
    why: "Duplica ou triplica o risco cardiovascular e aumenta mortalidade precoce.",
    todo: [
      "Reduzir já traz benefícios.",
      "Procure apoio médico.",
      "Substitua a pausa por caminhada."
    ]
  },
  5: {
    title: "Consumo de Fruta e Vegetais",
    why: "Reduz cerca de 30% do risco cardiovascular e melhora saúde intestinal.",
    todo: [
      "Inclua legumes no prato.",
      "Coma fruta 2x/dia.",
      "Prepare marmitas equilibradas."
    ]
  },
  6: {
    title: "Bebidas Açucaradas",
    why: "Aumentam risco de diabetes tipo 2 e ganho de peso.",
    todo: [
      "Substitua por água ou chá sem açúcar.",
      "Reduza gradualmente.",
      "Tenha água sempre acessível."
    ]
  },
  7: {
    title: "Alimentos Ultraprocessados",
    why: "Associados a maior ingestão calórica e risco cardiovascular.",
    todo: [
      "Prefira ingredientes simples.",
      "Troque snacks por fruta ou iogurte.",
      "Evite fritos e molhos processados."
    ]
  },
  8: {
    title: "Horário de Trabalho",
    why: "Turnos exigem maior atenção ao sono e alimentação.",
    todo: [
      "Prefira refeições leves.",
      "Planeie lanches antes do turno.",
      "Mantenha rotinas de descanso."
    ]
  }
};

// Build the final HTML
const div = document.getElementById("resultado");

let html = `<div class="card">`;

if (riskFactors.length === 0) {

  html += `
    <h2>Manutenção de Hábitos</h2>
    <p>De acordo com as suas respostas, os seus hábitos atuais estão bem alinhados com as recomendações para a saúde.</p>
    <p>O foco neste momento é manter este estilo de vida saudável ao longo do tempo.</p>
  `;

} else {

  html += `<h2>Recomendações Personalizadas:</h2>`;

  riskFactors.forEach(index => {
    const info = factorsInfo[index];
    if (!info) return;

    html += `
      <div class="bloco">
        <h3>${info.title}</h3>
        <p><strong>Porque é importante:</strong> ${info.why}</p>
        <ul>
          ${info.todo.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  });

}

html += `</div>`;

div.innerHTML = html;
