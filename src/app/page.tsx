/**
 * YolUp landing.
 *
 * Bu fayl faqat KOMPOZITSIYA: har bir bo'lim o'z faylida turadi va
 * tasdiqlangan dizayndagi tartibda chaqiriladi.
 *
 * `.yl` o'rami aksent ranglarini CSS o'zgaruvchisi sifatida beradi —
 * dizaynda ham shunday edi, shuning uchun aksentni almashtirish uchun
 * `content/site.ts` dagi bitta qiymatni o'zgartirish kifoya.
 */
import type { CSSProperties } from "react";

import { MenuProvider } from "@/components/menu-context";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { FAQ_ITEMS } from "@/content/faq";
import { ACCENT_VARS, SHOW_ENGAGEMENT, SITE } from "@/content/site";
import { Audiences } from "@/sections/audiences";
import { Engagement } from "@/sections/engagement";
import { Faq } from "@/sections/faq";
import { Features } from "@/sections/features";
import { FinalCta } from "@/sections/final-cta";
import { Hero } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-it-works";
import { Privacy } from "@/sections/privacy";
import { Problem } from "@/sections/problem";
import { SiteFooter } from "@/sections/site-footer";
import { Teachers } from "@/sections/teachers";

const accentStyle = {
  "--accent": ACCENT_VARS.accent,
  "--accent-text": ACCENT_VARS.accentText,
  "--accent-dark": ACCENT_VARS.accentDark,
} as CSSProperties;

/**
 * Structured data.
 *
 * FAQPage ataylab shu sahifada: savollar EKRANDA ko'rinadi va matni
 * `FAQ_ITEMS` dan — ya'ni bitta manbadan — olinadi, shuning uchun
 * razmetka hech qachon ko'rinadigan matndan ajralib qolmaydi.
 * Bu Google'ning talabi.
 */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.description,
    logo: `${SITE.url}/yolup-mark.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function Home() {
  return (
    <MenuProvider>
      <div className="yl" style={accentStyle}>
        <SiteHeader />

        <main id="top">
          <Hero />
          <Problem />
          <HowItWorks />
          <Features />
          {/* Vaqtincha yopilgan — `SHOW_ENGAGEMENT`. Bo'lim kodi joyida turibdi. */}
          {SHOW_ENGAGEMENT ? <Engagement /> : null}
          <Audiences />
          <Privacy />
          <Teachers />
          <Faq />
          <FinalCta />
        </main>

        <SiteFooter />
        <StickyCta />
      </div>

      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </MenuProvider>
  );
}
