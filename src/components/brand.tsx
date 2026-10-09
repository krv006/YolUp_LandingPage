/**
 * Brend belgilari.
 *
 * Ikkala PNG ham tasdiqlangan dizayn bundle'idan ajratib olingan va shaffof
 * fonli (RGBA). O'lchamni CSS beradi (`.mk`, `.wm`, `.fin-mark`) — bu yerdagi
 * `width`/`height` faqat asl nisbat uchun, shuning uchun ularni
 * o'zgartirmang.
 */
import Image from "next/image";

/** Gradientli "Y" belgisi — 256×256. */
export function Mark({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      className={className}
      src="/yolup-mark.png"
      alt=""
      width={256}
      height={256}
      priority={priority}
    />
  );
}

/**
 * "YolUp" so'z-belgisi — 492×178.
 *
 * Matnli muqobil shu yerda beriladi, shuning uchun yonidagi `Mark` bo'sh
 * `alt` bilan qoladi: ikkisi birgalikda bitta nomni anglatadi.
 */
export function Wordmark({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      className={className}
      src="/yolup-wordmark.png"
      alt="YolUp"
      width={492}
      height={178}
      priority={priority}
    />
  );
}
