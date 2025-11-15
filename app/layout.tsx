import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";

export const metadata: Metadata = {
  title: "Pink Shades Art Gallery | Original Fine Art — Curated in Pink",
  description: "Discover original fine art paintings from emerging and established artists. Curated collections in pink tones, available for purchase.",
  keywords: ["art gallery", "original paintings", "fine art", "art for sale", "contemporary art"],
  openGraph: {
    title: "Pink Shades Art Gallery | Original Fine Art — Curated in Pink",
    description: "Discover original fine art paintings from emerging and established artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Shades Art Gallery",
    description: "Original Fine Art — Curated in Pink",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}