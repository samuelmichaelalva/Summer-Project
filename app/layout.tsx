import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AuthProvider } from "@/components/auth-provider";
import { AssistantWidget } from "@/components/assistant-widget";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "JanSeva",
  description: "Government schemes and citizen benefits portal",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const savedLanguage = (await cookies()).get("janseva-language")?.value;
  const initialLanguage = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"].includes(savedLanguage || "") ? savedLanguage : "English";
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('janseva-theme');if(t==='dark'||t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}catch{}` }} /></head>
      <body className="font-sans antialiased">
        <AuthProvider><LanguageProvider initialLanguage={initialLanguage as "English" | "हिन्दी" | "বাংলা" | "தமிழ்" | "తెలుగు"}><ThemeProvider />{children}<AssistantWidget /></LanguageProvider></AuthProvider>
      </body>
    </html>
  );
}
