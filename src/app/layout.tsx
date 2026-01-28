import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Ensure thin weights are available
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://semlohsystems.com'),
  title: {
    default: "Semloh | Global Investment & Technology",
    template: "%s | Semloh"
  },
  description: "Semloh is a Chicago-based trading firm specializing in research-driven, math-based investing via Semloh Trading Group and institutional software infrastructure via Semloh Software Systems LLC.",
  keywords: ["Semloh", "Semloh Trading Group", "Semloh Software Systems LLC", "HP Capital", "George S Holmes", "Quantitative Trading Chicago", "Mathematical Investing", "Research-Based Trading", "Fintech Infrastructure", "Cayman Islands Funds"],
  authors: [{ name: "George S Holmes" }],
  creator: "George S Holmes",
  publisher: "Semloh",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://semlohsystems.com',
    siteName: 'Semloh',
    title: 'Semloh | Global Investment & Technology',
    description: 'Chicago-based home of Semloh Trading Group and Semloh Software Systems LLC. Founded in 2024.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semloh',
    description: 'Global investment management and technology infrastructure.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans font-normal flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
