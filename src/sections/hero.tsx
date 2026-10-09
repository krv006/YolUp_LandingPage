/**
 * Hero.
 *
 * `#hero-cta` identifikatori ataylab shu yerda: mobil yopishqoq panel
 * (`StickyCta`) aynan shu blokni kuzatadi.
 */
import { PrimaryCta } from "@/components/cta";
import { HeroLessonDesktop, HeroLessonMobile } from "@/components/mocks/hero-lesson";
import { IS_LIVE } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hrow">
          <div className="hleft">
            {!IS_LIVE ? (
              <span className="badge">
                <span className="d" />
                Tez orada
              </span>
            ) : null}
            <h1 id="hero-title" className="h1">
              <span>Darsdan natijagacha —</span>
              <span>bitta yoʻl.</span>
            </h1>
          </div>
          <div className="hright">
            <p className="hlead">
              Oʻzbek taʼlimi uchun onlayn dars platformasi: jonli dars, guruh chati, doska, davomat va uy vazifasini
              tekshirish — bir-biriga ulangan holda.
            </p>
            <div id="hero-cta" className="hcta">
              <PrimaryCta className="cta" />
              <a className="ghost" href="#qanday-ishlaydi">
                Qanday ishlaydi ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-wide">
        <figure className="hfig">
          <HeroLessonDesktop />
          <HeroLessonMobile />
          <figcaption className="cap">
            Illyustratsiya: brifdagi funksiyalar asosida chizilgan maket, haqiqiy ilova ekrani emas.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
