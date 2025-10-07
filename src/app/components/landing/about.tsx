import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const benefits = [
    "Deep understanding of candlestick patterns",
    "Step-by-step entry & exit rules",
    "Advanced money management strategies",
    "Real-time examples with live charts",
  ];
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28">
      <div className="container grid max-w-3xl gap-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Master Binary Trading with a 100% Rule-Based System 💡
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Our course isn't about guesswork. It's a proven, mechanical system
            designed for consistency. We provide you with the exact rules to
            follow, removing emotion from your trading and paving the way for
            profitable decisions.
          </p>
          <ul className="mt-6 grid max-w-md grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#testimonials">
                See Proof of Results <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
