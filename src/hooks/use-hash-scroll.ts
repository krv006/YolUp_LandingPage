import { useEffect } from "react";

/**
 * Chuqur havolani (`yolup.uz/#savollar`) ishlatadi.
 *
 * Brauzer hash'ni HTML kelishi bilan hal qiladi, React esa keyin render
 * qiladi — o'sha paytda `#savollar` elementi hali yo'q, shuning uchun sahifa
 * tepasida qolib ketadi. Render tugagach bir marta o'zimiz olib boramiz.
 */
export function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length < 2) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, []);
}
