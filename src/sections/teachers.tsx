/**
 * G — O'qituvchilar uchun. Besh qadam va yangi kurs formasi maketi.
 */
import { NewCourseForm } from "@/components/mocks/panels";

const STEPS = [
  { title: "Kurs yoki guruh yarating", note: "Masalan, Matematika · 8-B." },
  { title: "Darslarni rejalashtiring", note: "Kun va vaqtni belgilang." },
  { title: "Jonli dars oʻtkazing", note: "Video, ekran ulashish, doska va chat bir oynada." },
  { title: "Uy vazifasi va test bering", note: "Fayl, matn yoki bir nechta javobli test." },
  { title: "Natijalarni kuzating", note: "Ishtirok, baholar va topshirilgan ishlar." },
];

export function Teachers() {
  return (
    <section id="oqituvchilar" className="sec" aria-labelledby="oq-title">
      <div className="wrap">
        <div className="onb">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="eyebrow">Oʻqituvchilar uchun</p>
            <h2 id="oq-title" className="h2">
              Darsingizni YolUpʼda boshlang.
            </h2>
            <p className="lead">Kurs ochishdan natijalarni koʻrishgacha — besh qadam.</p>
            <ol className="steps">
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  <span className="n">{i + 1}</span>
                  <b>{step.title}</b>
                  <span>{step.note}</span>
                </li>
              ))}
            </ol>
          </div>

          <NewCourseForm />
        </div>
      </div>
    </section>
  );
}
