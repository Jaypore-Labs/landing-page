"use server";

import { createClient } from "@supabase/supabase-js";

export type InquiryInput = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  source?: string;
};

export type InquiryResult =
  | { ok: true; message: string; storage: "supabase" | "log" }
  | { ok: false; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const name = input.name?.trim();
  const email = input.email?.trim();
  const message = input.message?.trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Name, email, and a short brief are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "That email looks off — mind double-checking?" };
  }
  if (message.length < 10) {
    return { ok: false, message: "Tell us a little more — at least a sentence." };
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const record = {
    name,
    email,
    company: input.company?.trim() || null,
    budget: input.budget?.trim() || null,
    message,
    source: input.source?.trim() || "jayporelabs.com",
  };

  if (!url || !key) {
    // Fallback: persist to the server log so nothing gets lost while Supabase
    // env vars are still being configured. Shape mirrors the DB row exactly.
    console.log(
      "[inquiry]",
      JSON.stringify({ at: new Date().toISOString(), ...record })
    );
    return {
      ok: true,
      storage: "log",
      message: "Got it. We'll reply within 24 hours.",
    };
  }

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("inquiries").insert(record);
    if (error) {
      console.error("[inquiry:db-error]", error);
      return {
        ok: false,
        message:
          "We couldn't save your message. Email us directly at hello@jayporelabs.com?",
      };
    }
    return {
      ok: true,
      storage: "supabase",
      message: "Got it. We'll reply within 24 hours.",
    };
  } catch (err) {
    console.error("[inquiry:exception]", err);
    return {
      ok: false,
      message:
        "Something broke on our side. Email us at hello@jayporelabs.com and we'll sort it.",
    };
  }
}
