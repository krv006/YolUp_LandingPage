import { useId, useState } from "react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { TabPanel, Tabs } from "@/components/ui/tabs";
import { FLOWS } from "@/content/site";

/**
 * Qadamlar chapdan o'ngga KO'TARILIB boradi — logotipdagi yuqoriga
 * yo'nalgan strelka motivi. Mobil'da bu vertikal ro'yxatga aylanadi.
 */
const RISE = ["lg:mt-16", "lg:mt-11", "lg:mt-5", "lg:mt-0"];

export function HowItWorks() {
  const baseId = useId();
  const [active, setActive] = useState(FLOWS[0]?.id ?? "teacher");
  const current = FLOWS.find((flow) => flow.id === active) ?? FLOWS[0];

  if (!current) return null;

  const steps = current.steps;
  const offset = RISE.length - steps.length;

  return (
    <Section id="qanday-ishlaydi" tone="subtle">
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>QANDAY ISHLAYDI</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">Uch-to'rt qadamda ishga tushasiz</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lead text-fg">
              O'rnatish yo'q, sozlash yo'q — brauzerdan ochasiz va boshlaysiz.
            </p>
          </Reveal>
        </SectionHeading>

        <Reveal delay={0.16} className="mt-10 flex justify-center">
          <Tabs
            baseId={baseId}
            items={FLOWS.map(({ id, label }) => ({ id, label }))}
            value={active}
            onChange={setActive}
            label="Rol bo'yicha qadamlar"
          />
        </Reveal>

        {/* Qadamlar chapdan o'ngga ko'tarilib boradi — bezak chiziq qo'shilmadi:
            kartalarning o'zi harakat yo'nalishini yetarli darajada ko'rsatadi. */}
        <TabPanel baseId={baseId} tab={current.id} className="mt-14">
          <ol
            className={
              steps.length === 4
                ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                : "grid gap-5 sm:grid-cols-3"
            }
          >
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 0.06}
                className={`relative rounded-card border border-line bg-surface p-6 shadow-soft ${
                  RISE[offset + index] ?? "lg:mt-0"
                }`}
              >
                <span className="font-display text-[0.8125rem] font-extrabold tracking-[0.1em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.0625rem] font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-fg">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </TabPanel>
      </Container>
    </Section>
  );
}
