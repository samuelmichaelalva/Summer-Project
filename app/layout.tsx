import type { Metadata } from "next";
import { AuthProvider } from "@/components/auth-provider";
import { AssistantWidget } from "@/components/assistant-widget";
import "./globals.css";

export const metadata: Metadata = {
  title: "JanSeva",
  description: "Government schemes and citizen benefits portal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>{children}<AssistantWidget /></AuthProvider>
      </body>
    </html>
  );
}
