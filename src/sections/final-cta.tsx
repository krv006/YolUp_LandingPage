import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { APP_URLS, CONTACT, FINAL_CTA } from "@/content/site";

export function FinalCta() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-block bg-brand px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Nozik nur — tekis gradient ustidagi yagona bezak */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[540px] max-w-[120vw] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
          />

          <div className="relative">
            <h2 className="text-h2 text-white">{FINAL_CTA.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-lead text-white/85">{FINAL_CTA.subtitle}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={APP_URLS.register}
                size="lg"
                variant="secondary"
                className="border-transparent bg-white text-ink hover:shadow-[0_16px_40px_rgb(0_0_0/0.18)]"
              >
                {FINAL_CTA.primary}
                <ArrowRight size={17} aria-hidden />
              </Button>
              <Button href={`mailto:${CONTACT.email}`} size="lg" variant="onDark">
                {FINAL_CTA.secondary}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
