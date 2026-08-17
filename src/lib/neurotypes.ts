// Данные метода F4QUUS CODE: 4 стихии → 8 базовых Нейротипов.
// Источник: "Матрица продуктов F4QUUS ENGINE — версия 2".
// Тексты описаний — черновик первой версии, синтезированный из формулировок
// документа. Финальные формулировки типов — за Ксенией, это её метод.

export type ElementId = "air" | "fire" | "water" | "earth";

export interface ElementInfo {
  id: ElementId;
  element: string; // Воздух / Огонь / Вода / Земля
  archetype: string; // Стратег / Исследователь / Дипломат / Мастер
  focus: string;
  opposite: ElementId;
}

export const ELEMENTS: Record<ElementId, ElementInfo> = {
  air: {
    id: "air",
    element: "Воздух",
    archetype: "Стратег",
    focus: "структура, логика, системы",
    opposite: "water",
  },
  fire: {
    id: "fire",
    element: "Огонь",
    archetype: "Исследователь",
    focus: "идеи, движение, новое",
    opposite: "earth",
  },
  water: {
    id: "water",
    element: "Вода",
    archetype: "Дипломат",
    focus: "отношения, эмоциональная связь, коммуникация",
    opposite: "air",
  },
  earth: {
    id: "earth",
    element: "Земля",
    archetype: "Мастер",
    focus: "воплощение, ресурс, устойчивость",
    opposite: "fire",
  },
};

export const ELEMENT_ORDER: ElementId[] = ["air", "fire", "water", "earth"];

export interface NeurotypeInfo {
  slug: string;
  shining: ElementId; // Зона Сияния — главный талант
  support: ElementId; // Зона Поддержки — инструмент раскрытия таланта
  title: string; // "Стратег-Исследователь"
  description: string;
}

// Комбинации ограничены соседними по кругу стихиями:
// Воздух–Огонь–Вода–Земля–Воздух. Стихия никогда не поддерживает свою
// противоположность (Воздух/Вода и Огонь/Земля исключены).
export const NEUROTYPES: NeurotypeInfo[] = [
  {
    slug: "air-fire",
    shining: "air",
    support: "fire",
    title: "Стратег-Исследователь",
    description:
      "Талант — выстраивать структуру и системы; инструмент раскрытия — скорость и готовность пробовать новое. Вы видите порядок там, где другие видят хаос, и умеете первыми запускать то, что только что придумали.",
  },
  {
    slug: "air-earth",
    shining: "air",
    support: "earth",
    title: "Стратег-Мастер",
    description:
      "Талант — структура и системы; инструмент раскрытия — устойчивость и доведение до результата. Вы строите системы, которые не разваливаются, и превращаете план в осязаемый результат.",
  },
  {
    slug: "fire-water",
    shining: "fire",
    support: "water",
    title: "Исследователь-Дипломат",
    description:
      "Талант — идеи и движение; инструмент раскрытия — эмоциональная связь и коммуникация. Вы заражаете идеями через отношения и превращаете новое в общее дело.",
  },
  {
    slug: "fire-air",
    shining: "fire",
    support: "air",
    title: "Исследователь-Стратег",
    description:
      "Талант — идеи и движение; инструмент раскрытия — структура и логика. Вы генерируете новое и умеете быстро упаковать это в работающую систему.",
  },
  {
    slug: "water-earth",
    shining: "water",
    support: "earth",
    title: "Дипломат-Мастер",
    description:
      "Талант — отношения и эмоциональная связь; инструмент раскрытия — устойчивость и ресурс. Вы создаёте глубокие связи и умеете делать их надёжными и долгосрочными.",
  },
  {
    slug: "water-fire",
    shining: "water",
    support: "fire",
    title: "Дипломат-Исследователь",
    description:
      "Талант — отношения и эмоциональная связь; инструмент раскрытия — новизна и движение. Вы чувствуете людей и умеете вносить в отношения свежесть и живость.",
  },
  {
    slug: "earth-air",
    shining: "earth",
    support: "air",
    title: "Мастер-Стратег",
    description:
      "Талант — воплощение и устойчивость; инструмент раскрытия — структура и логика. Вы доводите дело до результата по чёткой, повторяемой системе.",
  },
  {
    slug: "earth-water",
    shining: "earth",
    support: "water",
    title: "Мастер-Дипломат",
    description:
      "Талант — воплощение и устойчивость; инструмент раскрытия — отношения и коммуникация. Вы надёжная опора и умеете превращать эту устойчивость в глубокие связи с людьми.",
  },
];

export function findNeurotype(shining: ElementId, support: ElementId): NeurotypeInfo {
  const match = NEUROTYPES.find((n) => n.shining === shining && n.support === support);
  if (match) return match;
  // Защита на случай, если сойдутся противоположные стихии (не должно
  // происходить при верном подсчёте очков) — откатываемся на первую
  // поддержку того же Сияния.
  return NEUROTYPES.find((n) => n.shining === shining)!;
}

export interface QuizScore {
  air: number;
  fire: number;
  water: number;
  earth: number;
}

export function scoreToNeurotype(score: QuizScore): NeurotypeInfo {
  const entries = ELEMENT_ORDER.map((id) => [id, score[id]] as const);
  const shining = entries.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
  const oppositeOfShining = ELEMENTS[shining].opposite;
  const supportCandidates = entries.filter(
    ([id]) => id !== shining && id !== oppositeOfShining
  );
  const support = supportCandidates.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
  return findNeurotype(shining, support);
}
