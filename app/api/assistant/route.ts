import { NextResponse } from "next/server";
import { topMatchedSchemes } from "@/lib/eligibility";

export async function POST(request: Request) {
  const { message = "" } = await request.json().catch(() => ({ message: "" }));
  const top = topMatchedSchemes[0];
  const lower = String(message).toLowerCase();
  const answer = lower.includes("document")
    ? `${top.title} usually needs: ${top.documents.join(", ")}.`
    : lower.includes("education")
      ? "For education support, Vidya Siri Scholarship is a strong match if your student and income details are correct."
      : `Your strongest match is ${top.title} with ${top.readiness}% readiness because ${top.reasons[0]?.toLowerCase()}.`;

  return NextResponse.json({ answer });
}
