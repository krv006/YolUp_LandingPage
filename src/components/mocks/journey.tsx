/**
 * "Qanday ishlaydi" bo'limidagi to'rtta kichik maket.
 *
 * Hammasi illyustratsiya: tashqi qobiq `role="img"` va aria-label oladi,
 * ichi esa `aria-hidden`.
 */
import { Check } from "@/components/icons";

const DARK_ROW = {
  display: "flex",
  justifyContent: "space-between",
  padding: "6px 0",
  borderTop: "1px solid rgba(255,255,255,0.08)",
} as const;

export function JourneyLive() {
  return (
    <div
      className="mock mock-sm jv"
      role="img"
      aria-label="Illyustratsiya: jonli dars — toʻrtta video oyna, ekran ulashish va yozuv belgisi"
    >
      <div aria-hidden="true" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        <span className="chip" style={{ height: 22, fontSize: 11 }}>
          <span className="ring8" />
          Yozuv
        </span>
        <span className="chip" style={{ height: 22, fontSize: 11 }}>
          Ekran ulashish · ovoz bilan
        </span>
      </div>
      <div
        aria-hidden="true"
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 6,
        }}
      >
        {["DK", "MR", "JT", "SA"].map((initials, i) => (
          <span
            key={initials}
            className="tile"
            style={{ height: "auto", boxShadow: i === 0 ? "inset 0 0 0 1.5px var(--accent-dark)" : undefined }}
          >
            <span className="av" style={{ width: 28, height: 28, fontSize: 11 }}>
              {initials}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function JourneyBoard() {
  return (
    <div
      className="mock mock-sm jv"
      role="img"
      aria-label="Illyustratsiya: doskada formula va guruh chatidagi savol"
      style={{ flexDirection: "row" }}
    >
      <div
        className="board"
        aria-hidden="true"
        style={{
          flex: "1 1 60%",
          minWidth: 0,
          padding: 14,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 6,
          backgroundSize: "18px 18px",
        }}
      >
        <span className="fx" style={{ fontSize: 16, lineHeight: "22px", whiteSpace: "nowrap" }}>
          D = b² − 4ac
        </span>
        <span className="fx" style={{ fontSize: 16, lineHeight: "22px", whiteSpace: "nowrap" }}>
          D = 36
        </span>
      </div>
      <div
        aria-hidden="true"
        style={{
          flex: "1 1 40%",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 6,
          fontSize: 12,
          lineHeight: "16px",
        }}
      >
        <div className="bin" style={{ maxWidth: "100%", padding: "6px 8px" }}>
          <span className="who" style={{ fontSize: 11 }}>
            Jasur T.
          </span>
          <span>Nega +32?</span>
        </div>
        <div className="bout" style={{ maxWidth: "100%", padding: "6px 8px" }}>
          <span>c manfiy, shuning uchun.</span>
        </div>
      </div>
    </div>
  );
}

export function JourneyHomework() {
  return (
    <div
      className="mock mock-sm jv"
      role="img"
      aria-label="Illyustratsiya: uy vazifasi 5 tadan 4, AI izohi va avtomatik baholangan test"
    >
      <div
        aria-hidden="true"
        style={{
          background: "#212133",
          borderRadius: 10,
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontWeight: 600 }}>Uy vazifasi · Jasur T.</span>
          <span style={{ color: "#2EE6B0", fontWeight: 600 }}>4/5</span>
        </span>
        <span style={{ fontSize: 12, lineHeight: "16px", color: "#A3A6B5" }}>
          AI izohi: 3-masalada diskriminant ishorasi xato — c = −10, shuning uchun −4ac = +40.
        </span>
      </div>
      <span aria-hidden="true" className="chip" style={{ alignSelf: "flex-start", color: "#2EE6B0" }}>
        <Check size={12} strokeWidth={3} />
        Test · 5/5 · avtomatik baholandi
      </span>
    </div>
  );
}

export function JourneyResult() {
  return (
    <div
      className="mock mock-sm jv"
      role="img"
      aria-label="Illyustratsiya: ota-ona panelidan qisqa xulosa — davomat 12 tadan 11, uy vazifasi 5 tadan 4, baho 4"
    >
      <span aria-hidden="true" style={{ fontWeight: 600 }}>
        Jasur Toshmatov · 8-B
      </span>
      <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
        <span style={DARK_ROW}>
          <span style={{ color: "#A3A6B5" }}>Davomat</span>
          <span>11 / 12</span>
        </span>
        <span style={DARK_ROW}>
          <span style={{ color: "#A3A6B5" }}>Uy vazifasi</span>
          <span>4 / 5</span>
        </span>
        <span style={DARK_ROW}>
          <span style={{ color: "#A3A6B5" }}>Baho</span>
          <span style={{ color: "#2EE6B0", fontWeight: 600 }}>4</span>
        </span>
      </div>
    </div>
  );
}
