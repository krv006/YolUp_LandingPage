/**
 * I — Yakuniy CTA.
 *
 * `.dk` klassi fokus halqasini yorug' rangga o'tkazadi (quyuq fon ustida).
 * `#final-cta` ni yopishqoq panel kuzatadi.
 */
import { LoginLink, PrimaryCta } from "@/components/cta";
import { Mark } from "@/components/brand";
import { IS_LIVE } from "@/content/site";

export function FinalCta() {
  return (
    <section id="xabardor-boling" className="sec fin dk" aria-labelledby="fin-title">
      <div className="wrap fin-in">
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
          {!IS_LIVE ? (
            <span className="badge">
              <span className="d" />
              Tez orada
            </span>
          ) : null}

          <h2 id="fin-title" className="h2">
            Keyingi darsingizni yangi bosqichga olib chiqing.
          </h2>

          {IS_LIVE ? (
            <p className="p">Roʻyxatdan oʻting va darslaringizni YolUpʼda boshlang.</p>
          ) : (
            <p className="p">YolUp hali ishga tushmagan. Ishga tushishi haqida birinchilardan boʻlib xabar oling.</p>
          )}

          <div id="final-cta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <PrimaryCta className="cta cta-inv" />
            <LoginLink className="ghost" style={{ color: "#FFFFFF", textDecorationColor: "rgba(255,255,255,0.5)" }} />
          </div>
        </div>

        <Mark className="fin-mark" />
      </div>
    </section>
  );
}
