import { PDF_TEXT, FACTORS_INFO, ENGLISH_LINK, PORTUGUESE_LINK } from "./translations/text.js";

// ── PDF GENERATION ────────────────────────────────────────────────────────────

export default function generatePDF(wmImg, capaImg, lang, riskFactors, factors) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const ENGLISH = "eng";
  const isEN = lang === ENGLISH;
  

  // ── CONSTANTS ──────────────────────────────────────────────────────────────

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

  const t = PDF_TEXT[lang]

  // ── HELPERS ────────────────────────────────────────────────────────────────

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

  // ── PAGE 1: watermark + capa header ───────────────────────────────────────

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
  doc.text(t.subtitle, MARGIN, y);
  y += 6;

  const today = new Date().toLocaleDateString(t.dateLocale, {
    day: "2-digit", month: "long", year: "numeric",
  });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GREY_MID);
  doc.text(today, MARGIN, y);
  y += 10;

  // Intro
  const introLines = calcLines(t.intro, 9, CONTENT_W);
  doc.setTextColor(...GREY_MID);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(introLines, MARGIN, y);
  y += introLines.length * LH(9) + 8;

  // ── RISK FACTORS ──────────────────────────────────────────────────────────

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
    doc.text(t.dayLabel, MARGIN, y);
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
    doc.text(t.whyLabel, MARGIN + 4, y + V_PAD + BASELINE_OFF);
    doc.setTextColor(...GREY_MID);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(FS_WHY);
    doc.text(whyLines, MARGIN + 4, y + V_PAD + BASELINE_OFF + LH(FS_WHY_LABEL) + 1);
    y += whyBoxH + 10;
  });

  // ── "NEXT STEP" SECTION ───────────────────────────────────────────────────

  const ns1 = calcLines(t.nextP1, 9, CONTENT_W - 12);
  const ns2 = calcLines(t.nextP2, 9, CONTENT_W - 12);
  const ns3 = calcLines(t.nextP3, 9, CONTENT_W - 12);
  const ns4 = calcLines(t.nextLink, 9, CONTENT_W - 12);

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
  doc.text(t.nextTitle, MARGIN + 8, ny + BASELINE_OFF);
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

  // Linha por linha, detectando link corretamente
  const link = isEN ? ENGLISH_LINK : PORTUGUESE_LINK;
  doc.setFont("helvetica", "bold");
  let nyLine = ny;
  ns4.forEach((line) => {
    let x = MARGIN + 8;

    if (line.includes(ENGLISH_LINK) || line.includes(PORTUGUESE_LINK)) {
      const parts = line.split(link);

      if (parts[0]) {
        doc.setTextColor(...GREY_DARK);
        doc.text(parts[0], x, nyLine + BASELINE_OFF);
        x += doc.getTextWidth(parts[0]);
      }

      doc.setTextColor(0, 0, 255);
      doc.text(link, x, nyLine + BASELINE_OFF);
      const linkW = doc.getTextWidth(link);
      doc.setDrawColor(0, 0, 255);
      doc.setLineWidth(0.5);
      doc.line(x, nyLine + BASELINE_OFF + 1, x + linkW, nyLine + BASELINE_OFF + 1);
      x += linkW;

      if (parts[1]) {
        doc.setTextColor(...GREY_DARK);
        doc.text(parts[1], x, nyLine + BASELINE_OFF);
      }
    } else {
      doc.setTextColor(...GREY_DARK);
      doc.text(line, x, nyLine + BASELINE_OFF);
    }

    nyLine += LH(9);
  });

  y += nsBoxH + 10;

  // ── FOOTER (todas as páginas) ─────────────────────────────────────────────

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
    doc.text(t.footer, MARGIN, PAGE_H - 4);
    doc.text(`${p} / ${pageCount}`, PAGE_W - MARGIN, PAGE_H - 4, { align: "right" });
  }

  doc.save(t.filename);
}
