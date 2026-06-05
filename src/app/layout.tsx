import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mofebissyn Edutours Ltd — Your Global Journey Starts Here",
  description:
    "Premium education, travel, visa, transcript, and international training support for Nigerians and Africans. Coming soon.",
  keywords: [
    "Mofebissyn",
    "study abroad",
    "visa consultation",
    "transcript retrieval",
    "IELTS",
    "travel support",
    "Nigeria",
  ],
  openGraph: {
    title: "Mofebissyn Edutours Ltd",
    description:
      "A smarter global pathway for education, training, travel, and visa support.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bricolage.variable} scroll-smooth`}
    >
      <body className="noise font-body">{children}</body>
    </html>
  );
}