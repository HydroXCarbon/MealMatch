# MealMatch

Repository URL: [https://github.com/HydroXCarbon/group03_project](https://github.com/HydroXCarbon/group03_project)  
Video URL: [https://drive.google.com/drive/folders/1e2loRHEuuHeTlCxA5bWpYHapORkB6VY8?usp=sharing](https://drive.google.com/drive/folders/1e2loRHEuuHeTlCxA5bWpYHapORkB6VY8?usp=sharing)

## 👥 Member
- **Purin Pongpanich** (ID: 6513135)  
- **Jarupat Chodsitanan** (ID: 6513161)  
- **Nopparuj Ritnatikul** (ID: 6513168)

---

> ⚠️ **หมายเหตุสำคัญ**  
> เนื่องจากระบบใช้ Google Places API และ Rapid API แบบ **Free Plan** อาจมีข้อจำกัดเรื่องจำนวนคำขอ (request) ต่อเดือน เมื่อแตะขีดจำกัดแล้วจะไม่สามารถดึงข้อมูลร้านเพิ่มเติมได้จนกว่าจะถึงเดือนถัดไป  
> ดูรายละเอียดเพิ่มเติม: https://developers.google.com/maps/documentation/places/web-service/place-autocomplete

MealMatch เป็นแอปพลิเคชันช่วยให้คุณค้นหาร้านอาหารได้ง่าย ๆ บนแผนที่ แค่ระบุตำแหน่งปัจจุบันหรือพิมพ์ชื่อย่านที่ต้องการ แอปจะแสดงหมุดร้านต่าง ๆ พร้อมข้อมูลเบื้องต้น เช่น ประเภทอาหาร ราคาเฉลี่ย คะแนนรีวิว เป็นต้น คุณจึงสามารถเปิดดูร้านต่าง ๆ ในพื้นที่เดียวกันได้ทันที โดยไม่ต้องสลับไปมาในหลายแอป

---

## 🔍 ฟีเจอร์เด่น

- **Signup / Login**  
  ลงทะเบียนและเข้าสู่ระบบด้วยบัญชีผู้ใช้ของคุณ
- **ค้นหาร้านอาหารรอบตัว**  
  - ใช้ตำแหน่งปัจจุบัน (GPS)  
  - กดเลือกบนแผนที่  
  - พิมพ์ค้นหาชื่อย่านหรือสถานที่
- **แสดงข้อมูลร้านอาหาร เช่น**  
  - ประเภทอาหาร  
  - ราคาเฉลี่ย  
  - คะแนนรีวิว
- **กรองร้านอาหารตามคะแนน (Rating)**
- **กด “ถูกใจ” (Like)**  
  บันทึกร้านที่ชอบใน “รายการโปรด” เพื่อกลับมาดูภายหลัง

---

## 🏗 สถาปัตยกรรมระบบ

ระบบของ MealMatch แบ่งออกเป็น 3 ส่วนหลักตามแนวทาง MVC

1. **Model**  
   - เก็บข้อมูลผู้ใช้  
   - ข้อมูลร้านอาหาร  
   - รายการร้านโปรด

2. **View**  
   - แสดงผลบนหน้าจอด้วย  
     - แผนที่ (Map)  
     - การ์ดร้านอาหาร (Restaurant Cards)  
     - ตัวกรอง (Filters)

3. **Controller**  
   - รับคำสั่งจาก View  
   - ดึงหรืออัปเดตข้อมูลใน Model  
   - ส่งผลลัพธ์กลับมายัง View

---

## การติดตั้ง และใช้งาน

1. โคลนโปรเจกต์
   ```bash
   git clone https://github.com/your-username/MealMatch.git
   cd MealMatch
   ```

---

### การติดตั้ง Backend (Backend ได้ถูก deploy แล้วที่ https://mealmatch-blii.onrender.com)
1. เข้าไปที่โฟลเดอร์ `Backend`:
   ```bash
   cd Backend
   ```

2. ติดตั้ง dependencies:
   ```bash
   npm install
   ```

3. รันเซิร์ฟเวอร์:
   ```bash
   npm start
   ```

---

### การติดตั้ง Frontend (Frontend ได้ถูก deploy แล้วที่ https://mealmatch-1-7yhf.onrender.com)
1. เข้าไปที่โฟลเดอร์ `Frontend`:
   ```bash
   cd Frontend
   ```

2. ติดตั้ง dependencies:
   ```bash
   npm install
   ```

3. แก้ไขไฟล์ `axiosConfig.js` เพื่อชี้ไปที่ Backend URL:
   - เปิดไฟล์ `Frontend/src/axiosConfig/axiosConfig.js`
   - ตรวจสอบให้แน่ใจว่า `baseURL` ถูกตั้งค่าเป็น:
     ```javascript
     baseURL: "https://mealmatch-blii.onrender.com",
     ```

4. รันเซิร์ฟเวอร์:
   ```bash
   npm run dev
   ```

---

### หมายเหตุ
- หากต้องการแก้ไข URL ของ Backend ใน Frontend สามารถแก้ไขได้ที่ไฟล์:
  ```javascript
  Frontend/src/axiosConfig/axiosConfig.js
  ```
- หากต้องการ deploy ใหม่ ให้ทำตามขั้นตอนการ build และ deploy สำหรับ Backend และ Frontend ตามที่กำหนดในเอกสารของแพลตฟอร์มที่ใช้งาน (เช่น Render, Vercel, หรือ Netlify)