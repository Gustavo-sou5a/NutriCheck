// Função para ler parâmetros da URL
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const answers = [
  getParam("var1_sono"),
  getParam("var2_ativ"),
  getParam("var3_alcool"),
  getParam("var4_tabaco"),
  getParam("var5_fruta"),
  getParam("var6_refri"),
  getParam("var7_upf"),
  getParam("var8_horario")
];

function getMostRelevantRiskFactors() {
  const MAX_NUM_RECOMMENDATIONS = 5;
  const NUM_RISK_FACTORS = 8;
  const AT_RISK = "1";
  const riskFactors = [];
  for (let i = 0; i < NUM_RISK_FACTORS && riskFactors.length < MAX_NUM_RECOMMENDATIONS; i++) {
    if (answers[i] === AT_RISK) riskFactors.push(i+1);
  }
  return riskFactors;
}

const riskFactors = getMostRelevantRiskFactors();

const factorsInfo = {
  1: { title:"Sono", icon:"🛌", why:"Dormir pouco ou de forma irregular duplica o risco de desenvolver diabetes tipo 2, estando também associado a alterações metabólicas e pior controlo da glicemia.", todo:["Tente deitar-se e acordar a horas semelhantes, mesmo nos dias livres.","Evite refeições pesadas, álcool e ecrãs luminosos na última hora antes de dormir.","Se trabalha por turnos, mantenha rotinas consistentes e um ambiente de sono adequado (escuro e silencioso)."] },
  2: { title:"Atividade Física e Sedentarismo", icon:"🏃", why:"A atividade física regular reduz o risco de doenças cardiovasculares, diabetes tipo 2 e mortalidade precoce em 30-50%, quando comparada com estilos de vida sedentários. Longos períodos sentado têm impacto negativo mesmo em pessoas fisicamente ativas.", todo:["Sempre que possível, use as escadas e aproveite chamadas ou pausas para se mover (caminhar, alongar).","Interrompa períodos longos sentado(a): levante-se a cada 60–90 minutos, nem que seja por alguns minutos.","Fora do trabalho, caminhe cerca de 30 minutos por dia, 5 dias por semana."] },
  3: { title:"Consumo de Álcool", icon:"🍷", why:"Não existe um nível de consumo de álcool considerado totalmente seguro, estando mesmo consumos baixos associados a maior risco de doença hepática, metabólica e alguns cancros.", todo:["Prefira bebidas sem álcool em contextos sociais (água com gás, água aromatizada, bebidas zero açúcar).","Se consumir álcool, reserve-o para ocasiões pontuais e preferencialmente durante as refeições.","Alterne sempre com água e evite consumo frequente durante a semana."] },
  4: { title:"Tabaco", icon:"🚭", why:"Fumar duplica ou triplica o risco de doença cardiovascular e leva à morte prematura de cerca de 1 em cada 2 fumadores a longo prazo.", todo:["Reduzir já traz benefícios imediatos para a saúde.","Procure apoio médico ou programas de cessação tabágica.","Substitua a pausa para fumar por uma pequena caminhada."] },
  5: { title:"Consumo de Fruta e Vegetais", icon:"🥗", why:"Uma ingestão adequada de fruta e vegetais está associada a uma redução de cerca de 30% no risco de doença cardiovascular, melhor saúde intestinal e maior longevidade.", todo:["Inclua legumes no prato principal (sopa, salada ou legumes cozinhados).","Consuma fruta em pelo menos dois momentos do dia, como lanche ou sobremesa.","Cozinhe legumes ou sopa para a semana e prepare marmitas que incluam fruta e legumes em todas as refeições principais."] },
  6: { title:"Bebidas Açucaradas", icon:"🥤", why:"O consumo diário de bebidas açucaradas aumenta o risco de diabetes tipo 2 em cerca de 25% por cada bebida ingerida por dia, contribuindo também para aumento de peso e alterações metabólicas.", todo:["Substitua refrigerantes e sumos por água, água com gás ou chá sem açúcar.","Se o consumo for habitual, reduza de forma gradual.","Tenha sempre uma garrafa de água acessível durante o dia de trabalho."] },
  7: { title:"Alimentos Ultraprocessados", icon:"🍪", why:"O consumo frequente de alimentos ultraprocessados está associado a maior ingestão calórica espontânea, ganho de peso significativo em poucos dias e a um aumento relevante do risco de doença cardiovascular. Estes efeitos estão ligados à composição destes alimentos, ricos em açúcares, gorduras e aditivos e pobres em fibra e micronutrientes.", todo:["Use as regras práticas: se não conseguir identificar os ingredientes principais, evite e quanto menos ingredientes e menor o  rótulo, melhor.","Em lanches no trabalho, troque bolachas, pastelaria ou snacks de pacote por fruta, iogurte natural ou um punhado pequeno de frutos secos.","Em refeições fora, escolha pratos com alimentos reconhecíveis (ex.: carne ou peixe grelhado, legumes, arroz ou batata) e evite molhos, fritos e combinações muito processadas."] },
  8: { title:"Horário de Trabalho", icon:"🕒", why:"Horários por turnos exigem uma maior atenção à gestão do sono, da alimentação e da energia ao longo do dia. A evidência mostra que, nestes contextos, estratégias adequadas de organização de rotinas ajudam a preservar o bem-estar metabólico e cardiovascular ao longo do tempo.", todo:["Durante turnos noturnos ou horários irregulares, privilegie refeições mais leves e simples, evitando grandes quantidades de doces, fritos ou fast food.","Planeie refeições e lanches antes do turno para evitar escolhas impulsivas.","Sempre que possível, mantenha rotinas consistentes de descanso e um ambiente adequado ao sono (escuro e silencioso), ajustado ao seu horário."] }
};

const div = document.getElementById("resultado");
let html = '';

if(riskFactors.length === 0){
  html += `<div class="card">
    <h2>Manutenção de Hábitos</h2>
    <p>De acordo com as suas respostas, <b>os seus hábitos atuais estão bem alinhados com as recomendações para a saúde.</b></p>
    <p>O foco neste momento é <b>manter este estilo de vida saudável</b> ao longo do tempo, mesmo perante mudanças de rotina ou fases mais exigentes.</p>
    <p>Este <b>Ponto de Partida</b> serve para <b>reforçar o que já faz bem</b> e apoiar escolhas consistentes no dia a dia. <b>Consultas de nutrição</b>, <b>ações educativas</b> e <b>workshops práticos</b> podem ser úteis para aprofundar conhecimento, esclarecer dúvidas e apoiar a manutenção destes hábitos.</p>
    <p>Se considera importante continuar a <b>investir na sua saúde</b>, partilhe este interesse com a sua empresa!</p>
  </div>`;
}

if(riskFactors.length>0){
  html += `<div class="card">
    <h2>Recomendações Práticas</h2>
    <h3>As recomendações apresentadas abaixo foram selecionadas porque representam áreas com maior potencial de melhoria neste momento.</h3>
    <p><em>(clique nos ícones abaixo para saber mais sobre cada uma)</em></p>
    <div class="cards-container">`;

  riskFactors.forEach(index=>{
    const info = factorsInfo[index];
    html += `<div class="bloco-card clickable" data-index="${index}">
               <div class="icon">${info.icon}</div>
               <h3>${info.title}</h3>
             </div>`;
  });

  html += `</div></div>`;

  html += `<div class="card">
    <h2>O Próximo Passo</h2>
    <p><b>O desafio que temos para si</b> não é mudar tudo de uma vez — <b>começar por uma ou duas destas prioridades</b> já é um excelente primeiro passo.</p>
    <p>Este <b>Ponto de Partida</b> é apenas o início: o acompanhamento adequado ajuda a transformar recomendações em hábitos sustentáveis ao longo do tempo. 
    <b>Consultas de nutrição</b>, <b>ações educativas</b> e <b>workshops práticos</b> são formas eficazes de aprofundar estas áreas e apoiar mudanças ajustadas ao dia a dia.</p>
    <p>Se considera importante avançar neste caminho, <b>partilhe este interesse com a sua empresa!</b></p>
  </div>`;
}

div.innerHTML = html;

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".clickable").forEach(card=>{
  card.addEventListener("click",()=>{
    const idx = card.dataset.index;
    const info = factorsInfo[idx];

    let accordionHTML = '';
    info.todo.forEach((item,i)=>{
      accordionHTML += `<div class="accordion-item active">
                          <div class="accordion-header">Sugestão ${i+1}</div>
                          <div class="accordion-content"><p>${item}</p></div>
                        </div>`;
    });

    const whyHTML = `<div class="accordion-item">
                       <div class="accordion-header">Porque é importante</div>
                       <div class="accordion-content"><p>${info.why}</p></div>
                     </div>`;

    modalBody.innerHTML = `<h2>${info.icon} ${info.title}</h2>
                           <h3>O que pode fazer no dia a dia:</h3>
                           ${accordionHTML}
                           ${whyHTML}`;

    modal.classList.add("show");
    document.body.classList.add("modal-open");

    modalBody.querySelectorAll(".accordion-header").forEach(header=>{
      header.addEventListener("click",()=>{
        header.parentElement.classList.toggle("active");
      });
    });
  });
});

function closeModalFunc(){
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

closeModal.addEventListener("click",closeModalFunc);
window.addEventListener("click", e=>{ if(e.target===modal) closeModalFunc(); });
window.addEventListener("keydown", e=>{ if(e.key==="Escape" && modal.classList.contains("show")) closeModalFunc(); });


// ===== DOWNLOAD PDF =====
if (riskFactors.length > 0) {

  const btn = document.createElement("button");
  btn.className = "download-btn";
  btn.textContent = "Baixar Recomendações (PDF)";

  const recomendacoesCard = document.querySelector("#resultado .card");
  recomendacoesCard.insertAdjacentElement("afterend", btn);

  btn.addEventListener("click", () => {
    let loaded = 0;
    let wmImg = null, logoImg = null;

    function onLoaded() {
      loaded++;
      if (loaded === 2) generatePDF(wmImg, logoImg);
    }

    const _wm = new Image();
    _wm.onload  = () => { wmImg = _wm; onLoaded(); };
    _wm.onerror = () => { onLoaded(); };
    _wm.src = "capa_watermark.png";

    const _logo = new Image();
    _logo.onload  = () => { logoImg = _logo; onLoaded(); };
    _logo.onerror = () => { onLoaded(); };
    _logo.src = "logo.png";
  });

  function generatePDF(wmImg, logoImg) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    const PAGE_W      = 210;
    const PAGE_H      = 297;
    const MARGIN      = 18;
    const CONTENT_W   = PAGE_W - MARGIN * 2;
    const FOOTER_H    = 10;
    const SAFE_BOTTOM = PAGE_H - FOOTER_H - 4; // never draw below this
    let y = 0;

    // Font sizes
    const FS_SUGGESTION = 11;
    const FS_WHY        = 8.5;
    const FS_WHY_LABEL  = 10;

    // Line height per font size: pt * 0.3528 (pt→mm) * 1.4 (leading)
    const LH = fs => fs * 0.3528 * 1.4;

    const V_PAD        = 5;   // vertical padding inside boxes (top & bottom)
    const BASELINE_OFF = 3.5; // distance from box top edge to first text baseline

    // Palette
    const GREEN       = [34, 139, 87];
    const GREEN_LIGHT = [236, 247, 241];
    const GREY_DARK   = [40, 40, 40];
    const GREY_MID    = [100, 100, 100];
    const GREY_LIGHT  = [245, 245, 245];
    const WHITE       = [255, 255, 255];

    function drawWatermark() {
      if (!wmImg) return;
      doc.addImage(wmImg, "PNG", 0, 0, PAGE_W, PAGE_H);
    }

    // Break page only if block won't fit — guarantees no box is ever split
    function ensureFits(blockH) {
      if (y + blockH > SAFE_BOTTOM) {
        doc.addPage();
        drawWatermark();
        y = MARGIN;
      }
    }

    // Calculate wrapped lines using the exact font size that will be used
    function calcLines(text, fontSize, maxWidth) {
      doc.setFontSize(fontSize);
      return doc.splitTextToSize(text, maxWidth);
    }

    function filledRoundedRect(x, ry, w, h, r, color) {
      doc.setFillColor(...color);
      doc.roundedRect(x, ry, w, h, r, r, "F");
    }

    // ---- PAGE 1 ----
    drawWatermark();

    // ---- HEADER ----
    doc.setFillColor(...GREEN);
    doc.rect(0, 0, PAGE_W, 42, "F");

    doc.setTextColor(...WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Recomendações NutriCheck+", MARGIN, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("As suas recomendações personalizadas de saúde", MARGIN, 27);

    const today = new Date().toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" });
    doc.setFontSize(8);
    doc.setTextColor(200, 230, 210);
    doc.text(today, MARGIN, 36, { align: "left" });

    if (logoImg) {
      const LOGO_H = 18;
      const LOGO_W = LOGO_H * (logoImg.naturalWidth / logoImg.naturalHeight);
      const logoX  = PAGE_W - MARGIN - LOGO_W;
      const logoY  = (42 - LOGO_H) / 2;

      // Círculo branco por baixo do logo
      const circleR  = Math.max(LOGO_W, LOGO_H) / 2; // raio = metade do maior lado + margem
      const circleCX = logoX + LOGO_W / 2;
      const circleCY = logoY + LOGO_H / 2;
      doc.setFillColor(255, 255, 255);
      doc.circle(circleCX, circleCY, circleR, "F");

      doc.addImage(logoImg, "PNG", logoX, logoY, LOGO_W, LOGO_H);
    }

    y = 52;

    // ---- INTRO ----
    const introLines = calcLines(
      "As recomendações abaixo foram selecionadas com base nas suas respostas e representam as áreas com maior potencial de melhoria. Não precisa de mudar tudo de uma vez — comece por uma ou duas prioridades.",
      9, CONTENT_W
    );
    doc.setTextColor(...GREY_MID);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(introLines, MARGIN, y);
    y += introLines.length * LH(9) + 8;

    // ---- RISK FACTORS ----
    riskFactors.forEach((index) => {
      const info = factorsInfo[index];

      // Pre-calculate everything before drawing a single pixel
      const TITLE_BAR_H = 16;
      const LABEL_H     = 10;

      const suggBlocks = info.todo.map(item => {
        const lines = calcLines(item, FS_SUGGESTION, CONTENT_W - 14);
        // boxH = padding top + all text lines + padding bottom
        const boxH = V_PAD + lines.length * LH(FS_SUGGESTION) + V_PAD;
        return { lines, boxH };
      });

      const whyLines = calcLines(info.why, FS_WHY, CONTENT_W - 8);
      // why box: label line + gap + text lines + padding
      const whyBoxH = V_PAD + LH(FS_WHY_LABEL) + 1 + whyLines.length * LH(FS_WHY) + V_PAD;

      // Ensure at minimum the title + label + first suggestion fit together
      const minH = TITLE_BAR_H + LABEL_H + suggBlocks[0].boxH + 3;
      ensureFits(minH);

      // ---- Title bar ----
      filledRoundedRect(MARGIN - 4, y - 2, CONTENT_W + 8, 12, 3, GREEN);
      doc.setTextColor(...WHITE);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(info.title, MARGIN + 1, y + 6);
      y += TITLE_BAR_H;

      // ---- "O que pode fazer" label ----
      doc.setTextColor(...GREY_DARK);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("O que pode fazer no dia a dia:", MARGIN, y);
      y += LABEL_H;

      // ---- Suggestion boxes — each must fit entirely on the page ----
      suggBlocks.forEach(({ lines, boxH }) => {
        ensureFits(boxH + 3); // +3 for gap between boxes

        const rectY = y;
        filledRoundedRect(MARGIN, rectY, CONTENT_W, boxH, 2, GREY_LIGHT);

        // Bullet: vertically centered in box
        doc.setFillColor(...GREEN);
        doc.circle(MARGIN + 5, rectY + boxH / 2, 2, "F");

        // Text: starts at top padding + baseline offset
        doc.setTextColor(...GREY_DARK);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(FS_SUGGESTION);
        doc.text(lines, MARGIN + 11, rectY + V_PAD + BASELINE_OFF);

        y += boxH + 3;
      });

      y += 3;

      // ---- "Porque é importante" box — must fit entirely ----
      ensureFits(whyBoxH + 4);

      filledRoundedRect(MARGIN, y, CONTENT_W, whyBoxH, 2, GREEN_LIGHT);

      // Label
      doc.setTextColor(...GREEN);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(FS_WHY_LABEL);
      doc.text("Porque é importante:", MARGIN + 4, y + V_PAD + BASELINE_OFF);

      // Why text starts after label line
      doc.setTextColor(...GREY_MID);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(FS_WHY);
      doc.text(whyLines, MARGIN + 4, y + V_PAD + BASELINE_OFF + LH(FS_WHY_LABEL) + 1);

      y += whyBoxH + 10;
    });

    // ---- FOOTER on every page ----
    const pageCount = doc.getNumberOfPages();
    for (let p = 1; p <= pageCount; p++) {
      doc.setPage(p);
      doc.setFillColor(...GREEN);
      doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, FOOTER_H, "F");
      doc.setTextColor(...WHITE);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.text("NutriCheck+  •  Recomendações Personalizadas", MARGIN, PAGE_H - 4);
      doc.text(`${p} / ${pageCount}`, PAGE_W - MARGIN, PAGE_H - 4, { align: "right" });
    }

    doc.save("recomendacoes_nutricheck.pdf");
  }
}
