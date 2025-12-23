import type { Metadata } from "next";

import { DM_Serif_Text, Jost, Roboto_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

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
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Nina Aßmann" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
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
