export type User = {
  id: string;
  name: string;
  contact: string;
  preferredLanguage: string;
  createdAt: string;
};

export type CitizenProfile = {
  id: string;
  userId: string;
  state: string;
  district: string;
  incomeBand: string;
  occupation: string;
  householdSize: number;
  primaryNeed: string;
  hasAadhaar: boolean;
  hasBankAccount: boolean;
  completionPercent: number;
};

export type Scheme = {
  id: string;
  slug: string;
  title: string;
  category: string;
  state: string;
  ministry: string;
  benefit: string;
  amount: string;
  deadline: string;
};

export type SchemeRequirement = {
  id: string;
  schemeId: string;
  kind: "eligibility" | "document";
  label: string;
};

export type Application = {
  id: string;
  userId: string;
  schemeId: string;
  status: "draft" | "submitted" | "under_review" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
};
