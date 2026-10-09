/**
 * Futer.
 *
 * `#site-footer` ni yopishqoq panel kuzatadi: futer ko'ringanda panel
 * yo'qoladi.
 */
import { cacheLife } from "next/cache";

import { Mark, Wordmark } from "@/components/brand";
import { ArrowUp, ExternalLink } from "@/components/icons";
import { IS_LIVE, SHOW_ENGAGEMENT, URLS } from "@/content/site";

/**
 * Joriy yil.
 *
 * `cacheComponents` yoqilgani uchun `new Date()` ni to'g'ridan-to'g'ri
 * render ichida chaqirib bo'lmaydi — qiymat prerender paytida barqaror
 * bo'lishi shart. Shuning uchun u alohida keshlanadi va kuniga bir marta
 * yangilanadi: sahifa statik qolaveradi, lekin yangi yilda qayta deploy
 * kutib o'tirmaydi.
 */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const PLATFORM_LINKS = [
  { href: "#qanday-ishlaydi", label: "Qanday ishlaydi" },
  { href: "#imkoniyatlar", label: "Imkoniyatlar" },
  // "Ishtirok" bo'limi yopiq bo'lsa, bu havola hech qayerga olib bormaydi.
  ...(SHOW_ENGAGEMENT ? [{ href: "#ishtirok", label: "Ishtirok va diqqat" }] : []),
];

const AUDIENCE_LINKS = [
  { href: "#kimlar-uchun", label: "Oʻquvchilar" },
  { href: "#oqituvchilar", label: "Oʻqituvchilar" },
  { href: "#maxfiylik", label: "Ota-onalar" },
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="foot">
      <div className="wrap foot-in">
        <div className="foot-brand">
          <div className="foot-logo">
            <Mark className="mk" />
            <Wordmark className="wm" />
          </div>
          <p className="foot-desc">
            Oʻzbek taʼlimi uchun onlayn dars platformasi: jonli dars, guruh chati, doska va uy vazifalari bir joyda.
          </p>
        </div>

        <nav className="fcols" aria-label="Pastki navigatsiya">
          <div>
            <h2 className="fh" id="fh-platforma">
              Platforma
            </h2>
            <ul className="flist" aria-labelledby="fh-platforma">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="fh" id="fh-kimlar">
              Kimlar uchun
            </h2>
            <ul className="flist" aria-labelledby="fh-kimlar">
              {AUDIENCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="fh" id="fh-malumot">
              Maʼlumot
            </h2>
            <ul className="flist" aria-labelledby="fh-malumot">
              <li>
                <a href="#savollar">Savollar</a>
              </li>
              {!IS_LIVE ? (
                <li>
                  <a href="#xabardor-boling">Xabardor boʻlish</a>
                </li>
              ) : null}
              {IS_LIVE && URLS.register ? (
                <li>
                  <a href={URLS.register}>Roʻyxatdan oʻtish</a>
                </li>
              ) : null}
              {IS_LIVE && URLS.login ? (
                <li>
                  <a href={URLS.login}>Kirish</a>
                </li>
              ) : null}
              {URLS.telegram ? (
                <li>
                  <a href={URLS.telegram} target="_blank" rel="noopener noreferrer">
                    Telegram
                    <ExternalLink />
                    <span className="vh"> (yangi oynada ochiladi)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>

      <div className="wrap">
        <div className="foot-bot">
          <p className="fb-copy" style={{ margin: 0 }}>
            © <CopyrightYear /> YolUp
          </p>
          <p className="fb-note" style={{ margin: 0 }}>
            Sahifadagi interfeys tasvirlari — illyustratsiya, haqiqiy ilova ekranlari emas.
          </p>
          <a className="totop" href="#top">
            <span>Yuqoriga</span>
            <span className="ar" aria-hidden="true">
              <ArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
