"use server";

import { after } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { notifyInquiry } from "./notify";

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
    return { ok: false, message: "Please provide your name, email, and a short description of your needs." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return { ok: false, message: "Please add a little more detail about your project." };
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
    after(() => notifyInquiry(record));
    return {
      ok: true,
      storage: "log",
      message: "Thank you. We will reply within one business day.",
    };
  }

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await supabase
      .from("inquiries")
      .insert(record)
      .select("id")
      .single();
    if (error) {
      console.error("[inquiry:db-error]", error);
      return {
        ok: false,
        message:
          "We could not save your message. Please email us directly at hello@jayporelabs.com.",
      };
    }
    // Saved first; email afterwards so a mail failure never loses an inquiry.
    after(() => notifyInquiry(record, data?.id));
    return {
      ok: true,
      storage: "supabase",
      message: "Thank you. We will reply within one business day.",
    };
  } catch (err) {
    console.error("[inquiry:exception]", err);
    return {
      ok: false,
      message:
        "Something went wrong on our side. Please email us at hello@jayporelabs.com.",
    };
  }
}
