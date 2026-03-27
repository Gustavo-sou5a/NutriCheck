const ENGLISH_LINK = "https://tally.so/r/7Ro4B9";
const PORTUGUESE_LINK = "https://tally.so/r/dWPqGq";
const ENGLISH = "eng";
const PORTUGUESE = "pt";

// Função para ler parâmetros da URL
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const lang = getParam("lang") || PORTUGUESE;
const isEN = lang === ENGLISH;

const answers = [
  getParam("var1_sono"),
  getParam("var2_ativ"),
  getParam("var3_alcool"),
  getParam("var4_tabaco"),
  getParam("var5_fruta"),
  getParam("var6_refri"),
  getParam("var7_upf"),
  getParam("var8_horario"),
];

function getMostRelevantRiskFactors() {
  const MAX_NUM_RECOMMENDATIONS = 5;
  const NUM_RISK_FACTORS = 8;
  const AT_RISK = "1";
  const riskFactors = [];
  for (let i = 0; i < NUM_RISK_FACTORS && riskFactors.length < MAX_NUM_RECOMMENDATIONS; i++) {
    if (answers[i] === AT_RISK) riskFactors.push(i + 1);
  }
  return riskFactors;
}

const riskFactors = getMostRelevantRiskFactors();

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────

const T = {
  pt: {
    pageTitle: "Recomendações NutriCheck+",
    heading: "As Suas Recomendações NutriCheck+",
    loading: "A carregar as suas recomendações…",

    // No-risk card
    noRiskTitle: "Manutenção de Hábitos",
    noRiskP1: "De acordo com as suas respostas, <b>os seus hábitos atuais estão bem alinhados com as recomendações para a saúde.</b>",
    noRiskP2: "O foco neste momento é <b>manter este estilo de vida saudável</b> ao longo do tempo, mesmo perante mudanças de rotina ou fases mais exigentes.",
    noRiskP3: "Este <b>Ponto de Partida</b> serve para <b>reforçar o que já faz bem</b> e apoiar escolhas consistentes no dia a dia. <b>Consultas de nutrição</b>, <b>ações educativas</b> e <b>workshops práticos</b> podem ser úteis para aprofundar conhecimento, esclarecer dúvidas e apoiar a manutenção destes hábitos.",
    noRiskP4: "Se considera importante continuar a <b>investir na sua saúde</b>, partilhe este interesse com a sua empresa!",
    noRiskP5: `<b>Partilhe este questionário com alguém importante para si e que queira cuidar, através do link: ${PORTUGUESE_LINK}</b>`,

    // Recommendations card
    recTitle: "Recomendações Práticas",
    recSubtitle: "As recomendações apresentadas abaixo foram selecionadas porque representam áreas com maior potencial de melhoria neste momento.",
    recHint: "(clique nos ícones abaixo para saber mais sobre cada uma)",

    // Next step card
    nextTitle: "O Próximo Passo",
    nextP1: "<b>O desafio que temos para si</b> não é mudar tudo de uma vez — <b>começar por uma ou duas destas prioridades</b> já é um excelente primeiro passo.",
    nextP2: "Este <b>Ponto de Partida</b> é apenas o início: o acompanhamento adequado ajuda a transformar recomendações em hábitos sustentáveis ao longo do tempo. <b>Consultas de nutrição</b>, <b>ações educativas</b> e <b>workshops práticos</b> são formas eficazes de aprofundar estas áreas e apoiar mudanças ajustadas ao dia a dia.",
    nextP3: "Se considera importante avançar neste caminho, <b>partilhe este interesse com a sua empresa!</b>",
    nextP4: `<b>Partilhe este questionário com alguém importante para si e que queira cuidar, através do link: ${PORTUGUESE_LINK}</b>`,

    // Modal
    modalDayLabel: "O que pode fazer no dia a dia:",
    modalSuggestionLabel: "Sugestão",
    modalWhyLabel: "Porque é importante",

    // PDF
    downloadBtn: "Baixar Recomendações (PDF)",
    pdfSubtitle: "As suas recomendações personalizadas",
    pdfIntro: "As recomendações abaixo foram selecionadas com base nas suas respostas e representam as áreas com maior potencial de melhoria. Não precisa de mudar tudo de uma vez — comece por uma ou duas prioridades.",
    pdfDayLabel: "O que pode fazer no dia a dia:",
    pdfWhyLabel: "Porque é importante:",
    pdfNextTitle: "O Próximo Passo",
    pdfNext1: "O desafio que temos para si não é mudar tudo de uma vez — começar por uma ou duas destas prioridades já é um excelente primeiro passo.",
    pdfNext2: "Este Ponto de Partida é apenas o início: o acompanhamento adequado ajuda a transformar recomendações em hábitos sustentáveis ao longo do tempo. Consultas de nutrição, ações educativas e workshops práticos são formas eficazes de aprofundar estas áreas e apoiar mudanças ajustadas ao dia a dia.",
    pdfNext3: "Se considera importante avançar neste caminho, partilhe este interesse com a sua empresa!",
    pdfNext4: `Partilhe este questionário com alguém importante para si e que queira cuidar, através do link: ${PORTUGUESE_LINK}`,
    pdfFooter: "NutriCheck+  •  Recomendações Personalizadas",
    pdfFilename: "recomendacoes_nutricheck.pdf",
    pdfDateLocale: "pt-PT",
  },

  eng: {
    pageTitle: "NutriCheck+ Recommendations",
    heading: "Your NutriCheck+ Recommendations",
    loading: "Loading your recommendations…",

    // No-risk card
    noRiskTitle: "Habit Maintenance",
    noRiskP1: "Based on your answers, <b>your current habits are well aligned with health recommendations.</b>",
    noRiskP2: "The focus right now is to <b>maintain this healthy lifestyle</b> over time, even when routines change or things get more demanding.",
    noRiskP3: "This <b>Starting Point</b> is here to <b>reinforce what you are already doing well</b> and support consistent daily choices. <b>Nutrition consultations</b>, <b>educational sessions</b>, and <b>practical workshops</b> can be useful to deepen knowledge, clarify doubts, and help sustain these habits.",
    noRiskP4: "If you feel it is important to keep <b>investing in your health</b>, share this interest with your company!",
    noRiskP5: `<b>Share this questionnaire with someone you care about, using the link: ${ENGLISH_LINK}</b>`,

    // Recommendations card
    recTitle: "Practical Recommendations",
    recSubtitle: "The recommendations below were selected because they represent the areas with the greatest potential for improvement right now.",
    recHint: "(click the icons below to learn more about each one)",

    // Next step card
    nextTitle: "The Next Step",
    nextP1: "<b>The challenge we have for you</b> is not to change everything at once — <b>starting with one or two of these priorities</b> is already an excellent first step.",
    nextP2: "This <b>Starting Point</b> is just the beginning: proper support helps turn recommendations into sustainable habits over time. <b>Nutrition consultations</b>, <b>educational sessions</b>, and <b>practical workshops</b> are effective ways to go deeper in these areas and support changes that fit your daily life.",
    nextP3: "If you feel it is important to move forward on this path, <b>share this interest with your company!</b>",
    nextP4: `<b>Share this questionnaire with someone you care about, using the link: ${ENGLISH_LINK}</b>`,

    // Modal
    modalDayLabel: "What you can do every day:",
    modalSuggestionLabel: "Suggestion",
    modalWhyLabel: "Why it matters",

    // PDF
    downloadBtn: "Download Recommendations (PDF)",
    pdfSubtitle: "Your personalised recommendations",
    pdfIntro: "The recommendations below were selected based on your answers and represent the areas with the greatest potential for improvement. You don't need to change everything at once — start with one or two priorities.",
    pdfDayLabel: "What you can do every day:",
    pdfWhyLabel: "Why it matters:",
    pdfNextTitle: "The Next Step",
    pdfNext1: "The challenge we have for you is not to change everything at once — starting with one or two of these priorities is already an excellent first step.",
    pdfNext2: "This Starting Point is just the beginning: proper support helps turn recommendations into sustainable habits over time. Nutrition consultations, educational sessions, and practical workshops are effective ways to go deeper in these areas and support changes that fit your daily life.",
    pdfNext3: "If you feel it is important to move forward on this path, share this interest with your company!",
    pdfNext4: `Share this questionnaire with someone you care about, using the link: ${ENGLISH_LINK}`,
    pdfFooter: "NutriCheck+  •  Personalised Recommendations",
    pdfFilename: "recommendations_nutricheck.pdf",
    pdfDateLocale: "en-GB",
  },
};

const t = T[lang] || T[PORTUGUESE];

// Update page-level text
document.title = t.pageTitle;
document.querySelector("h1").textContent = t.heading;
document.querySelector("#resultado p").textContent = t.loading;

// ── FACTOR DATA ───────────────────────────────────────────────────────────────

const factorsInfo = {
  pt: {
    1: {
      title: "Sono",
      icon: "🛌",
      why: "Dormir pouco ou de forma irregular duplica o risco de desenvolver diabetes tipo 2, estando também associado a alterações metabólicas e pior controlo da glicemia.",
      todo: [
        "Tente deitar-se e acordar a horas semelhantes, mesmo nos dias livres.",
        "Evite refeições pesadas, álcool e ecrãs luminosos na última hora antes de dormir.",
        "Se trabalha por turnos, mantenha rotinas consistentes e um ambiente de sono adequado (escuro e silencioso).",
      ],
    },
    2: {
      title: "Atividade Física e Sedentarismo",
      icon: "🏃",
      why: "A atividade física regular reduz o risco de doenças cardiovasculares, diabetes tipo 2 e mortalidade precoce em 30-50%, quando comparada com estilos de vida sedentários. Longos períodos sentado têm impacto negativo mesmo em pessoas fisicamente ativas.",
      todo: [
        "Sempre que possível, use as escadas e aproveite chamadas ou pausas para se mover (caminhar, alongar).",
        "Interrompa períodos longos sentado(a): levante-se a cada 60–90 minutos, nem que seja por alguns minutos.",
        "Fora do trabalho, caminhe cerca de 30 minutos por dia, 5 dias por semana.",
      ],
    },
    3: {
      title: "Consumo de Álcool",
      icon: "🍷",
      why: "Não existe um nível de consumo de álcool considerado totalmente seguro, estando mesmo consumos baixos associados a maior risco de doença hepática, metabólica e alguns cancros.",
      todo: [
        "Prefira bebidas sem álcool em contextos sociais (água com gás, água aromatizada, bebidas zero açúcar).",
        "Se consumir álcool, reserve-o para ocasiões pontuais e preferencialmente durante as refeições.",
        "Alterne sempre com água e evite consumo frequente durante a semana.",
      ],
    },
    4: {
      title: "Tabaco",
      icon: "🚭",
      why: "Fumar duplica ou triplica o risco de doença cardiovascular e leva à morte prematura de cerca de 1 em cada 2 fumadores a longo prazo.",
      todo: [
        "Reduzir já traz benefícios imediatos para a saúde.",
        "Procure apoio médico ou programas de cessação tabágica.",
        "Substitua a pausa para fumar por uma pequena caminhada.",
      ],
    },
    5: {
      title: "Consumo de Fruta e Vegetais",
      icon: "🥗",
      why: "Uma ingestão adequada de fruta e vegetais está associada a uma redução de cerca de 30% no risco de doença cardiovascular, melhor saúde intestinal e maior longevidade.",
      todo: [
        "Inclua legumes no prato principal (sopa, salada ou legumes cozinhados).",
        "Consuma fruta em pelo menos dois momentos do dia, como lanche ou sobremesa.",
        "Cozinhe legumes ou sopa para a semana e prepare marmitas que incluam fruta e legumes em todas as refeições principais.",
      ],
    },
    6: {
      title: "Bebidas Açucaradas",
      icon: "🥤",
      why: "O consumo diário de bebidas açucaradas aumenta o risco de diabetes tipo 2 em cerca de 25% por cada bebida ingerida por dia, contribuindo também para aumento de peso e alterações metabólicas.",
      todo: [
        "Substitua refrigerantes e sumos por água, água com gás ou chá sem açúcar.",
        "Se o consumo for habitual, reduza de forma gradual.",
        "Tenha sempre uma garrafa de água acessível durante o dia de trabalho.",
      ],
    },
    7: {
      title: "Alimentos Ultraprocessados",
      icon: "🍪",
      why: "O consumo frequente de alimentos ultraprocessados está associado a maior ingestão calórica espontânea, ganho de peso significativo em poucos dias e a um aumento relevante do risco de doença cardiovascular. Estes efeitos estão ligados à composição destes alimentos, ricos em açúcares, gorduras e aditivos e pobres em fibra e micronutrientes.",
      todo: [
        "Use as regras práticas: se não conseguir identificar os ingredientes principais, evite e quanto menos ingredientes e menor o rótulo, melhor.",
        "Em lanches no trabalho, troque bolachas, pastelaria ou snacks de pacote por fruta, iogurte natural ou um punhado pequeno de frutos secos.",
        "Em refeições fora, escolha pratos com alimentos reconhecíveis (ex.: carne ou peixe grelhado, legumes, arroz ou batata) e evite molhos, fritos e combinações muito processadas.",
      ],
    },
    8: {
      title: "Horário de Trabalho",
      icon: "🕒",
      why: "Horários por turnos exigem uma maior atenção à gestão do sono, da alimentação e da energia ao longo do dia. A evidência mostra que, nestes contextos, estratégias adequadas de organização de rotinas ajudam a preservar o bem-estar metabólico e cardiovascular ao longo do tempo.",
      todo: [
        "Durante turnos noturnos ou horários irregulares, privilegie refeições mais leves e simples, evitando grandes quantidades de doces, fritos ou fast food.",
        "Planeie refeições e lanches antes do turno para evitar escolhas impulsivas.",
        "Sempre que possível, mantenha rotinas consistentes de descanso e um ambiente adequado ao sono (escuro e silencioso), ajustado ao seu horário.",
      ],
    },
  },

  eng: {
    1: {
      title: "Sleep",
      icon: "🛌",
      why: "Getting too little or irregular sleep doubles the risk of developing type 2 diabetes, and is also associated with metabolic changes and poorer blood sugar control.",
      todo: [
        "Try to go to bed and wake up at similar times, even on days off.",
        "Avoid heavy meals, alcohol, and bright screens in the last hour before bed.",
        "If you work shifts, keep consistent routines and a suitable sleep environment (dark and quiet).",
      ],
    },
    2: {
      title: "Physical Activity and Sedentary Behaviour",
      icon: "🏃",
      why: "Regular physical activity reduces the risk of cardiovascular disease, type 2 diabetes, and premature mortality by 30–50% compared to sedentary lifestyles. Long periods of sitting have a negative impact even in physically active people.",
      todo: [
        "Whenever possible, take the stairs and use calls or breaks as an opportunity to move (walk, stretch).",
        "Break up long periods of sitting: stand up every 60–90 minutes, even if just for a few minutes.",
        "Outside work, aim to walk for about 30 minutes a day, 5 days a week.",
      ],
    },
    3: {
      title: "Alcohol Consumption",
      icon: "🍷",
      why: "There is no level of alcohol consumption considered completely safe. Even low consumption is associated with a higher risk of liver disease, metabolic conditions, and some cancers.",
      todo: [
        "Opt for alcohol-free drinks in social settings (sparkling water, flavoured water, sugar-free drinks).",
        "If you do drink alcohol, keep it for occasional moments and preferably with meals.",
        "Always alternate with water and avoid drinking frequently during the week.",
      ],
    },
    4: {
      title: "Tobacco",
      icon: "🚭",
      why: "Smoking doubles or triples the risk of cardiovascular disease and leads to the premature death of approximately 1 in 2 long-term smokers.",
      todo: [
        "Cutting down already brings immediate health benefits.",
        "Seek medical support or smoking cessation programmes.",
        "Replace your smoking break with a short walk.",
      ],
    },
    5: {
      title: "Fruit and Vegetable Intake",
      icon: "🥗",
      why: "Adequate intake of fruit and vegetables is associated with a roughly 30% reduction in cardiovascular disease risk, better gut health, and greater longevity.",
      todo: [
        "Include vegetables in your main meal (soup, salad, or cooked vegetables).",
        "Eat fruit at least twice a day, as a snack or dessert.",
        "Cook vegetables or soup for the week and prepare packed meals that include fruit and vegetables in every main meal.",
      ],
    },
    6: {
      title: "Sugary Drinks",
      icon: "🥤",
      why: "Daily consumption of sugary drinks increases the risk of type 2 diabetes by around 25% per drink per day, and also contributes to weight gain and metabolic changes.",
      todo: [
        "Replace soft drinks and juices with water, sparkling water, or unsweetened tea.",
        "If the habit is ingrained, reduce consumption gradually.",
        "Always keep a bottle of water within reach during your working day.",
      ],
    },
    7: {
      title: "Ultra-processed Foods",
      icon: "🍪",
      why: "Frequent consumption of ultra-processed foods is associated with higher spontaneous calorie intake, significant weight gain within days, and a relevant increase in cardiovascular disease risk. These effects are linked to the composition of these foods, which are high in sugars, fats, and additives and low in fibre and micronutrients.",
      todo: [
        "Use this practical rule: if you cannot identify the main ingredients, avoid it — the fewer ingredients and the shorter the label, the better.",
        "For work snacks, swap biscuits, pastries, or packaged snacks for fruit, plain yoghurt, or a small handful of nuts.",
        "When eating out, choose dishes with recognisable ingredients (e.g. grilled meat or fish, vegetables, rice or potatoes) and avoid sauces, fried foods, and heavily processed combinations.",
      ],
    },
    8: {
      title: "Work Schedule",
      icon: "🕒",
      why: "Shift work requires extra attention to managing sleep, diet, and energy throughout the day. Evidence shows that, in these settings, appropriate strategies for organising routines help preserve metabolic and cardiovascular wellbeing over time.",
      todo: [
        "During night shifts or irregular hours, favour lighter, simpler meals, avoiding large amounts of sweets, fried foods, or fast food.",
        "Plan meals and snacks before your shift to avoid impulsive choices.",
        "Whenever possible, maintain consistent rest routines and a suitable sleep environment (dark and quiet), adjusted to your schedule.",
      ],
    },
  },
};

const factors = factorsInfo[lang] || factorsInfo[PORTUGUESE];

// ── BUILD UI ──────────────────────────────────────────────────────────────────

const div = document.getElementById("resultado");
let html = "";

if (riskFactors.length === 0) {
  html += `<div class="card">
    <h2>${t.noRiskTitle}</h2>
    <p>${t.noRiskP1}</p>
    <p>${t.noRiskP2}</p>
    <p>${t.noRiskP3}</p>
    <p>${t.noRiskP4}</p>
    <p>${t.noRiskP5}</p>
  </div>`;
}

if (riskFactors.length > 0) {
  html += `<div class="card">
    <h2>${t.recTitle}</h2>
    <h3>${t.recSubtitle}</h3>
    <p><em>${t.recHint}</em></p>
    <div class="cards-container">`;

  riskFactors.forEach((index) => {
    const info = factors[index];
    html += `<div class="bloco-card clickable" data-index="${index}">
               <div class="icon">${info.icon}</div>
               <h3>${info.title}</h3>
             </div>`;
  });

  html += `</div></div>`;

  html += `<div class="card">
    <h2>${t.nextTitle}</h2>
    <p>${t.nextP1}</p>
    <p>${t.nextP2}</p>
    <p>${t.nextP3}</p>
    <p>${t.nextP4}</p>
  </div>`;
}

div.innerHTML = html;

// ── MODAL ─────────────────────────────────────────────────────────────────────

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".clickable").forEach((card) => {
  card.addEventListener("click", () => {
    const idx = card.dataset.index;
    const info = factors[idx];

    let accordionHTML = "";
    info.todo.forEach((item, i) => {
      accordionHTML += `<div class="accordion-item active">
                          <div class="accordion-header">${t.modalSuggestionLabel} ${i + 1}</div>
                          <div class="accordion-content"><p>${item}</p></div>
                        </div>`;
    });

    const whyHTML = `<div class="accordion-item">
                       <div class="accordion-header">${t.modalWhyLabel}</div>
                       <div class="accordion-content"><p>${info.why}</p></div>
                     </div>`;

    modalBody.innerHTML = `<h2>${info.icon} ${info.title}</h2>
                           <h3>${t.modalDayLabel}</h3>
                           ${accordionHTML}
                           ${whyHTML}`;

    modal.classList.add("show");
    document.body.classList.add("modal-open");

    modalBody.querySelectorAll(".accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
      });
    });
  });
});

function closeModalFunc() {
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

closeModal.addEventListener("click", closeModalFunc);
window.addEventListener("click", (e) => { if (e.target === modal) closeModalFunc(); });
window.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("show")) closeModalFunc(); });

// ── PDF DOWNLOAD ──────────────────────────────────────────────────────────────

if (riskFactors.length > 0) {
  const btn = document.createElement("button");
  btn.className = "download-btn";
  btn.textContent = t.downloadBtn;

  const recomendacoesCard = document.querySelector("#resultado .card");
  recomendacoesCard.insertAdjacentElement("afterend", btn);

  btn.addEventListener("click", () => {
    let loaded = 0;
    let wmImg = null, logoImg = null, capaImg = null;

    function onLoaded() {
      loaded++;
      if (loaded === 3) generatePDF(wmImg, logoImg, capaImg);
    }

    const _wm = new Image();
    _wm.onload  = () => { wmImg = _wm;   onLoaded(); };
    _wm.onerror = () => {                 onLoaded(); };
    _wm.src = "capa_watermark.png";

    const _logo = new Image();
    _logo.onload  = () => { logoImg = _logo; onLoaded(); };
    _logo.onerror = () => {                  onLoaded(); };
    _logo.src = "logo.png";

    const _capa = new Image();
    _capa.onload  = () => { capaImg = _capa; onLoaded(); };
    _capa.onerror = () => {                  onLoaded(); };
    _capa.src = "capa_cortada.png";
  });

  function generatePDF(wmImg, logoImg, capaImg) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    const PAGE_W      = 210;
    const PAGE_H      = 297;
    const MARGIN      = 18;
    const CONTENT_W   = PAGE_W - MARGIN * 2;
    const FOOTER_H    = 10;
    const SAFE_BOTTOM = PAGE_H - FOOTER_H - 4;
    let y = 0;

    const FS_SUGGESTION = 11;
    const FS_WHY        = 8.5;
    const FS_WHY_LABEL  = 10;
    const LH = (fs) => fs * 0.3528 * 1.4;
    const V_PAD        = 5;
    const BASELINE_OFF = 3.5;

    const GREEN       = [34, 139, 87];
    const GREEN_DARK  = [26, 107, 42];
    const GREEN_LIGHT = [236, 247, 241];
    const YELLOW      = [245, 200, 0];
    const GREY_DARK   = [40, 40, 40];
    const GREY_MID    = [100, 100, 100];
    const GREY_LIGHT  = [245, 245, 245];
    const WHITE       = [255, 255, 255];

    function drawWatermark() {
      if (!wmImg) return;
      doc.addImage(wmImg, "PNG", 0, 0, PAGE_W, PAGE_H);
    }

    function ensureFits(blockH) {
      if (y + blockH > SAFE_BOTTOM) {
        doc.addPage();
        drawWatermark();
        y = MARGIN;
      }
    }

    function calcLines(text, fontSize, maxWidth) {
      doc.setFontSize(fontSize);
      return doc.splitTextToSize(text, maxWidth);
    }

    function filledRoundedRect(x, ry, w, h, r, color) {
      doc.setFillColor(...color);
      doc.roundedRect(x, ry, w, h, r, r, "F");
    }

    // ── PAGE 1: watermark + capa header ──
    drawWatermark();

    const CAPA_H = 55;
    if (capaImg) {
      doc.addImage(capaImg, "PNG", 0, 0, PAGE_W, CAPA_H);
    } else {
      doc.setFillColor(...GREEN_DARK);
      doc.rect(0, 0, PAGE_W, CAPA_H, "F");
      doc.setTextColor(...WHITE);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(26);
      doc.text("NutriCheck+", PAGE_W / 2, CAPA_H / 2, { align: "center" });
    }

    doc.setFillColor(...YELLOW);
    doc.rect(0, CAPA_H, PAGE_W, 1.5, "F");

    y = CAPA_H + 15;
    doc.setTextColor(...GREEN_DARK);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(t.pdfSubtitle, MARGIN, y);
    y += 6;

    const today = new Date().toLocaleDateString(t.pdfDateLocale, {
      day: "2-digit", month: "long", year: "numeric",
    });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GREY_MID);
    doc.text(today, MARGIN, y);
    y += 10;

    // Intro
    const introLines = calcLines(t.pdfIntro, 9, CONTENT_W);
    doc.setTextColor(...GREY_MID);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(introLines, MARGIN, y);
    y += introLines.length * LH(9) + 8;

    // Risk factors
    riskFactors.forEach((index) => {
      const info = factors[index];

      const TITLE_BAR_H = 16;
      const LABEL_H     = 10;

      const suggBlocks = info.todo.map((item) => {
        const lines = calcLines(item, FS_SUGGESTION, CONTENT_W - 14);
        const boxH  = V_PAD + lines.length * LH(FS_SUGGESTION) + V_PAD;
        return { lines, boxH };
      });

      const whyLines = calcLines(info.why, FS_WHY, CONTENT_W - 8);
      const whyBoxH  = V_PAD + LH(FS_WHY_LABEL) + 1 + whyLines.length * LH(FS_WHY) + V_PAD;

      const minH = TITLE_BAR_H + LABEL_H + suggBlocks[0].boxH + 3;
      ensureFits(minH);

      // Title bar
      filledRoundedRect(MARGIN - 4, y - 2, CONTENT_W + 8, 12, 3, GREEN);
      doc.setTextColor(...WHITE);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(info.title, MARGIN + 1, y + 6);
      y += TITLE_BAR_H + 3;

      // Label
      doc.setTextColor(...GREY_DARK);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(t.pdfDayLabel, MARGIN, y);
      y += LABEL_H - 2;

      // Suggestion boxes
      suggBlocks.forEach(({ lines, boxH }) => {
        ensureFits(boxH + 3);
        const rectY = y;
        filledRoundedRect(MARGIN, rectY, CONTENT_W, boxH, 2, GREY_LIGHT);
        doc.setFillColor(...GREEN);
        doc.circle(MARGIN + 5, rectY + boxH / 2, 2, "F");
        doc.setTextColor(...GREY_DARK);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(FS_SUGGESTION);
        doc.text(lines, MARGIN + 11, rectY + V_PAD + BASELINE_OFF);
        y += boxH + 3;
      });

      y += 3;

      // "Why it matters" box
      ensureFits(whyBoxH + 4);
      filledRoundedRect(MARGIN, y, CONTENT_W, whyBoxH, 2, GREEN_LIGHT);
      doc.setTextColor(...GREEN);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(FS_WHY_LABEL);
      doc.text(t.pdfWhyLabel, MARGIN + 4, y + V_PAD + BASELINE_OFF);
      doc.setTextColor(...GREY_MID);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(FS_WHY);
      doc.text(whyLines, MARGIN + 4, y + V_PAD + BASELINE_OFF + LH(FS_WHY_LABEL) + 1);
      y += whyBoxH + 10;
    });

    // ── "Next Step" section ──
    const ns1 = calcLines(t.pdfNext1, 9, CONTENT_W - 12);
    const ns2 = calcLines(t.pdfNext2, 9, CONTENT_W - 12);
    const ns3 = calcLines(t.pdfNext3, 9, CONTENT_W - 12);
    const ns4 = calcLines(t.pdfNext4, 9, CONTENT_W - 12);

    const nsBoxH = V_PAD + LH(12) + 4
      + ns1.length * LH(9) + 4
      + ns2.length * LH(9) + 4
      + ns3.length * LH(9) + 4
      + ns4.length * LH(9)
      + V_PAD;

    ensureFits(nsBoxH + 4);

    filledRoundedRect(MARGIN, y, CONTENT_W, nsBoxH, 3, GREEN_LIGHT);
    doc.setFillColor(...GREEN_DARK);
    doc.rect(MARGIN, y, 3, nsBoxH, "F");

    let ny = y + V_PAD;

    doc.setTextColor(...GREEN_DARK);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(t.pdfNextTitle, MARGIN + 8, ny + BASELINE_OFF);
    ny += LH(12) + 4;

    doc.setTextColor(...GREY_DARK);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(ns1, MARGIN + 8, ny + BASELINE_OFF);
    ny += ns1.length * LH(9) + 4;

    doc.text(ns2, MARGIN + 8, ny + BASELINE_OFF);
    ny += ns2.length * LH(9) + 4;

    doc.setFont("helvetica", "bold");
    doc.text(ns3, MARGIN + 8, ny + BASELINE_OFF);
    ny += ns3.length * LH(9) + 4;

    doc.setFont("helvetica", "bold");
    doc.text(ns4, MARGIN + 8, ny + BASELINE_OFF);

    y += nsBoxH + 10;

    // ── Footer on every page ──
    const pageCount = doc.getNumberOfPages();
    for (let p = 1; p <= pageCount; p++) {
      doc.setPage(p);
      doc.setFillColor(...GREEN_DARK);
      doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, FOOTER_H, "F");
      doc.setFillColor(...YELLOW);
      doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, 1, "F");
      doc.setTextColor(...WHITE);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.text(t.pdfFooter, MARGIN, PAGE_H - 4);
      doc.text(`${p} / ${pageCount}`, PAGE_W - MARGIN, PAGE_H - 4, { align: "right" });
    }

    doc.save(t.pdfFilename);
  }
}
