/**
 * A — Muammo.
 *
 * Chap ustun: tarqoq vositalar (`.lchip` — uzuq chegarali, desktopda
 * ataylab bir oz siljitilgan). O'ng ustun: YolUp'dagi bitta zanjir.
 */
import { Fragment } from "react";

/** Tarqoq vositalar — tartibi YolUp zanjiri bilan bir xil, ataylab. */
const LOOSE_TOOLS = ["Jonli dars", "Guruh chati", "Uy vazifasi", "Testlar", "Natijalar"];

export function Problem() {
  return (
    <section id="muammo" className="sec" aria-labelledby="muammo-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Muammo</p>
          <h2 id="muammo-title" className="h2">
            Dars, vazifa va natijalar — tarqoq boʻlib qolmasin.
          </h2>
          <p className="lead">
            Jonli dars, guruh bilan muloqot, uy vazifasi, testlar va natijalar bitta bogʻlangan oʻquv jarayonining
            qismlari boʻla oladi.
          </p>
        </div>

        <div className="cmp">
          <div className="cmp-row">
            <p className="sm" style={{ fontWeight: 600, color: "#000E35" }}>
              Alohida vositalarda
            </p>
            <ul className="loose ul0">
              {LOOSE_TOOLS.map((tool) => (
                <li key={tool}>
                  <span className="lchip">{tool}</span>
                </li>
              ))}
            </ul>
            <p className="sm" style={{ maxWidth: "62ch" }}>
              Har bir vosita oʻz ishini qiladi, lekin dars ular orasida boʻlinib ketadi: havola bir joyda, fayl boshqa
              joyda, baho esa yana boshqa joyda.
            </p>
          </div>

          <div className="cmp-row">
            <p className="sm" style={{ fontWeight: 600, color: "#000E35" }}>
              YolUpʼda
            </p>
            <ol className="track ul0" aria-label="YolUpʼdagi bitta oʻquv jarayoni">
              {LOOSE_TOOLS.map((tool, i) => (
                <Fragment key={tool}>
                  {/* Bosqichlar orasidagi bog'lovchi chiziq — dekorativ. */}
                  {i > 0 ? <li className="tlink" aria-hidden="true" /> : null}
                  <li className="tchip">
                    <span className="n">{i + 1}</span>
                    {tool}
                  </li>
                </Fragment>
              ))}
            </ol>
            <p className="sm">Bitta dars — bitta joyda, bosqichma-bosqich.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
