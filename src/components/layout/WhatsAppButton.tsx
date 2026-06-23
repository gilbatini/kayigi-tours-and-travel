"use client";

import { MessageCircle } from "lucide-react";

const phone = "256701004000";
const message =
  "Hi Kayigi Tours! 👋 I'm interested in your car hire & safari fleet. Could you share availability and rates?";
const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kayigi on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
