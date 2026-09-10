import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT, FAQ_ITEMS } from "@/content/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="savollar">
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>SAVOLLAR</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">Ko'p so'raladigan savollar</h2>
          </Reveal>
        </SectionHeading>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-q-${index}`;
            const panelIdValue = `${baseId}-a-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelIdValue}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[1rem] font-semibold text-ink sm:text-[1.0625rem]">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-transform duration-300",
                        open && "rotate-45 border-transparent bg-brand text-white"
                      )}
                    >
                      <Plus size={15} aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelIdValue}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="pb-5"
                >
                  <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-fg">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[0.9375rem] text-fg">
            Javob topmadingizmi?{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-blue underline underline-offset-4 hover:text-violet"
            >
              Bizga yozing
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
