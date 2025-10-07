import Header from "@/app/components/landing/header";
import HeroSection from "@/app/components/landing/hero";
import AboutSection from "@/app/components/landing/about";
import HowItWorksSection from "@/app/components/landing/how-it-works";
import WhyJoinSection from "@/app/components/landing/why-join";
import TestimonialsSection from "@/app/components/landing/testimonials";
import FaqSection from "@/app/components/landing/faq";
import FinalCtaSection from "@/app/components/landing/final-cta";
import Footer from "@/app/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <WhyJoinSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
