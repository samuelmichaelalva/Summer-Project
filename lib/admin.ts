import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

export async function getAdmin() {
  const token = (await cookies()).get("janseva_session")?.value;
  const session = token && verifyToken(token);
  if (!session) return null;
  const user = await prisma.user.findUnique({ where: { id: session.id }, select: { id: true, name: true, contact: true, role: true, active: true } });
  return user?.active && user.role === "ADMIN" ? user : null;
}
