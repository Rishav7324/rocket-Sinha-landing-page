import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: "profit-screenshot-1",
      name: "Rohan S.",
      handle: "Trader",
      review: "Yeh 100% rule strategy toh mind-blowing hai. Mera win rate itna high kabhi nahi tha. Shukriya, Rocket Signals!",
    },
    {
      id: "telegram-review-1",
      name: "Priya M.",
      handle: "New Member",
      review: "Pichle hafte join kiya aur already profit mein. Community bahut helpful hai aur signals bhi ekdam accurate hain.",
    },
    {
      id: "profit-screenshot-2",
      name: "Vikram T.",
      handle: "Veteran Trader",
      review: "Bohot saare groups join kiye, par pehli baar koi group mila jo apne promises poore karta hai. Asli results, asli guidance.",
    },
    {
      id: "telegram-review-2",
      name: "Aisha K.",
      handle: "Part-time Trader",
      review: "Finally ek aisa system mila jo mere busy schedule ke saath kaam karta hai. Live calls sabse best part hai. Highly recommended!",
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
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === testimonial.id
                );
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className="sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card className="flex h-full flex-col overflow-hidden">
                        {image && (
                          <div className="aspect-[3/4] overflow-hidden">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={400}
                              height={600}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-foreground/80">
                            "{testimonial.review}"
                          </p>
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
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
