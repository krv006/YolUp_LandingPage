import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { WhiteboardMockup } from "@/components/mockups/whiteboard-mockup";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FEATURES, PARENT_HIGHLIGHT, type Accent, type Feature } from "@/content/site";
import { cn } from "@/lib/utils";

/** Aksent klasslari lookup orqali — dinamik klass nomi Tailwind'da yig'ilmaydi. */
const ACCENT_BADGE: Record<Accent, string> = {
  violet: "bg-violet/12 text-violet",
  blue: "bg-blue/12 text-blue",
  mint: "bg-mint/15 text-[#0f7a59] dark:text-mint",
  orange: "bg-orange/15 text-orange",
  sky: "bg-sky/18 text-[#2f6fb8] dark:text-sky",
  green: "bg-green/15 text-[#0f7a59] dark:text-green",
};

/** Bento joylashuvi — 12 ustunli setka, har karta o'z kengligiga ega. */
const LAYOUT: Record<string, string> = {
  board: "lg:col-span-7",
  live: "lg:col-span-5",
  ai: "lg:col-span-5",
  focus: "lg:col-span-4",
  chat: "lg:col-span-3",
  reports: "lg:col-span-4",
};

const ORDER = ["board", "live", "ai", "focus", "chat"] as const;

function FeatureCard({
  feature,
  className,
  children,
}: {
  feature: Feature;
  className?: string;
  children?: ReactNode;
}) {
  const Icon = feature.icon;
  return (
    <Reveal
      className={cn(
        "group flex flex-col rounded-card border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-xl",
          ACCENT_BADGE[feature.accent]
        )}
      >
        <Icon size={19} aria-hidden />
      </span>
      <h3 className="mt-5 text-h3">{feature.title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg">{feature.description}</p>
      {feature.highlights ? (
        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {feature.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] text-fg"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </Reveal>
  );
}

export function Features() {
  const byId = new Map(FEATURES.map((feature) => [feature.id, feature]));
  const reports = byId.get("reports");

  return (
    <Section id="imkoniyatlar" tone="subtle">
      <Container>
        <SectionHeading>
          <Reveal>
            <Eyebrow>IMKONIYATLAR</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-h2">Dars boshlanishidan hisobotgacha — hammasi ichida</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lead text-fg">
              Har bir bo'lim bir-biri bilan bog'langan: darsdan davomat, doskadan PDF, vazifadan
              baho o'zi chiqadi.
            </p>
          </Reveal>
        </SectionHeading>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          {ORDER.map((id) => {
            const feature = byId.get(id);
            if (!feature) return null;
            return (
              <FeatureCard key={id} feature={feature} className={LAYOUT[id]}>
                {id === "board" ? (
                  <WhiteboardMockup className="mt-6" />
                ) : null}
              </FeatureCard>
            );
          })}

          {/* Katta karta — ota-ona kabineti (brief §7.5) */}
          <Reveal className="rounded-card border border-line bg-surface p-6 sm:p-8 lg:col-span-8">
            <Eyebrow>{PARENT_HIGHLIGHT.eyebrow}</Eyebrow>
            <h3 className="mt-4 text-h3">{PARENT_HIGHLIGHT.title}</h3>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-fg">
              {PARENT_HIGHLIGHT.description}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {PARENT_HIGHLIGHT.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={12} aria-hidden />
                  </span>
                  <span className="text-[0.875rem] text-ink">{point}</span>
                </li>
              ))}
            </ul>

            {/* Fokus taymlayni — chiqishlar ketma-ketligi */}
            <div
              aria-hidden="true"
              className="mt-7 rounded-xl border border-line bg-bg-subtle p-4"
            >
              <div className="flex items-center justify-between text-[0.6875rem] text-faint">
                <span>14:00</span>
                <span>Dars davomida 3 marta chiqdi</span>
                <span>15:30</span>
              </div>
              <div className="relative mt-2 h-2 rounded-full bg-line">
                <span className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-linear-to-r from-violet via-blue to-mint opacity-70" />
                {[18, 46, 72].map((left) => (
                  <span
                    key={left}
                    style={{ left: `${left}%` }}
                    className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-orange"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {reports ? <FeatureCard feature={reports} className={LAYOUT.reports} /> : null}
        </div>
      </Container>
    </Section>
  );
}
