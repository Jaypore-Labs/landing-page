type InquiryRecord = {
  name: string;
  email: string;
  company: string | null;
  budget: string | null;
  message: string;
  source: string;
  heard_from: string | null;
  ai_prompt: string | null;
};

const DEFAULT_TO = "yashshh123@gmail.com";
// resend.dev works before jayporelabs.com is verified in Resend, but only
// delivers to the Resend account owner. Set INQUIRY_FROM_EMAIL to an
// @jayporelabs.com address once the domain is verified.
const DEFAULT_FROM = "Jaypore Labs <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Emails a new inquiry to the team via Resend. Runs after the row is saved,
 * so a mail failure never loses an inquiry; errors are only logged.
 */
export async function notifyInquiry(record: InquiryRecord, id?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[inquiry:notify] RESEND_API_KEY missing; email skipped");
    return;
  }

  const to = (process.env.INQUIRY_NOTIFY_EMAIL || DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.INQUIRY_FROM_EMAIL || DEFAULT_FROM;

  const rows: [string, string][] = [
    ["Name", record.name],
    ["Email", record.email],
    ["Company", record.company || "Not given"],
    ["Budget", record.budget || "Not given"],
    ["Source", record.source],
    ["Found us via", record.heard_from || "Not given"],
    ...(record.ai_prompt ? ([["AI prompt", record.ai_prompt]] as [string, string][]) : []),
  ];

  const text = [
    `New inquiry from ${record.name}`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    record.message,
    "",
    id ? `Supabase id: ${id}` : "",
    "Reply to this email to answer the sender directly.",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:600px">
      <h2 style="margin:0 0 16px">New inquiry from ${escapeHtml(record.name)}</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:0 0 4px;color:#666">Message</p>
      <p style="margin:0 0 16px;white-space:pre-wrap">${escapeHtml(record.message)}</p>
      <p style="color:#999;font-size:12px">${id ? `Supabase id: ${escapeHtml(id)}<br>` : ""}Reply to this email to answer the sender directly.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: record.email,
        subject: `New inquiry: ${record.name}${record.company ? ` (${record.company})` : ""}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[inquiry:notify] Resend error", res.status, await res.text());
    }
  } catch (err) {
    console.error("[inquiry:notify] exception", err);
  }
}
