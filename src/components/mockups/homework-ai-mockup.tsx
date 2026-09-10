import { Check, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  { label: "1-savol", score: "10 / 10", ok: true, note: "To'g'ri yechilgan." },
  { label: "2-savol", score: "6 / 10", ok: false, note: "Diskriminant noto'g'ri hisoblangan." },
  { label: "3-savol", score: "10 / 10", ok: true, note: "Izoh aniq yozilgan." },
];

/** AI uy vazifasi tekshiruvi natijasi — o'zbekcha izohlar bilan. */
export function HomeworkAIMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-soft",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
          <Sparkles size={14} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-semibold text-ink">AI tekshiruv natijasi</p>
          <p className="text-[0.6875rem] text-faint">vazifa-3.pdf · 1 daqiqa oldin</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b border-line px-4 py-3">
        <div className="relative h-14 w-14 shrink-0">
          <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90" role="presentation">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--line)" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#22D3A5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="97.4"
              strokeDashoffset="19.5"
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center font-display text-[0.8125rem] font-extrabold text-ink">
            26
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-[0.6875rem] text-faint">Umumiy ball · 30 dan</p>
          <p className="font-display text-[1rem] font-extrabold text-ink">Juda yaxshi</p>
        </div>
      </div>

      <ul className="divide-y divide-line">
        {QUESTIONS.map((question) => (
          <li key={question.label} className="flex items-start gap-2.5 px-4 py-2.5">
            <span
              className={cn(
                "mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                question.ok ? "bg-green/15 text-[#0f7a59] dark:text-green" : "bg-orange/15 text-orange"
              )}
            >
              {question.ok ? <Check size={10} aria-hidden /> : <X size={10} aria-hidden />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-[0.75rem] font-semibold text-ink">{question.label}</span>
                <span className="shrink-0 text-[0.6875rem] text-faint">{question.score}</span>
              </span>
              <span className="mt-0.5 block text-[0.6875rem] leading-snug text-fg">
                {question.note}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
