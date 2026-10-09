/**
 * Yirik yorug' panellar: ishtirok xulosasi, ota-ona paneli va yangi kurs
 * formasi. Uchalasi ham namunaviy ma'lumotli illyustratsiya.
 *
 * Dizayndagi inline `font-family: 'Wix Madefor Display', …` bu yerda
 * `var(--fd)` ga almashtirilgan — natija bir xil, lekin shrift manbai
 * bitta joyda qoladi.
 */

/** Dizayndagi `.ev` ro'yxati — dars davomidagi hodisalar. */
const EVENTS = [
  { time: "16:08", text: "«Hali shu yerdamisiz?» — javob berdi" },
  { time: "16:12", text: "Dars oynasidan chiqdi" },
  { time: "16:13", text: "Qaytdi · tashqarida 1 daq 40 s" },
  { time: "16:31", text: "Chiqdi va qaytdi · 50 s" },
  { time: "16:38", text: "«Hali shu yerdamisiz?» — javob berdi" },
];

/** Tekshiruvga javob berilgan paytlar (chiziqdagi nuqtalar). */
const CHECK_MARKS = ["17.8%", "44.4%", "84.4%"];

/** Dars oynasidan tashqarida o'tgan oraliqlar. */
const AWAY_SPANS = [
  { left: "26.7%", width: "3.7%" },
  { left: "68.9%", width: "1.9%" },
];

export function EngagementPanel() {
  return (
    <div
      className="actp"
      role="img"
      aria-label="Illyustratsiya: Jasur T.ning 12-darsdagi ishtirok xulosasi. 45 daqiqalik darsda oynadan 2 marta chiqqan, jami 2 daqiqa 30 soniya. Uchta tekshiruvning hammasiga javob bergan."
    >
      <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--fd)", fontWeight: 600, fontSize: 18, lineHeight: "24px" }}>
          Ishtirok xulosasi
        </span>
        <span className="sm">Jasur T. · 12-dars · Kvadrat tenglamalar · 16:00–16:45</span>
      </div>

      <div className="facts" aria-hidden="true">
        <span>
          Oynadan chiqish: <b>2</b>
        </span>
        <span>
          Tashqarida: <b>2 daq 30 s</b>
        </span>
        <span>
          Tekshiruvlar: <b>3 tadan 3 tasiga javob</b>
        </span>
      </div>

      <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div className="tlm">
          {CHECK_MARKS.map((left) => (
            <span key={left} className="ck" style={{ left }} />
          ))}
        </div>
        <div className="tl">
          {AWAY_SPANS.map((span) => (
            <span key={span.left} className="away" style={{ left: span.left, width: span.width }} />
          ))}
        </div>
        <div className="axis">
          <span>16:00</span>
          <span>16:15</span>
          <span>16:30</span>
          <span>16:45</span>
        </div>
      </div>

      <div className="legend" aria-hidden="true">
        <span>
          <i className="sw" style={{ background: "#DCE3F2" }} />
          Darsda
        </span>
        <span>
          <i className="sw" style={{ background: "repeating-linear-gradient(135deg, #6F778B 0 3px, #959CAF 3px 6px)" }} />
          Dars oynasidan tashqarida
        </span>
        <span>
          <i className="sw" style={{ background: "#0A7D5E", borderRadius: 999 }} />
          Tekshiruvga javob
        </span>
      </div>

      <ul className="ev" aria-hidden="true">
        {EVENTS.map((e) => (
          <li key={e.time + e.text}>
            <time>{e.time}</time>
            <span>{e.text}</span>
          </li>
        ))}
      </ul>

      <p className="sm" aria-hidden="true" style={{ color: "#5E6680" }}>
        Uchinchi chiqishda ota-onaga xabar boradi. Bu darsda: 2 ta chiqish.
      </p>
    </div>
  );
}

/** Davomat kvadratchalari — 12 darsdan 7-chisi qoldirilgan. */
const ATTENDANCE = Array.from({ length: 12 }, (_, i) => i !== 6);

export function ParentDashboard() {
  return (
    <div
      className="dash"
      role="img"
      aria-label="Illyustratsiya: ota-ona paneli. Avval natijalar — uy vazifalari 5 tadan 4 va 5 tadan 5, baholar 4, 5, 5. Keyin davomat 12 tadan 11. Pastda batafsil faollik — 12-darsda oynadan 2 marta chiqish va kirish tarixi."
    >
      <div aria-hidden="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
        <span className="av" style={{ width: 40, height: 40, background: "#EEF0F4", color: "#000E35", fontSize: 13 }}>
          JT
        </span>
        <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontWeight: 600 }}>Jasur Toshmatov</span>
          <span className="sm">8-B · Matematika</span>
        </span>
        <span style={{ marginLeft: "auto", fontSize: 12, fontWeight: 600, color: "#5E6680", whiteSpace: "nowrap" }}>
          Ota-ona paneli
        </span>
      </div>

      <div className="dsec" aria-hidden="true">
        <span className="dlab">Oʻqish natijalari</span>
        <div className="drow">
          <span>Kvadrat tenglamalar</span>
          <span>
            <span className="okt">4/5</span> · AI izohi bilan
          </span>
        </div>
        <div className="drow">
          <span>Chala kvadrat tenglamalar</span>
          <span className="okt">5/5</span>
        </div>
        <div className="drow">
          <span>Baholar</span>
          <span style={{ display: "flex", gap: 6 }}>
            <span className="grade">4</span>
            <span className="grade">5</span>
            <span className="grade">5</span>
          </span>
        </div>
      </div>

      <div className="dsec" aria-hidden="true">
        <span className="dlab">Davomat · 11 / 12 dars</span>
        <div className="sq">
          {ATTENDANCE.map((present, i) => (
            <i key={i} className={present ? undefined : "no"} />
          ))}
        </div>
      </div>

      <div className="dsec" aria-hidden="true" style={{ fontSize: 13 }}>
        <span className="dlab">Batafsil faollik</span>
        <div className="drow" style={{ fontSize: 13, color: "#4A5270" }}>
          <span>12-dars · dars oynasidan chiqish</span>
          <span>2 marta · 2 daq 30 s</span>
        </div>
        <div className="drow" style={{ fontSize: 13, color: "#4A5270" }}>
          <span>Tekshiruvlarga javob</span>
          <span>3 / 3</span>
        </div>
        <div className="drow" style={{ fontSize: 13, color: "#4A5270" }}>
          <span>Kirish tarixi</span>
          <span>Bugun 15:52 · Kecha 16:01</span>
        </div>
      </div>
    </div>
  );
}

export function NewCourseForm() {
  return (
    <div
      className="formp"
      role="img"
      aria-label="Illyustratsiya: yangi kurs yaratish formasi — kurs nomi Matematika 8-B, dars kunlari seshanba va payshanba, soat 16:00"
    >
      <span aria-hidden="true" style={{ fontFamily: "var(--fd)", fontWeight: 600, fontSize: 18, lineHeight: "24px" }}>
        Yangi kurs
      </span>

      <div className="fld" aria-hidden="true">
        <span className="lb">Kurs nomi</span>
        <span className="inp">Matematika · 8-B</span>
      </div>
      <div className="fld" aria-hidden="true">
        <span className="lb">Mavzu</span>
        <span className="inp">Algebra</span>
      </div>
      <div className="fld" aria-hidden="true">
        <span className="lb">Dars kunlari va vaqti</span>
        <span className="inp">
          <span style={{ padding: "2px 10px", borderRadius: 999, background: "#EEF0F4", fontSize: 13 }}>
            Seshanba · 16:00
          </span>
          <span style={{ padding: "2px 10px", borderRadius: 999, background: "#EEF0F4", fontSize: 13 }}>
            Payshanba · 16:00
          </span>
        </span>
      </div>

      <span
        aria-hidden="true"
        style={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          height: 44,
          padding: "0 18px",
          borderRadius: 12,
          background: "#000E35",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        Kurs yaratish
      </span>
    </div>
  );
}
