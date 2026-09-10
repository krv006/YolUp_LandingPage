import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Sahifa bo'ylab yagona gorizontal chekka — har seksiya shundan foydalanadi. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>{children}</div>
  );
}
