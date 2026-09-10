import { useId, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { AdminDashboardMockup } from "@/components/mockups/admin-dashboard-mockup";
import { ChatMockup } from "@/components/mockups/chat-mockup";
import { HomeworkAIMockup } from "@/components/mockups/homework-ai-mockup";
import { ParentDashboardMockup } from "@/components/mockups/parent-dashboard-mockup";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { TabPanel, Tabs } from "@/components/ui/tabs";
import { AUDIENCES } from "@/content/site";

/** Har rol o'z mockup'ini oladi — bitta vizual ikki joyda takrorlanmaydi. */
const VISUALS: Record<string, ReactNode> = {
  teacher: <ChatMockup />,
  student: <HomeworkAIMockup />,
  parent: <ParentDashboardMockup />,
  center: <AdminDashboardMockup />,
};

export function Audience() {
  const baseId = useId();
  const [active, setActive] = useState(AUDIENCES[0]?.id ?? "teacher");
  const current = AUDIENCES.find((item) => item.id === active) ?? AUDIENCES[0];

  if (!current) return null;

  return (
    <Section id="kimlar-uchun">
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>KIMLAR UCHUN</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">Har rol o'z ish maydonini oladi</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lead text-fg">
              Bitta platforma, lekin o'qituvchi, o'quvchi, ota-ona va markaz mutlaqo boshqa ekranni
              ko'radi.
            </p>
          </Reveal>
        </SectionHeading>

        <Reveal delay={0.16} className="mt-10 flex justify-center">
          <Tabs
            baseId={baseId}
            items={AUDIENCES.map(({ id, label }) => ({ id, label }))}
            value={active}
            onChange={setActive}
            label="Foydalanuvchi rollari"
          />
        </Reveal>

        <TabPanel baseId={baseId} tab={current.id} className="mt-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-display text-h3 text-ink">{current.promise}</p>
              <ul className="mt-7 space-y-4">
                {current.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={13} aria-hidden />
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-fg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pl-4">{VISUALS[current.id]}</div>
          </div>
        </TabPanel>
      </Container>
    </Section>
  );
}
