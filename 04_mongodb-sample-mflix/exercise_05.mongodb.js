// เลือก database ที่จะใช้งาน
use("sample_mflix");


// หา 5 movies ที่ runtime มากที่สุด
db.movies.find({})
.sort({ runtime: -1 })
.limit(5);


// หา 5 movies ที่ runtime น้อยกว่า 60 นาที และยาวที่สุด
db.movies.find({
  runtime: { $lt: 60 }
})
.sort({ runtime: -1 })
.limit(5);


// หา 3 movies ที่ออกฉายระหว่างปี 1955 - 1965
db.movies.find({
  year: { $gte: 1955, $lte: 1965 }
})
.limit(3);


// นับจำนวน movies ที่ออกฉายระหว่างปี 1990 - 2000
db.movies.find({
  year: { $gte: 1990, $lte: 2000 }
}).count();

/*ถ้ารันหน้านี้จะได้คำตอบแค่ ข้อสุดท้ายที่นับจำนวน movies
ถ้าอยากเห็น result ข้ออื่นๆให้ปิด comment ข้อที่ไม่ต้องการก่อน
หรือจะเอาโค้ดไปลอง run ในไฟล์ query ดูก็ได้ */