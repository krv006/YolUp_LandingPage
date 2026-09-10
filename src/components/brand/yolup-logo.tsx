import { cn } from "@/lib/utils";
import { YolUpMark } from "./yolup-mark";

interface YolUpLogoProps {
  className?: string;
  /** Logotip ostidagi tagline — footer'da ko'rsatiladi, navbar'da yashiriladi. */
  withTagline?: boolean;
}

export function YolUpLogo({ className, withTagline = false }: YolUpLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <YolUpMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.03em] text-ink">
          YolUp
        </span>
        {withTagline ? (
          <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.18em] text-faint uppercase">
            Learn today. Go further.
          </span>
        ) : null}
      </span>
    </span>
  );
}
