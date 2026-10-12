import { NextResponse } from "next/server";
import { plannerSchema } from "@/lib/planner";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = plannerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid request", issues: parsed.error.issues }, { status: 400 });
  }
  const reference = `TIE-${Date.now().toString(36).toUpperCase()}`;
  // TODO: forward to the CRM (e.g. HubSpot / Pipedrive) and send a confirmation
  // email to the traveller plus a notification to the specialist team.
  console.log("[planner] new enquiry", reference, JSON.stringify(parsed.data, null, 2));
  return NextResponse.json({ ok: true, reference });
}
