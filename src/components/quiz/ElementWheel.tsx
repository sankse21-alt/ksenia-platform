import {
  ELEMENTS,
  ELEMENT_ORDER,
  ELEMENT_SERIES_VAR,
  ELEMENT_SWATCH_CLASS,
  type QuizScore,
} from "@/lib/neurotypes";

// Донат-диаграмма распределения ответов по 4 стихиям (conic-gradient) +
// легенда с прямыми подписями — цвет никогда не единственный носитель
// смысла (dataviz: "identity is never color-alone").
const GAP_DEG = 3;

function buildConicGradient(score: QuizScore): string {
  const total = ELEMENT_ORDER.reduce((sum, id) => sum + score[id], 0) || 1;
  let cursor = 0;
  const stops: string[] = [];
  for (const id of ELEMENT_ORDER) {
    const share = (score[id] / total) * 360;
    const start = cursor;
    const end = cursor + Math.max(share - GAP_DEG, 0);
    stops.push(`${ELEMENT_SERIES_VAR[id]} ${start}deg ${end}deg`);
    stops.push(`var(--paper-raised) ${end}deg ${cursor + share}deg`);
    cursor += share;
  }
  return `conic-gradient(${stops.join(", ")})`;
}

export default function ElementWheel({
  score,
  centerLabel,
}: {
  score: QuizScore;
  centerLabel: string;
}) {
  const total = ELEMENT_ORDER.reduce((sum, id) => sum + score[id], 0);
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div
        className="relative shrink-0"
        style={{ width: 168, height: 168 }}
        role="img"
        aria-label={`Распределение ответов по стихиям: ${ELEMENT_ORDER.map(
          (id) => `${ELEMENTS[id].element} ${score[id]} из ${total}`
        ).join(", ")}`}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: buildConicGradient(score) }}
        />
        <div className="absolute rounded-full bg-paper-raised flex items-center justify-center text-center px-4" style={{ inset: 22 }}>
          <span className="font-[family-name:var(--font-display)] font-semibold text-sm leading-tight">
            {centerLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {ELEMENT_ORDER.map((id) => (
          <div key={id} className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${ELEMENT_SWATCH_CLASS[id]}`} />
            <span className="text-sm text-ink flex-1">
              {ELEMENTS[id].element} · {ELEMENTS[id].archetype}
            </span>
            <span className="text-sm font-semibold text-ink tabular-nums">
              {score[id]}/{total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
