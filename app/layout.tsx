import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JanSeva AI",
  description: "Citizen benefits assistant UI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
