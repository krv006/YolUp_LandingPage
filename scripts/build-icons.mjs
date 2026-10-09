/**
 * Brauzer ikonkalarini brend belgisidan quradi.
 *
 *   npm run build:icons
 *
 * Manba — `public/yolup-mark.png` (256×256, shaffof). Chiqish fayllari
 * `src/app/` ga tushadi: Next.js ularni fayl nomi bo'yicha tanib,
 * kerakli `<link>` teglarini o'zi qo'shadi.
 *
 * Natijalar repo'ga commit qilinadi — bu skript ularni qayta yaratish
 * uchun, har build'da ishlashi shart emas.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "public", "yolup-mark.png");
const APP = join(root, "src", "app");

const src = PNG.sync.read(readFileSync(SRC));
if (src.width !== src.height) throw new Error(`manba kvadrat bo'lishi kerak, hozir ${src.width}×${src.height}`);

/**
 * Qutili (box) kichraytirish.
 *
 * Ranglar alfaga KO'PAYTIRILGAN holda o'rtachalanadi. Aks holda shaffof
 * piksellarning (ko'pincha qora) rangi chetlarga aralashib, belgining
 * atrofida qorong'i halqa paydo bo'ladi.
 */
function resize(img, size) {
  const out = new PNG({ width: size, height: size });
  const scale = img.width / size;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const x0 = Math.floor(x * scale);
      const x1 = Math.min(img.width, Math.ceil((x + 1) * scale));
      const y0 = Math.floor(y * scale);
      const y1 = Math.min(img.height, Math.ceil((y + 1) * scale));

      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      let n = 0;

      for (let sy = y0; sy < y1; sy++) {
        for (let sx = x0; sx < x1; sx++) {
          const i = (img.width * sy + sx) << 2;
          const alpha = img.data[i + 3] / 255;
          r += img.data[i] * alpha;
          g += img.data[i + 1] * alpha;
          b += img.data[i + 2] * alpha;
          a += alpha;
          n++;
        }
      }

      const o = (size * y + x) << 2;
      if (a > 0) {
        out.data[o] = Math.round(r / a);
        out.data[o + 1] = Math.round(g / a);
        out.data[o + 2] = Math.round(b / a);
      }
      out.data[o + 3] = Math.round((a / n) * 255);
    }
  }

  return out;
}

/** Shaffof belgini oq kvadratga, chetlarida bo'sh joy qoldirib joylaydi. */
function onWhite(img, size, padRatio) {
  const inner = Math.round(size * (1 - padRatio * 2));
  const mark = resize(img, inner);
  const offset = Math.round((size - inner) / 2);
  const out = new PNG({ width: size, height: size });

  out.data.fill(255);

  for (let y = 0; y < inner; y++) {
    for (let x = 0; x < inner; x++) {
      const s = (inner * y + x) << 2;
      const d = (size * (y + offset) + x + offset) << 2;
      const alpha = mark.data[s + 3] / 255;
      for (let c = 0; c < 3; c++) {
        out.data[d + c] = Math.round(mark.data[s + c] * alpha + 255 * (1 - alpha));
      }
      out.data[d + 3] = 255;
    }
  }

  return out;
}

/**
 * Bir nechta o'lchamni bitta ICO faylga yig'adi.
 *
 * Vista'dan beri ICO ichida PNG'ni to'g'ridan-to'g'ri saqlash mumkin,
 * shuning uchun BMP'ga o'tkazish shart emas.
 */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const payloads = images.map((img) => PNG.sync.write(img));
  const entries = [];
  let offset = 6 + images.length * 16;

  images.forEach((img, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    e.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(payloads[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += payloads[i].length;
    entries.push(e);
  });

  return Buffer.concat([header, ...entries, ...payloads]);
}

mkdirSync(APP, { recursive: true });

// Zamonaviy brauzerlar: shaffof belgi, yorug' va qorong'i panelda ham ko'rinadi.
writeFileSync(join(APP, "icon.png"), PNG.sync.write(resize(src, 256)));

// iOS bosh ekrani shaffoflikni qo'llab-quvvatlamaydi — oq fon beramiz.
writeFileSync(join(APP, "apple-icon.png"), PNG.sync.write(onWhite(src, 180, 0.12)));

// Eski brauzerlar va `/favicon.ico` ni o'zi so'raydigan robotlar uchun.
writeFileSync(join(APP, "favicon.ico"), buildIco([16, 32, 48].map((s) => resize(src, s))));

console.log("yozildi: src/app/icon.png (256), src/app/apple-icon.png (180), src/app/favicon.ico (16/32/48)");
