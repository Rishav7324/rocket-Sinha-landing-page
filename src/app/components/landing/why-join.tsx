import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  ShieldCheck,
  Lock,
  BookOpen,
  Signal,
  UserCheck,
} from "lucide-react";

const WhyJoinSection = () => {
  const features = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "24/7 Mentorship",
      description:
        "Get guidance from experienced traders whenever you need it. We're here to support your growth.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Proven 100% Strategy",
      description:
        "Follow our strict, rule-based strategy to minimize risk and maximize your winning potential.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Private Telegram Group",
      description:
        "Access our exclusive community for signals, analysis, and discussions with fellow traders.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Course",
      description:
        "Receive our complete trading course and educational materials for free upon joining.",
    },
    {
      icon: <Signal className="h-8 w-8" />,
      title: "Daily Live Trade Calls",
      description:
        "Join live sessions where we take trades together, explaining the 'why' behind every move.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Thriving Community",
      description:
        "Become part of a network of 500+ traders all focused on one goal: consistent profits.",
    },
  ];

  return (
    <section id="features" className="w-full bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Join Rocket Signals? 📊🔥📘👨‍🏫
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            We provide more than just signals. We provide a complete ecosystem for
            you to become a successful, independent trader.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1 text-foreground/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
