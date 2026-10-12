import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  newsletter: z.boolean(),
  brochure: z.string().max(120),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  // TODO: send the PDF via the email provider and add to the newsletter list / CRM.
  console.log("[brochure] request", parsed.data);
  return NextResponse.json({ ok: true });
}
