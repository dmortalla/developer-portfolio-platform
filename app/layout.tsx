import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteProfile } from "@/lib/site/profile";

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
  title: {
    default: `${siteProfile.name} | Data & AI Engineer`,
    template: `%s | ${siteProfile.name}`,
  },
  description:
    "Production-style data, analytics, machine learning, MLOps, and generative AI systems by Darrell Mortalla.",
  openGraph: {
    title: `${siteProfile.name} | Data & AI Engineer`,
    description:
      "Production-style data, analytics, machine learning, MLOps, and generative AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-zinc-950 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <div className="flex-1">{children}</div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
