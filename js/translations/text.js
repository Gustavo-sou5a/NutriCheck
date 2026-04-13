export const ENGLISH_LINK = "https://tally.so/r/7Ro4B9";
export const PORTUGUESE_LINK = "https://tally.so/r/dWPqGq";

/**
 *  This file contains all the text used on the web page and on the report pdf
 */


// This is the common text between the web page and the pdf report
export const COMMON_TEXT = {
  pt: {
    webPageLink: `Partilhe este questionário com alguém importante para si e que queira cuidar, através do link: <a href="${PORTUGUESE_LINK}" target="_blank">${PORTUGUESE_LINK}</a>`,
    nextTitle: "O Próximo Passo",
    nextP1: "O desafio que temos para si não é mudar tudo de uma vez — começar por uma ou duas destas prioridades já é um excelente primeiro passo.",
    nextP2: "Este Ponto de Partida é apenas o início: o acompanhamento adequado ajuda a transformar recomendações em hábitos sustentáveis ao longo do tempo. Consultas de nutrição, ações educativas e workshops práticos são formas eficazes de aprofundar estas áreas e apoiar mudanças ajustadas ao dia a dia.",
    nextP3: "Se considera importante avançar neste caminho, partilhe este interesse com a sua empresa!",
  },

  eng: {
    webPageLink: `Share this questionnaire with someone you care about, using the link: <a href="${ENGLISH_LINK}" target="_blank">${ENGLISH_LINK}</a>`,
    nextTitle: "The Next Step",
    nextP1: "The challenge we have for you is not to change everything at once — starting with one or two of these priorities is already an excellent first step.",
    nextP2: "This Starting Point is just the beginning: proper support helps turn recommendations into sustainable habits over time. Nutrition consultations, educational sessions, and practical workshops are effective ways to go deeper in these areas and support changes that fit your daily life.",
    nextP3: "If you feel it is important to move forward on this path, share this interest with your company!",
  },

  icon1: "🛌",
  icon2: "🏃",
  icon3: "🍷",
  icon4: "🚭",
  icon5: "🥗",
  icon6: "🥤",
  icon7: "🍪",
  icon8: "🕒",
}

export const WEBPAGE_TEXT = {
  pt: {
    pageTitle: "Recomendações NutriCheck+",
    heading: "As Suas Recomendações NutriCheck+",
    loading: "A carregar as suas recomendações…",

    // 1. No-risk info
    noRiskTitle: "Manutenção de Hábitos",
    noRiskP1: "De acordo com as suas respostas, os seus hábitos atuais estão bem alinhados com as recomendações para a saúde.",
    noRiskP2: "O foco neste momento é manter este estilo de vida saudável ao longo do tempo, mesmo perante mudanças de rotina ou fases mais exigentes.",
    noRiskP3: "Este Ponto de Partida serve para reforçar o que já faz bem e apoiar escolhas consistentes no dia a dia. Consultas de nutrição, ações educativas e workshops práticos podem ser úteis para aprofundar conhecimento, esclarecer dúvidas e apoiar a manutenção destes hábitos.",
    noRiskP4: "Se considera importante continuar a investir na sua saúde, partilhe este interesse com a sua empresa!",
    noRiskP5: COMMON_TEXT.pt.webPageLink,

    // 2. Risk info
    // 2.1 Recommendations card
    recTitle: "Recomendações Práticas",
    recSubtitle: "As recomendações apresentadas abaixo foram selecionadas porque representam áreas com maior potencial de melhoria neste momento.",
    recHint: "(clique nos ícones abaixo para saber mais sobre cada uma)",

    // 2.2 Next step card
    nextTitle: COMMON_TEXT.pt.nextTitle,
    nextP1: COMMON_TEXT.pt.nextP1,
    nextP2: COMMON_TEXT.pt.nextP2,
    nextP3: COMMON_TEXT.pt.nextP3,
    nextLink: COMMON_TEXT.pt.webPageLink,

    // 2.3 Modal
    modalDailyLabel: "O que pode fazer no dia a dia:",
    modalSuggestionLabel: "Sugestão",
    modalWhyLabel: "Porque é importante",

    // 2.4 PDF button
    downloadBtn: "Baixar Recomendações (PDF)",
  },

  eng: {
    pageTitle: "NutriCheck+ Recommendations",
    heading: "Your NutriCheck+ Recommendations",
    loading: "Loading your recommendations…",

    // No-risk card
    noRiskTitle: "Habit Maintenance",
    noRiskP1: "Based on your answers, your current habits are well aligned with health recommendations.",
    noRiskP2: "The focus right now is to maintain this healthy lifestyle over time, even when routines change or things get more demanding.",
    noRiskP3: "This Starting Point is here to reinforce what you are already doing well and support consistent daily choices. Nutrition consultations, educational sessions, and practical workshops can be useful to deepen knowledge, clarify doubts, and help sustain these habits.",
    noRiskP4: "If you feel it is important to keep investing in your health, share this interest with your company!",
    noRiskP5: COMMON_TEXT.eng.webPageLink,

    // Recommendations card
    recTitle: "Practical Recommendations",
    recSubtitle: "The recommendations below were selected because they represent the areas with the greatest potential for improvement right now.",
    recHint: "(click the icons below to learn more about each one)",

    // Next step card
    nextTitle: COMMON_TEXT.eng.nextTitle,
    nextP1: COMMON_TEXT.eng.nextP1,
    nextP2: COMMON_TEXT.eng.nextP2,
    nextP3: COMMON_TEXT.eng.nextP3,
    nextLink: COMMON_TEXT.eng.webPageLink,

    // Modal
    modalDailyLabel: "What you can do every day:",
    modalSuggestionLabel: "Suggestion",
    modalWhyLabel: "Why it matters",

    // 2.4 PDF button
    downloadBtn: "Download Recommendations (PDF)",
  },
};

export const FACTORS_INFO = {
  pt: {
    1: {
      title: "Sono",
      icon: COMMON_TEXT.icon1,
      why: "Dormir pouco ou de forma irregular duplica o risco de desenvolver diabetes tipo 2, estando também associado a alterações metabólicas e pior controlo da glicemia.",
      todo: [
        "Tente deitar-se e acordar a horas semelhantes, mesmo nos dias livres.",
        "Evite refeições pesadas, álcool e ecrãs luminosos na última hora antes de dormir.",
        "Se trabalha por turnos, mantenha rotinas consistentes e um ambiente de sono adequado (escuro e silencioso).",
      ],
    },
    2: {
      title: "Atividade Física e Sedentarismo",
      icon: COMMON_TEXT.icon2,
      why: "A atividade física regular reduz o risco de doenças cardiovasculares, diabetes tipo 2 e mortalidade precoce em 30-50%, quando comparada com estilos de vida sedentários. Longos períodos sentado têm impacto negativo mesmo em pessoas fisicamente ativas.",
      todo: [
        "Sempre que possível, use as escadas e aproveite chamadas ou pausas para se mover (caminhar, alongar).",
        "Interrompa períodos longos sentado(a): levante-se a cada 60–90 minutos, nem que seja por alguns minutos.",
        "Fora do trabalho, caminhe cerca de 30 minutos por dia, 5 dias por semana.",
      ],
    },
    3: {
      title: "Consumo de Álcool",
      icon: COMMON_TEXT.icon3,
      why: "Não existe um nível de consumo de álcool considerado totalmente seguro, estando mesmo consumos baixos associados a maior risco de doença hepática, metabólica e alguns cancros.",
      todo: [
        "Prefira bebidas sem álcool em contextos sociais (água com gás, água aromatizada, bebidas zero açúcar).",
        "Se consumir álcool, reserve-o para ocasiões pontuais e preferencialmente durante as refeições.",
        "Alterne sempre com água e evite consumo frequente durante a semana.",
      ],
    },
    4: {
      title: "Tabaco",
      icon: COMMON_TEXT.icon4,
      why: "Fumar duplica ou triplica o risco de doença cardiovascular e leva à morte prematura de cerca de 1 em cada 2 fumadores a longo prazo.",
      todo: [
        "Reduzir já traz benefícios imediatos para a saúde.",
        "Procure apoio médico ou programas de cessação tabágica.",
        "Substitua a pausa para fumar por uma pequena caminhada.",
      ],
    },
    5: {
      title: "Consumo de Fruta e Vegetais",
      icon: COMMON_TEXT.icon5,
      why: "Uma ingestão adequada de fruta e vegetais está associada a uma redução de cerca de 30% no risco de doença cardiovascular, melhor saúde intestinal e maior longevidade.",
      todo: [
        "Inclua legumes no prato principal (sopa, salada ou legumes cozinhados).",
        "Consuma fruta em pelo menos dois momentos do dia, como lanche ou sobremesa.",
        "Cozinhe legumes ou sopa para a semana e prepare marmitas que incluam fruta e legumes em todas as refeições principais.",
      ],
    },
    6: {
      title: "Bebidas Açucaradas",
      icon: COMMON_TEXT.icon6,
      why: "O consumo diário de bebidas açucaradas aumenta o risco de diabetes tipo 2 em cerca de 25% por cada bebida ingerida por dia, contribuindo também para aumento de peso e alterações metabólicas.",
      todo: [
        "Substitua refrigerantes e sumos por água, água com gás ou chá sem açúcar.",
        "Se o consumo for habitual, reduza de forma gradual.",
        "Tenha sempre uma garrafa de água acessível durante o dia de trabalho.",
      ],
    },
    7: {
      title: "Alimentos Ultraprocessados",
      icon: COMMON_TEXT.icon7,
      why: "O consumo frequente de alimentos ultraprocessados está associado a maior ingestão calórica espontânea, ganho de peso significativo em poucos dias e a um aumento relevante do risco de doença cardiovascular. Estes efeitos estão ligados à composição destes alimentos, ricos em açúcares, gorduras e aditivos e pobres em fibra e micronutrientes.",
      todo: [
        "Use as regras práticas: se não conseguir identificar os ingredientes principais, evite e quanto menos ingredientes e menor o rótulo, melhor.",
        "Em lanches no trabalho, troque bolachas, pastelaria ou snacks de pacote por fruta, iogurte natural ou um punhado pequeno de frutos secos.",
        "Em refeições fora, escolha pratos com alimentos reconhecíveis (ex.: carne ou peixe grelhado, legumes, arroz ou batata) e evite molhos, fritos e combinações muito processadas.",
      ],
    },
    8: {
      title: "Horário de Trabalho",
      icon: COMMON_TEXT.icon8,
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
      icon: COMMON_TEXT.icon1,
      why: "Getting too little or irregular sleep doubles the risk of developing type 2 diabetes, and is also associated with metabolic changes and poorer blood sugar control.",
      todo: [
        "Try to go to bed and wake up at similar times, even on days off.",
        "Avoid heavy meals, alcohol, and bright screens in the last hour before bed.",
        "If you work shifts, keep consistent routines and a suitable sleep environment (dark and quiet).",
      ],
    },
    2: {
      title: "Physical Activity and Sedentary Behaviour",
      icon: COMMON_TEXT.icon2,
      why: "Regular physical activity reduces the risk of cardiovascular disease, type 2 diabetes, and premature mortality by 30–50% compared to sedentary lifestyles. Long periods of sitting have a negative impact even in physically active people.",
      todo: [
        "Whenever possible, take the stairs and use calls or breaks as an opportunity to move (walk, stretch).",
        "Break up long periods of sitting: stand up every 60–90 minutes, even if just for a few minutes.",
        "Outside work, aim to walk for about 30 minutes a day, 5 days a week.",
      ],
    },
    3: {
      title: "Alcohol Consumption",
      icon: COMMON_TEXT.icon3,
      why: "There is no level of alcohol consumption considered completely safe. Even low consumption is associated with a higher risk of liver disease, metabolic conditions, and some cancers.",
      todo: [
        "Opt for alcohol-free drinks in social settings (sparkling water, flavoured water, sugar-free drinks).",
        "If you do drink alcohol, keep it for occasional moments and preferably with meals.",
        "Always alternate with water and avoid drinking frequently during the week.",
      ],
    },
    4: {
      title: "Tobacco",
      icon: COMMON_TEXT.icon4,
      why: "Smoking doubles or triples the risk of cardiovascular disease and leads to the premature death of approximately 1 in 2 long-term smokers.",
      todo: [
        "Cutting down already brings immediate health benefits.",
        "Seek medical support or smoking cessation programmes.",
        "Replace your smoking break with a short walk.",
      ],
    },
    5: {
      title: "Fruit and Vegetable Intake",
      icon: COMMON_TEXT.icon5,
      why: "Adequate intake of fruit and vegetables is associated with a roughly 30% reduction in cardiovascular disease risk, better gut health, and greater longevity.",
      todo: [
        "Include vegetables in your main meal (soup, salad, or cooked vegetables).",
        "Eat fruit at least twice a day, as a snack or dessert.",
        "Cook vegetables or soup for the week and prepare packed meals that include fruit and vegetables in every main meal.",
      ],
    },
    6: {
      title: "Sugary Drinks",
      icon: COMMON_TEXT.icon6,
      why: "Daily consumption of sugary drinks increases the risk of type 2 diabetes by around 25% per drink per day, and also contributes to weight gain and metabolic changes.",
      todo: [
        "Replace soft drinks and juices with water, sparkling water, or unsweetened tea.",
        "If the habit is ingrained, reduce consumption gradually.",
        "Always keep a bottle of water within reach during your working day.",
      ],
    },
    7: {
      title: "Ultra-processed Foods",
      icon: COMMON_TEXT.icon7,
      why: "Frequent consumption of ultra-processed foods is associated with higher spontaneous calorie intake, significant weight gain within days, and a relevant increase in cardiovascular disease risk. These effects are linked to the composition of these foods, which are high in sugars, fats, and additives and low in fibre and micronutrients.",
      todo: [
        "Use this practical rule: if you cannot identify the main ingredients, avoid it — the fewer ingredients and the shorter the label, the better.",
        "For work snacks, swap biscuits, pastries, or packaged snacks for fruit, plain yoghurt, or a small handful of nuts.",
        "When eating out, choose dishes with recognisable ingredients (e.g. grilled meat or fish, vegetables, rice or potatoes) and avoid sauces, fried foods, and heavily processed combinations.",
      ],
    },
    8: {
      title: "Work Schedule",
      icon: COMMON_TEXT.icon8,
      why: "Shift work requires extra attention to managing sleep, diet, and energy throughout the day. Evidence shows that, in these settings, appropriate strategies for organising routines help preserve metabolic and cardiovascular wellbeing over time.",
      todo: [
        "During night shifts or irregular hours, favour lighter, simpler meals, avoiding large amounts of sweets, fried foods, or fast food.",
        "Plan meals and snacks before your shift to avoid impulsive choices.",
        "Whenever possible, maintain consistent rest routines and a suitable sleep environment (dark and quiet), adjusted to your schedule.",
      ],
    },
  },
};

export const PDF_TEXT = {
    pt: {
      subtitle: "As suas recomendações personalizadas",
      intro: "As recomendações abaixo foram selecionadas com base nas suas respostas e representam as áreas com maior potencial de melhoria. Não precisa de mudar tudo de uma vez — comece por uma ou duas prioridades.",
      dayLabel: "O que pode fazer no dia a dia:",
      whyLabel: "Porque é importante:",
      nextTitle: COMMON_TEXT.pt.nextTitle,
      nextP1: COMMON_TEXT.pt.nextP1,
      nextP2: COMMON_TEXT.pt.nextP2,
      nextP3: COMMON_TEXT.pt.nextP3,
      nextLink: `Partilhe este questionário com alguém importante para si e que queira cuidar, através do link: ${PORTUGUESE_LINK}`,
      footer: "NutriCheck+  •  Recomendações Personalizadas",
      filename: "recomendacoes_nutricheck.pdf",
      dateLocale: "pt-PT",
    },
    
    eng:{
      subtitle: "Your personalised recommendations",
      intro: "The recommendations below were selected based on your answers and represent the areas with the greatest potential for improvement. You don't need to change everything at once — start with one or two priorities.",
      dayLabel: "What you can do every day:",
      whyLabel: "Why it matters:",
      nextTitle: COMMON_TEXT.eng.nextTitle,
      nextP1: COMMON_TEXT.eng.nextP1,
      nextP2: COMMON_TEXT.eng.nextP2,
      nextP3: COMMON_TEXT.eng.nextP3,
      nextLink: `Share this questionnaire with someone you care about, using the link: ${ENGLISH_LINK}`,
      footer: "NutriCheck+  •  Personalised Recommendations",
      filename: "recommendations_nutricheck.pdf",
      dateLocale: "en-GB",
    },
  };