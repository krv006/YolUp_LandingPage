"use client";

/**
 * Mobil yopishqoq CTA paneli.
 *
 * Dizayndagi mantiq aynan saqlangan: panel hero'dagi CTA ekrandan chiqib
 * ketgandan keyin chiqadi va yakuniy blok yoki futer ko'ringanda yana
 * yo'qoladi (u yerda o'sha tugma allaqachon bor). Menyu ochiq bo'lsa ham
 * ko'rinmaydi.
 *
 * `.stk` 768 px dan kengda CSS orqali yashirin — shuning uchun desktopda
 * bu komponent hech narsaga xalaqit bermaydi.
 */
import { useEffect, useState } from "react";

import { PrimaryCta } from "./cta";
import { useMenu } from "./menu-context";

/** Kuzatiladigan nishonlar — dizayndagi ro'yxat. */
const WATCHED = ["hero-cta", "final-cta", "site-footer"];

export function StickyCta() {
  const { menuOpen } = useMenu();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible: Record<string, boolean> = {};
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visible[e.target.id] = e.isIntersecting;
      });
      // `=== false` ataylab: hali kuzatilmagan hero CTA (undefined) panelni
      // ochib yubormasligi kerak.
      setSticky(visible["hero-cta"] === false && !visible["final-cta"] && !visible["site-footer"]);
    });

    WATCHED.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  if (!sticky || menuOpen) return null;

  return (
    <div className="stk">
      <PrimaryCta className="cta" />
    </div>
  );
}
