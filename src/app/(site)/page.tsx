import Link from "next/link";
import Image from "next/image";

const LIFE_CARDS = [
  {
    eyebrow: "Исследовательский проект",
    title: "Исследовательский проект",
    body: "Мы исследуем, как понимание своего нейротипа и персонифицированный подход влияют на результаты человека, его отношения, реализацию и качество жизни. Что меняется, когда вы начинаете понимать, как именно думаете, принимаете решения, реагируете на стресс и взаимодействуете с другими людьми — и перестаёте требовать от себя быть кем-то другим.",
    cta: "Принять участие",
    href: "/research-group",
  },
  {
    eyebrow: "Вебинары и практикумы",
    title: "Вебинары и практикумы",
    body: "Практические инструменты для конкретных жизненных задач — в отношениях, деньгах, реализации и качестве жизни. Не универсальные советы, а возможность глубже разобраться в своей ситуации, увидеть привычные сценарии и найти решение, которое учитывает ваши индивидуальные особенности.",
    cta: "Смотреть продукты",
    href: "/products",
  },
  {
    eyebrow: "Флагман",
    title: "Выйти из паутины созависимых отношений",
    body: "Для тех, кто устал терять себя в отношениях, жить между надеждой и разочарованием и снова возвращаться в один и тот же сценарий. Путь к отношениям, в которых близость больше не требует отказываться от себя, своих границ, желаний и собственной жизни.",
    cta: "Подробнее",
    href: "/codependency",
  },
  {
    eyebrow: "Флагман",
    title: "Триумф женщины",
    body: "Четыре кода — новая норма жизни. Персонифицированный путь к изменениям в любви, деньгах, реализации и жизненном тонусе — через понимание своего психотипа и собственной природы. Не становиться другой. Понять себя, перестать жить по чужим стратегиям и сделать более высокое качество жизни своей нормой.",
    cta: "Подробнее",
    href: "/triumph",
  },
  {
    eyebrow: "Персональная работа",
    title: "Индивидуальная консультация",
    body: "Персональная работа с Ксенией Ларсен, когда есть конкретная ситуация, сложный выбор или вопрос, который требует профессионального взгляда. Разобраться в происходящем, увидеть то, что сложно увидеть изнутри, и определить следующий шаг с учётом именно ваших особенностей.",
    cta: "Записаться на консультацию",
    href: "/consultation",
  },
];

const FREE_ENTRIES = [
  { label: "Исследование нейротип код", href: "/quiz" },
  { label: "Master Workshop", href: "/free" },
  { label: "PDF №1", href: "/free" },
  { label: "PDF №2", href: "/free" },
];

export default function Home() {
  return (
    <main>
      {/* 01 — Герой: УТП + фото */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl leading-[1.1] text-balance">
            Станьте главным человеком в своей жизни.
          </h1>
          <div className="text-ink-soft text-lg mt-6 max-w-lg leading-relaxed flex flex-col gap-4">
            <p>
              Если вы хотите повысить качество своей жизни и перестать следовать
              универсальным советам, которые не учитывают именно вас, — вы в
              правильном месте.
            </p>
            <p>
              <b className="text-ink">Ксения Ларсен</b> — предприниматель,
              психолог, коуч и автор <b className="text-ink">F4QUUS CODE</b> —
              метода персонифицированного подхода к изменениям, который
              учитывает ваш нейротип: как вы думаете, принимаете решения,
              действуете и реагируете на стресс.
            </p>
            <p>
              Забудьте всё, что вы знали об универсальных способах достижения
              результатов. Большие изменения начинаются с понимания себя — и
              позволяют поднять привычную норму жизни на новый уровень.
            </p>
          </div>
          <Link
            href="/quiz"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition"
          >
            Узнать свой нейротип
          </Link>
        </div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-line relative">
          <Image
            src="/brand/ksenia-portrait.jpg"
            alt="Ксения Ларсен"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 02 — Заглушки видео YouTube */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-video rounded-2xl border border-line bg-paper-raised flex items-center justify-center"
            >
              <span className="font-[family-name:var(--font-label)] text-xs tracking-[0.1em] uppercase text-ink-faint">
                YouTube-видео {n}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Повысьте качество своей жизни: 6 карточек */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl sm:text-4xl text-balance">
          Повысьте качество своей жизни
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {LIFE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-line bg-paper-raised p-7 flex flex-col"
            >
              <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.12em] uppercase text-gold">
                {card.eyebrow}
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl mt-3">
                {card.title}
              </h3>
              <p className="text-ink-soft text-sm mt-3 leading-relaxed flex-1">
                {card.body}
              </p>
              <Link
                href={card.href}
                className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-line bg-paper text-ink font-[family-name:var(--font-label)] font-semibold px-5 py-2.5 text-sm tracking-wide hover:border-accent transition"
              >
                {card.cta}
              </Link>
            </div>
          ))}
          {/* 6-я карточка — ещё не определена */}
          <div className="rounded-2xl border border-dashed border-line p-7 flex flex-col items-start justify-center text-ink-faint">
            <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.12em] uppercase">
              Скоро
            </div>
            <p className="text-sm mt-3">Шестое направление уточняется.</p>
          </div>
        </div>
      </section>

      {/* 04 — Ксения Ларсен (заглушка) */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="rounded-3xl border border-line bg-paper-raised p-10 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-line shrink-0 relative">
            <Image
              src="/brand/ksenia-portrait.jpg"
              alt="Ксения Ларсен"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-2xl">
              Ксения Ларсен
            </h2>
            <p className="text-ink-faint text-sm mt-2">
              Раздел о Ксении — в разработке.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — Начните бесплатно */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl text-balance">
          Начните бесплатно
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {FREE_ENTRIES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-line bg-paper-raised px-5 py-6 text-center font-[family-name:var(--font-label)] font-semibold text-sm hover:border-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* 06 — Книга + серия Нейротип Workbook */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
              Книга · Метод F4QUUS CODE
            </div>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl mt-4">
              Больше не напрягайся
            </h2>
            <p className="text-ink-soft text-lg mt-3 leading-relaxed">
              Как повысить качество жизни в любви, деньгах и реализации,
              понимая свой Нейротип.
            </p>
            <div className="mt-4 inline-block rounded-full bg-gold-soft text-gold font-[family-name:var(--font-label)] font-semibold text-xs px-3 py-1.5">
              Персонализированный подход
            </div>
            <Link
              href="/book"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition"
            >
              Подробнее о книге
            </Link>
          </div>
          <div>
            <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.12em] uppercase text-ink-faint">
              Серия
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="aspect-[3/4] rounded-xl border border-line bg-paper-raised flex items-center justify-center font-[family-name:var(--font-display)] text-xl text-ink-faint"
                >
                  {n}
                </div>
              ))}
            </div>
            <Link
              href="/quiz"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-line bg-paper text-ink font-[family-name:var(--font-label)] font-semibold px-6 py-3 text-sm tracking-wide hover:border-accent transition"
            >
              Найти Workbook своего нейротипа
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — Финальный CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <div className="rounded-3xl bg-accent px-10 py-14 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl sm:text-4xl text-paper-raised text-balance">
            Начни бесплатно
          </h2>
          <Link
            href="/quiz"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-paper-raised text-ink font-[family-name:var(--font-label)] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-90 transition"
          >
            Узнать свой нейротип
          </Link>
        </div>
      </section>
    </main>
  );
}
