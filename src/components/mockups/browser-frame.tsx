import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Barcha mockup'lar uchun umumiy brauzer oynasi.
 *
 * Mockup'lar — skrinshot EMAS, sof React/CSS. Shuning uchun ular mavzuga
 * moslashadi, har ekranda tiniq chiqadi va matni haqiqiy mahsulotdagidek.
 */
export function BrowserFrame({
  url,
  className,
  bodyClassName,
  children,
}: {
  url: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card border border-line bg-surface shadow-lift",
        className
      )}
      // Mockup — bezak; skrin-rider uni o'qib o'tirmasin, mazmun matnda bor.
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-subtle px-3 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f2685f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f5bd4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-full border border-line bg-surface px-3 py-1 text-[0.6875rem] text-faint">
          {url}
        </span>
      </div>
      <div className={cn("bg-surface", bodyClassName)}>{children}</div>
    </div>
  );
}
