import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { LAUNCH, PRICING, PRIMARY_CTA } from "@/content/site";

/**
 * To'lov moduli hali qurilmagan (brief §9) — shuning uchun narx rejalari,
 * Click/Payme va "eng ommabop" yorliqlari YO'Q. Beta holati ochiq aytiladi.
 */
export function Pricing() {
  return (
    <Section id="narxlar" tone="subtle">
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>{PRICING.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">Beta davrida to'liq bepul</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lead text-fg">{LAUNCH.note}</p>
          </Reveal>
        </SectionHeading>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-lg">
          <div className="relative overflow-hidden rounded-block border border-line bg-surface p-8 shadow-lift sm:p-10">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-brand"
            />

            <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[0.75rem] font-semibold text-white">
              {PRICING.badge}
            </span>

            <p className="mt-6 font-display text-[2.25rem] leading-none font-extrabold text-ink">
              {PRICING.title}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg">{PRICING.description}</p>

            <ul className="mt-7 space-y-3">
              {PRICING.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/18 text-[#0f7a59] dark:text-mint">
                    <Check size={12} aria-hidden />
                  </span>
                  <span className="text-[0.9375rem] text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <Button href={PRIMARY_CTA.href} size="lg" className="mt-8 w-full">
              {PRIMARY_CTA.label}
              <ArrowRight size={17} aria-hidden />
            </Button>

            <p className="mt-4 text-center text-[0.8125rem] text-faint">{PRICING.note}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
