"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const phone = "256701004000";
const fallback =
  "Hi Kayigi Tours! 👋 I'm interested in your car hire & safari fleet. Could you share availability and rates?";

const QUICK_REPLIES: { label: string; message: string }[] = [
  {
    label: "🚗 Car hire",
    message: "Hi Kayigi, I'd like to hire a vehicle. What's available?",
  },
  {
    label: "🦍 Safari",
    message: "Hi Kayigi, I'd like to plan a safari. What do you offer?",
  },
  {
    label: "💰 Rates",
    message: "Hi Kayigi, could you share your rates and availability?",
  },
];

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSend() {
    const text = message.trim() || fallback;
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat with Kayigi Tours & Travel"
          className="fixed bottom-24 right-4 z-50 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:right-6"
        >
          <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-lg font-semibold">
              K
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold leading-tight">
                Kayigi Tours &amp; Travel
              </div>
              <div className="truncate text-[11px] leading-tight text-white/85">
                Typically replies within minutes
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="bg-white px-4 py-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[13.5px] leading-[1.5] text-fg-1">
              Hi there! 👋 Welcome to Kayigi Tours &amp; Travel. Are you looking
              to hire a vehicle or plan a safari? Tell us what you have in mind
              and we&apos;ll get back to you on WhatsApp.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => setMessage(chip.message)}
                  className="rounded-pill border-[1.5px] border-maroon-300 bg-transparent px-3 py-[5px] text-[12.5px] font-semibold text-maroon-600 transition-colors duration-200 hover:bg-maroon-100"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end gap-2 border-t border-slate-200 bg-white p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message…"
              rows={1}
              className="max-h-28 min-h-[40px] flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-fg-1 placeholder:text-fg-3 focus:border-[#25D366] focus:outline-none"
              aria-label="Message"
            />
            <button
              type="button"
              onClick={handleSend}
              aria-label="Send on WhatsApp"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1ebd5a]"
            >
              <Send className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Chat with Kayigi on WhatsApp"}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <X className="h-7 w-7" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
