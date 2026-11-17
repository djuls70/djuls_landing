const modularCircuits = {
  mod1: {
    modCode: "MOD.01 // ROLE",
    painQuestion: "Нужно повысить отдачу ключевых людей и убрать рутину на рабочих местах?",
    cardTitle: "AI-ассистенты для сотрудников и руководителей",
    mobileAiHeader: "AI:CORE // АССИСТЕНТ",
    mobileOrder: [0, 1, 2, 3, 4, 6, 7, 5, 8],
    title: "Архитектура решения // AI-ассистенты для сотрудников и руководителей",
    summary: "AI-ассистент помогает сотрудникам и руководителям работать быстрее и точнее: берет на себя рутину, страхует от ошибок, готовит документы и кратно повышает качество ежедневных решений.",
    ctaText: "Запросить прототип AI-ассистента →",
    modules: [
      { tag: "CHANNELS", badge: "Сбор задач", title: "Мессенджеры и чаты" },
      { tag: "MEETINGS", badge: "Автопротокол", title: "Встречи и планерки" },
      { tag: "CORP:SOFT", badge: "Синхронизация", title: "Корпоративный софт" },
      { tag: "KNOWLEDGE", badge: "Быстрый поиск", title: "База знаний" },
      { isAi: true, tag: "AI:CORE", badge: "AI-Ассистент", title: "Центральный AI-модуль" },
      { tag: "TASKS", badge: "Напоминания", title: "Контроль задач" },
      { tag: "STANDARDS", badge: "Чек-листы роли", title: "Регламенты должности" },
      { tag: "PROJECTS", badge: "Контрольные точки", title: "Управление проектами" },
      { tag: "ARTIFACTS", badge: "Черновики в 1 клик", title: "Документы и отчеты" }
    ]
  },
  mod2: {
    modCode: "MOD.02 // PROCESS",
    painQuestion: "Нужно навести порядок в процессах и снизить зависимость от незаменимых людей?",
    cardTitle: "Внедрение нейросетей в операционную деятельность",
    mobileAiHeader: "AI:CORE // ОРКЕСТРАТОР",
    mobileOrder: [0, 1, 2, 3, 4, 5, 7, 6, 8],
    title: "Архитектура решения // Внедрение нейросетей в операционную деятельность",
    summary: "AI-оркестратор связывает процессы и следит за порядком в компании: исключает потерю клиентских заявок, контролирует соблюдение регламентов, защищает маржинальность проектов и P&L компании.",
    ctaText: "Запросить операционный аудит →",
    modules: [
      { tag: "DEPT:SALES", badge: "Разбор заявок", title: "Отдел продаж" },
      { tag: "DEPT:PROD", badge: "Контроль качества", title: "Производство" },
      { tag: "DEPT:SUPPLY", badge: "Контроль остатков", title: "Склад и ресурсы" },
      { tag: "DEPT:FINANCE", badge: "Контроль маржи", title: "Финансовый контур" },
      { isAi: true, tag: "AI:CORE", badge: "AI-Оркестратор", title: "Центральный AI-модуль" },
      { tag: "KNOWLEDGE", badge: "ИИ-Википедия", title: "База знаний" },
      { tag: "DEPT:HR", badge: "Наставничество", title: "Команда и найм" },
      { tag: "RETENTION", badge: "Повторные продажи", title: "Сервис и LTV" },
      { tag: "DASHBOARD", badge: "P&L онлайн", title: "Дашборд руководителя" }
    ]
  },
  mod3: {
    modCode: "MOD.03 // SYSTEM",
    painQuestion: "Бизнес перерос типовые CRM и таблицы, а готовые решения не поддерживают вашу логику?",
    cardTitle: "Заказная разработка сложных решений под ключ",
    mobileAiHeader: "AI:CORE // ИНТЕЛЛЕКТ",
    mobileOrder: [0, 1, 2, 3, 4, 5, 7, 6, 8],
    title: "Архитектура решения // Заказная разработка сложных решений под ключ",
    summary: "Собственное IT-решение точно под задачи вашего бизнеса: автоматизирует уникальные процессы компании, дает возможности для масштабирования и создает независимый цифровой актив.",
    ctaText: "Обсудить разработку софта →",
    modules: [
      { tag: "UI:SYSTEMS", badge: "Web & Mobile", title: "Интерфейсы системы" },
      { tag: "API:GATEWAY", badge: "Связка сервисов", title: "Шина данных и API" },
      { tag: "SECURITY", badge: "Защита данных", title: "Безопасность" },
      { tag: "CORE:ENGINE", badge: "Логика бизнеса", title: "Серверное ядро" },
      { isAi: true, tag: "AI:CORE", badge: "AI-Интеллект", title: "Центральный AI-модуль" },
      { tag: "DATABASE", badge: "100% сохранность", title: "База данных" },
      { tag: "SYNC:1C-ERP", badge: "Сквозной учет", title: "Интерфейс 1С / ERP" },
      { tag: "PERMISSIONS", badge: "Матрица прав", title: "Ролевой доступ" },
      { tag: "INFRA:ON-PREM", badge: "Легальность", title: "Сервер в контуре РФ" }
    ]
  }
};

let currentCircuitKey = 'mod1';

function switchProductCircuit(circuitKey) {
  currentCircuitKey = circuitKey;
  const data = modularCircuits[circuitKey];
  if (!data) return;

  // 1. Обновление визуального состояния табов
  ['mod1', 'mod2', 'mod3'].forEach(key => {
    const btn = document.getElementById('tab-btn-' + key);
    if (!btn) return;
    const indicator = btn.querySelector('.tab-indicator');

    if (key === circuitKey) {
      btn.className = "btn-tactile p-4 rounded-lg text-left transition-all bg-white text-titanium-textPrimary shadow-sm border border-zinc-300 ring-1 ring-zinc-200";
      if (indicator) indicator.className = "w-2 h-2 rounded-full bg-titanium-flame tab-indicator";
    } else {
      btn.className = "btn-tactile p-4 rounded-lg text-left transition-all text-zinc-600 hover:text-zinc-900 hover:bg-white/60 border border-transparent";
      if (indicator) indicator.className = "w-2 h-2 rounded-full bg-zinc-300 tab-indicator";
    }
  });

  // 2. Обновление заголовка, описания и кнопки
  document.getElementById('canvas-status-pipeline').innerText = data.title;
  document.getElementById('circuit-summary-desc').innerText = data.summary;
  document.getElementById('circuit-cta-btn').innerText = data.ctaText;

  // 3. Динамическая генерация 9 модулей
  const gridContainer = document.getElementById('modular-canvas-grid');
  gridContainer.innerHTML = '';

  data.modules.forEach((m, index) => {
    const cardEl = document.createElement('div');
    cardEl.setAttribute('data-card-index', index);

    let borderStyle = "border border-zinc-200 bg-white";
    let badgeStyle = "bg-zinc-100 text-zinc-700 font-tech";
    let dotStyle = '<span class="node-dot w-1.5 h-1.5 rounded-full bg-zinc-300 transition-colors"></span>';
    let innerWrapperOpen = '';
    let innerWrapperClose = '';

    if (m.isAi) {
      borderStyle = "ai-core-beam shadow-xs ring-1 ring-zinc-300 cursor-pointer";
      badgeStyle = "bg-titanium-flameLight text-titanium-flame font-bold border border-titanium-flameBorder";
      dotStyle = '<span class="w-2 h-2 rounded-full bg-titanium-flame beacon-active"></span>';
      innerWrapperOpen = '<div class="ai-core-inner p-2.5 sm:p-3 md:p-4 flex flex-col justify-between">';
      innerWrapperClose = '</div>';
    } else {
      borderStyle = `node-card rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xs flex flex-col justify-between ${borderStyle} cursor-pointer`;
    }

    cardEl.className = `relative min-h-[74px] md:min-h-[82px] col-span-1 card-mount ${borderStyle}`;
    cardEl.style.animationDelay = `${index * 16}ms`;

    cardEl.innerHTML = `
      ${innerWrapperOpen}
      <div class="flex items-center justify-between text-[9px] md:text-[10px] font-tech text-zinc-400 mb-1.5 md:mb-2">
        <span class="font-bold tracking-tight">${m.tag}</span>
        <div class="flex items-center gap-1.5">
          <span class="px-1.5 py-0.5 rounded ${badgeStyle} text-[8px] md:text-[9px] font-tech">${m.badge}</span>
          ${dotStyle}
        </div>
      </div>
      <div class="text-[11px] sm:text-xs md:text-sm font-bold text-titanium-textPrimary tracking-tight leading-tight">
        ${m.title}
      </div>
      ${innerWrapperClose}
    `;

    gridContainer.appendChild(cardEl);
  });
}

function renderMobileCarousel() {
  const carousel = document.getElementById('mobile-products-carousel');
  if (!carousel) return;

  const keys = ['mod1', 'mod2', 'mod3'];
  carousel.innerHTML = keys.map((key, slideIdx) => {
    const data = modularCircuits[key];
    const modulesHtml = data.mobileOrder.map(idx => {
      const m = data.modules[idx];
      if (m.isAi) {
        return `
          <div class="col-span-2 p-3 rounded-lg border border-zinc-400 bg-white ring-1 ring-zinc-200 shadow-xs flex items-center justify-between">
            <div>
              <span class="text-[9px] font-tech text-titanium-flame font-bold block">${data.mobileAiHeader}</span>
              <span class="text-xs font-extrabold text-zinc-900 block">${m.title}</span>
            </div>
            <span class="w-2.5 h-2.5 rounded-full bg-titanium-flame beacon-active flex-shrink-0"></span>
          </div>`;
      }
      return `
        <div class="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/50 min-h-[62px] flex flex-col justify-start">
          <span class="text-[9px] font-tech text-zinc-400 block mb-1">${m.tag}</span>
          <span class="text-xs font-bold text-zinc-900 block leading-tight">${m.title}</span>
        </div>`;
    }).join('');

    return `
      <div class="w-[86vw] flex-shrink-0 snap-center bg-white border border-zinc-300 rounded-2xl p-5 shadow-node flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2.5">
            <span class="text-[10px] font-tech text-zinc-700 font-bold bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
              ${data.modCode}
            </span>
            <span class="text-[10px] font-tech text-titanium-flame font-bold bg-titanium-flameLight px-2 py-0.5 rounded border border-titanium-flameBorder">
              СЛАЙД ${slideIdx + 1} / 3
            </span>
          </div>
          <span class="text-xs text-titanium-flame font-bold block mb-1.5 leading-snug">
            ${data.painQuestion}
          </span>
          <h3 class="text-base font-extrabold text-titanium-textPrimary tracking-tight mb-4">
            ${data.cardTitle}
          </h3>
          <div class="grid grid-cols-2 gap-2 mb-4">
            ${modulesHtml}
          </div>
        </div>
        <div class="pt-3 border-t border-zinc-200 space-y-3">
          <p class="text-xs text-titanium-textSecondary leading-relaxed">
            ${data.summary}
          </p>
          <a href="#contact-form" onclick="selectChipByCircuit('${key}')" class="btn-tactile w-full inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold text-white bg-titanium-obsidian hover:bg-black rounded-lg font-tech shadow-hud border border-titanium-obsidian hover:border-black">
            ${data.ctaText}
          </a>
        </div>
      </div>`;
  }).join('');
}

// Состояние чипов терминала связи
const topicChipsState = {
  mod1: false,
  mod2: false,
  mod3: false
};

const topicLabels = {
  mod1: "AI-ассистенты",
  mod2: "ИИ-операционка",
  mod3: "Разработка софта"
};

function updateTerminalLinks() {
  const selectedTopics = [];
  if (topicChipsState.mod1) selectedTopics.push(topicLabels.mod1);
  if (topicChipsState.mod2) selectedTopics.push(topicLabels.mod2);
  if (topicChipsState.mod3) selectedTopics.push(topicLabels.mod3);

  let messageText = "Здравствуйте! Хочу разобрать задачу и наметить план решения.";
  if (selectedTopics.length > 0) {
    messageText = "Здравствуйте! Хочу обсудить тему: " + selectedTopics.join(", ") + ".";
  }

  const encoded = encodeURIComponent(messageText);
  const tgBtn = document.getElementById('terminal-tg-btn');
  const waBtn = document.getElementById('terminal-wa-btn');

  if (tgBtn) tgBtn.href = "https://t.me/SerjMuzikin?text=" + encoded;
  if (waBtn) waBtn.href = "https://wa.me/79234460153?text=" + encoded;
}

function updateChipVisual(chipKey) {
  const chipBtn = document.getElementById('chip-' + chipKey);
  if (!chipBtn) return;
  const isSelected = topicChipsState[chipKey];
  const iconSpan = chipBtn.querySelector('.chip-icon');

  if (isSelected) {
    chipBtn.className = "topic-chip btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-tech transition-all bg-titanium-flameLight border-titanium-flame text-titanium-flame font-semibold shadow-xs focus:outline-none";
    if (iconSpan) {
      iconSpan.innerText = "✓";
      iconSpan.className = "chip-icon text-[11px] font-bold text-titanium-flame";
    }
  } else {
    chipBtn.className = "topic-chip btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-tech transition-all bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 focus:outline-none";
    if (iconSpan) {
      iconSpan.innerText = "+";
      iconSpan.className = "chip-icon text-[11px] font-bold text-zinc-400";
    }
  }
}

function toggleTopicChip(chipKey) {
  topicChipsState[chipKey] = !topicChipsState[chipKey];
  updateChipVisual(chipKey);
  updateTerminalLinks();
}

function selectChipByCircuit(circuitKey) {
  Object.keys(topicChipsState).forEach(k => {
    topicChipsState[k] = (k === circuitKey);
  });
  ['mod1', 'mod2', 'mod3'].forEach(updateChipVisual);
  updateTerminalLinks();
}

function copyContactEmail(btn) {
  const email = "muzikin.s@yandex.ru";
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    const badge = document.getElementById('copy-badge');
    if (badge) {
      badge.innerText = "скопировано";
      badge.className = "text-[11px] font-bold text-titanium-flame transition-colors flex-shrink-0";
      btn.classList.remove('border-zinc-300');
      btn.classList.add('border-titanium-flame', 'bg-orange-50/20');
      setTimeout(() => {
        badge.innerText = "скопировать";
        badge.className = "text-[11px] font-semibold text-zinc-400 group-hover:text-zinc-700 transition-colors flex-shrink-0";
        btn.classList.remove('border-titanium-flame', 'bg-orange-50/20');
        btn.classList.add('border-zinc-300');
      }, 2200);
    }
  } catch (err) {}
  document.body.removeChild(tempInput);
}

window.addEventListener('DOMContentLoaded', () => {
  switchProductCircuit('mod1');
  renderMobileCarousel();
  updateTerminalLinks();
});
