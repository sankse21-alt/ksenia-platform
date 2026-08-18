import Link from "next/link";

const COLUMNS = [
  {
    title: "Платформа",
    links: [
      { href: "/method", label: "О методе F4QUUS CODE" },
      { href: "/neurotypes", label: "Нейротипы" },
      { href: "/products", label: "Продукты" },
      { href: "/quiz", label: "Пройти квиз" },
    ],
  },
  {
    title: "Материалы",
    links: [
      { href: "/book", label: "Книга «Больше не напрягайся»" },
      { href: "/blog", label: "Блог и кейсы" },
      { href: "/research-group", label: "Исследовательская группа" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="font-[family-name:var(--font-label)] font-bold text-sm tracking-[0.14em] uppercase text-ink">
            F4QUUS CODE
          </div>
          <p className="text-ink-soft text-sm mt-3 max-w-xs">
            Метод и система Нейротипов Ксении Ларсен.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-[family-name:var(--font-label)] font-semibold text-xs tracking-[0.08em] uppercase text-ink-faint">
              {col.title}
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink-soft hover:text-ink transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-ink-faint">
          © {new Date().getFullYear()} Ksenia Larsen · F4QUUS CODE
        </div>
      </div>
    </footer>
  );
}
