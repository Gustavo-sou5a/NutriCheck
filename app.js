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

// Conteúdo detalhado dos fatores
const fatoresInfo = {
  1: {
    titulo: "Sono",
    porque: "Dormir pouco ou de forma irregular duplica o risco de diabetes tipo 2.",
    fazer: [
      "Deite-se e acorde a horas semelhantes.",
      "Evite ecrãs e refeições pesadas antes de dormir.",
      "Mantenha ambiente escuro e silencioso."
    ]
  },
  2: {
    titulo: "Atividade Física e Sedentarismo",
    porque: "A atividade física reduz o risco cardiovascular e metabólico em 30-50%. Longos períodos sentado têm impacto negativo.",
    fazer: [
      "Use escadas e mova-se nas pausas.",
      "Levante-se a cada 60–90 minutos.",
      "Caminhe 30 minutos por dia."
    ]
  },
  3: {
    titulo: "Consumo de Álcool",
    porque: "Mesmo consumos baixos estão associados a maior risco metabólico e hepático.",
    fazer: [
      "Prefira bebidas sem álcool.",
      "Reserve para ocasiões pontuais.",
      "Alterne sempre com água."
    ]
  },
  4: {
    titulo: "Tabaco",
    porque: "Duplica ou triplica o risco cardiovascular e aumenta mortalidade precoce.",
    fazer: [
      "Reduzir já traz benefícios.",
      "Procure apoio médico.",
      "Substitua a pausa por caminhada."
    ]
  },
  5: {
    titulo: "Consumo de Fruta e Vegetais",
    porque: "Reduz cerca de 30% do risco cardiovascular e melhora saúde intestinal.",
    fazer: [
      "Inclua legumes no prato.",
      "Coma fruta 2x/dia.",
      "Prepare marmitas equilibradas."
    ]
  },
  6: {
    titulo: "Bebidas Açucaradas",
    porque: "Aumentam risco de diabetes tipo 2 e ganho de peso.",
    fazer: [
      "Substitua por água ou chá sem açúcar.",
      "Reduza gradualmente.",
      "Tenha água sempre acessível."
    ]
  },
  7: {
    titulo: "Alimentos Ultraprocessados",
    porque: "Associados a maior ingestão calórica e risco cardiovascular.",
    fazer: [
      "Prefira ingredientes simples.",
      "Troque snacks por fruta ou iogurte.",
      "Evite fritos e molhos processados."
    ]
  },
  8: {
    titulo: "Horário de Trabalho",
    porque: "Turnos exigem maior atenção ao sono e alimentação.",
    fazer: [
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
    const info = fatoresInfo[index];
    if (!info) return;

    html += `
      <div class="bloco">
        <h3>${info.titulo}</h3>
        <p><strong>Porque é importante:</strong> ${info.porque}</p>
        <ul>
          ${info.fazer.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  });

}

html += `</div>`;

div.innerHTML = html;
