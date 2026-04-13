import { WEBPAGE_TEXT, FACTORS_INFO } from "./translations/text.js";
import generatePDF from "./report.js";

const PORTUGUESE = "pt";
const IMAGES_FOLDER = "../assets/";

// ── URL PARAMS ────────────────────────────────────────────────────────────────

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const lang = getParam("lang") || PORTUGUESE;

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

const textToUse = WEBPAGE_TEXT[lang];

// Update page-level text
document.title = textToUse.pageTitle;
document.querySelector("h1").textContent = textToUse.heading;
document.querySelector("#resultado p").textContent = textToUse.loading;

// ── FACTOR DATA ───────────────────────────────────────────────────────────────

const factors = FACTORS_INFO[lang];

// ── BUILD UI ──────────────────────────────────────────────────────────────────

const div = document.getElementById("resultado");
let html = "";

// no risks page
if (riskFactors.length === 0) {
  html += `<div class="card">
    <h2>${textToUse.noRiskTitle}</h2>
    <p>${textToUse.noRiskP1}</p>
    <p><b>${textToUse.noRiskP2}</b></p>
    <p>${textToUse.noRiskP3}</p>
    <p><b>${textToUse.noRiskP4}</b></p>
    <p><b>${textToUse.noRiskP5}</b></p>
  </div>`;
} else {
  html += `<div class="card">
    <h2>${textToUse.recTitle}</h2>
    <h3>${textToUse.recSubtitle}</h3>
    <p><em>${textToUse.recHint}</em></p>
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
    <h2>${textToUse.nextTitle}</h2>
    <p>${textToUse.nextP1}</p>
    <p>${textToUse.nextP2}</p>
    <p><b>${textToUse.nextP3}</b></p>
    <p><b>${textToUse.nextLink}</b></p>
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
                          <div class="accordion-header">${textToUse.modalSuggestionLabel} ${i + 1}</div>
                          <div class="accordion-content"><p>${item}</p></div>
                        </div>`;
    });

    const whyHTML = `<div class="accordion-item">
                       <div class="accordion-header">${textToUse.modalWhyLabel}</div>
                       <div class="accordion-content"><p>${info.why}</p></div>
                     </div>`;

    modalBody.innerHTML = `<h2>${info.icon} ${info.title}</h2>
                           <h3>${textToUse.modalDailyLabel}</h3>
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

// ── PDF DOWNLOAD BUTTON ───────────────────────────────────────────────────────

if (riskFactors.length > 0) {
  const btn = document.createElement("button");
  btn.className = "download-btn";
  btn.textContent = textToUse.downloadBtn;

  const recomendacoesCard = document.querySelector("#resultado .card");
  recomendacoesCard.insertAdjacentElement("afterend", btn);

  btn.addEventListener("click", () => {
    let loaded = 0;
    let wmImg = null, capaImg = null;

    function onLoaded() {
      loaded++;
      if (loaded === 2) generatePDF(wmImg, capaImg, lang, riskFactors, factors);
    }

    const _wm = new Image();
    _wm.onload  = () => { wmImg = _wm;   onLoaded(); };
    _wm.onerror = () => {                 onLoaded(); };
    _wm.src = IMAGES_FOLDER + "background_report.png";

    const _capa = new Image();
    _capa.onload  = () => { capaImg = _capa; onLoaded(); };
    _capa.onerror = () => {                  onLoaded(); };
    _capa.src = IMAGES_FOLDER + "header_report.png";
  });
}
