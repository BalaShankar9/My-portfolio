import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/nav/navbar";
import { StatusBar } from "@/components/nav/status-bar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { AvatarGuide } from "@/components/ui/avatar-guide";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://balabollineni.dev"),
  title: "Bala Sankar Bollineni — Full Stack Builder",
  description: "7 products shipped. All self-taught. All in production. Full stack builder based in Cardiff, UK.",
  keywords: ["Bala Sankar Bollineni", "full stack developer", "TypeScript", "Python", "AI agents", "Cardiff"],
  authors: [{ name: "Bala Sankar Bollineni" }],
  openGraph: {
    title: "Bala Sankar Bollineni — Full Stack Builder",
    description: "7 products shipped. All self-taught. All in production.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0f1115] text-[#e4e4e7] font-sans antialiased">
        <Navbar />
        <StatusBar />
        <CursorGlow />
        {children}
        <AvatarGuide />
      </body>
    </html>
  );
}
