import { GraduationCap, HeartPulse, Home, Landmark, Leaf, ShieldCheck, Sprout, Utensils } from "lucide-react";

export const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Schemes", href: "/schemes" },
  { label: "Assistant", href: "/assistant" },
  { label: "Profile", href: "/profile-setup" },
];

export const schemeCategories = [
  "Students", "Farmers", "Women", "Senior Citizens", "Job Seekers",
  "Entrepreneurs / MSMEs", "Persons with Disabilities (PwD)", "SC / ST / OBC",
  "Economically Weaker Section (EWS) / BPL", "Unorganized Workers",
];

export const schemeDirectory = [
  { category: "Students", schemes: ["National Scholarship Portal (NSP)", "PM Vidyalaxmi Scheme", "PM-YASASVI", "Central Sector Scheme of Scholarships (CSSS)", "AICTE Pragati Scholarship", "AICTE Saksham Scholarship", "AICTE Swanath Scholarship"] },
  { category: "Farmers", schemes: ["PM-KISAN", "Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Kisan Credit Card (KCC)", "PM Krishi Sinchai Yojana (PMKSY)", "Soil Health Card Scheme", "e-NAM", "Agriculture Infrastructure Fund (AIF)", "Paramparagat Krishi Vikas Yojana (PKVY)", "National Mission for Sustainable Agriculture (NMSA)"] },
  { category: "Women", schemes: ["Beti Bachao Beti Padhao", "Pradhan Mantri Matru Vandana Yojana (PMMVY)", "Sukanya Samriddhi Yojana", "One Stop Centre Scheme", "Ujjwala Yojana (PMUY)", "Lakhpati Didi", "Mahila Shakti Kendra (MSK)", "Working Women Hostel Scheme", "Women's Power Award", "Mission Shakti"] },
  { category: "Senior Citizens", schemes: ["Atal Pension Yojana (APY)", "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)", "Rashtriya Vayoshri Yojana (RVY)", "Senior Citizens' Savings Scheme (SCSS)", "Prime Minister Vaya Vandana Yojana (PMVVY)", "National Programme for Health Care of the Elderly (NPHCE)"] },
  { category: "Job Seekers", schemes: ["National Career Service (NCS)", "PM Kaushal Vikas Yojana (PMKVY)", "PM Internship Scheme", "DDU-GKY", "PM Viksit Bharat Rozgar Yojana (PM-VBRY)", "Skill India Mission", "Apprenticeship Training Scheme (NATS)", "Rural Self Employment Training Institutes (RSETI)", "Black-GKY"] },
  { category: "Entrepreneurs / MSMEs", schemes: ["PMEGP", "CGTMSE", "Startup India", "Stand-Up India", "MUDRA Yojana", "MSME Champions", "SFURTI", "Credit Linked Capital Subsidy Scheme (CLCSS)", "ZED Certification Scheme", "Udyam Registration"] },
  { category: "Persons with Disabilities (PwD)", schemes: ["Unique Disability ID (UDID)", "Deendayal Disabled Rehabilitation Scheme (DDRS)", "National Fellowship for Persons with Disabilities", "Assistance to Disabled Persons (ADIP)", "Sugamya Bharat Abhiyan (Accessible India Campaign)"] },
  { category: "SC / ST / OBC", schemes: ["Post Matric Scholarship", "Top Class Education Scheme", "PM-AJAY", "National Overseas Scholarship", "Pre Matric Scholarship", "Venture Capital Fund for SC", "National Fellowship for SC", "National Fellowship for OBC", "Babu Jagjivan Ram Chhatrawas Yojana"] },
  { category: "Economically Weaker Section (EWS) / BPL", schemes: ["Ayushman Bharat PM-JAY", "PM Awas Yojana (PMAY)", "National Food Security Act (NFSA)", "Jal Jeevan Mission", "One Nation One Ration Card (ONORC)", "PM Suraksha Bima Yojana (PMSBY)", "PM Jeevan Jyoti Bima Yojana (PMJJBY)", "National Social Assistance Programme (NSAP)"] },
  { category: "Unorganized Workers", schemes: ["e-Shram", "PM Shram Yogi Maandhan (PMSYM)"] },
];

export const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const directorySchemes = schemeDirectory.flatMap(({ category, schemes }) => schemes.map((title) => ({ title, category, slug: slugify(title) })));

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
