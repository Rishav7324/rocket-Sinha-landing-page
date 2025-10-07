"use client";

import { useState, useEffect } from "react";

export function FomoCountdown() {
  const [seats, setSeats] = useState(37);

  useEffect(() => {
    if (seats <= 10) return;

    const randomInterval =
      Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;

    const timer = setTimeout(() => {
      setSeats((prevSeats) => (prevSeats > 10 ? prevSeats - 1 : prevSeats));
    }, randomInterval);

    return () => clearTimeout(timer);
  }, [seats]);

  return (
    <div className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary ring-1 ring-inset ring-primary/20">
      🔥 Only <span className="font-bold">{seats}</span> VIP seats left! Join Today & Get Instant Access.
    </div>
  );
}
