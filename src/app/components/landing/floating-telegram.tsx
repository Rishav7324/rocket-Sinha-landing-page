"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const FloatingTelegram = () => {
  return (
    <a
      href="https://t.me/OFFICIALbinomobull"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600"
        aria-label="Join Telegram Group"
      >
        <Send className="h-7 w-7" />
      </Button>
    </a>
  );
};

export default FloatingTelegram;
