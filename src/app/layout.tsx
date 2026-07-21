import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Fraunces, Literata } from "next/font/google";
import { BackgroundArt } from "@/components/BackgroundArt";
import { BookDetail } from "@/components/BookDetail";
import { FloatingChrome } from "@/components/FloatingChrome";
import { Footer } from "@/components/Footer";
import { ReservePanel } from "@/components/ReservePanel";
import { ShopProvider } from "@/components/ShopContext";
import { store } from "@/data/store";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

const basePath = process.env.GITHUB_PAGES === "true" ? "/crofton-bookstore" : "";

const textureStyles = {
  ["--texture-paper"]: `url(${basePath}/textures/old-paper.jpg)`,
  ["--texture-antique"]: `url(${basePath}/textures/antique-pages.jpg)`,
} as CSSProperties;

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
    <html lang="en-GB" className={`h-full ${fraunces.variable} ${literata.variable}`}>
      <body className="min-h-full antialiased" style={textureStyles}>
        <ShopProvider>
          <BackgroundArt />
          <FloatingChrome />
          <main className="site-main">{children}</main>
          <Footer />
          <BookDetail />
          <ReservePanel />
        </ShopProvider>
      </body>
    </html>
  );
}
