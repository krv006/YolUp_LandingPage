/**
 * Dizaynda bir necha marta takrorlanadigan ikonkalar.
 *
 * Yo'llar (`d`) tasdiqlangan HTML'dan aynan olingan. Faqat bir joyda
 * uchraydigan ikonkalar ataylab shu yerga ko'chirilmagan — ular o'z
 * seksiyasida inline turadi.
 */
import type { SVGProps } from "react";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  /** Dizayn 12, 14, 16 va 18 px dan foydalanadi. */
  size?: number;
}

function Icon({ size = 16, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Ro'yxat belgisi. Dizaynda `.fl` da 2.5, chiplarda 3 qalinlikda. */
export function Check({ strokeWidth = 2.5, ...rest }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...rest}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Icon>
  );
}

/** Yuborish — CTA'da va doska chatga yuborilganda. */
export function Send({ strokeWidth = 2, withTail = true, ...rest }: IconProps & { withTail?: boolean }) {
  return (
    <Icon strokeWidth={strokeWidth} {...rest}>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3z" />
      {withTail ? <path d="M10 13l4.5-4.5" /> : null}
    </Icon>
  );
}

/** Doska qalami. */
export function Pencil({ strokeWidth = 2, withNib = false, ...rest }: IconProps & { withNib?: boolean }) {
  return (
    <Icon strokeWidth={strokeWidth} {...rest}>
      <path d="M4 20l4-1L19 8l-3-3L5 16z" />
      {withNib ? <path d="M14 7l3 3" /> : null}
    </Icon>
  );
}

/** Kutilmoqda / tashqarida o'tgan vaqt. */
export function Clock({ strokeWidth = 2, ...rest }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </Icon>
  );
}

export function Menu({ size = 24, strokeWidth = 2, ...rest }: IconProps) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} {...rest}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function Close({ size = 24, strokeWidth = 2, ...rest }: IconProps) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} {...rest}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  );
}

/** Akkordeon belgisi — ochilganda 45° burilib "×" ga aylanadi. */
export function Plus({ size = 14, strokeWidth = 2.4, ...rest }: IconProps) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} {...rest}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function ArrowUp({ size = 14, strokeWidth = 2.2, ...rest }: IconProps) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} {...rest}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </Icon>
  );
}

export function ExternalLink({ size = 14, strokeWidth = 2, ...rest }: IconProps) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} {...rest}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}
