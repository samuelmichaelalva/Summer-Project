import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

export async function POST(request: Request) {
  const {
    message = "",
    language = "English",
    context = "",
    history = [],
  } = await request.json().catch(() => ({}));

  const languageMap: Record<string, string> = {
    English: "English",
    "हिन्दी": "Hindi",
    "বাংলা": "Bengali",
    "தமிழ்": "Tamil",
    "తెలుగు": "Telugu",
  };

  const replyLanguage = languageMap[language] ?? "English";
  if (!message.trim()) return NextResponse.json({ answer: "Please ask a question." }, { status: 400 });
  const key = process.env.GEMINI_API_KEY;

  try {
    const token = (await cookies()).get("janseva_session")?.value;
    const user = token ? verifyToken(token) : null;
    const [profile, schemes] = await Promise.all([
      user ? prisma.citizenProfile.findUnique({ where: { userId: user.id } }) : null,
      prisma.scheme.findMany({ include: { translations: { where: { language: "English" } }, requirements: { include: { translations: { where: { language: "English" } } } } }, take: 100 }),
    ]);
    const facts = { page: context, profile: profile ? { state: profile.state, district: profile.district, gender: profile.gender, category: profile.socialCategory, income: profile.incomeBand, occupation: profile.occupation } : null, schemes: schemes.map((s) => ({ name: s.translations[0]?.title, category: s.category, state: s.state, ministry: s.ministry, details: s.translations[0]?.benefit, requirements: s.requirements.flatMap((r) => r.translations.map((t) => t.label)) })) };
    if (!key) {
      const fallback: Record<string, string> = {
        English: `JanSeva AI is ready to help with government schemes, eligibility, and required documents. Ask about ${facts.schemes[0]?.name || "a scheme"}.`,
        Hindi: `JanSeva AI सरकारी योजनाओं, पात्रता और आवश्यक दस्तावेज़ों में सहायता करने के लिए तैयार है। ${facts.schemes[0]?.name || "किसी योजना"} के बारे में पूछें।`,
        Bengali: `JanSeva AI সরকারি প্রকল্প, যোগ্যতা এবং প্রয়োজনীয় নথি সম্পর্কে সাহায্য করতে প্রস্তুত। ${facts.schemes[0]?.name || "কোনও প্রকল্প"} সম্পর্কে জিজ্ঞাসা করুন।`,
        Tamil: `JanSeva AI அரசு திட்டங்கள், தகுதி மற்றும் தேவையான ஆவணங்கள் குறித்து உதவத் தயாராக உள்ளது. ${facts.schemes[0]?.name || "ஒரு திட்டம்"} பற்றி கேளுங்கள்.`,
        Telugu: `JanSeva AI ప్రభుత్వ పథకాలు, అర్హత మరియు అవసరమైన పత్రాల గురించి సహాయం చేయడానికి సిద్ధంగా ఉంది. ${facts.schemes[0]?.name || "ఒక పథకం"} గురించి అడగండి.`,
      };
      return NextResponse.json({ answer: fallback[replyLanguage] || fallback.English });
    }
    const prompt = `You are JanSeva AI, a concise Indian government-scheme assistant. Answer only from the supplied data for schemes and eligibility. Never invent benefits, deadlines, eligibility, or links. Reply in 3-6 short lines with a heading and bullets when useful. If data is missing, say what is needed.

Your response language is STRICTLY ${replyLanguage}.

Rules:
- Respond ONLY in ${replyLanguage}.
- Never mix languages in the same response.
- Never reply in English unless replyLanguage is English.
- Keep the brand names "JanSeva" and "JanSeva AI" exactly in English.
- Keep official government scheme names in English.
- If the user writes in a different language than the selected UI language, still reply in ${replyLanguage}.

Page: ${context}\nConversation: ${JSON.stringify(Array.isArray(history) ? history.slice(-8) : [])}\nLive JanSeva data: ${JSON.stringify(facts)}\nUser Question (${replyLanguage}):\n\n${message}`;
    const configuredModel = process.env.GEMINI_MODEL?.trim();
    const model = configuredModel === "gemini-2.5-flash-lite" ? configuredModel : "gemini-2.5-flash";
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key }, body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 220 } }) });
    const data = await response.json();
    if (!response.ok) { console.error("Gemini assistant error:", response.status, data); return NextResponse.json({ answer: "JanSeva AI is temporarily unavailable." }, { status: 502 }); }
    const answer = data.candidates?.flatMap((candidate: { content?: { parts?: { text?: string; thought?: boolean }[] } }) => candidate.content?.parts || []).filter((part: { text?: string; thought?: boolean }) => part.text?.trim() && !part.thought).map((part: { text?: string }) => part.text!.trim()).join("\n").trim();
    return NextResponse.json({ answer: answer || "I could not prepare an answer." });
  } catch (error) {
    console.error("Assistant backend error:", error);
    return NextResponse.json({ answer: "JanSeva AI is temporarily unavailable." }, { status: 502 });
  }
}
