import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section id="final-cta" className="w-full py-20 md:py-32">
       <div className="container relative">
        <div className="absolute -inset-x-10 top-0 h-40 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl"></div>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Ready to Become a Profitable Trader?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Your journey to financial freedom starts now. Stop guessing and start
          winning with a proven system. Join a community that has your back.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="animate-glow bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a
              href="https://t.me/OFFICIALbinomobull"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Telegram VIP Group <Rocket className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://binomo.com?a=536e38a672fd&t=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Binomo Account <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-primary">
          Limited Seats. Join Today & Get Instant Access to Premium Trading
          Material.
        </p>
      </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
