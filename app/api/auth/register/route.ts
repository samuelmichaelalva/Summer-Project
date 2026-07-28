import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, signToken } from "@/lib/crypto-utils";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { name, contact, password } = await request.json();

    if (!name || !contact || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(name)) {
      return NextResponse.json({ error: "Enter a valid name using letters and spaces" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { contact },
    });

    if (existing) {
      return NextResponse.json({ error: "Contact already registered" }, { status: 400 });
    }

    const passwordHash = hashPassword(password);

    // Create user in DB
    const user = await prisma.user.create({
      data: {
        name: name.trim().replace(/\s+/g, " "),
        contact,
        passwordHash,
        preferredLanguage: "English",
      },
    });

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
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
