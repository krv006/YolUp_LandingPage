/**
 * Hero'dagi dars oynasi maketi — desktop va mobil variantlari.
 *
 * Bu HAQIQIY ekran emas, illyustratsiya. Dizaynda ham shunday deb
 * belgilangan: tashqi qobiq `role="img"` va to'liq `aria-label` oladi,
 * ichki bezak esa butunlay `aria-hidden`.
 *
 * Qaysi variant ko'rinishini CSS hal qiladi (`.hv-desk` / `.hv-mob`).
 */
import { Check, Clock, Pencil } from "@/components/icons";

/** Doskadagi "36" ni o'rab oluvchi qalam chizig'i (CSS'da chiziladi). */
function PenCircle({ inset, strokeWidth }: { inset: [number, number]; strokeWidth: number }) {
  const [x, y] = inset;
  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: -x,
        top: -y,
        width: `calc(100% + ${x * 2}px)`,
        height: `calc(100% + ${y * 2}px)`,
        overflow: "visible",
      }}
    >
      <path
        className="pen"
        pathLength={100}
        d="M10 30 C 8 12, 40 4, 64 6 C 90 8, 99 26, 92 42 C 84 56, 48 59, 24 52 C 10 47, 4 36, 14 22"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const PARTICIPANTS = [
  { initials: "MR", name: "Malika R." },
  { initials: "JT", name: "Jasur T." },
  { initials: "SA", name: "Sardor A.", flagged: true },
  { initials: "MY", name: "Madina Y." },
  { initials: "BN", name: "Bekzod N." },
  { initials: "NQ", name: "Nilufar Q." },
];

const CHAT = [
  { side: "out", text: "Bugungi mavzu — kvadrat tenglamalar. Doskani kuzatib boring.", time: "16:02" },
  { side: "in", who: "Madina Y.", text: "Tayyormiz!", time: "16:03" },
  { side: "out", text: "Diskriminantni topamiz. b² − 4ac nechaga teng?", time: "16:24" },
  { side: "in", who: "Malika R.", text: "4 + 32 = 36", time: "16:25", isNew: true },
  { side: "in", who: "Jasur T.", text: "Nega +32? c manfiy-ku", time: "16:25" },
  { side: "out", text: "Zoʻr savol! −4·1·(−8) = +32", time: "16:26" },
] as const;

const RAIL_GROUPS = [
  { label: "8-B", active: true },
  { label: "8-A", active: false },
  { label: "9-B", active: false },
];

export function HeroLessonDesktop() {
  return (
    <div className="hv-desk">
      <div
        className="mock"
        role="img"
        aria-label="Illyustratsiya: YolUp dars oynasi. Doskada x² + 2x − 8 = 0 tenglamasi yechilmoqda, oʻngda 8-B guruh chati, tepada davomat: 12 tadan 11 tasi."
        style={{ width: "100%", maxWidth: 1280, height: 720, margin: "0 auto" }}
      >
        <div aria-hidden="true" style={{ height: 720, display: "flex", flexDirection: "column" }}>
          <div className="mtop">
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>Matematika · 8-B</span>
              <span style={{ color: "#A3A6B5", whiteSpace: "nowrap" }}>Algebra — Kvadrat tenglamalar</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="chip">
                <span className="dot8" />
                Jonli 24:18
              </span>
              <span className="chip">
                <Check size={12} strokeWidth={3} stroke="#2EE6B0" />
                Davomat 11/12
              </span>
              <span className="chip">
                <span className="ring8" />
                Yozuv
              </span>
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
            <div
              className="rail"
              style={{
                width: 64,
                flex: "none",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                padding: "12px 0",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              {RAIL_GROUPS.map((group) => (
                <span
                  key={group.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "#212133",
                    boxShadow: group.active ? "0 0 0 2px var(--accent-dark)" : undefined,
                    color: group.active ? undefined : "#A3A6B5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {group.label}
                </span>
              ))}
              <span style={{ flex: 1 }} />
              <span
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#A3A6B5",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="4" width="14" height="17" rx="2" />
                  <path d="M9 4V3h6v1" />
                  <path d="M9 11h6M9 15h4" />
                </svg>
              </span>
            </div>

            <div className="stage">
              <div
                className="board"
                style={{ position: "relative", height: 440, flex: "none", borderRadius: 12, overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: 6,
                    borderRadius: 10,
                    background: "#FFFFFF",
                    border: "1px solid #E2E5EC",
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "#EEF2FF",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Pencil size={18} withNib />
                  </span>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      color: "#5B6072",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 20h12" />
                      <path d="M5 15l8-8 5 5-6 6H8z" />
                    </svg>
                  </span>
                  <span
                    style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <span style={{ width: 14, height: 14, borderRadius: 999, background: "var(--accent)" }} />
                  </span>
                </div>

                <div style={{ position: "absolute", left: 80, top: 52, display: "flex", flexDirection: "column", gap: 20 }}>
                  <span className="fx" style={{ fontSize: 34, lineHeight: "40px" }}>
                    x² + 2x − 8 = 0
                  </span>
                  <span style={{ fontSize: 22, lineHeight: "28px", color: "#5B6072" }}>D = b² − 4ac</span>
                  <span className="fx" style={{ fontSize: 30, lineHeight: "38px" }}>
                    D = 4 + 32 ={" "}
                    <span style={{ position: "relative", display: "inline-block", padding: "0 8px" }}>
                      36
                      <PenCircle inset={[16, 12]} strokeWidth={3} />
                    </span>
                  </span>
                  <span className="fx" style={{ fontSize: 30, lineHeight: "38px" }}>
                    x₁ = 2,{"   "}x₂ = −4
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    right: 16,
                    top: 16,
                    width: 176,
                    height: 110,
                    borderRadius: 10,
                    background: "#212133",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="av" style={{ width: 48, height: 48, fontSize: 15, color: "#ECEDF2" }}>
                    DK
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: 8,
                      bottom: 8,
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "rgba(16,16,25,0.75)",
                      fontSize: 11,
                      lineHeight: "16px",
                      color: "#ECEDF2",
                    }}
                  >
                    Dilnoza Karimova
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  fontSize: 12,
                  color: "#A3A6B5",
                }}
              >
                <span>Ishtirokchilar · 11</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                  <span>Diqqat tekshiruvi:</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#2EE6B0" }}>
                    <Check size={12} strokeWidth={3} />
                    10/11 javob berdi
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#F2B544" }}>
                    <Clock size={12} strokeWidth={2.5} />1 kutilmoqda
                  </span>
                </span>
              </div>

              <div className="tiles">
                {PARTICIPANTS.map((p) => (
                  <span
                    key={p.initials}
                    className="tile"
                    style={{
                      width: 112,
                      height: 70,
                      boxShadow: p.flagged ? "inset 0 0 0 1.5px rgba(242,181,68,0.85)" : undefined,
                    }}
                  >
                    <span className="av" style={{ width: 32, height: 32, fontSize: 12 }}>
                      {p.initials}
                    </span>
                    <span className="nm">{p.name}</span>
                  </span>
                ))}
                <span
                  className="tile"
                  style={{ width: 64, height: 70, background: "#181826", fontSize: 13, fontWeight: 600, color: "#A3A6B5" }}
                >
                  +5
                </span>
              </div>

              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <span className="ibtn">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                  </svg>
                </span>
                <span className="ibtn">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="7" width="13" height="10" rx="2" />
                    <path d="M16 11l5-3v8l-5-3" />
                  </svg>
                </span>
                <span className="ibtn">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M8 20h8M12 16v4M9 10l3-3 3 3M12 7v6" />
                  </svg>
                </span>
                <span className="ibtn" style={{ boxShadow: "inset 0 0 0 1.5px var(--accent-dark)", color: "var(--accent-dark)" }}>
                  <Pencil size={18} />
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: 40,
                    padding: "0 16px",
                    borderRadius: 999,
                    background: "#3A1D24",
                    color: "#FF9EA1",
                    fontWeight: 600,
                  }}
                >
                  Tugatish
                </span>
              </div>
            </div>

            <div className="chatp">
              <div
                style={{
                  height: 56,
                  flex: "none",
                  padding: "0 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 14, lineHeight: "18px", fontWeight: 600 }}>8-B · guruh chati</span>
                <span style={{ fontSize: 12, lineHeight: "16px", color: "#A3A6B5" }}>13 aʼzo</span>
              </div>
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: 10,
                }}
              >
                {CHAT.map((m, i) => (
                  <div
                    key={i}
                    className={`${m.side === "out" ? "bout" : "bin"}${"isNew" in m && m.isNew ? " msg-new" : ""}`}
                  >
                    {"who" in m && m.who ? <span className="who">{m.who}</span> : null}
                    <span>{m.text}</span>
                    <span className="tm">{m.time}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  margin: "0 16px 16px",
                  height: 44,
                  flex: "none",
                  borderRadius: 12,
                  background: "#212133",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 6px 0 14px",
                }}
              >
                <span style={{ flex: 1, color: "#A3A6B5" }}>Xabar yozing…</span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "var(--accent-dark)",
                    color: "#101019",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroLessonMobile() {
  return (
    <div className="hv-mob">
      <div
        className="mock"
        role="img"
        aria-label="Illyustratsiya: YolUp dars oynasi. Doskada kvadrat tenglama yechilmoqda, pastda 8-B guruh chatidan ikki xabar."
      >
        <div aria-hidden="true" style={{ height: 420, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: 40,
              flex: "none",
              padding: "0 12px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 12, whiteSpace: "nowrap" }}>Matematika · 8-B</span>
            <span className="chip" style={{ height: 22, fontSize: 11, padding: "0 8px" }}>
              <span className="dot8" style={{ width: 7, height: 7 }} />
              Jonli
            </span>
            <span className="chip" style={{ height: 22, fontSize: 11, padding: "0 8px" }}>
              <Check size={11} strokeWidth={3} stroke="#2EE6B0" />
              11/12
            </span>
          </div>

          <div style={{ height: 220, flex: "none", padding: 10 }}>
            <div
              className="board"
              style={{ position: "relative", height: 200, backgroundSize: "20px 20px", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", left: 20, top: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="fx" style={{ fontSize: 24, lineHeight: "30px" }}>
                  x² + 2x − 8 = 0
                </span>
                <span className="fx" style={{ fontSize: 22, lineHeight: "30px" }}>
                  D = 4 + 32 ={" "}
                  <span style={{ position: "relative", display: "inline-block", padding: "0 6px" }}>
                    36
                    <PenCircle inset={[12, 9]} strokeWidth={2.5} />
                  </span>
                </span>
                <span className="fx" style={{ fontSize: 22, lineHeight: "30px" }}>
                  x₁ = 2,{"  "}x₂ = −4
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              minHeight: 0,
              background: "#13131D",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 36px 12px 12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <div className="bin">
              <span className="who">Jasur T.</span>
              <span>Nega +32? c manfiy-ku</span>
              <span className="tm">16:25</span>
            </div>
            <div className="bout">
              <span>Zoʻr savol! −4·1·(−8) = +32</span>
              <span className="tm">16:26</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
