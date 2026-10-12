import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional().default(""),
  month: z.string().max(40).optional().default(""),
  travellers: z.string().max(40).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  trip: z.string().max(200).optional().default(""),
  source: z.string().max(200).optional().default(""),
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  // TODO: forward to CRM and email the specialist team.
  console.log("[enquiry]", JSON.stringify(parsed.data));
  return NextResponse.json({ ok: true });
}
