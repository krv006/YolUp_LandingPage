import { FileText, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

const ROOMS = [
  { title: "Algebra · 9-sinf", preview: "Dars ketmoqda", live: true },
  { title: "Fizika · 9-sinf", preview: "Uy vazifasi yuklandi", live: false },
  { title: "Ingliz tili", preview: "Sevinch: rahmat!", live: false },
];

/** O'qituvchi ish maydoni — guruh chat va kurs suhbatlari. */
export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-lift",
        className
      )}
    >
      <div className="grid sm:grid-cols-[168px_1fr]">
        {/* Suhbatlar ro'yxati */}
        <div className="hidden border-r border-line bg-bg-subtle p-2 sm:block">
          <p className="px-2 py-1 text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
            Suhbatlar
          </p>
          {ROOMS.map((room, index) => (
            <div
              key={room.title}
              className={cn(
                "rounded-lg px-2 py-2",
                index === 0 ? "bg-surface shadow-sm" : ""
              )}
            >
              <p className="truncate text-[0.6875rem] font-semibold text-ink">{room.title}</p>
              <p
                className={cn(
                  "truncate text-[0.625rem]",
                  room.live ? "font-semibold text-[#0f7a59] dark:text-green" : "text-faint"
                )}
              >
                {room.preview}
              </p>
            </div>
          ))}
        </div>

        {/* Xabarlar */}
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
            <span className="h-6 w-6 shrink-0 rounded-full bg-linear-to-br from-blue to-mint" />
            <div className="min-w-0">
              <p className="truncate text-[0.75rem] font-semibold text-ink">Algebra · 9-sinf</p>
              <p className="text-[0.625rem] text-faint">12 o'quvchi</p>
            </div>
          </div>

          <div className="space-y-2 bg-bg-subtle p-3">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-line bg-surface px-3 py-2">
              <p className="text-[0.6875rem] font-semibold text-blue">Ustoz</p>
              <p className="text-[0.6875rem] leading-snug text-ink">
                Bugungi dars doskasi PDF bo'lib joylandi.
              </p>
            </div>

            <div className="flex max-w-[80%] items-center gap-2 rounded-2xl rounded-tl-sm border border-line bg-surface px-3 py-2">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                <FileText size={12} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[0.6875rem] font-semibold text-ink">
                  doska-14-dars.pdf
                </span>
                <span className="block text-[0.625rem] text-faint">Faqat platformada ochiladi</span>
              </span>
            </div>

            <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-brand px-3 py-2">
              <p className="text-[0.6875rem] leading-snug text-white">
                Rahmat! Vazifani bugun topshiraman.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-line px-3 py-2">
            <Paperclip size={13} className="shrink-0 text-faint" aria-hidden />
            <span className="min-w-0 flex-1 truncate text-[0.6875rem] text-faint">
              Xabar yozing…
            </span>
            <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[0.625rem] font-semibold text-white">
              Yuborish
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
