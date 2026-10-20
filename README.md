# All About Thailand

เว็บไซต์รวบรวมข้อมูลสำคัญเกี่ยวกับประเทศไทยสำหรับชาวต่างชาติ: วีซ่า การเดินทาง การใช้ชีวิต วัฒนธรรม และข่าวสาร

> สถานะ: ร่างหน้าแรก (Draft v0.1) — ข่าว อัตราแลกเปลี่ยน และสภาพอากาศในหน้าเป็นข้อมูลตัวอย่าง

## โครงสร้าง

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าแรก (HTML + CSS ในไฟล์เดียว ไม่ต้อง build) |
| `404.html` | หน้า not found ที่ Netlify ใช้อัตโนมัติ |
| `netlify.toml` | ตั้งค่า deploy และ security headers |
| `favicon.svg`, `robots.txt` | ไอคอนและการตั้งค่า search engine |

## Deploy บน Netlify

1. เข้า https://app.netlify.com → **Add new site → Import an existing project**
2. เลือก **GitHub** แล้วเลือก repository `allaboutthailand`
3. Build command: เว้นว่าง · Publish directory: `.` (ค่าจาก `netlify.toml` จะถูกใช้อัตโนมัติ)
4. กด **Deploy** — ทุกครั้งที่ push ขึ้น `main` เว็บจะอัปเดตเอง

## เปิดดูในเครื่อง

เปิด `index.html` ในเบราว์เซอร์ได้ทันที
