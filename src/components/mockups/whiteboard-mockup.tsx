import { ArrowUpRight, Eraser, Minus, PenLine, Square, Type } from "lucide-react";
import { cn } from "@/lib/utils";

const TOOLS = [PenLine, Minus, ArrowUpRight, Square, Type, Eraser];

/** Interaktiv doska — asboblar paneli, chizma va formula bloki. */
export function WhiteboardMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-soft",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
        <div className="flex items-center gap-1">
          {TOOLS.map((Tool, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-lg",
                index === 0 ? "bg-brand text-white" : "text-faint"
              )}
            >
              <Tool size={13} aria-hidden />
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green/12 px-2 py-1 text-[0.625rem] font-semibold text-[#0f7a59] dark:text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Jonli
        </span>
      </div>

      <div className="relative bg-bg-subtle p-4">
        <svg viewBox="0 0 260 120" className="h-32 w-full" role="presentation">
          <path
            d="M14 96 C46 96 62 40 96 40 C124 40 138 74 168 74 C196 74 214 34 246 26"
            fill="none"
            stroke="#6C4CF1"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M14 104 L246 104"
            stroke="var(--line)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M14 104 L14 18" stroke="var(--line)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="96" cy="40" r="3.5" fill="#22D3A5" />
          <circle cx="168" cy="74" r="3.5" fill="#22D3A5" />
          <rect
            x="176"
            y="34"
            width="66"
            height="20"
            rx="6"
            fill="none"
            stroke="#2F7BF5"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
        </svg>

        {/* MathLive formula bloki */}
        <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5">
          <span className="text-[0.625rem] font-semibold tracking-wide text-faint">FORMULA</span>
          <span className="font-display text-[0.8125rem] text-ink italic">
            x = (−b ± √(b² − 4ac)) / 2a
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-brand px-2 py-0.5 text-[0.625rem] font-semibold text-white">
            1
          </span>
          <span className="rounded-md border border-line px-2 py-0.5 text-[0.625rem] text-faint">
            2
          </span>
          <span className="rounded-md border border-line px-2 py-0.5 text-[0.625rem] text-faint">
            +
          </span>
        </div>
        <span className="text-[0.625rem] text-faint">Dilnoza R. chizmoqda</span>
      </div>
    </div>
  );
}
