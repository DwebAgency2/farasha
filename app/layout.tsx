import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FarashaCRP | Clinical Research Staffing That's Actually Run Trials",
  description:
    "FarashaCRP places vetted CRAs, CTMs, and CTAs with sponsors and CROs — and matches clinical research professionals with roles that fit. Founded by a 13-year clinical ops veteran.",
  keywords: [
    "clinical research staffing",
    "CRA recruiting",
    "CTM placement",
    "CTA staffing",
    "CRO consulting",
    "clinical trials staffing",
    "Amanda Sanchez RN CCRP",
  ],
  openGraph: {
    title: "FarashaCRP | Boutique Clinical Research Staffing & Consulting",
    description:
      "Boutique by design. Clinical by nature. Founded by a 13-year clinical operations veteran.",
    url: "https://farashacrp.com",
    siteName: "Farasha Clinical Research Partners",
    images: [
      {
        url: "/images/dr-amanda-1.jpg",
        width: 1200,
        height: 630,
        alt: "Amanda Sanchez, RN, CCRP - Founder & Managing Director",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-navy-950 relative">
        {/* Universal Ambient Butterfly Watermark across all pages */}
        <div className="fixed right-[-60px] top-[26%] w-[420px] sm:w-[580px] lg:w-[720px] opacity-[0.07] pointer-events-none select-none z-0">
          <img
            src="/images/farasha-butterfly.png"
            alt="Farasha Butterfly Motif"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
