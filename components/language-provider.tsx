"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import {
  Dictionary,
  Language,
  getTranslation,
  languageCodes,
  languageLabels,
  languages,
} from "@/lib/i18n/dictionaries";

export { languages, languageCodes, languageLabels };
export type { Language, Dictionary };

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Dictionary | string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "English",
  setLanguage: () => {},
  t: (key) => (typeof key === "string" ? key : ""),
});

export function LanguageProvider({
  children,
  initialLanguage = "English",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    // 1. Cookie check
    const cookieValue = document.cookie
      .split(";")
      .map((item) => item.trim())
      .find((item) => item.startsWith("janseva-language="))
      ?.split("=")
      .slice(1)
      .join("=");
    const cookieLanguage = cookieValue ? (decodeURIComponent(cookieValue) as Language) : undefined;

    // 2. localStorage check
    const saved = localStorage.getItem("janseva-language") as Language;

    if (cookieLanguage && languages.includes(cookieLanguage)) {
      setLanguageState(cookieLanguage);
      document.documentElement.lang = languageCodes[cookieLanguage];
      return;
    }

    if (saved && languages.includes(saved)) {
      setLanguageState(saved);
      document.documentElement.lang = languageCodes[saved];
      return;
    }

    // 3. User account settings check
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.language && languages.includes(data.language)) {
          setLanguageState(data.language);
          document.documentElement.lang = languageCodes[data.language as Language];
        }
      })
      .catch(() => {});
  }, []);

  const setLanguage = (next: Language) => {
    if (!languages.includes(next)) return;
    setLanguageState(next);

    // Save to localStorage
    try {
      localStorage.setItem("janseva-language", next);
    } catch {}

    // Save to Cookie
    document.cookie = `janseva-language=${encodeURIComponent(next)}; path=/; max-age=31536000; samesite=lax`;

    // Set HTML lang attribute
    document.documentElement.lang = languageCodes[next];

    // Sync to backend user account settings
    fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: next }),
    }).catch(() => {});
  };

  const t = (key: keyof Dictionary | string): string => {
    if (!key) return "";
    return getTranslation(language, key as keyof Dictionary);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

/**
 * Declarative translation primitive for dictionary keys.
 */
export function T({ id, children }: { id?: keyof Dictionary; children?: string }) {
  const { t } = useLanguage();
  const key = id || (children as keyof Dictionary);
  return <>{t(key)}</>;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={`Language: ${languageLabels[language]}`}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-outline-variant bg-white px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container-low"
      >
        <Globe2 size={18} className="text-primary" />
        <span>{languageLabels[language]}</span>
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute right-0 top-12 z-[80] min-w-36 rounded-xl border border-outline-variant bg-white p-1 shadow-xl">
          {languages.map((item) => (
            <button
              key={item}
              type="button"
              aria-current={item === language}
              onClick={() => {
                setLanguage(item);
                setOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                item === language ? "bg-primary text-white font-semibold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              {languageLabels[item]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
