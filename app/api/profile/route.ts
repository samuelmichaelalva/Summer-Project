import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";

async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("janseva_session");
  if (!sessionCookie || !sessionCookie.value) return null;
  return verifyToken(sessionCookie.value);
}

export async function GET() {
  try {
    const session = await getSessionUser();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user and profile
    const user = await prisma.user.findUnique({
      where: { id: session.id },
      include: { profile: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const profileData = {
      name: user.name,
      language: user.preferredLanguage,
      state: user.profile?.state || "",
      district: user.profile?.district || "",
      householdSize: user.profile?.householdSize ? `${user.profile.householdSize} members` : "",
      primaryNeed: user.profile?.primaryNeed || "",
      income: user.profile?.incomeBand || "",
      occupation: user.profile?.occupation || "",
      bank: user.profile?.hasBankAccount ? "Available" : "Not available",
      hasAadhaar: user.profile?.hasAadhaar || false,
      completionPercent: user.profile?.completionPercent || 0,
    };

    return NextResponse.json({ success: true, profile: profileData });
  } catch (error) {
    console.error("Profile GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSessionUser();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const {
      name,
      language,
      state,
      district,
      householdSize,
      primaryNeed,
      income,
      occupation,
      bank,
      hasAadhaar,
    } = data;

    // Parse household size number
    const householdSizeNum = parseInt(householdSize) || 1;
    const isBankAccountAvailable = bank === "Available";
    const aadhaarStatus = !!hasAadhaar;

    // Calculate completion percentage
    const fields = [state, district, householdSize, primaryNeed, income, occupation];
    const filledFields = fields.filter(Boolean).length;
    const completionPercent = Math.round((filledFields / fields.length) * 100);

    // Update User Name and Language
    await prisma.user.update({
      where: { id: session.id },
      data: {
        name: name || session.name,
        preferredLanguage: language || "English",
      },
    });

    // Upsert Citizen Profile
    const profile = await prisma.citizenProfile.upsert({
      where: { userId: session.id },
      update: {
        state: state || "",
        district: district || "",
        incomeBand: income || "",
        occupation: occupation || "",
        householdSize: householdSizeNum,
        primaryNeed: primaryNeed || "",
        hasBankAccount: isBankAccountAvailable,
        hasAadhaar: aadhaarStatus,
        completionPercent,
      },
      create: {
        userId: session.id,
        state: state || "",
        district: district || "",
        incomeBand: income || "",
        occupation: occupation || "",
        householdSize: householdSizeNum,
        primaryNeed: primaryNeed || "",
        hasBankAccount: isBankAccountAvailable,
        hasAadhaar: aadhaarStatus,
        completionPercent,
      },
    });

    return NextResponse.json({
      success: true,
      profile: {
        name: name || session.name,
        language: language || "English",
        state: profile.state,
        district: profile.district,
        householdSize: `${profile.householdSize} members`,
        primaryNeed: profile.primaryNeed,
        income: profile.incomeBand,
        occupation: profile.occupation,
        bank: profile.hasBankAccount ? "Available" : "Not available",
        hasAadhaar: profile.hasAadhaar,
        completionPercent: profile.completionPercent,
      },
    });
  } catch (error) {
    console.error("Profile POST error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
