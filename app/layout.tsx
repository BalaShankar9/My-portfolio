import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/nav/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balabollineni.dev"),
  title: "Bala Sankar Bollineni — Builder",
  description:
    "Self-taught builder. 7 products shipped. TypeScript, Python, AI agents, and more.",
  keywords: [
    "Bala Sankar Bollineni",
    "portfolio",
    "full stack developer",
    "TypeScript",
    "Next.js",
    "Python",
    "AI agents",
    "Cardiff",
  ],
  authors: [{ name: "Bala Sankar Bollineni" }],
  openGraph: {
    title: "Bala Sankar Bollineni — Builder",
    description:
      "I taught myself to code, then shipped 7 products nobody asked me to build.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
