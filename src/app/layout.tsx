/**
 * Ildiz layout: shriftlar va meta ma'lumot.
 *
 * Shriftlar `next/font/google` orqali o'z hostimizdan beriladi — dizayndagi
 * `@font-face` ro'yxati bilan bir xil oila va qalinliklar (Display 600/700,
 * Text 400/500/600). CSS ularni `--fd` / `--ft` orqali oladi.
 */
import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";

import { SITE } from "@/content/site";
import "./globals.css";

const display = Wix_Madefor_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-yl-display",
  display: "swap",
});

const text = Wix_Madefor_Text({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-yl-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  // Rasmsiz "summary" ataylab: tasdiqlangan dizaynda ijtimoiy tarmoq uchun
  // kartochka rasmi yo'q, mavjud bo'lmagan faylga ishora qilmaymiz.
  twitter: {
    card: "summary",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
