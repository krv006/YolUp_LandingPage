import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "yolup-theme";

function readInitialTheme(): "light" | "dark" {
  // `index.html` dagi skript klassni allaqachon qo'ygan — shuni o'qiymiz,
  // shunda birinchi renderda ikonka to'g'ri chiqadi.
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">(readInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* localStorage o'chirilgan — tanlov shu sessiyada qoladi */
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Yorug' mavzuga o'tish" : "Qorong'i mavzuga o'tish"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-surface text-fg transition-colors duration-200 hover:text-ink",
        className
      )}
    >
      {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
