import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import { FilterProvider } from "@/context/FilterContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rakibul Hashan | Shopify & WordPress Expert",
    template: "%s | Rakibul Hashan",
  },
  description:
    "Specialized in high-performance Shopify stores, custom WordPress themes, and e-commerce growth strategies.",
  keywords: [
    "Shopify Developer",
    "WordPress Developer",
    "E-commerce",
    "Web Development",
    "Freelance Developer",
  ],
  authors: [{ name: "Rakibul Hashan" }],
  creator: "Rakibul Hashan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Rakibul Hashan Portfolio",
    title: "Rakibul Hashan | Shopify & WordPress Expert",
    description:
      "Specialized in high-performance Shopify stores, custom WordPress themes, and e-commerce growth strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakibul Hashan | Shopify & WordPress Expert",
    description:
      "Specialized in high-performance Shopify stores, custom WordPress themes, and e-commerce growth strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <FilterProvider>
          <Preloader />
          <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-slate-900">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </FilterProvider>
      </body>
    </html>
  );
}
