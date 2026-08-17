import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl text-center py-24 px-6">
        <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-ink-soft">
          F4QUUS CODE
        </div>
        <h1 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl mt-5 text-balance">
          Больше не напрягайся
        </h1>
        <p className="text-ink-soft text-lg mt-5 leading-relaxed">
          Как улучшить качество жизни, понимая свой Нейротип. Метод и система
          типирования Ксении Ларсен.
        </p>
        <Link
          href="/quiz"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-90 transition"
        >
          Пройти бесплатный квиз
        </Link>
      </div>
    </main>
  );
}
