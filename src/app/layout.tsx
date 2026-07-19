import type { Metadata } from "next";
import { Fraunces, Literata, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReservePanel } from "@/components/ReservePanel";
import { ReserveProvider } from "@/components/ReserveContext";
import { store } from "@/data/store";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${store.name} ${store.tagline} | Independent bookshop`,
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
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${literata.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ReserveProvider>
          <div className="page-shell">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ReservePanel />
        </ReserveProvider>
      </body>
    </html>
  );
}
