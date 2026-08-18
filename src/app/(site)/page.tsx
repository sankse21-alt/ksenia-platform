import Link from "next/link";
import { ELEMENT_ORDER, ELEMENTS } from "@/lib/neurotypes";

export default function Home() {
  return (
    <main>
      {/* Hero — по структуре danielpriestley.com: крупный заголовок слева,
          портрет справа, две CTA-кнопки одна под другой. */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-balance">
            Больше не напрягайся.
          </h1>
          <p className="text-ink-soft text-lg mt-6 max-w-md leading-relaxed">
            Как улучшить качество жизни, понимая свой Нейротип. Метод{" "}
            <b className="text-ink">F4QUUS CODE</b> и система типирования Ксении
            Ларсен — персонализированный путь вместо универсальных советов.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition"
            >
              Пройти бесплатный квиз
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center justify-center rounded-full border border-line bg-paper-raised text-ink font-[family-name:var(--font-label)] font-semibold px-7 py-3.5 text-sm tracking-wide hover:border-accent transition"
            >
              Узнать о методе
            </Link>
          </div>
        </div>
        {/* TODO: заменить на настоящий портрет Ксении, когда будут ассеты. */}
        <div className="aspect-[4/5] rounded-3xl bg-teal-soft border border-line flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-teal text-2xl">
            Ксения Ларсен
          </span>
        </div>
      </section>

      {/* Метод */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="max-w-xl">
          <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
            Метод
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl mt-4">
            F4QUUS CODE
          </h2>
          <p className="text-ink-soft text-lg mt-4 leading-relaxed">
            Инструмент перехода от текущего Факта А к желаемому Факту Б —
            без попыток «починить» человека. Нейротип — одна из четырёх линз
            метода, которая делает путь к изменениям персонализированным.
          </p>
          <Link href="/method" className="inline-block mt-5 text-accent font-medium hover:underline">
            Как устроен метод →
          </Link>
        </div>
      </section>

      {/* Нейротипы */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
          Типология
        </div>
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl mt-4 max-w-xl">
          Четыре стихии, ваш персональный Нейротип
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {ELEMENT_ORDER.map((id) => (
            <div key={id} className="rounded-2xl border border-line bg-paper-raised p-6">
              <div className="font-[family-name:var(--font-label)] text-xs uppercase tracking-wide text-ink-faint">
                {ELEMENTS[id].element}
              </div>
              <div className="font-[family-name:var(--font-display)] font-semibold text-xl mt-2">
                {ELEMENTS[id].archetype}
              </div>
              <p className="text-ink-soft text-sm mt-2">{ELEMENTS[id].focus}</p>
            </div>
          ))}
        </div>
        <Link href="/quiz" className="inline-block mt-6 text-accent font-medium hover:underline">
          Пройти квиз и узнать свой тип →
        </Link>
      </section>

      {/* Продукты */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
          Экосистема
        </div>
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl mt-4 max-w-xl">
          Маршрут под вашу задачу
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="rounded-2xl border border-line bg-paper-raised p-6">
            <div className="font-[family-name:var(--font-display)] font-semibold text-lg">
              Нейротип Workbook
            </div>
            <p className="text-ink-soft text-sm mt-2">
              Персональная практика на каждый базовый тип
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-raised p-6">
            <div className="font-[family-name:var(--font-display)] font-semibold text-lg">
              Клубная система
            </div>
            <p className="text-ink-soft text-sm mt-2">
              4 трека: любовь, деньги, реализация, витальность
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-raised p-6">
            <div className="font-[family-name:var(--font-display)] font-semibold text-lg">
              TRIUMPH
            </div>
            <p className="text-ink-soft text-sm mt-2">
              Флагманский системный маршрут на 3 месяца
            </p>
          </div>
        </div>
        <Link href="/products" className="inline-block mt-6 text-accent font-medium hover:underline">
          Смотреть все продукты →
        </Link>
      </section>

      {/* Исследовательская группа */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="rounded-3xl bg-teal-soft border border-line p-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-2xl text-teal">
              Исследовательская группа
            </h2>
            <p className="text-ink-soft mt-2 max-w-md">
              Бесплатное сообщество: как понимание Нейротипа влияет на решения
              и качество жизни. Баллы за участие — на продукты в магазине.
            </p>
          </div>
          <Link
            href="/research-group"
            className="inline-flex items-center justify-center rounded-full bg-teal text-paper-raised font-[family-name:var(--font-label)] font-semibold px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition shrink-0"
          >
            Присоединиться
          </Link>
        </div>
      </section>
    </main>
  );
}
