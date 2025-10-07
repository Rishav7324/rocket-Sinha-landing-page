import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Send, Award } from "lucide-react";
import Link from "next/link";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-primary" />,
      title: "Create Binomo Account",
      description:
        "Use our referral link to create your new Binomo or Quotex account. This is required for free VIP access.",
      link: "https://binomo.com?a=536e38a672fd&t=0",
      linkText: "Create Account",
    },
    {
      icon: <Send className="h-10 w-10 text-primary" />,
      title: "Send Trader ID",
      description:
        "After depositing, send a message with your Trader ID to our official Telegram admin for verification.",
      link: "https://t.me/OFFICIALbinomobull",
      linkText: "Message on Telegram",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Start Winning",
      description:
        "Once verified, you'll be added to the private VIP group. Get instant access to signals, courses, and mentorship!",
      link: "https://t.me/OFFICIALbinomobull",
      linkText: "Go to Telegram",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-card py-20 md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join the VIP Group in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Get exclusive access to our premium signals and community. It's
            fast, easy, and free for new members.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center"
            >
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardTitle className="text-xl font-semibold">
                  {step.title}
                </CardTitle>
                <p className="mt-2 flex-1 text-foreground/70">
                  {step.description}
                </p>
                <Link
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 font-semibold text-primary hover:underline"
                >
                  {step.linkText} &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
