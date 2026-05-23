import { subscribeToNewsletter } from "@/lib/beehiiv";
import {
  isValidNewsletterEmail,
  NEWSLETTER_SOURCES,
  type NewsletterSource,
} from "@/lib/newsletter";
import { NextResponse } from "next/server";

type SubscribeBody = {
  email?: string;
  source?: string;
};

function isNewsletterSource(value: string): value is NewsletterSource {
  return (NEWSLETTER_SOURCES as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: SubscribeBody;

  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email : "";
  const source =
    typeof body.source === "string" && isNewsletterSource(body.source)
      ? body.source
      : "subscribe_page";

  if (!isValidNewsletterEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const result = await subscribeToNewsletter(email, source);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status ?? 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
