import { schemeCards } from "@/lib/data";

export function getSchemes() {
  return schemeCards;
}

export function getSchemeBySlug(slug: string) {
  return schemeCards.find((scheme) => scheme.slug === slug) ?? null;
}
