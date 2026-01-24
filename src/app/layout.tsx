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
    default: "Semloh Systems Corp | Global Investment & Technology",
    template: "%s | Semloh Systems Corp"
  },
  description: "Semloh Systems Corp is a Chicago-based diversified holding company specializing in quantitative equity strategies via Holmes and Paskewitz Capital LLC and institutional software infrastructure via Semloh Software LLC.",
  keywords: ["Semloh Systems Corp", "Holmes and Paskewitz Capital", "HP Capital", "Semloh Software", "George S Holmes", "Quantitative Trading Chicago", "Fintech Infrastructure", "Cayman Islands Funds"],
  authors: [{ name: "George S Holmes" }],
  creator: "George S Holmes",
  publisher: "Semloh Systems Corp",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://semlohsystems.com',
    siteName: 'Semloh Systems Corp',
    title: 'Semloh Systems Corp | Global Investment & Technology',
    description: 'Chicago-based parent company of Holmes and Paskewitz Capital LLC and Semloh Software LLC. Founded in 2024.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semloh Systems Corp',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans font-light flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
