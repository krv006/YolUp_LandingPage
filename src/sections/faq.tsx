/**
 * H — Savollar. Akkordeonning o'zi mijoz komponenti.
 */
import { FaqAccordion } from "@/components/faq-accordion";

export function Faq() {
  return (
    <section id="savollar" className="sec bw" aria-labelledby="sv-title">
      <div className="wrap">
        <div className="faq">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p className="eyebrow">Savollar</p>
            <h2 id="sv-title" className="h2">
              Koʻp beriladigan savollar.
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
