"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type EnquiryContextValue = {
  isOpen: boolean;
  subject: string;
  open: (subject?: string) => void;
  close: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");

  const open = useCallback((nextSubject = "") => {
    setSubject(nextSubject);
    setIsOpen(true);
    // Phase 8 mounts <EnquiryModal /> here, gated by isOpen.
    console.log(
      `[EnquiryProvider] open() — subject: ${nextSubject || "(none)"}`,
    );
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSubject("");
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, subject, open, close }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextValue {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return ctx;
}
