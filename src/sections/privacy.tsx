/**
 * F — Ota-onalar va maxfiylik.
 *
 * Matn 1024 px dan boshlab O'NGGA o'tadi (`.ptext{order:2}`) — panel chapda
 * qoladi. Shuning uchun JSX'dagi tartib ko'rinishdagi tartibdan farq qiladi.
 */
import { Check } from "@/components/icons";
import { ParentDashboard } from "@/components/mocks/panels";

const POINTS = [
  "Davomat va darsdagi ishtirok",
  "Uy vazifalari natijalari va baholar",
  "Mavjud diqqat va chiqish yozuvlari",
  "Kirish tarixi",
];

export function Privacy() {
  return (
    <section id="maxfiylik" className="sec bs" aria-labelledby="mx-title">
      <div className="wrap">
        <div className="priv">
          <div className="ptext">
            <p className="eyebrow">Ota-onalar va maxfiylik</p>
            <h2 id="mx-title" className="h2">
              Shaffoflik ishonch bilan boshlanadi.
            </h2>
            <p className="lead">
              Ota-ona panelida farzandingiz oʻqishi haqidagi mavjud maʼlumotlar jamlanadi: avval natijalar, keyin
              batafsil faollik.
            </p>
            <ul className="fl">
              {POINTS.map((point) => (
                <li key={point}>
                  <Check />
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "1px solid #C9CDD8", paddingTop: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              <p className="sm" style={{ fontWeight: 600, color: "#000E35" }}>
                Rozilik sozlamalari
              </p>
              <p className="sm">Platformada kamera, dars yozuvi va faollik tahlili uchun rozilik sozlamalari bor.</p>
            </div>
          </div>

          <figure style={{ margin: 0 }}>
            <ParentDashboard />
            <figcaption className="cap">Illyustratsiya · namunaviy maʼlumotlar, haqiqiy ekran emas</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
