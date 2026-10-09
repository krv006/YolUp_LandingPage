/**
 * Landing'ning yagona sozlama manbai.
 *
 * Tuzilish tasdiqlangan dizayndagi props'larni aks ettiradi
 * (`docs/design/YolUp—homepage.html` ichidagi `isLive`, `accent`,
 * `telegramUrl`, `registerUrl`, `loginUrl`). Dizayn konfigurat qilinmagan
 * manzilni ATAYLAB qo'llab-quvvatlaydi: bo'sh qiymatda havola o'rniga
 * o'chirilgan tugma chiqadi — shuning uchun bu yerda hech qachon o'ylab
 * topilgan manzil turmasligi kerak.
 */

/**
 * Platforma ishga tushdimi.
 *
 * `false` — hero va yakuniy blokda "Tez orada" belgisi turadi, asosiy CTA
 * Telegram'ga olib boradi, "Kirish" havolasi umuman chiqmaydi.
 * `true` — CTA ro'yxatdan o'tishga, "Kirish" esa login sahifasiga ketadi.
 */
export const IS_LIVE = false;

/**
 * Dizaynning ikki rasmiy aksenti. Standart — "Brend ko'k".
 * Qiymatlar dizayndagi `renderVals()` dan aynan olingan.
 */
export type Accent = "brand-blue" | "teal";

export const ACCENT: Accent = "brand-blue";

const ACCENT_TOKENS: Record<Accent, { accent: string; accentText: string; accentDark: string }> = {
  "brand-blue": { accent: "#1F64FF", accentText: "#1957E6", accentDark: "#14BCFB" },
  teal: { accent: "#0B7A75", accentText: "#0B7A75", accentDark: "#4CC9BF" },
};

export const ACCENT_VARS = ACCENT_TOKENS[ACCENT];

/**
 * Tashqi manzillar.
 *
 * Standart qiymatlar mavjud `landing/` loyihasidan ko'chirilgan. Ularni
 * kodga tegmasdan `.env.local` orqali almashtirish mumkin
 * (`.env.example` ga qarang).
 *
 * DIQQAT: Telegram kanali manzili tekshirilishi kerak — u avvalgi landing'dan
 * meros bo'lib qolgan va haqiqiy kanal ekani tasdiqlanmagan. Noto'g'ri bo'lsa,
 * `NEXT_PUBLIC_TELEGRAM_URL` ni bo'sh qoldiring: shunda dizayn o'zi
 * "Manzil hali sozlanmagan" holatiga o'tadi.
 */
export const URLS = {
  telegram: (process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/yolup_uz").trim(),
  /** `web/` ilovasidagi haqiqiy marshrutlar. */
  register: (process.env.NEXT_PUBLIC_REGISTER_URL ?? "/register").trim(),
  login: (process.env.NEXT_PUBLIC_LOGIN_URL ?? "/login").trim(),
} as const;

/**
 * Asosiy CTA — dizayndagi `pLabel`/`pIcon`/`pHref`/`pTarget` mantig'i.
 * Sahifada to'rt joyda ishlatiladi: navbar, hero, yakuniy blok va
 * mobil yopishqoq panel.
 */
export const PRIMARY_CTA = {
  label: IS_LIVE ? "Ro'yxatdan o'tish" : "Telegram'da xabardor bo'lish",
  /** Telegram holatida yuborish ikonkasi ko'rinadi, ro'yxatdan o'tishda — yo'q. */
  showIcon: !IS_LIVE,
  href: IS_LIVE ? URLS.register : URLS.telegram,
  target: IS_LIVE ? ("_self" as const) : ("_blank" as const),
} as const;

/** "Kirish" faqat platforma ishga tushgandan keyin ma'noga ega. */
export const SHOW_LOGIN = IS_LIVE;

export const SITE = {
  name: "YolUp",
  /** Kanonik manzil — mavjud `landing/` loyihasidagi bilan bir xil. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://yolup.uz").replace(/\/$/, ""),
  title: "YolUp — oʻzbek taʼlimi uchun onlayn dars platformasi",
  description:
    "Oʻzbek taʼlimi uchun onlayn dars platformasi: jonli dars, guruh chati, doska, davomat va uy vazifasini tekshirish — bir-biriga ulangan holda.",
  locale: "uz_UZ",
} as const;
