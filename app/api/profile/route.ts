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
      residenceType: user.profile?.residenceType || "",
      householdSize: user.profile?.householdSize ? `${user.profile.householdSize} members` : "",
      primaryNeed: user.profile?.primaryNeed || "",
      dateOfBirth: user.profile?.dateOfBirth || "",
      gender: user.profile?.gender || "",
      maritalStatus: user.profile?.maritalStatus || "",
      socialCategory: user.profile?.socialCategory || "General",
      minorityStatus: user.profile?.minorityStatus || "",
      disabilityStatus: user.profile?.disabilityStatus || "",
      educationLevel: user.profile?.educationLevel || "",
      employmentStatus: user.profile?.employmentStatus || "",
      landholding: user.profile?.landholding || "",
      houseOwnership: user.profile?.houseOwnership || "",
      rationCardType: user.profile?.rationCardType || "",
      lpgConnection: user.profile?.lpgConnection || "",
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
      residenceType,
      householdSize,
      primaryNeed,
      dateOfBirth,
      gender,
      maritalStatus,
      socialCategory,
      minorityStatus,
      disabilityStatus,
      educationLevel,
      employmentStatus,
      landholding,
      houseOwnership,
      rationCardType,
      lpgConnection,
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
    const fields = [state, district, residenceType, householdSize, primaryNeed, income, occupation, dateOfBirth, gender, socialCategory, educationLevel, employmentStatus];
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
        residenceType: residenceType || "",
        incomeBand: income || "",
        occupation: occupation || "",
        householdSize: householdSizeNum,
        primaryNeed: primaryNeed || "",
        dateOfBirth: dateOfBirth || "",
        gender: gender || "",
        maritalStatus: maritalStatus || "",
        socialCategory: socialCategory || "General",
        minorityStatus: minorityStatus || "",
        disabilityStatus: disabilityStatus || "",
        educationLevel: educationLevel || "",
        employmentStatus: employmentStatus || "",
        landholding: landholding || "",
        houseOwnership: houseOwnership || "",
        rationCardType: rationCardType || "",
        lpgConnection: lpgConnection || "",
        hasBankAccount: isBankAccountAvailable,
        hasAadhaar: aadhaarStatus,
        completionPercent,
      },
      create: {
        userId: session.id,
        state: state || "",
        district: district || "",
        residenceType: residenceType || "",
        incomeBand: income || "",
        occupation: occupation || "",
        householdSize: householdSizeNum,
        primaryNeed: primaryNeed || "",
        dateOfBirth: dateOfBirth || "",
        gender: gender || "",
        maritalStatus: maritalStatus || "",
        socialCategory: socialCategory || "General",
        minorityStatus: minorityStatus || "",
        disabilityStatus: disabilityStatus || "",
        educationLevel: educationLevel || "",
        employmentStatus: employmentStatus || "",
        landholding: landholding || "",
        houseOwnership: houseOwnership || "",
        rationCardType: rationCardType || "",
        lpgConnection: lpgConnection || "",
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
        residenceType: profile.residenceType,
        dateOfBirth: profile.dateOfBirth,
        gender: profile.gender,
        maritalStatus: profile.maritalStatus,
        socialCategory: profile.socialCategory,
        minorityStatus: profile.minorityStatus,
        disabilityStatus: profile.disabilityStatus,
        educationLevel: profile.educationLevel,
        employmentStatus: profile.employmentStatus,
        landholding: profile.landholding,
        houseOwnership: profile.houseOwnership,
        rationCardType: profile.rationCardType,
        lpgConnection: profile.lpgConnection,
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
