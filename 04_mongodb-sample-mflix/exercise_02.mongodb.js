// เลือก database ที่จะใช้งาน
use("sample_mflix");


// แสดงตัวอย่าง movie ที่ type = "movie" และ rated = "TV-G"
db.movies.findOne({
  type: "movie",
  rated: "TV-G"
});


// นับจำนวน movie ที่ type = "movie" และ rated = "TV-G"
db.movies.find({
  type: "movie",
  rated: "TV-G"
}).count();