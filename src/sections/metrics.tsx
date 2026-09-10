import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { METRICS } from "@/content/site";

/** Ko'rinishga kirganda 0 dan qiymatgacha sanaydi; reduced-motion'da darhol chiqadi. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic — oxirida sekinlashadi
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounted(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  // Harakat o'chirilgan bo'lsa raqam darhol to'liq ko'rinadi — sanash yo'q.
  const display = reduceMotion ? value : counted;

  return (
    <span ref={ref} className="font-display text-[2.5rem] font-extrabold text-ink sm:text-[3rem]">
      {display}
      {suffix}
    </span>
  );
}

/**
 * ATAYIN mahsulot ko'rsatkichlari — biznes statistikasi emas.
 * "10 000+ o'quvchi" kabi tasdiqlanmagan raqam bu yerda bo'lmaydi (brief §9).
 */
export function Metrics() {
  return (
    <div className="border-b border-line bg-bg py-16">
      <Container>
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <Reveal as="li" key={metric.label} delay={index * 0.05} className="text-center">
              <Counter value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-[0.875rem] text-faint">{metric.label}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[0.8125rem] text-faint">
            Doska real vaqtda ishlaydi — WebSocket orqali, polling yo'q.
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
