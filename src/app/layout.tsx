import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "Eng. Muhammed Khaled | Senior Software Engineer & Web Developer Tutor",
  description: "Senior Software Engineer with 5+ years experience building healthcare tech platforms (SehaPracto) and teaching web development. Learn React, Next.js, and modern front-end technologies.",
  keywords: [
    "Muhammed Khaled",
    "Software Engineer",
    "SehaPracto developer",
    "Web development course Arabic",
    "Frontend course Cairo",
    "React developer Egypt",
    "كورس تطوير ويب",
    "محمد خالد مهندس برمجيات"
  ],
  authors: [{ name: "Eng. Muhammed Khaled" }],
  creator: "Eng. Muhammed Khaled",
  openGraph: {
    title: "Eng. Muhammed Khaled | Senior Software Engineer & Web Developer Tutor",
    description: "Professional portfolio and coding courses. Learn React, Tailwind, and Modern Web Dev with 1-on-1 mentorship.",
    url: siteConfig.domain,
    siteName: "Muhammed Khaled Personal Portal",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-16 sm:pt-20">
            {children}
          </main>
          <WhatsAppButton />
        </LanguageProvider>
        
        {/* Google Analytics Integration */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
