"use client";

import { useMemo, useState } from "react";
import { QUIZ_QUESTIONS } from "@/lib/quiz-questions";
import {
  ELEMENTS,
  ELEMENT_ORDER,
  scoreToNeurotype,
  type ElementId,
  type QuizScore,
} from "@/lib/neurotypes";
import { saveQuizLead } from "@/lib/supabase";

type Stage = "intro" | "question" | "result";

const EMPTY_SCORE: QuizScore = { air: 0, fire: 0, water: 0, earth: 0 };

export default function QuizFlow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ElementId>>({});

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const score = useMemo(() => {
    const s: QuizScore = { ...EMPTY_SCORE };
    for (const element of Object.values(answers)) s[element] += 1;
    return s;
  }, [answers]);

  const neurotype = useMemo(() => scoreToNeurotype(score), [score]);

  function handleAnswer(questionId: string, element: ElementId) {
    const next = { ...answers, [questionId]: element };
    setAnswers(next);
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStage("result");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    const { error } = await saveQuizLead({
      email,
      neurotype_slug: neurotype.slug,
      shining_element: neurotype.shining,
      support_element: neurotype.support,
      answers,
      research_group_consent: consent,
    });
    setSubmitting(false);
    if (error) {
      setSubmitError("Не получилось сохранить — попробуйте ещё раз.");
      return;
    }
    setSubmitted(true);
  }

  if (stage === "intro") {
    return (
      <div className="mx-auto max-w-xl text-center py-16 px-6">
        <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
          Бесплатный квиз · 2 минуты
        </div>
        <h1 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl mt-4 text-balance">
          Узнайте свой Нейротип
        </h1>
        <p className="text-ink-soft text-lg mt-5 leading-relaxed">
          12 коротких вопросов по методу F4QUUS CODE — и вы получите свой базовый
          Нейротип: главный талант, инструмент его раскрытия и персональный
          маршрут дальше.
        </p>
        <button
          onClick={() => setStage("question")}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-90 transition"
        >
          Начать тест
        </button>
      </div>
    );
  }

  if (stage === "question") {
    const q = QUIZ_QUESTIONS[step];
    const progress = Math.round((step / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="mx-auto max-w-xl py-14 px-6">
        <div className="h-1.5 w-full rounded-full bg-line overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-[family-name:var(--font-label)] text-xs tracking-[0.1em] uppercase text-ink-faint mt-4">
          Вопрос {step + 1} из {QUIZ_QUESTIONS.length}
        </div>
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-2xl sm:text-3xl mt-4 text-balance">
          {q.prompt}
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.element}
              onClick={() => handleAnswer(q.id, opt.element)}
              className="text-left rounded-xl border border-line bg-paper-raised px-5 py-4 hover:border-accent hover:bg-accent-soft transition"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // stage === "result"
  return (
    <div className="mx-auto max-w-xl py-14 px-6">
      <div className="font-[family-name:var(--font-label)] font-bold text-xs tracking-[0.14em] uppercase text-gold">
        Ваш базовый Нейротип
      </div>
      <h1 className="font-[family-name:var(--font-display)] font-semibold text-3xl sm:text-4xl mt-4 text-balance">
        {neurotype.title}
      </h1>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="rounded-full border border-line bg-teal-soft text-teal font-[family-name:var(--font-label)] font-semibold text-xs px-3 py-1.5">
          Зона Сияния · {ELEMENTS[neurotype.shining].element}
        </span>
        <span className="rounded-full border border-line bg-gold-soft text-gold font-[family-name:var(--font-label)] font-semibold text-xs px-3 py-1.5">
          Зона Поддержки · {ELEMENTS[neurotype.support].element}
        </span>
      </div>
      <p className="text-ink-soft text-lg mt-5 leading-relaxed">{neurotype.description}</p>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-line bg-teal-soft p-6">
          <p className="text-ink font-medium">
            Готово — полный разбор вашего типа отправлен на почту.
          </p>
          <p className="text-ink-soft text-sm mt-2">
            Дальше — присоединяйтесь к Исследовательской группе (ссылка появится
            здесь после запуска чата).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
          <label className="text-sm font-medium text-ink" htmlFor="email">
            Оставьте e-mail, чтобы получить полный разбор типа
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-xl border border-line bg-paper-raised px-4 py-3 outline-none focus:border-accent"
          />
          <label className="flex items-start gap-2 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            Согласен(на) участвовать в Исследовательской группе — короткие опросы
            о том, как понимание Нейротипа влияет на мою жизнь.
          </label>
          {submitError && <p className="text-sm text-red-600">{submitError}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent text-paper-raised font-[family-name:var(--font-label)] font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-90 transition disabled:opacity-60"
          >
            {submitting ? "Отправляем…" : "Получить полный разбор"}
          </button>
        </form>
      )}

      <div className="mt-10 pt-6 border-t border-line text-xs text-ink-faint">
        Баланс ответов —{" "}
        {ELEMENT_ORDER.map((id) => `${ELEMENTS[id].element}: ${score[id]}`).join(" · ")}
      </div>
    </div>
  );
}
