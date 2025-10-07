"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is this course beginner-friendly?",
      answer:
        "Absolutely. We start with the fundamentals of binary trading and build up to our pro-level strategies. You'll learn everything you need, from basics to advanced techniques, all in one place.",
    },
    {
      question: "Do I need to pay to join the VIP group?",
      answer:
        "No, there is no direct fee for the VIP group. Access is granted for free after you create a new account with our partner broker (Binomo or Quotex) using our link and make your first deposit.",
    },
    {
      question: "What if I lose trades?",
      answer:
        "Losing trades is a part of trading. However, our strategy is designed to maximize wins and minimize losses. By following our money management rules, your risk per trade is minimized to under 1%, protecting your capital while you learn.",
    },
    {
      question: "How many signals do you provide daily?",
      answer:
        "The number of signals varies based on market conditions. We prioritize quality over quantity. On an average day, you can expect 5-10 high-probability signals during active market hours.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Have questions? We've got answers. If you don't see your question
            here, feel free to ask in our public Telegram group.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
