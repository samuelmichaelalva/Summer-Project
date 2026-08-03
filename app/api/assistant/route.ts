import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

export async function POST(request: Request) {
  const { message = "", context = "", history = [] } = await request.json().catch(() => ({}));
  if (!message.trim()) return NextResponse.json({ answer: "Please ask a question." }, { status: 400 });
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: "JanSeva AI is not configured yet. Add OPENAI_API_KEY in Vercel." }, { status: 503 });

  const session = (await cookies()).get("janseva_session")?.value;
  const user = session ? verifyToken(session) : null;
  const [profile, schemes] = await Promise.all([
    user ? prisma.citizenProfile.findUnique({ where: { userId: user.id } }) : null,
    prisma.scheme.findMany({ include: { translations: { where: { language: "English" } }, requirements: { include: { translations: { where: { language: "English" } } } } }, take: 100 }),
  ]);
  const facts = { page: context, profile, schemes: schemes.map((s) => ({ category: s.category, state: s.state, ministry: s.ministry, details: s.translations[0], requirements: s.requirements.flatMap((r) => r.translations.map((t) => t.label)) })) };
  const input = [...(Array.isArray(history) ? history.slice(-8) : []), { role: "user", content: `Question: ${message}\nLive JanSeva data: ${JSON.stringify(facts)}` }];
  const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", instructions: "You are JanSeva AI, a concise Indian government-scheme assistant. Answer only from the supplied JanSeva data when discussing schemes or eligibility. Never invent eligibility, benefits, deadlines, or application links. Reply in 3-6 short lines, using a heading and bullets when useful. If data is missing, say what profile detail or official source is needed.", input, max_output_tokens: 220, store: false }) });
  const data = await response.json();
  return response.ok ? NextResponse.json({ answer: data.output_text || "I could not prepare an answer." }) : NextResponse.json({ answer: "JanSeva AI is temporarily unavailable." }, { status: 502 });
}
