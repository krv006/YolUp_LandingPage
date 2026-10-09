/**
 * C — Imkoniyatlar (bento).
 *
 * Kartalarning kengligi `.ft-live` / `.ft-board` / `.ft-hw` / `.ft-chat`
 * klasslari orqali 12 ustunli to'rga tushadi (7+5, keyin 6+6).
 */
import { Check } from "@/components/icons";
import { FeatureBoard, FeatureChat, FeatureHomework, FeatureLiveLesson } from "@/components/mocks/features";

const CARDS = [
  {
    modifier: "ft-live",
    title: "Jonli darslar",
    points: ["Real vaqtdagi video dars", "Ekranni ovoz bilan ulashish", "Dars yozuvi"],
    mock: <FeatureLiveLesson />,
  },
  {
    modifier: "ft-board",
    title: "Interaktiv doska",
    points: [
      "Chizish asboblari va formula kiritish",
      "Bir nechta varaq",
      "Dars oxirida doska guruh chatiga yuboriladi",
    ],
    mock: <FeatureBoard />,
  },
  {
    modifier: "ft-hw",
    title: "Uy vazifalari va testlar",
    points: [
      "Fayl yoki matn koʻrinishida topshirish",
      "Bir nechta javobli testlar avtomatik baholanadi",
      "Qoʻllab-quvvatlanadigan fayllarga oʻzbek tilida AI izohi",
      "Oʻqituvchi koʻrib chiqadi va bahoni tahrirlaydi",
    ],
    mock: <FeatureHomework />,
  },
  {
    modifier: "ft-chat",
    title: "Kurs boʻyicha muloqot",
    points: ["Kursga bogʻlangan guruh chati", "Oʻqituvchi bilan shaxsiy yozishma"],
    mock: <FeatureChat />,
  },
];

export function Features() {
  return (
    <section id="imkoniyatlar" className="sec" aria-labelledby="imk-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Imkoniyatlar</p>
          <h2 id="imk-title" className="h2">
            Darsdan tashqari ham hammasi davom etadi.
          </h2>
          <p className="lead">
            Dars tugashi bilan ish tugamaydi: doska chatga tushadi, vazifa tekshiriladi, savollar oʻqituvchiga yetib
            boradi.
          </p>
        </div>

        <div className="bento">
          {CARDS.map((card) => (
            <article key={card.modifier} className={`ft ${card.modifier}`}>
              <h3 className="h3">{card.title}</h3>
              <ul className="fl">
                {card.points.map((point) => (
                  <li key={point}>
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
              {card.mock}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
