import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SECURITY_POINTS } from "@/content/site";

/**
 * Sahifadagi YAGONA to'q blok — shuning uchun bu yerda mavzu tokenlari emas,
 * aniq ranglar ishlatiladi: seksiya ikkala mavzuda ham to'q qoladi.
 */
export function Security() {
  return (
    <Section id="xavfsizlik" tone="dark" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[760px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,76,241,0.28),transparent_70%)] blur-2xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[0.75rem] font-semibold tracking-[0.14em] text-white/75 uppercase">
                <ShieldCheck size={14} aria-hidden />
                Xavfsizlik
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-h2 text-white">
                Ma'lumot bola haqida. <br />
                Shuning uchun qoidalar qattiq.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-lead text-[#A7B2CC]">
                Kuzatuv — ota-onaning huquqi, lekin bolaning roziligisiz emas. Platformadagi har bir
                ruxsat alohida yoqiladi va istalgan payt qaytarib olinadi.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-block border border-white/10 bg-white/10 sm:grid-cols-2">
            {SECURITY_POINTS.map((point, index) => (
              <Reveal
                as="li"
                key={point.title}
                delay={index * 0.04}
                className="bg-[#0E1430] p-6"
              >
                <h3 className="text-[1rem] font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-[#A7B2CC]">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
