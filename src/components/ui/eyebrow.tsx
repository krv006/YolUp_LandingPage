import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[0.75rem] font-semibold tracking-[0.14em] text-blue uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
