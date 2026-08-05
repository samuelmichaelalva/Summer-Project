"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"] as const;
type Language = (typeof languages)[number];
type Key = "home" | "schemes" | "assistant" | "profile" | "settings" | "dashboard" | "schemeListing" | "aiAssistant" | "search" | "welcome" | "verifyAadhaar" | "logout" | "language" | "notifications" | "privacy" | "appearance" | "refreshChat" | "readyToHelp" | "askAbout" | "settingsSaved";
const words: Record<Language, Record<Key, string>> = {
  English: { home: "Home", schemes: "Schemes", assistant: "Assistant", profile: "Profile", settings: "Settings", dashboard: "Dashboard", schemeListing: "Scheme Listing", aiAssistant: "AI Assistant", search: "Search schemes, benefits, or help...", welcome: "Welcome, Citizen", verifyAadhaar: "Verify your Aadhaar", logout: "Logout", language: "Language", notifications: "Notifications", privacy: "Privacy", appearance: "Appearance & accessibility", refreshChat: "Refresh Chat", readyToHelp: "Ready to help", askAbout: "Ask me about schemes, eligibility, or documents.", settingsSaved: "Settings saved successfully." },
  हिन्दी: { home: "होम", schemes: "योजनाएँ", assistant: "सहायक", profile: "प्रोफ़ाइल", settings: "सेटिंग्स", dashboard: "डैशबोर्ड", schemeListing: "योजना सूची", aiAssistant: "एआई सहायक", search: "योजनाएँ, लाभ या सहायता खोजें...", welcome: "स्वागत है, नागरिक", verifyAadhaar: "अपना आधार सत्यापित करें", logout: "लॉग आउट", language: "भाषा", notifications: "सूचनाएँ", privacy: "गोपनीयता", appearance: "रूप और सुविधा", refreshChat: "चैट रीफ़्रेश करें", readyToHelp: "सहायता के लिए तैयार", askAbout: "योजनाओं, पात्रता या दस्तावेज़ों के बारे में पूछें।", settingsSaved: "सेटिंग्स सफलतापूर्वक सहेजी गईं।" },
  বাংলা: { home: "হোম", schemes: "প্রকল্প", assistant: "সহায়ক", profile: "প্রোফাইল", settings: "সেটিংস", dashboard: "ড্যাশবোর্ড", schemeListing: "প্রকল্প তালিকা", aiAssistant: "এআই সহায়ক", search: "প্রকল্প, সুবিধা বা সাহায্য খুঁজুন...", welcome: "স্বাগতম, নাগরিক", verifyAadhaar: "আপনার আধার যাচাই করুন", logout: "লগ আউট", language: "ভাষা", notifications: "বিজ্ঞপ্তি", privacy: "গোপনীয়তা", appearance: "প্রদর্শন ও সুবিধা", refreshChat: "চ্যাট রিফ্রেশ করুন", readyToHelp: "সাহায্যের জন্য প্রস্তুত", askAbout: "প্রকল্প, যোগ্যতা বা নথি সম্পর্কে জিজ্ঞাসা করুন।", settingsSaved: "সেটিংস সফলভাবে সংরক্ষিত হয়েছে।" },
  தமிழ்: { home: "முகப்பு", schemes: "திட்டங்கள்", assistant: "உதவியாளர்", profile: "சுயவிவரம்", settings: "அமைப்புகள்", dashboard: "டாஷ்போர்டு", schemeListing: "திட்டப் பட்டியல்", aiAssistant: "AI உதவியாளர்", search: "திட்டங்கள், நன்மைகள் அல்லது உதவியைத் தேடுங்கள்...", welcome: "வரவேற்கிறோம், குடிமகனே", verifyAadhaar: "உங்கள் ஆதாரைச் சரிபார்க்கவும்", logout: "வெளியேறு", language: "மொழி", notifications: "அறிவிப்புகள்", privacy: "தனியுரிமை", appearance: "தோற்றம் மற்றும் அணுகல்தன்மை", refreshChat: "அரட்டையைப் புதுப்பிக்கவும்", readyToHelp: "உதவத் தயார்", askAbout: "திட்டங்கள், தகுதி அல்லது ஆவணங்களைப் பற்றி கேளுங்கள்.", settingsSaved: "அமைப்புகள் வெற்றிகரமாகச் சேமிக்கப்பட்டன." },
  తెలుగు: { home: "హోమ్", schemes: "పథకాలు", assistant: "సహాయకుడు", profile: "ప్రొఫైల్", settings: "సెట్టింగ్‌లు", dashboard: "డాష్‌బోర్డ్", schemeListing: "పథకాల జాబితా", aiAssistant: "AI సహాయకుడు", search: "పథకాలు, ప్రయోజనాలు లేదా సహాయం వెతకండి...", welcome: "స్వాగతం, పౌరుడా", verifyAadhaar: "మీ ఆధార్‌ను ధృవీకరించండి", logout: "లాగ్ అవుట్", language: "భాష", notifications: "నోటిఫికేషన్‌లు", privacy: "గోప్యత", appearance: "రూపం మరియు అందుబాటు", refreshChat: "చాట్ రిఫ్రెష్ చేయండి", readyToHelp: "సహాయానికి సిద్ధంగా ఉంది", askAbout: "పథకాలు, అర్హత లేదా పత్రాల గురించి అడగండి.", settingsSaved: "సెట్టింగ్‌లు విజయవంతంగా సేవ్ చేయబడ్డాయి." },
};

const phrases: Record<string, Record<Language, string>> = {
  Login: { English: "Login", हिन्दी: "लॉगिन", বাংলা: "লগইন", தமிழ்: "உள்நுழைவு", తెలుగు: "లాగిన్" },
  Register: { English: "Register", हिन्दी: "पंजीकरण", বাংলা: "নিবন্ধন", தமிழ்: "பதிவு", తెలుగు: "నమోదు" },
  Password: { English: "Password", हिन्दी: "पासवर्ड", বাংলা: "পাসওয়ার্ড", தமிழ்: "கடவுச்சொல்", తెలుగు: "పాస్‌వర్డ్" },
  "Full Name": { English: "Full Name", हिन्दी: "पूरा नाम", বাংলা: "পুরো নাম", தமிழ்: "முழுப் பெயர்", తెలుగు: "పూర్తి పేరు" },
  "Mobile number or email": { English: "Mobile number or email", हिन्दी: "मोबाइल नंबर या ईमेल", বাংলা: "মোবাইল নম্বর বা ইমেল", தமிழ்: "மொபைல் எண் அல்லது மின்னஞ்சல்", తెలుగు: "మొబైల్ నంబర్ లేదా ఇమెయిల్" },
  "Remember me": { English: "Remember me", हिन्दी: "मुझे याद रखें", বাংলা: "আমাকে মনে রাখুন", தமிழ்: "என்னை நினைவில் வைத்திருங்கள்", తెలుగు: "నన్ను గుర్తుంచుకోండి" },
  "Forgot password?": { English: "Forgot password?", हिन्दी: "पासवर्ड भूल गए?", বাংলা: "পাসওয়ার্ড ভুলে গেছেন?", தமிழ்: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?", తెలుగు: "పాస్‌వర్డ్ మర్చిపోయారా?" },
  "Create account": { English: "Create account", हिन्दी: "खाता बनाएँ", বাংলা: "অ্যাকাউন্ট তৈরি করুন", தமிழ்: "கணக்கை உருவாக்கு", తెలుగు: "ఖాతా సృష్టించండి" },
  "Secure Citizen Access": { English: "Secure Citizen Access", हिन्दी: "सुरक्षित नागरिक प्रवेश", বাংলা: "নিরাপদ নাগরিক প্রবেশ", தமிழ்: "பாதுகாப்பான குடிமக்கள் அணுகல்", తెలుగు: "సురక్షిత పౌర ప్రాప్యత" },
  "Profile Setup": { English: "Profile Setup", हिन्दी: "प्रोफ़ाइल सेटअप", বাংলা: "প্রোফাইল সেটআপ", தமிழ்: "சுயவிவர அமைப்பு", తెలుగు: "ప్రొఫైల్ సెటప్" },
  "Scheme Listing": { English: "Scheme Listing", हिन्दी: "योजना सूची", বাংলা: "প্রকল্প তালিকা", தமிழ்: "திட்டப் பட்டியல்", తెలుగు: "పథకాల జాబితా" },
  "AI Assistant": { English: "AI Assistant", हिन्दी: "एआई सहायक", বাংলা: "এআই সহায়ক", தமிழ்: "AI உதவியாளர்", తెలుగు: "AI సహాయకుడు" },
  "All schemes": { English: "All schemes", हिन्दी: "सभी योजनाएँ", বাংলা: "সমস্ত প্রকল্প", தமிழ்: "அனைத்து திட்டங்கள்", తెలుగు: "అన్ని పథకాలు" },
  "View details and application process →": { English: "View details and application process →", हिन्दी: "विवरण और आवेदन प्रक्रिया देखें →", বাংলা: "বিস্তারিত ও আবেদন প্রক্রিয়া দেখুন →", தமிழ்: "விவரங்கள் மற்றும் விண்ணப்ப செயல்முறையைப் பார்க்கவும் →", తెలుగు: "వివరాలు మరియు దరఖాస్తు ప్రక్రియను చూడండి →" },
  "Type your question...": { English: "Type your question...", हिन्दी: "अपना प्रश्न लिखें...", বাংলা: "আপনার প্রশ্ন লিখুন...", தமிழ்: "உங்கள் கேள்வியை உள்ளிடுங்கள்...", తెలుగు: "మీ ప్రశ్నను టైప్ చేయండి..." },
  "Processing...": { English: "Processing...", हिन्दी: "प्रक्रिया जारी है...", বাংলা: "প্রক্রিয়া চলছে...", தமிழ்: "செயலாக்கப்படுகிறது...", తెలుగు: "ప్రాసెస్ అవుతోంది..." },
};

const Context = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: Key) => string }>({ language: "English", setLanguage: () => {}, t: (key) => words.English[key] });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("English");
  useEffect(() => { const saved = localStorage.getItem("janseva-language") as Language; if (languages.includes(saved)) setLanguageState(saved); fetch("/api/settings").then((r) => r.ok ? r.json() : null).then((data) => data?.language && languages.includes(data.language) && setLanguageState(data.language)); }, []);
  const translatePage = (next: Language) => { const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let node: Node | null; while ((node = walker.nextNode())) { const text = node.textContent?.trim(); const translated = text && (phrases[text]?.[next] || Object.entries(words).find(([, values]) => Object.values(values).includes(text))?.[1][Object.keys(words.English).find((key) => words.English[key as Key] === text) as Key]); if (text && translated && node.textContent) node.textContent = node.textContent.replace(text, translated); } };
  const setLanguage = (next: Language) => { setLanguageState(next); localStorage.setItem("janseva-language", next); document.documentElement.lang = next; translatePage(next); fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ language: next }) }); };
  const value = useMemo(() => ({ language, setLanguage, t: (key: Key) => words[language][key] }), [language]);
  useEffect(() => { if (typeof document !== "undefined") translatePage(language); }, [language]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useLanguage = () => useContext(Context);
