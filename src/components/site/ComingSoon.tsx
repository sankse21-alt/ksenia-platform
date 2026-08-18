export default function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
        {eyebrow}
      </div>
      <h1 className="font-[family-name:var(--font-display)] font-semibold text-4xl mt-4 text-balance">
        {title}
      </h1>
      <p className="text-ink-soft text-lg mt-5 leading-relaxed">{description}</p>
      <div className="mt-8 inline-block rounded-full border border-line bg-paper-raised px-5 py-2.5 text-sm text-ink-faint">
        Страница в разработке
      </div>
    </main>
  );
}
