import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

export async function POST(request: Request) {
  const { message = "", context = "", history = [] } = await request.json().catch(() => ({}));
  if (!message.trim()) return NextResponse.json({ answer: "Please ask a question." }, { status: 400 });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ answer: "JanSeva AI is not configured yet." }, { status: 503 });

  try {
    const token = (await cookies()).get("janseva_session")?.value;
    const user = token ? verifyToken(token) : null;
    const [profile, schemes] = await Promise.all([
      user ? prisma.citizenProfile.findUnique({ where: { userId: user.id } }) : null,
      prisma.scheme.findMany({ include: { translations: { where: { language: "English" } }, requirements: { include: { translations: { where: { language: "English" } } } } }, take: 100 }),
    ]);
    const facts = { page: context, profile, schemes: schemes.map((s) => ({ category: s.category, state: s.state, ministry: s.ministry, details: s.translations[0], requirements: s.requirements.flatMap((r) => r.translations.map((t) => t.label)) })) };
    const prompt = `You are JanSeva AI, a concise Indian government-scheme assistant. Answer only from the supplied data for schemes and eligibility. Never invent benefits, deadlines, eligibility, or links. Reply in 3-6 short lines with a heading and bullets when useful. If data is missing, say what is needed.\n\nPage: ${context}\nConversation: ${JSON.stringify(Array.isArray(history) ? history.slice(-8) : [])}\nLive JanSeva data: ${JSON.stringify(facts)}\nQuestion: ${message}`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || "gemini-3.5-flash"}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key }, body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 220 } }) });
    const data = await response.json();
    if (!response.ok) { console.error("Gemini assistant error:", response.status, data); return NextResponse.json({ answer: "JanSeva AI is temporarily unavailable." }, { status: 502 }); }
    return NextResponse.json({ answer: data.candidates?.[0]?.content?.parts?.[0]?.text || "I could not prepare an answer." });
  } catch (error) {
    console.error("Assistant backend error:", error);
    return NextResponse.json({ answer: "JanSeva AI is temporarily unavailable." }, { status: 502 });
  }
}
