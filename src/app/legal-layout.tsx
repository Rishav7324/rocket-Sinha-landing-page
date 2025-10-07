import Link from "next/link";
import { Rocket } from "lucide-react";
import Footer from "@/app/components/landing/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold">Rocket Signals</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="prose prose-invert mx-auto max-w-4xl prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
