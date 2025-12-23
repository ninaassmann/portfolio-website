import type { Metadata } from "next";
import { DM_Serif_Text, Jost, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = DM_Serif_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const mono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nina Aßmann - Webdeveloper & Designer",
  description:
    "Personal portfolio showcasing projects, skills, and experience with React, Next.js, Tailwind CSS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
