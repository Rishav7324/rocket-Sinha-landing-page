import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#results", label: "Results" },
    { href: "/blog", label: "Blog" },
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  <Link href="#" className="mr-6 flex items-center space-x-2">
                    <Rocket className="h-6 w-6 text-primary" />
                    <span className="font-bold">Rocket Signals</span>
                  </Link>
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  ))}
                  <Button asChild>
                    <a
                      href="https://t.me/+QB3nsZ9T4L80NDQ9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Telegram
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
