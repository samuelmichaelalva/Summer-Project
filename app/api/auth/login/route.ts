import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyPassword, signToken } from "@/lib/crypto-utils";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { contact, password } = await request.json();
    const normalizedContact = String(contact || "").trim().toLowerCase();

    if (!normalizedContact || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Find user in DB
    const user = await prisma.user.findUnique({
      where: { contact: normalizedContact },
    });

    if (!user || !user.passwordHash || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: "Invalid contact or password" }, { status: 401 });
    }

    // Create session token (JWT)
    const token = signToken({ id: user.id, name: user.name, contact: user.contact });

    // Set secure cookie
    const cookieStore = await cookies();
    cookieStore.set("janseva_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, contact: user.contact },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
