import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onDark";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] duration-200 will-change-transform active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-brand hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgb(108_76_241/0.36)]",
  secondary:
    "border border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-soft",
  onDark:
    "border border-white/25 bg-white/10 text-white hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/15",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ActionProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/**
 * Havola va tugma bitta ko'rinishda, lekin SEMANTIKASI to'g'ri:
 * `href` berilsa `<a>`, aks holda `<button>` render qilinadi.
 */
export function Button(props: LinkProps | ActionProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if (typeof rest.href === "string") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? "button"} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
