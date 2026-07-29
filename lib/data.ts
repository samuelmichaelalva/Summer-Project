import { GraduationCap, HeartPulse, Home, Landmark, Leaf, ShieldCheck, Sprout, Utensils } from "lucide-react";

export const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Schemes", href: "/schemes" },
  { label: "Assistant", href: "/assistant" },
  { label: "Profile", href: "/profile-setup" },
];

export const schemeCards = [
  {
    slug: "ayushman-bharat",
    title: "Ayushman Bharat PMJAY",
    category: "Healthcare",
    benefit: "Up to Rs. 5 lakh annual health cover per family.",
    amount: "Rs. 5 lakh cover",
    status: "Highly Eligible",
    matchScore: 96,
    deadline: "Open year-round",
    state: "All India",
    ministry: "National Health Authority",
    documents: ["Aadhaar card", "Ration card", "Mobile number"],
    eligibility: ["Low-income household", "Valid identity proof", "Family listed in eligible database"],
    icon: HeartPulse,
  },
  {
    slug: "pm-kisan",
    title: "PM-Kisan Samman Nidhi",
    category: "Agriculture",
    benefit: "Rs. 6,000 yearly direct benefit transfer.",
    amount: "Rs. 6,000/year",
    status: "Verified",
    matchScore: 88,
    deadline: "Next installment cycle",
    state: "All India",
    ministry: "Ministry of Agriculture",
    documents: ["Land record", "Aadhaar card", "Bank account"],
    eligibility: ["Small or marginal farmer", "Cultivable landholding", "Bank account linked"],
    icon: Sprout,
  },
  {
    slug: "pmay-gramin",
    title: "PMAY Gramin",
    category: "Housing",
    benefit: "Housing support for eligible rural households.",
    amount: "Up to Rs. 1.3 lakh",
    status: "Profile Match",
    matchScore: 82,
    deadline: "State-wise window",
    state: "Rural India",
    ministry: "Ministry of Rural Development",
    documents: ["Aadhaar card", "Income certificate", "Residence proof"],
    eligibility: ["Rural household", "No pucca house", "Meets deprivation criteria"],
    icon: Home,
  },
  {
    slug: "vidya-siri",
    title: "Vidya Siri Scholarship",
    category: "Education",
    benefit: "Student support for higher education expenses.",
    amount: "Fee and hostel support",
    status: "New Match",
    matchScore: 79,
    deadline: "31 August",
    state: "Karnataka",
    ministry: "State Scholarship Portal",
    documents: ["Student ID", "Income certificate", "Caste certificate"],
    eligibility: ["Karnataka resident", "Post-matric student", "Income under scheme limit"],
    icon: GraduationCap,
  },
  {
    slug: "one-nation-one-ration",
    title: "One Nation One Ration Card",
    category: "Food Security",
    benefit: "Access subsidized food grains from any fair price shop.",
    amount: "Monthly ration support",
    status: "Available",
    matchScore: 74,
    deadline: "Open year-round",
    state: "All India",
    ministry: "Department of Food and Public Distribution",
    documents: ["Ration card", "Aadhaar card", "Mobile number"],
    eligibility: ["NFSA ration card holder", "Aadhaar seeded ration card", "Family member verification"],
    icon: Utensils,
  },
];

export const featuredScheme = schemeCards[0];

export const benefits = [
  { label: "Benefits Accessed", value: "Rs. 1,250Cr+" },
  { label: "Citizens Assisted", value: "2.5M+" },
  { label: "Schemes Indexed", value: "4,800+" },
  { label: "Languages Supported", value: "22" },
];

export const featureCards = [
  {
    title: "Instant Eligibility Matching",
    copy: "Cross-reference family, income, location, and occupation with central and state schemes in seconds.",
    icon: Landmark,
  },
  {
    title: "Regional Language UI",
    copy: "Interfaces are planned for English, Hindi, Bengali, Tamil and Telugu.",
    icon: Leaf,
  },
  {
    title: "Privacy-first Forms",
    copy: "Clear disclosure, visible labels, and minimal data entry patterns reduce citizen anxiety.",
    icon: ShieldCheck,
  },
];
