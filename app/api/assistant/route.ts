import { NextResponse } from "next/server";
import { topMatchedSchemes } from "@/lib/eligibility";

export async function POST(request: Request) {
  const { message = "", context = "" } = await request.json().catch(() => ({ message: "", context: "" }));
  const top = topMatchedSchemes[0];
  const lower = String(message).toLowerCase();
  const pageHint = String(context).includes("profile") ? " You are on the profile page, so complete and save your details to improve matching." : String(context).includes("scheme") ? " You are browsing schemes; open a scheme to see its eligibility and application steps." : "";
  const answer = lower.includes("document")
    ? `${top.title} usually needs: ${top.documents.join(", ")}.`
    : lower.includes("education")
      ? "For education support, Vidya Siri Scholarship is a strong match if your student and income details are correct."
      : `Your strongest match is ${top.title} with ${top.readiness}% readiness because ${top.reasons[0]?.toLowerCase()}.${pageHint}`;

  return NextResponse.json({ answer });
}
