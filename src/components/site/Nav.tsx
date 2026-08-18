import Link from "next/link";

const LINKS = [
  { href: "/method", label: "О методе" },
  { href: "/neurotypes", label: "Нейротипы" },
  { href: "/products", label: "Продукты" },
  { href: "/book", label: "Книга" },
  { href: "/blog", label: "Блог" },
];

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-label)] font-bold text-sm tracking-[0.14em] uppercase text-ink shrink-0"
        >
          F4QUUS CODE
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-5 py-2.5 text-sm tracking-wide hover:opacity-90 transition shrink-0"
        >
          Пройти квиз
        </Link>
      </div>
    </header>
  );
}
