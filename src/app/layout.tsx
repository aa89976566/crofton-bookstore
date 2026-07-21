import type { Metadata } from "next";
import { Alegreya, Source_Sans_3 } from "next/font/google";
import { BookDetail } from "@/components/BookDetail";
import { Footer } from "@/components/Footer";
import { ReservePanel } from "@/components/ReservePanel";
import { ShopProvider } from "@/components/ShopContext";
import { SiteHeader } from "@/components/SiteHeader";
import { store } from "@/data/store";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: `${store.name} ${store.tagline}`,
  description: store.shortPitch,
  openGraph: {
    title: `${store.name} ${store.tagline}`,
    description: store.shortPitch,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`h-full ${alegreya.variable} ${sourceSans.variable}`}>
      <body className="min-h-full antialiased">
        <ShopProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
          <BookDetail />
          <ReservePanel />
        </ShopProvider>
      </body>
    </html>
  );
}
