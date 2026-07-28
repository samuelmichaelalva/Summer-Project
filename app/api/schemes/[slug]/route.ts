import { NextResponse } from "next/server";
import { schemeCards } from "@/lib/data";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scheme = schemeCards.find((item) => item.slug === slug);

  if (!scheme) {
    return NextResponse.json({ error: "Scheme not found" }, { status: 404 });
  }

  const { icon: _icon, ...serializableScheme } = scheme;
  return NextResponse.json({ scheme: serializableScheme });
}
