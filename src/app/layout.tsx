import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReservePanel } from "@/components/ReservePanel";
import { ReserveProvider } from "@/components/ReserveContext";
import { store } from "@/data/store";
import "./globals.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/crofton-bookstore" : "";

const textureStyles = {
  ["--texture-antique"]: `url(${basePath}/textures/antique-pages.jpg)`,
  ["--texture-paper"]: `url(${basePath}/textures/old-paper.jpg)`,
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
    <html lang="en-GB" className="h-full">
      <body className="min-h-full antialiased" style={textureStyles}>
        <ReserveProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ReservePanel />
        </ReserveProvider>
      </body>
    </html>
  );
}
