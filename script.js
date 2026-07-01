// ── i18n ────────────────────────────────────────────────────
const i18n = {
  en: {
    "nav-cta":       "Download Free",
    "hero-badge":    "Now on the App Store",
    "hero-title":    "Pack smarter.<br>Travel <span class='accent'>worry-free.</span>",
    "hero-sub":      "Zip It! creates a personalized packing list based on your destination, weather, trip type, and who's traveling with you — so you never forget a thing.",
    "hero-cta":      "Download Free",
    "hero-cta2":     "See features",
    "stat1":         "Powered lists",
    "stat2":         "Weather-aware",
    "stat3":         "Unlimited trips",
    "feat-label":    "Features",
    "feat-title":    "Your trip.<br><span class='accent'>Your perfect list.</span>",
    "feat-sub":      "Every detail of your journey considered — from the weather in your destination to who's traveling with you.",
    "f1t": "Weather-Aware Packing",
    "f1d": "Live weather data determines which clothes and accessories you'll actually need. Winter in Paris? Flip flops in Maldives? We've got you.",
    "f2t": "AI-Powered Extras",
    "f2d": "Our on-device AI suggests destination-specific extras — hiking gear for mountain trips, beach essentials for tropical getaways.",
    "f3t": "Real-Time Checklist",
    "f3d": "Check off items as you pack, adjust quantities with a tap, and add your own custom items to any category.",
    "f4t": "Group & Family Trips",
    "f4d": "Traveling with kids or a baby? Zip It! automatically adds diapers, kids' medicine, entertainment, and more.",
    "f5t": "International Ready",
    "f5d": "Traveling abroad? Passport, visa reminders, travel insurance, and currency — everything you need for international trips.",
    "f6t": "Share Your List",
    "f6d": "Export and share your packing list with travel companions so everyone knows what to bring.",
    "how-label":  "How it works",
    "how-title":  "Ready in <span class='accent'>4 simple steps</span>",
    "s1t": "Enter destination", "s1d": "Type where you're going and select your travel dates.",
    "s2t": "Add travelers",     "s2d": "Solo, couple, family with kids or a baby — we adapt the list for everyone.",
    "s3t": "Choose activities", "s3d": "Hiking, beach, business meetings? Select what you'll be doing.",
    "s4t": "Pack & go!",        "s4d": "Your personalized list is ready. Check items off as you pack.",
    "price-label": "Pricing",
    "price-title": "Start for <span class='accent'>free.</span><br>Upgrade when ready.",
    "price-sub":   "Your first packing list is completely free. No credit card required.",
    "plan0-name": "Free",    "plan0-period": "Forever free",      "plan0-btn": "Get started",
    "plan0-f1": "1 packing list", "plan0-f2": "Weather-based suggestions", "plan0-f3": "All item categories", "plan0-f4": "Export & share",
    "plan1-name": "Monthly", "plan1-price": ",90/mo",             "plan1-period": "Billed monthly",   "plan1-btn": "Start monthly",
    "plan1-f1": "Unlimited packing lists", "plan1-f2": "AI-powered extras", "plan1-f3": "Family & group trips", "plan1-f4": "Priority updates",
    "plan2-badge": "Best Deal", "plan2-name": "Lifetime", "plan2-period": "One-time payment", "plan2-btn": "Get lifetime access",
    "plan2-f1": "Everything in Monthly", "plan2-f2": "All future features", "plan2-f3": "No recurring fees", "plan2-f4": "Lifetime access",
    "faq-label": "FAQ",
    "faq-title": "Got questions?<br><span class='accent'>We've got answers.</span>",
    "faq-q1": "Is Zip It! really free?",
    "faq-a1": "Yes! Your first packing list is completely free — no credit card required. Upgrade to Monthly or Lifetime whenever you're ready for unlimited lists and AI-powered extras.",
    "faq-q2": "Does it work without internet?",
    "faq-a2": "You need internet to generate your list (to fetch weather data and run the AI). Once the list is created, you can check off items completely offline — perfect for when you're already traveling.",
    "faq-q3": "Does it work for international trips?",
    "faq-a3": "Absolutely. Zip It! adds passport reminders, travel insurance, adapters, local currency notes, and destination-specific suggestions — everything you need when crossing borders.",
    "faq-q4": "Can I customize the list?",
    "faq-a4": "100%. Add your own items, remove anything you don't need, adjust quantities with a single tap, and organize by category. Your list, your rules.",
    "faq-q5": "Does it work for families and groups?",
    "faq-a5": "Yes! Tell Zip It! who's traveling — solo, couple, family with kids, or a baby — and the list adapts automatically. Diapers, kids' medicine, stroller, entertainment — all included when needed.",
    "faq-q6": "How does the AI know what to suggest?",
    "faq-a6": "It looks at your destination, travel dates, trip type (beach, business, adventure…), who's going, and the real weather forecast for your trip window. A ski trip to Patagonia in July gets a very different list than a weekend in Miami.",
    "cta-badge":  "Available Now",
    "cta-title":  "Start packing smarter<br><span class='accent'>today. For free.</span>",
    "cta-sub":    "Download Zip It! on the App Store — your first packing list is completely free.",
    "badge-sub":  "Download on the",
    "footer-privacy": "Privacy Policy", "footer-terms": "Terms & Conditions",
    "footer-contact": "Contact",        "footer-rights": "All rights reserved."
  },
  pt: {
    "nav-cta":       "Baixar Grátis",
    "hero-badge":    "Disponível na App Store",
    "hero-title":    "Mala feita.<br>Viaje <span class='accent'>sem estresse.</span>",
    "hero-sub":      "O Zip It! cria uma lista personalizada baseada no seu destino, clima, tipo de viagem e quem vai com você — para você não esquecer nada.",
    "hero-cta":      "Baixar Grátis",
    "hero-cta2":     "Ver funcionalidades",
    "stat1":         "Listas inteligentes",
    "stat2":         "Baseado no clima",
    "stat3":         "Viagens ilimitadas",
    "feat-label":    "Funcionalidades",
    "feat-title":    "Sua viagem.<br><span class='accent'>Sua lista perfeita.</span>",
    "feat-sub":      "Cada detalhe da sua viagem considerado — do clima no destino até quem vai com você.",
    "f1t": "Lista baseada no clima",
    "f1d": "Dados de clima em tempo real determinam quais roupas e acessórios você vai precisar. Inverno em Paris? Chinelo nas Maldivas? A gente cuida.",
    "f2t": "Extras com IA",
    "f2d": "Nossa IA sugere itens específicos para cada destino — equipamento de trilha para montanhas, essenciais para praias tropicais.",
    "f3t": "Checklist em tempo real",
    "f3d": "Marque os itens conforme embala, ajuste quantidades com um toque e adicione seus próprios itens.",
    "f4t": "Viagens em grupo e família",
    "f4d": "Viajando com crianças ou bebê? O Zip It! adiciona fraldas, remédios infantis, entretenimento e mais automaticamente.",
    "f5t": "Pronto para o exterior",
    "f5d": "Viajando para fora? Passaporte, lembretes de visto, seguro viagem e câmbio — tudo que você precisa.",
    "f6t": "Compartilhe sua lista",
    "f6d": "Exporte e compartilhe a sua lista com os companheiros de viagem para que todos saibam o que levar.",
    "how-label":  "Como funciona",
    "how-title":  "Pronto em <span class='accent'>4 passos simples</span>",
    "s1t": "Informe o destino",     "s1d": "Digite para onde vai e escolha as datas da viagem.",
    "s2t": "Adicione os viajantes", "s2d": "Solo, casal, família com crianças ou bebê — adaptamos a lista para todos.",
    "s3t": "Escolha as atividades", "s3d": "Trilha, praia, reuniões de negócios? Selecione o que você vai fazer.",
    "s4t": "Faça a mala e bora!",   "s4d": "Sua lista personalizada está pronta. Marque os itens enquanto embala.",
    "price-label": "Preços",
    "price-title": "Comece <span class='accent'>grátis.</span><br>Faça upgrade quando quiser.",
    "price-sub":   "Sua primeira lista é completamente grátis. Sem cartão de crédito.",
    "plan0-name": "Grátis",  "plan0-period": "Para sempre grátis",   "plan0-btn": "Começar grátis",
    "plan0-f1": "1 lista de mala", "plan0-f2": "Sugestões baseadas no clima", "plan0-f3": "Todas as categorias", "plan0-f4": "Exportar e compartilhar",
    "plan1-name": "Mensal",  "plan1-price": ",90/mês",               "plan1-period": "Cobrado mensalmente",  "plan1-btn": "Assinar mensal",
    "plan1-f1": "Listas ilimitadas", "plan1-f2": "Extras com IA", "plan1-f3": "Viagens em grupo e família", "plan1-f4": "Atualizações prioritárias",
    "plan2-badge": "Melhor Oferta", "plan2-name": "Vitalício", "plan2-period": "Pagamento único", "plan2-btn": "Acesso vitalício",
    "plan2-f1": "Tudo do plano Mensal", "plan2-f2": "Todas as funcionalidades futuras", "plan2-f3": "Sem mensalidade", "plan2-f4": "Acesso para sempre",
    "faq-label": "FAQ",
    "faq-title": "Ficou com dúvidas?<br><span class='accent'>A gente responde.</span>",
    "faq-q1": "O Zip It! é realmente grátis?",
    "faq-a1": "Sim! Sua primeira lista de mala é completamente grátis — sem cartão de crédito. Faça upgrade para Mensal ou Vitalício quando quiser listas ilimitadas e extras com IA.",
    "faq-q2": "Funciona sem internet?",
    "faq-a2": "Você precisa de internet para gerar a lista (para buscar dados do clima e rodar a IA). Depois que a lista está pronta, você pode marcar os itens sem conexão — perfeito para quando já estiver viajando.",
    "faq-q3": "Funciona para viagens internacionais?",
    "faq-a3": "Com certeza. O Zip It! inclui lembrete de passaporte, seguro viagem, adaptadores, notas sobre câmbio local e sugestões específicas do destino — tudo que você precisa ao cruzar fronteiras.",
    "faq-q4": "Posso personalizar a lista?",
    "faq-a4": "100%. Adicione seus próprios itens, remova o que não precisa, ajuste quantidades com um toque e organize por categoria. Sua lista, suas regras.",
    "faq-q5": "Funciona para famílias e grupos?",
    "faq-a5": "Sim! Informe quem vai na viagem — sozinho, casal, família com crianças ou bebê — e a lista se adapta automaticamente. Fraldas, remédios infantis, carrinho, entretenimento — tudo incluído quando necessário.",
    "faq-q6": "Como a IA sabe o que sugerir?",
    "faq-a6": "Ela analisa seu destino, datas da viagem, tipo de trip (praia, negócios, aventura…), quem vai e a previsão do tempo real para o período. Uma viagem de ski na Patagônia em julho recebe uma lista bem diferente de um fim de semana em Florianópolis.",
    "cta-badge":  "Disponível Agora",
    "cta-title":  "Comece a fazer sua mala<br><span class='accent'>hoje. De graça.</span>",
    "cta-sub":    "Baixe o Zip It! na App Store — sua primeira lista é completamente grátis.",
    "badge-sub":  "Disponível na",
    "footer-privacy": "Política de Privacidade", "footer-terms": "Termos e Condições",
    "footer-contact": "Contato",                 "footer-rights": "Todos os direitos reservados."
  }
};

// ── Language switcher ────────────────────────────────────────
function setLang(lang) {
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
}

// ── Intersection Observer (fade-in) ─────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Auto-detect browser language ────────────────────────────
const browserLang = (navigator.language || 'en').startsWith('pt') ? 'pt' : 'en';
setLang(browserLang);

// ── FAQ accordion ────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item   = btn.closest('.faq-item');
    var answer = btn.nextElementSibling;
    var isOpen = item.classList.contains('is-open');

    // fecha todos
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('is-open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      var a = i.querySelector('.faq-answer');
      if (a) a.classList.remove('open');
    });

    // abre o clicado (se estava fechado)
    if (!isOpen && answer) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});
