export const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"] as const;
export type Language = (typeof languages)[number];

export const languageCodes: Record<Language, string> = {
  English: "en",
  "हिन्दी": "hi",
  "বাংলা": "bn",
  "தமிழ்": "ta",
  "తెలుగు": "te",
};

export const languageLabels: Record<Language, string> = {
  English: "English",
  "हिन्दी": "हिन्दी",
  "বাংলা": "বাংলা",
  "தமிழ்": "தமிழ்",
  "తెలుగు": "తెలుగు",
};

export interface Dictionary {
  // Navigation & Shell
  home: string;
  schemes: string;
  assistant: string;
  profile: string;
  settings: string;
  dashboard: string;
  schemeListing: string;
  aiAssistant: string;
  adminPortal: string;
  notifications: string;
  logout: string;
  search: string;
  welcome: string;
  verifyAadhaar: string;
  account: string;
  menu: string;
  language: string;
  privacy: string;
  appearance: string;
  refreshChat: string;
  readyToHelp: string;
  askAbout: string;
  settingsSaved: string;

  // Auth / Login / Register
  login: string;
  register: string;
  loginTitle: string;
  loginSubtitle: string;
  citizenAccount: string;
  loginRegister: string;
  contactPlaceholder: string;
  passwordPlaceholder: string;
  confirmPasswordPlaceholder: string;
  reEnterPasswordPlaceholder: string;
  fullName: string;
  mobileOrEmail: string;
  password: string;
  confirmPassword: string;
  rememberMe: string;
  forgotPassword: string;
  createAccount: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  signIn: string;
  secureAccess: string;
  processing: string;
  loginFailed: string;
  registrationFailed: string;
  passwordsDoNotMatch: string;
  useStrongerPassword: string;
  suggestStrongPassword: string;
  strong: string;
  good: string;
  weak: string;
  required: string;

  // Landing / Home
  govtInitiative: string;
  findBenefits: string;
  eligibleFor: string;
  landingSubtitle: string;
  getStarted: string;
  howItWorks: string;
  onlineReady: string;
  landingAiPitch: string;
  approvedBenefits: string;
  registeredCitizens: string;
  schemesIndexed: string;
  languagesAvailable: string;
  tagline: string;
  footerDesc: string;
  featureEligibilityTitle: string;
  featureRegionalTitle: string;
  featurePrivacyTitle: string;

  // Dashboard & Scheme Listing
  allSchemes: string;
  exploreSchemes: string;
  schemesAvailable: string;
  benefitsAccessed: string;
  citizensAssisted: string;
  languagesSupported: string;
  viewDetails: string;
  profileBasedMatches: string;
  basedOnProfile: string;
  completeProfileMatches: string;
  schemesFound: string;
  profileCompletion: string;
  eligibleSchemes: string;
  viewAll: string;
  profileChecklist: string;
  recentApplications: string;
  noApplicationsSaved: string;
  completeProfilePrompt: string;
  profileReadiness: string;
  docChecklist: string;
  locationMatches: string;
  openYearRound: string;
  nextCycle: string;
  stateWindow: string;
  aadhaarReady: string;
  incomeRelevant: string;
  details: string;
  profileDetailsMatch: string;
  addYourState: string;
  completeMoreDetails: string;
  coreDetailsComplete: string;
  completeProfileBtn: string;
  addDetailsPrompt: string;
  appStats: string;
  noApplicationsYet: string;
  viewScheme: string;
  viewDashboard: string;
  startApplication: string;
  downloadChecklist: string;
  share: string;
  assistantExplainHelp: string;
  checkOfficialEligibility: string;
  collectRequiredDocs: string;
  applyOnPortal: string;
  trackStatus: string;
  searchPlaceholder: string;
  schemesEligibleHeading: string;
  configureProfilePrompt: string;
  allIndia: string;
  healthcare: string;
  agriculture: string;
  housing: string;
  education: string;
  foodSecurity: string;

  // Profile Form & Options
  profileSetup: string;
  loadingProfile: string;
  saveDraft: string;
  saveProfile: string;
  continueDashboard: string;
  selectOption: string;
  identity: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  state: string;
  district: string;
  preferredLanguage: string;
  household: string;
  householdSize: string;
  residenceType: string;
  socialCategory: string;
  minorityStatus: string;
  disabilityStatus: string;
  houseOwnership: string;
  rationCardType: string;
  primaryNeed: string;
  incomeAndOccupation: string;
  annualIncome: string;
  primaryOccupation: string;
  employmentStatus: string;
  educationLevel: string;
  landholding: string;
  bankAccountStatus: string;
  lpgConnection: string;
  aadhaarConsent: string;
  single: string;
  married: string;
  widowed: string;
  divorced: string;
  ruralSemiUrban: string;
  urban: string;
  owned: string;
  rented: string;
  none: string;
  available: string;
  notAvailable: string;
  employed: string;
  selfEmployed: string;
  unemployed: string;
  student: string;
  retired: string;
  noFormalEducation: string;
  school: string;
  higherSecondary: string;
  graduate: string;
  postgraduate: string;
  male: string;
  female: string;
  preferNotToSay: string;
  scCategory: string;
  stCategory: string;
  obcCategory: string;
  generalCategory: string;
  yes: string;
  no: string;
  aayRation: string;
  bplRation: string;
  nfsaRation: string;
  validNameError: string;
  profileSavedSuccess: string;
  failedSaveProfile: string;
  errorConnectingServer: string;
  savedProfilePersists: string;
  usingSavedProfileMatch: string;
  checkingEligibility: string;
  schemesRanked: string;
  selectedLabel: string;
  slugLabel: string;
  categoryLabel: string;
  ministryLabel: string;
  benefitLabel: string;
  deadlineLabel: string;

  // Settings
  preferencesTitle: string;
  preferencesSavedDesc: string;
  deadlineAlerts: string;
  newEligibilityMatches: string;
  statusUpdates: string;
  showSensitiveAmounts: string;
  allowReminders: string;
  savePreferences: string;
  saving: string;

  // Assistant Component
  askJanSevaAi: string;
  assistantGreeting: string;
  typeQuestionPlaceholder: string;
  send: string;
  sendMessage: string;
  closeAssistant: string;
  dynamicGuidance: string;
  typeMessagePlaceholder: string;
  chatRefreshed: string;
  thinking: string;
  contextLabel: string;
  highlyEligible: string;
  matchScore: string;
  documentsNeeded: string;
  eligibilityChecklist: string;
  applicationSteps: string;
  followInstructions: string;
  needHelp: string;
  updateProfile: string;
  aiUnavailable: string;
  aiNotConfigured: string;
  pleaseAskQuestion: string;
  couldNotFindAnswer: string;
  couldNotPrepareAnswer: string;

  // Admin Portal
  loadingAdmin: string;
  govtAdmin: string;
  totalUsers: string;
  totalSchemes: string;
  totalApplications: string;
  userManagement: string;
  contactHeader: string;
  roleHeader: string;
  statusHeader: string;
  activeStatus: string;
  inactiveStatus: string;
  deactivateBtn: string;
  schemeManagement: string;
  schemeTitleHeader: string;
  amountHeader: string;
  addSchemeBtn: string;
  updateSchemeBtn: string;
  cancelBtn: string;
  editBtn: string;
  deleteBtn: string;
  analyticsSettings: string;
  listedSchemesExplore: string;

  // Generic / Errors
  unauthorized: string;
  loginRequired: string;
  userNotFound: string;
  internalServerError: string;
  missingRequiredFields: string;
  unexpectedError: string;
}

export const English: Dictionary = {
  // Navigation & Shell
  home: "Home",
  schemes: "Schemes",
  assistant: "Assistant",
  profile: "Profile",
  settings: "Settings",
  dashboard: "Dashboard",
  schemeListing: "Scheme Listing",
  aiAssistant: "AI Assistant",
  adminPortal: "Admin Portal",
  notifications: "Notifications",
  logout: "Logout",
  search: "Search schemes, benefits, or help...",
  welcome: "Welcome, Citizen",
  verifyAadhaar: "Verify your Aadhaar",
  account: "Account",
  menu: "Menu",
  language: "Language",
  privacy: "Privacy",
  appearance: "Appearance & accessibility",
  refreshChat: "Refresh Chat",
  readyToHelp: "Ready to help",
  askAbout: "Ask me about schemes, eligibility, or documents.",
  settingsSaved: "Settings saved successfully.",

  // Auth / Login / Register
  login: "Login",
  register: "Register",
  loginTitle: "Citizen Account",
  loginSubtitle: "Login or register to continue your benefit journey",
  citizenAccount: "Citizen Account",
  loginRegister: "Login/Register",
  contactPlaceholder: "Enter registered contact",
  passwordPlaceholder: "Enter password",
  confirmPasswordPlaceholder: "Confirm password",
  reEnterPasswordPlaceholder: "Re-enter your password",
  fullName: "Full Name",
  mobileOrEmail: "Mobile number or email",
  password: "Password",
  confirmPassword: "Confirm password",
  rememberMe: "Remember me",
  forgotPassword: "Forgot password?",
  createAccount: "Create account",
  alreadyHaveAccount: "Already have an account?",
  dontHaveAccount: "Don't have an account?",
  signIn: "Sign in",
  secureAccess: "Secure Citizen Access",
  processing: "Processing...",
  loginFailed: "Login failed",
  registrationFailed: "Registration failed",
  passwordsDoNotMatch: "Passwords do not match.",
  useStrongerPassword: "Use a stronger password or choose the suggested password.",
  suggestStrongPassword: "Suggest strong password",
  strong: "Strong",
  good: "Good",
  weak: "Weak",
  required: "Required",

  // Landing / Home
  govtInitiative: "Government of India Initiative",
  findBenefits: "Find government benefits",
  eligibleFor: "you are eligible for",
  landingSubtitle: "Navigate Indian welfare schemes with a clear multilingual interface that helps citizens discover, understand, and prepare applications.",
  getStarted: "Get Started",
  howItWorks: "How it works",
  onlineReady: "Online and ready",
  landingAiPitch: "Namaste. I can help you find benefits for education, health, housing, and farming.",
  approvedBenefits: "Approved Benefits",
  registeredCitizens: "Registered Citizens",
  schemesIndexed: "Schemes Indexed",
  languagesAvailable: "Languages Available",
  tagline: "Smarter bureaucracy, better living",
  footerDesc: "Designed for every citizen, with responsive pages and multilingual UI patterns.",
  featureEligibilityTitle: "Instant Eligibility Matching",
  featureRegionalTitle: "Regional Language UI",
  featurePrivacyTitle: "Privacy-first Forms",

  // Dashboard & Scheme Listing
  allSchemes: "All schemes",
  exploreSchemes: "Explore government schemes",
  schemesAvailable: "Schemes available",
  benefitsAccessed: "Benefits Accessed",
  citizensAssisted: "Citizens Assisted",
  languagesSupported: "Languages Supported",
  viewDetails: "View details and application process →",
  profileBasedMatches: "Profile-based scheme matches",
  basedOnProfile: "Based on your saved profile",
  completeProfileMatches: "Complete your profile to get matches",
  schemesFound: "schemes found",
  profileCompletion: "Profile Completion",
  eligibleSchemes: "Eligible Schemes",
  viewAll: "View All",
  profileChecklist: "Profile checklist",
  recentApplications: "Recent Applications",
  noApplicationsSaved: "No applications saved yet.",
  completeProfilePrompt: "Complete your citizen profile",
  profileReadiness: "Profile Readiness",
  docChecklist: "Document Checklist",
  locationMatches: "Location matches your profile",
  openYearRound: "Open year-round",
  nextCycle: "Next installment cycle",
  stateWindow: "State-wise window",
  aadhaarReady: "Aadhaar-ready application",
  incomeRelevant: "Income band appears relevant",
  details: "Details",
  profileDetailsMatch: "Profile details match",
  addYourState: "Add your state",
  completeMoreDetails: "Complete more profile details to see personalized matches.",
  coreDetailsComplete: "Your core eligibility details are complete.",
  completeProfileBtn: "Complete profile",
  addDetailsPrompt: "Add these details for better eligibility matching:",
  appStats: "Application statistics:",
  noApplicationsYet: "No applications yet",
  viewScheme: "View Scheme",
  viewDashboard: "View Dashboard",
  startApplication: "Start Application",
  downloadChecklist: "Download Checklist",
  share: "Share",
  assistantExplainHelp: "The assistant panel can explain scheme terms in simple language.",
  checkOfficialEligibility: "Check official eligibility",
  collectRequiredDocs: "Collect required documents",
  applyOnPortal: "Apply on the official portal",
  trackStatus: "Track application status",
  searchPlaceholder: "Search schemes by name or category...",
  schemesEligibleHeading: "Schemes you may be eligible for",
  configureProfilePrompt: "Configure your profile details to see tailored schemes.",
  allIndia: "All India",
  healthcare: "Healthcare",
  agriculture: "Agriculture",
  housing: "Housing",
  education: "Education",
  foodSecurity: "Food Security",

  // Profile Form & Options
  profileSetup: "Profile Setup",
  loadingProfile: "Loading citizen profile...",
  saveDraft: "Save Draft",
  saveProfile: "Save Profile",
  continueDashboard: "Continue to Dashboard",
  selectOption: "Select",
  identity: "Identity",
  dob: "Date of birth",
  gender: "Gender",
  maritalStatus: "Marital status",
  state: "State",
  district: "District",
  preferredLanguage: "Preferred language",
  household: "Household",
  householdSize: "Household size (e.g. 4)",
  residenceType: "Residence type",
  socialCategory: "Social category",
  minorityStatus: "Minority status",
  disabilityStatus: "Disability status",
  houseOwnership: "House ownership",
  rationCardType: "Ration card type",
  primaryNeed: "Primary need",
  incomeAndOccupation: "Income and occupation",
  annualIncome: "Annual family income",
  primaryOccupation: "Primary occupation",
  employmentStatus: "Employment status",
  educationLevel: "Highest education level",
  landholding: "Landholding (if applicable)",
  bankAccountStatus: "Bank account status",
  lpgConnection: "LPG connection",
  aadhaarConsent: "I have a valid Aadhaar card",
  single: "Single",
  married: "Married",
  widowed: "Widowed",
  divorced: "Divorced",
  ruralSemiUrban: "Rural / Semi-urban",
  urban: "Urban",
  owned: "Owned",
  rented: "Rented",
  none: "None",
  available: "Available",
  notAvailable: "Not available",
  employed: "Employed",
  selfEmployed: "Self-employed",
  unemployed: "Unemployed",
  student: "Student",
  retired: "Retired",
  noFormalEducation: "No formal education",
  school: "School",
  higherSecondary: "Higher secondary",
  graduate: "Graduate",
  postgraduate: "Postgraduate",
  male: "Male",
  female: "Female",
  preferNotToSay: "Prefer not to say",
  scCategory: "SC",
  stCategory: "ST",
  obcCategory: "OBC",
  generalCategory: "General",
  yes: "Yes",
  no: "No",
  aayRation: "AAY",
  bplRation: "BPL",
  nfsaRation: "NFSA",
  validNameError: "Enter a valid name using letters and spaces.",
  profileSavedSuccess: "Profile saved successfully!",
  failedSaveProfile: "Failed to save profile.",
  errorConnectingServer: "Error connecting to server.",
  savedProfilePersists: "Saved profile details now persist securely in the database.",
  usingSavedProfileMatch: "Using saved profile match",
  checkingEligibility: "Checking eligibility...",
  schemesRanked: "schemes ranked from eligibility engine",
  selectedLabel: "Selected:",
  slugLabel: "Slug",
  categoryLabel: "Category",
  ministryLabel: "Ministry",
  benefitLabel: "Benefit",
  deadlineLabel: "Deadline",

  // Settings
  preferencesTitle: "Preferences and accessibility",
  preferencesSavedDesc: "Your preferences are saved to your JanSeva account and apply across devices.",
  deadlineAlerts: "Scheme deadline alerts",
  newEligibilityMatches: "New eligibility matches",
  statusUpdates: "Application status updates",
  showSensitiveAmounts: "Show sensitive benefit amounts",
  allowReminders: "Allow profile completion reminders",
  savePreferences: "Save preferences",
  saving: "Saving...",

  // Assistant Component
  askJanSevaAi: "Ask JanSeva AI",
  assistantGreeting: "Namaste! Ask me about this page, schemes, eligibility, or applications.",
  typeQuestionPlaceholder: "Type your question...",
  send: "Send",
  sendMessage: "Send message",
  closeAssistant: "Close assistant",
  dynamicGuidance: "Dynamic guidance powered by the current scheme and eligibility data.",
  typeMessagePlaceholder: "Type a message...",
  chatRefreshed: "Chat refreshed. How can I help?",
  thinking: "Thinking...",
  contextLabel: "Context:",
  highlyEligible: "Highly Eligible",
  matchScore: "Match score",
  documentsNeeded: "needed",
  eligibilityChecklist: "Eligibility Checklist",
  applicationSteps: "Application Steps",
  followInstructions: "Follow the scheme instructions carefully.",
  needHelp: "Need help?",
  updateProfile: "Update Profile",
  aiUnavailable: "JanSeva AI is temporarily unavailable.",
  aiNotConfigured: "JanSeva AI is not configured yet.",
  pleaseAskQuestion: "Please ask a question.",
  couldNotFindAnswer: "I could not find an answer yet.",
  couldNotPrepareAnswer: "I could not prepare an answer.",

  // Admin Portal
  loadingAdmin: "Loading admin portal…",
  govtAdmin: "Government Administration",
  totalUsers: "Total Users",
  totalSchemes: "Total Schemes",
  totalApplications: "Total Applications",
  userManagement: "User Management",
  contactHeader: "Contact",
  roleHeader: "Role",
  statusHeader: "Status",
  activeStatus: "Active",
  inactiveStatus: "Inactive",
  deactivateBtn: "Deactivate",
  schemeManagement: "Scheme Management",
  schemeTitleHeader: "Scheme title",
  amountHeader: "Amount",
  addSchemeBtn: "Add Scheme",
  updateSchemeBtn: "Update Scheme",
  cancelBtn: "Cancel",
  editBtn: "Edit",
  deleteBtn: "Delete",
  analyticsSettings: "Analytics & Settings",
  listedSchemesExplore: "listed schemes to explore",

  // Generic / Errors
  unauthorized: "Unauthorized",
  loginRequired: "Login required",
  userNotFound: "User not found",
  internalServerError: "Internal Server Error",
  missingRequiredFields: "Missing required fields",
  unexpectedError: "An unexpected error occurred. Please try again.",
};

export const Hindi: Dictionary = {
  // Navigation & Shell
  home: "होम",
  schemes: "योजनाएँ",
  assistant: "सहायक",
  profile: "प्रोफ़ाइल",
  settings: "सेटिंग्स",
  dashboard: "डैशबोर्ड",
  schemeListing: "योजना सूची",
  aiAssistant: "एआई सहायक",
  adminPortal: "एडमिन पोर्टल",
  notifications: "सूचनाएँ",
  logout: "लॉग आउट",
  search: "योजनाएँ, लाभ या सहायता खोजें...",
  welcome: "स्वागत है, नागरिक",
  verifyAadhaar: "अपना आधार सत्यापित करें",
  account: "खाता",
  menu: "मेनू",
  language: "भाषा",
  privacy: "गोपनीयता",
  appearance: "रूप और सुविधा",
  refreshChat: "चैट रीफ़्रेश करें",
  readyToHelp: "सहायता के लिए तैयार",
  askAbout: "योजनाओं, पात्रता या दस्तावेज़ों के बारे में पूछें।",
  settingsSaved: "सेटिंग्स सफलतापूर्वक सहेजी गईं।",

  // Auth / Login / Register
  login: "लॉगिन",
  register: "पंजीकरण",
  loginTitle: "नागरिक खाता",
  loginSubtitle: "अपने लाभ की यात्रा जारी रखने के लिए लॉगिन या पंजीकरण करें",
  citizenAccount: "नागरिक खाता",
  loginRegister: "लॉगिन/पंजीकरण",
  contactPlaceholder: "पंजीकृत संपर्क दर्ज करें",
  passwordPlaceholder: "पासवर्ड दर्ज करें",
  confirmPasswordPlaceholder: "पासवर्ड की पुष्टि करें",
  reEnterPasswordPlaceholder: "अपना पासवर्ड फिर से दर्ज करें",
  fullName: "पूरा नाम",
  mobileOrEmail: "मोबाइल नंबर या ईमेल",
  password: "पासवर्ड",
  confirmPassword: "पासवर्ड की पुष्टि करें",
  rememberMe: "मुझे याद रखें",
  forgotPassword: "पासवर्ड भूल गए?",
  createAccount: "खाता बनाएँ",
  alreadyHaveAccount: "क्या आपका पहले से खाता है?",
  dontHaveAccount: "खाता नहीं है?",
  signIn: "साइन इन",
  secureAccess: "सुरक्षित नागरिक प्रवेश",
  processing: "प्रक्रिया जारी है...",
  loginFailed: "लॉगिन विफल",
  registrationFailed: "पंजीकरण विफल",
  passwordsDoNotMatch: "पासवर्ड मेल नहीं खाते।",
  useStrongerPassword: "एक मज़बूत पासवर्ड इस्तेमाल करें या सुझाया गया पासवर्ड चुनें।",
  suggestStrongPassword: "मज़बूत पासवर्ड सुझाएँ",
  strong: "मज़बूत",
  good: "अच्छा",
  weak: "कमज़ोर",
  required: "आवश्यक",

  // Landing / Home
  govtInitiative: "भारत सरकार की पहल",
  findBenefits: "सरकारी लाभ खोजें",
  eligibleFor: "जिनके लिए आप पात्र हैं",
  landingSubtitle: "स्पष्ट बहुभाषी इंटरफ़ेस के साथ भारतीय कल्याण योजनाएँ खोजें, समझें और आवेदन तैयार करें।",
  getStarted: "शुरू करें",
  howItWorks: "यह कैसे काम करता है",
  onlineReady: "ऑनलाइन और तैयार",
  landingAiPitch: "नमस्ते। मैं शिक्षा, स्वास्थ्य, आवास और खेती के लाभ खोजने में आपकी सहायता कर सकता हूँ।",
  approvedBenefits: "स्वीकृत लाभ",
  registeredCitizens: "पंजीकृत नागरिक",
  schemesIndexed: "सूचीबद्ध योजनाएँ",
  languagesAvailable: "उपलब्ध भाषाएँ",
  tagline: "बेहतर प्रशासन, बेहतर जीवन",
  footerDesc: "हर नागरिक के लिए उत्तरदायी पेज और बहुभाषी इंटरफ़ेस के साथ बनाया गया।",
  featureEligibilityTitle: "तुरंत पात्रता मिलान",
  featureRegionalTitle: "क्षेत्रीय भाषा इंटरफ़ेस",
  featurePrivacyTitle: "गोपनीयता-केंद्रित फ़ॉर्म",

  // Dashboard & Scheme Listing
  allSchemes: "सभी योजनाएँ",
  exploreSchemes: "सरकारी योजनाएँ देखें",
  schemesAvailable: "उपलब्ध योजनाएँ",
  benefitsAccessed: "प्राप्त लाभ",
  citizensAssisted: "सहायता प्राप्त नागरिक",
  languagesSupported: "समर्थित भाषाएँ",
  viewDetails: "विवरण और आवेदन प्रक्रिया देखें →",
  profileBasedMatches: "प्रोफ़ाइल आधारित योजना मिलान",
  basedOnProfile: "आपकी सहेजी गई प्रोफ़ाइल के आधार पर",
  completeProfileMatches: "मिलान पाने के लिए अपनी प्रोफ़ाइल पूरी करें",
  schemesFound: "योजनाएँ मिलीं",
  profileCompletion: "प्रोफ़ाइल पूर्णता",
  eligibleSchemes: "पात्र योजनाएँ",
  viewAll: "सभी देखें",
  profileChecklist: "प्रोफ़ाइल चेकलिस्ट",
  recentApplications: "हाल के आवेदन",
  noApplicationsSaved: "अभी तक कोई आवेदन सहेजा नहीं गया।",
  completeProfilePrompt: "अपनी नागरिक प्रोफ़ाइल पूरी करें",
  profileReadiness: "प्रोफ़ाइल तैयारी",
  docChecklist: "दस्तावेज़ चेकलिस्ट",
  locationMatches: "स्थान आपकी प्रोफ़ाइल से मेल खाता है",
  openYearRound: "पूरे वर्ष खुला",
  nextCycle: "अगली किस्त का चक्र",
  stateWindow: "राज्यवार अवधि",
  aadhaarReady: "आधार-तैयार आवेदन",
  incomeRelevant: "आय सीमा प्रासंगिक लगती है",
  details: "विवरण",
  profileDetailsMatch: "प्रोफ़ाइल विवरण मेल खाते हैं",
  addYourState: "अपना राज्य जोड़ें",
  completeMoreDetails: "व्यक्तिगत मिलान देखने के लिए प्रोफ़ाइल की अधिक जानकारी पूरी करें।",
  coreDetailsComplete: "आपकी मुख्य पात्रता जानकारी पूरी है।",
  completeProfileBtn: "प्रोफ़ाइल पूरी करें",
  addDetailsPrompt: "बेहतर पात्रता मिलान के लिए ये विवरण जोड़ें:",
  appStats: "आवेदन आंकड़े:",
  noApplicationsYet: "अभी तक कोई आवेदन नहीं",
  viewScheme: "योजना देखें",
  viewDashboard: "डैशबोर्ड देखें",
  startApplication: "आवेदन शुरू करें",
  downloadChecklist: "चेकलिस्ट डाउनलोड करें",
  share: "साझा करें",
  assistantExplainHelp: "सहायक पैनल योजना की शर्तों को सरल भाषा में समझा सकता है।",
  checkOfficialEligibility: "आधिकारिक पात्रता जाँचें",
  collectRequiredDocs: "आवश्यक दस्तावेज़ इकट्ठा करें",
  applyOnPortal: "आधिकारिक पोर्टल पर आवेदन करें",
  trackStatus: "आवेदन की स्थिति ट्रैक करें",
  searchPlaceholder: "नाम या श्रेणी से योजनाएँ खोजें...",
  schemesEligibleHeading: "वे योजनाएँ जिनके लिए आप पात्र हो सकते हैं",
  configureProfilePrompt: "अनुकूलित योजनाएँ देखने के लिए अपनी प्रोफ़ाइल जानकारी सेट करें।",
  allIndia: "अखिल भारत",
  healthcare: "स्वास्थ्य सेवा",
  agriculture: "कृषि",
  housing: "आवास",
  education: "शिक्षा",
  foodSecurity: "खाद्य सुरक्षा",

  // Profile Form & Options
  profileSetup: "प्रोफ़ाइल सेटअप",
  loadingProfile: "नागरिक प्रोफ़ाइल लोड हो रही है...",
  saveDraft: "ड्राफ्ट सहेजें",
  saveProfile: "प्रोफ़ाइल सहेजें",
  continueDashboard: "डैशबोर्ड पर जाएँ",
  selectOption: "चुनें",
  identity: "पहचान",
  dob: "जन्म तिथि",
  gender: "लिंग",
  maritalStatus: "वैवाहिक स्थिति",
  state: "राज्य",
  district: "ज़िला",
  preferredLanguage: "पसंदीदा भाषा",
  household: "परिवार",
  householdSize: "परिवार का आकार (जैसे 4)",
  residenceType: "निवास का प्रकार",
  socialCategory: "सामाजिक श्रेणी",
  minorityStatus: "अल्पसंख्यक स्थिति",
  disabilityStatus: "दिव्यांगता स्थिति",
  houseOwnership: "घर का स्वामित्व",
  rationCardType: "राशन कार्ड का प्रकार",
  primaryNeed: "प्राथमिक आवश्यकता",
  incomeAndOccupation: "आय और व्यवसाय",
  annualIncome: "वार्षिक पारिवारिक आय",
  primaryOccupation: "मुख्य व्यवसाय",
  employmentStatus: "रोज़गार की स्थिति",
  educationLevel: "उच्चतम शिक्षा स्तर",
  landholding: "भूमि स्वामित्व (यदि लागू हो)",
  bankAccountStatus: "बैंक खाते की स्थिति",
  lpgConnection: "एलपीजी कनेक्शन",
  aadhaarConsent: "मेरे पास वैध आधार कार्ड है",
  single: "अविवाहित",
  married: "विवाहित",
  widowed: "विधवा/विधुर",
  divorced: "तलाकशुदा",
  ruralSemiUrban: "ग्रामीण / अर्ध-शहरी",
  urban: "शहरी",
  owned: "स्वामित्व वाला",
  rented: "किराए पर",
  none: "कोई नहीं",
  available: "उपलब्ध",
  notAvailable: "उपलब्ध नहीं",
  employed: "नियोजित",
  selfEmployed: "स्वरोजगार",
  unemployed: "बेरोजगार",
  student: "छात्र",
  retired: "सेवानिवृत्त",
  noFormalEducation: "कोई औपचारिक शिक्षा नहीं",
  school: "स्कूल",
  higherSecondary: "उच्च माध्यमिक",
  graduate: "स्नातक",
  postgraduate: "स्नातकोत्तर",
  male: "पुरुष",
  female: "महिला",
  preferNotToSay: "कहना पसंद नहीं",
  scCategory: "एससी",
  stCategory: "एसटी",
  obcCategory: "ओबीसी",
  generalCategory: "सामान्य",
  yes: "हाँ",
  no: "नहीं",
  aayRation: "एएवाई",
  bplRation: "बीपीएल",
  nfsaRation: "एनएफएसए",
  validNameError: "अक्षरों और रिक्त स्थान का उपयोग करके मान्य नाम दर्ज करें।",
  profileSavedSuccess: "प्रोफ़ाइल सफलतापूर्वक सहेजी गई!",
  failedSaveProfile: "प्रोफ़ाइल सहेजना विफल रहा।",
  errorConnectingServer: "सर्वर से जुड़ने में त्रुटि।",
  savedProfilePersists: "सहेजी गई प्रोफ़ाइल जानकारी अब डेटाबेस में सुरक्षित रूप से बनी रहती है।",
  usingSavedProfileMatch: "सहेजी गई प्रोफ़ाइल का मिलान उपयोग हो रहा है",
  checkingEligibility: "पात्रता जाँची जा रही है...",
  schemesRanked: "पात्रता इंजन से क्रमित योजनाएँ",
  selectedLabel: "चयनित:",
  slugLabel: "स्लग",
  categoryLabel: "श्रेणी",
  ministryLabel: "मंत्रालय",
  benefitLabel: "लाभ",
  deadlineLabel: "अंतिम तिथि",

  // Settings
  preferencesTitle: "प्राथमिकताएँ और सुविधा",
  preferencesSavedDesc: "आपकी प्राथमिकताएँ आपके JanSeva खाते में सहेजी जाती हैं और सभी उपकरणों पर लागू होती हैं।",
  deadlineAlerts: "योजना की अंतिम तिथि की सूचनाएँ",
  newEligibilityMatches: "नई पात्रता मिलान",
  statusUpdates: "आवेदन स्थिति अपडेट",
  showSensitiveAmounts: "संवेदनशील लाभ राशि दिखाएँ",
  allowReminders: "प्रोफ़ाइल पूर्णता अनुस्मारक की अनुमति दें",
  savePreferences: "प्राथमिकताएँ सहेजें",
  saving: "सहेजा जा रहा है...",

  // Assistant Component
  askJanSevaAi: "JanSeva AI से पूछें",
  assistantGreeting: "नमस्ते! इस पेज, योजनाओं, पात्रता या आवेदनों के बारे में पूछें।",
  typeQuestionPlaceholder: "अपना प्रश्न लिखें...",
  send: "भेजें",
  sendMessage: "संदेश भेजें",
  closeAssistant: "सहायक बंद करें",
  dynamicGuidance: "वर्तमान योजना और पात्रता डेटा से संचालित मार्गदर्शन।",
  typeMessagePlaceholder: "संदेश लिखें...",
  chatRefreshed: "चैट रीफ़्रेश हो गई। मैं कैसे मदद कर सकता हूँ?",
  thinking: "सोच रहा हूँ...",
  contextLabel: "संदर्भ:",
  highlyEligible: "अत्यधिक पात्र",
  matchScore: "मिलान स्कोर",
  documentsNeeded: "आवश्यक",
  eligibilityChecklist: "पात्रता चेकलिस्ट",
  applicationSteps: "आवेदन के चरण",
  followInstructions: "योजना के निर्देशों का ध्यानपूर्वक पालन करें।",
  needHelp: "मदद चाहिए?",
  updateProfile: "प्रोफ़ाइल अपडेट करें",
  aiUnavailable: "JanSeva AI अस्थायी रूप से उपलब्ध नहीं है।",
  aiNotConfigured: "JanSeva AI अभी कॉन्फ़िगर नहीं है।",
  pleaseAskQuestion: "कृपया कोई प्रश्न पूछें।",
  couldNotFindAnswer: "मुझे अभी उत्तर नहीं मिल सका।",
  couldNotPrepareAnswer: "मैं उत्तर तैयार नहीं कर सका।",

  // Admin Portal
  loadingAdmin: "एडमिन पोर्टल लोड हो रहा है…",
  govtAdmin: "सरकारी प्रशासन",
  totalUsers: "कुल उपयोगकर्ता",
  totalSchemes: "कुल योजनाएँ",
  totalApplications: "कुल आवेदन",
  userManagement: "उपयोगकर्ता प्रबंधन",
  contactHeader: "संपर्क",
  roleHeader: "भूमिका",
  statusHeader: "स्थिति",
  activeStatus: "सक्रिय",
  inactiveStatus: "निष्क्रिय",
  deactivateBtn: "निष्क्रिय करें",
  schemeManagement: "योजना प्रबंधन",
  schemeTitleHeader: "योजना का शीर्षक",
  amountHeader: "राशि",
  addSchemeBtn: "योजना जोड़ें",
  updateSchemeBtn: "योजना अपडेट करें",
  cancelBtn: "रद्द करें",
  editBtn: "संपादित करें",
  deleteBtn: "हटाएँ",
  analyticsSettings: "विश्लेषण और सेटिंग्स",
  listedSchemesExplore: "देखने के लिए सूचीबद्ध योजनाएँ",

  // Generic / Errors
  unauthorized: "अनधिकृत",
  loginRequired: "लॉगिन आवश्यक है",
  userNotFound: "उपयोगकर्ता नहीं मिला",
  internalServerError: "आंतरिक सर्वर त्रुटि",
  missingRequiredFields: "आवश्यक फ़ील्ड गायब हैं",
  unexpectedError: "एक अनपेक्षित त्रुटि हुई। कृपया फिर से प्रयास करें।",
};

export const Bengali: Dictionary = {
  // Navigation & Shell
  home: "হোম",
  schemes: "প্রকল্প",
  assistant: "সহায়ক",
  profile: "প্রোফাইল",
  settings: "সেটিংস",
  dashboard: "ড্যাশবোর্ড",
  schemeListing: "প্রকল্প তালিকা",
  aiAssistant: "এআই সহায়ক",
  adminPortal: "অ্যাডমিন পোর্টাল",
  notifications: "বিজ্ঞপ্তি",
  logout: "লগ আউট",
  search: "প্রকল্প, সুবিধা বা সাহায্য খুঁজুন...",
  welcome: "স্বাগতম, নাগরিক",
  verifyAadhaar: "আপনার আধার যাচাই করুন",
  account: "অ্যাকাউন্ট",
  menu: "মেনু",
  language: "ভাষা",
  privacy: "গোপনীয়তা",
  appearance: "প্রদর্শন ও সুবিধা",
  refreshChat: "চ্যাট রিফ্রেশ করুন",
  readyToHelp: "সাহায্যের জন্য প্রস্তুত",
  askAbout: "প্রকল্প, যোগ্যতা বা নথি সম্পর্কে জিজ্ঞাসা করুন।",
  settingsSaved: "সেটিংস সফলভাবে সংরক্ষিত হয়েছে।",

  // Auth / Login / Register
  login: "লগইন",
  register: "নিবন্ধন",
  loginTitle: "নাগরিক অ্যাকাউন্ট",
  loginSubtitle: "আপনার সুবিধার যাত্রা চালিয়ে যেতে লগইন বা নিবন্ধন করুন",
  citizenAccount: "নাগরিক অ্যাকাউন্ট",
  loginRegister: "লগইন/নিবন্ধন",
  contactPlaceholder: "নিবন্ধিত যোগাযোগ লিখুন",
  passwordPlaceholder: "পাসওয়ার্ড লিখুন",
  confirmPasswordPlaceholder: "পাসওয়ার্ড নিশ্চিত করুন",
  reEnterPasswordPlaceholder: "আপনার পাসওয়ার্ড আবার লিখুন",
  fullName: "পুরো নাম",
  mobileOrEmail: "মোবাইল নম্বর বা ইমেল",
  password: "পাসওয়ার্ড",
  confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
  rememberMe: "আমাকে মনে রাখুন",
  forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",
  createAccount: "অ্যাকাউন্ট তৈরি করুন",
  alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
  dontHaveAccount: "অ্যাকাউন্ট নেই?",
  signIn: "সাইন ইন",
  secureAccess: "নিরাপদ নাগরিক প্রবেশ",
  processing: "প্রক্রিয়া চলছে...",
  loginFailed: "লগইন ব্যর্থ",
  registrationFailed: "নিবন্ধন ব্যর্থ",
  passwordsDoNotMatch: "পাসওয়ার্ড মিলছে না।",
  useStrongerPassword: "আরও শক্তিশালী পাসওয়ার্ড ব্যবহার করুন বা সাজেস্ট করা পাসওয়ার্ড বেছে নিন।",
  suggestStrongPassword: "শক্তিশালী পাসওয়ার্ড সাজেস্ট করুন",
  strong: "শক্তিশালী",
  good: "ভালো",
  weak: "দুর্বল",
  required: "প্রয়োজনীয়",

  // Landing / Home
  govtInitiative: "ভারত সরকারের উদ্যোগ",
  findBenefits: "সরকারি সুবিধা খুঁজুন",
  eligibleFor: "যেগুলির জন্য আপনি যোগ্য",
  landingSubtitle: "স্পষ্ট বহুভাষিক ইন্টারফেসে ভারতীয় কল্যাণ প্রকল্প খুঁজুন, বুঝুন এবং আবেদন প্রস্তুত করুন।",
  getStarted: "শুরু করুন",
  howItWorks: "এটি কীভাবে কাজ করে",
  onlineReady: "অনলাইন এবং প্রস্তুত",
  landingAiPitch: "নমস্কার। শিক্ষা, স্বাস্থ্য, আবাসন এবং কৃষির সুবিধা খুঁজে পেতে আমি সাহায্য করতে পারি।",
  approvedBenefits: "অনুমোদিত সুবিধা",
  registeredCitizens: "নিবন্ধিত নাগরিক",
  schemesIndexed: "তালিকাভুক্ত প্রকল্প",
  languagesAvailable: "উপলব্ধ ভাষা",
  tagline: "স্মার্ট প্রশাসন, উন্নত জীবন",
  footerDesc: "প্রতিটি নাগরিকের জন্য প্রতিক্রিয়াশীল পেজ ও বহুভাষিক ইন্টারফেসসহ তৈরি।",
  featureEligibilityTitle: "তাৎক্ষণিক যোগ্যতা মিলানো",
  featureRegionalTitle: "আঞ্চলিক ভাষার ইন্টারফেস",
  featurePrivacyTitle: "গোপনীয়তা-কেন্দ্রিক ফর্ম",

  // Dashboard & Scheme Listing
  allSchemes: "সমস্ত প্রকল্প",
  exploreSchemes: "সরকারি প্রকল্প দেখুন",
  schemesAvailable: "উপলব্ধ প্রকল্প",
  benefitsAccessed: "পাওয়া সুবিধা",
  citizensAssisted: "সহায়তা পাওয়া নাগরিক",
  languagesSupported: "সমর্থিত ভাষা",
  viewDetails: "বিস্তারিত ও আবেদন প্রক্রিয়া দেখুন →",
  profileBasedMatches: "প্রোফাইল-ভিত্তিক প্রকল্পের মিল",
  basedOnProfile: "আপনার সংরক্ষিত প্রোফাইলের ভিত্তিতে",
  completeProfileMatches: "মিল পেতে আপনার প্রোফাইল সম্পূর্ণ করুন",
  schemesFound: "প্রকল্প পাওয়া গেছে",
  profileCompletion: "প্রোফাইল সম্পূর্ণতা",
  eligibleSchemes: "যোগ্য প্রকল্প",
  viewAll: "সব দেখুন",
  profileChecklist: "প্রোফাইল চেকলিস্ট",
  recentApplications: "সাম্প্রতিক আবেদন",
  noApplicationsSaved: "এখনও কোনো আবেদন সংরক্ষিত হয়নি।",
  completeProfilePrompt: "আপনার নাগরিক প্রোফাইল সম্পূর্ণ করুন",
  profileReadiness: "প্রোফাইল প্রস্তুতি",
  docChecklist: "নথির চেকলিস্ট",
  locationMatches: "অবস্থান আপনার প্রোফাইলের সঙ্গে মেলে",
  openYearRound: "সারা বছর খোলা",
  nextCycle: "পরবর্তী কিস্তির সময়কাল",
  stateWindow: "রাজ্যভিত্তিক সময়সীমা",
  aadhaarReady: "আধার-প্রস্তুত আবেদন",
  incomeRelevant: "আয়ের সীমা প্রাসঙ্গিক মনে হচ্ছে",
  details: "বিবরণ",
  profileDetailsMatch: "প্রোফাইলের তথ্য মিলে যায়",
  addYourState: "আপনার রাজ্য যোগ করুন",
  completeMoreDetails: "ব্যক্তিগত মিল দেখতে আরও প্রোফাইলের তথ্য সম্পূর্ণ করুন।",
  coreDetailsComplete: "আপনার মূল যোগ্যতার তথ্য সম্পূর্ণ হয়েছে।",
  completeProfileBtn: "প্রোফাইল সম্পূর্ণ করুন",
  addDetailsPrompt: "ভালো যোগ্যতা মিলের জন্য এই তথ্য যোগ করুন:",
  appStats: "আবেদনের পরিসংখ্যান:",
  noApplicationsYet: "এখনও কোনো আবেদন নেই",
  viewScheme: "প্রকল্প দেখুন",
  viewDashboard: "ড্যাশবোর্ড দেখুন",
  startApplication: "আবেদন শুরু করুন",
  downloadChecklist: "চেকলিস্ট ডাউনলোড করুন",
  share: "শেয়ার করুন",
  assistantExplainHelp: "সহায়ক প্যানেল প্রকল্পের শর্তগুলি সহজ ভাষায় ব্যাখ্যা করতে পারে।",
  checkOfficialEligibility: "সরকারি যোগ্যতা পরীক্ষা করুন",
  collectRequiredDocs: "প্রয়োজনীয় নথি সংগ্রহ করুন",
  applyOnPortal: "সরকারি পোর্টালে আবেদন করুন",
  trackStatus: "আবেদনের অবস্থা ট্র্যাক করুন",
  searchPlaceholder: "নাম বা বিভাগ দিয়ে প্রকল্প খুঁজুন...",
  schemesEligibleHeading: "আপনি যে প্রকল্পগুলির জন্য যোগ্য হতে পারেন",
  configureProfilePrompt: "নিজের জন্য উপযুক্ত প্রকল্প দেখতে প্রোফাইলের তথ্য সেট করুন।",
  allIndia: "সারা ভারত",
  healthcare: "স্বাস্থ্যসেবা",
  agriculture: "কৃষি",
  housing: "আবাসন",
  education: "শিক্ষা",
  foodSecurity: "খাদ্য নিরাপত্তা",

  // Profile Form & Options
  profileSetup: "প্রোফাইল সেটআপ",
  loadingProfile: "নাগরীক প্রোফাইল লোড হচ্ছে...",
  saveDraft: "খসড়া সংরক্ষণ করুন",
  saveProfile: "প্রোফাইল সংরক্ষণ করুন",
  continueDashboard: "ড্যাশবোর্ডে যান",
  selectOption: "নির্বাচন করুন",
  identity: "পরিচয়",
  dob: "জন্মতারিখ",
  gender: "লিঙ্গ",
  maritalStatus: "বৈবাহিক অবস্থা",
  state: "রাজ্য",
  district: "জেলা",
  preferredLanguage: "পছন্দের ভাষা",
  household: "পরিবার",
  householdSize: "পরিবারের সদস্যসংখ্যা (যেমন ৪)",
  residenceType: "বাসস্থানের ধরন",
  socialCategory: "সামাজিক শ্রেণি",
  minorityStatus: "সংখ্যালঘু অবস্থা",
  disabilityStatus: "প্রতিবন্ধিতা অবস্থা",
  houseOwnership: "বাড়ির মালিকানা",
  rationCardType: "রেশন কার্ডের ধরন",
  primaryNeed: "প্রধান প্রয়োজন",
  incomeAndOccupation: "আয় ও পেশা",
  annualIncome: "বার্ষিক পারিবারিক আয়",
  primaryOccupation: "প্রধান পেশা",
  employmentStatus: "কর্মসংস্থানের অবস্থা",
  educationLevel: "সর্বোচ্চ শিক্ষার স্তর",
  landholding: "জমির মালিকানা (প্রযোজ্য হলে)",
  bankAccountStatus: "ব্যাংক অ্যাকাউন্টের অবস্থা",
  lpgConnection: "এলপিজি সংযোগ",
  aadhaarConsent: "আমার বৈধ আধার কার্ড আছে",
  single: "অবিবাহিত",
  married: "বিবাহিত",
  widowed: "বিধবা/বিধুর",
  divorced: "তালাকপ্রাপ্ত",
  ruralSemiUrban: "গ্রামীণ / আধা-শহুরে",
  urban: "শহুরে",
  owned: "নিজস্ব",
  rented: "ভাড়া",
  none: "কিছুই নয়",
  available: "উপলব্ধ",
  notAvailable: "উপলব্ধ নয়",
  employed: "চাকরিজীবী",
  selfEmployed: "স্বনিযুক্ত",
  unemployed: "বেকার",
  student: "ছাত্র",
  retired: "অবসরপ্রাপ্ত",
  noFormalEducation: "কোনও প্রাতিষ্ঠানিক শিক্ষা নেই",
  school: "স্কুল",
  higherSecondary: "উচ্চ মাধ্যমিক",
  graduate: "স্নাতক",
  postgraduate: "স্নাতকোত্তর",
  male: "পুরুষ",
  female: "মহিলা",
  preferNotToSay: "জানাতে চাই না",
  scCategory: "এসসি",
  stCategory: "এসটি",
  obcCategory: "ওবিসি",
  generalCategory: "সাধারণ",
  yes: "হ্যাঁ",
  no: "না",
  aayRation: "এএওয়াই",
  bplRation: "বিপিএল",
  nfsaRation: "এনএফএসএ",
  validNameError: "অক্ষর ও স্পেস ব্যবহার করে একটি বৈধ নাম লিখুন।",
  profileSavedSuccess: "প্রোফাইল সফলভাবে সংরক্ষিত হয়েছে!",
  failedSaveProfile: "প্রোফাইল সংরক্ষণ ব্যর্থ হয়েছে।",
  errorConnectingServer: "সার্ভারের সাথে সংযোগে ত্রুটি।",
  savedProfilePersists: "সংরক্ষিত প্রোফাইলের তথ্য এখন ডেটাবেসে নিরাপদে থাকে।",
  usingSavedProfileMatch: "সংরক্ষিত প্রোফাইলের মিল ব্যবহার করা হচ্ছে",
  checkingEligibility: "যোগ্যতা পরীক্ষা করা হচ্ছে...",
  schemesRanked: "যোগ্যতা ইঞ্জিন থেকে র‌্যাঙ্ক করা প্রকল্প",
  selectedLabel: "নির্বাচিত:",
  slugLabel: "স্লাগ",
  categoryLabel: "বিভাগ",
  ministryLabel: "মন্ত্রণালয়",
  benefitLabel: "সুবিধা",
  deadlineLabel: "সময়সীমা",

  // Settings
  preferencesTitle: "পছন্দ ও অ্যাক্সেসিবিলিটি",
  preferencesSavedDesc: "আপনার পছন্দগুলি আপনার JanSeva অ্যাকাউন্টে সংরক্ষিত হয় এবং সব ডিভাইসে প্রযোজ্য।",
  deadlineAlerts: "প্রকল্পের সময়সীমার সতর্কতা",
  newEligibilityMatches: "নতুন যোগ্যতার মিল",
  statusUpdates: "আবেদনের স্থিতি আপডেট",
  showSensitiveAmounts: "সংবেদনশীল সুবিধার পরিমাণ দেখান",
  allowReminders: "প্রোফাইল সম্পূর্ণতার অনুস্মারক অনুমোদন করুন",
  savePreferences: "পছন্দ সংরক্ষণ করুন",
  saving: "সংরক্ষণ করা হচ্ছে...",

  // Assistant Component
  askJanSevaAi: "JanSeva AI-কে জিজ্ঞাসা করুন",
  assistantGreeting: "নমস্কার! এই পেজ, প্রকল্প, যোগ্যতা বা আবেদন সম্পর্কে জিজ্ঞাসা করুন।",
  typeQuestionPlaceholder: "আপনার প্রশ্ন লিখুন...",
  send: "পাঠান",
  sendMessage: "বার্তা পাঠান",
  closeAssistant: "সহায়ক বন্ধ করুন",
  dynamicGuidance: "বর্তমান প্রকল্প ও যোগ্যতার তথ্যভিত্তিক নির্দেশনা।",
  typeMessagePlaceholder: "একটি বার্তা লিখুন...",
  chatRefreshed: "চ্যাট রিফ্রেশ হয়েছে। আমি কীভাবে সাহায্য করতে পারি?",
  thinking: "ভাবছি...",
  contextLabel: "প্রসঙ্গ:",
  highlyEligible: "অত্যন্ত যোগ্য",
  matchScore: "মিলের স্কোর",
  documentsNeeded: "প্রয়োজন",
  eligibilityChecklist: "যোগ্যতার চেকলিস্ট",
  applicationSteps: "আবেদনের ধাপ",
  followInstructions: "প্রকল্পের নির্দেশাবলী মনোযোগ দিয়ে অনুসরণ করুন।",
  needHelp: "সাহায্য দরকার?",
  updateProfile: "প্রোফাইল আপডেট করুন",
  aiUnavailable: "JanSeva AI সাময়িকভাবে উপলব্ধ নয়।",
  aiNotConfigured: "JanSeva AI এখনও কনফিগার করা হয়নি।",
  pleaseAskQuestion: "অনুগ্রহ করে একটি প্রশ্ন করুন।",
  couldNotFindAnswer: "আমি এখনও উত্তর খুঁজে পাইনি।",
  couldNotPrepareAnswer: "আমি উত্তর প্রস্তুত করতে পারিনি।",

  // Admin Portal
  loadingAdmin: "অ্যাডমিন পোর্টাল লোড হচ্ছে…",
  govtAdmin: "সরকারি প্রশাসন",
  totalUsers: "মোট ব্যবহারকারী",
  totalSchemes: "মোট প্রকল্প",
  totalApplications: "মোট আবেদন",
  userManagement: "ব্যবহারকারী ব্যবস্থাপনা",
  contactHeader: "যোগাযোগ",
  roleHeader: "ভূমিকা",
  statusHeader: "অবস্থা",
  activeStatus: "সক্রিয়",
  inactiveStatus: "নিষ্ক্রিয়",
  deactivateBtn: "নিষ্ক্রিয় করুন",
  schemeManagement: "প্রকল্প ব্যবস্থাপনা",
  schemeTitleHeader: "প্রকল্পের শিরোনাম",
  amountHeader: "পরিমাণ",
  addSchemeBtn: "প্রকল্প যোগ করুন",
  updateSchemeBtn: "প্রকল্প আপডেট করুন",
  cancelBtn: "বাতিল করুন",
  editBtn: "সম্পাদনা করুন",
  deleteBtn: "মুছুন",
  analyticsSettings: "বিশ্লেষণ ও সেটিংস",
  listedSchemesExplore: "অন্বেষণের জন্য তালিকাভুক্ত প্রকল্প",

  // Generic / Errors
  unauthorized: "অননুমোদিত",
  loginRequired: "লগইন প্রয়োজন",
  userNotFound: "ব্যবহারকারী পাওয়া যায়নি",
  internalServerError: "অভ্যন্তরীণ সার্ভার ত্রুটি",
  missingRequiredFields: "প্রয়োজনীয় ক্ষেত্র অনুপস্থিত",
  unexpectedError: "একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
};

export const Tamil: Dictionary = {
  // Navigation & Shell
  home: "முகப்பு",
  schemes: "திட்டங்கள்",
  assistant: "உதவியாளர்",
  profile: "சுயவிவரம்",
  settings: "அமைப்புகள்",
  dashboard: "டாஷ்போர்டு",
  schemeListing: "திட்டப் பட்டியல்",
  aiAssistant: "AI உதவியாளர்",
  adminPortal: "நிர்வாகி போர்டல்",
  notifications: "அறிவிப்புகள்",
  logout: "வெளியேறு",
  search: "திட்டங்கள், நன்மைகள் அல்லது உதவியைத் தேடுங்கள்...",
  welcome: "வரவேற்கிறோம், குடிமகனே",
  verifyAadhaar: "உங்கள் ஆதாரைச் சரிபார்க்கவும்",
  account: "கணக்கு",
  menu: "மெனு",
  language: "மொழி",
  privacy: "தனியுரிமை",
  appearance: "தோற்றம் மற்றும் அணுகல்தன்மை",
  refreshChat: "அரட்டையைப் புதுப்பிக்கவும்",
  readyToHelp: "உதவத் தயார்",
  askAbout: "திட்டங்கள், தகுதி அல்லது ஆவணங்களைப் பற்றி கேளுங்கள்.",
  settingsSaved: "அமைப்புகள் வெற்றிகரமாகச் சேமிக்கப்பட்டன.",

  // Auth / Login / Register
  login: "உள்நுழைவு",
  register: "பதிவு",
  loginTitle: "குடிமக்கள் கணக்கு",
  loginSubtitle: "உங்கள் நன்மைப் பயணத்தைத் தொடர உள்நுழையவும் அல்லது பதிவு செய்யவும்",
  citizenAccount: "குடிமக்கள் கணக்கு",
  loginRegister: "உள்நுழைவு/பதிவு",
  contactPlaceholder: "பதிவு செய்யப்பட்ட தொடர்பை உள்ளிடவும்",
  passwordPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
  confirmPasswordPlaceholder: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
  reEnterPasswordPlaceholder: "உங்கள் கடவுச்சொல்லை மீண்டும் உள்ளிடவும்",
  fullName: "முழுப் பெயர்",
  mobileOrEmail: "மொபைல் எண் அல்லது மின்னஞ்சல்",
  password: "கடவுச்சொல்",
  confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
  rememberMe: "என்னை நினைவில் வைத்திருங்கள்",
  forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
  createAccount: "கணக்கை உருவாக்கு",
  alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
  dontHaveAccount: "கணக்கு இல்லையா?",
  signIn: "உள்நுழைக",
  secureAccess: "பாதுகாப்பான குடிமக்கள் அணுகல்",
  processing: "செயலாக்கப்படுகிறது...",
  loginFailed: "உள்நுழைவு தோல்வியடைந்தது",
  registrationFailed: "பதிவு தோல்வியடைந்தது",
  passwordsDoNotMatch: "கடவுச்சொற்கள் பொருந்தவில்லை.",
  useStrongerPassword: "வலுவான கடவுச்சொல்லைப் பயன்படுத்தவும் அல்லது பரிந்துரைக்கப்பட்ட கடவுச்சொல்லைத் தேர்ந்தெடுக்கவும்.",
  suggestStrongPassword: "வலுவான கடவுச்சொல்லைப் பரிந்துரைக்கவும்",
  strong: "வலுவானது",
  good: "நல்லது",
  weak: "பலவீனமானது",
  required: "தேவை",

  // Landing / Home
  govtInitiative: "இந்திய அரசின் முயற்சி",
  findBenefits: "அரசு நன்மைகளைக் கண்டறியுங்கள்",
  eligibleFor: "நீங்கள் தகுதியுடையவை",
  landingSubtitle: "தெளிவான பலமொழி இடைமுகம் மூலம் இந்திய நலத்திட்டங்களைக் கண்டறிந்து விண்ணப்பங்களைத் தயாரிக்கவும்.",
  getStarted: "தொடங்குங்கள்",
  howItWorks: "இது எவ்வாறு செயல்படுகிறது",
  onlineReady: "ஆன்லைனில் தயார்",
  landingAiPitch: "வணக்கம். கல்வி, சுகாதாரம், வீடு மற்றும் விவசாய நன்மைகளைக் கண்டறிய உதவுகிறேன்.",
  approvedBenefits: "அங்கீகரிக்கப்பட்ட நன்மைகள்",
  registeredCitizens: "பதிவு செய்யப்பட்ட குடிமக்கள்",
  schemesIndexed: "பட்டியலிடப்பட்ட திட்டங்கள்",
  languagesAvailable: "கிடைக்கும் மொழிகள்",
  tagline: "சிறந்த நிர்வாகம், சிறந்த வாழ்க்கை",
  footerDesc: "ஒவ்வொரு குடிமகனுக்காகவும் பதிலளிக்கும் பக்கங்கள் மற்றும் பலமொழி இடைமுகத்துடன் வடிவமைக்கப்பட்டது.",
  featureEligibilityTitle: "உடனடி தகுதி பொருத்தம்",
  featureRegionalTitle: "பிராந்திய மொழி இடைமுகம்",
  featurePrivacyTitle: "தனியுரிமை முன்னுரிமை படிவங்கள்",

  // Dashboard & Scheme Listing
  allSchemes: "அனைத்து திட்டங்கள்",
  exploreSchemes: "அரசுத் திட்டங்களை ஆராயுங்கள்",
  schemesAvailable: "கிடைக்கும் திட்டங்கள்",
  benefitsAccessed: "பெற்ற நன்மைகள்",
  citizensAssisted: "உதவி பெற்ற குடிமக்கள்",
  languagesSupported: "ஆதரிக்கப்படும் மொழிகள்",
  viewDetails: "விவரங்கள் மற்றும் விண்ணப்ப செயல்முறையைப் பார்க்கவும் →",
  profileBasedMatches: "சுயவிவர அடிப்படையிலான திட்டப் பொருத்தங்கள்",
  basedOnProfile: "சேமிக்கப்பட்ட சுயவிவரத்தின் அடிப்படையில்",
  completeProfileMatches: "பொருத்தங்களைப் பெற சுயவிவரத்தை முடிக்கவும்",
  schemesFound: "திட்டங்கள் கிடைத்தன",
  profileCompletion: "சுயவிவர நிறைவு",
  eligibleSchemes: "தகுதியான திட்டங்கள்",
  viewAll: "அனைத்தையும் பார்க்கவும்",
  profileChecklist: "சுயவிவர சரிபார்ப்புப் பட்டியல்",
  recentApplications: "சமீபத்திய விண்ணப்பங்கள்",
  noApplicationsSaved: "இதுவரை விண்ணப்பங்கள் சேமிக்கப்படவில்லை.",
  completeProfilePrompt: "உங்கள் குடிமக்கள் சுயவிவரத்தை முடிக்கவும்",
  profileReadiness: "சுயவிவரத் தயார்நிலை",
  docChecklist: "ஆவண சரிபார்ப்புப் பட்டியல்",
  locationMatches: "இருப்பிடம் உங்கள் சுயவிவரத்துடன் பொருந்துகிறது",
  openYearRound: "ஆண்டு முழுவதும் திறந்திருக்கும்",
  nextCycle: "அடுத்த தவணைச் சுழற்சி",
  stateWindow: "மாநில வாரியான காலம்",
  aadhaarReady: "ஆதார் தயார் விண்ணப்பம்",
  incomeRelevant: "வருமான வரம்பு பொருத்தமாக உள்ளது",
  details: "விவரங்கள்",
  profileDetailsMatch: "சுயவிவர விவரங்கள் பொருந்துகின்றன",
  addYourState: "உங்கள் மாநிலத்தைச் சேர்க்கவும்",
  completeMoreDetails: "தனிப்பயன் பொருத்தங்களைக் காண மேலும் சுயவிவர விவரங்களை முடிக்கவும்.",
  coreDetailsComplete: "உங்கள் முக்கிய தகுதி விவரங்கள் முடிந்துவிட்டன.",
  completeProfileBtn: "சுயவிவரத்தை முடிக்கவும்",
  addDetailsPrompt: "சிறந்த தகுதி பொருத்தத்திற்கு இந்த விவரங்களைச் சேர்க்கவும்:",
  appStats: "விண்ணப்ப புள்ளிவிவரங்கள்:",
  noApplicationsYet: "இதுவரை விண்ணப்பங்கள் இல்லை",
  viewScheme: "திட்டத்தைப் பார்க்கவும்",
  viewDashboard: "டாஷ்போர்டைப் பார்க்கவும்",
  startApplication: "விண்ணப்பத்தைத் தொடங்கவும்",
  downloadChecklist: "சரிபார்ப்புப் பட்டியலைப் பதிவிறக்கவும்",
  share: "பகிரவும்",
  assistantExplainHelp: "உதவியாளர் பலகை திட்ட விதிமுறைகளை எளிய மொழியில் விளக்கலாம்.",
  checkOfficialEligibility: "அதிகாரப்பூர்வ தகுதியைச் சரிபார்க்கவும்",
  collectRequiredDocs: "தேவையான ஆவணங்களைச் சேகரிக்கவும்",
  applyOnPortal: "அதிகாரப்பூர்வ போர்ட்டலில் விண்ணப்பிக்கவும்",
  trackStatus: "விண்ணப்ப நிலையை கண்காணிக்கவும்",
  searchPlaceholder: "பெயர் அல்லது வகை மூலம் திட்டங்களைத் தேடுங்கள்...",
  schemesEligibleHeading: "நீங்கள் தகுதியுடைய திட்டங்கள்",
  configureProfilePrompt: "உங்களுக்கான திட்டங்களைக் காண சுயவிவர விவரங்களை அமைக்கவும்.",
  allIndia: "இந்தியா முழுவதும்",
  healthcare: "சுகாதாரம்",
  agriculture: "விவசாயம்",
  housing: "வீட்டுவசதி",
  education: "கல்வி",
  foodSecurity: "உணவுப் பாதுகாப்பு",

  // Profile Form & Options
  profileSetup: "சுயவிவர அமைப்பு",
  loadingProfile: "குடிமக்கள் சுயவிவரம் ஏற்றப்படுகிறது...",
  saveDraft: "வரைவைச் சேமிக்கவும்",
  saveProfile: "சுயவிவரத்தைச் சேமிக்கவும்",
  continueDashboard: "டாஷ்போர்டுக்குச் செல்லவும்",
  selectOption: "தேர்ந்தெடுக்கவும்",
  identity: "அடையாளம்",
  dob: "பிறந்த தேதி",
  gender: "பாலினம்",
  maritalStatus: "திருமண நிலை",
  state: "மாநிலம்",
  district: "மாவட்டம்",
  preferredLanguage: "விருப்ப மொழி",
  household: "குடும்பம்",
  householdSize: "குடும்ப அளவு (எ.கா. 4)",
  residenceType: "வசிப்பிட வகை",
  socialCategory: "சமூகப் பிரிவு",
  minorityStatus: "சிறுபான்மை நிலை",
  disabilityStatus: "மாற்றுத்திறன் நிலை",
  houseOwnership: "வீட்டு உரிமை",
  rationCardType: "ரேஷன் அட்டை வகை",
  primaryNeed: "முதன்மை தேவை",
  incomeAndOccupation: "வருமானம் மற்றும் தொழில்",
  annualIncome: "ஆண்டு குடும்ப வருமானம்",
  primaryOccupation: "முதன்மை தொழில்",
  employmentStatus: "வேலை நிலை",
  educationLevel: "உயர்ந்த கல்வி நிலை",
  landholding: "நில உரிமை (பொருந்தினால்)",
  bankAccountStatus: "வங்கிக் கணக்கு நிலை",
  lpgConnection: "LPG இணைப்பு",
  aadhaarConsent: "என்னிடம் செல்லுபடியாகும் ஆதார் அட்டை உள்ளது",
  single: "திருமணமாகாதவர்",
  married: "திருமணமானவர்",
  widowed: "விதவை/விதவர்",
  divorced: "விவாகரத்து பெற்றவர்",
  ruralSemiUrban: "கிராமப்புறம் / அரை நகர்ப்புறம்",
  urban: "நகர்ப்புறம்",
  owned: "சொந்தமானது",
  rented: "வாடகை",
  none: "எதுவுமில்லை",
  available: "கிடைக்கிறது",
  notAvailable: "கிடைக்கவில்லை",
  employed: "வேலை செய்பவர்",
  selfEmployed: "சுயதொழில் செய்பவர்",
  unemployed: "வேலையற்றவர்",
  student: "மாணவர்",
  retired: "ஓய்வுபெற்றவர்",
  noFormalEducation: "முறையான கல்வி இல்லை",
  school: "பள்ளி",
  higherSecondary: "மேல்நிலை",
  graduate: "பட்டதாரி",
  postgraduate: "முதுகலை",
  male: "ஆண்",
  female: "பெண்",
  preferNotToSay: "சொல்ல விரும்பவில்லை",
  scCategory: "SC",
  stCategory: "ST",
  obcCategory: "OBC",
  generalCategory: "பொது",
  yes: "ஆம்",
  no: "இல்லை",
  aayRation: "AAY",
  bplRation: "BPL",
  nfsaRation: "NFSA",
  validNameError: "எழுத்துகள் மற்றும் இடைவெளிகளைப் பயன்படுத்தி சரியான பெயரை உள்ளிடவும்.",
  profileSavedSuccess: "சுயவிவரம் வெற்றிகரமாகச் சேமிக்கப்பட்டது!",
  failedSaveProfile: "சுயவிவரத்தைச் சேமிக்க முடியவில்லை.",
  errorConnectingServer: "சேவையகத்துடன் இணைப்பதில் பிழை.",
  savedProfilePersists: "சேமிக்கப்பட்ட சுயவிவர விவரங்கள் இப்போது தரவுத்தளத்தில் பாதுகாப்பாக சேமிக்கப்படுகின்றன.",
  usingSavedProfileMatch: "சேமிக்கப்பட்ட சுயவிவரப் பொருத்தம் பயன்படுத்தப்படுகிறது",
  checkingEligibility: "தகுதி சரிபார்க்கப்படுகிறது...",
  schemesRanked: "தகுதி இயந்திரத்தால் வரிசைப்படுத்தப்பட்ட திட்டங்கள்",
  selectedLabel: "தேர்ந்தெடுக்கப்பட்டது:",
  slugLabel: "ஸ்லக்",
  categoryLabel: "வகை",
  ministryLabel: "அமைச்சகம்",
  benefitLabel: "நன்மை",
  deadlineLabel: "காலக்கெடு",

  // Settings
  preferencesTitle: "விருப்பங்கள் மற்றும் அணுகல்தன்மை",
  preferencesSavedDesc: "உங்கள் விருப்பங்கள் உங்கள் JanSeva கணக்கில் சேமிக்கப்பட்டு அனைத்து சாதனங்களிலும் பயன்படுத்தப்படும்.",
  deadlineAlerts: "திட்ட காலக்கெடு எச்சரிக்கைகள்",
  newEligibilityMatches: "புதிய தகுதி பொருத்தங்கள்",
  statusUpdates: "விண்ணப்ப நிலை புதுப்பிப்புகள்",
  showSensitiveAmounts: "முக்கியமான நன்மைத் தொகைகளைக் காட்டவும்",
  allowReminders: "சுயவிவர সম্পূর্ণতার நினைவூட்டல்களை அனுமதிக்கவும்",
  savePreferences: "விருப்பங்களைச் சேமிக்கவும்",
  saving: "சேமிக்கப்படுகிறது...",

  // Assistant Component
  askJanSevaAi: "JanSeva AI-யிடம் கேளுங்கள்",
  assistantGreeting: "வணக்கம்! இந்தப் பக்கம், திட்டங்கள், தகுதி அல்லது விண்ணப்பங்களைப் பற்றி கேளுங்கள்.",
  typeQuestionPlaceholder: "உங்கள் கேள்வியை உள்ளிடுங்கள்...",
  send: "அனுப்பவும்",
  sendMessage: "செய்தியை அனுப்பவும்",
  closeAssistant: "உதவியாளரை மூடவும்",
  dynamicGuidance: "தற்போதைய திட்டம் மற்றும் தகுதி தரவின் அடிப்படையிலான வழிகாட்டுதல்.",
  typeMessagePlaceholder: "செய்தியை உள்ளிடவும்...",
  chatRefreshed: "அரட்டை புதுப்பிக்கப்பட்டது. நான் எவ்வாறு உதவலாம்?",
  thinking: "சிந்திக்கிறேன்...",
  contextLabel: "சூழல்:",
  highlyEligible: "மிகவும் தகுதியானவர்",
  matchScore: "பொருத்த மதிப்பெண்",
  documentsNeeded: "தேவை",
  eligibilityChecklist: "தகுதி சரிபார்ப்புப் பட்டியல்",
  applicationSteps: "விண்ணப்பப் படிகள்",
  followInstructions: "திட்ட வழிமுறைகளை கவனமாகப் பின்பற்றவும்.",
  needHelp: "உதவி தேவையா?",
  updateProfile: "சுயவிவரத்தைப் புதுப்பிக்கவும்",
  aiUnavailable: "JanSeva AI தற்காலிகமாக கிடைக்கவில்லை.",
  aiNotConfigured: "JanSeva AI இன்னும் கட்டமைக்கப்படவில்லை.",
  pleaseAskQuestion: "தயவுசெய்து ஒரு கேள்வியைக் கேளுங்கள்.",
  couldNotFindAnswer: "என்னால் இன்னும் பதிலைக் கண்டுபிடிக்க முடியவில்லை.",
  couldNotPrepareAnswer: "என்னால் பதிலைத் தயாரிக்க முடியவில்லை.",

  // Admin Portal
  loadingAdmin: "நிர்வாகி போர்டல் ஏற்றப்படுகிறது…",
  govtAdmin: "அரசு நிர்வாகம்",
  totalUsers: "மொத்த பயனர்கள்",
  totalSchemes: "மொத்த திட்டங்கள்",
  totalApplications: "மொத்த விண்ணப்பங்கள்",
  userManagement: "பயனர் மேலாண்மை",
  contactHeader: "தொடர்பு",
  roleHeader: "பங்கு",
  statusHeader: "நிலை",
  activeStatus: "செயலில்",
  inactiveStatus: "செயலற்ற",
  deactivateBtn: "செயலிழக்கச் செய்யவும்",
  schemeManagement: "திட்ட மேலாண்மை",
  schemeTitleHeader: "திட்டத் தலைப்பு",
  amountHeader: "தொகை",
  addSchemeBtn: "திட்டத்தைச் சேர்க்கவும்",
  updateSchemeBtn: "திட்டத்தைப் புதுப்பிக்கவும்",
  cancelBtn: "ரத்து செய்யவும்",
  editBtn: "திருத்தவும்",
  deleteBtn: "நீக்கவும்",
  analyticsSettings: "பகுப்பாய்வு மற்றும் அமைப்புகள்",
  listedSchemesExplore: "ஆராய பட்டியலிடப்பட்ட திட்டங்கள்",

  // Generic / Errors
  unauthorized: "அங்கீகரிக்கப்படாதது",
  loginRequired: "உள்நுழைவு தேவை",
  userNotFound: "பயனர் கிடைக்கவில்லை",
  internalServerError: "உள் சேவையகப் பிழை",
  missingRequiredFields: "தேவையான புலங்கள் இல்லை",
  unexpectedError: "எதிர்பாராத பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
};

export const Telugu: Dictionary = {
  // Navigation & Shell
  home: "హోమ్",
  schemes: "పథకాలు",
  assistant: "సహాయకుడు",
  profile: "ప్రొఫైల్",
  settings: "సెట్టింగ్‌లు",
  dashboard: "డాష్‌బోర్డ్",
  schemeListing: "పథకాల జాబితా",
  aiAssistant: "AI సహాయకుడు",
  adminPortal: "అడ్మిన్ పోర్టల్",
  notifications: "నోటిఫికేషన్‌లు",
  logout: "లాగ్ అవుట్",
  search: "పథకాలు, ప్రయోజనాలు లేదా సహాయం వెతకండి...",
  welcome: "స్వాగతం, పౌరుడా",
  verifyAadhaar: "మీ ఆధార్‌ను ధృవీకరించండి",
  account: "ఖాతా",
  menu: "మెను",
  language: "భాష",
  privacy: "గోప్యత",
  appearance: "రూపం మరియు అందుబాటు",
  refreshChat: "చాట్ రిఫ్రెష్ చేయండి",
  readyToHelp: "సహాయానికి సిద్ధంగా ఉంది",
  askAbout: "పథకాలు, అర్హత లేదా పత్రాల గురించి అడగండి.",
  settingsSaved: "సెట్టింగ్‌లు విజయవంతంగా సేవ్ చేయబడ్డాయి.",

  // Auth / Login / Register
  login: "లాగిన్",
  register: "నమోదు",
  loginTitle: "పౌర ఖాతా",
  loginSubtitle: "మీ ప్రయోజనాల ప్రయాణాన్ని కొనసాగించడానికి లాగిన్ లేదా నమోదు చేయండి",
  citizenAccount: "పౌర ఖాతా",
  loginRegister: "లాగిన్/నమోదు",
  contactPlaceholder: "నమోదిత సంప్రదింపును నమోదు చేయండి",
  passwordPlaceholder: "పాస్‌వర్డ్ నమోదు చేయండి",
  confirmPasswordPlaceholder: "పాస్‌వర్డ్‌ను నిర్ధారించండి",
  reEnterPasswordPlaceholder: "మీ పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి",
  fullName: "పూర్తి పేరు",
  mobileOrEmail: "మొబైల్ నంబర్ లేదా ఇమెయిల్",
  password: "పాస్‌వర్డ్",
  confirmPassword: "పాస్‌వర్డ్‌ను నిర్ధారించండి",
  rememberMe: "నన్ను గుర్తుంచుకోండి",
  forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా?",
  createAccount: "ఖాతా సృష్టించండి",
  alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా?",
  dontHaveAccount: "ఖాతా లేదా?",
  signIn: "సైన్ ఇన్",
  secureAccess: "సురక్షిత పౌర ప్రాప్యత",
  processing: "ప్రాసెస్ అవుతోంది...",
  loginFailed: "లాగిన్ విఫలమైంది",
  registrationFailed: "నమోదు విఫలమైంది",
  passwordsDoNotMatch: "పాస్‌వర్డ్‌లు సరిపోలడం లేదు.",
  useStrongerPassword: "బలమైన పాస్‌వర్డ్‌ను ఉపయోగించండి లేదా సూచించిన పాస్‌వర్డ్‌ను ఎంచుకోండి.",
  suggestStrongPassword: "బలమైన పాస్‌వర్డ్‌ను సూచించండి",
  strong: "బలమైనది",
  good: "మంచిది",
  weak: "బలహీనమైనది",
  required: "అవసరం",

  // Landing / Home
  govtInitiative: "భారత ప్రభుత్వ చొరవ",
  findBenefits: "ప్రభుత్వ ప్రయోజనాలను కనుగొనండి",
  eligibleFor: "మీరు అర్హత పొందినవి",
  landingSubtitle: "స్పష్టమైన బహుభాషా ఇంటర్‌ఫేస్‌తో భారతీయ సంక్షేమ పథకాలను కనుగొని, అర్థం చేసుకుని దరఖాస్తులు సిద్ధం చేయండి.",
  getStarted: "ప్రారంభించండి",
  howItWorks: "ఇది ఎలా పనిచేస్తుంది",
  onlineReady: "ఆన్‌లైన్‌లో సిద్ధంగా ఉంది",
  landingAiPitch: "నమస్తే. విద్య, ఆరోగ్యం, గృహనిర్మాణం మరియు వ్యవసాయ ప్రయోజనాలను కనుగొనడంలో నేను సహాయపడతాను.",
  approvedBenefits: "ఆమోదించబడిన ప్రయోజనాలు",
  registeredCitizens: "నమోదైన పౌరులు",
  schemesIndexed: "సూచికలోని పథకాలు",
  languagesAvailable: "అందుబాటులో ఉన్న భాషలు",
  tagline: "మెరుగైన పాలన, మెరుగైన జీవితం",
  footerDesc: "ప్రతి పౌరుడి కోసం స్పందించే పేజీలు మరియు బహుభాషా UIతో రూపొందించబడింది.",
  featureEligibilityTitle: "తక్షణ అర్హత సరిపోలిక",
  featureRegionalTitle: "ప్రాంతీయ భాషా ఇంటర్‌ఫేస్",
  featurePrivacyTitle: "గోప్యతకు ప్రాధాన్యమిచ్చే ఫారమ్‌లు",

  // Dashboard & Scheme Listing
  allSchemes: "అన్ని పథకాలు",
  exploreSchemes: "ప్రభుత్వ పథకాలను అన్వేషించండి",
  schemesAvailable: "అందుబాటులో ఉన్న పథకాలు",
  benefitsAccessed: "పొందిన ప్రయోజనాలు",
  citizensAssisted: "సహాయం పొందిన పౌరులు",
  languagesSupported: "మద్దతు ఉన్న భాషలు",
  viewDetails: "వివరాలు మరియు దరఖాస్తు ప్రక్రియను చూడండి →",
  profileBasedMatches: "ప్రొఫైల్ ఆధారిత పథక సరిపోలికలు",
  basedOnProfile: "మీ సేవ్ చేసిన ప్రొఫైల్ ఆధారంగా",
  completeProfileMatches: "సరిపోలికలు పొందడానికి మీ ప్రొఫైల్ పూర్తి చేయండి",
  schemesFound: "పథకాలు కనుగొనబడ్డాయి",
  profileCompletion: "ప్రొఫైల్ పూర్తి",
  eligibleSchemes: "అర్హత ఉన్న పథకాలు",
  viewAll: "అన్నింటినీ చూడండి",
  profileChecklist: "ప్రొఫైల్ చెక్‌లిస్ట్",
  recentApplications: "ఇటీవలి దరఖాస్తులు",
  noApplicationsSaved: "ఇంకా దరఖాస్తులు సేవ్ చేయబడలేదు.",
  completeProfilePrompt: "మీ పౌర ప్రొఫైల్‌ను పూర్తి చేయండి",
  profileReadiness: "ప్రొఫైల్ సిద్ధత",
  docChecklist: "పత్రాల చెక్‌లిస్ట్",
  locationMatches: "స్థానం మీ ప్రొఫైల్‌తో సరిపోలుతోంది",
  openYearRound: "ఏడాది పొడవునా తెరిచి ఉంటుంది",
  nextCycle: "తదుపరి వాయిదా చక్రం",
  stateWindow: "రాష్ట్రాల వారీ సమయం",
  aadhaarReady: "ఆధార్ సిద్ధమైన దరఖాస్తు",
  incomeRelevant: "ఆదాయ పరిధి సంబంధితంగా ఉంది",
  details: "వివరాలు",
  profileDetailsMatch: "ప్రొఫైల్ వివరాలు సరిపోతున్నాయి",
  addYourState: "మీ రాష్ట్రాన్ని జోడించండి",
  completeMoreDetails: "వ్యక్తిగత సరిపోలికలు చూడటానికి మరిన్ని ప్రొఫైల్ వివరాలు పూర్తి చేయండి.",
  coreDetailsComplete: "మీ ప్రధాన అర్హత వివరాలు పూర్తయ్యాయి.",
  completeProfileBtn: "ప్రొఫైల్ పూర్తి చేయండి",
  addDetailsPrompt: "మెరుగైన అర్హత సరిపోలిక కోసం ఈ వివరాలను జోడించండి:",
  appStats: "దరఖాస్తు గణాంకాలు:",
  noApplicationsYet: "ఇంకా దరఖాస్తులు లేవు",
  viewScheme: "పథకాన్ని చూడండి",
  viewDashboard: "డాష్‌బోర్డ్ చూడండి",
  startApplication: "దరఖాస్తు ప్రారంభించండి",
  downloadChecklist: "చెక్‌లిస్ట్‌ను డౌన్‌లోడ్ చేయండి",
  share: "భాగస్వామ్యం చేయండి",
  assistantExplainHelp: "సహాయక ప్యానెల్ పథకం నిబంధనలను సరళమైన భాషలో వివరించగలదు.",
  checkOfficialEligibility: "అధికారిక అర్హతను తనిఖీ చేయండి",
  collectRequiredDocs: "అవసరమైన పత్రాలను సేకరించండి",
  applyOnPortal: "అధికారిక పోర్టల్‌లో దరఖాస్తు చేయండి",
  trackStatus: "దరఖాస్తు స్థితిని ట్రాక్ చేయండి",
  searchPlaceholder: "పేరు లేదా వర్గం ద్వారా పథకాలను వెతకండి...",
  schemesEligibleHeading: "మీరు అర్హత పొందగల పథకాలు",
  configureProfilePrompt: "మీకు అనుకూలమైన పథకాలను చూడటానికి ప్రొఫైల్ వివరాలను కాన్ఫిగర్ చేయండి.",
  allIndia: "అఖిల భారత",
  healthcare: "ఆరోగ్య సంరక్షణ",
  agriculture: "వ్యవసాయం",
  housing: "గృహనిర్మాణం",
  education: "విద్య",
  foodSecurity: "ఆహార భద్రత",

  // Profile Form & Options
  profileSetup: "ప్రొఫైల్ సెటప్",
  loadingProfile: "పౌర ప్రొఫైల్ లోడ్ అవుతోంది...",
  saveDraft: "డ్రాఫ్ట్ సేవ్ చేయండి",
  saveProfile: "ప్రొఫైల్‌ను సేవ్ చేయండి",
  continueDashboard: "డాష్‌బోర్డ్‌కు కొనసాగండి",
  selectOption: "ఎంచుకోండి",
  identity: "గుర్తింపు",
  dob: "పుట్టిన తేదీ",
  gender: "లింగం",
  maritalStatus: "వైవాహిక స్థితి",
  state: "రాష్ట్రం",
  district: "జిల్లా",
  preferredLanguage: "ఇష్టమైన భాష",
  household: "కుటుంబం",
  householdSize: "కుటుంబ పరిమాణం (ఉదా. 4)",
  residenceType: "నివాస రకం",
  socialCategory: "సామాజిక వర్గం",
  minorityStatus: "మైనారిటీ స్థితి",
  disabilityStatus: "వైకల్య స్థితి",
  houseOwnership: "ఇంటి యాజమాన్యం",
  rationCardType: "రేషన్ కార్డు రకం",
  primaryNeed: "ప్రధాన అవసరం",
  incomeAndOccupation: "ఆదాయం మరియు వృత్తి",
  annualIncome: "వార్షిక కుటుంబ ఆదాయం",
  primaryOccupation: "ప్రధాన వృత్తి",
  employmentStatus: "ఉపాధి స్థితి",
  educationLevel: "అత్యున్నత విద్యా స్థాయి",
  landholding: "భూమి కలిగి ఉండటం (వర్తిస్తే)",
  bankAccountStatus: "బ్యాంక్ ఖాతా స్థితి",
  lpgConnection: "LPG కనెక్షన్",
  aadhaarConsent: "నా వద్ద చెల్లుబాటు అయ్యే ఆధార్ కార్డు ఉంది",
  single: "అవివాహితుడు/అవివాహిత",
  married: "వివాహితుడు/వివాహిత",
  widowed: "వితంతువు/వితంతుడు",
  divorced: "విడాకులు పొందినవారు",
  ruralSemiUrban: "గ్రామీణ / సెమీ-అర్బన్",
  urban: "పట్టణ",
  owned: "సొంతం",
  rented: "అద్దె",
  none: "ఏదీ లేదు",
  available: "అందుబాటులో ఉంది",
  notAvailable: "అందుబాటులో లేదు",
  employed: "ఉద్యోగి",
  selfEmployed: "స్వయం ఉపాధి",
  unemployed: "నిరుద్యోగి",
  student: "విద్యార్థి",
  retired: "విరమణ పొందినవారు",
  noFormalEducation: "ఔపచారిక విద్య లేదు",
  school: "పాఠశాల",
  higherSecondary: "ఉన్నత మాధ్యమిక",
  graduate: "గ్రాడ్యుయేట్",
  postgraduate: "పోస్ట్‌గ్రాడ్యుయేట్",
  male: "పురుషుడు",
  female: "స్త్రీ",
  preferNotToSay: "చెప్పకూడదని కోరుకుంటున్నాను",
  scCategory: "ఎస్సీ",
  stCategory: "ఎస్టీ",
  obcCategory: "ఓబీసీ",
  generalCategory: "సాధారణ",
  yes: "అవును",
  no: "కాదు",
  aayRation: "ఏఏవై",
  bplRation: "బీపీఎల్",
  nfsaRation: "ఎన్ఎఫ్ఎస్ఏ",
  validNameError: "అక్షరాలు మరియు ఖాళీలను ఉపయోగించి చెల్లుబాటు అయ్యే పేరు నమోదు చేయండి.",
  profileSavedSuccess: "ప్రొఫైల్ విజయవంతంగా సేవ్ చేయబడింది!",
  failedSaveProfile: "ప్రొఫైల్‌ను సేవ్ చేయడం విఫలమైంది.",
  errorConnectingServer: "సర్వర్‌కు కనెక్ట్ చేయడంలో లోపం.",
  savedProfilePersists: "సేవ్ చేసిన ప్రొఫైల్ వివరాలు ఇప్పుడు డేటాబేస్‌లో సురక్షితంగా ఉంటాయి.",
  usingSavedProfileMatch: "సేవ్ చేసిన ప్రొఫైల్ సరిపోలికను ఉపయోగిస్తోంది",
  checkingEligibility: "అర్హత తనిఖీ చేస్తోంది...",
  schemesRanked: "అర్హత ఇంజిన్ ద్వారా ర్యాంక్ చేసిన పథకాలు",
  selectedLabel: "ఎంచుకున్నది:",
  slugLabel: "స్లగ్",
  categoryLabel: "వర్గం",
  ministryLabel: "మంత్రిత్వ శాఖ",
  benefitLabel: "ప్రయోజనం",
  deadlineLabel: "గడువు",

  // Settings
  preferencesTitle: "ప్రాధాన్యతలు మరియు అందుబాటు",
  preferencesSavedDesc: "మీ ప్రాధాన్యతలు మీ JanSeva ఖాతాలో సేవ్ చేయబడి అన్ని పరికరాల్లో వర్తిస్తాయి.",
  deadlineAlerts: "పథక గడువు హెచ్చరికలు",
  newEligibilityMatches: "కొత్త అర్హత సరిపోలికలు",
  statusUpdates: "దరఖాస్తు స్థితి నవీకరణలు",
  showSensitiveAmounts: "సున్నితమైన ప్రయోజన మొత్తాలను చూపించండి",
  allowReminders: "ప్రొఫైల్ పూర్తయిన రిమైండర్‌లను అనుమతించండి",
  savePreferences: "ప్రాధాన్యతలను సేవ్ చేయండి",
  saving: "సేవ్ అవుతోంది...",

  // Assistant Component
  askJanSevaAi: "JanSeva AIని అడగండి",
  assistantGreeting: "నమస్తే! ఈ పేజీ, పథకాలు, అర్హత లేదా దరఖాస్తుల గురించి అడగండి.",
  typeQuestionPlaceholder: "మీ ప్రశ్నను టైప్ చేయండి...",
  send: "పంపండి",
  sendMessage: "సందేశం పంపండి",
  closeAssistant: "సహాయకుడిని మూసివేయండి",
  dynamicGuidance: "ప్రస్తుత పథకం మరియు అర్హత డేటాతో మార్గదర్శనం.",
  typeMessagePlaceholder: "సందేశాన్ని టైప్ చేయండి...",
  chatRefreshed: "చాట్ రిఫ్రెష్ అయింది. నేను ఎలా సహాయం చేయగలను?",
  thinking: "ఆలోచిస్తున్నాను...",
  contextLabel: "సందర్భం:",
  highlyEligible: "అత్యంత అర్హత",
  matchScore: "సరిపోలిక స్కోర్",
  documentsNeeded: "అవసరం",
  eligibilityChecklist: "అర్హత చెక్‌లిస్ట్",
  applicationSteps: "దరఖాస్తు దశలు",
  followInstructions: "పథకం సూచనలను జాగ్రత్తగా అనుసరించండి.",
  needHelp: "సహాయం కావాలా?",
  updateProfile: "ప్రొఫైల్‌ను నవీకరించండి",
  aiUnavailable: "JanSeva AI తాత్కాలికంగా అందుబాటులో లేదు.",
  aiNotConfigured: "JanSeva AI ఇంకా కాన్ఫిగర్ చేయబడలేదు.",
  pleaseAskQuestion: "దయచేసి ఒక ప్రశ్న అడగండి.",
  couldNotFindAnswer: "నేను ఇంకా సమాధానం కనుగొనలేకపోయాను.",
  couldNotPrepareAnswer: "నేను సమాధానం సిద్ధం చేయలేకపోయాను.",

  // Admin Portal
  loadingAdmin: "అడ్మిన్ పోర్టల్ లోడ్ అవుతోంది…",
  govtAdmin: "ప్రభుత్వ పరిపాలన",
  totalUsers: "మొత్తం వినియోగదారులు",
  totalSchemes: "మొత్తం పథకాలు",
  totalApplications: "మొత్తం దరఖాస్తులు",
  userManagement: "వినియోగదారు నిర్వహణ",
  contactHeader: "సంప్రదింపు",
  roleHeader: "పాత్ర",
  statusHeader: "స్థితి",
  activeStatus: "క్రియాశీల",
  inactiveStatus: "నిష్క్రియ",
  deactivateBtn: "నిష్క్రియం చేయండి",
  schemeManagement: "పథకాల నిర్వహణ",
  schemeTitleHeader: "పథకం శీర్షిక",
  amountHeader: "మొత్తం",
  addSchemeBtn: "పథకాన్ని జోడించండి",
  updateSchemeBtn: "పథకాన్ని నవీకరించండి",
  cancelBtn: "రద్దు చేయండి",
  editBtn: "సవరించండి",
  deleteBtn: "తొలగించండి",
  analyticsSettings: "విశ్లేషణ & సెట్టింగ్‌లు",
  listedSchemesExplore: "అన్వేషించడానికి జాబితా చేసిన పథకాలు",

  // Generic / Errors
  unauthorized: "అనధికారికం",
  loginRequired: "లాగిన్ అవసరం",
  userNotFound: "వినియోగదారు కనుగొనబడలేదు",
  internalServerError: "అంతర్గత సర్వర్ లోపం",
  missingRequiredFields: "అవసరమైన ఫీల్డ్‌లు లేవు",
  unexpectedError: "ఊహించని లోపం సంభవించింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
};

export const dictionaries: Record<Language, Dictionary> = {
  English,
  "हिन्दी": Hindi,
  "বাংলা": Bengali,
  "தமிழ்": Tamil,
  "తెలుగు": Telugu,
};

/**
 * Gets localized text for a given key.
 * Always falls back to English if key is missing in selected language,
 * ensuring no undefined, null, or empty string is ever displayed.
 */
export function getTranslation(language: Language, key: keyof Dictionary): string {
  const dict = dictionaries[language] ?? dictionaries.English;
  const val = dict[key] ?? dictionaries.English[key];
  if (!val) {
    return key;
  }
  return val;
}

/**
 * Audits language dictionaries at startup/dev time.
 * Logs an error if any non-English language is missing keys present in English.
 */
export function auditDictionaries(): void {
  const englishKeys = Object.keys(English) as (keyof Dictionary)[];
  let hasMissing = false;

  for (const lang of languages) {
    if (lang === "English") continue;
    const dict = dictionaries[lang];
    const missing: string[] = [];
    for (const key of englishKeys) {
      if (!dict[key]) {
        missing.push(key);
      }
    }
    if (missing.length > 0) {
      hasMissing = true;
      console.error(`[i18n Audit Error] Language "${lang}" is missing ${missing.length} keys:`, missing);
    }
  }

  if (!hasMissing) {
    console.info(`[i18n Audit Passed] All 5 languages have 100% key coverage across ${englishKeys.length} keys.`);
  }
}

// Run audit once on load
if (process.env.NODE_ENV !== "production") {
  auditDictionaries();
}
