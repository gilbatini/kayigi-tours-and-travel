"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "256701004000";
const GREETING = "Hi Kayigi, I'd like to plan a trip.";
const HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;

export function WhatsAppButton() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kayigi on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
