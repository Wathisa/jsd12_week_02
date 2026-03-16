// เลือก database ที่จะใช้งาน
use('sample_mflix');

// Aggregation Example
// Retrieve the five most-recent films directed by Christopher Nolan

// สรุป pipeline
// Stage 1 เลือกหนังที่ Christopher Nolan เป็นผู้กำกับ
// Stage 2 เรียงจากปีใหม่ → เก่า
// Stage 3 เอาแค่ 5 เรื่องแรก
// Stage 4 แสดงเฉพาะ title และ year

db.movies.aggregate([

  // Stage 1: $match
  // ทำหน้าที่กรองข้อมูล (เหมือน WHERE ใน SQL)
  // เลือกเฉพาะ document ที่ field "directors"
  // มีค่าเป็น "Christopher Nolan"
  // MongoDB สามารถค้นหาใน array ได้อัตโนมัติ
  { 
    $match: { directors: "Christopher Nolan" } 
  },

  // Stage 2: $sort
  // เรียงข้อมูลตาม field "year"
  // -1 หมายถึงเรียงจากมาก → น้อย
  // ดังนั้นหนังปีใหม่สุดจะขึ้นก่อน
  // เหมือน SQL: ORDER BY year DESC
  { 
    $sort: { year: -1 } 
  },

  // Stage 3: $limit
  // จำกัดจำนวนผลลัพธ์
  // เอาเฉพาะ 5 document แรกหลังจาก sort แล้ว
  // ซึ่งก็คือหนังล่าสุด 5 เรื่อง
  // เหมือน SQL: LIMIT 5
  { 
    $limit: 5 
  },

  // Stage 4: $project
  // เลือกเฉพาะ field ที่ต้องการแสดง
  // 1 = แสดง field นี้
  // 0 = ไม่แสดง field นี้
  // _id:0 คือไม่ต้องแสดง MongoDB id
  // title:1 แสดงชื่อหนัง
  // year:1 แสดงปีที่ออกฉาย
  { 
    $project: { 
      _id: 0, 
      title: 1, 
      year: 1 
    } 
  }

])

////////////////////////////////////////

// Count how many movies were released each year between 2000 - 2010 (inclusive)
// สรุป pipeline
// Stage 1 Filter movies ปี 2000–2010
// Stage 2 Group ตามปี
// Stage 3 นับจำนวนหนังในแต่ละปี
// Stage 4 เรียงปีจากเก่า → ใหม่

db.movies.aggregate([

  // Stage 1: $match
  // กรองข้อมูลก่อน (เหมือน WHERE ใน SQL)
  // เลือกเฉพาะหนังที่ออกฉายระหว่างปี 2000 ถึง 2010
  // $gte = greater than or equal (มากกว่าหรือเท่ากับ)
  // $lte = less than or equal (น้อยกว่าหรือเท่ากับ)
  {
    $match: {
      year: { $gte: 2000, $lte: 2010 }
    }
  },

  // Stage 2: $group
  // ใช้สำหรับ "จัดกลุ่มข้อมูล"
  // _id: "$year" หมายถึงให้ group ตามค่า year
  // หนังที่ปีเดียวกันจะถูกจับรวมอยู่กลุ่มเดียวกัน
  {
    $group: {

      // กำหนด key ของกลุ่ม
      // $year หมายถึงใช้ค่าจาก field year ของ document
      _id: "$year",

      // สร้าง field ใหม่ชื่อ totalMovies
      // $sum: 1 หมายถึงเพิ่มค่า +1 ทุกครั้งที่มี document ในกลุ่มนั้น
      // ผลลัพธ์จึงเป็น "จำนวนหนังในปีนั้น"
      totalMovies: { $sum: 1 }

    }
  },

  // Stage 3: $sort
  // เรียงผลลัพธ์ตามปี
  // _id ตอนนี้ก็คือ year เพราะเรา group ตาม year
  // 1 = เรียงจากน้อย → มาก (2000 → 2010)
  {
    $sort: { _id: 1 }
  }

])

////////////////////////////////////////

// Aggregation Example
// Find the 10 most common genres across the entire dataset
// Stage 1  แตก array genres ออกเป็น document เดี่ยว
// Stage 2  นับจำนวนแต่ละ genre
// Stage 3  เรียงจาก genre ที่พบบ่อยที่สุด
// Stage 4  แสดงแค่ 10 อันดับแรก

db.movies.aggregate([

  // Stage 1: $unwind
  // ใช้สำหรับ "แตก array ออกเป็นหลาย document"
  // ใน dataset นี้ field "genres" เป็น array
  // เช่น ["Action","Adventure","Sci-Fi"]

  // ก่อน unwind
  // 1 document อาจมีหลาย genre

  // หลัง unwind
  // document เดียวจะถูกแยกออกเป็นหลาย document
  // โดยแต่ละ document จะมี genre เพียงค่าเดียว

  // ตัวอย่าง:
  // ก่อน
  // { title: "Movie A", genres: ["Action","Adventure"] }

  // หลัง
  // { title: "Movie A", genres: "Action" }
  // { title: "Movie A", genres: "Adventure" }

  { 
    $unwind: "$genres" 
  },

  // Stage 2: $sortByCount
  // เป็น stage ที่ MongoDB สร้างมาให้เพื่อความสะดวก
  // มันทำ 3 อย่างพร้อมกัน

  // 1. group ตามค่าที่กำหนด
  // 2. นับจำนวนแต่ละกลุ่ม
  // 3. เรียงจากมาก → น้อย

  // ในที่นี้คือ
  // นับว่า genre แต่ละประเภทปรากฏกี่ครั้ง

  // "$genres" หมายถึงใช้ค่าจาก field genres

  // ผลลัพธ์จะมีรูปแบบแบบนี้
  // { _id: "Drama", count: 1500 }
  // { _id: "Comedy", count: 1200 }

  { 
    $sortByCount: "$genres" 
  },

  // Stage 3: $limit
  // เอาเฉพาะ 10 genre ที่พบบ่อยที่สุด
  // เพราะหลังจาก stage ก่อนหน้า
  // ข้อมูลถูกเรียงจากมาก → น้อยแล้ว

  { 
    $limit: 10 
  }

])