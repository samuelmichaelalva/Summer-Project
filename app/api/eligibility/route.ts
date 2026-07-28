import { NextResponse } from "next/server";
import { matchSchemes, mockCitizenProfile, type EligibilityProfile } from "@/lib/eligibility";

export async function POST(request: Request) {
  const profile = (await request.json().catch(() => mockCitizenProfile)) as Partial<EligibilityProfile>;
  const matches = matchSchemes({ ...mockCitizenProfile, ...profile });

  return NextResponse.json({
    profile: { ...mockCitizenProfile, ...profile },
    matches: matches.map(({ icon: _icon, ...scheme }) => scheme),
  });
}

export function GET() {
  const matches = matchSchemes(mockCitizenProfile);

  return NextResponse.json({
    profile: mockCitizenProfile,
    matches: matches.map(({ icon: _icon, ...scheme }) => scheme),
  });
}
