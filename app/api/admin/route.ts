import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAdmin } from "@/lib/admin";

const deny = (status = 403) => NextResponse.json({ error: "Admin access required" }, { status });

export async function GET() {
  if (!(await getAdmin())) return deny();
  const [users, schemes, applications, statuses] = await Promise.all([
    prisma.user.findMany({ select: { id: true, name: true, contact: true, role: true, active: true, createdAt: true }, orderBy: { createdAt: "desc" } }),
    prisma.scheme.findMany({ include: { translations: { where: { language: "English" }, take: 1 } }, orderBy: { category: "asc" } }),
    prisma.application.count(), prisma.application.groupBy({ by: ["status"], _count: { _all: true } }),
  ]);
  return NextResponse.json({ users, schemes, stats: { users: users.length, schemes: schemes.length, applications, statuses } });
}

export async function POST(request: Request) {
  if (!(await getAdmin())) return deny();
  const body = await request.json();
  try {
    if (body.action === "deactivateUser") await prisma.user.update({ where: { id: body.id }, data: { active: false } });
    if (body.action === "deleteUser") await prisma.user.delete({ where: { id: body.id } });
    if (body.action === "deleteScheme") await prisma.scheme.delete({ where: { id: body.id } });
    if (body.action === "saveScheme") {
      const data = { slug: body.slug, category: body.category, state: body.state, ministry: body.ministry, translations: { upsert: { where: { schemeId_language: { schemeId: body.id || "", language: "English" } }, update: { title: body.title, benefit: body.benefit, amount: body.amount, deadline: body.deadline }, create: { language: "English", title: body.title, benefit: body.benefit, amount: body.amount, deadline: body.deadline } } } };
      if (body.id) await prisma.scheme.update({ where: { id: body.id }, data: data as never });
      else { const { translations, ...scheme } = data; await prisma.scheme.create({ data: { ...scheme, translations: { create: translations.upsert.create } } }); }
    }
    return NextResponse.json({ success: true });
  } catch (error) { console.error("Admin action error:", error); return NextResponse.json({ error: "Could not complete action" }, { status: 400 }); }
}
