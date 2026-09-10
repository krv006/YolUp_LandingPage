import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * YolUp belgisi — "Y" harfi va uning ichidan yuqoriga ko'tariluvchi strelka.
 *
 * Nega SVG, tayyor PNG emas: `docs/logo_with_bg.png` alfa kanalisiz (oq fon
 * bilan) eksport qilingan, shuning uchun qorong'i mavzuda va to'q seksiyalarda
 * oq kvadrat bo'lib chiqadi. SVG esa shaffof, har o'lchamda tiniq va mavzuga
 * bog'liq emas. PNG favicon va OG rasm sifatida `public/` da qoladi.
 */
export function YolUpMark({ className }: { className?: string }) {
  const id = useId();
  const armGradient = `${id}-arm`;
  const stemGradient = `${id}-stem`;

  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="YolUp"
      focusable="false"
    >
      <defs>
        <linearGradient id={armGradient} x1="4" y1="6" x2="42" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6C4CF1" />
          <stop offset="52%" stopColor="#2F7BF5" />
          <stop offset="100%" stopColor="#22D3A5" />
        </linearGradient>
        <linearGradient id={stemGradient} x1="20" y1="24" x2="30" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2F7BF5" />
          <stop offset="100%" stopColor="#4A66F0" />
        </linearGradient>
      </defs>

      {/* "Y" — ikki qanot va tayanch */}
      <path
        d="M11 10 L24 27"
        stroke={`url(#${armGradient})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M37 10 L24 27"
        stroke={`url(#${armGradient})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M24 27 L24 38"
        stroke={`url(#${stemGradient})`}
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Yuqoriga ko'tariluvchi strelka — brendning asosiy metaforasi */}
      <path
        d="M14 33 C21 33 27.5 27 33 18.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M35.6 13.4 L36 21.2 L28.9 17.9 Z" fill="#FFFFFF" />
    </svg>
  );
}
