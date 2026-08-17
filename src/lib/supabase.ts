import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Пока Supabase-проект не создан и переменные окружения не заданы,
// клиент остаётся null — квиз при этом всё равно работает, просто не
// сохраняет лиды. См. .env.local.example и supabase/schema.sql.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export interface QuizLead {
  email: string;
  neurotype_slug: string;
  shining_element: string;
  support_element: string;
  answers: Record<string, string>;
  research_group_consent: boolean;
}

export async function saveQuizLead(lead: QuizLead) {
  if (!supabase) {
    console.warn("Supabase не настроен — лид не сохранён:", lead);
    return { error: null, skipped: true as const };
  }
  const { error } = await supabase.from("quiz_leads").insert(lead);
  return { error, skipped: false as const };
}
