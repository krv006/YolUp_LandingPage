"use client";

/**
 * Mobil menyuning holati.
 *
 * Dizaynda butun sahifa bitta komponent edi, shuning uchun yopishqoq CTA
 * menyu ochiqligini bevosita bilardi (`stickyShow = sticky && !menu`).
 * Bu yerda sarlavha va yopishqoq panel alohida komponentlar, shuning uchun
 * holat shu kichik kontekstda turadi — boshqa maqsad uchun ishlatilmaydi.
 */
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface MenuState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuState | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const value = useMemo<MenuState>(
    () => ({
      menuOpen,
      setMenuOpen,
      toggleMenu: () => setMenuOpen((open) => !open),
    }),
    [menuOpen],
  );

  return <MenuContext value={value}>{children}</MenuContext>;
}

export function useMenu(): MenuState {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu <MenuProvider> ichida chaqirilishi kerak");
  return ctx;
}
