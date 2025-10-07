import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === "trader-at-computer"
  );
  const benefits = [
    "Deep understanding of candlestick patterns",
    "Step-by-step entry & exit rules",
    "Advanced money management strategies",
    "Real-time examples with live charts",
  ];
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Master Binary Trading with a 100% Rule-Based System 💡
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Our course isn't about guesswork. It's a proven, mechanical system
            designed for consistency. We provide you with the exact rules to
            follow, removing emotion from your trading and paving the way for
            profitable decisions.
          </p>
          <ul className="mt-6 space-y-4">
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
        <div className="flex items-center justify-center">
          {aboutImage && (
            <Card className="overflow-hidden rounded-xl shadow-2xl shadow-primary/10">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
