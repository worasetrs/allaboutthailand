# All About Thailand

เว็บไซต์คู่มือและข่าวสารเกี่ยวกับประเทศไทยสำหรับชาวต่างชาติ (ภาษาอังกฤษ) สร้างด้วย [Astro](https://astro.build) และ deploy บน Netlify

## สิ่งที่มีในเว็บ

| ส่วน | URL | ทำงานอย่างไร |
|---|---|---|
| หน้าแรก | `/` | ค้นหา, กล่อง Today (ค่าเงิน อากาศ ค่าฝุ่นแบบสด, วันหยุดถัดไป), ข่าวล่าสุด |
| คู่มือ | `/guides/` | Markdown ใน `src/content/guides/` บังคับมีแหล่งอ้างอิงและวันที่ตรวจสอบ |
| ข่าว | `/news/` | Markdown ใน `src/content/news/` มีตัวกรองหมวด, RSS ที่ `/rss.xml` |
| ภูมิภาค | `/visit/` | ข้อมูลใน `src/data/regions.ts` |
| Essentials | `/essentials/` | เบอร์ฉุกเฉิน, แปลงค่าเงิน, Show to driver, วลีไทยพร้อมเสียง ใช้ได้ออฟไลน์ |
| ปฏิทิน | `/calendar/` | วันหยุดราชการ/เทศกาล 2026–2027 ใน `src/data/calendar.ts` |
| ค้นหา | `/search/` | Pagefind (สร้าง index ตอน build) |
| ฟอร์ม | สมัครรับข่าว, แจ้งแก้ไข | Netlify Forms → ส่งไปที่ `/thanks/` |
| SEO | ทุกหน้า | sitemap, robots.txt, canonical, Open Graph, JSON-LD (Article, NewsArticle, Event) |
| PWA | ทุกหน้า | ติดตั้งลงหน้าจอได้, service worker cache หน้าสำคัญไว้ใช้ออฟไลน์ |

## พัฒนาในเครื่อง

```bash
npm install
npm run dev
```

`npm run build` จะสร้างเว็บใน `dist/` พร้อม search index ส่วน `npm run preview` ใช้เปิดดูผลลัพธ์

## เพิ่มเนื้อหา

- **ข่าวใหม่:** สร้างไฟล์ `src/content/news/YYYY-MM-DD-ชื่อ.md` โดยคัดลอก frontmatter จากไฟล์เดิม ต้องมี `sources` อย่างน้อย 1 รายการ
- **คู่มือใหม่:** สร้างไฟล์ใน `src/content/guides/` และอัปเดต `lastChecked` ทุกครั้งที่ตรวจข้อมูลซ้ำ (เกิน 90 วันจะขึ้นป้าย "Being re-checked")
- **วันหยุด:** แก้ไขที่ `src/data/calendar.ts`

push ขึ้น `main` แล้ว Netlify จะ build และเผยแพร่ให้อัตโนมัติ

## เชื่อม Netlify (ทำครั้งเดียว)

1. ไปที่ https://app.netlify.com แล้วเลือก **Add new site → Import an existing project → GitHub → `allaboutthailand`**
2. ค่าการ build จะอ่านจาก `netlify.toml` เอง (`npm run build`, publish `dist`) จากนั้นกด **Deploy**
3. ไปที่ **Site configuration → Change site name** แล้วตั้งชื่อเป็น `allaboutthailand` (ถ้ามีคนใช้ชื่อนี้แล้ว เว็บจะใช้ URL ที่ Netlify ตั้งให้เองโดยอัตโนมัติ)
4. ไปที่ **Forms → Enable form detection** แล้วกด **Trigger deploy** อีกครั้ง ฟอร์มสมัครรับข่าวและฟอร์มแจ้งแก้ไขจึงจะเริ่มเก็บข้อมูล
5. (ถ้ามีโดเมนของตัวเอง) ตั้งค่าที่ **Domain management** ได้เลย ระบบจะใช้โดเมนนั้นใน sitemap และ canonical ให้อัตโนมัติ

## ส่งเว็บเข้า Search Engine

1. **Google Search Console:** ไปที่ https://search.google.com/search-console แล้วเพิ่ม URL prefix ของเว็บ เลือกยืนยันแบบ **HTML tag** และคัดลอกค่าใน `content="..."` มา
2. ใน Netlify ไปที่ **Site configuration → Environment variables** เพิ่ม `PUBLIC_GOOGLE_SITE_VERIFICATION` = ค่าที่คัดลอกมา แล้ว redeploy จากนั้นกด Verify ใน Search Console
3. ใน Search Console เปิดเมนู **Sitemaps** แล้วส่ง `sitemap-index.xml`
4. **Bing Webmaster Tools:** ไปที่ https://www.bing.com/webmasters แล้ว import จาก Google Search Console ได้เลย หรือใช้ตัวแปร `PUBLIC_BING_SITE_VERIFICATION` แบบเดียวกับข้อ 2

## แหล่งข้อมูลสด

- ค่าเงิน: [ExchangeRate-API](https://www.exchangerate-api.com) (ฟรี ต้องแสดงเครดิต ซึ่งแสดงไว้แล้ว)
- อากาศและค่าฝุ่น: [Open-Meteo](https://open-meteo.com) (ฟรี ไม่ต้องใช้ key)

ทั้งหมดเรียกจากเบราว์เซอร์ของผู้ใช้และ cache ไว้ใน localStorage จึงไม่ต้องมีเซิร์ฟเวอร์

## เอกสารอื่น

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): สถาปัตยกรรมและแนวทาง UX/UI ระยะยาว
- `scripts/make-images.py`: สร้างไอคอน PWA และรูปสำหรับแชร์ (`python scripts/make-images.py public`)
