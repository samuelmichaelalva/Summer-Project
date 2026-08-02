import { Landmark } from "lucide-react";
import { directorySchemes, schemeCards } from "@/lib/data";

export function getSchemes() {
  return schemeCards;
}

export function getSchemeBySlug(slug: string) {
  const card = schemeCards.find((scheme) => scheme.slug === slug);
  if (card) return card;
  const scheme = directorySchemes.find((item) => item.slug === slug);
  return scheme && {
    ...scheme,
    benefit: `Explore eligibility and application details for ${scheme.title}.`,
    amount: "See official scheme guidelines",
    status: "Available",
    matchScore: 0,
    deadline: "Check current official window",
    state: "India",
    ministry: "Government of India",
    documents: ["Aadhaar card", "Income or category proof", "Bank account details"],
    eligibility: ["Meet the scheme-specific eligibility criteria", "Provide valid supporting documents", "Apply through the official portal or department"],
    icon: Landmark,
  };
}
