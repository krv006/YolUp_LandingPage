/**
 * D — Ishtirok.
 *
 * Bo'limning oxiridagi izoh ataylab turibdi: platforma darsdagi ISHTIROKNI
 * ko'rsatadi, o'quvchining bilimini yoki diqqatini emas. Uni olib tashlash
 * mahsulot haqida noto'g'ri da'vo qilib qo'yadi.
 */
import { Check, Clock } from "@/components/icons";
import { EngagementPanel } from "@/components/mocks/panels";

const RULES = [
  {
    text: "Dars oynasidan chiqish va qaytish vaqti qayd etiladi",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 4h5v16h-5" />
        <path d="M10 8l-4 4 4 4" />
        <path d="M6 12h9" />
      </svg>
    ),
  },
  { text: "Tashqarida oʻtgan vaqt hisoblanadi", icon: <Clock /> },
  { text: "Vaqti-vaqti bilan «Hali shu yerdamisiz?» tekshiruvi chiqadi", icon: <Check strokeWidth={2} /> },
  {
    text: "Uchinchi chiqishdan keyin ota-onaga xabar yuboriladi",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    ),
  },
];

export function Engagement() {
  return (
    <section id="ishtirok" className="sec bw" aria-labelledby="ish-title">
      <div className="wrap">
        <div className="part">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="eyebrow">Ishtirok</p>
            <h2 id="ish-title" className="h2">
              Darsda qatnashish — shunchaki ulanish emas.
            </h2>
            <p className="lead">
              YolUp darsdagi ishtirokni koʻrsatadi: oʻquvchi dars oynasidan qachon chiqqani, qancha vaqt tashqarida
              boʻlgani va qachon qaytgani.
            </p>
            <ul className="rules">
              {RULES.map((rule) => (
                <li key={rule.text}>
                  <span className="ri">{rule.icon}</span>
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
            <p className="sm">
              Bu maʼlumot darsdagi ishtirokni tushunishga yordam beradi. U oʻquvchi materialni oʻzlashtirganini yoki
              nima haqida oʻylayotganini koʻrsatmaydi.
            </p>
          </div>

          <figure style={{ margin: 0 }}>
            <EngagementPanel />
            <figcaption className="cap">Illyustratsiya · namunaviy maʼlumotlar</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
