/**
 * Landing matnlari va ma'lumotlari — YAGONA manba.
 *
 * Har bir da'vo `docs/LANDING_BRIEF.md` da hujjatlashtirilgan REAL funksiyaga
 * asoslanadi. Brief §9 dagi taqiqlangan da'volar (to'lov, AI yordamchi,
 * nativ ilova, gamifikatsiya, soxta statistika) bu yerda YO'Q va qo'shilmasin.
 */
import {
  BarChart3,
  Eye,
  FileCheck2,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

/** Aksent kaliti — rang klasslari komponentda lookup orqali beriladi. */
export type Accent = "violet" | "blue" | "mint" | "orange" | "sky" | "green";

/**
 * Platforma hali ishlab chiqarishga chiqarilmagan — landing SEO uchun
 * oldindan joylandi. Shu sabab sahifada "ro'yxatdan o'tish" emas,
 * "xabardor bo'lish" harakati taklif qilinadi.
 *
 * ISHGA TUSHGANDA: shu qiymatni `true` qiling — navbardagi "Kirish",
 * barcha CTA havolalari va matnlar avtomatik almashadi. Boshqa hech qayerda
 * o'zgartirish kerak emas.
 */
export const IS_LIVE: boolean = false;

/**
 * Landing sahifasining O'ZI ko'rsatiladimi.
 *
 * Hozircha `false` — tashrifchi faqat "Tez orada" ekranini ko'radi.
 * Landingning butun kodi joyida turadi va HECH NARSA o'chirilmagan; tayyor
 * bo'lganda shu qiymatni `true` qilish kifoya.
 *
 * Diqqat: yoqqanda `index.html` dagi FAQPage JSON-LD ni ham qayta oching —
 * u vaqtincha izohga olingan (sababi o'sha yerda yozilgan).
 */
export const SHOW_LANDING: boolean = false;

/** "Tez orada" ekranidagi matn. */
export const COMING_SOON = {
  title: "Tez orada",
  subtitle: "O'zbekiston uchun onlayn ta'lim platformasi ustida ishlayapmiz.",
} as const;

/**
 * Ilova marshrutlari. Landing va ilova bitta domenda deb faraz qilinadi.
 * Ilova alohida subdomenga chiqsa (masalan `app.yolup.uz`) — faqat shu yerni
 * o'zgartirish kifoya.
 */
export const APP_URLS = {
  login: "/login",
  register: "/register",
} as const;

export const CONTACT = {
  email: "salom@yolup.uz",
  telegram: "https://t.me/yolup_uz",
} as const;

/**
 * Asosiy harakat. Ishga tushmagunicha u Telegram kanaliga olib boradi —
 * ishlamaydigan `/register` sahifasiga yuborish foydalanuvchini aldash
 * bo'lardi.
 */
export const PRIMARY_CTA = IS_LIVE
  ? { label: "Bepul boshlash", href: APP_URLS.register }
  : { label: "Xabardor bo'lish", href: CONTACT.telegram };

export const LAUNCH = {
  badge: "Tez orada",
  note: "Platforma yakuniy sinovdan o'tmoqda — ishga tushgan kuni Telegram kanalimizda birinchi bo'lib e'lon qilamiz.",
} as const;

export const NAV_LINKS = [
  { label: "Imkoniyatlar", href: "#imkoniyatlar" },
  { label: "Kimlar uchun", href: "#kimlar-uchun" },
  { label: "Qanday ishlaydi", href: "#qanday-ishlaydi" },
  { label: "Narxlar", href: "#narxlar" },
  { label: "Savollar", href: "#savollar" },
] as const;

export const HERO = {
  eyebrow: "TA'LIM PLATFORMASI · O'ZBEKISTON",
  titleLead: "Bugun o'rgan.",
  titleAccent: "Uzoqqa bor.",
  subtitle:
    "Jonli darslar, interaktiv doska, AI uy vazifasi tekshiruvi va ota-ona nazorati — bitta platformada. O'zbek tilida.",
  secondaryCta: "Imkoniyatlar bilan tanishing",
  trustLine: ["5 ta rol", "3 til", "Dars yozuvlari himoyalangan"],
} as const;

export const TRUST_SIGNALS: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Real-time doska", icon: PenTool },
  { label: "AI tekshiruv o'zbekcha", icon: FileCheck2 },
  { label: "Avtomatik davomat", icon: Users },
  { label: "Himoyalangan yozuvlar", icon: ShieldCheck },
];

export const PROBLEM_SOLUTION: readonly { before: string; after: string }[] = [
  { before: "Tarqoq havolalar", after: "Bitta platforma" },
  { before: "Qo'lda davomat", after: "Avtomatik davomat va diqqat jurnali" },
  { before: "Vazifa haftada tekshiriladi", after: "AI bir daqiqada tekshiradi" },
  { before: "Ota-ona hech narsa bilmaydi", after: "Ota-onaga hisobot" },
  { before: "Dars yozuvi tarqab ketadi", after: "Yozuv faqat platformada" },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  /** Kartaning pastidagi qisqa belgilar — vizuali yo'q kartalarni to'ldiradi. */
  highlights?: readonly string[];
}

export const FEATURES: readonly Feature[] = [
  {
    id: "live",
    title: "Jonli video darslar",
    description:
      "LiveKit WebRTC. O'qituvchi darsga kirishi bilan video yozuv va ekran ulashish avtomatik boshlanadi — qo'shimcha tugma bosish shart emas.",
    icon: Video,
    accent: "blue",
    highlights: ["Avtomatik yozuv", "Ekran ulashish", "Davomat o'zi yig'iladi", "Taklif va ruxsatlar"],
  },
  {
    id: "ai",
    title: "AI uy vazifasi tekshiruvi",
    description:
      "Gemini topshirilgan faylni — PDF, rasm, DOCX yoki audio — savolma-savol tekshiradi va xatolarni o'zbek tilida tushuntiradi.",
    icon: FileCheck2,
    accent: "mint",
    highlights: ["PDF · rasm · DOCX · audio", "Savolma-savol tahlil", "Qayta tekshirish"],
  },
  {
    id: "board",
    title: "Real-time interaktiv doska",
    description:
      "Qalam, shakl, matn va matematik formulalar. Har bir chizma saqlanadi, dars oxirida doska PDF bo'lib guruh chatga tushadi.",
    icon: PenTool,
    accent: "violet",
  },
  {
    id: "focus",
    title: "Diqqat nazorati",
    description:
      "“Siz shu yerdamisiz?” tekshiruvi va oynadan chiqishlar jurnali. Uch marta chiqsa ota-onaga signal ketadi.",
    icon: Eye,
    accent: "orange",
  },
  {
    id: "chat",
    title: "Telegram uslubidagi chat",
    description:
      "Har kurs — alohida guruh chat. Shaxsiy suhbat faqat o'qituvchi bilan, bir martalik so'rov orqali ochiladi.",
    icon: MessageCircle,
    accent: "sky",
  },
  {
    id: "reports",
    title: "Testlar va hisobotlar",
    description:
      "Avtomatik baholanadigan testlar, davomat, o'qituvchi reytingi va KPI paneli — natija darhol ko'rinadi.",
    icon: BarChart3,
    accent: "green",
  },
];

/** Bento'dagi katta karta — brief §7.5 dagi "Ota-ona kabineti". */
export const PARENT_HIGHLIGHT = {
  eyebrow: "OTA-ONA KABINETI",
  title: "Farzandingiz darsda nima qilayotganini ko'rasiz",
  description:
    "Davomat, diqqat jurnali, uy vazifasi natijalari va kirishlar tarixi — bitta ekranda. Hammasi bolaning roziligi bilan yoqiladi.",
  points: [
    "Necha marta oynadan chiqdi va qancha vaqt yo'q bo'ldi",
    "Har bir vazifa bo'yicha AI bahosi va izohi",
    "Kamera, yozuv va tahlil — har biri alohida ruxsat",
  ],
} as const;

export interface Audience {
  id: string;
  label: string;
  promise: string;
  benefits: readonly string[];
}

export const AUDIENCES: readonly Audience[] = [
  {
    id: "teacher",
    label: "O'qituvchilar",
    promise: "Dars, guruh, doska, vazifa va hisobot — bitta ish maydonida.",
    benefits: [
      "Kurs yaratasiz — guruh chat avtomatik ochiladi",
      "Doskada chizasiz, o'quvchiga ruxsat berasiz, dars oxirida PDF chatga tushadi",
      "Vazifani AI tekshiradi, bahoni siz tasdiqlaysiz yoki tuzatasiz",
      "Davomat, fokus jurnali va dars reytingi o'zi yig'iladi",
    ],
  },
  {
    id: "student",
    label: "O'quvchilar",
    promise: "Dars, chat, test va AI feedback — bir joyda.",
    benefits: [
      "Darsga bir bosishda kirasiz, doskada ruxsat so'raysiz",
      "Vazifani yuklaysiz — javob kutmaysiz, AI darhol tekshiradi",
      "Testlarda vaqt chegarasi yo'q, qayta urinish cheksiz",
      "O'tkazib yuborgan darsni yozuvdan qayta ko'rasiz",
    ],
  },
  {
    id: "parent",
    label: "Ota-onalar",
    promise: "Farzandingizning davomat, diqqat va natijalarini shaffof kuzating.",
    benefits: [
      "Farzandingizni FK-kod bilan ulaysiz — u tasdiqlaydi",
      "Davomat va diqqat jurnalini kunma-kun ko'rasiz",
      "Har bir vazifa natijasi va bahosi oldingizda",
      "Kamera, yozuv va tahlil ruxsatlarini o'zingiz boshqarasiz",
    ],
  },
  {
    id: "center",
    label: "O'quv markazlar",
    promise: "O'qituvchilar va o'quv jarayonini bitta admin paneldan boshqaring.",
    benefits: [
      "Faol o'quvchi, o'qituvchi va kurslar bo'yicha KPI",
      "Yangi o'qituvchilarni tasdiqlaysiz — tasdiqsiz kurs ocholmaydi",
      "Top kurslar va top o'qituvchilar reytingi",
      "Bildirishnomani bitta odamga yoki hammaga yuborasiz",
    ],
  },
];

export interface FlowStep {
  title: string;
  description: string;
}

export interface Flow {
  id: string;
  label: string;
  steps: readonly FlowStep[];
}

export const FLOWS: readonly Flow[] = [
  {
    id: "teacher",
    label: "O'qituvchi",
    steps: [
      { title: "Ro'yxatdan o'ting", description: "Administrator hisobingizni tasdiqlaydi." },
      { title: "Kurs yarating", description: "Guruh chat avtomatik ochiladi." },
      { title: "Dars rejalashtiring", description: "O'quvchilar taklif oladi." },
      { title: "Darsni o'tkazing", description: "Yozuv, doska va davomat o'zi ishlaydi." },
    ],
  },
  {
    id: "parent",
    label: "Ota-ona",
    steps: [
      { title: "Ro'yxatdan o'ting", description: "Ota-ona kabineti bir daqiqada ochiladi." },
      { title: "Farzandingizni ulang", description: "FK-kodni kiritasiz, u tasdiqlaydi." },
      { title: "Natijalarni kuzating", description: "Davomat, diqqat va baholar bir ekranda." },
    ],
  },
  {
    id: "student",
    label: "O'quvchi",
    steps: [
      { title: "Kursga qo'shiling", description: "Katalogdan tanlaysiz yoki taklif olasiz." },
      { title: "Darsga kiring", description: "Doskada ishlaysiz, savol berasiz." },
      { title: "Vazifani topshiring", description: "AI o'zbekcha izoh bilan tekshiradi." },
    ],
  },
];

export const SECURITY_POINTS: readonly { title: string; description: string }[] = [
  {
    title: "Kuzatuv faqat rozilik bilan",
    description: "Ota-ona farzandini ko'ra boshlashi uchun bola so'rovni tasdiqlashi shart.",
  },
  {
    title: "Har bir ruxsat alohida",
    description: "Kamera, dars yozuvi va faollik tahlili — uchtasi mustaqil yoqiladi va o'chiriladi.",
  },
  {
    title: "Yozuvlar platformadan chiqmaydi",
    description: "Yuklab olish yo'q, doimiy havola yo'q — har safar 3 soatlik imzolangan oqim.",
  },
  {
    title: "Audit jurnali",
    description: "Har bir muhim harakat yoziladi: kim, qachon, qaysi IP va qaysi qurilmadan.",
  },
  {
    title: "JWT · RBAC · rate limiting",
    description: "Rollar matritsasi kodda qat'iy belgilangan, so'rovlar chastotasi cheklangan.",
  },
  {
    title: "Soft-delete",
    description: "O'chirilgan ma'lumot bazadan yo'qolmaydi — huquqiy va audit talabi.",
  },
];

/**
 * Mahsulot ko'rsatkichlari. ATAYIN biznes statistikasi EMAS (brief §9):
 * "10 000+ o'quvchi" kabi tasdiqlanmagan raqam yozilmaydi.
 */
export const METRICS: readonly { value: number; suffix: string; label: string }[] = [
  { value: 8, suffix: "", label: "Doska asbobi" },
  { value: 5, suffix: "", label: "Foydalanuvchi roli" },
  { value: 3, suffix: "", label: "Interfeys tili" },
  { value: 25, suffix: " MB", label: "Vazifa fayli hajmi" },
];

export const PRICING = {
  eyebrow: "NARXLAR",
  badge: "Tez orada",
  title: "Ochilish beta'si — bepul",
  description:
    "Platforma ishga tushganda beta davri bepul bo'ladi: barcha imkoniyatlar cheklovsiz ochiq, karta talab qilinmaydi.",
  includes: [
    "Cheklanmagan jonli darslar va guruhlar",
    "Interaktiv doska va dars yozuvlari",
    "AI uy vazifasi tekshiruvi",
    "Ota-ona kabineti va hisobotlar",
  ],
  note: "Doimiy narxlar keyinroq e'lon qilinadi.",
} as const;

/**
 * FAQ. `index.html` dagi FAQPage JSON-LD shu savollarning nusxasi —
 * bu yerni o'zgartirsangiz, u yerni ham yangilang.
 */
export const FAQ_ITEMS: readonly { question: string; answer: string }[] = [
  {
    question: "Platforma qachon ishga tushadi?",
    answer:
      "Platforma yakuniy sinovdan o'tmoqda. Aniq sana e'lon qilinganda Telegram kanalimizda birinchi bo'lib bildiramiz — hozircha ro'yxatdan o'tish ochiq emas.",
  },
  {
    question: "Dars yozuvini yuklab olsa bo'ladimi?",
    answer:
      "Yo'q. Dars yozuvi faqat platforma ichida ochiladi — yuklab olish tugmasi yo'q, doimiy havola ham yo'q. Har safar 3 soatlik imzolangan havola beriladi.",
  },
  {
    question: "AI qaysi tilda tekshiradi?",
    answer: "Barcha izohlar, xatolar tahlili va tavsiyalar o'zbek tilida yoziladi.",
  },
  {
    question: "Ota-ona hamma narsani ko'radimi?",
    answer:
      "Faqat bola ruxsat bergan bo'limlarni. Kamera, dars yozuvi va faollik tahlili — har biri alohida yoqiladi, bola istalgan payt bog'lanishni uzishi mumkin.",
  },
  {
    question: "Qaysi fanlar uchun mos?",
    answer:
      "Har qanday fan uchun. Doskadagi matematik formula rejimi esa matematika kurslarida yoqiladi.",
  },
  {
    question: "Mobil ilova bormi?",
    answer:
      "Platforma brauzerda — telefonda ham, kompyuterda ham — to'liq ishlaydi. Nativ ilova ishlab chiqilmoqda.",
  },
  {
    question: "Internet sekin bo'lsa-chi?",
    answer:
      "Doska real vaqtda ishlaydi, aloqa uzilsa avtomatik “sekin rejim”ga o'tadi va tiklanganda sinxronlanadi.",
  },
  {
    question: "Nechta o'quvchi qatnasha oladi?",
    answer: "Guruh hajmi cheklanmagan — kichik repetitor guruhidan to'liq sinfgacha.",
  },
  {
    question: "Ro'yxatdan o'tish qancha vaqt oladi?",
    answer:
      "Ochilgandan keyin bir daqiqa. O'qituvchi hisoblari qo'shimcha ravishda administrator tasdig'idan o'tadi.",
  },
];

export const FINAL_CTA = {
  title: IS_LIVE
    ? "Birinchi darsingizni bugun o'tkazing."
    : "Ochilishdan birinchi bo'lib xabardor bo'ling.",
  subtitle: IS_LIVE
    ? "Hisob yaratish bepul. Karta talab qilinmaydi."
    : "Telegram kanalimizga qo'shiling — ishga tushgan kuni xabar beramiz.",
  secondary: "Savolim bor",
} as const;

export const FOOTER_COLUMNS: readonly {
  title: string;
  links: readonly { label: string; href: string }[];
}[] = [
  {
    title: "Mahsulot",
    links: [
      { label: "Imkoniyatlar", href: "#imkoniyatlar" },
      { label: "Qanday ishlaydi", href: "#qanday-ishlaydi" },
      { label: "Xavfsizlik", href: "#xavfsizlik" },
      { label: "Narxlar", href: "#narxlar" },
    ],
  },
  {
    title: "Kimlar uchun",
    links: [
      { label: "O'qituvchilar", href: "#kimlar-uchun" },
      { label: "O'quvchilar", href: "#kimlar-uchun" },
      { label: "Ota-onalar", href: "#kimlar-uchun" },
      { label: "O'quv markazlar", href: "#kimlar-uchun" },
    ],
  },
  {
    title: "Kompaniya",
    links: [
      { label: "Savollar", href: "#savollar" },
      { label: "Aloqa", href: `mailto:${CONTACT.email}` },
      { label: "Telegram", href: CONTACT.telegram },
    ],
  },
  {
    title: "Huquqiy",
    links: [
      { label: "Maxfiylik siyosati", href: "/privacy" },
      { label: "Foydalanish shartlari", href: "/terms" },
    ],
  },
];
