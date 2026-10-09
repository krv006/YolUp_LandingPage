/**
 * E — Kimlar uchun.
 *
 * Uch rol: o'quvchi, o'qituvchi, ota-ona. 1024 px dan boshlab yonma-yon
 * uch ustun, undan pastda bir-birining ostida (`.aud` / `.au`).
 */
import type { ReactNode } from "react";

/** `.snip` ichidagi qator — har biri yuqoridan chiziq bilan ajraladi. */
const SNIP_ROW = { paddingTop: 8, borderTop: "1px solid #E2E5EC" } as const;

const OK = { color: "#0A7D5E", fontWeight: 600 } as const;
const MUTED = { color: "#4A5270" } as const;
const BOLD = { fontWeight: 600 } as const;
const WARN = { color: "#8A5300", fontWeight: 600 } as const;

interface Audience {
  role: string;
  icon: ReactNode;
  title: string;
  snipLabel: string;
  snipHeading: string;
  rows: { left: string; right: string; rightStyle?: React.CSSProperties }[];
  tags: string[];
}

const AUDIENCES: Audience[] = [
  {
    role: "Oʻquvchi",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
      </>
    ),
    title: "Oʻqishga oid hamma narsa bir joyda.",
    snipLabel:
      "Illyustratsiya: oʻquvchining bugungi rejasi — jonli dars, uy vazifasi muddati va test natijasi",
    snipHeading: "Bugun",
    rows: [
      { left: "16:00 · Matematika · jonli dars", right: "Qoʻshilish", rightStyle: OK },
      { left: "Uy vazifasi", right: "Payshanba, 20:00", rightStyle: MUTED },
      { left: "Test · 12-dars", right: "5 / 5", rightStyle: OK },
    ],
    tags: ["Jonli dars", "Kurs chati", "Uy vazifalari", "Testlar", "Natijalar"],
  },
  {
    role: "Oʻqituvchi",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
    title: "Oʻquv jarayonini boshqarish tarqoq boʻlmaydi.",
    snipLabel:
      "Illyustratsiya: oʻqituvchining 12-dars boʻyicha ishtirok hisoboti va tekshirilishi kerak boʻlgan ishlar",
    snipHeading: "Ishtirok hisoboti · 12-dars",
    rows: [
      { left: "Qatnashdi", right: "11 / 12", rightStyle: BOLD },
      { left: "Tekshiruvlarga javob", right: "10 / 11", rightStyle: BOLD },
      { left: "Tekshirilishi kerak", right: "3 ta ish", rightStyle: WARN },
    ],
    tags: ["Darslarni boshqarish", "Interaktiv doska", "Uy vazifalari", "Testlar", "Ishtirok hisobotlari"],
  },
  {
    role: "Ota-ona",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20c1-3.5 3.3-5 6-5s5 1.5 6 5" />
        <path d="M15 15.5c2.5 0 4.5 1.3 5.5 4.5" />
      </>
    ),
    title: "Farzandingiz oʻqishi aniqroq koʻrinadi.",
    snipLabel:
      "Illyustratsiya: ota-ona paneli xulosasi — davomat 12 tadan 11, oxirgi baho 4, oxirgi kirish bugun 15:52",
    snipHeading: "Jasur Toshmatov · 8-B",
    rows: [
      { left: "Davomat", right: "11 / 12", rightStyle: BOLD },
      { left: "Oxirgi baho", right: "4", rightStyle: BOLD },
      { left: "Oxirgi kirish", right: "Bugun, 15:52", rightStyle: MUTED },
    ],
    tags: ["Davomat", "Mavjud diqqat maʼlumotlari", "Uy vazifasi natijalari", "Baholar", "Kirish tarixi"],
  },
];

export function Audiences() {
  return (
    <section id="kimlar-uchun" className="sec" aria-labelledby="ku-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Kimlar uchun</p>
          <h2 id="ku-title" className="h2">
            YolUp har kimga oʻz vazifasida yordam beradi.
          </h2>
        </div>

        <div className="aud">
          {AUDIENCES.map((a) => (
            <article className="au" key={a.role}>
              <span className="role">
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
                  {a.icon}
                </svg>
                {a.role}
              </span>
              <h3 className="h3">{a.title}</h3>

              <div className="snip" role="img" aria-label={a.snipLabel}>
                <span aria-hidden="true" style={BOLD}>
                  {a.snipHeading}
                </span>
                {a.rows.map((row) => (
                  <div aria-hidden="true" className="srow" style={SNIP_ROW} key={row.left}>
                    <span>{row.left}</span>
                    <span style={row.rightStyle}>{row.right}</span>
                  </div>
                ))}
              </div>

              <ul className="tags">
                {a.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
