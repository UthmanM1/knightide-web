import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Knightide — Premium training, on your terms",
  description:
    "Knightide brings qualified Human Trainer coaching, transparent AI Trainer assistance, immersive events and connected progress into one safety-first membership.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink-950 text-mist-100 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
