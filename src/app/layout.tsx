import type { Metadata } from "next";
import { BackgroundArt } from "@/components/BackgroundArt";
import { BookDetail } from "@/components/BookDetail";
import { FloatingChrome } from "@/components/FloatingChrome";
import { Footer } from "@/components/Footer";
import { ReservePanel } from "@/components/ReservePanel";
import { ShopProvider } from "@/components/ShopContext";
import { store } from "@/data/store";
import "./globals.css";

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
    <html lang="en-GB" className="h-full">
      <body className="min-h-full antialiased">
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
