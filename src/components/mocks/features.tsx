/**
 * "Imkoniyatlar" bento kartalaridagi maketlar.
 *
 * Birinchi, ikkinchi va to'rtinchisi quyuq qobiqda (`.mock`), uchinchisi esa
 * ataylab yorug' — dizaynda uy vazifasi kartasi sahifa foni bilan bir xil.
 */
import { Pencil, Send } from "@/components/icons";

/** Yorug' kartalar (test savoli va AI izohi) uchun umumiy ramka. */
const LIGHT_CARD = {
  background: "#F6F7F9",
  border: "1px solid #E2E5EC",
  borderRadius: 14,
  padding: 14,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  fontSize: 14,
  lineHeight: "20px",
} as const;

export function FeatureLiveLesson() {
  return (
    <div
      className="fv mock"
      role="img"
      aria-label="Illyustratsiya: oʻqituvchi kvadrat tenglama formulasi slaydini ovoz bilan ulashmoqda, yonda oʻquvchilar videosi, dars yozilmoqda"
      style={{ height: 300, display: "flex", flexDirection: "column" }}
    >
      <div
        aria-hidden="true"
        style={{
          minHeight: 44,
          flex: "none",
          padding: "9px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span className="chip">
          <span className="dot8" />
          Jonli 32:05
        </span>
        <span className="chip">
          <span className="ring8" />
          Yozuv
        </span>
        <span className="chip" style={{ color: "#14BCFB" }}>
          Ekran ulashish · ovoz bilan
        </span>
      </div>
      <div aria-hidden="true" style={{ flex: 1, minHeight: 0, display: "flex", gap: 10, padding: 12 }}>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            borderRadius: 10,
            background: "#F1F3F7",
            color: "#101019",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 10,
            overflow: "hidden",
          }}
        >
          <span style={{ fontSize: 12, lineHeight: "16px", color: "#5B6072", fontWeight: 600 }}>
            Kvadrat tenglama formulasi
          </span>
          <span className="fx lv-fx" style={{ fontSize: 24, lineHeight: "30px", whiteSpace: "nowrap" }}>
            x = (−b ± √D) / 2a
          </span>
          <span style={{ fontSize: 13, lineHeight: "18px", color: "#5B6072" }}>
            {"D > 0 — ikkita ildiz · D = 0 — bitta · D < 0 — ildiz yoʻq"}
          </span>
        </div>
        <div className="lv-tiles" style={{ width: 96, flex: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {["DK", "MR", "JT"].map((initials) => (
            <span key={initials} className="tile" style={{ width: 96, height: 62 }}>
              <span className="av" style={{ width: 28, height: 28, fontSize: 11 }}>
                {initials}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureBoard() {
  return (
    <div
      className="fv mock"
      role="img"
      aria-label="Illyustratsiya: ikki varaqli doska, formula kiritish maydoni va doskaning guruh chatiga yuborilgani"
      style={{ height: 300, display: "flex", flexDirection: "column", padding: 10, gap: 10 }}
    >
      <div aria-hidden="true" style={{ display: "flex", gap: 6, fontSize: 12 }}>
        <span style={{ padding: "4px 10px", borderRadius: 8, color: "#A3A6B5" }}>1-varaq</span>
        <span style={{ padding: "4px 10px", borderRadius: 8, background: "#212133", color: "#ECEDF2", fontWeight: 600 }}>
          2-varaq
        </span>
        <span style={{ padding: "4px 10px", borderRadius: 8, color: "#A3A6B5" }}>+</span>
      </div>

      <div
        className="board"
        aria-hidden="true"
        style={{ flex: 1, minHeight: 0, position: "relative", backgroundSize: "20px 20px", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 4,
            borderRadius: 8,
            background: "#FFFFFF",
            border: "1px solid #E2E5EC",
          }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "#EEF2FF",
              color: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pencil size={15} />
          </span>
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              color: "#5B6072",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              font: "600 11px/1 var(--fd)",
            }}
          >
            fx
          </span>
        </div>
        <div style={{ position: "absolute", left: 52, top: 14, right: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              alignSelf: "flex-start",
              maxWidth: "100%",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 10px",
              borderRadius: 8,
              background: "#FFFFFF",
              border: "1px solid #C9CDD8",
              fontSize: 12,
              color: "#4A5270",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <b style={{ color: "#101019" }}>fx</b>x = (−b ± √D) / 2a
          </span>
          <span className="fx" style={{ fontSize: 20, lineHeight: "26px", whiteSpace: "nowrap" }}>
            x₁ = 5,{"  "}x₂ = −2
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          borderRadius: 10,
          background: "#212133",
          fontSize: 12,
          lineHeight: "16px",
        }}
      >
        <Send size={16} stroke="#14BCFB" withTail={false} style={{ flex: "none" }} />
        <span style={{ minWidth: 0 }}>
          12-dars doskasi · 2 varaq <span style={{ color: "#A3A6B5" }}>→ 8-B guruh chati</span>
        </span>
      </div>
    </div>
  );
}

export function FeatureHomework() {
  return (
    <div
      className="fv"
      role="img"
      aria-label="Illyustratsiya: avtomatik baholangan test savoli va AI izohi bilan tekshirilgan uy vazifasi, oʻqituvchi bahoni tahrirlashi mumkin"
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div aria-hidden="true" style={LIGHT_CARD}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#5E6680" }}>Test · 2-savol</span>
        <span style={{ fontWeight: 600 }}>Diskriminant manfiy boʻlsa, tenglama nechta haqiqiy ildizga ega?</span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{ padding: "4px 10px", borderRadius: 8, border: "1px solid #C9CDD8" }}>A · 2</span>
          <span style={{ padding: "4px 10px", borderRadius: 8, border: "1px solid #C9CDD8" }}>B · 1</span>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: 8,
              border: "1.5px solid #0A7D5E",
              color: "#0A7D5E",
              fontWeight: 600,
            }}
          >
            C · ildizi yoʻq ✓
          </span>
        </span>
        <span style={{ fontSize: 12, color: "#0A7D5E", fontWeight: 600 }}>Toʻgʻri · avtomatik baholandi</span>
      </div>

      <div aria-hidden="true" style={LIGHT_CARD}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600 }}>Jasur T. · uy_vazifa_12.pdf</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#5E6680" }}>AI izohi · oʻzbekcha</span>
        </span>
        <span style={{ color: "#4A5270" }}>
          3-masala: c = −10, shuning uchun −4ac = +40. D = 9 + 40 = 49, x₁ = 5, x₂ = −2.
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600 }}>Baho: 4</span>
          <span
            style={{
              fontSize: 12,
              padding: "3px 10px",
              borderRadius: 999,
              border: "1px solid #C9CDD8",
              color: "#4A5270",
            }}
          >
            Oʻqituvchi tahrirlashi mumkin
          </span>
        </span>
      </div>
    </div>
  );
}

export function FeatureChat() {
  return (
    <div
      className="fv mock"
      role="img"
      aria-label="Illyustratsiya: chatlar roʻyxati — 8-B guruh chati va oʻqituvchi bilan shaxsiy yozishma"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span className="av" style={{ width: 40, height: 40, borderRadius: 12, fontSize: 12, color: "#ECEDF2" }}>
          8-B
        </span>
        <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 600 }}>8-B · guruh chati</span>
          <span style={{ color: "#A3A6B5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Dilnoza K.: 12-dars doskasi yuborildi
          </span>
        </span>
        <span style={{ fontSize: 11, color: "#A3A6B5" }}>16:46</span>
      </div>

      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#181826",
        }}
      >
        <span className="av" style={{ width: 40, height: 40, fontSize: 12, color: "#ECEDF2" }}>
          DK
        </span>
        <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 600 }}>
            Dilnoza Karimova <span style={{ fontWeight: 400, color: "#A3A6B5" }}>· oʻqituvchi</span>
          </span>
          <span style={{ color: "#A3A6B5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Siz: 3-masalani yana bir koʻrib chiqsam boʻladimi?
          </span>
        </span>
        <span style={{ fontSize: 11, color: "#A3A6B5" }}>17:10</span>
      </div>

      <div aria-hidden="true" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="bout">
          <span>3-masalani yana bir koʻrib chiqsam boʻladimi?</span>
          <span className="tm">17:10</span>
        </div>
        <div className="bin">
          <span className="who">Dilnoza Karimova</span>
          <span>Albatta. Ishorasiga eʼtibor bering.</span>
          <span className="tm">17:12</span>
        </div>
      </div>
    </div>
  );
}
