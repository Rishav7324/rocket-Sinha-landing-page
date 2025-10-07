import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Rocket, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Turn Every Trade Into a{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Win
            </span>
            <br /> Join Rocket Signals Today 🚀
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
            Learn the exact strategy that’s helping 500+ traders win
            consistently with Binomo & Quotex.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out">
          <Button size="lg" className="animate-glow bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="https://t.me/OFFICIALbinomobull" target="_blank" rel="noopener noreferrer">
              Join VIP on Telegram <Rocket className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://binomo.com?a=536e38a672fd&t=0" target="_blank" rel="noopener noreferrer">
              Open Binomo Account <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-in-out">
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            500+ Active Traders
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            100% Strategy Rules
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Verified Results
          </span>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
