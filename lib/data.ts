import { GraduationCap, HeartPulse, Home, Landmark, Leaf, ShieldCheck, Sprout } from "lucide-react";

export const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Schemes", href: "/schemes/ayushman-bharat" },
  { label: "Assistant", href: "/dashboard" },
  { label: "Profile", href: "/profile-setup" },
];

export const schemeCards = [
  {
    title: "Ayushman Bharat PMJAY",
    category: "Healthcare",
    benefit: "Up to Rs. 5 lakh annual health cover per family.",
    status: "Highly Eligible",
    icon: HeartPulse,
  },
  {
    title: "PM-Kisan Samman Nidhi",
    category: "Agriculture",
    benefit: "Rs. 6,000 yearly direct benefit transfer.",
    status: "Verified",
    icon: Sprout,
  },
  {
    title: "PMAY Gramin",
    category: "Housing",
    benefit: "Housing support for eligible rural households.",
    status: "Profile Match",
    icon: Home,
  },
  {
    title: "Vidya Siri Scholarship",
    category: "Education",
    benefit: "Student support for higher education expenses.",
    status: "New Match",
    icon: GraduationCap,
  },
];

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
    copy: "Interfaces are planned for English, Hindi, Bengali, Tamil, Telugu, and more regional languages.",
    icon: Leaf,
  },
  {
    title: "Privacy-first Forms",
    copy: "Clear disclosure, visible labels, and minimal data entry patterns reduce citizen anxiety.",
    icon: ShieldCheck,
  },
];
