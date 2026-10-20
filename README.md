# All About Thailand

เว็บไซต์คู่มือและข่าวสารเกี่ยวกับประเทศไทยสำหรับชาวต่างชาติ (ภาษาอังกฤษ) สร้างด้วย [Astro](https://astro.build) และ deploy บน Netlify

## สิ่งที่มีในเว็บ

- **11 ภาษา:** EN, NL, DE, SV, FI, NO, FR, DA, TH, ZH, RU อยู่ที่ `/<lang>/` โดย `/` จะส่งผู้ใช้ไปตามภาษาของเบราว์เซอร์ (`public/_redirects`) และจำภาษาที่เลือกไว้ด้วย cookie `nf_lang`
- **มุมข่าว:** ข่าวเด่นพร้อมรูปบนหน้าแรก และหน้า `/<lang>/news/` ที่มีตัวกรองหมวดและ RSS ต่อภาษา
- **คู่มือ 11 เรื่อง, 6 ภูมิภาค, ปฏิทินวันหยุด 2026–2027**
- **ของจำเป็น:** เบอร์ฉุกเฉิน, ตัวแปลงค่าเงิน, ยื่นให้คนขับดู, วลีไทยพร้อมเสียง ใช้ได้แบบออฟไลน์ (PWA)
- **ค้นหา:** Pagefind แยก index ตามภาษา
- **SEO:** sitemap พร้อม hreflang, canonical, Open Graph, JSON-LD
- **ฟอร์มแจ้งแก้ไข:** Netlify Forms

## โครงสร้างไฟล์หลัก

| ที่อยู่ | หน้าที่ |
|---|---|
| `src/i18n/<lang>.ts` | ข้อความหน้าเว็บของแต่ละภาษา (`en.ts` เป็นต้นแบบ) |
| `src/content/guides/<lang>/` | คู่มือ (ไฟล์อังกฤษเก็บแหล่งอ้างอิงและวันที่ตรวจสอบ) |
| `src/content/news/<lang>/` | ข่าว (ดู [docs/NEWS-WORKFLOW.md](docs/NEWS-WORKFLOW.md)) |
| `src/data/` | วันหยุด ภูมิภาค วลี เบอร์ฉุกเฉิน |
| `brand/` | ไฟล์โลโก้ต้นฉบับ (`python scripts/make-images.py` สร้างไอคอนและรูปแชร์) |

## พัฒนาในเครื่อง

```bash
npm install
npm run dev
```

`npm run build` จะสร้างเว็บใน `dist/` พร้อม search index ส่วน `npm run preview` ใช้เปิดดูผลลัพธ์

## เพิ่มเนื้อหา

- **ข่าวใหม่:** ส่งให้ Claude ในแชท ตามขั้นตอนใน [docs/NEWS-WORKFLOW.md](docs/NEWS-WORKFLOW.md)
- **คู่มือใหม่:** สร้าง `src/content/guides/en/<slug>.md` แล้วสร้างไฟล์แปลชื่อเดียวกันในโฟลเดอร์ภาษาอื่น อัปเดต `lastChecked` ทุกครั้งที่ตรวจซ้ำ
- **วันหยุด:** แก้วันที่ที่ `src/data/calendar.ts` และชื่อวันหยุดที่ `calendar.names` ในไฟล์ภาษา

push ขึ้น `main` แล้ว Netlify จะ build และเผยแพร่ให้อัตโนมัติ

## เชื่อม Netlify (ทำครั้งเดียว)

1. ไปที่ https://app.netlify.com แล้วเลือก **Add new site → Import an existing project → GitHub → `allaboutthailand`**
2. ค่าการ build จะอ่านจาก `netlify.toml` เอง (`npm run build`, publish `dist`) จากนั้นกด **Deploy**
3. ไปที่ **Site configuration → Change site name** แล้วตั้งชื่อเป็น `allaboutthailand` (ถ้ามีคนใช้ชื่อนี้แล้ว เว็บจะใช้ URL ที่ Netlify ตั้งให้เองโดยอัตโนมัติ)
4. ไปที่ **Forms → Enable form detection** แล้วกด **Trigger deploy** อีกครั้ง ฟอร์มแจ้งแก้ไขจึงจะเริ่มเก็บข้อมูล
5. (ถ้ามีโดเมนของตัวเอง) ตั้งค่าที่ **Domain management** ได้เลย ระบบจะใช้โดเมนนั้นใน sitemap และ canonical ให้อัตโนมัติ

## ส่งเว็บเข้า Search Engine

1. **Google Search Console:** ไปที่ https://search.google.com/search-console แล้วเพิ่ม URL prefix ของเว็บ เลือกยืนยันแบบ **HTML tag** และคัดลอกค่าใน `content="..."` มา
2. ใน Netlify ไปที่ **Site configuration → Environment variables** เพิ่ม `PUBLIC_GOOGLE_SITE_VERIFICATION` = ค่าที่คัดลอกมา แล้ว redeploy จากนั้นกด Verify ใน Search Console
3. ใน Search Console เปิดเมนู **Sitemaps** แล้วส่ง `sitemap-index.xml` (มีทุกภาษาและ hreflang อยู่แล้ว)
4. **Bing Webmaster Tools:** ไปที่ https://www.bing.com/webmasters แล้ว import จาก Google Search Console ได้เลย หรือใช้ตัวแปร `PUBLIC_BING_SITE_VERIFICATION` แบบเดียวกับข้อ 2

## แหล่งข้อมูลสด

- ค่าเงิน: [ExchangeRate-API](https://www.exchangerate-api.com) (ฟรี ต้องแสดงเครดิต ซึ่งแสดงไว้แล้ว)
- อากาศและค่าฝุ่น: [Open-Meteo](https://open-meteo.com) (ฟรี ไม่ต้องใช้ key)

ทั้งหมดเรียกจากเบราว์เซอร์ของผู้ใช้และ cache ไว้ใน localStorage จึงไม่ต้องมีเซิร์ฟเวอร์

## เอกสารอื่น

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): สถาปัตยกรรมและแนวทาง UX/UI ระยะยาว
- `scripts/make-images.py`: สร้างไอคอน PWA และรูปสำหรับแชร์ (`python scripts/make-images.py public`)
