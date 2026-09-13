import { YolUpMark } from "@/components/brand/yolup-mark";
import { COMING_SOON } from "@/content/site";

/**
 * Vaqtinchalik ekran: landing tayyor bo'lgunicha tashrifchi shuni ko'radi.
 *
 * Landing kodi o'chirilmagan — uni `site.ts` dagi `SHOW_LANDING` bayrog'i
 * yoqadi. Bu yerda ataylab minimal: logotip va bitta yozuv.
 */
export function ComingSoon() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-5 py-16">
      {/* Hero bilan bir xil tekstura — bo'sh ekran tashlandiq ko'rinmasin. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[760px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,76,241,0.18),rgba(34,211,165,0.10)_45%,transparent_70%)] blur-2xl"
      />

      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-3">
          <YolUpMark className="h-12 w-12" />
          <span className="font-display text-[1.75rem] font-extrabold tracking-[-0.03em] text-ink">
            YolUp
          </span>
        </span>

        <h1 className="mt-10 text-display">
          <span className="text-brand">{COMING_SOON.title}</span>
        </h1>

        <p className="mt-5 max-w-md text-lead text-fg">{COMING_SOON.subtitle}</p>
      </div>
    </main>
  );
}
