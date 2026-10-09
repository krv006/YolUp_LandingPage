/**
 * Savollar — tasdiqlangan dizayndan AYNAN ko'chirilgan (7 ta).
 *
 * Matnlar `docs/design/YolUp—homepage.html` dan dastur yordamida chiqarilgan,
 * shuning uchun o'zbekcha apostroflar (ʻ va ʼ) asl holida turibdi.
 * Tahrir qilishdan oldin dizayn bilan solishtiring.
 */
export interface FaqItem {
  /** `faq-q-<id>` va `faq-a-<id>` identifikatorlari shu yerdan quriladi. */
  id: string;
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "kim",
    q: "YolUp kimlar uchun?",
    a: "Onlayn dars oʻtadigan oʻqituvchilar, ularning oʻquvchilari va oʻquvchilarning ota-onalari uchun. Oʻqituvchi darsni boshqaradi, oʻquvchi qatnashadi, ota-ona esa oʻz panelida farzandi haqidagi mavjud maʼlumotlarni koʻradi.",
  },
  {
    id: "jonli",
    q: "Jonli darslar qanday oʻtadi?",
    a: "Oʻqituvchi va oʻquvchilar real vaqtda video orqali uchrashadi. Ekranni ovoz bilan ulashish, interaktiv doska va kursning guruh chati dars ichida ishlaydi.",
  },
  {
    id: "yozuv",
    q: "Dars yozuvlarini keyin koʻrish mumkinmi?",
    a: "Ha, YolUpʼda dars yozuvi funksiyasi bor, shuning uchun darsni keyin qayta koʻrish mumkin. Dars yozuvi uchun rozilik sozlamasi ham mavjud.",
  },
  {
    id: "vazifa",
    q: "Uy vazifalari qanday tekshiriladi?",
    a: "Oʻquvchi vazifani fayl yoki matn koʻrinishida topshiradi. Bir nechta javobli testlar avtomatik baholanadi. Qoʻllab-quvvatlanadigan fayl turlariga AI oʻzbek tilida izoh beradi, oʻqituvchi esa natijani koʻrib chiqib, bahoni tahrirlay oladi.",
  },
  {
    id: "otaona",
    q: "Ota-onalar nimalarni koʻra oladi?",
    a: "Ota-ona panelida davomat, mavjud diqqat va ishtirok maʼlumotlari, uy vazifalari natijalari, baholar va kirish tarixi koʻrsatiladi.",
  },
  {
    id: "diqqat",
    q: "Diqqat va ishtirok maʼlumotlari qanday ishlaydi?",
    a: "Dars davomida oʻquvchi dars oynasidan chiqsa, bu qayd etiladi: qancha vaqt tashqarida boʻlgani va qachon qaytgani. Vaqti-vaqti bilan «Hali shu yerdamisiz?» tekshiruvi chiqadi. Mahsulot qoidalariga koʻra, uchinchi chiqishdan keyin ota-onaga xabar yuboriladi. Bu maʼlumotlar darsdagi ishtirokni koʻrsatadi, oʻquvchi materialni oʻzlashtirganini emas.",
  },
  {
    id: "qachon",
    q: "YolUp qachon ishga tushadi?",
    a: "Hozircha aniq sana eʼlon qilinmagan. YolUp ishga tushganda Telegram orqali xabar beramiz.",
  },
];
