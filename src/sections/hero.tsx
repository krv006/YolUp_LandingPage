import { ArrowRight, Play } from "lucide-react";
import { LiveLessonMockup } from "@/components/mockups/live-lesson-mockup";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { APP_URLS, HERO } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* Tekstura: nozik to'r + bitta yumshoq brend porlashi. "Blob" yo'q. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,76,241,0.18),rgba(34,211,165,0.10)_45%,transparent_70%)] blur-2xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 text-display">
                {HERO.titleLead}
                <br />
                <span className="text-brand">{HERO.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lead text-fg">{HERO.subtitle}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={APP_URLS.register} size="lg">
                  {HERO.primaryCta}
                  <ArrowRight size={17} aria-hidden />
                </Button>
                <Button href="#imkoniyatlar" variant="secondary" size="lg">
                  <Play size={15} aria-hidden />
                  {HERO.secondaryCta}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-faint">
                {HERO.trustLine.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 ? (
                      <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
                    ) : null}
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="[perspective:1600px]">
              <LiveLessonMockup className="origin-center [transform:rotateY(-6deg)_rotateX(2deg)] lg:[transform:rotateY(-9deg)_rotateX(3deg)]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
