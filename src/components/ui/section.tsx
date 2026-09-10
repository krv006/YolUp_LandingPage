import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "base" | "subtle" | "dark";

const TONES: Record<Tone, string> = {
  base: "bg-bg",
  subtle: "bg-bg-subtle",
  /* Gradient ATAYIN: qorong'i mavzuda sahifa foni ham #0B1020 — tekis rang
     bo'lsa seksiya fonga qo'shilib ketardi va "to'q blok" effekti yo'qolardi. */
  dark: "border-y border-white/10 bg-[linear-gradient(180deg,#0B1020_0%,#141C3C_100%)] text-[#A7B2CC]",
};

/**
 * Seksiya ritmi: oq va och kulrang fon navbatlashib keladi, "dark" esa faqat
 * xavfsizlik bo'limi uchun — u sahifadagi yagona to'q blok.
 */
export function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", TONES[tone], className)}>
      {children}
    </section>
  );
}

/** Seksiya sarlavhasi — eyebrow + h2 + tavsif uchun yagona joylashuv. */
export function SectionHeading({
  align = "center",
  className,
  children,
}: {
  align?: "center" | "left";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
