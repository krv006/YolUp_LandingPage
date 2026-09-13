# YolUp — Landing Page

Marketing sahifasi. **Alohida loyiha** (`web/` va `mobile/` kabi) — o'z
`package.json`, `node_modules` va build chiqishiga ega. Ilova kodiga
bog'lanmaydi.

Mazmun manbasi: [`../docs/LANDING_BRIEF.md`](../docs/LANDING_BRIEF.md).

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  →  dist/
npm run preview
npm run lint
npm run typecheck
```

## Stack

React 19 · TypeScript (strict) · Vite 8 · Tailwind v4 (CSS-first `@theme`) ·
framer-motion (`LazyMotion` + `m`) · lucide-react.
`web/` bilan bir xil toolchain va tsconfig qoidalari.

## Struktura

```
src/
├── content/site.ts        ← BARCHA matn va ma'lumot shu yerda
├── sections/              ← sahifa bloklari (Navbar … Footer)
├── components/
│   ├── brand/             ← YolUpMark (SVG), YolUpLogo
│   ├── ui/                ← Button, Container, Section, Tabs, Reveal, ThemeToggle
│   └── mockups/           ← mahsulot ekranlari (sof React/CSS, skrinshot emas)
├── hooks/use-hash-scroll.ts
├── lib/
└── index.css              ← brend tokenlari (`:root` + `.dark` + `@theme inline`)
```

## Qoidalar

1. **Matn `content/site.ts` da.** Seksiya komponentiga matn qattiq yozilmaydi.
2. **Yo'q funksiya va'da qilinmaydi.** `LANDING_BRIEF.md` §9 ro'yxati: to'lov
   tizimi, AI yordamchi, nativ ilova, gamifikatsiya, soxta statistika va soxta
   sharhlar — bularni qo'shish mumkin emas.
3. **Ranglar `index.css` dagi tokenlardan.** Komponentda qattiq hex yozilmaydi
   (istisno: xavfsizlik seksiyasi — u ikkala mavzuda ham to'q qoladi).
4. **Gradient kam ishlatiladi:** CTA, kichik aksentlar, ikonka fonlari.
5. **Bitta animatsiya tili:** `<Reveal>` (fade + 24px ko'tarilish). Cheksiz
   harakat, parallax va scroll-hijack yo'q; `prefers-reduced-motion` hurmat
   qilinadi.
6. **Har mockup bitta joyda** ishlatiladi — takrorlanmaydi.

## Landing hozircha YOPIQ (muhim)

Tashrifchi hozir faqat **"Tez orada"** ekranini ko'radi
([src/pages/coming-soon.tsx](src/pages/coming-soon.tsx)). Landingning butun
kodi joyida — hech narsa o'chirilmagan, shunchaki ko'rsatilmaydi:

```ts
export const SHOW_LANDING: boolean = false;   // ← tayyor bo'lganda `true`
```

`true` qilinganda 13 ta seksiya o'z-o'zidan qaytadi. Yoqishdan oldin yana
ikki narsani tiklang:

1. `index.html` dagi **FAQPage JSON-LD** — vaqtincha izohga olingan. Google
   FAQ strukturaviy ma'lumoti sahifada **ko'rinadigan** kontentga mos
   bo'lishini talab qiladi; "Tez orada" ekranida ko'rinmagan FAQ uchun qo'lda
   jazo berilishi mumkin.
2. `index.html` dagi **`<noscript>`** matni — u ham ekranda ko'rinadigan
   narsaga mos bo'lishi kerak.

Yopiq holatda landing matnlari **build'ga umuman tushmaydi** (Rollup
ishlatilmagan kodni chiqarib tashlaydi), ya'ni e'lon qilinmagan kontentni
JS fayldan o'qib bo'lmaydi.

## Ishga tushirish holati (muhim)

Platforma hali prodga chiqmagan — landing **SEO uchun oldindan** joylandi.
Shuning uchun sahifada "ro'yxatdan o'tish" emas, **"xabardor bo'lish"**
(Telegram) harakati taklif qilinadi va navbardagi "Kirish" yashirilgan.

Buni bitta joy boshqaradi — `content/site.ts`:

```ts
export const IS_LIVE: boolean = false;   // ← ochilganda `true`
```

`true` qilinganda avtomatik almashadi: navbar "Kirish" tugmasi qaytadi, barcha
CTA'lar `/register` ga o'tadi, yakuniy blok matni o'zgaradi. Qo'lda tahrirlash
talab qiladigan **yagona** joy — `index.html` dagi FAQPage JSON-LD'ning
birinchi savoli ("Platforma qachon ishga tushadi?") va `og:description`
oxiridagi "Tez orada ishga tushadi" jumlasi.

## Ilovaga havolalar

`content/site.ts` → `APP_URLS`. Hozir `/login` va `/register` — landing va ilova
bitta domenda deb faraz qilinadi. Ilova subdomenga chiqsa, faqat shu obyekt
o'zgartiriladi.

## Deploy

Statik SPA: `dist/` ni istalgan static hostingga (Vercel/Netlify/Caddy)
qo'yiladi. SSR yo'q — `index.html` dagi meta teglar, Open Graph va JSON-LD
statik, shuning uchun ijtimoiy tarmoq preview'lari va strukturaviy ma'lumot
JavaScriptsiz ham ishlaydi.

**Deploydan oldin:** `index.html` dagi `https://yolup.uz/` manzillari (canonical,
og:url, og:image) haqiqiy domenga almashtirilsin.
