import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TRUST_SIGNALS } from "@/content/site";

/**
 * Mijoz logotiplari o'rniga mahsulot signallari — brief §9 bo'yicha
 * soxta logotip yoki "ishonchimiz" ro'yxati ishlatilmaydi.
 */
export function TrustStrip() {
  return (
    <div className="border-y border-line bg-bg-subtle py-6">
      <Container>
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {TRUST_SIGNALS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon size={17} className="shrink-0 text-blue" aria-hidden />
                <span className="text-[0.875rem] font-medium text-ink-soft">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}
