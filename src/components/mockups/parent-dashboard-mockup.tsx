import { cn } from "@/lib/utils";

const FOCUS_TIMELINE = [
  { at: "14:12", away: "1 daq 20 s" },
  { at: "14:31", away: "3 daq 05 s" },
  { at: "14:52", away: "0 daq 48 s" },
];

const CONSENTS = [
  { label: "Dars yozuvi", on: true },
  { label: "Kamera", on: true },
  { label: "Faollik tahlili", on: false },
];

/** Ota-ona kabineti — davomat, fokus jurnali va rozilik sozlamalari. */
export function ParentDashboardMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-lift",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
        <span className="h-8 w-8 shrink-0 rounded-full bg-linear-to-br from-violet to-mint" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.8125rem] font-semibold text-ink">Dilnoza Rahimova</p>
          <p className="text-[0.6875rem] text-faint">9-sinf · 3 ta kurs</p>
        </div>
        <span className="shrink-0 rounded-full bg-green/12 px-2 py-1 text-[0.625rem] font-semibold text-[#0f7a59] dark:text-green">
          Tasdiqlangan
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          { value: "94%", label: "Davomat" },
          { value: "8.6", label: "O'rtacha ball" },
          { value: "3", label: "Chiqish" },
        ].map((stat) => (
          <div key={stat.label} className="px-3 py-3 text-center">
            <p className="font-display text-[1.0625rem] font-extrabold text-ink">{stat.value}</p>
            <p className="text-[0.625rem] text-faint">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
            Fokus jurnali
          </p>
          <span className="rounded-full bg-orange/15 px-2 py-0.5 text-[0.625rem] font-semibold text-orange">
            Chegara oshdi
          </span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {FOCUS_TIMELINE.map((item) => (
            <li key={item.at} className="flex items-center gap-2 text-[0.6875rem]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span className="text-ink">{item.at} da chiqdi</span>
              <span className="ml-auto shrink-0 text-faint">{item.away}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-3">
        <p className="text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
          Maxfiylik ruxsatlari
        </p>
        <ul className="mt-2 space-y-2">
          {CONSENTS.map((consent) => (
            <li key={consent.label} className="flex items-center justify-between gap-2">
              <span className="text-[0.75rem] text-ink">{consent.label}</span>
              <span
                className={cn(
                  "flex h-4.5 w-8 shrink-0 items-center rounded-full px-0.5 transition-colors",
                  consent.on ? "bg-brand" : "bg-line"
                )}
              >
                <span
                  className={cn(
                    "h-3.5 w-3.5 rounded-full bg-white shadow-sm",
                    consent.on && "translate-x-3.5"
                  )}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
