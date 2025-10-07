import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: "profit-screenshot-1",
      name: "Alex D.",
      handle: "Trader",
      review: "The 100% rule strategy is a game-changer. My win rate has never been higher. Thank you, Rocket Signals!",
    },
    {
      id: "telegram-review-1",
      name: "Jessica P.",
      handle: "New Member",
      review: "Joined last week and already in profit. The community is so helpful and the signals are incredibly accurate.",
    },
    {
      id: "profit-screenshot-2",
      name: "Mike T.",
      handle: "Veteran Trader",
      review: "I've been in many groups, but this is the first one that delivers on its promises. Real results, real mentorship.",
    },
    {
      id: "telegram-review-2",
      name: "Sarah L.",
      handle: "Part-time Trader",
      review: "Finally a system that works with my busy schedule. The live calls are the best part. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-card py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Members Say 🏆
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Real success stories from traders in our VIP community. Your success is our mission.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.id
            );
            return (
              <Card key={testimonial.id} className="flex flex-col overflow-hidden">
                {image && (
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-foreground/80">"{testimonial.review}"</p>
                </CardContent>
                <CardFooter>
                  <div className="font-semibold">
                    {testimonial.name}
                    <span className="ml-2 font-normal text-foreground/60">
                      - {testimonial.handle}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
