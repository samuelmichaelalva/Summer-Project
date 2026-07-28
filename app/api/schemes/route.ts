import { NextResponse } from "next/server";
import { schemeCards } from "@/lib/data";

export function GET() {
  return NextResponse.json({
    schemes: schemeCards.map(({ icon: _icon, ...scheme }) => scheme),
  });
}
