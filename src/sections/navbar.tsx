import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { YolUpLogo } from "@/components/brand/yolup-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { APP_URLS, NAV_LINKS } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menyu ochiq turganda sahifa orqada suzib ketmasin va Escape uni yopsin.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-line bg-veil shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <a href="#top" aria-label="YolUp — bosh sahifa" className="shrink-0">
          <YolUpLogo />
        </a>

        <nav aria-label="Asosiy" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-btn px-3 py-2 text-[0.9375rem] font-medium text-fg transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={APP_URLS.login}
            className="hidden h-10 items-center rounded-btn px-4 text-[0.9375rem] font-semibold text-ink transition-colors duration-200 hover:text-blue sm:inline-flex"
          >
            Kirish
          </a>
          <Button href={APP_URLS.register} className="hidden sm:inline-flex">
            Bepul boshlash
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobil-menyu"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-surface text-ink lg:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div
          id="mobil-menyu"
          className="border-t border-line bg-bg lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-btn px-3 py-3 text-base font-medium text-ink hover:bg-bg-subtle"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href={APP_URLS.register} size="lg">
                Bepul boshlash
              </Button>
              <Button href={APP_URLS.login} variant="secondary" size="lg">
                Kirish
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
