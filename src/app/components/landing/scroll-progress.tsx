"use client";

import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    setProgress((scrollPosition / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary shadow-[0_0_10px_theme(colors.primary)]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
