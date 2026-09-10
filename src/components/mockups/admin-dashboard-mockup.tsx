import { cn } from "@/lib/utils";

const KPIS = [
  { value: "248", label: "Faol o'quvchi" },
  { value: "19", label: "O'qituvchi" },
  { value: "31", label: "Faol kurs" },
];

const BARS = [42, 58, 36, 72, 64, 88, 76];

const TEACHERS = [
  { name: "N. Karimova", rating: "4.9", lessons: "38" },
  { name: "A. Yusupov", rating: "4.8", lessons: "31" },
  { name: "S. Ergasheva", rating: "4.7", lessons: "27" },
];

/** Admin KPI paneli — o'quv markazlar uchun. */
export function AdminDashboardMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-lift",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
        <p className="text-[0.8125rem] font-semibold text-ink">Boshqaruv paneli</p>
        <div className="flex gap-1">
          {["Kun", "Hafta", "Oy"].map((period, index) => (
            <span
              key={period}
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.625rem] font-medium",
                index === 2 ? "bg-brand text-white" : "text-faint"
              )}
            >
              {period}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="px-3 py-3">
            <p className="font-display text-[1.0625rem] font-extrabold text-ink">{kpi.value}</p>
            <p className="truncate text-[0.625rem] text-faint">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-line px-4 py-3">
        <p className="text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
          O'tkazilgan darslar
        </p>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {BARS.map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={cn(
                "flex-1 rounded-t-sm",
                index === BARS.length - 2 ? "bg-brand" : "bg-blue/25"
              )}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-[0.625rem] font-semibold tracking-[0.1em] text-faint uppercase">
          Top o'qituvchilar
        </p>
        <ul className="mt-2 space-y-1.5">
          {TEACHERS.map((teacher) => (
            <li key={teacher.name} className="flex items-center gap-2 text-[0.6875rem]">
              <span className="h-5 w-5 shrink-0 rounded-full bg-linear-to-br from-people to-sky" />
              <span className="min-w-0 flex-1 truncate text-ink">{teacher.name}</span>
              <span className="shrink-0 text-faint">{teacher.lessons} dars</span>
              <span className="shrink-0 font-semibold text-ink">★ {teacher.rating}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
