import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Mastery — Land Your First Sales Job in 21 Days",
  description:
    "Guarantee your first sales job and start earning fixed + incentive in 21 days. Industry-leading sales training program with 95% placement rate and 200+ hiring partners.",
  keywords: [
    "sales training",
    "sales career",
    "sales job",
    "sales mastery",
    "SaaS sales",
    "placement guarantee",
  ],
  openGraph: {
    title: "Sales Mastery — Land Your First Sales Job in 21 Days",
    description:
      "Guarantee your first sales job and start earning fixed + incentive in 21 days. Join 5000+ successful alumni.",
    type: "website",
    locale: "en_IN",
    siteName: "Sales Mastery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Mastery — Land Your First Sales Job in 21 Days",
    description:
      "Guarantee your first sales job and start earning fixed + incentive in 21 days.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
