import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { PROBLEM_SOLUTION } from "@/content/site";

export function ProblemSolution() {
  return (
    <Section>
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>MUAMMO</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">
              Zoom + Telegram + Excel — <br className="hidden sm:block" />
              bu ta'lim emas, ovora bo'lish.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lead text-fg">
              O'qituvchi vaqtining yarmi o'qitishga emas, vositalarni bir-biriga ulashga ketadi.
            </p>
          </Reveal>
        </SectionHeading>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* "Hozir shunday" — ataylab bosiq, kontrasti past */}
          <Reveal className="rounded-block border border-line bg-bg-subtle p-6 sm:p-8">
            <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-faint uppercase">
              Hozir shunday
            </p>
            <ul className="mt-6 space-y-4">
              {PROBLEM_SOLUTION.map((row) => (
                <li key={row.before} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-line text-faint">
                    <X size={12} aria-hidden />
                  </span>
                  <span className="text-[0.9375rem] text-faint">{row.before}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* "YolUp bilan" — kuchliroq: oq yuza, brend hoshiya, to'q matn */}
          <Reveal
            delay={0.08}
            className="relative rounded-block border border-blue/25 bg-surface p-6 shadow-lift sm:p-8"
          >
            <span
              aria-hidden
              className="absolute inset-x-8 -top-px h-px bg-linear-to-r from-transparent via-blue to-transparent"
            />
            <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-blue uppercase">
              YolUp bilan
            </p>
            <ul className="mt-6 space-y-4">
              {PROBLEM_SOLUTION.map((row) => (
                <li key={row.after} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={12} aria-hidden />
                  </span>
                  <span className="text-[0.9375rem] font-medium text-ink">{row.after}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mt-8 flex items-center justify-center gap-2 text-[0.875rem] text-faint">
            Bitta hisob, bitta havola, bitta hisobot
            <ArrowRight size={15} aria-hidden className="text-blue" />
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
