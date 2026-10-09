# YolUp landing (Next.js)

Tasdiqlangan dizaynning ishlab chiqarishga tayyor amalga oshirilishi.

- **Dizayn manbai:** `../docs/design/YolUp—homepage.html` (bundle ichidagi
  "Landing · toʻliq sahifa (responsive)" sahifasi)
- **Stek:** Next.js 16 (App Router) · React 19 · TypeScript · oddiy CSS

## Ishga tushirish

```bash
npm install
npm run dev          # http://localhost:3000
```

| Buyruq              | Vazifasi                       |
| ------------------- | ------------------------------ |
| `npm run dev`       | Ishlab chiqish serveri         |
| `npm run build`     | Ishlab chiqarish uchun build   |
| `npm run start`     | Build qilingan saytni servirlash |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | `tsc --noEmit`                 |

## Prodga chiqarish

Ilova **Node ishlayotgan muhitni** talab qiladi (avvalgi Vite versiyasidan
farqli — u sof statik edi). Sabablari: `next/image` rasmlarni so'rov paytida
optimallashtiradi va futerdagi yil kuniga bir marta yangilanadi.

**Tavsiya — Vercel.** Sozlash shart emas:

1. [vercel.com](https://vercel.com) da GitHub repo'ni import qiling.
2. Muhit o'zgaruvchilarini qo'shing (`.env.example` dagi ro'yxat).
3. `yolup.uz` domenini ulang.

**O'z serveringizda** (nginx + Node):

```bash
npm ci
npm run build
npm run start          # 3000-portda tinglaydi
```

Keyin nginx'dan `proxy_pass http://127.0.0.1:3000` qiling va jarayonni
`systemd` yoki `pm2` bilan ushlab turing.

> Sof statik hosting (faqat fayllar, Node'siz) ham mumkin, lekin buning uchun
> `next.config.ts` ga `output: "export"` qo'shish va ikki narsadan voz kechish
> kerak: rasm optimallashtirish va yilning avtomatik yangilanishi.

## Sozlamalar — qayerni o'zgartirish kerak

Hammasi **`src/content/site.ts`** da:

| Qiymat        | Vazifasi                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------ |
| `IS_LIVE`     | `false` — "Tez orada" belgisi, CTA Telegram'ga. `true` — CTA ro'yxatdan o'tishga, "Kirish" paydo bo'ladi. |
| `ACCENT`      | `"brand-blue"` (standart) yoki `"teal"` — dizayndagi ikki rasmiy aksent.                     |
| `URLS`        | Telegram, ro'yxatdan o'tish va kirish manzillari.                                            |

Manzillarni kodga tegmasdan `.env.local` orqali ham berish mumkin —
`.env.example` ga qarang.

**Manzil sozlanmagan bo'lsa** (bo'sh qator) sahifa ishlamaydigan havola
chiqarmaydi: uning o'rniga `title="Manzil hali sozlanmagan"` bilan tugma
ko'rsatiladi. Bu xatti-harakat dizaynning o'zidan.

Savol-javob matnlari **`src/content/faq.ts`** da. Ular dizayndan dastur
yordamida chiqarilgan — tahrir qilsangiz, `FAQPage` structured data ham
o'sha manbadan qurilgani uchun avtomatik mos qoladi.

## Tuzilish

```
src/
  app/
    layout.tsx        shriftlar (next/font) + meta ma'lumot
    page.tsx          faqat kompozitsiya + JSON-LD
    globals.css       dizayn CSS'i, AYNAN ko'chirilgan, `.yl` ostida
  content/            site.ts (sozlamalar), faq.ts (savollar)
  sections/           11 ta bo'lim — dizayndagi tartibda
  components/
    mocks/            interfeys illyustratsiyalari (haqiqiy ekran emas)
    site-header.tsx   mobil menyu          ← mijoz
    faq-accordion.tsx akkordeon            ← mijoz
    sticky-cta.tsx    mobil yopishqoq CTA  ← mijoz
    cta.tsx, brand.tsx, icons.tsx, menu-context.tsx
```

Faqat uchta komponent mijoz tomonida — qolgani Server Component.

## CSS haqida

`src/app/globals.css` — dizayn CSS'ining **aynan nusxasi**. Qiymatlarni
"yaxshilash" uchun o'zgartirmang: maket referensdan ajralib ketadi. Barcha
qoidalar `.yl` ostida, shuning uchun boshqa sahifalarga sizmaydi.

Ikkita ataylab kiritilgan farq fayl boshida izohlangan:

1. `--fd` / `--ft` endi `next/font` o'zgaruvchilariga ishora qiladi
   (shriftlar o'z hostimizdan beriladi).
2. `html` ga fon rangi qo'shildi — referens iframe ichida qat'iy balandlikda
   ko'rsatilgani uchun sahifa chetidan cho'zilganda oq fon chiqib qolishi
   sezilmagan.

## Ma'lumotlar haqiqiyligi

Sahifadagi barcha interfeys tasvirlari — **illyustratsiya**, haqiqiy ekran
emas. Har biri `role="img"` va tavsiflovchi `aria-label` oladi, ichki bezak
esa `aria-hidden`. Sahifada bu ochiq aytilgan (hero ostidagi izoh va
futerdagi qator). Ularni haqiqiy skrinshot deb ko'rsatmang.
