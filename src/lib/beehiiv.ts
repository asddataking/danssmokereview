import "server-only";

import type { NewsletterSource } from "@/lib/newsletter";
import { SITE_URL } from "@/lib/constants";

const BEEHIIV_API_BASE = "https://api.beehiiv.com/v2";

/** Beehiiv v2 API expects the prefixed ID (e.g. pub_…), not the bare UUID. */
function resolvePublicationId(raw: string | undefined): string | undefined {
  const id = raw?.trim();
  if (!id) return undefined;
  return id.startsWith("pub_") ? id : `pub_${id}`;
}

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string; status?: number };

export async function subscribeToNewsletter(
  email: string,
  source: NewsletterSource,
): Promise<SubscribeResult> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = resolvePublicationId(process.env.BEEHIIV_PUBLICATION_ID);

  if (!apiKey || !publicationId) {
    console.error("[beehiiv] Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
    return {
      ok: false,
      error: "Newsletter signup is not configured yet. Try again soon.",
    };
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const response = await fetch(
      `${BEEHIIV_API_BASE}/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source,
          referring_site: SITE_URL,
        }),
      },
    );

    if (response.ok) {
      return { ok: true };
    }

    const body = (await response.json().catch(() => null)) as {
      errors?: { message?: string }[];
      message?: string;
    } | null;

    const apiMessage =
      body?.errors?.[0]?.message ?? body?.message ?? "Unable to subscribe right now.";

    if (response.status === 400 && /already/i.test(apiMessage)) {
      return { ok: true };
    }

    if (response.status === 429) {
      return {
        ok: false,
        error: "Too many attempts. Give it a minute and try again.",
        status: 429,
      };
    }

    return { ok: false, error: apiMessage, status: response.status };
  } catch {
    return {
      ok: false,
      error: "Something went wrong on our end. Please try again.",
    };
  }
}
