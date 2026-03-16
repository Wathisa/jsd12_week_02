// เลือก database ที่จะใช้งาน
use('sample_mflix');


// ดึงข้อมูลทั้งหมดจาก comments collection
db.comments.find({});


// ดึงข้อมูล user เพียง 1 คน โดยค้นหาจาก _id
db.comments.findOne({
  _id: ObjectId("5a9427648b0beebeb69579f5")
});


// ดึงข้อมูล user เพียง 1 คน โดยค้นหาจาก email
db.comments.findOne({
  email: "john_bishop@fakegmail.com"
});


// ดึงข้อมูล user เพียง 1 คน โดยค้นหาจาก name
db.comments.findOne({
  name: "John Bishop"
});