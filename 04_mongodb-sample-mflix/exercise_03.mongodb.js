// เลือก database ที่จะใช้งาน
use("sample_mflix");


// นับจำนวน theaters ที่อยู่ในรัฐ AL
db.theaters.find({
  "location.address.state": "AL"
}).count();


// นับจำนวน theaters ที่อยู่ในเมือง La Quinta
db.theaters.find({
  "location.address.city": "La Quinta"
}).count();


// แสดงตัวอย่าง theater ที่อยู่ในรัฐ AL
db.theaters.findOne({
  "location.address.state": "AL"
});


// แสดงตัวอย่าง theater ที่อยู่ในเมือง La Quinta
db.theaters.findOne({
  "location.address.city": "La Quinta"
});