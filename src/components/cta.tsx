/**
 * Asosiy harakat tugmalari.
 *
 * Dizayn manzil sozlanmagan holatni ataylab hisobga olgan: `pHref` bo'sh
 * bo'lsa havola emas, `title="Manzil hali sozlanmagan"` bilan tugma
 * ko'rsatiladi. Bu mantiq shu yerda saqlangan — hech qachon ishlamaydigan
 * `href="#"` qo'ymang.
 */
import { PRIMARY_CTA, SHOW_LOGIN, URLS } from "@/content/site";
import { Send } from "./icons";

interface PrimaryCtaProps {
  /** Dizayndagi variantlar: `cta`, `cta cta-sm`, `cta cta-inv`. */
  className?: string;
  /** Navbar'da 16, qolgan joylarda 18. */
  iconSize?: number;
}

export function PrimaryCta({ className = "cta", iconSize = 18 }: PrimaryCtaProps) {
  const icon = PRIMARY_CTA.showIcon ? <Send size={iconSize} /> : null;

  if (!PRIMARY_CTA.href) {
    return (
      <button type="button" className={className} title="Manzil hali sozlanmagan">
        {icon}
        <span>{PRIMARY_CTA.label}</span>
      </button>
    );
  }

  return (
    <a
      className={className}
      href={PRIMARY_CTA.href}
      target={PRIMARY_CTA.target}
      rel={PRIMARY_CTA.target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {icon}
      <span>{PRIMARY_CTA.label}</span>
    </a>
  );
}

/**
 * "Kirish" — faqat platforma ishga tushganda ko'rinadi (dizayndagi
 * `loginHas`/`loginNo`). Hozir `IS_LIVE = false`, shuning uchun hech narsa
 * qaytarmaydi.
 */
export function LoginLink({ className, style }: { className: string; style?: React.CSSProperties }) {
  if (!SHOW_LOGIN) return null;

  if (!URLS.login) {
    return (
      <button
        type="button"
        className={`${className} linkbtn`}
        title="Kirish manzili hali sozlanmagan"
        style={style}
      >
        Kirish
      </button>
    );
  }

  return (
    <a className={className} href={URLS.login} style={style}>
      Kirish
    </a>
  );
}
