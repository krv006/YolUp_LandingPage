import { domAnimation, LazyMotion } from "framer-motion";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { Navbar } from "@/sections/navbar";
import { Hero } from "@/sections/hero";
import { TrustStrip } from "@/sections/trust-strip";
import { ProblemSolution } from "@/sections/problem-solution";
import { Features } from "@/sections/features";
import { Audience } from "@/sections/audience";
import { HowItWorks } from "@/sections/how-it-works";
import { Security } from "@/sections/security";
import { Metrics } from "@/sections/metrics";
import { Pricing } from "@/sections/pricing";
import { Faq } from "@/sections/faq";
import { FinalCta } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";

/**
 * Sahifa hikoyasi (brief §32): nima → nega muhim → qanday hal qiladi →
 * nima qila oladi → kim uchun → qanday ishlaydi → xavfsizmi → qancha →
 * savollar → bugun boshlash.
 *
 * Testimonial seksiyasi ATAYIN yo'q: haqiqiy sharh yig'ilmagan, soxtasi esa
 * taqiqlangan (brief §9, §17).
 */
export default function App() {
  useHashScroll();

  return (
    // `strict` — kod bazasida og'ir `motion` komponenti ishlatilib qolsa,
    // build'da emas, darhol xatolik beradi.
    <LazyMotion features={domAnimation} strict>
      <a
        href="#asosiy"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-btn focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Asosiy mazmunga o'tish
      </a>

      <Navbar />

      <main id="asosiy">
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Features />
        <Audience />
        <HowItWorks />
        <Security />
        <Metrics />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </LazyMotion>
  );
}
