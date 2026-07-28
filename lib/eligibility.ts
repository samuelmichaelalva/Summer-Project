import { schemeCards } from "@/lib/data";

export type EligibilityProfile = {
  state: string;
  incomeBand: string;
  occupation: string;
  householdSize: number;
  hasAadhaar: boolean;
  hasBankAccount: boolean;
  needs: string[];
};

export const mockCitizenProfile: EligibilityProfile = {
  state: "Karnataka",
  incomeBand: "Under Rs. 2.5 lakh",
  occupation: "Student / Dependent",
  householdSize: 4,
  hasAadhaar: true,
  hasBankAccount: true,
  needs: ["Education", "Healthcare", "Food Security"],
};

export function matchSchemes(profile: EligibilityProfile) {
  return schemeCards
    .map((scheme) => {
      const reasons = [
        scheme.state === "All India" || scheme.state === profile.state ? "Location matches your profile" : "",
        profile.needs.includes(scheme.category) ? `Matches your ${scheme.category.toLowerCase()} need` : "",
        scheme.documents.includes("Aadhaar card") && profile.hasAadhaar ? "Aadhaar-ready application" : "",
        scheme.documents.includes("Bank account") && profile.hasBankAccount ? "Bank account available" : "",
        scheme.eligibility.some((item) => item.toLowerCase().includes("income")) ? "Income band appears relevant" : "",
      ].filter(Boolean);

      const readiness = Math.min(100, scheme.matchScore + reasons.length * 2);
      return { ...scheme, reasons, readiness };
    })
    .sort((a, b) => b.readiness - a.readiness);
}

export const matchedSchemes = matchSchemes(mockCitizenProfile);
export const topMatchedSchemes = matchedSchemes.slice(0, 3);
