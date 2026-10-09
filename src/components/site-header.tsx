"use client";

/**
 * Yopishqoq sarlavha va mobil menyu.
 *
 * Mijoz tomonida bo'lishining yagona sababi — menyuning ochiq/yopiq holati.
 * Havolalar ro'yxati desktop va mobil uchun dizaynda ATAYLAB boshqacha
 * tartibda, shuning uchun ikkitasi alohida turibdi.
 */
import { useEffect } from "react";

import { Mark, Wordmark } from "./brand";
import { LoginLink, PrimaryCta } from "./cta";
import { Close, Menu } from "./icons";
import { useMenu } from "./menu-context";

const DESKTOP_LINKS = [
  { href: "#imkoniyatlar", label: "Platforma" },
  { href: "#kimlar-uchun", label: "Kimlar uchun" },
  { href: "#qanday-ishlaydi", label: "Qanday ishlaydi" },
  { href: "#maxfiylik", label: "Maxfiylik" },
];

const SHEET_LINKS = [
  { href: "#qanday-ishlaydi", label: "Qanday ishlaydi" },
  { href: "#imkoniyatlar", label: "Platforma" },
  { href: "#kimlar-uchun", label: "Kimlar uchun" },
  { href: "#maxfiylik", label: "Maxfiylik" },
  { href: "#savollar", label: "Savollar" },
];

export function SiteHeader() {
  const { menuOpen, setMenuOpen, toggleMenu } = useMenu();

  // Dizaynda yo'q, lekin klaviatura bilan ishlash uchun zarur: ochiq
  // varaqni Escape yopadi. Ko'rinishga ta'sir qilmaydi.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="YolUp — sahifa boshiga">
          <Mark className="mk" priority />
          <Wordmark className="wm" priority />
        </a>

        <nav className="nlinks" aria-label="Asosiy">
          {DESKTOP_LINKS.map((link) => (
            <a key={link.href} className="nlink" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nright">
          <LoginLink className="nlink" style={{ fontWeight: 600, color: "#000E35" }} />
          <span className="ncta">
            <PrimaryCta className="cta cta-sm" iconSize={16} />
          </span>
          <button
            type="button"
            className="mbtn"
            aria-label="Menyu"
            aria-expanded={menuOpen}
            aria-controls="mobil-menyu"
            onClick={toggleMenu}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobil-menyu" className="sheet" aria-label="Mobil menyu">
          <div>
            {SHEET_LINKS.map((link) => (
              <a key={link.href} className="sl" href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <PrimaryCta className="cta" />
        </nav>
      ) : null}
    </header>
  );
}
