// เลือก database ที่จะใช้งาน
use("sample_mflix");


// นับจำนวน movies ที่มีคำว่า "American" อยู่ใน plot
db.movies.find({
  plot: /American/
}).count();


// นับจำนวน movies ที่ plot ลงท้ายด้วยคำว่า street
db.movies.find({
  plot: /street.$/
}).count();


// แสดงตัวอย่าง movie ที่มีคำว่า American ใน plot
db.movies.findOne({
  plot: /American/
});


// แสดงตัวอย่าง movie ที่ plot ลงท้ายด้วย street
db.movies.findOne({
  plot: /street.$/
});