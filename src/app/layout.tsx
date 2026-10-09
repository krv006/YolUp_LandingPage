/**
 * Ildiz layout: shriftlar va meta ma'lumot.
 *
 * Shriftlar repo'da yotadi va `next/font/local` orqali beriladi — build
 * paytida internetdan hech narsa yuklab olinmaydi.
 *
 * NEGA `next/font/google` EMAS: u shrift fayllarini build paytida Google'dan
 * tortadi. Vercel'da bu so'rov vaqti-vaqti bilan uzilib, build'ni yiqitadi
 * (Turbopack buni chalg'ituvchi "Module not found:
 * @vercel/turbopack-next/internal/font/google/font" xatosi sifatida
 * ko'rsatadi). Fayllarni o'zimiz saqlasak, build takrorlanuvchan bo'ladi.
 *
 * `src/fonts/` dagi `.woff2` fayllar tasdiqlangan dizayn bundle'idan
 * ajratib olingan — ya'ni Google aynan shu baytlarni bergan. Quyidagi
 * e'lonlar ham dizayndagi `@font-face` to'plamini takrorlaydi: Display
 * 600 va 700 bitta faylni ko'rsatadi (Google ikkalasiga ham shuni beradi),
 * Text esa har bir qalinlik uchun alohida fayl oladi.
 */
import type { Metadata } from "next";
import localFont from "next/font/local";

import { SITE } from "@/content/site";
import "./globals.css";

/*
 * `unicode-range` ATAYLAB berilmagan. Dizaynda u bor edi, chunki u yerda
 * har bir to'plam (lotin, kirill, …) alohida fayl edi va brauzerga qaysi
 * birini olishni aytish kerak edi. Bizda faqat lotin fayli bor, qolgan
 * to'plamlar umuman yuklanmaydi — diapazondan tashqaridagi belgilar
 * (masalan √, ₁, ✓) brauzer tomonidan tizim shriftidan olinadi. Natija
 * referensdagi bilan bir xil.
 *
 * (`declarations` parametri orqali qo'shib ko'rildi — Turbopack uni
 * to'g'ri seriyalay olmadi va build yiqildi.)
 */

const wixMadeforDisplay = localFont({
  src: [
    { path: "../fonts/WixMadeforDisplay-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/WixMadeforDisplay-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-yl-display",
  display: "swap",
});

const wixMadeforText = localFont({
  src: [
    { path: "../fonts/WixMadeforText-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/WixMadeforText-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/WixMadeforText-600-latin.woff2", weight: "600", style: "normal" },
  ],
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
    <html lang="uz" className={`${wixMadeforDisplay.variable} ${wixMadeforText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
