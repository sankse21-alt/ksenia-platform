import type { Metadata } from "next";
import { Playfair_Display, Golos_Text, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const golosText = Golos_Text({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-label",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "F4QUUS CODE — узнайте свой Нейротип",
  description:
    "Метод F4QUUS CODE и система Нейротипов Ксении Ларсен. Пройдите бесплатный квиз и узнайте, какой персонализированный маршрут подходит именно вам.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${golosText.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
