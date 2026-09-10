import { Hand, Mic, MicOff, MonitorUp, Video } from "lucide-react";
import { BrowserFrame } from "./browser-frame";

const PARTICIPANTS = [
  { name: "Dilnoza R.", muted: false, raised: true },
  { name: "Javohir T.", muted: true, raised: false },
  { name: "Sevinch A.", muted: true, raised: false },
  { name: "Bekzod M.", muted: true, raised: false },
];

/** Jonli dars ekrani — hero'ning asosiy vizuali. */
export function LiveLessonMockup({ className }: { className?: string }) {
  return (
    <BrowserFrame url="yolup.uz/live/algebra-9" className={className}>
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-semibold text-ink">Algebra · 9-sinf</p>
          <p className="text-[0.6875rem] text-faint">Kvadrat tenglamalar · 42:07</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e0455a]/12 px-2.5 py-1 text-[0.6875rem] font-semibold text-[#e0455a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e0455a] ring-3 ring-[#e0455a]/20" />
          Jonli
        </span>
      </div>

      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_150px]">
        {/* Ekran ulashish maydoni */}
        <div className="relative overflow-hidden rounded-xl bg-[#0e1b3c]">
          <div className="flex h-full min-h-[168px] flex-col justify-between p-4">
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full bg-white/25" />
              <div className="h-2 w-36 rounded-full bg-white/15" />
              <svg viewBox="0 0 200 60" className="mt-3 h-14 w-full" role="presentation">
                <path
                  d="M6 52 C40 52 60 16 96 16 C132 16 150 40 194 10"
                  fill="none"
                  stroke="#22D3A5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path d="M6 56 L194 56" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[0.625rem] font-medium text-white/80">
              <MonitorUp size={11} aria-hidden /> Ekran ulashilmoqda · yozuvda
            </span>
          </div>

          {/* O'qituvchi kichik oynasi */}
          <div className="absolute right-3 bottom-3 h-12 w-16 rounded-lg border border-white/20 bg-linear-to-br from-violet to-blue" />
        </div>

        {/* Ishtirokchilar */}
        <div className="space-y-1.5">
          <p className="px-1 text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
            12 ishtirokchi
          </p>
          {PARTICIPANTS.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-2 rounded-lg border border-line px-2 py-1.5"
            >
              <span className="h-5 w-5 shrink-0 rounded-full bg-linear-to-br from-sky to-mint" />
              <span className="min-w-0 flex-1 truncate text-[0.6875rem] text-ink">
                {person.name}
              </span>
              {person.raised ? (
                <Hand size={11} className="shrink-0 text-orange" aria-hidden />
              ) : person.muted ? (
                <MicOff size={11} className="shrink-0 text-faint" aria-hidden />
              ) : (
                <Mic size={11} className="shrink-0 text-green" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Boshqaruv paneli */}
      <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
        <div className="flex gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-bg-subtle text-ink">
            <Mic size={14} aria-hidden />
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-bg-subtle text-ink">
            <Video size={14} aria-hidden />
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <MonitorUp size={14} aria-hidden />
          </span>
        </div>
        <span className="rounded-full border border-line px-3 py-1.5 text-[0.6875rem] font-semibold text-fg">
          Darsni yakunlash
        </span>
      </div>
    </BrowserFrame>
  );
}
