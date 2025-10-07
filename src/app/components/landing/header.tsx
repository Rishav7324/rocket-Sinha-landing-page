import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold">Rocket Signals</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <a href="https://t.me/OFFICIALbinomobull" target="_blank" rel="noopener noreferrer">
              Join Telegram
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
