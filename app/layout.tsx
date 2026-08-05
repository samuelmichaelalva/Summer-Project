import type { Metadata } from "next";
import { AuthProvider } from "@/components/auth-provider";
import { AssistantWidget } from "@/components/assistant-widget";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "JanSeva",
  description: "Government schemes and citizen benefits portal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('janseva-theme');if(t==='dark'||t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}catch{}` }} /></head>
      <body className="font-sans antialiased">
        <AuthProvider><LanguageProvider><ThemeProvider />{children}<AssistantWidget /></LanguageProvider></AuthProvider>
      </body>
    </html>
  );
}
