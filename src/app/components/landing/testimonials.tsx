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
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: "rohan",
      name: "Rohan S.",
      handle: "Trader",
      review: "Yeh 100% rule strategy toh mind-blowing hai. Mera win rate itna high kabhi nahi tha. Shukriya, Rocket Signals!",
    },
    {
      id: "priya",
      name: "Priya M.",
      handle: "New Member",
      review: "Pichle hafte join kiya aur already profit mein. Community bahut helpful hai aur signals bhi ekdam accurate hain.",
    },
    {
      id: "vikram",
      name: "Vikram T.",
      handle: "Veteran Trader",
      review: "Bohot saare groups join kiye, par pehli baar koi group mila jo apne promises poore karta hai. Asli results, asli guidance.",
    },
    {
      id: "aisha",
      name: "Aisha K.",
      handle: "Part-time Trader",
      review: "Finally ek aisa system mila jo mere busy schedule ke saath kaam karta hai. Live calls sabse best part hai. Highly recommended!",
    },
    {
      id: "sandeep",
      name: "Sandeep P.",
      handle: "Student",
      review: "College ke saath-saath extra income karna possible ho gaya hai. Rocket Signals ki team ko salaam!",
    },
    {
      id: "neha",
      name: "Neha G.",
      handle: "Beginner",
      review: "Trading se darr lagta tha, but inke step-by-step course ne sab aasan kar diya. Ab main confident feel karti hoon.",
    },
    {
        id: 'karan',
        name: 'Karan J.',
        handle: 'Engineer',
        review: 'Inki strategy aur money management rules ne meri trading ko next level pe पहुंचा दिया hai. Pehle main hamesha loss karta tha, but ab main consistent profit bana raha hoon. Yeh group har new trader ke liye ek blessing hai.'
    },
    {
        id: 'sunita',
        name: 'Sunita D.',
        handle: 'Homemaker',
        review: 'Ghar baithe trading se paise kamana sapna lagta tha, lekin Rocket Signals ne yeh sach kar diya. Unke signals aur support system awesome hain. Main har mahine achha खासी income generate kar leti hoon. Thank you team!'
    },
    {
        id: 'anuj',
        name: 'Anuj V.',
        handle: 'IT Professional',
        review: 'Market analysis ke liye time nahi milta tha, isliye signals pe depend rehta hoon. Is group ke signals ki accuracy kamaal ki hai. Aur inka diya hua course material itna detailed hai ki ab main khud bhi patterns samajhne laga hoon.'
    },
    {
        id: 'aditi',
        name: 'Aditi R.',
        handle: 'Analyst',
        review: 'Maine bohot se paid groups try kiye but sab jhoothe nikle. Rocket Signals pehle group hai jo free mein itni value de raha hai. Inke mentorship program ne mere saare doubts clear kar diye. Best trading community in India, hands down!'
    },
    {
        id: 'rajesh',
        name: 'Rajesh K.',
        handle: 'Small Business Owner',
        review: 'Apne business ke baad, trading meri second income source ban gayi hai, all thanks to Rocket Signals. Inka risk management system itna strong hai ki capital hamesha safe rehta hai. Main sabko yeh group join karne ki salah dunga.'
    },
    {
      id: 'pooja',
      name: 'Pooja S.',
      handle: 'Marketing Exec',
      review: 'Telegram pe inka channel mila aur life badal gayi. Signals ki quality top-notch hai.',
    },
    {
      id: 'amit',
      name: 'Amit B.',
      handle: 'Freelancer',
      review: 'Best group for binary trading. Course material amazing hai. Full support.',
    },
    {
      id: 'isha',
      name: 'Isha N.',
      handle: 'Designer',
      review: 'VIP group join karke trading mein confidence aaya. Sab log ek doosre ki help karte hain.',
    },
    {
      id: 'manoj',
      name: 'Manoj P.',
      handle: 'Sales Head',
      review: 'Inke live trading sessions se bohot kuch seekhne ko milta hai. Ekdam practical approach.',
    }
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
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="flex h-full flex-col justify-between overflow-hidden">
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
