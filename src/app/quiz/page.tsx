import type { Metadata } from "next";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Узнайте свой Нейротип — квиз F4QUUS CODE",
  description:
    "Бесплатный квиз на 12 вопросов: узнайте свой базовый Нейротип по методу F4QUUS CODE и получите персональный маршрут.",
};

export default function QuizPage() {
  return (
    <main className="min-h-screen">
      <QuizFlow />
    </main>
  );
}
