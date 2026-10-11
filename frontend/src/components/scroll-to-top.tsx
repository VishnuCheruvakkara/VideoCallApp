"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 flex h-11 w-11 animate-in items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-lg shadow-primary/30 backdrop-blur transition hover:-translate-y-1 hover:bg-primary/90" aria-label="Scroll to top"><ArrowUp className="h-4 w-4" /></button>;
}
