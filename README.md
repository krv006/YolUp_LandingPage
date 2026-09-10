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
