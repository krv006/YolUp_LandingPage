import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Ketma-ket elementlarni sal kechiktirish uchun (soniyada). */
  delay?: number;
  as?: "div" | "li" | "section";
}

/**
 * Landingdagi YAGONA scroll animatsiyasi: yumshoq fade + pastdan ko'tarilish.
 * Boshqa harakat turlari ataylab qo'shilmagan — brief §22.
 *
 * `m` (`motion` emas) + App'dagi `LazyMotion` — framer-motion'ning faqat
 * kerakli qismi bundle'ga tushadi.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = m[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
