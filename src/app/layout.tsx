import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ScrollProgress from "./components/landing/scroll-progress";
import FloatingTelegram from "./components/landing/floating-telegram";

export const metadata: Metadata = {
  title: "Rocket Signals — Turn Every Trade Into a Win",
  description:
    "Learn the exact strategy that’s helping 500+ traders win consistently with Binomo & Quotex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ScrollProgress />
        {children}
        <FloatingTelegram />
        <Toaster />
      </body>
    </html>
  );
}
