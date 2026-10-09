/**
 * B — Qanday ishlaydi.
 *
 * To'rt qadam. Mobil'da vertikal vaqt chizig'i, 1024 px dan boshlab
 * gorizontal qator — ikkalasi ham `.jr` CSS'ida.
 */
import { JourneyBoard, JourneyHomework, JourneyLive, JourneyResult } from "@/components/mocks/journey";

const STEPS = [
  {
    title: "Jonli dars",
    text: "Oʻqituvchi va oʻquvchilar jonli darsda uchrashadi. Ekran ovoz bilan ulashiladi, dars yozib boriladi.",
    mock: <JourneyLive />,
  },
  {
    title: "Birgalikda ishlash",
    text: "Masala interaktiv doskada birga yechiladi, savollar kursning guruh chatida davom etadi.",
    mock: <JourneyBoard />,
  },
  {
    title: "Vazifa va tekshiruv",
    text: "Oʻquvchi uy vazifasini topshiradi va test yechadi. Qoʻllab-quvvatlanadigan fayllarga AI oʻzbek tilida izoh beradi.",
    mock: <JourneyHomework />,
  },
  {
    title: "Natija va kuzatuv",
    text: "Oʻqituvchi ishtirok va natijalarni koʻradi. Ota-ona esa oʻz panelida mavjud maʼlumotlarni koʻradi.",
    mock: <JourneyResult />,
  },
];

export function HowItWorks() {
  return (
    <section id="qanday-ishlaydi" className="sec bw" aria-labelledby="qi-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Qanday ishlaydi</p>
          <h2 id="qi-title" className="h2">
            Bir dars. Bir nechta imkoniyat. Bitta tizim.
          </h2>
          <p className="lead">8-B sinfning bitta algebra darsi misolida — jonli darsdan natijagacha.</p>
        </div>

        <ol className="jr">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="num">{i + 1}</span>
              <div className="jb">
                <div className="jt">
                  <h3 className="h3">{step.title}</h3>
                  <p className="p">{step.text}</p>
                </div>
                {step.mock}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
