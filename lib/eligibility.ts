import { schemeCards } from "@/lib/data";

export const mockCitizenProfile = {
  state: "Karnataka",
  incomeBand: "Under Rs. 2.5 lakh",
  occupation: "Student / Dependent",
  householdSize: 4,
  hasAadhaar: true,
  hasBankAccount: true,
  needs: ["Education", "Healthcare", "Food Security"],
};

export const matchedSchemes = schemeCards
  .map((scheme) => {
    const reasons = [
      scheme.state === "All India" || scheme.state === mockCitizenProfile.state ? "Location matches your profile" : "",
      mockCitizenProfile.needs.includes(scheme.category) ? `Matches your ${scheme.category.toLowerCase()} need` : "",
      scheme.documents.includes("Aadhaar card") && mockCitizenProfile.hasAadhaar ? "Aadhaar-ready application" : "",
      scheme.documents.includes("Bank account") && mockCitizenProfile.hasBankAccount ? "Bank account available" : "",
      scheme.eligibility.some((item) => item.toLowerCase().includes("income")) ? "Income band appears relevant" : "",
    ].filter(Boolean);

    return {
      ...scheme,
      reasons,
      readiness: Math.min(100, scheme.matchScore + reasons.length),
    };
  })
  .sort((a, b) => b.readiness - a.readiness);

export const topMatchedSchemes = matchedSchemes.slice(0, 3);
