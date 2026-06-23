import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "@/components/enquiry/EnquiryProvider";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Kayigi Tours & Travel — Uganda Safaris & 4×4 Hire",
  description:
    "Ugandan-owned safari operator. Gorilla trekking, chimp tracking, savanna game drives and safari-ready 4×4 hire across Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <EnquiryProvider>
          <Masthead />
          {children}
          <Footer />
        </EnquiryProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
