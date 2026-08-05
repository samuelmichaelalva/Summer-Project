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

const Context = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: Key) => string }>({ language: "English", setLanguage: () => {}, t: (key) => words.English[key] });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("English");
  useEffect(() => { const saved = localStorage.getItem("janseva-language") as Language; if (languages.includes(saved)) setLanguageState(saved); fetch("/api/settings").then((r) => r.ok ? r.json() : null).then((data) => data?.language && languages.includes(data.language) && setLanguageState(data.language)); }, []);
  const setLanguage = (next: Language) => { setLanguageState(next); localStorage.setItem("janseva-language", next); document.documentElement.lang = next; fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ language: next }) }); };
  const value = useMemo(() => ({ language, setLanguage, t: (key: Key) => words[language][key] }), [language]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useLanguage = () => useContext(Context);
