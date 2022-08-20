# 6310110487 ศุภรดา นนทศรี sec 02

หน้าจอเริ่มต้น 
=============
ตัวอักษรจะสลับตำแหน่งกัน เป็นเพราะมีการใช้ loadash lib

![](https://imgur.com/Zj1Vn3d.png)

เมื่อเรียงตัวอักษรถูก
=============
เมื่อเรียงคำถูกต้องจะมีข้อความแสดงว่า congratulationsเกิดขึ้น

![](https://imgur.com/4TtCbWn.png)

เมื่อเรียงตัวอักษรผิด 
=============
แต่ถ้าหากเรียงตัวอักษรผิด ข้อความที่ active ไว้จะหายไป พร้อมกับแสดงข้อความให้ลองใหม่อีกครั้ง

![](https://imgur.com/4qYChml.png)

-------------

เป็นการเรียงคำศัพท์ให้ถูกต้อง เมื่อเรียงคำถูกต้องจะมีข้อความแสดงว่า congratulationsเกิดขึ้น
พร้อมข้อความสำเร็จ และจะมีปุ่ม reset ไว้สำหรับ reset ค่า หรือเริ่มเกมส์ใหม่, 
แต่ถ้าหากเรียงตัวอักษรผิด ข้อความที่ active ไว้จะหายไป พร้อมกับแสดงข้อความให้ลองใหม่อีกครั้ง

ส่วนของ App.js จะ import WordCard โดยจะส่ง props value คือ "hello" ในส่วนของ WordCard Component จะสร้าง state ไว้เก็บค่าจากฟังก์ชัน prepareStateFromWord โดยจะส่ง prop value ไป 
และจะ return ค่ากลับมา จากนั้นจะนำค่าที่ได้มา map (state.chars) โดยจะส่งค่าไปยัง CharacterCard Component อีกทีนึง โดย prop ที่ส่งไปจะมี 
value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}

ในส่วนถัดไปจะสร้างปุ่มเพื่อ reset ค่า โดยจะติดตั้ง react-icon โดยจะใช้คำสั่ง 
npm install react-icons --save ถ้า state.completed เป็น true จะให้แสดงปุ่ม reset 
และตัวอักษรจะสลับตำแหน่งกัน เป็นเพราะมีการใช้ loadash lib โดยจะเป็นการ random ตำแหน่งอักษร
