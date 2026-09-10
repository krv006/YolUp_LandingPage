import { YolUpLogo } from "@/components/brand/yolup-logo";
import { Container } from "@/components/ui/container";
import { CONTACT, FOOTER_COLUMNS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-subtle pt-16 pb-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <YolUpLogo withTagline />
            <p className="mt-5 max-w-xs text-[0.875rem] leading-relaxed text-fg">
              O'zbekiston maktab o'quvchilari uchun onlayn ta'lim platformasi — jonli darslar,
              interaktiv doska va ota-ona nazorati.
            </p>
            <div className="mt-5 flex flex-col gap-1 text-[0.875rem]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-fit text-fg transition-colors hover:text-ink"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.telegram}
                className="w-fit text-fg transition-colors hover:text-ink"
                rel="noreferrer noopener"
                target="_blank"
              >
                Telegram
              </a>
            </div>
          </div>

          <nav aria-label="Saytdagi bo'limlar" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="text-[0.75rem] font-semibold tracking-[0.12em] text-faint uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-[0.875rem] text-fg transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-[0.8125rem] text-faint">
            © 2026 YolUp · O'zbekistonda ishlab chiqilgan
          </p>
          <p className="text-[0.8125rem] text-faint">Learn today. Go further.</p>
        </div>
      </Container>
    </footer>
  );
}
