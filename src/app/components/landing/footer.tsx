import { Rocket, Telegram, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Home: "#home",
    About: "#about",
    FAQ: "#faq",
  };
  const socialLinks = {
    Telegram: "https://t.me/OFFICIALbinomobull",
    YouTube: "https://youtube.com",
    Instagram: "https://instagram.com",
  };

  return (
    <footer className="w-full border-t border-border/40 bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Rocket Signals</span>
            </Link>
            <p className="mt-2 text-sm text-foreground/60">
              Your launchpad to consistent trading profits.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              {Object.entries(footerLinks).map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/60 hover:text-primary"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-2 flex space-x-4">
              <Link href={socialLinks.Telegram} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
                <Telegram className="h-6 w-6" />
              </Link>
              <Link href={socialLinks.YouTube} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Rocket Signals. All Rights Reserved.</p>
          <p className="mt-2">
            <strong>Disclaimer:</strong> Trading involves financial risk. Past
            performance is not indicative of future results. Only invest what
            you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
