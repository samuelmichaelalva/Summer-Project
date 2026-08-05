import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

async function user() {
  const token = (await cookies()).get("janseva_session")?.value;
  const session = token && verifyToken(token);
  return session && prisma.user.findUnique({ where: { id: session.id }, select: { id: true, preferredLanguage: true } });
}

export async function GET() {
  const current = await user();
  if (!current) return NextResponse.json({ error: "Login required" }, { status: 401 });
  const settings = await prisma.userSettings.upsert({ where: { userId: current.id }, update: {}, create: { userId: current.id } });
  return NextResponse.json({ settings, language: current.preferredLanguage });
}

export async function POST(request: Request) {
  const current = await user();
  if (!current) return NextResponse.json({ error: "Login required" }, { status: 401 });
  const body = await request.json();
  const { language, ...values } = body;
  const allowed = ["theme", "notificationsSchemes", "notificationsMatches", "notificationsApplications", "showSensitiveAmounts", "profileReminders", "compactDashboard", "highContrast", "largerLabels"];
  const data = Object.fromEntries(Object.entries(values).filter(([key, value]) => allowed.includes(key) && (typeof value === "boolean" || key === "theme" && ["light", "dark", "system"].includes(String(value)))));
  const settings = await prisma.userSettings.upsert({ where: { userId: current.id }, update: data, create: { userId: current.id, ...data } });
  if (language) await prisma.user.update({ where: { id: current.id }, data: { preferredLanguage: language } });
  return NextResponse.json({ settings, language: language || current.preferredLanguage });
}
