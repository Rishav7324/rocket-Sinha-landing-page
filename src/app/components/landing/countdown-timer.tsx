"use client";

import { useState, useEffect } from "react";
import { Users, AlertCircle } from "lucide-react";

const CountdownTimer = () => {
  const [seats, setSeats] = useState(27);

  useEffect(() => {
    // Only run this effect on the client
    if (typeof window === "undefined") {
      return;
    }
    
    if (seats <= 5) return;

    const interval = setInterval(() => {
      setSeats((prevSeats) => {
        const randomDecrement = Math.floor(Math.random() * 2) + 1; // 1 or 2
        const newSeats = prevSeats - randomDecrement;
        if (newSeats <= 5) {
          clearInterval(interval);
          return 5;
        }
        return newSeats;
      });
    }, 8000 + Math.random() * 5000); // Decrease every 8-13 seconds

    return () => clearInterval(interval);
  }, [seats]);

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 ease-in-out">
      <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary shadow-inner">
        <div className="relative mr-3 flex h-5 w-5 items-center justify-center">
            <Users className="absolute animate-ping h-5 w-5 text-primary/70" />
            <Users className="relative h-5 w-5" />
        </div>
        <span>
          Only <span className="font-bold text-yellow-400">{seats}</span> VIP Seats Remaining!
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
